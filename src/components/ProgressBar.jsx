export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="progress-wrap" aria-label={`ความคืบหน้า ${percent}%`}>
      <div className="progress-meta">
        <span>ข้อ {current} / {total}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-track">
        <span className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
