import './App.css'
import { useRef } from 'react'
import { AlertTriangle } from 'lucide-react'
import MallCanvas from './components/MallCanvas'
import FilterPanel from './components/FilterPanel'
import RecommendationDrawer from './components/RecommendationDrawer'

function App() {
  const resetViewRef = useRef(null)

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span
            style={{
              color: '#FFFFFF',
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            QuadReal
          </span>
        </div>
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
    </div>
  )
}

export default App
