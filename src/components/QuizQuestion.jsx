import { likertOptions } from '../data/questions'

export default function QuizQuestion({ question, value, onAnswer }) {
  return (
    <fieldset className="question-card">
      <legend>{question.text}</legend>
      <p>{question.dimension}</p>
      <div className="likert-grid">
        {likertOptions.map((option) => (
          <button
            className={value === option.value ? 'likert-option is-selected' : 'likert-option'}
            key={option.value}
            type="button"
            onClick={() => onAnswer(option.value)}
            aria-pressed={value === option.value}
            data-testid={`likert-${option.value}`}
          >
            <span>{option.value}</span>
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
