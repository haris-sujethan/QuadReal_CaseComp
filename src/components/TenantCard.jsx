function scoreBarColor(score) {
  if (typeof score !== 'number' || Number.isNaN(score)) return '#94a3b8'
  if (score >= 85) return '#22C55E'
  if (score >= 70) return '#F59E0B'
  return '#EF4444'
}

function getMatchStyle(score) {
  if (typeof score !== 'number' || Number.isNaN(score)) return { bg: '#E5E7EB', text: '#374151' }
  if (score >= 85) return { bg: '#DCFCE7', text: '#16A34A' }
  if (score >= 70) return { bg: '#FEF3C7', text: '#D97706' }
  return { bg: '#FEE2E2', text: '#DC2626' }
}

function TenantCard({ recommendation }) {
  if (!recommendation) return null

  const dims = recommendation.dimensions ?? {}
  const financial = typeof dims.financialHealth === 'number' ? dims.financialHealth : 0
  const expansion = typeof dims.expansionMomentum === 'number' ? dims.expansionMomentum : 0
  const categoryFit = typeof dims.categoryFit === 'number' ? dims.categoryFit : 0
  const sizeFit = typeof dims.sizeCompatibility === 'number' ? dims.sizeCompatibility : 0

  const miniScores = [
    ['Financial', financial],
    ['Expansion', expansion],
    ['Category Fit', categoryFit],
    ['Space Compatibility', sizeFit],
  ]
  const rationale = Array.isArray(recommendation.rationale) ? recommendation.rationale : []
  const { bg, text } = getMatchStyle(recommendation.score)

  return (
    <article className="tenant-card">
      <div className="tenant-card-head">
        <div className="tenant-card-head-left">
          <div className="rank-pill">#{recommendation.rank}</div>
          <h4 className="brand-name">{recommendation.brand}</h4>
        </div>
        <div className="score-pill" style={{ backgroundColor: bg, color: text }}>
          {recommendation.score}% match
        </div>
      </div>

      <p className="why-title">Why this brand</p>
      <ul className="rationale-list">
        {rationale.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="mini-score-grid">
        {miniScores.map(([label, score]) => (
          <div key={label}>
            <div className="mini-score-label">
              <span>{label}</span>
              <span>{score}%</span>
            </div>
            <div className="mini-score-track">
              <div
                className="mini-score-fill"
                style={{ width: `${Math.min(100, Math.max(0, score))}%`, backgroundColor: scoreBarColor(score) }}
              />
            </div>
          </div>
        ))}
      </div>

    </article>
  )
}

export default TenantCard
