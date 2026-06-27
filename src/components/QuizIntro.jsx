export default function QuizIntro({ onBegin }) {
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
      <button className="primary-button" type="button" onClick={onBegin} data-testid="begin-quiz">
        พร้อมแล้ว เริ่มเลย
      </button>
    </section>
  )
}
