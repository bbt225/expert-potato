'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/lib/database'
import { FiUsers, FiBook, FiDollarSign, FiTrendingUp, FiSettings } from 'react-icons/fi'
import Header from '@/components/Header'

export default function AdminPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalLessons: 0,
    premiumUsers: 0,
    totalRevenue: 0,
  })

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/dashboard')
    }
  }, [user, isLoading, router])

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const { data: lessons } = await db.lessons.getAll()
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]')

    const premiumCount = subscriptions.filter((s: any) => s.status === 'active').length
    const revenue = subscriptions.reduce((sum: number, s: any) => sum + s.price, 0)

    setStats({
      totalUsers: users.length,
      totalLessons: lessons?.length || 0,
      premiumUsers: premiumCount,
      totalRevenue: revenue,
    })
  }

  if (isLoading || !user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-600">Загрузка...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Content */}
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-8">
          Панель администратора
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <FiUsers className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">
                  {stats.totalUsers}
                </div>
                <div className="text-sm text-neutral-600">Всего пользователей</div>
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
                  {stats.premiumUsers}
                </div>
                <div className="text-sm text-neutral-600">Premium пользователей</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning-light rounded-lg">
                <FiBook className="w-6 h-6 text-warning-dark" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">
                  {stats.totalLessons}
                </div>
                <div className="text-sm text-neutral-600">Уроков в базе</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-error-light rounded-lg">
                <FiDollarSign className="w-6 h-6 text-error-dark" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">
                  {stats.totalRevenue.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-sm text-neutral-600">Общая выручка</div>
              </div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card hover:shadow-large transition-shadow cursor-pointer">
            <FiUsers className="w-8 h-8 text-primary-500 mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              Управление пользователями
            </h2>
            <p className="text-neutral-600 text-sm mb-4">
              Просмотр, редактирование и управление пользователями платформы
            </p>
            <p className="text-xs text-neutral-500">
              Доступно в localStorage: users, profiles
            </p>
          </div>

          <div className="card hover:shadow-large transition-shadow cursor-pointer">
            <FiBook className="w-8 h-8 text-success mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              Управление контентом
            </h2>
            <p className="text-neutral-600 text-sm mb-4">
              Создание, редактирование и удаление уроков и тестов
            </p>
            <p className="text-xs text-neutral-500">
              Доступно в localStorage: lessons, levels, vocabulary, tests
            </p>
          </div>

          <div className="card hover:shadow-large transition-shadow cursor-pointer">
            <FiTrendingUp className="w-8 h-8 text-warning mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              Аналитика
            </h2>
            <p className="text-neutral-600 text-sm mb-4">
              Статистика использования, популярные уроки, конверсия
            </p>
            <p className="text-xs text-neutral-500">
              Доступно в localStorage: progress, subscriptions
            </p>
          </div>

          <div className="card hover:shadow-large transition-shadow cursor-pointer">
            <FiDollarSign className="w-8 h-8 text-error mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              Подписки и платежи
            </h2>
            <p className="text-neutral-600 text-sm mb-4">
              Управление подписками и история платежей
            </p>
            <p className="text-xs text-neutral-500">
              Доступно в localStorage: subscriptions
            </p>
          </div>

          <div className="card hover:shadow-large transition-shadow cursor-pointer">
            <FiSettings className="w-8 h-8 text-neutral-500 mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              Настройки платформы
            </h2>
            <p className="text-neutral-600 text-sm mb-4">
              Общие настройки, конфигурация, резервное копирование
            </p>
            <p className="text-xs text-neutral-500">
              Экспорт/импорт данных localStorage
            </p>
          </div>

          <div className="card bg-primary-50 border-primary-200">
            <h2 className="text-lg font-bold text-neutral-900 mb-2">
              Быстрые действия
            </h2>
            <div className="space-y-2 text-sm">
              <button className="w-full text-left text-primary-600 hover:text-primary-700">
                → Экспорт всех данных
              </button>
              <button className="w-full text-left text-primary-600 hover:text-primary-700">
                → Импорт уроков
              </button>
              <button className="w-full text-left text-primary-600 hover:text-primary-700">
                → Очистить кэш
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 card bg-neutral-100">
          <h3 className="font-semibold text-neutral-900 mb-2">
            Инструкция для разработчиков
          </h3>
          <p className="text-sm text-neutral-700">
            Все данные хранятся в localStorage браузера. Для управления данными используйте
            Console в DevTools браузера. Основные ключи: users, profiles, lessons, levels,
            vocabulary, tests, progress, subscriptions.
          </p>
        </div>
      </div>
    </div>
  )
}
