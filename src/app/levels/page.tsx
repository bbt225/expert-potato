'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiBook, FiClock, FiAward } from 'react-icons/fi'
import Header from '@/components/Header'

const levels = [
  {
    id: 'basic',
    name: 'Базовый уровень',
    cefr: 'Pre-A1',
    description: 'Начните с самых основ - алфавит, произношение и базовые фразы для общения',
    lessons: 50,
    duration: 25,
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
    bgLight: 'bg-blue-50',
    topics: [
      'Испанский алфавит',
      'Правила произношения',
      'Приветствия и прощания',
      'Числа 1-100',
      'Базовые фразы',
    ],
  },
  {
    id: 'a1',
    name: 'Уровень A1',
    cefr: 'A1',
    description: 'Элементарный уровень - научитесь строить простые предложения и понимать базовую речь',
    lessons: 80,
    duration: 40,
    color: 'bg-green-500',
    borderColor: 'border-green-500',
    textColor: 'text-green-600',
    bgLight: 'bg-green-50',
    topics: [
      'Presente de Indicativo',
      'Артикли и род существительных',
      'Глаголы ser/estar',
      'Семья и знакомство',
      'Еда и напитки',
    ],
  },
  {
    id: 'a2',
    name: 'Уровень A2',
    cefr: 'A2',
    description: 'Предпороговый уровень - расширьте словарный запас и освойте прошедшее время',
    lessons: 80,
    duration: 40,
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500',
    textColor: 'text-yellow-600',
    bgLight: 'bg-yellow-50',
    topics: [
      'Pretérito Perfecto',
      'Pretérito Indefinido',
      'Путешествия и транспорт',
      'Покупки и магазины',
      'Погода и природа',
    ],
  },
  {
    id: 'b1',
    name: 'Уровень B1',
    cefr: 'B1',
    description: 'Пороговый уровень - начните использовать сослагательное наклонение и сложные конструкции',
    lessons: 80,
    duration: 40,
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-600',
    bgLight: 'bg-orange-50',
    topics: [
      'Subjuntivo Presente',
      'Pretérito Imperfecto',
      'Futuro Simple',
      'Работа и профессии',
      'Здоровье и медицина',
    ],
  },
  {
    id: 'b2',
    name: 'Уровень B2',
    cefr: 'B2',
    description: 'Продвинутый пороговый - свободно общайтесь на сложные темы',
    lessons: 80,
    duration: 40,
    color: 'bg-red-500',
    borderColor: 'border-red-500',
    textColor: 'text-red-600',
    bgLight: 'bg-red-50',
    topics: [
      'Subjuntivo Imperfecto',
      'Condicional',
      'Все времена Subjuntivo',
      'Политика и общество',
      'Культура и искусство',
    ],
  },
  {
    id: 'c1',
    name: 'Уровень C1',
    cefr: 'C1',
    description: 'Продвинутый уровень - владейте языком на уровне носителя',
    lessons: 80,
    duration: 40,
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
    bgLight: 'bg-purple-50',
    topics: [
      'Pluscuamperfecto',
      'Futuro Perfecto',
      'Сложные грамматические конструкции',
      'Литература и философия',
      'Деловой испанский',
    ],
  },
]

export default function LevelsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Header */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
              Уровни обучения
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              От базового уровня до продвинутого C1. Выберите свой уровень и начните обучение
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">450+</div>
              <div className="mt-1 text-sm text-neutral-600">Уроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">6</div>
              <div className="mt-1 text-sm text-neutral-600">Уровней</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">225</div>
              <div className="mt-1 text-sm text-neutral-600">Часов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">∞</div>
              <div className="mt-1 text-sm text-neutral-600">Знаний</div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-8">
            {levels.map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card border-l-4 ${level.borderColor} hover:shadow-large transition-all`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left side - Main info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className={`${level.color} rounded-lg p-3 text-white`}>
                        <FiBook className="w-8 h-8" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-neutral-900">
                            {level.name}
                          </h2>
                          <span className={`${level.bgLight} ${level.textColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                            {level.cefr}
                          </span>
                        </div>

                        <p className="text-neutral-600 mb-4">
                          {level.description}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-neutral-500 mb-4">
                          <div className="flex items-center gap-2">
                            <FiBook className="w-4 h-4" />
                            <span>{level.lessons} уроков</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiClock className="w-4 h-4" />
                            <span>~{level.duration} часов</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiAward className="w-4 h-4" />
                            <span>Сертификат</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {level.topics.map((topic, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - CTA */}
                  <div className="flex flex-col justify-center items-start md:items-end gap-3">
                    <Link
                      href={`/levels/${level.id}`}
                      className="btn-primary btn-md w-full md:w-auto"
                    >
                      Смотреть уроки
                    </Link>
                    <Link
                      href="/pricing"
                      className="btn-outline btn-md w-full md:w-auto"
                    >
                      Узнать больше
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Не знаете, с чего начать?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Начните с бесплатного уровня и постепенно переходите к более сложным
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-secondary btn-lg">
                Начать бесплатно
              </Link>
              <Link href="/pricing" className="btn-outline btn-lg text-white border-white hover:bg-white/10">
                Посмотреть тарифы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="container text-center text-neutral-600">
          <p>&copy; 2024 EspañolOnline. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
