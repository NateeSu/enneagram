import { enneagramTypes } from '../data/enneagramTypes'
import TypeCharacter from './TypeCharacter'

export default function Hero({ onStart }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>EnneaQuest – ค้นพบตัวตนทั้ง 9 แบบ</h1>
        <p>
          แบบทดสอบ Enneagram ภาษาไทย เพื่อเข้าใจแรงขับ ความกลัว จุดแข็ง
          และเส้นทางการเติบโตของคุณ
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onStart} data-testid="start-quiz">
            เริ่มทำแบบทดสอบ
          </button>
          <a className="ghost-button" href="#types">ดูทั้ง 9 Type</a>
        </div>
        <div className="hero-stats" aria-label="ข้อมูลแบบทดสอบ">
          <span>72 คำถาม</span>
          <span>8-12 นาที</span>
          <span>Core + Instinct</span>
        </div>
      </div>
      <div className="hero-panel" aria-label="ตัวอย่าง type cards">
        <div className="profile-card">
          <TypeCharacter type={enneagramTypes[4]} gender="male" />
          <div>
            <p className="mini-label">ตัวอย่างผลลัพธ์</p>
            <h2>Type 5</h2>
            <p>นักสำรวจความรู้ที่ใช้ความเข้าใจเป็นพื้นที่ปลอดภัย</p>
          </div>
        </div>
        <div className="mini-type-grid">
          {enneagramTypes.slice(0, 9).map((type) => (
            <div className="mini-type-card" key={type.id} style={{ '--type-color': type.color }}>
              <TypeCharacter type={type} gender={type.id % 2 === 0 ? 'female' : 'male'} size="small" />
              <span>{type.id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
