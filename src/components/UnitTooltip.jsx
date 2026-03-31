function UnitTooltip({ visible, x, y, content }) {
  if (!visible || !content) return null

  if (content.customMessage) {
    return (
      <div className="unit-tooltip" style={{ left: x, top: y }}>
        <div>{content.customMessage}</div>
      </div>
    )
  }

  return (
    <div className="unit-tooltip" style={{ left: x, top: y }}>
      <div>{content.tenantName}</div>
      <div>{content.sqFt.toLocaleString()} sq ft</div>
      <div>Expires {content.leaseExpiry}</div>
    </div>
  )
}

export default UnitTooltip
