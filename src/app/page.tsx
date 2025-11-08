'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiBook, FiHeadphones, FiTrendingUp, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-500">Español</span>
              <span className="text-2xl font-bold text-neutral-900">Online</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/levels" className="text-neutral-700 hover:text-primary-500 transition-colors">
                Уровни
              </Link>
              <Link href="/pricing" className="text-neutral-700 hover:text-primary-500 transition-colors">
                Тарифы
              </Link>
              <Link href="/about" className="text-neutral-700 hover:text-primary-500 transition-colors">
                О школе
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login" className="btn-ghost btn-md">
                Войти
              </Link>
              <Link href="/register" className="btn-primary btn-md">
                Начать обучение
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 py-20 sm:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
              Изучайте испанский
              <span className="block text-primary-500 mt-2">в своем темпе</span>
            </h1>

            <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
              Полнофункциональная онлайн-школа с 450+ уроками, интерактивными тестами
              и аудио материалами. От базового уровня до C1.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary btn-lg">
                Начать бесплатно
              </Link>
              <Link href="/levels" className="btn-outline btn-lg">
                Посмотреть уровни
              </Link>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              Первые 10% уроков каждого уровня бесплатно. Без кредитной карты.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
            <div className="aspect-square w-[800px] rounded-full bg-gradient-to-r from-primary-400 to-primary-600" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Современный подход к изучению испанского языка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary-100 text-primary-600">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Структура обучения
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              От базовых знаний до продвинутого уровня C1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:border-primary-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${level.color} text-white mb-3`}>
                      {level.cefr}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {level.name}
                    </h3>
                    <p className="mt-2 text-neutral-600 text-sm">
                      {level.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="text-sm text-neutral-500">
                    {level.lessons} уроков
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/levels" className="btn-primary btn-lg">
              Посмотреть все уровни
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Готовы начать обучение?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Присоединяйтесь к тысячам студентов, которые уже изучают испанский язык с нами
            </p>
            <div className="mt-8">
              <Link href="/register" className="btn-secondary btn-lg">
                Начать бесплатно
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Обучение</h4>
              <ul className="space-y-2">
                <li><Link href="/levels" className="text-neutral-600 hover:text-primary-500">Уровни</Link></li>
                <li><Link href="/dashboard" className="text-neutral-600 hover:text-primary-500">Личный кабинет</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-neutral-600 hover:text-primary-500">О нас</Link></li>
                <li><Link href="/contact" className="text-neutral-600 hover:text-primary-500">Контакты</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Поддержка</h4>
              <ul className="space-y-2">
                <li><Link href="/pricing" className="text-neutral-600 hover:text-primary-500">Тарифы</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Правовая информация</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-neutral-600 hover:text-primary-500">Условия использования</Link></li>
                <li><Link href="/privacy" className="text-neutral-600 hover:text-primary-500">Политика конфиденциальности</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-neutral-600">
            <p>&copy; 2024 EspañolOnline. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: FiBook,
    title: '450+ уроков',
    description: 'Структурированная программа от базового уровня до C1 с постепенным усложнением материала',
  },
  {
    icon: FiHeadphones,
    title: 'Аудио материалы',
    description: 'Каждый урок включает аудио для развития навыков аудирования и правильного произношения',
  },
  {
    icon: FiTrendingUp,
    title: 'Отслеживание прогресса',
    description: 'Детальная статистика вашего обучения с графиками и достижениями',
  },
  {
    icon: FiAward,
    title: 'Интерактивные тесты',
    description: '6 типов тестов для эффективной проверки знаний с мгновенной обратной связью',
  },
  {
    icon: FiUsers,
    title: 'Гибкое обучение',
    description: 'Учитесь в своем темпе, в любое время и в любом месте',
  },
  {
    icon: FiCheckCircle,
    title: 'Сертификаты',
    description: 'Получайте сертификаты о прохождении каждого уровня',
  },
]

const levels = [
  {
    name: 'Базовый',
    cefr: 'Pre-A1',
    description: 'Алфавит, произношение, базовые фразы',
    lessons: 50,
    color: 'bg-blue-500',
  },
  {
    name: 'Уровень A1',
    cefr: 'A1',
    description: 'Элементарный уровень владения языком',
    lessons: 80,
    color: 'bg-green-500',
  },
  {
    name: 'Уровень A2',
    cefr: 'A2',
    description: 'Предпороговый уровень',
    lessons: 80,
    color: 'bg-yellow-500',
  },
  {
    name: 'Уровень B1',
    cefr: 'B1',
    description: 'Пороговый уровень + Subjuntivo',
    lessons: 80,
    color: 'bg-orange-500',
  },
  {
    name: 'Уровень B2',
    cefr: 'B2',
    description: 'Продвинутый пороговый уровень',
    lessons: 80,
    color: 'bg-red-500',
  },
  {
    name: 'Уровень C1',
    cefr: 'C1',
    description: 'Продвинутый уровень владения',
    lessons: 80,
    color: 'bg-purple-500',
  },
]

const stats = [
  { value: '450+', label: 'Уроков' },
  { value: '6', label: 'Уровней' },
  { value: '1000+', label: 'Студентов' },
  { value: '4.9', label: 'Рейтинг' },
]
