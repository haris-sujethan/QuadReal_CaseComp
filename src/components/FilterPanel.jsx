import { useMemo, useState } from 'react'
import { useTenantIQStore } from '../store/useStore'
import { getExpiryTier, shouldHighlight, toMonthYear } from '../utils/threeHelpers'
import { Check, ChevronDown } from 'lucide-react'
import { layoutOptions } from '../data/layouts'

function FilterPanel({ onResetView }) {
  const {
    activeFilters,
    toggleFilter,
    resetFilters,
    units: unitsWithTenant,
    selectedLayoutId,
    setLayout,
    layoutConfig,
  } = useTenantIQStore()
  const [layoutMenuOpen, setLayoutMenuOpen] = useState(false)

  const highlightedUnits = useMemo(
    () => unitsWithTenant.filter((unit) => shouldHighlight(unit, activeFilters)),
    [unitsWithTenant, activeFilters],
  )

  const expiringCount = unitsWithTenant.filter((unit) => {
    const tier = getExpiryTier(unit.leaseExpiry)
    return tier === 'under12' || tier === 'under24'
  }).length

  const underperformingCount = unitsWithTenant.filter((unit) => unit.status === 'underperforming').length

  const earliestExpiry = highlightedUnits.map((unit) => unit.leaseExpiry).sort()[0]

  const totalSqFt = highlightedUnits.reduce((sum, unit) => sum + unit.sqFt, 0)

  const expiringOn = activeFilters.includes('expiring')
  const underOn = activeFilters.includes('underperforming')

  return (
    <aside className="filter-panel">
      <div className="filter-top">
        <h2>Filters &amp; Controls</h2>

        <button
          type="button"
          className={`toggle-btn ${expiringOn ? 'toggle-btn-on' : ''}`}
          onClick={() => toggleFilter('expiring')}
        >
          Expiring Soon
          <span className="toggle-count">{expiringCount}</span>
        </button>

        <button
          type="button"
          className={`toggle-btn ${underOn ? 'toggle-btn-on' : ''}`}
          onClick={() => toggleFilter('underperforming')}
        >
          Underperforming
          <span className="toggle-count">{underperformingCount}</span>
        </button>

        <div className="summary-card">
          <h3>Live summary</h3>
          <p>
            <strong>{highlightedUnits.length}</strong> units highlighted
          </p>
          <p>
            Earliest expiry: <strong>{earliestExpiry ? toMonthYear(earliestExpiry) : 'N/A'}</strong>
          </p>
          <p>
            Sq ft at risk: <strong>{totalSqFt.toLocaleString()}</strong>
          </p>
        </div>
      </div>

      <div className="filter-bottom">
        <div className="filter-bottom-divider" />

        <h3 className="section-label">ASSET</h3>
        <div className="layout-selector-wrap">
          <button
            type="button"
            className="layout-selector-btn"
            onClick={() => setLayoutMenuOpen((open) => !open)}
          >
            <span>{layoutConfig.name}</span>
            <ChevronDown size={14} />
          </button>
          {layoutMenuOpen ? (
            <div className="layout-dropdown">
              {layoutOptions.map((layout) => (
                <button
                  key={layout.id}
                  className={layout.id === selectedLayoutId ? 'layout-option active' : 'layout-option'}
                  onClick={() => {
                    setLayout(layout.id)
                    setLayoutMenuOpen(false)
                  }}
                >
                  <span>{layout.name}</span>
                  {layout.id === selectedLayoutId ? <Check size={14} /> : null}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <p className="gla-display">{layoutConfig.gla} GLA</p>

        <div className="filter-bottom-actions">
          <button type="button" className="reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
          <button type="button" className="reset-view-btn" onClick={onResetView}>
            Reset View
          </button>
        </div>
      </div>
    </aside>
  )
}

export default FilterPanel
