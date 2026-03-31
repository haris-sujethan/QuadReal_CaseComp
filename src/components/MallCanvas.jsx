import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import gsap from 'gsap'
import { useTenantIQStore } from '../store/useStore'
import { getUnitVisualConfig, toMonthYear } from '../utils/threeHelpers'
import UnitTooltip from './UnitTooltip'

function MallCanvas({ onResetViewReady }) {
  const mountRef = useRef(null)
  const meshMapRef = useRef(new Map())
  const labelMapRef = useRef(new Map())
  const controlsRef = useRef(null)
  const cameraRef = useRef(null)
  const defaultViewRef = useRef({
    position: { x: 100, y: 100, z: 100 },
    target: { x: 0, y: 0, z: 0 },
    zoom: 1.6,
  })
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null })

  const selectedUnitId = useTenantIQStore((state) => state.selectedUnit?.id ?? null)
  const setSelectedUnit = useTenantIQStore((state) => state.setSelectedUnit)
  const activeFilters = useTenantIQStore((state) => state.activeFilters)
  const units = useTenantIQStore((state) => state.units)
  const selectedLayoutId = useTenantIQStore((state) => state.selectedLayoutId)
  const layoutConfig = useTenantIQStore((state) => state.layoutConfig)
  const thirdPartyUnits = useTenantIQStore((state) => state.thirdPartyUnits)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const scene = new THREE.Scene()
    scene.background = null

    const width = mount.clientWidth
    const height = mount.clientHeight
    const aspect = width / height
    const frustum = layoutConfig.frustumSize
    const camera = new THREE.OrthographicCamera(
      -frustum * aspect,
      frustum * aspect,
      frustum,
      -frustum,
      0.1,
      300,
    )
    camera.position.set(100, 100, 100)
    camera.zoom = 1.6
    camera.updateProjectionMatrix()
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(0xffffff, 0)
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const labelRenderer = new CSS2DRenderer()
    labelRenderer.setSize(width, height)
    labelRenderer.domElement.style.position = 'absolute'
    labelRenderer.domElement.style.top = '0'
    labelRenderer.domElement.style.pointerEvents = 'none'
    mount.appendChild(labelRenderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableRotate = false
    controls.enableDamping = true
    controls.minZoom = 0.65
    controls.maxZoom = 1.7
    controls.maxPolarAngle = Math.PI / 2
    controls.minPolarAngle = 0
    controls.target.set(0, 0, 0)
    controlsRef.current = controls

    const ambient = new THREE.AmbientLight('#ffffff', 1.2)
    const directional = new THREE.DirectionalLight('#ffffff', 0.8)
    directional.position.set(20, 50, 20)
    scene.add(ambient, directional)

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(layoutConfig.floorPlaneSize.w, layoutConfig.floorPlaneSize.d),
      new THREE.MeshStandardMaterial({ color: '#D1D5DB', roughness: 0.95 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.7
    scene.add(ground)

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const clickTargets = []
    const towerMeshes = []

    const createBuildingTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 256
      canvas.height = 512
      const ctx = canvas.getContext('2d')
      if (!ctx) return null
      ctx.fillStyle = '#4A6080'
      ctx.fillRect(0, 0, 256, 512)

      const numFloors = 8
      const floorHeight = 512 / numFloors
      ctx.strokeStyle = '#3A5070'
      ctx.lineWidth = 2
      for (let f = 0; f < numFloors; f += 1) {
        ctx.beginPath()
        ctx.moveTo(0, f * floorHeight)
        ctx.lineTo(256, f * floorHeight)
        ctx.stroke()
      }

      const cols = 5
      const rows = numFloors
      const winW = 28
      const winH = 20
      const colSpacing = 256 / cols
      const rowSpacing = floorHeight

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const x = c * colSpacing + (colSpacing - winW) / 2
          const y = r * rowSpacing + (rowSpacing - winH) / 2
          const lit = Math.random() > 0.3
          ctx.fillStyle = lit ? '#C8E0FF' : '#2A3A50'
          ctx.fillRect(x, y, winW, winH)
          ctx.strokeStyle = '#3A5070'
          ctx.lineWidth = 1
          ctx.strokeRect(x, y, winW, winH)
        }
      }

      return new THREE.CanvasTexture(canvas)
    }

    const createParkingTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 512
      const ctx = canvas.getContext('2d')
      if (!ctx) return null
      ctx.fillStyle = '#B8C4CE'
      ctx.fillRect(0, 0, 512, 512)
      ctx.strokeStyle = '#A0ADB8'
      ctx.lineWidth = 1.5
      for (let x = 0; x < 512; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, 512)
        ctx.stroke()
      }
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, 256)
      ctx.lineTo(512, 256)
      ctx.stroke()
      return new THREE.CanvasTexture(canvas)
    }

    units.forEach((unit) => {
      const geometry = new THREE.BoxGeometry(unit.width, unit.height, unit.depth)
      const material = new THREE.MeshStandardMaterial({
        color: '#9CA3AF',
        roughness: 0.6,
        metalness: 0.1,
        transparent: true,
        opacity: 1,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(unit.x, unit.height / 2, unit.z)
      mesh.userData = { unitId: unit.id }
      scene.add(mesh)

      const glow = new THREE.Mesh(
        new THREE.BoxGeometry(unit.width + 0.28, unit.height + 0.08, unit.depth + 0.28),
        new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.2 }),
      )
      glow.position.set(unit.x, unit.height / 2 - 0.04, unit.z)
      glow.visible = false
      scene.add(glow)

      meshMapRef.current.set(unit.id, { mesh, glow, baseY: unit.height / 2, interactive: unit.interactive !== false })
      if (unit.interactive !== false) clickTargets.push(mesh)

      const labelEl = document.createElement('div')
      labelEl.className = 'unit-label'
      labelEl.textContent = unit.tenantName
      const labelObject = new CSS2DObject(labelEl)
      labelObject.position.set(unit.x, unit.height + 0.4, unit.z)
      scene.add(labelObject)
      labelMapRef.current.set(unit.id, labelEl)
    })

    if (selectedLayoutId === 'bower') {
      const buildingTexture = createBuildingTexture()
      const towerMaterials = [
        new THREE.MeshStandardMaterial({ color: 0x3a5070 }),
        new THREE.MeshStandardMaterial({ color: 0x3a5070 }),
        new THREE.MeshStandardMaterial({ color: 0x4a6080 }),
        new THREE.MeshStandardMaterial({ color: 0x2a3a50 }),
        new THREE.MeshStandardMaterial({ map: buildingTexture ?? undefined, color: 0x4a6080 }),
        new THREE.MeshStandardMaterial({ color: 0x3a5070 }),
      ]
      const tower = new THREE.Mesh(new THREE.BoxGeometry(16, 12, 10), towerMaterials)
      tower.position.set(0, 7.19, -3)
      scene.add(tower)
      towerMeshes.push(tower)

      const roof = new THREE.Mesh(
        new THREE.BoxGeometry(16.6, 0.3, 10.6),
        new THREE.MeshStandardMaterial({ color: 0x2a3a50 }),
      )
      roof.position.set(0, 13.34, -3)
      scene.add(roof)
      towerMeshes.push(roof)
    }

    if (selectedLayoutId === 'willowbrook') {
      const leftInner = -17
      const rightInner = 17
      const backInner = -10
      const frontOpen = 6
      const innerWidth = rightInner - leftInner
      const innerDepth = frontOpen - backInner
      const centreX = (leftInner + rightInner) / 2
      const centreZ = (backInner + frontOpen) / 2
      const parkingTexture = createParkingTexture()
      const parking = new THREE.Mesh(
        new THREE.PlaneGeometry(innerWidth, innerDepth),
        new THREE.MeshStandardMaterial({ color: 0xb8c4ce, roughness: 0.95, map: parkingTexture ?? undefined }),
      )
      parking.rotation.x = -Math.PI / 2
      parking.position.set(centreX, 0.01, centreZ)
      scene.add(parking)

      thirdPartyUnits.forEach((unit) => {
        const outerGeo = new THREE.BoxGeometry(unit.width + 0.1, unit.height + 0.1, unit.depth + 0.1)
        const outerEdges = new THREE.EdgesGeometry(outerGeo)
        const outerMat = new THREE.LineBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.4 })
        const outerLines = new THREE.LineSegments(outerEdges, outerMat)
        outerLines.position.set(unit.x, unit.height / 2, unit.z)
        scene.add(outerLines)

        const innerEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(unit.width, unit.height, unit.depth))
        const innerMat = new THREE.LineBasicMaterial({ color: 0x475569 })
        const innerLines = new THREE.LineSegments(innerEdges, innerMat)
        innerLines.position.set(unit.x, unit.height / 2, unit.z)
        scene.add(innerLines)

        const fillMesh = new THREE.Mesh(
          new THREE.BoxGeometry(unit.width, unit.height, unit.depth),
          new THREE.MeshStandardMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.12 }),
        )
        fillMesh.position.set(unit.x, unit.height / 2, unit.z)
        scene.add(fillMesh)

        const labelEl = document.createElement('div')
        labelEl.className = 'unit-label'
        labelEl.textContent = unit.label
        labelEl.style.fontSize = '11px'
        labelEl.style.color = '#334155'
        labelEl.style.fontStyle = 'italic'
        labelEl.style.fontWeight = '600'
        labelEl.style.background = 'rgba(255,255,255,0.7)'
        labelEl.style.padding = '2px 6px'
        labelEl.style.borderRadius = '4px'
        labelEl.style.border = '1px solid #CBD5E1'
        const labelObj = new CSS2DObject(labelEl)
        labelObj.position.set(unit.x, unit.height + 0.35, unit.z)
        scene.add(labelObj)
      })
    }

    const unitBoundingBox = new THREE.Box3()
    clickTargets.forEach((mesh) => unitBoundingBox.expandByObject(mesh))
    controls.target.set(layoutConfig.cameraTarget.x, layoutConfig.cameraTarget.y, layoutConfig.cameraTarget.z)
    camera.lookAt(layoutConfig.cameraTarget.x, layoutConfig.cameraTarget.y, layoutConfig.cameraTarget.z)
    defaultViewRef.current = {
      position: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
      target: { x: layoutConfig.cameraTarget.x, y: layoutConfig.cameraTarget.y, z: layoutConfig.cameraTarget.z },
      zoom: camera.zoom,
    }

    const animate = () => {
      controls.update()
      renderer.render(scene, camera)
      labelRenderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    const getHoveredMesh = (event) => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
      const intersections = raycaster.intersectObjects(clickTargets)
      return intersections[0]?.object ?? null
    }

    const onPointerMove = (event) => {
      const hoveredMesh = getHoveredMesh(event)
      renderer.domElement.style.cursor = hoveredMesh ? 'pointer' : 'default'
      clickTargets.forEach((mesh) => {
        gsap.to(mesh.scale, {
          x: hoveredMesh === mesh ? 1.05 : 1,
          y: hoveredMesh === mesh ? 1.05 : 1,
          z: hoveredMesh === mesh ? 1.05 : 1,
          duration: 0.14,
        })
      })

      if (hoveredMesh) {
        const unitId = hoveredMesh.userData.unitId
        const tenant = units.find((u) => u.id === unitId)
        if (!tenant) return
        setTooltip({
          visible: true,
          x: event.clientX + 12,
          y: event.clientY + 12,
          content: {
            tenantName: tenant.tenantName,
            sqFt: tenant.sqFt,
            leaseExpiry: toMonthYear(tenant.leaseExpiry),
          },
        })
      } else {
        const rect = renderer.domElement.getBoundingClientRect()
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
        raycaster.setFromCamera(pointer, camera)
        const towerHit = raycaster.intersectObjects(towerMeshes)[0]?.object
        if (towerHit) {
          renderer.domElement.style.cursor = 'default'
          setTooltip({
            visible: true,
            x: event.clientX + 12,
            y: event.clientY + 12,
            content: {
              customMessage: 'Residential floors — not part of retail portfolio',
            },
          })
          return
        }
        setTooltip((current) => ({ ...current, visible: false }))
      }
    }

    const onClick = (event) => {
      const clickedMesh = getHoveredMesh(event)
      setSelectedUnit(clickedMesh ? clickedMesh.userData.unitId : null)
    }

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      const a = w / h
      camera.left = -frustum * a
      camera.right = frustum * a
      camera.top = frustum
      camera.bottom = -frustum
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      labelRenderer.setSize(w, h)
    }

    renderer.domElement.addEventListener('pointermove', onPointerMove)
    renderer.domElement.addEventListener('click', onClick)
    window.addEventListener('resize', onResize)

    return () => {
      renderer.domElement.style.cursor = 'default'
      renderer.domElement.removeEventListener('pointermove', onPointerMove)
      renderer.domElement.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      controls.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
      mount.removeChild(labelRenderer.domElement)
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose?.()
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.())
          else obj.material.dispose?.()
        }
      })
      meshMapRef.current.clear()
      labelMapRef.current.clear()
    }
  }, [setSelectedUnit, units, selectedLayoutId, layoutConfig, thirdPartyUnits])

  useEffect(() => {
    units.forEach((unit) => {
      const refs = meshMapRef.current.get(unit.id)
      if (!refs) return
      if (refs.interactive === false) return
      const visual = getUnitVisualConfig(unit, selectedUnitId === unit.id, activeFilters)
      const meshMat = refs.mesh.material
      meshMat.color.set(visual.color)
      const meshOp = visual.meshOpacity ?? 1
      meshMat.transparent = meshOp < 1
      meshMat.opacity = meshOp
      meshMat.depthWrite = meshOp >= 1
      refs.glow.visible = Boolean(visual.glowColor)
      if (visual.glowColor) refs.glow.material.color.set(visual.glowColor)
      const labelElement = labelMapRef.current.get(unit.id)
      if (labelElement) {
        labelElement.style.opacity = `${visual.labelOpacity}`
        if (visual.labelMuted === true) {
          labelElement.style.color = '#9CA3AF'
          labelElement.style.fontWeight = '600'
          labelElement.style.textShadow = 'none'
        } else {
          labelElement.style.color = '#ffffff'
          labelElement.style.fontWeight = '700'
          labelElement.style.textShadow = '0px 1px 3px rgba(0, 0, 0, 0.5)'
        }
      }

      const targetY = selectedUnitId === unit.id ? refs.baseY + 0.8 : refs.baseY
      gsap.to(refs.mesh.position, { y: targetY, duration: 0.3, ease: 'power2.out' })
      gsap.to(refs.glow.position, { y: targetY - 0.04, duration: 0.3, ease: 'power2.out' })
    })
  }, [units, activeFilters, selectedUnitId])

  const resetCamera = () => {
    if (!cameraRef.current || !controlsRef.current) return
    const defaults = defaultViewRef.current
    gsap.to(cameraRef.current.position, {
      x: defaults.position.x,
      y: defaults.position.y,
      z: defaults.position.z,
      duration: 0.8,
      onUpdate: () => {
        cameraRef.current.lookAt(defaults.target.x, defaults.target.y, defaults.target.z)
      },
    })
    gsap.to(controlsRef.current.target, {
      x: defaults.target.x,
      y: defaults.target.y,
      z: defaults.target.z,
      duration: 0.8,
    })
    gsap.to(cameraRef.current, {
      zoom: defaults.zoom,
      duration: 0.8,
      onUpdate: () => cameraRef.current.updateProjectionMatrix(),
    })
  }

  useEffect(() => {
    if (typeof onResetViewReady === 'function') onResetViewReady(resetCamera)
  }, [onResetViewReady])

  return (
    <div className="canvas-wrap">
      <div ref={mountRef} className="canvas-mount" />
      <UnitTooltip {...tooltip} />
    </div>
  )
}

export default MallCanvas
