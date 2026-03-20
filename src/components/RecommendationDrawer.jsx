import { useMemo, useState } from 'react'
import {
  Activity,
  Check,
  Coffee,
  Footprints,
  Puzzle,
  Shirt,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { recommendationCategories, recommendationsByUnit } from '../data/recommendations'
import { useTenantIQStore } from '../store/useStore'
import { getExpiryTier, toMonthYear } from '../utils/threeHelpers'
import TenantCard from './TenantCard'

const CATEGORY_OPTIONS = [
  {
    id: 'Apparel',
    label: 'Apparel',
    Icon: Shirt,
    examples: 'Aritzia, Banana Republic, Anthropologie',
  },
  {
    id: 'Food & Beverage',
    label: 'Food & Beverage',
    Icon: Coffee,
    examples: 'Pokeworks, Coco Fresh Tea, Tim Hortons',
  },
  {
    id: 'Electronics',
    label: 'Electronics',
    Icon: Smartphone,
    examples: 'Koodo, Apple, Samsung',
  },
  {
    id: 'Beauty',
    label: 'Beauty',
    Icon: Sparkles,
    examples: 'Sephora, Aesop, Kiehl\'s',
  },
  {
    id: 'Footwear',
    label: 'Footwear',
    Icon: Footprints,
    examples: 'Foot Locker, Browns, Steve Madden',
  },
  {
    id: 'Sporting Goods',
    label: 'Sporting Goods',
    Icon: Activity,
    examples: 'Lululemon, Decathlon, MEC',
  },
  {
    id: 'Toys & Hobbies',
    label: 'Toys & Hobbies',
    Icon: Puzzle,
    examples: 'Miniso, Lego, Mastermind Toys',
  },
]

function getSpaceDescriptor(sqFt) {
  if (sqFt < 1000) return 'Ideal for kiosks, boutique beauty, and accessories'
  if (sqFt <= 2000) return 'Suited for specialty retail, fast casual, and lifestyle'
  if (sqFt <= 4000) return 'Fits mid-format apparel, food concepts, and electronics'
  return 'Large format - flagships, sporting goods, multi-concept'
}

function statusBadgeForUnit(unit) {
  if (unit.status === 'underperforming') {
    return { label: 'Underperforming', className: 'status-badge status-badge-under' }
  }
  const tier = getExpiryTier(unit.leaseExpiry)
  if (tier === 'under12' || tier === 'under24') {
    return { label: 'Expiring Soon', className: 'status-badge status-badge-expiring' }
  }
  return { label: 'Stable', className: 'status-badge status-badge-stable' }
}

function RecommendationDrawer() {
  const {
    drawerOpen,
    drawerStep,
    selectedCategories,
    selectedUnit: unit,
    closeDrawer,
    setDrawerStep,
    toggleSelectedCategory,
    removeSelectedCategory,
  } = useTenantIQStore()
  const [isGenerating, setIsGenerating] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)

  const unitId = unit?.id ?? ''
  const unitRecommendations = recommendationsByUnit[unitId] ?? []
  const messages = [
    'Analyzing space profile...',
    'Searching tenant database...',
    'Scoring expansion signals...',
    'Ranking best matches...',
  ]

  const groupedRecommendations = useMemo(() => {
    const grouped = Object.fromEntries(selectedCategories.map((category) => [category, []]))
    unitRecommendations.forEach((item) => {
      if (item?.category && grouped[item.category]) grouped[item.category].push(item)
    })
    return grouped
  }, [selectedCategories, unitRecommendations])

  if (!drawerOpen) return null
  if (!unit || typeof unit.sqFt !== 'number' || typeof unit.leaseExpiry !== 'string' || !unit.tenantName) {
    return null
  }

  const statusBadge = statusBadgeForUnit(unit)
  const monthsRemaining = typeof unit.remainingMonths === 'number' ? unit.remainingMonths : 0
  const monthsColor = monthsRemaining < 12 ? '#DC2626' : monthsRemaining < 24 ? '#D97706' : '#374151'
  const traffic = typeof unit.footTrafficIndex === 'number' ? unit.footTrafficIndex : 0
  const trafficColor = traffic < 70 ? '#DC2626' : traffic < 100 ? '#D97706' : '#16A34A'

  return (
    <>
      <aside className="recommendation-drawer">
        <header className="drawer-header">
          <div>
            <h3>{unit.tenantName}</h3>
            <p>
              {unit.id} · {unit.sqFt.toLocaleString()} sq ft
            </p>
          </div>
          <button type="button" className="icon-btn" onClick={closeDrawer} aria-label="Close drawer">
            <X size={16} />
          </button>
        </header>
        {drawerStep === 'info' ? (
          <>
            <div className="drawer-body">
              <div className="drawer-category-row" style={{ marginBottom: 12 }}>
                <span className="category-tag">{unit.category}</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0 8px',
                  marginBottom: 12,
                }}
              >
                <div>
                  <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Unit Size
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#0A1F3D', margin: '4px 0 0' }}>{unit.sqFt.toLocaleString()} sq ft</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Lease Expiry
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#0A1F3D', margin: '4px 0 0' }}>{toMonthYear(unit.leaseExpiry)}</p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 6,
                  marginBottom: 0,
                }}
              >
                <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                  STATUS
                </p>
                <span className={statusBadge.className}>{statusBadge.label}</span>
              </div>

              <div style={{ height: 1, background: '#E2E8F0', width: '100%', margin: '12px 0' }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 8px', marginBottom: 0 }}>
                <div>
                  <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Current Rent
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#0A1F3D', margin: '4px 0 0' }}>
                    ${unit.currentRent} / sq ft
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Lease Signed
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#0A1F3D', margin: '4px 0 0' }}>{unit.signingDate}</p>
                </div>
              </div>

              <div style={{ marginBottom: 0 }}>
                <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                  Remaining Term
                </p>
                <p style={{ fontSize: 15, fontWeight: 700, color: monthsColor, margin: '4px 0 0' }}>{monthsRemaining} months remaining</p>
              </div>

              <div style={{ height: 1, background: '#E2E8F0', width: '100%', margin: '12px 0' }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 8px', marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Foot Traffic Index
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: trafficColor, margin: '4px 0 0' }}>
                    {traffic}{' '}
                    <span style={{ fontSize: 12, fontWeight: 400, color: '#9CA3AF' }}>(avg: 100)</span>
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Anchor Proximity
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#374151', margin: '4px 0 0' }}>{unit.anchorProximity}</p>
                </div>
              </div>

              <div style={{ height: 1, background: '#E2E8F0', width: '100%', margin: '12px 0' }} />

              <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 8, padding: 12 }}>
                <div style={{ fontWeight: 700, color: '#0A1F3D', marginBottom: 6 }}>Performance Note</div>
                <div style={{ color: '#64748B', fontSize: 13 }}>{unit.performanceNote ?? '—'}</div>
              </div>
            </div>

            <div className="drawer-footer">
              <button type="button" className="find-replacement-btn" onClick={() => setDrawerStep('category')}>
                Find Replacement Tenants →
              </button>
            </div>
          </>
        ) : null}

        {drawerStep === 'category' ? (
          <>
            <div className="drawer-body">
              <button type="button" className="text-back-link" onClick={() => setDrawerStep('info')}>
                ← Back
              </button>
              <h4 className="category-heading">Top categories for a {unit.sqFt.toLocaleString()} sq ft space</h4>
              <p className="category-subtext">{getSpaceDescriptor(unit.sqFt)}</p>

              <div className="category-card-grid">
                {CATEGORY_OPTIONS.filter((item) => recommendationCategories.includes(item.id)).map((opt) => {
                  const { id, label, examples } = opt
                  const isSelected = selectedCategories.includes(id)
                  return (
                    <button
                      type="button"
                      key={id}
                      className={isSelected ? 'category-card selected' : 'category-card'}
                      onClick={() => toggleSelectedCategory(id)}
                    >
                      <opt.Icon size={24} />
                      <div className="category-card-copy">
                        <strong>{label}</strong>
                        <span>{examples}</span>
                      </div>
                      {isSelected ? (
                        <span className="category-check">
                          <Check size={16} />
                        </span>
                      ) : null}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="drawer-footer">
              <button
                type="button"
                className="show-recommendations-btn"
                disabled={!selectedCategories.length || isGenerating}
                onClick={() => {
                  setIsGenerating(true)
                  setMsgIndex(0)

                  let i = 0
                  const interval = setInterval(() => {
                    i += 1
                    if (i < messages.length) {
                      setMsgIndex(i)
                    } else {
                      clearInterval(interval)
                    }
                  }, 500)

                  setTimeout(() => {
                    clearInterval(interval)
                    setIsGenerating(false)
                    setDrawerStep('recommendations')
                  }, 2000)
                }}
              >
                {isGenerating ? (
                  <>
                    <span className="loading-spinner" />
                    <span
                      key={msgIndex}
                      style={{
                        animation: 'fadeIn 0.15s ease',
                        fontSize: 14,
                      }}
                    >
                      {messages[msgIndex]}
                    </span>
                  </>
                ) : (
                  <>
                    <span>Generate AI Recommendations</span>
                    <span className="sparkle"> ✦</span>
                  </>
                )}
              </button>
            </div>
          </>
        ) : null}

        {drawerStep === 'recommendations' ? (
          <div className="drawer-body">
            <button type="button" className="text-back-link" onClick={() => setDrawerStep('category')}>
              ← Change Category
            </button>
            <p className="space-context-line">
                {unit.tenantName} | {unit.sqFt.toLocaleString()} sq ft
            </p>
            <div className="selected-chip-row">
              {selectedCategories.map((category) => (
                <button key={category} type="button" className="selected-category-chip" onClick={() => removeSelectedCategory(category)}>
                  {category} ×
                </button>
              ))}
            </div>
            {selectedCategories.map((category) => {
              const categoryList = groupedRecommendations[category] ?? []
              return (
                <section key={`${unit.id}-${category}`}>
                  <div className="recommendation-title">
                    <h4>{category}</h4>
                    <span>{categoryList.length} brands</span>
                  </div>
                  {categoryList.length ? (
                    categoryList.map((recommendation) => (
                      <TenantCard
                        key={`${unit.id}-${category}-${recommendation.rank}-${recommendation.brand}`}
                        recommendation={recommendation}
                      />
                    ))
                  ) : (
                    <p className="empty-state">No recommendations available for this category and space size.</p>
                  )}
                </section>
              )
            })}
          </div>
        ) : null}
      </aside>

    </>
  )
}

export default RecommendationDrawer
