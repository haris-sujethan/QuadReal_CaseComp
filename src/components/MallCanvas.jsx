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

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const scene = new THREE.Scene()
    scene.background = null

    const width = mount.clientWidth
    const height = mount.clientHeight
    const aspect = width / height
    /** Tighter default viewport to fill ~70-80% of canvas. */
    const frustum = 24
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
      new THREE.PlaneGeometry(48, 30),
      new THREE.MeshStandardMaterial({ color: '#D1D5DB', roughness: 0.95 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.7
    scene.add(ground)

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const clickTargets = []

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

      meshMapRef.current.set(unit.id, { mesh, glow, baseY: unit.height / 2 })
      clickTargets.push(mesh)

      const labelEl = document.createElement('div')
      labelEl.className = 'unit-label'
      labelEl.textContent = unit.tenantName
      const labelObject = new CSS2DObject(labelEl)
      labelObject.position.set(unit.x, unit.height + 0.4, unit.z)
      scene.add(labelObject)
      labelMapRef.current.set(unit.id, labelEl)
    })

    const unitBoundingBox = new THREE.Box3()
    clickTargets.forEach((mesh) => unitBoundingBox.expandByObject(mesh))
    const unitCenter = new THREE.Vector3()
    unitBoundingBox.getCenter(unitCenter)
    controls.target.set(unitCenter.x, 0, unitCenter.z)
    camera.lookAt(unitCenter.x, 0, unitCenter.z)
    defaultViewRef.current = {
      position: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
      target: { x: unitCenter.x, y: 0, z: unitCenter.z },
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
      meshMapRef.current.clear()
      labelMapRef.current.clear()
    }
  }, [setSelectedUnit, units])

  useEffect(() => {
    units.forEach((unit) => {
      const refs = meshMapRef.current.get(unit.id)
      if (!refs) return
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
