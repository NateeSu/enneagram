export default function DimensionSection({ title, children, tone = 'default' }) {
  return (
    <section className={`dimension-section dimension-section--${tone}`}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}
