import { analyzeResults, calculateScores } from './scoring'

export function buildQuizResult(questions, answers) {
  return analyzeResults(calculateScores(questions, answers))
}
