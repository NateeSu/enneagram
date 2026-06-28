# EnneaQuest – ค้นพบตัวตนทั้ง 9 แบบ

EnneaQuest คือ web application ภาษาไทยสำหรับทำแบบทดสอบ Enneagram เพื่อ self-reflection และ personal growth ออกแบบเป็นประสบการณ์ modern playful แบบ character-card/RPG profile พร้อมคำอธิบายผลแบบละเอียด

## Features

- Landing page ภาษาไทยพร้อมคำอธิบาย Enneagram และ disclaimer
- แบบทดสอบ 72 ข้อ แบ่งเป็น Core Type 54 ข้อ และ Instinct 18 ข้อ
- Likert scale 1-5 พร้อม progress bar และปุ่มย้อนกลับ
- Scoring logic รองรับ reverse score, normalized score, top 3, confidence, wing, center และ instinct stack
- Result page แสดง Main Type, Wing, Center, Instinctual Variant, Stress/Growth, Relationship, Work, Personal Growth Plan และ Score Breakdown
- PNG character art แบบ original modern anime-inspired ทั้ง 9 type พร้อม prompt อ้างอิงใน `docs/image-prompts.md`
- เก็บผลลัพธ์ใน `localStorage` และมีปุ่ม retake
- Responsive design สำหรับ desktop และ mobile

## Tech Stack

- Vite
- React
- JavaScript
- CSS ธรรมดา
- Vitest สำหรับ unit test ของ scoring logic
- ไม่มี backend และไม่มี environment secret ที่จำเป็น

## Project Structure

```txt
src/
  assets/
    characters/
  components/
  data/
  utils/
  App.jsx
  main.jsx
  styles.css
docs/
  image-prompts.md
```

## Local Development

```bash
npm install
npm run dev
```

## Test และ Build

```bash
npm test
npm run build
npm run preview
```

## Deploy ด้วย Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

ค่า default:

- project name: `enneagram`
- framework: Vite
- output directory: `dist`

## Push ขึ้น GitHub

Repository ที่กำหนด:

```txt
https://github.com/NateeSu/enneagram.git
```

คำสั่ง:

```bash
git init
git add .
git commit -m "Initial EnneaQuest webapp"
git branch -M main
git remote add origin https://github.com/NateeSu/enneagram.git
git push -u origin main
```

ถ้า remote มีอยู่แล้ว:

```bash
git remote set-url origin https://github.com/NateeSu/enneagram.git
git push -u origin main
```

## Environment Variables

แอพเวอร์ชันนี้ทำงานบน client ทั้งหมดและไม่ต้องใช้ environment variables ดูตัวอย่างใน `.env.example`

## Disclaimer

Enneagram ในแอพนี้เป็นเครื่องมือสะท้อนตัวเอง ไม่ใช่แบบทดสอบทางคลินิก ไม่ใช่เครื่องมือวินิจฉัยโรค และไม่ควรใช้แทนคำแนะนำจากผู้เชี่ยวชาญด้านสุขภาพจิต ผลลัพธ์ควรอ่านร่วมกับประสบการณ์จริง บริบทชีวิต และการสังเกตตนเองอย่างอ่อนโยน

## Note เรื่อง Image Generation

โปรเจกต์มี PNG character art ที่สร้างเป็น original modern anime-inspired characters ใน `src/assets/characters/` และมี prompt สำหรับสร้างซ้ำหรือปรับเวอร์ชันภาพทั้ง 9 type ใน `docs/image-prompts.md` โดยหลีกเลี่ยงการเลียนแบบศิลปินหรือสตูดิโอเฉพาะ
