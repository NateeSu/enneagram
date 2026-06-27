# Requirement Prompt: EnneaQuest – Enneagram Web App

คุณคือ Senior Full-Stack Engineer, UX/UI Designer, Content Researcher, Psychometric Quiz Designer และ Creative Director สำหรับโปรเจกต์นี้

เป้าหมายหลัก:
สร้าง web application ภาษาไทยสำหรับ “แบบทดสอบ Enneagram” ที่สวยงาม สีสันสดใส ใช้งานง่าย มีภาพตัวละครการ์ตูนอะนิเมะประกอบแต่ละ type พร้อมคำอธิบายผลการทดสอบแบบละเอียดในทุกมิติ โดยใช้ Vite + JavaScript และเตรียม deploy บน Vercel พร้อม push ขึ้น GitHub

โปรดทำงานแบบ end-to-end ให้เสร็จสมบูรณ์ที่สุดเท่าที่ environment อนุญาต ถ้ามี GitHub/Vercel CLI และ credentials พร้อมใช้งาน ให้ push repo และ deploy จริง ถ้าไม่มี ให้สร้างโปรเจกต์ให้สมบูรณ์ พร้อมเขียนคำสั่ง exact commands สำหรับ push และ deploy ใน README.md

GitHub repository ที่ต้องใช้สำหรับโปรเจกต์นี้:
`https://github.com/NateeSu/enneagram.git`

เมื่อพัฒนาเสร็จและทดสอบผ่านแล้ว ให้ commit และ push ขึ้น repository นี้ได้เลย โดยไม่ต้องถามยืนยันซ้ำ เว้นแต่ว่า environment ไม่มีสิทธิ์เข้าถึง GitHub หรือ push ถูกปฏิเสธจาก permission/authentication

## 1. Research Requirement

หาข้อมูล Enneagram อย่างละเอียดและจัดทำ content ภายในแอพ โดยต้องครอบคลุมหัวข้อต่อไปนี้:

### 1.1 Enneagram คืออะไร

- อธิบายว่า Enneagram คือระบบเข้าใจบุคลิกภาพผ่านแรงจูงใจภายใน ไม่ใช่แค่พฤติกรรมภายนอก
- ระบุว่าไม่ใช่เครื่องมือวินิจฉัยโรค ไม่ใช่แบบทดสอบทางคลินิก และควรใช้เพื่อ self-reflection / personal growth เท่านั้น
- อธิบายข้อจำกัดด้าน scientific validity อย่างสุภาพและชัดเจน

### 1.2 9 Types

ต้องมีคำอธิบายละเอียดของทั้ง 9 type:

- Type 1: The Reformer / Perfectionist
- Type 2: The Helper
- Type 3: The Achiever
- Type 4: The Individualist
- Type 5: The Investigator
- Type 6: The Loyalist
- Type 7: The Enthusiast
- Type 8: The Challenger
- Type 9: The Peacemaker

แต่ละ type ต้องมีข้อมูลอย่างน้อย:

- ชื่อภาษาอังกฤษ
- ชื่อภาษาไทยที่เข้าใจง่าย
- คำโปรยสั้น ๆ
- core desire
- core fear
- core motivation
- worldview / inner belief
- จุดแข็ง
- จุดอ่อน
- blind spot
- รูปแบบตอน healthy
- รูปแบบตอน average
- รูปแบบตอน unhealthy
- ความสัมพันธ์
- การทำงาน
- วิธีสื่อสารกับ type นี้
- สิ่งที่ type นี้ควรฝึกเพื่อเติบโต
- ประโยค affirmation
- ตัวอย่างพฤติกรรมในชีวิตประจำวัน
- สิ่งที่คนอื่นมักเข้าใจผิดเกี่ยวกับ type นี้

### 1.3 Wings

อธิบาย wing ของแต่ละ type:

- 1w9, 1w2
- 2w1, 2w3
- 3w2, 3w4
- 4w3, 4w5
- 5w4, 5w6
- 6w5, 6w7
- 7w6, 7w8
- 8w7, 8w9
- 9w8, 9w1

### 1.4 Triads / Centers

อธิบาย 3 centers:

- Body / Gut Center: 8, 9, 1
- Heart Center: 2, 3, 4
- Head Center: 5, 6, 7

อธิบายอารมณ์หลักของแต่ละ center:

- Body: anger / control / instinct
- Heart: shame / image / identity
- Head: fear / security / planning

### 1.5 Stress & Growth Lines

อธิบาย stress direction และ growth direction ของแต่ละ type แบบเข้าใจง่าย

ห้ามเขียนให้ดูเหมือนเป็นกฎตายตัว ให้ใช้คำว่า “มีแนวโน้ม” หรือ “มักแสดง pattern คล้าย…”

### 1.6 Instinctual Variants

ต้องมี 3 instincts:

- Self-Preservation
- Social
- Sexual / One-to-One

และอธิบายว่าผล instinct เป็น layer เสริม ไม่ใช่ตัวตนทั้งหมด

### 1.7 Compatibility / Relationship

สร้างคำอธิบาย compatibility แบบ non-deterministic:

- ห้ามบอกว่า type ไหนเข้ากันไม่ได้
- ให้บอกว่าแต่ละ type มี pattern การสื่อสาร ความต้องการ และ conflict style ต่างกัน
- สร้างคำแนะนำความสัมพันธ์สำหรับ top result

### 1.8 Career / Work Style

แต่ละ type ต้องมี:

- work strengths
- ideal work environment
- leadership style
- communication style at work
- stress triggers at work
- growth tips at work

## 2. App Concept

ชื่อแอพ:
**“EnneaQuest – ค้นพบตัวตนทั้ง 9 แบบ”**

Mood & Tone:

- สนุก
- อบอุ่น
- ลึกซึ้ง
- เหมือนเดินทางค้นพบตัวเอง
- สีสันสดใสแบบ modern playful
- มีความ anime / fantasy / character-card แต่ยังดูใช้งานจริง ไม่รก

กลุ่มผู้ใช้:

- คนไทยอายุ 16–40 ปี
- คนที่สนใจ self-development
- คนที่อยากเข้าใจตัวเอง ความสัมพันธ์ และรูปแบบการทำงาน

ภาษา:

- UI หลักเป็นภาษาไทย
- ใช้ศัพท์อังกฤษควบคู่ในบางคำ เช่น Core Fear, Wing, Instinct
- เขียนไทยให้เป็นธรรมชาติ ไม่แข็ง ไม่แปลทื่อ

## 3. Tech Stack

ใช้:

- Vite
- Vanilla JavaScript หรือ React ก็ได้ แต่ถ้าเลือกเองให้ใช้ React + Vite เพื่อ component structure ที่ดี
- CSS ธรรมดา หรือ CSS Modules ก็ได้
- ห้ามใช้ backend ถ้าไม่จำเป็น
- เก็บผลชั่วคราวใน localStorage
- ใช้ responsive design
- deploy บน Vercel ได้ทันที

ถ้าใช้ React:

- สร้าง components ชัดเจน
- ใช้ state management แบบเรียบง่ายด้วย React hooks
- ไม่ต้องใช้ Redux

Project structure ที่ต้องการ:

```txt
src/
  assets/
    characters/
      type-1.svg หรือ .png
      type-2.svg หรือ .png
      ...
      type-9.svg หรือ .png
  components/
    Header.jsx
    Hero.jsx
    QuizIntro.jsx
    QuizQuestion.jsx
    ProgressBar.jsx
    ResultCard.jsx
    TypeCharacter.jsx
    TypeDetail.jsx
    DimensionSection.jsx
    ShareCard.jsx
    Footer.jsx
  data/
    enneagramTypes.js
    questions.js
    wings.js
    instincts.js
    growthStress.js
  utils/
    scoring.js
    resultAnalyzer.js
  App.jsx
  main.jsx
  styles.css
```

ต้องมี:

- package.json
- README.md
- .gitignore
- vercel.json ถ้าจำเป็น
- LICENSE optional

## 4. Core Features

สร้าง webapp ที่มีหน้าหลักและ flow ดังนี้:

### 4.1 Landing Page

- Hero section พร้อมชื่อ EnneaQuest
- คำโปรย: “แบบทดสอบ Enneagram ภาษาไทย เพื่อเข้าใจแรงขับ ความกลัว จุดแข็ง และเส้นทางการเติบโตของคุณ”
- ปุ่มเริ่มทำแบบทดสอบ
- section อธิบาย Enneagram แบบย่อ
- section แสดง 9 type แบบ card พร้อมภาพตัวละคร
- disclaimer ว่าเป็นเครื่องมือสะท้อนตัวเอง ไม่ใช่การวินิจฉัย

### 4.2 Quiz Page

แบบทดสอบควรมีอย่างน้อย 54 คำถาม:

- 9 types x 6 questions ต่อ type
- ใช้ Likert scale 1–5
  - 1 = ไม่ตรงเลย
  - 2 = ค่อนข้างไม่ตรง
  - 3 = เฉย ๆ / แล้วแต่สถานการณ์
  - 4 = ค่อนข้างตรง
  - 5 = ตรงมาก

คำถามต้องวัดแรงจูงใจ ไม่ใช่แค่พฤติกรรม

ตัวอย่างแนวคำถาม:

- “ฉันรู้สึกสบายใจเมื่อทุกอย่างถูกต้องและเป็นไปตามมาตรฐาน”
- “ฉันมักรู้สึกว่าต้องเป็นประโยชน์กับคนอื่นเพื่อให้ตัวเองมีคุณค่า”
- “ฉันกังวลว่าจะไม่มีความสามารถพอในการรับมือกับโลกภายนอก”

เพิ่ม optional instinct questions อีก 18 คำถาม:

- Self-Preservation 6 ข้อ
- Social 6 ข้อ
- One-to-One 6 ข้อ

รวมทั้งหมด 72 ข้อ ถ้าทำ UX ดีพอ

ถ้ากลัวผู้ใช้เหนื่อย ให้แบ่งเป็น 2 stage:

- Stage 1: Core Type Quiz
- Stage 2: Instinct & Deep Result

### 4.3 Progress UX

- มี progress bar
- มีเลขคำถามปัจจุบัน
- มีปุ่มย้อนกลับ
- มีปุ่มข้ามไม่ได้ ต้องเลือกก่อน
- animation เบา ๆ ตอนเปลี่ยนคำถาม
- mobile friendly

### 4.4 Result Page

หลังทำแบบทดสอบ ต้องแสดงผลละเอียด:

#### A. Main Type

- type หลัก
- คะแนนรวม
- confidence level เช่น High / Medium / Low
- ภาพตัวละครประจำ type
- คำอธิบายภาพรวม
- core fear / desire / motivation
- strengths / challenges
- healthy / average / unhealthy patterns

#### B. Wing Analysis

- วิเคราะห์ wing จากคะแนน type ข้างเคียง
- เช่น ถ้าผลหลักคือ Type 5 ให้เทียบคะแนน Type 4 และ Type 6
- แสดงว่า likely wing คืออะไร
- อธิบายผลของ wing อย่างละเอียด
- ถ้าคะแนนใกล้กัน ให้บอกว่า “balanced wings”

#### C. Center Analysis

- แสดงว่าอยู่ center ไหน
- อธิบาย emotional theme
- แสดงคะแนนรวมของ Body, Heart, Head

#### D. Instinctual Variant

- วิเคราะห์ instinct จากคำถามเสริม
- แสดง primary instinct
- อธิบาย Self-Preservation / Social / One-to-One profile ของผู้ใช้
- ถ้าคะแนนใกล้กัน ให้บอกว่า instinct stack อาจยังไม่ชัด

#### E. Stress & Growth

- แสดงแนวโน้มตอนเครียด
- แสดงทิศทางการเติบโต
- ให้คำแนะนำเชิงปฏิบัติ 5 ข้อ

#### F. Relationship Insight

- รูปแบบความรัก
- conflict pattern
- สิ่งที่ต้องการจากคนรัก/เพื่อน/ครอบครัว
- วิธีที่คนอื่นควรสื่อสารกับ type นี้
- สิ่งที่ควรระวังในความสัมพันธ์

#### G. Work & Career Insight

- work style
- leadership style
- ideal environment
- stress trigger
- career suggestions แบบกว้าง ๆ ไม่ฟันธง

#### H. Personal Growth Plan

- 7-day reflection plan
- journaling prompts
- daily practice
- affirmation
- one thing to stop doing
- one thing to start doing

#### I. Score Breakdown

- chart หรือ bar visualization คะแนนทั้ง 9 type
- แสดงคะแนน instinct ทั้ง 3
- แสดง top 3 types
- อธิบายว่าถ้าคะแนนใกล้กันควรอ่าน type อื่นประกอบ

### 4.5 Share Result

- ปุ่ม copy summary
- สร้าง share text ภาษาไทย เช่น:
  “ฉันได้ Type 5 – นักสำรวจความรู้ จาก EnneaQuest”
- ไม่ต้องเชื่อม social API จริง แค่ copy text ได้ก็พอ

### 4.6 Retake Quiz

- ปุ่มทำใหม่
- เคลียร์ localStorage
- ยืนยันก่อนเริ่มใหม่

## 5. Scoring Logic

สร้าง scoring algorithm ใน `src/utils/scoring.js`

Requirement:

1. แต่ละคำถามมี field:

```js
{
  id,
  text,
  type,
  dimension,
  reverseScore,
  category
}
```

2. คำนวณคะแนน:

- response 1–5
- ถ้า reverseScore = true ให้กลับคะแนน เช่น 1 -> 5, 2 -> 4
- รวมคะแนนตาม type
- normalize เป็น percentage

3. Main type:

- type ที่คะแนนสูงสุด

4. Confidence:

- High ถ้าคะแนน top type ห่างจากอันดับ 2 มากกว่า 12%
- Medium ถ้าห่าง 6–12%
- Low ถ้าห่างน้อยกว่า 6%
- ถ้า Low ให้แสดงข้อความว่า “ผลอาจยังไม่ชัด ควรอ่าน top 3 types ประกอบ”

5. Wing:

- wing ต้องเป็น type ข้างเคียงเท่านั้น
- Type 1 wings: 9 หรือ 2
- Type 2 wings: 1 หรือ 3
- Type 3 wings: 2 หรือ 4
- Type 4 wings: 3 หรือ 5
- Type 5 wings: 4 หรือ 6
- Type 6 wings: 5 หรือ 7
- Type 7 wings: 6 หรือ 8
- Type 8 wings: 7 หรือ 9
- Type 9 wings: 8 หรือ 1
- ถ้าคะแนนสอง wing ห่างกันน้อย ให้ balanced wings

6. Center:

- Body = 8 + 9 + 1
- Heart = 2 + 3 + 4
- Head = 5 + 6 + 7

7. Instinct:

- Self-Preservation, Social, One-to-One
- normalize เป็น %
- เรียง instinct stack

8. Result object:

```js
return {
  mainType,
  topTypes,
  confidence,
  wing,
  centerScores,
  primaryCenter,
  instinctScores,
  instinctStack,
  rawScores,
  normalizedScores
}
```

## 6. UI / Visual Design

ออกแบบให้ดู premium, colorful, modern, anime-inspired

Style direction:

- gradient background
- glassmorphism card
- soft shadow
- rounded corners
- pastel + vibrant accents
- character cards
- smooth hover animation
- progress bar สีสดใส
- result page ดูเหมือน character profile / RPG profile

Color palette suggestion:

- Background: #FFF7ED, #FDF2F8, #EEF2FF
- Primary: #7C3AED
- Secondary: #EC4899
- Accent: #F59E0B
- Success: #10B981
- Text dark: #1F2937
- Text muted: #6B7280

แต่ละ type ควรมีสีประจำ:

- Type 1: sapphire / clean blue
- Type 2: rose pink
- Type 3: gold / amber
- Type 4: violet
- Type 5: teal / deep blue
- Type 6: indigo
- Type 7: orange / sunshine
- Type 8: crimson / black-red
- Type 9: mint / sage green

UX:

- responsive mobile first
- font ไทยอ่านง่าย เช่น system font หรือ import Google Font ถ้าใช้ได้
- ปุ่มใหญ่ ใช้ง่าย
- accessibility:
  - aria-label
  - contrast พอเหมาะ
  - keyboard navigation พื้นฐาน
  - semantic HTML

## 7. Anime Character Generation

ต้องสร้างภาพตัวละครการ์ตูนอะนิเมะสำหรับแต่ละ type เพื่อใช้ประกอบใน app

ข้อกำหนดสำคัญ:

- ห้ามลอก style ศิลปินเฉพาะคนหรือ studio เฉพาะ เช่น ห้ามใช้คำว่า “in the style of [artist/studio]”
- ใช้คำว่า “original modern anime-inspired character illustration”
- ต้องเป็น original characters
- ใช้สีและสัญลักษณ์ให้เข้ากับ type
- ควรเป็นภาพครึ่งตัวหรือเต็มตัวบนพื้นหลังโปร่งใส ถ้าทำได้
- ขนาดแนะนำ 1024x1024
- โทนเหมาะกับ self-discovery app ไม่มืดหรือรุนแรงเกินไป

ถ้า environment มีเครื่องมือ image generation/API:

- สร้างไฟล์ภาพจริงใส่ไว้ใน `src/assets/characters/`
- ตั้งชื่อ:
  - `type-1-reformer.png`
  - `type-2-helper.png`
  - ...
  - `type-9-peacemaker.png`
- ห้าม commit API key
- ใช้ `.env.example` สำหรับตัวอย่าง environment variables

ถ้า environment ไม่มี image generation:

- ให้สร้างไฟล์ SVG character placeholder ที่สวยงาม ใช้ได้จริงใน app
- แต่ละ SVG ต้องมีเอกลักษณ์ สี และ icon ต่างกัน
- และสร้างไฟล์ `docs/image-prompts.md` ที่มี prompt สำหรับ generate ภาพทั้ง 9 type แยกอย่างละเอียด

Image prompts ที่ต้องสร้าง:

### Type 1 – The Reformer

Original modern anime-inspired character illustration, principled young guardian, neat sapphire and white outfit, elegant checklist scroll, calm determined eyes, clean geometric motifs, subtle glowing halo of order, friendly but serious expression, high quality, colorful, transparent background, no text, no logo

### Type 2 – The Helper

Original modern anime-inspired character illustration, warm-hearted healer character, rose pink outfit, soft cardigan, heart-shaped light aura, gentle smile, hands offering a glowing cup of tea, caring and emotionally expressive, cozy pastel colors, transparent background, no text, no logo

### Type 3 – The Achiever

Original modern anime-inspired character illustration, confident performer hero, gold and amber outfit, sleek jacket, trophy/star motif, dynamic pose, charismatic smile, spotlight glow, energetic polished look, transparent background, no text, no logo

### Type 4 – The Individualist

Original modern anime-inspired character illustration, poetic creative character, violet and deep magenta outfit, artistic scarf, moon and paintbrush motifs, expressive eyes, dreamy atmosphere, elegant melancholic beauty but hopeful, transparent background, no text, no logo

### Type 5 – The Investigator

Original modern anime-inspired character illustration, quiet scholar-mage, teal and deep blue outfit, glasses, floating books and constellation diagrams, curious analytical expression, calm intellectual aura, minimal futuristic library motif, transparent background, no text, no logo

### Type 6 – The Loyalist

Original modern anime-inspired character illustration, loyal strategist companion, indigo outfit with protective cloak, lantern and shield motif, alert but kind eyes, prepared and dependable, subtle stars in background, transparent background, no text, no logo

### Type 7 – The Enthusiast

Original modern anime-inspired character illustration, cheerful adventurer, orange sunshine outfit, travel goggles, confetti and floating balloons, big smile, energetic pose, playful magical sparkles, bright optimistic colors, transparent background, no text, no logo

### Type 8 – The Challenger

Original modern anime-inspired character illustration, bold warrior leader, crimson and dark outfit, strong posture, protective gauntlets, fire and lion motif, intense confident eyes, powerful but noble, transparent background, no text, no logo

### Type 9 – The Peacemaker

Original modern anime-inspired character illustration, peaceful nature mediator, mint and sage green outfit, soft robe, dove and leaf motifs, relaxed gentle smile, harmonious calm aura, dreamy nature background elements, transparent background, no text, no logo

## 8. Content Data Files

สร้าง data files แยกชัดเจน:

### `src/data/enneagramTypes.js`

ต้อง export array/object ของ 9 types พร้อมข้อมูลละเอียด เช่น:

```js
{
  id: 1,
  name: "The Reformer",
  thaiName: "นักปรับปรุงผู้ยึดหลักการ",
  shortName: "ผู้สมบูรณ์แบบ",
  tagline: "...",
  color: "...",
  characterImage: "...",
  coreFear: "...",
  coreDesire: "...",
  coreMotivation: "...",
  worldview: "...",
  strengths: [],
  challenges: [],
  blindSpots: [],
  healthyPattern: "...",
  averagePattern: "...",
  unhealthyPattern: "...",
  relationship: {...},
  work: {...},
  growthTips: [],
  affirmation: "...",
  misunderstoodAs: "...",
  dailyExamples: []
}
```

### `src/data/questions.js`

- มีคำถามอย่างน้อย 72 ข้อ
- ต้องมีคำถามสำหรับ core type และ instinct
- คำถามต้องกระจาย type อย่างยุติธรรม
- มี reverseScore บางข้อเพื่อกัน bias

### `src/data/wings.js`

- เก็บคำอธิบาย wing ทั้ง 18 แบบ

### `src/data/growthStress.js`

- เก็บ stress/growth direction และคำอธิบายทุก type

### `src/data/instincts.js`

- เก็บคำอธิบาย 3 instincts และ instinct stack เบื้องต้น

## 9. Pages / Components

สร้าง components:

### Header

- logo
- nav ไปยัง quiz, types, about
- mobile friendly

### Hero

- headline
- subheadline
- CTA เริ่มทำแบบทดสอบ
- character collage หรือ type cards

### QuizIntro

- อธิบายวิธีตอบ
- disclaimer
- เวลาโดยประมาณ เช่น 8–12 นาที

### QuizQuestion

- แสดงคำถาม
- Likert buttons 1–5
- keyboard accessible

### ProgressBar

- percentage
- current step

### ResultCard

- main result
- character image
- score
- confidence

### TypeDetail

- sections ของรายละเอียดทั้งหมด

### DimensionSection

- reusable section สำหรับ relationship, work, growth, stress

### ShareCard

- copy result summary

### Footer

- disclaimer
- credits

## 10. README Requirement

`README.md` ต้องมี:

- ชื่อโปรเจกต์
- คำอธิบายโปรเจกต์
- features
- tech stack
- วิธีติดตั้ง
- วิธีรัน local
- วิธี build
- วิธี deploy Vercel
- วิธี push GitHub
- environment variables ถ้ามี
- disclaimer เรื่อง Enneagram
- note เรื่อง image generation
- project structure

Commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

ถ้า deploy ด้วย Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

GitHub:

```bash
git init
git add .
git commit -m "Initial EnneaQuest webapp"
git branch -M main
git remote add origin https://github.com/NateeSu/enneagram.git
git push -u origin main
```

## 11. GitHub & Vercel Tasks

ถ้ามี permission และ tools:

1. ใช้ repository ที่กำหนดเท่านั้น: `https://github.com/NateeSu/enneagram.git`
2. ถ้า workspace ยังไม่ได้เชื่อม remote ให้ตั้งค่า remote เป็น repository นี้
3. พัฒนาแอพให้เสร็จสมบูรณ์
4. รัน install/build/test หรือ validation ที่เหมาะสมจนผ่าน
5. เมื่อพัฒนาและทดสอบสำเร็จแล้ว ให้ commit โค้ดทั้งหมดและ push ขึ้น GitHub ได้เลย โดยไม่ต้องถามยืนยันซ้ำ
6. deploy บน Vercel
7. ส่ง final output พร้อม:
   - GitHub repo URL: `https://github.com/NateeSu/enneagram.git`
   - Vercel live URL
   - commit hash ล่าสุด ถ้ามี
   - คำสั่งที่ใช้
   - สิ่งที่ทำสำเร็จ
   - สิ่งที่ต้องตั้งค่าเพิ่มถ้ามี

ถ้าไม่มี permission:

1. สร้างโปรเจกต์ให้ build ผ่าน
2. run test/build
3. เขียน README พร้อมคำสั่ง push/deploy
4. บอกข้อจำกัดอย่างชัดเจน

## 12. Quality Bar

ก่อนจบงาน ต้องตรวจ:

- npm install สำเร็จ
- npm run build สำเร็จ
- ไม่มี error ใน console ที่สำคัญ
- responsive ทั้ง desktop และ mobile
- quiz flow ใช้งานได้จริง
- scoring ถูกต้อง
- result แสดงครบ
- images หรือ SVG assets โหลดได้
- README ครบ
- ไม่มี API key หรือ secret ใน repo
- ไม่มี copyrighted character หรือ style imitation
- text ภาษาไทยอ่านลื่นและไม่ผิดหลักสำคัญ

## 13. Final Response Format

เมื่อทำเสร็จ ให้ตอบสรุปเป็นภาษาไทย:

1. ทำอะไรไปแล้ว
2. โครงสร้างโปรเจกต์
3. วิธีรัน local
4. วิธี deploy
5. GitHub URL ถ้ามี
6. Vercel URL ถ้ามี
7. ข้อจำกัด / สิ่งที่ต้องทำต่อ
8. ไฟล์สำคัญที่ควรดู

เริ่มทำทันทีโดยไม่ต้องถามคำถามเพิ่ม ยกเว้นจำเป็นจริง ๆ เช่น ต้องการ GitHub repo URL หรือ Vercel project name แต่ถ้าไม่มี ให้ใช้ค่า default:

- repo URL: `https://github.com/NateeSu/enneagram.git`
- repo name: `enneagram`
- project name: `enneagram`
- framework: Vite
- language: JavaScript / React

สำคัญ:
หลังจากพัฒนาเสร็จและตรวจสอบว่า build/test ผ่านแล้ว ให้ push ขึ้น `https://github.com/NateeSu/enneagram.git` ทันที หากไม่สามารถ push ได้ ให้รายงาน error ที่พบและบอกขั้นตอนที่ผู้ใช้ต้องทำต่ออย่างชัดเจน
