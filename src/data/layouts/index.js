import { layoutConfig as capConfig, units as capUnits, thirdPartyUnits as capThirdParty } from './capilanomall'
import { layoutConfig as bowerConfig, units as bowerUnits, thirdPartyUnits as bowerThirdParty } from './bowerplace'
import { layoutConfig as willowConfig, units as willowUnits, thirdPartyUnits as willowThirdParty } from './willowbrook'

export const layoutRegistry = {
  capilano: {
    layoutConfig: capConfig,
    units: capUnits,
    thirdPartyUnits: capThirdParty,
  },
  bower: {
    layoutConfig: bowerConfig,
    units: bowerUnits,
    thirdPartyUnits: bowerThirdParty,
  },
  willowbrook: {
    layoutConfig: willowConfig,
    units: willowUnits,
    thirdPartyUnits: willowThirdParty,
  },
}

export const layoutOptions = [
  { id: 'capilano', name: 'Mall Example' },
  { id: 'bower', name: 'Residential Retail Example' },
  { id: 'willowbrook', name: 'Strip / Plaza Example' },
]
