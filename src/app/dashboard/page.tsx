'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/lib/database'
import { FiBook, FiTrendingUp, FiAward, FiClock, FiTarget, FiBookOpen } from 'react-icons/fi'
import { calculatePercentage, getGreeting } from '@/lib/utils'

export default function DashboardPage() {
  const router = useRouter()
  const { user, profile, isLoading, isAuthenticated } = useAuth()
  const [stats, setStats] = useState({
    completedLessons: 0,
    totalLessons: 0,
    averageScore: 0,
    wordsLearned: 0,
    currentStreak: 0,
  })

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isLoading, isAuthenticated, router])

  useEffect(() => {
    if (user) {
      loadStats()
    }
  }, [user])

  const loadStats = async () => {
    if (!user) return

    const { data: progressData } = await db.progress.get(user.id)
    const { data: lessonsData } = await db.lessons.getAll()

    const completed = progressData?.filter(p => p.completed).length || 0
    const total = lessonsData?.length || 0
    const avgScore = progressData?.length
      ? progressData.reduce((sum, p) => sum + p.score, 0) / progressData.length
      : 0

    setStats({
      completedLessons: completed,
      totalLessons: total,
      averageScore: Math.round(avgScore),
      wordsLearned: completed * 15, // Примерно 15 слов на урок
      currentStreak: profile?.streak || 0,
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-600">Загрузка...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const progressPercent = calculatePercentage(stats.completedLessons, stats.totalLessons)

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
              <Link href="/levels" className="text-neutral-700 hover:text-primary-500">
                Уроки
              </Link>
              <Link href="/dashboard" className="text-primary-500 font-medium">
                Кабинет
              </Link>
              <Link href="/pricing" className="btn-primary btn-sm">
                Premium
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">
            {getGreeting()}, {profile?.firstName || 'студент'}!
          </h1>
          <p className="mt-2 text-neutral-600">
            Продолжайте изучение испанского языка
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <FiBook className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">
                  {stats.completedLessons}
                </div>
                <div className="text-sm text-neutral-600">Пройдено уроков</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success-light rounded-lg">
                <FiTrendingUp className="w-6 h-6 text-success-dark" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">
                  {stats.averageScore}%
                </div>
                <div className="text-sm text-neutral-600">Средний балл</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning-light rounded-lg">
                <FiBookOpen className="w-6 h-6 text-warning-dark" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">
                  {stats.wordsLearned}
                </div>
                <div className="text-sm text-neutral-600">Изучено слов</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-error-light rounded-lg">
                <FiTarget className="w-6 h-6 text-error-dark" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">
                  {stats.currentStreak}
                </div>
                <div className="text-sm text-neutral-600">Дней подряд</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Progress */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Общий прогресс
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Пройдено {stats.completedLessons} из {stats.totalLessons} уроков</span>
                  <span className="font-semibold text-primary-600">{progressPercent}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-4">Текущий уровень</h3>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-primary-100 text-primary-600 rounded-lg font-semibold">
                    {profile?.currentLevel || 'Базовый'}
                  </div>
                  <Link href="/levels" className="btn-outline btn-sm">
                    Выбрать уровень
                  </Link>
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            <div className="card">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Продолжить обучение
              </h2>
              <div className="space-y-4">
                <Link href="/levels/basic" className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-500 hover:shadow-medium transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-900">Урок 1: Испанский алфавит</h3>
                      <p className="text-sm text-neutral-600 mt-1">Базовый уровень</p>
                    </div>
                    <FiBook className="w-5 h-5 text-primary-500" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="card">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Достижения
              </h2>
              <div className="space-y-3">
                {stats.completedLessons >= 1 && (
                  <div className="flex items-center gap-3">
                    <FiAward className="w-5 h-5 text-primary-500" />
                    <span className="text-sm text-neutral-700">Первый урок пройден!</span>
                  </div>
                )}
                {stats.completedLessons >= 10 && (
                  <div className="flex items-center gap-3">
                    <FiAward className="w-5 h-5 text-primary-500" />
                    <span className="text-sm text-neutral-700">10 уроков пройдено</span>
                  </div>
                )}
                {stats.currentStreak >= 3 && (
                  <div className="flex items-center gap-3">
                    <FiAward className="w-5 h-5 text-primary-500" />
                    <span className="text-sm text-neutral-700">3 дня подряд</span>
                  </div>
                )}
                {stats.completedLessons === 0 && (
                  <p className="text-sm text-neutral-500">Начните проходить уроки, чтобы получить достижения!</p>
                )}
              </div>
            </div>

            {/* Premium CTA */}
            <div className="card bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <h3 className="text-lg font-bold mb-2">Получите Premium</h3>
              <p className="text-sm text-primary-50 mb-4">
                Доступ ко всем урокам и функциям платформы
              </p>
              <Link href="/pricing" className="btn-secondary btn-md w-full">
                Узнать больше
              </Link>
            </div>

            {/* Quick Links */}
            <div className="card">
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                Быстрые ссылки
              </h2>
              <div className="space-y-2">
                <Link href="/levels" className="block text-sm text-neutral-700 hover:text-primary-500">
                  → Все уроки
                </Link>
                <Link href="/pricing" className="block text-sm text-neutral-700 hover:text-primary-500">
                  → Тарифные планы
                </Link>
                <Link href="/profile" className="block text-sm text-neutral-700 hover:text-primary-500">
                  → Настройки профиля
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
