/** Expiring Soon map highlight — amber (filter button stays brand blue in UI). */
const EXPIRING_COLOR = '#F59E0B'
const EXPIRING_GLOW_COLOR = '#FDE68A'
const UNDERPERFORMING_COLOR = '#EF4444'
/** Selected / clicked unit — brand blue (unchanged). */
const SELECTED_COLOR = '#6a8bfe'
const SELECTED_GLOW_COLOR = '#b7c8fe'
/** Default unit boxes (no filter active) */
const NEUTRAL_COLOR = '#9CA3AF'
/** Faded: not matching active filter — mesh #C8CDD5 at 50% opacity (see meshOpacity) */
const FADED_MESH_COLOR = '#C8CDD5'

/**
 * @typedef {object} UnitVisualConfig
 * @property {string} color
 * @property {number} labelOpacity 0–1 for HTML label element
 * @property {string | null} glowColor
 * @property {number} meshOpacity 0–1 for MeshStandardMaterial
 * @property {boolean} labelMuted faded state — muted grey label (#9CA3AF), no white/shadow
 */

/** @param {Array<'expiring' | 'underperforming'>} activeFilters */
export function shouldHighlight(tenant, activeFilters) {
  const expiringOn = activeFilters.includes('expiring')
  const underOn = activeFilters.includes('underperforming')
  const expiryTier = getExpiryTier(tenant.leaseExpiry)
  const expiringMatch = expiringOn && (expiryTier === 'under12' || expiryTier === 'under24')
  const underperformingMatch = underOn && tenant.status === 'underperforming'
  if (!expiringOn && !underOn) return true
  return expiringMatch || underperformingMatch
}

/** @param {Array<'expiring' | 'underperforming'>} activeFilters */
export function getUnitVisualConfig(tenant, isSelected, activeFilters) {
  if (isSelected) {
    return {
      color: SELECTED_COLOR,
      labelOpacity: 1,
      glowColor: SELECTED_GLOW_COLOR,
      meshOpacity: 1,
      labelMuted: false,
    }
  }

  const expiryTier = getExpiryTier(tenant.leaseExpiry)
  const expiringOn = activeFilters.includes('expiring')
  const underOn = activeFilters.includes('underperforming')
  const filterActive = expiringOn || underOn
  const highlighted = shouldHighlight(tenant, activeFilters)

  if (!filterActive) {
    return {
      color: NEUTRAL_COLOR,
      labelOpacity: 1,
      glowColor: null,
      meshOpacity: 1,
      labelMuted: false,
    }
  }
  if (!highlighted) {
    return {
      color: FADED_MESH_COLOR,
      labelOpacity: 0.5,
      glowColor: null,
      meshOpacity: 0.5,
      labelMuted: true,
    }
  }
  if (underOn && tenant.status === 'underperforming') {
    return {
      color: UNDERPERFORMING_COLOR,
      labelOpacity: 1,
      glowColor: '#FECACA',
      meshOpacity: 1,
      labelMuted: false,
    }
  }
  if (expiringOn && (expiryTier === 'under12' || expiryTier === 'under24')) {
    return {
      color: EXPIRING_COLOR,
      labelOpacity: 1,
      glowColor: EXPIRING_GLOW_COLOR,
      meshOpacity: 1,
      labelMuted: false,
    }
  }
  return {
    color: NEUTRAL_COLOR,
    labelOpacity: 1,
    glowColor: null,
    meshOpacity: 1,
    labelMuted: false,
  }
}

export function monthsUntilExpiry(leaseExpiry) {
  if (!leaseExpiry || typeof leaseExpiry !== 'string') return Infinity
  const [year, month] = leaseExpiry.split('-').map(Number)
  if (!Number.isFinite(year) || !Number.isFinite(month)) return Infinity
  const now = new Date()
  const expiryDate = new Date(year, month - 1, 1)
  return (expiryDate.getFullYear() - now.getFullYear()) * 12 + (expiryDate.getMonth() - now.getMonth())
}

export function getExpiryTier(leaseExpiry) {
  const months = monthsUntilExpiry(leaseExpiry)
  if (months === Infinity) return 'later'
  if (months <= 12) return 'under12'
  if (months <= 24) return 'under24'
  return 'later'
}

export function toMonthYear(leaseExpiry) {
  if (!leaseExpiry || typeof leaseExpiry !== 'string') return '—'
  const [year, month] = leaseExpiry.split('-').map(Number)
  if (!Number.isFinite(year) || !Number.isFinite(month)) return '—'
  const date = new Date(year, month - 1, 1)
  return date.toLocaleDateString('en-CA', { month: 'short', year: 'numeric' })
}
