import { useMemo, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProgressBar from './components/ProgressBar'
import QuizIntro from './components/QuizIntro'
import QuizQuestion from './components/QuizQuestion'
import ResultCard from './components/ResultCard'
import ShareCard from './components/ShareCard'
import TypeCharacter from './components/TypeCharacter'
import TypeDetail from './components/TypeDetail'
import { enneagramTypes, typesById } from './data/enneagramTypes'
import { questions } from './data/questions'
import { buildQuizResult } from './utils/resultAnalyzer'
import './styles.css'

function App() {
  const savedAnswers = localStorage.getItem('enneaquest:answers')
  const [view, setView] = useState(savedAnswers ? 'result' : 'home')
  const [answers, setAnswers] = useState(() => (savedAnswers ? JSON.parse(savedAnswers) : {}))
  const [currentIndex, setCurrentIndex] = useState(0)

  const analysis = useMemo(() => {
    if (Object.keys(answers).length < questions.length) return null
    return buildQuizResult(questions, answers)
  }, [answers])

  function startQuiz() {
    setView('intro')
    window.setTimeout(() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  function beginQuestions() {
    setCurrentIndex(0)
    setView('quiz')
  }

  function answerQuestion(value) {
    const nextAnswers = { ...answers, [questions[currentIndex].id]: value }
    setAnswers(nextAnswers)

    if (currentIndex === questions.length - 1) {
      localStorage.setItem('enneaquest:answers', JSON.stringify(nextAnswers))
      setView('result')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setCurrentIndex((index) => index + 1)
  }

  function retakeQuiz() {
    if (!window.confirm('เริ่มทำใหม่และลบผลเดิมใช่ไหม?')) return
    localStorage.removeItem('enneaquest:answers')
    setAnswers({})
    setCurrentIndex(0)
    setView('intro')
  }

  const resultType = analysis ? typesById[analysis.mainType] : null

  return (
    <div className="app-shell">
      <Header onStart={startQuiz} onHome={() => setView('home')} />
      <main>
        {view === 'home' && (
          <>
            <Hero onStart={startQuiz} />
            <section className="about-section" id="about">
              <div>
                <h2>Enneagram คืออะไร</h2>
                <p>
                  Enneagram เป็นระบบทำความเข้าใจบุคลิกภาพผ่านแรงจูงใจภายใน
                  เช่น ความกลัว ความปรารถนา และ pattern การป้องกันตัว
                  ไม่ใช่การวินิจฉัยโรคหรือแบบทดสอบทางคลินิก
                </p>
              </div>
              <div className="notice-card">
                <strong>ข้อจำกัดที่ควรรู้</strong>
                <p>
                  Enneagram มีประโยชน์ในการสะท้อนตัวเองและบทสนทนาเรื่อง growth
                  แต่หลักฐานทางวิทยาศาสตร์ยังจำกัดเมื่อเทียบกับเครื่องมือ psychometric มาตรฐาน
                </p>
              </div>
            </section>
            <section className="types-section" id="types">
              <div className="section-heading">
                <h2>ทั้ง 9 Type</h2>
                <p>แต่ละ type คือ pattern แรงจูงใจ ไม่ใช่กล่องตายตัวของตัวตน</p>
              </div>
              <div className="type-grid">
                {enneagramTypes.map((type) => (
                  <article className="type-card" key={type.id} style={{ '--type-color': type.color, '--type-accent': type.accent }}>
                    <TypeCharacter type={type} size="medium" />
                    <span>Type {type.id}</span>
                    <h3>{type.shortName}</h3>
                    <p>{type.tagline}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {view === 'intro' && <QuizIntro onBegin={beginQuestions} />}

        {view === 'quiz' && (
          <section className="quiz-stage" id="quiz">
            <ProgressBar current={currentIndex + 1} total={questions.length} />
            <QuizQuestion
              question={questions[currentIndex]}
              value={answers[questions[currentIndex].id]}
              onAnswer={answerQuestion}
            />
            <div className="quiz-controls">
              <button
                className="ghost-button"
                type="button"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
              >
                ย้อนกลับ
              </button>
              <span>{questions[currentIndex].category === 'instinct' ? 'Stage 2: Instinct' : 'Stage 1: Core Type'}</span>
            </div>
          </section>
        )}

        {view === 'result' && analysis && resultType && (
          <section className="result-page">
            <ResultCard type={resultType} analysis={analysis} />
            <ShareCard type={resultType} />
            <TypeDetail type={resultType} analysis={analysis} types={enneagramTypes} />
            <div className="retake-row">
              <button className="secondary-button" type="button" onClick={retakeQuiz}>ทำแบบทดสอบใหม่</button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
