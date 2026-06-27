const TYPE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const WING_MAP = {
  1: [9, 2],
  2: [1, 3],
  3: [2, 4],
  4: [3, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7, 9],
  9: [8, 1],
}

const CENTER_MAP = {
  Body: [8, 9, 1],
  Heart: [2, 3, 4],
  Head: [5, 6, 7],
}

const INSTINCT_KEYS = ['selfPreservation', 'social', 'oneToOne']

export function reverseLikertScore(score) {
  return 6 - Number(score)
}

function emptyTypeScores() {
  return TYPE_IDS.reduce((scores, type) => {
    scores[type] = 0
    return scores
  }, {})
}

function emptyMaxScores() {
  return TYPE_IDS.reduce((scores, type) => {
    scores[type] = 0
    return scores
  }, {})
}

function emptyInstinctScores() {
  return INSTINCT_KEYS.reduce((scores, key) => {
    scores[key] = { raw: 0, max: 0, percent: 0 }
    return scores
  }, {})
}

export function calculateScores(questions, answers) {
  const rawScores = emptyTypeScores()
  const maxScores = emptyMaxScores()
  const instinctScores = emptyInstinctScores()

  questions.forEach((question) => {
    const answer = answers[question.id]
    if (!answer) return

    const score = question.reverseScore ? reverseLikertScore(answer) : Number(answer)

    if (question.category === 'instinct' && question.instinct) {
      instinctScores[question.instinct].raw += score
      instinctScores[question.instinct].max += 5
      return
    }

    if (question.type) {
      rawScores[question.type] += score
      maxScores[question.type] += 5
    }
  })

  const normalizedScores = TYPE_IDS.reduce((scores, type) => {
    scores[type] = maxScores[type] ? Math.round((rawScores[type] / maxScores[type]) * 100) : 0
    return scores
  }, {})

  INSTINCT_KEYS.forEach((key) => {
    const item = instinctScores[key]
    item.percent = item.max ? Math.round((item.raw / item.max) * 100) : 0
  })

  return {
    rawScores,
    maxScores,
    normalizedScores,
    instinctScores,
  }
}

function getConfidence(topTypes) {
  const gap = (topTypes[0]?.percent ?? 0) - (topTypes[1]?.percent ?? 0)

  if (gap > 12) {
    return { level: 'High', gap, message: 'ผลค่อนข้างชัดจากคะแนน Type หลักที่นำอันดับสอง' }
  }

  if (gap >= 6) {
    return { level: 'Medium', gap, message: 'ผลมีแนวโน้มชัด แต่ควรอ่าน Type ใกล้เคียงประกอบ' }
  }

  return {
    level: 'Low',
    gap,
    message: 'ผลอาจยังไม่ชัด ควรอ่าน top 3 types ประกอบ',
  }
}

function getWing(mainType, normalizedScores) {
  const [left, right] = WING_MAP[mainType]
  const leftScore = normalizedScores[left] ?? 0
  const rightScore = normalizedScores[right] ?? 0
  const gap = Math.abs(leftScore - rightScore)

  if (gap < 6) {
    return {
      label: `${mainType}w${left}/${right}`,
      type: null,
      balanced: true,
      message: 'balanced wings',
      options: [left, right],
    }
  }

  const wingType = leftScore > rightScore ? left : right

  return {
    label: `${mainType}w${wingType}`,
    type: wingType,
    balanced: false,
    options: [left, right],
  }
}

function getCenterScores(rawScores) {
  return Object.fromEntries(
    Object.entries(CENTER_MAP).map(([key, types]) => [
      key,
      {
        key,
        types,
        raw: types.reduce((sum, type) => sum + (rawScores[type] ?? 0), 0),
      },
    ]),
  )
}

export function analyzeResults(scoreResult) {
  const topTypes = TYPE_IDS.map((type) => ({
    type,
    raw: scoreResult.rawScores[type],
    percent: scoreResult.normalizedScores[type],
  })).sort((a, b) => b.percent - a.percent || b.raw - a.raw || a.type - b.type)

  const mainType = topTypes[0].type
  const centerScores = getCenterScores(scoreResult.rawScores)
  const primaryCenter = Object.values(centerScores).sort((a, b) => b.raw - a.raw)[0]
  const instinctStack = Object.entries(scoreResult.instinctScores)
    .map(([key, value]) => ({ key, ...value }))
    .sort((a, b) => b.percent - a.percent)

  return {
    mainType,
    topTypes: topTypes.slice(0, 3),
    confidence: getConfidence(topTypes),
    wing: getWing(mainType, scoreResult.normalizedScores),
    centerScores,
    primaryCenter,
    instinctScores: scoreResult.instinctScores,
    instinctStack,
    rawScores: scoreResult.rawScores,
    normalizedScores: scoreResult.normalizedScores,
  }
}

export { CENTER_MAP, INSTINCT_KEYS, TYPE_IDS, WING_MAP }
