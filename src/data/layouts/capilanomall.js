import floorplan from '../floorplan.json'
import { tenantByUnit } from '../tenants'

export const units = floorplan.units.map((unit) => ({
  ...unit,
  ...tenantByUnit[unit.id],
  interactive: true,
}))

export const layoutConfig = {
  id: 'capilano',
  name: 'Capilano Mall',
  gla: '620,000 sq ft',
  floorPlaneSize: { w: 48, d: 30 },
  cameraTarget: { x: 0, y: 0, z: 0 },
  frustumSize: 24,
}

export const thirdPartyUnits = []
