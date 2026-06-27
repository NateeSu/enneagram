import { centers, growthStress } from '../data/growthStress'
import { describeInstinctStack, instincts } from '../data/instincts'
import { wings } from '../data/wings'
import DimensionSection from './DimensionSection'

function List({ items }) {
  return <ul className="pill-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

function ScoreBars({ analysis, types }) {
  return (
    <div className="score-grid">
      {types.map((type) => (
        <div className="score-row" key={type.id}>
          <span>Type {type.id}</span>
          <div className="score-track">
            <span style={{ width: `${analysis.normalizedScores[type.id]}%`, background: type.color }} />
          </div>
          <strong>{analysis.normalizedScores[type.id]}%</strong>
        </div>
      ))}
    </div>
  )
}

export default function TypeDetail({ type, analysis, types }) {
  const wing = wings[analysis.wing.label] ?? {
    description: analysis.wing.balanced
      ? 'คะแนนปีกสองด้านใกล้กัน คุณอาจใช้พลังของทั้งสอง wing ตามบริบท'
      : 'ใช้ wing เป็นสีสันเสริมของ type หลัก',
    growth: 'อ่านสอง wing ประกอบและสังเกตว่าด้านไหนช่วยให้คุณเติบโต',
  }
  const movement = growthStress[type.id]
  const center = centers[analysis.primaryCenter.key]

  return (
    <div className="detail-grid">
      <DimensionSection title="Core Fear / Desire / Motivation" tone="warm">
        <dl className="definition-grid">
          <div><dt>Core Fear</dt><dd>{type.coreFear}</dd></div>
          <div><dt>Core Desire</dt><dd>{type.coreDesire}</dd></div>
          <div><dt>Core Motivation</dt><dd>{type.coreMotivation}</dd></div>
          <div><dt>Worldview</dt><dd>{type.worldview}</dd></div>
        </dl>
      </DimensionSection>

      <DimensionSection title="จุดแข็งและสิ่งท้าทาย">
        <h4>จุดแข็ง</h4>
        <List items={type.strengths} />
        <h4>สิ่งที่ควรระวัง</h4>
        <List items={type.challenges} />
        <p><strong>Blind spot:</strong> {type.blindSpots[0]}</p>
      </DimensionSection>

      <DimensionSection title="Healthy / Average / Unhealthy Patterns">
        <p><strong>Healthy:</strong> {type.healthyPattern}</p>
        <p><strong>Average:</strong> {type.averagePattern}</p>
        <p><strong>Unhealthy:</strong> {type.unhealthyPattern}</p>
      </DimensionSection>

      <DimensionSection title="Wing Analysis" tone="cool">
        <p>{wing.description}</p>
        <p>{wing.growth}</p>
      </DimensionSection>

      <DimensionSection title="Center Analysis">
        <p><strong>{center.label}</strong> – {center.theme}</p>
        <p>{center.description}</p>
        <div className="center-scores">
          {Object.values(analysis.centerScores).map((item) => (
            <span key={item.key}>{item.key}: {item.raw}</span>
          ))}
        </div>
      </DimensionSection>

      <DimensionSection title="Instinctual Variant" tone="cool">
        <p>{describeInstinctStack(analysis.instinctStack)}</p>
        <div className="instinct-grid">
          {analysis.instinctStack.map((item) => (
            <article key={item.key}>
              <strong>{instincts[item.key].label}</strong>
              <span>{item.percent}%</span>
              <p>{instincts[item.key].description}</p>
            </article>
          ))}
        </div>
      </DimensionSection>

      <DimensionSection title="Stress & Growth">
        <p><strong>Growth:</strong> {movement.growth}</p>
        <p><strong>Stress:</strong> {movement.stress}</p>
        <List items={movement.practices} />
      </DimensionSection>

      <DimensionSection title="Relationship Insight" tone="warm">
        <p><strong>รูปแบบความรัก:</strong> {type.relationship.loveStyle}</p>
        <p><strong>Conflict pattern:</strong> {type.relationship.conflict}</p>
        <p><strong>สิ่งที่ต้องการ:</strong> {type.relationship.needs}</p>
        <p><strong>วิธีสื่อสาร:</strong> {type.relationship.communicate}</p>
        <p><strong>ควรระวัง:</strong> {type.relationship.caution}</p>
      </DimensionSection>

      <DimensionSection title="Work & Career Insight">
        <p><strong>Work strengths:</strong> {type.work.strengths.join(', ')}</p>
        <p><strong>Ideal environment:</strong> {type.work.environment}</p>
        <p><strong>Leadership style:</strong> {type.work.leadership}</p>
        <p><strong>Stress triggers:</strong> {type.work.stressTriggers.join(', ')}</p>
        <p><strong>Career suggestions:</strong> งานที่ได้ใช้ {type.work.strengths.slice(0, 3).join(', ')} โดยไม่ฟันธงว่าเหมาะกับสายเดียวเท่านั้น</p>
      </DimensionSection>

      <DimensionSection title="Personal Growth Plan" tone="warm">
        <ol className="growth-plan">
          <li>Day 1: เขียนว่าแรงขับหลักของฉันช่วยและทำให้เหนื่อยอย่างไร</li>
          <li>Day 2: สังเกต Core Fear ตอนตัดสินใจหนึ่งเรื่อง</li>
          <li>Day 3: ทำ practice หนึ่งข้อจาก growth list</li>
          <li>Day 4: ถามคนใกล้ตัวว่าเขารับรู้จุดแข็งอะไรในตัวฉัน</li>
          <li>Day 5: เลือกสิ่งหนึ่งที่ควรหยุดทำ: {type.challenges[0]}</li>
          <li>Day 6: เริ่มทำสิ่งหนึ่ง: {type.growthTips[0]}</li>
          <li>Day 7: ทบทวน affirmation: “{type.affirmation}”</li>
        </ol>
      </DimensionSection>

      <DimensionSection title="Score Breakdown" tone="cool">
        <ScoreBars analysis={analysis} types={types} />
        <p>Top 3: {analysis.topTypes.map((item) => `Type ${item.type} (${item.percent}%)`).join(', ')}</p>
        <p>{analysis.confidence.message}</p>
      </DimensionSection>
    </div>
  )
}
