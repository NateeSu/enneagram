import { useState } from 'react'

export default function ShareCard({ type }) {
  const [copied, setCopied] = useState(false)
  const text = `ฉันได้ Type ${type.id} – ${type.shortName} (${type.name}) จาก EnneaQuest`

  async function copySummary() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="share-card">
      <div>
        <h3>แชร์ผลลัพธ์</h3>
        <p>{text}</p>
      </div>
      <button className="secondary-button" type="button" onClick={copySummary}>
        {copied ? 'คัดลอกแล้ว' : 'Copy summary'}
      </button>
    </section>
  )
}
