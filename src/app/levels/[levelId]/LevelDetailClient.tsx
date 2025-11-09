'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiBook, FiClock, FiCheckCircle, FiLock, FiPlay, FiStar } from 'react-icons/fi'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/lib/database'
import { Level, Lesson } from '@/types'

export default function LevelDetailClient() {
  const params = useParams()
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const levelId = params.levelId as string

  const [level, setLevel] = useState<Level | null>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [progress, setProgress] = useState<{ [key: string]: number }>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)

      // Load level
      const { data: levels } = await db.levels.getAll()
      const currentLevel = levels?.find(l => l.id === levelId)
      setLevel(currentLevel || null)

      // Load lessons for this level
      const { data: lessonsData } = await db.lessons.getByLevel(levelId)
      setLessons(lessonsData || [])

      // Load progress if user is authenticated
      if (user) {
        const { data: progressData } = await db.progress.get(user.id)
        if (progressData) {
          const progressMap: { [key: string]: number } = {}
          lessonsData?.forEach(lesson => {
            const lessonProgress = progressData.find((p: any) => p.lessonId === lesson.id)
            if (lessonProgress) {
              progressMap[lesson.id] = lessonProgress.score || 0
            }
          })
          setProgress(progressMap)
        }
      }

      setIsLoading(false)
    }

    loadData()
  }, [levelId, user])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-600">Загрузка...</div>
      </div>
    )
  }

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Уровень не найден</h1>
          <Link href="/levels" className="btn-primary">
            Вернуться к уровням
          </Link>
        </div>
      </div>
    )
  }

  const getLevelColor = (levelId: string) => {
    const colors: { [key: string]: string } = {
      basic: 'bg-blue-500',
      a1: 'bg-green-500',
      a2: 'bg-yellow-500',
      b1: 'bg-orange-500',
      b2: 'bg-red-500',
      c1: 'bg-purple-500',
    }
    return colors[levelId] || 'bg-primary-500'
  }

  const completedLessons = Object.values(progress).filter(score => score >= 70).length
  const progressPercentage = lessons.length > 0 ? (completedLessons / lessons.length) * 100 : 0

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-500">Español</span>
              <span className="text-2xl font-bold text-neutral-900">Online</span>
            </Link>

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" className="btn-ghost btn-md">
                    Кабинет
                  </Link>
                  <Link href="/levels" className="btn-outline btn-md">
                    Все уровни
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="btn-ghost btn-md">
                    Войти
                  </Link>
                  <Link href="/register" className="btn-primary btn-md">
                    Начать обучение
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Level Header */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className={`${getLevelColor(levelId)} rounded-lg p-4 text-white`}>
                <FiBook className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-neutral-900">{level.name}</h1>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
                    {level.cefr}
                  </span>
                </div>
                <p className="text-lg text-neutral-600">{level.description}</p>
              </div>
            </div>

            {/* Progress Bar */}
            {isAuthenticated && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700">
                    Прогресс: {completedLessons} из {lessons.length} уроков
                  </span>
                  <span className="text-sm font-medium text-primary-600">
                    {progressPercentage.toFixed(0)}%
                  </span>
                </div>
                <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full ${getLevelColor(levelId)}`}
                  />
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <div className="text-2xl font-bold text-neutral-900">{lessons.length}</div>
                <div className="text-sm text-neutral-600">Уроков</div>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <div className="text-2xl font-bold text-neutral-900">
                  {Math.round(lessons.reduce((sum, l) => sum + l.duration, 0) / 60)}
                </div>
                <div className="text-sm text-neutral-600">Часов</div>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <div className="text-2xl font-bold text-neutral-900">{completedLessons}</div>
                <div className="text-sm text-neutral-600">Завершено</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Уроки</h2>

            {lessons.length === 0 ? (
              <div className="card text-center py-12">
                <p className="text-neutral-600 mb-4">Уроки для этого уровня пока не добавлены</p>
                <Link href="/levels" className="btn-primary">
                  Вернуться к уровням
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {lessons.map((lesson, index) => {
                  const isCompleted = progress[lesson.id] >= 70
                  const isLocked = !lesson.isFree && !isAuthenticated
                  const score = progress[lesson.id]

                  return (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`card hover:shadow-large transition-all ${
                        isLocked ? 'opacity-60' : ''
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        {/* Lesson Number */}
                        <div className="flex-shrink-0">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                              isCompleted
                                ? 'bg-green-500 text-white'
                                : isLocked
                                ? 'bg-neutral-200 text-neutral-400'
                                : `${getLevelColor(levelId)} text-white`
                            }`}
                          >
                            {isCompleted ? (
                              <FiCheckCircle className="w-6 h-6" />
                            ) : isLocked ? (
                              <FiLock className="w-5 h-5" />
                            ) : (
                              lesson.order
                            )}
                          </div>
                        </div>

                        {/* Lesson Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-neutral-600 mb-2">{lesson.description}</p>
                          <div className="flex items-center gap-4 text-sm text-neutral-500">
                            <div className="flex items-center gap-1">
                              <FiClock className="w-4 h-4" />
                              <span>{lesson.duration} мин</span>
                            </div>
                            {lesson.isFree && (
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                                Бесплатно
                              </span>
                            )}
                            {score > 0 && (
                              <div className="flex items-center gap-1">
                                <FiStar className="w-4 h-4 text-yellow-500" />
                                <span className="font-medium">{score}%</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex-shrink-0">
                          {isLocked ? (
                            <Link href="/pricing" className="btn-outline btn-md">
                              <FiLock className="w-4 h-4 mr-2" />
                              Подписаться
                            </Link>
                          ) : (
                            <Link
                              href={`/levels/${levelId}/${lesson.id}`}
                              className="btn-primary btn-md"
                            >
                              <FiPlay className="w-4 h-4 mr-2" />
                              {isCompleted ? 'Повторить' : 'Начать'}
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      {!isAuthenticated && (
        <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Начните учить испанский сегодня!
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                Зарегистрируйтесь бесплатно и получите доступ к первым урокам
              </p>
              <div className="mt-8">
                <Link href="/register" className="btn-secondary btn-lg">
                  Начать бесплатно
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="container text-center text-neutral-600">
          <p>&copy; 2024 EspañolOnline. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
