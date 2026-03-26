import './App.css'
import { useMemo, useRef, useState } from 'react'
import { AlertTriangle, Pencil, PlusCircle, Upload, X } from 'lucide-react'
import MallCanvas from './components/MallCanvas'
import FilterPanel from './components/FilterPanel'
import RecommendationDrawer from './components/RecommendationDrawer'
import { useTenantIQStore } from './store/useStore'
import { monthsUntilExpiry } from './utils/threeHelpers'

const STATUS_OPTIONS = [
  { key: 'stable', label: 'Stable' },
  { key: 'expiring', label: 'Expiring Soon' },
  { key: 'underperforming', label: 'Underperforming' },
]

const CATEGORY_OPTIONS = [
  'Apparel',
  'Food & Beverage',
  'Electronics',
  'Footwear',
  'Sporting Goods',
  'Toys & Hobbies',
  'Beauty',
  'Home & Lifestyle',
  'Jewellery',
  'Financial Services',
  'Other',
]

function getNextUnitId(units) {
  const max = units.reduce((top, unit) => {
    const match = String(unit.id ?? '').match(/^U(\d+)$/i)
    if (!match) return top
    return Math.max(top, Number(match[1]))
  }, 0)
  return `U${String(max + 1).padStart(2, '0')}`
}

function rectanglesOverlap(a, b, padding = 0.25) {
  return !(
    a.x + a.width / 2 + padding < b.x - b.width / 2 ||
    a.x - a.width / 2 - padding > b.x + b.width / 2 ||
    a.z + a.depth / 2 + padding < b.z - b.depth / 2 ||
    a.z - a.depth / 2 - padding > b.z + b.depth / 2
  )
}

function findPlacement(units) {
  const newSize = { width: 3, depth: 2.5, height: 1.2 }
  const anchor = units.find((unit) => unit.tenantName === 'Mobile Snap' || unit.id === 'U16')
  const baseX = anchor?.x ?? 6
  const baseZ = anchor?.z ?? 6
  const anchorWidth = anchor?.width ?? 2
  const gap = 0.8

  // Preferred: row placed to the right of Mobile Snap.
  for (let i = 0; i < 24; i += 1) {
    const candidate = {
      x: baseX + anchorWidth / 2 + newSize.width / 2 + gap + i * (newSize.width + gap),
      z: baseZ,
      ...newSize,
    }
    const collides = units.some((unit) =>
      rectanglesOverlap(candidate, { x: unit.x, z: unit.z, width: unit.width, depth: unit.depth }),
    )
    if (!collides) return candidate
  }

  // Fallback: scan a nearby open area (not center) if anchor row is blocked/missing.
  const fallbackStart = { x: 8, z: 6 }
  for (let row = 0; row < 6; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const candidate = {
        x: fallbackStart.x + col * (newSize.width + gap),
        z: fallbackStart.z + row * (newSize.depth + gap),
        ...newSize,
      }
      const collides = units.some((unit) =>
        rectanglesOverlap(candidate, { x: unit.x, z: unit.z, width: unit.width, depth: unit.depth }),
      )
      if (!collides) return candidate
    }
  }

  return { x: 10, z: 8, ...newSize }
}

function App() {
  const resetViewRef = useRef(null)
  const [addUnitModalOpen, setAddUnitModalOpen] = useState(false)
  const [addStep, setAddStep] = useState('entry')
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState('')
  const addUserUnit = useTenantIQStore((state) => state.addUserUnit)
  const units = useTenantIQStore((state) => state.units)

  const nextUnitId = useMemo(() => getNextUnitId(units), [units])
  const [formData, setFormData] = useState({
    name: '',
    unitId: nextUnitId,
    sqFt: '',
    category: '',
    expiry: '',
    rent: '',
    status: 'stable',
    anchor: '',
  })

  const openAddModal = () => {
    setErrors({})
    setAddStep('entry')
    setFormData({
      name: '',
      unitId: getNextUnitId(units),
      sqFt: '',
      category: '',
      expiry: '',
      rent: '',
      status: 'stable',
      anchor: '',
    })
    setAddUnitModalOpen(true)
  }

  const closeAddModal = () => {
    setAddUnitModalOpen(false)
    setAddStep('entry')
    setErrors({})
  }

  const onSubmitUnit = () => {
    const required = ['name', 'unitId', 'sqFt', 'category', 'expiry', 'rent', 'status']
    const nextErrors = {}
    required.forEach((field) => {
      if (!String(formData[field] ?? '').trim()) nextErrors[field] = 'This field is required'
    })
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    const placement = findPlacement(units)
    const unit = {
      id: formData.unitId.trim().toUpperCase(),
      tenantName: formData.name.trim(),
      sqFt: Number(formData.sqFt),
      category: formData.category,
      leaseExpiry: formData.expiry,
      currentRent: Number(formData.rent),
      status: formData.status,
      anchorProximity: formData.anchor.trim() || 'Mid-mall corridor',
      signingDate: new Date().toLocaleDateString('en-CA', { month: 'short', year: 'numeric' }),
      remainingMonths: Math.max(0, monthsUntilExpiry(formData.expiry)),
      footTrafficIndex: 100,
      performanceNote: 'Newly added unit. Performance data pending.',
      salesIndex: 100,
      x: placement.x,
      z: placement.z,
      width: placement.width,
      depth: placement.depth,
      height: placement.height,
      userAdded: true,
    }

    addUserUnit(unit)
    closeAddModal()
    setToast(`${unit.tenantName} added to map`)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-text">QuadReal</span>
        </div>
        <button type="button" className="add-unit-btn" onClick={openAddModal} aria-label="Add unit">
          <PlusCircle size={20} />
        </button>
      </header>

      <main className="main-layout">
        <FilterPanel onResetView={() => resetViewRef.current?.()} />
        <section className="map-section">
          <MallCanvas onResetViewReady={(fn) => { resetViewRef.current = fn }} />
        </section>
        <RecommendationDrawer />
      </main>

      <div className="min-width-banner">
        <AlertTriangle size={14} />
        <span>TenantIQ is optimized for desktop (1024px+).</span>
      </div>

      {addUnitModalOpen ? (
        <div className="modal-backdrop" role="presentation" onClick={closeAddModal}>
          <div className="add-unit-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close-btn" onClick={closeAddModal} aria-label="Close">
              <X size={16} />
            </button>

            <h3>Add New Unit</h3>
            <p>Add a unit manually or import from a connected source</p>

            {addStep === 'entry' ? (
              <div className="add-options-grid">
                <button type="button" className="add-option-card" onClick={() => setAddStep('manual')}>
                  <Pencil size={20} />
                  <strong>Add Manually</strong>
                  <span>Enter unit details using the form</span>
                </button>
                <button type="button" className="add-option-card" onClick={() => {}}>
                  <span className="coming-soon-badge">Coming Soon</span>
                  <Upload size={20} />
                  <strong>Import from SharePoint</strong>
                  <span>Pull unit data from your SharePoint list</span>
                </button>
              </div>
            ) : (
              <div className="manual-form-wrap">
                <button type="button" className="text-back-link" onClick={() => setAddStep('entry')}>
                  ← Back
                </button>

                <div className="manual-field">
                  <label>TENANT / BRAND NAME</label>
                  <input
                    className={errors.name ? 'field-error' : ''}
                    placeholder="e.g. Zara"
                    value={formData.name}
                    onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
                  />
                  {errors.name ? <small>{errors.name}</small> : null}
                </div>

                <div className="manual-field">
                  <label>UNIT ID</label>
                  <input
                    className={errors.unitId ? 'field-error' : ''}
                    placeholder="e.g. U17"
                    value={formData.unitId}
                    onChange={(e) => setFormData((s) => ({ ...s, unitId: e.target.value }))}
                  />
                  {errors.unitId ? <small>{errors.unitId}</small> : null}
                </div>

                <div className="manual-field">
                  <label>SQUARE FOOTAGE</label>
                  <div className="inline-affix-wrap">
                    <input
                      type="number"
                      className={errors.sqFt ? 'field-error' : ''}
                      placeholder="e.g. 2400"
                      value={formData.sqFt}
                      onChange={(e) => setFormData((s) => ({ ...s, sqFt: e.target.value }))}
                    />
                    <span>sq ft</span>
                  </div>
                  {errors.sqFt ? <small>{errors.sqFt}</small> : null}
                </div>

                <div className="manual-field">
                  <label>CATEGORY</label>
                  <select
                    className={errors.category ? 'field-error' : ''}
                    value={formData.category}
                    onChange={(e) => setFormData((s) => ({ ...s, category: e.target.value }))}
                  >
                    <option value="">Select category</option>
                    {CATEGORY_OPTIONS.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category ? <small>{errors.category}</small> : null}
                </div>

                <div className="two-col">
                  <div className="manual-field">
                    <label>LEASE EXPIRY</label>
                    <input
                      type="month"
                      className={errors.expiry ? 'field-error' : ''}
                      value={formData.expiry}
                      onChange={(e) => setFormData((s) => ({ ...s, expiry: e.target.value }))}
                    />
                    {errors.expiry ? <small>{errors.expiry}</small> : null}
                  </div>

                  <div className="manual-field">
                    <label>CURRENT RENT</label>
                    <div className="inline-affix-wrap">
                      <span>$</span>
                      <input
                        type="number"
                        className={errors.rent ? 'field-error' : ''}
                        placeholder="e.g. 48"
                        value={formData.rent}
                        onChange={(e) => setFormData((s) => ({ ...s, rent: e.target.value }))}
                      />
                      <span>/ sq ft</span>
                    </div>
                    {errors.rent ? <small>{errors.rent}</small> : null}
                  </div>
                </div>

                <div className="manual-field">
                  <label>STATUS</label>
                  <div className="segmented-wrap">
                    {STATUS_OPTIONS.map((status) => (
                      <button
                        key={status.key}
                        type="button"
                        className={formData.status === status.key ? 'segment active' : 'segment'}
                        onClick={() => setFormData((s) => ({ ...s, status: status.key }))}
                      >
                        {status.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="manual-field">
                  <label>
                    ANCHOR PROXIMITY <em>(optional)</em>
                  </label>
                  <input
                    placeholder="e.g. Adjacent to H&M"
                    value={formData.anchor}
                    onChange={(e) => setFormData((s) => ({ ...s, anchor: e.target.value }))}
                  />
                </div>

                <div className="modal-form-footer">
                  <button type="button" className="submit-unit-btn" onClick={onSubmitUnit}>
                    Add Unit to Map
                  </button>
                  <button type="button" className="cancel-unit-btn" onClick={closeAddModal}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {toast ? <div className="app-toast">{toast}</div> : null}
    </div>
  )
}

export default App
