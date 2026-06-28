import TypeCharacter from './TypeCharacter'

export default function ResultCard({ type, analysis, gender }) {
  return (
    <section className="result-card" data-testid="result-card" style={{ '--type-color': type.color, '--type-accent': type.accent }}>
      <div className="result-visual">
        <TypeCharacter type={type} gender={gender} />
      </div>
      <div className="result-copy">
        <p className="mini-label">Main Type</p>
        <h2>Type {type.id} – {type.shortName}</h2>
        <p className="result-name">{type.name} / {type.thaiName}</p>
        <p>{type.tagline}</p>
        <div className="result-metrics">
          <span>คะแนน {analysis.normalizedScores[type.id]}%</span>
          <span>Confidence: {analysis.confidence.level}</span>
          <span>{analysis.wing.label}</span>
          <span>{gender === 'male' ? 'ตัวละครชาย' : 'ตัวละครหญิง'}</span>
        </div>
      </div>
    </section>
  )
}
