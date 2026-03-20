import { create } from 'zustand'
import floorplan from '../data/floorplan.json'
import { tenantByUnit } from '../data/tenants'

/** @returns {Record<string, unknown> | null} */
function buildMergedUnit(unitId) {
  if (!unitId || typeof unitId !== 'string') return null
  const tenant = tenantByUnit[unitId]
  const geo = floorplan.units.find((u) => u.id === unitId)
  if (!tenant) return null
  return {
    id: unitId,
    ...(geo || {}),
    ...tenant,
  }
}

export const useTenantIQStore = create((set) => ({
  /** Full selected unit (floorplan + tenant data). Null when drawer closed / none. */
  selectedUnit: null,
  drawerOpen: false,
  drawerStep: 'info',
  selectedCategories: [],
  /** @type {Array<'expiring' | 'underperforming'>} */
  activeFilters: [],
  setSelectedUnit: (unitId) => {
    if (!unitId) {
      set({
        selectedUnit: null,
        drawerOpen: false,
        drawerStep: 'info',
        selectedCategories: [],
      })
      return
    }
    const merged = buildMergedUnit(unitId)
    if (!merged) return
    set({
      selectedUnit: merged,
      drawerOpen: true,
      drawerStep: 'info',
      selectedCategories: [],
    })
  },
  setDrawerOpen: (drawerOpen) => set({ drawerOpen }),
  setDrawerStep: (drawerStep) => set({ drawerStep }),
  toggleSelectedCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((item) => item !== category)
        : [...state.selectedCategories, category],
    })),
  removeSelectedCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.filter((item) => item !== category),
    })),
  clearSelectedCategories: () => set({ selectedCategories: [] }),
  closeDrawer: () =>
    set({
      drawerOpen: false,
      selectedUnit: null,
      drawerStep: 'info',
      selectedCategories: [],
    }),
  toggleFilter: (key) =>
    set((state) => {
      if (key !== 'expiring' && key !== 'underperforming') return state
      const exists = state.activeFilters.includes(key)
      const next = exists ? state.activeFilters.filter((k) => k !== key) : [...state.activeFilters, key]
      return { activeFilters: next }
    }),
  resetFilters: () => set({ activeFilters: [] }),
}))
