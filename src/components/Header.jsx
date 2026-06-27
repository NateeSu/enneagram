export default function Header({ onStart, onHome }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={onHome} aria-label="กลับหน้าแรก">
        <span className="brand-mark">EQ</span>
        <span>EnneaQuest</span>
      </button>
      <nav aria-label="เมนูหลัก">
        <a href="#quiz" onClick={onStart}>แบบทดสอบ</a>
        <a href="#types">ทั้ง 9 Type</a>
        <a href="#about">เกี่ยวกับ</a>
      </nav>
    </header>
  )
}
