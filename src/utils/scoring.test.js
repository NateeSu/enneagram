import { describe, expect, it } from 'vitest'
import { analyzeResults, calculateScores, reverseLikertScore } from './scoring'

const coreQuestions = [
  { id: 't5-a', type: 5, category: 'core', reverseScore: false },
  { id: 't5-b', type: 5, category: 'core', reverseScore: false },
  { id: 't4-a', type: 4, category: 'core', reverseScore: false },
  { id: 't6-a', type: 6, category: 'core', reverseScore: false },
  { id: 't1-a', type: 1, category: 'core', reverseScore: true },
  { id: 't8-a', type: 8, category: 'core', reverseScore: false },
  { id: 'sp-a', instinct: 'selfPreservation', category: 'instinct', reverseScore: false },
  { id: 'so-a', instinct: 'social', category: 'instinct', reverseScore: false },
  { id: 'sx-a', instinct: 'oneToOne', category: 'instinct', reverseScore: false },
]

describe('scoring utilities', () => {
  it('reverses a 1-5 Likert score', () => {
    expect(reverseLikertScore(1)).toBe(5)
    expect(reverseLikertScore(3)).toBe(3)
    expect(reverseLikertScore(5)).toBe(1)
  })

  it('calculates raw and normalized type and instinct scores', () => {
    const answers = {
      't5-a': 5,
      't5-b': 5,
      't4-a': 3,
      't6-a': 4,
      't1-a': 3,
      't8-a': 2,
      'sp-a': 4,
      'so-a': 2,
      'sx-a': 5,
    }

    const result = calculateScores(coreQuestions, answers)

    expect(result.rawScores[5]).toBe(10)
    expect(result.rawScores[1]).toBe(3)
    expect(result.normalizedScores[5]).toBe(100)
    expect(result.normalizedScores[8]).toBe(40)
    expect(result.instinctScores.oneToOne.raw).toBe(5)
    expect(result.instinctScores.social.percent).toBe(40)
  })

  it('returns main type, top three, confidence, wing, center, and instinct stack', () => {
    const answers = {
      't5-a': 5,
      't5-b': 5,
      't4-a': 3,
      't6-a': 4,
      't1-a': 3,
      't8-a': 2,
      'sp-a': 4,
      'so-a': 2,
      'sx-a': 5,
    }

    const scoreResult = calculateScores(coreQuestions, answers)
    const analysis = analyzeResults(scoreResult)

    expect(analysis.mainType).toBe(5)
    expect(analysis.topTypes.map((item) => item.type)).toEqual([5, 6, 1])
    expect(analysis.confidence.level).toBe('High')
    expect(analysis.wing.label).toBe('5w6')
    expect(analysis.primaryCenter.key).toBe('Head')
    expect(analysis.centerScores.Head.raw).toBe(14)
    expect(analysis.instinctStack.map((item) => item.key)).toEqual([
      'oneToOne',
      'selfPreservation',
      'social',
    ])
  })
})
