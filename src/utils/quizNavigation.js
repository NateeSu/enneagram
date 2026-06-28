export function getIndexAfterAnswer(currentIndex) {
  return currentIndex
}

export function canAdvanceQuiz(answer) {
  return Boolean(answer)
}

export function getIndexAfterNext(currentIndex, totalQuestions) {
  return Math.min(currentIndex + 1, totalQuestions - 1)
}
