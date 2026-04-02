/** Must match tower BoxGeometry in MallCanvas (full-building footprint). */
export const BOWER_TOWER_WIDTH = 16
export const BOWER_TOWER_DEPTH = 10
/** Tower centre Z — same as Mesh position.z for the Bower tower. */
export const BOWER_TOWER_CENTER_Z = -3

const BOWER_RETAIL_DEPTH = 3
export const BOWER_RETAIL_HEIGHT = 1.2

/** Storefront strip: back face flush with tower front (street façade). */
const bowerRetailCenterZ = BOWER_TOWER_CENTER_Z + BOWER_TOWER_DEPTH / 2 - BOWER_RETAIL_DEPTH / 2

/** Relative storefront widths — scaled so the strip spans exactly BOWER_TOWER_WIDTH, edge to edge, no gaps. */
const REL_WIDTHS = [4, 2.5, 4.5, 2.8, 2.5]

const bowerRetailSpecs = [
  {
    id: 'BR01',
    tenantName: 'Pharmasave',
    sqFt: 2800,
    category: 'Health & Wellness',
    leaseExpiry: '2026-03',
    status: 'expiring',
    currentRent: 52,
    signingDate: 'Mar 2021',
    footTrafficIndex: 94,
    anchorProximity: 'Street-facing anchor',
    performanceNote: 'Below average foot traffic, lease ending soon',
  },
  {
    id: 'BR02',
    tenantName: 'Waves Coffee',
    sqFt: 950,
    category: 'Food & Beverage',
    leaseExpiry: '2025-08',
    status: 'expiring',
    currentRent: 68,
    signingDate: 'Aug 2020',
    footTrafficIndex: 88,
    anchorProximity: 'Adjacent to Pharmasave',
    performanceNote: 'Low sq ft revenue vs food category average',
  },
  {
    id: 'BR03',
    tenantName: 'State & Main',
    sqFt: 3200,
    category: 'Food & Beverage',
    leaseExpiry: '2028-11',
    status: 'stable',
    currentRent: 61,
    signingDate: 'Nov 2018',
    footTrafficIndex: 112,
    anchorProximity: 'Corner unit',
    performanceNote: 'Top performer, strong dinner traffic',
  },
  {
    id: 'BR04',
    tenantName: 'Kumon',
    sqFt: 1100,
    category: 'Education',
    leaseExpiry: '2026-05',
    status: 'expiring',
    currentRent: 44,
    signingDate: 'May 2021',
    footTrafficIndex: 61,
    anchorProximity: 'Mid-strip',
    performanceNote: 'Weak traffic, education category declining',
  },
  {
    id: 'BR05',
    tenantName: 'Nail Studio',
    sqFt: 900,
    category: 'Beauty',
    leaseExpiry: '2027-01',
    status: 'underperforming',
    currentRent: 48,
    signingDate: 'Jan 2022',
    footTrafficIndex: 54,
    anchorProximity: 'Mid-strip',
    performanceNote: 'Sales 38% below podium average',
  },
]

function buildBowerRetailUnits() {
  const sumRel = REL_WIDTHS.reduce((a, b) => a + b, 0)
  const scale = BOWER_TOWER_WIDTH / sumRel
  let startX = -BOWER_TOWER_WIDTH / 2
  return bowerRetailSpecs.map((spec, i) => {
    const width = REL_WIDTHS[i] * scale
    const x = startX + width / 2
    startX += width
    return {
      ...spec,
      x,
      z: bowerRetailCenterZ,
      width,
      depth: BOWER_RETAIL_DEPTH,
      height: BOWER_RETAIL_HEIGHT,
      interactive: true,
    }
  })
}

export const units = buildBowerRetailUnits()

export const layoutConfig = {
  id: 'bower',
  name: 'Residential Retail Example',
  gla: '32,000 sq ft',
  floorPlaneSize: { w: 36, d: 24 },
  cameraTarget: { x: 0, y: 0, z: 0 },
  frustumSize: 22,
}

export const thirdPartyUnits = []
