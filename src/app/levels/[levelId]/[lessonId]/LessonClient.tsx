'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  FiBook,
  FiHeadphones,
  FiFileText,
  FiCheckCircle,
  FiXCircle,
  FiArrowLeft,
  FiArrowRight,
  FiStar,
  FiVolume2,
} from 'react-icons/fi'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/lib/database'
import { Lesson, Level } from '@/types'
import { AudioPlayer } from '@/components/AudioPlayer'

type Section = 'introduction' | 'vocabulary' | 'grammar' | 'listening' | 'reading' | 'quiz' | 'complete'

export default function LessonClient() {
  const params = useParams()
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const levelId = params.levelId as string
  const lessonId = params.lessonId as string

  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [level, setLevel] = useState<Level | null>(null)
  const [currentSection, setCurrentSection] = useState<Section>('introduction')
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)

      // Load lesson
      const { data: lessonData } = await db.lessons.getById(lessonId)
      setLesson(lessonData)

      // Load level
      const { data: levels } = await db.levels.getAll()
      const currentLevel = levels?.find(l => l.id === levelId)
      setLevel(currentLevel || null)

      setIsLoading(false)
    }

    loadData()
  }, [lessonId, levelId])

  useEffect(() => {
    // Redirect if not authenticated and lesson is not free
    if (!isLoading && lesson && !lesson.isFree && !isAuthenticated) {
      router.push('/pricing')
    }
  }, [lesson, isAuthenticated, isLoading, router])

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex })
  }

  const handleQuizSubmit = async () => {
    if (!lesson?.content.listening?.questions) return

    let correctAnswers = 0
    lesson.content.listening.questions.forEach((q, index) => {
      if (quizAnswers[index] === q.correctAnswer) {
        correctAnswers++
      }
    })

    const totalQuestions = lesson.content.listening.questions.length
    const finalScore = Math.round((correctAnswers / totalQuestions) * 100)
    setScore(finalScore)
    setQuizSubmitted(true)

    // Save progress
    if (user && lesson) {
      await db.progress.upsert(user.id, lesson.id, finalScore, finalScore >= 70)
    }

    setCurrentSection('complete')
  }

  const sections: Section[] = ['introduction', 'vocabulary', 'grammar', 'listening', 'reading', 'quiz']

  const currentSectionIndex = sections.indexOf(currentSection)

  const goToNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSection(sections[currentSectionIndex + 1])
    }
  }

  const goToPreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSection(sections[currentSectionIndex - 1])
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-600">Загрузка урока...</div>
      </div>
    )
  }

  if (!lesson || !level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Урок не найден</h1>
          <Link href={`/levels/${levelId}`} className="btn-primary">
            Вернуться к урокам
          </Link>
        </div>
      </div>
    )
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'introduction':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {lesson.content.introduction.title}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">{lesson.content.introduction.overview}</p>
            </div>

            <div className="card bg-primary-50 border-primary-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Цели урока:</h3>
              <ul className="space-y-2">
                {lesson.content.introduction.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-yellow-50 border-yellow-200">
              <div className="flex items-start gap-3">
                <FiStar className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Совет</h3>
                  <p className="text-neutral-700">
                    Внимательно изучайте каждый раздел урока. Не спешите переходить к следующему,
                    пока не поймете текущий материал.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'vocabulary':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Новые слова</h2>
              <p className="text-neutral-600 mb-6">
                Выучите эти слова перед тем, как продолжить урок
              </p>
            </div>

            <div className="grid gap-4">
              {lesson.content.grammar.examples.map((example, index) => (
                <div key={index} className="card hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-xl font-semibold text-neutral-900 mb-1">
                        {example.spanish}
                      </div>
                      <div className="text-neutral-600">{example.russian}</div>
                    </div>
                    <AudioPlayer text={example.spanish} lang="es-ES" />
                  </div>
                </div>
              ))}
            </div>

            {lesson.content.phrases && lesson.content.phrases.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Полезные фразы</h3>
                <div className="grid gap-4">
                  {lesson.content.phrases.map((phrase, index) => (
                    <div key={index} className="card bg-green-50 border-green-200">
                      <div className="flex items-start gap-3">
                        <FiBook className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-neutral-900 mb-1">
                            {phrase.spanish}
                          </div>
                          <div className="text-neutral-700 mb-1">{phrase.russian}</div>
                          {phrase.context && (
                            <div className="text-sm text-neutral-600 italic">{phrase.context}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )

      case 'grammar':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {lesson.content.grammar.title}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">{lesson.content.grammar.explanation}</p>
            </div>

            <div className="card bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Примеры</h3>
              <div className="space-y-4">
                {lesson.content.grammar.examples.map((example, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-blue-200">
                    <div className="font-mono text-lg text-neutral-900 mb-2">{example.spanish}</div>
                    <div className="text-neutral-600">{example.russian}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-orange-50 border-orange-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  !
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Запомните</h3>
                  <p className="text-neutral-700">
                    Практикуйте новые грамматические правила, составляя собственные примеры. Это
                    поможет лучше запомнить материал.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'listening':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Аудирование</h2>
              <p className="text-neutral-600 mb-6">Послушайте аудио и ответьте на вопросы</p>
            </div>

            {lesson.content.listening && (
              <>
                <div className="card bg-purple-50 border-purple-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-purple-500 rounded-lg">
                      <FiHeadphones className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900">Аудио урока</h3>
                      <p className="text-sm text-neutral-600">Послушайте несколько раз</p>
                    </div>
                    <button className="btn-primary btn-md">
                      <FiVolume2 className="w-5 h-5 mr-2" />
                      Слушать
                    </button>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">Текст:</h4>
                    <p className="text-neutral-900 font-mono">{lesson.content.listening.transcript}</p>
                  </div>
                </div>

                {lesson.content.listening.questions && lesson.content.listening.questions.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Вопросы</h3>
                    <div className="space-y-4">
                      {lesson.content.listening.questions.map((question, qIndex) => (
                        <div key={qIndex} className="card">
                          <h4 className="font-semibold text-neutral-900 mb-3">
                            {qIndex + 1}. {question.question}
                          </h4>
                          <div className="space-y-2">
                            {question.options.map((option, oIndex) => (
                              <label
                                key={oIndex}
                                className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                  quizAnswers[qIndex] === oIndex
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-neutral-200 hover:border-neutral-300'
                                } ${
                                  quizSubmitted
                                    ? oIndex === question.correctAnswer
                                      ? 'border-green-500 bg-green-50'
                                      : quizAnswers[qIndex] === oIndex
                                      ? 'border-red-500 bg-red-50'
                                      : 'opacity-50'
                                    : ''
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`question-${qIndex}`}
                                  checked={quizAnswers[qIndex] === oIndex}
                                  onChange={() => handleQuizAnswer(qIndex, oIndex)}
                                  disabled={quizSubmitted}
                                  className="w-4 h-4 text-primary-600"
                                />
                                <span className="flex-1">{option}</span>
                                {quizSubmitted && oIndex === question.correctAnswer && (
                                  <FiCheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {quizSubmitted &&
                                  quizAnswers[qIndex] === oIndex &&
                                  oIndex !== question.correctAnswer && (
                                    <FiXCircle className="w-5 h-5 text-red-600" />
                                  )}
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )

      case 'reading':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Чтение</h2>
              <p className="text-neutral-600 mb-6">Прочитайте текст и попытайтесь понять его смысл</p>
            </div>

            <div className="card bg-indigo-50 border-indigo-200">
              <div className="flex items-center gap-3 mb-4">
                <FiFileText className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-neutral-900">Текст для чтения</h3>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <p className="text-lg leading-relaxed text-neutral-800 font-serif">
                  {lesson.readingText}
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Советы по чтению:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Сначала прочитайте весь текст, не останавливаясь на незнакомых словах
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Попытайтесь понять общий смысл из контекста
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Прочитайте текст второй раз, обращая внимание на детали
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )

      case 'quiz':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Итоговый тест</h2>
              <p className="text-neutral-600 mb-6">
                Ответьте на вопросы, чтобы проверить свои знания
              </p>
            </div>

            {lesson.content.listening?.questions && (
              <>
                <div className="space-y-4">
                  {lesson.content.listening.questions.map((question, qIndex) => (
                    <div key={qIndex} className="card">
                      <h4 className="font-semibold text-neutral-900 mb-3">
                        {qIndex + 1}. {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => (
                          <label
                            key={oIndex}
                            className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              quizAnswers[qIndex] === oIndex
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-neutral-200 hover:border-neutral-300'
                            } ${
                              quizSubmitted
                                ? oIndex === question.correctAnswer
                                  ? 'border-green-500 bg-green-50'
                                  : quizAnswers[qIndex] === oIndex
                                  ? 'border-red-500 bg-red-50'
                                  : 'opacity-50'
                                : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              checked={quizAnswers[qIndex] === oIndex}
                              onChange={() => handleQuizAnswer(qIndex, oIndex)}
                              disabled={quizSubmitted}
                              className="w-4 h-4 text-primary-600"
                            />
                            <span className="flex-1">{option}</span>
                            {quizSubmitted && oIndex === question.correctAnswer && (
                              <FiCheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            {quizSubmitted &&
                              quizAnswers[qIndex] === oIndex &&
                              oIndex !== question.correctAnswer && (
                                <FiXCircle className="w-5 h-5 text-red-600" />
                              )}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {!quizSubmitted && (
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < (lesson.content.listening?.questions?.length || 0)}
                    className="btn-primary btn-lg w-full"
                  >
                    Завершить тест
                  </button>
                )}
              </>
            )}
          </div>
        )

      case 'complete':
        return (
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-4">
              <FiCheckCircle className="w-16 h-16 text-green-600" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Урок завершен!</h2>
              <p className="text-lg text-neutral-600 mb-2">Ваш результат:</p>
              <div className="text-5xl font-bold text-primary-600 mb-6">{score}%</div>
            </div>

            {score >= 70 ? (
              <div className="card bg-green-50 border-green-200 max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <FiStar className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-1">Отличная работа!</h3>
                    <p className="text-green-700">
                      Вы успешно прошли урок. Продолжайте в том же духе!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card bg-yellow-50 border-yellow-200 max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    !
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-1">Попробуйте еще раз</h3>
                    <p className="text-yellow-700">
                      Рекомендуем повторить материал урока и пройти тест снова
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href={`/levels/${levelId}`} className="btn-outline btn-lg flex-1">
                К списку уроков
              </Link>
              <button
                onClick={() => {
                  setCurrentSection('introduction')
                  setQuizAnswers({})
                  setQuizSubmitted(false)
                  setScore(0)
                }}
                className="btn-primary btn-lg flex-1"
              >
                Пройти еще раз
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href={`/levels/${levelId}`} className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900">
              <FiArrowLeft className="w-5 h-5" />
              <span className="font-medium">Вернуться к урокам</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="text-sm text-neutral-600">
                {level.name} - {lesson.title}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-700">
                {currentSection === 'complete' ? 'Завершено' : `Шаг ${currentSectionIndex + 1} из ${sections.length}`}
              </span>
              {currentSection !== 'complete' && (
                <span className="text-sm text-neutral-600">
                  {Math.round(((currentSectionIndex + 1) / sections.length) * 100)}%
                </span>
              )}
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 transition-all duration-300"
                style={{
                  width: currentSection === 'complete'
                    ? '100%'
                    : `${((currentSectionIndex + 1) / sections.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderSection()}
            </motion.div>

            {/* Navigation Buttons */}
            {currentSection !== 'complete' && (
              <div className="flex justify-between mt-12">
                <button
                  onClick={goToPreviousSection}
                  disabled={currentSectionIndex === 0}
                  className="btn-outline btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiArrowLeft className="w-5 h-5 mr-2" />
                  Назад
                </button>

                {currentSection === 'quiz' && !quizSubmitted ? (
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < (lesson.content.listening?.questions?.length || 0)}
                    className="btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Завершить тест
                    <FiCheckCircle className="w-5 h-5 ml-2" />
                  </button>
                ) : currentSection !== 'quiz' && (
                  <button onClick={goToNextSection} className="btn-primary btn-lg">
                    Далее
                    <FiArrowRight className="w-5 h-5 ml-2" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
