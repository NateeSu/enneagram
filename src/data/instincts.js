export const instincts = {
  selfPreservation: {
    label: 'Self-Preservation',
    shortLabel: 'SP',
    description: 'โฟกัสความมั่นคงของร่างกาย พลังงาน เงิน เวลา บ้าน สุขภาพ และพื้นที่ส่วนตัว',
    gift: 'ดูแลชีวิตจริงให้ยืนระยะและปลอดภัย',
    watch: 'อาจระวังมากจนโลกแคบหรือกังวลเรื่องทรัพยากรเกินจำเป็น',
  },
  social: {
    label: 'Social',
    shortLabel: 'SO',
    description: 'โฟกัสบทบาทในกลุ่ม การมีส่วนร่วม ชุมชน สถานะ ความไว้วางใจ และผลกระทบต่อคนหลายฝ่าย',
    gift: 'อ่านระบบคนและสร้างการเชื่อมโยงที่มีความหมาย',
    watch: 'อาจให้สายตาของกลุ่มกำหนดคุณค่าตัวเองมากเกินไป',
  },
  oneToOne: {
    label: 'Sexual / One-to-One',
    shortLabel: 'SX',
    description: 'โฟกัสแรงดึงดูด ความเข้มข้น เคมี ความลึก และความสัมพันธ์แบบเฉพาะเจาะจง',
    gift: 'สร้างพลัง ความจริง และการเชื่อมโยงที่มีชีวิตชีวา',
    watch: 'อาจไล่ตามความเข้มข้นจนมองข้ามความมั่นคงหรือบริบทกว้าง',
  },
}

export function describeInstinctStack(stack) {
  if (!stack?.length) return 'ยังไม่มีข้อมูล instinct เพียงพอ'
  const [primary, secondary, blind] = stack
  return `Stack เบื้องต้นของคุณมีแนวโน้มเป็น ${instincts[primary.key].shortLabel}/${instincts[secondary.key].shortLabel} โดย ${instincts[blind.key].shortLabel} อาจเป็นพื้นที่ที่ควรสังเกตเพิ่ม ผลนี้เป็น layer เสริม ไม่ใช่ตัวตนทั้งหมด`
}
