import { genderOptions } from '../data/characterImages'

export default function QuizIntro({ gender, onBegin, onGenderChange }) {
  return (
    <section className="quiz-intro" id="quiz">
      <div>
        <h2>ก่อนเริ่มเดินทาง</h2>
        <p>
          ตอบตามแรงจูงใจที่เกิดขึ้นบ่อย ไม่ใช่ภาพที่อยากเป็น ไม่มีคำตอบถูกผิด
          และผลลัพธ์ควรใช้เป็นกระจกสะท้อนตัวเอง ไม่ใช่คำตัดสินชีวิต
        </p>
      </div>
      <ul className="intro-list">
        <li>Stage 1: Core Type Quiz 54 ข้อ</li>
        <li>Stage 2: Instinct & Deep Result 18 ข้อ</li>
        <li>ต้องเลือกคำตอบก่อนข้อต่อไป และย้อนกลับได้ตลอด</li>
      </ul>

      <div className="gender-picker" aria-label="เลือกเพศสำหรับตัวละครผลลัพธ์">
        <h3>เลือกเพศของผู้ทำแบบทดสอบ</h3>
        <p>เราจะใช้ตัวเลือกนี้เพื่อแสดงตัวละครให้ตรงกับเพศและ Type ผลลัพธ์ของคุณ</p>
        <div className="gender-options">
          {genderOptions.map((option) => (
            <button
              className={gender === option.value ? 'gender-option is-selected' : 'gender-option'}
              data-testid={`gender-${option.value}`}
              key={option.value}
              type="button"
              onClick={() => onGenderChange(option.value)}
              aria-pressed={gender === option.value}
            >
              <strong>{option.label}</strong>
              <span>{option.description}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        className="primary-button"
        type="button"
        onClick={onBegin}
        data-testid="begin-quiz"
        disabled={!gender}
      >
        พร้อมแล้ว เริ่มเลย
      </button>
    </section>
  )
}
