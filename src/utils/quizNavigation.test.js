import { describe, expect, it } from 'vitest'
import { canAdvanceQuiz, getIndexAfterAnswer, getIndexAfterNext } from './quizNavigation'

describe('quiz navigation', () => {
  it('keeps the current question visible after selecting an answer', () => {
    expect(getIndexAfterAnswer(4)).toBe(4)
  })

  it('only allows the Next button when the current question has an answer', () => {
    expect(canAdvanceQuiz(undefined)).toBe(false)
    expect(canAdvanceQuiz(0)).toBe(false)
    expect(canAdvanceQuiz(3)).toBe(true)
  })

  it('advances one question at a time when Next is pressed', () => {
    expect(getIndexAfterNext(4, 12)).toBe(5)
  })

  it('stays on the final question when Next is pressed at the end', () => {
    expect(getIndexAfterNext(11, 12)).toBe(11)
  })
})
