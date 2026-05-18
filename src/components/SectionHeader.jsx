function SectionHeader({ kicker, title, children }) {
  return (
    <div>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
  )
}

export default SectionHeader
