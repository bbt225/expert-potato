'use client'

import Link from 'next/link'
import { FiCheckCircle, FiTarget, FiUsers, FiAward } from 'react-icons/fi'
import Header from '@/components/Header'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl mb-6">
              О нашей онлайн-школе
            </h1>
            <p className="text-lg text-neutral-600">
              EspañolOnline — это современная платформа для изучения испанского языка,
              созданная с использованием передовых технологий и лучших методик преподавания.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Наша миссия
              </h2>
              <p className="text-neutral-700 mb-4">
                Мы стремимся сделать изучение испанского языка доступным, эффективным и увлекательным
                для каждого студента, независимо от начального уровня подготовки.
              </p>
              <p className="text-neutral-700">
                Наша платформа объединяет лучшие практики традиционного образования с возможностями
                современных технологий, позволяя учиться в своем темпе и по удобному графику.
              </p>
            </div>

            <div className="card bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiTarget className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">450+ уроков</h3>
                    <p className="text-primary-50 text-sm">
                      От базового до продвинутого уровня C1
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiUsers className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Для всех уровней</h3>
                    <p className="text-primary-50 text-sm">
                      Программа адаптирована под любой уровень знаний
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiAward className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Сертификаты</h3>
                    <p className="text-primary-50 text-sm">
                      Подтверждение успешного завершения курсов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Почему мы?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="inline-flex p-3 rounded-lg bg-primary-100 text-primary-600 mb-4">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-neutral-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-8">
            Технологии
          </h2>
          <div className="card">
            <p className="text-neutral-700 mb-4">
              Платформа создана с использованием современного технологического стека:
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <FiCheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong>Next.js 14</strong> - для быстрой и оптимизированной загрузки</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong>TypeScript</strong> - для надежности и типобезопасности</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong>localStorage</strong> - все данные хранятся локально в браузере</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong>GitHub Pages</strong> - надежный и быстрый хостинг</span>
              </li>
            </ul>
            <p className="text-neutral-600 mt-4 text-sm">
              Все данные хранятся в вашем браузере - никакой регистрации на сервере,
              полная приватность и работа офлайн!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Начните изучение сегодня
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Присоединяйтесь к нам и откройте для себя мир испанского языка
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-secondary btn-lg">
                Начать бесплатно
              </Link>
              <Link href="/levels" className="btn-outline btn-lg text-white border-white hover:bg-white/10">
                Посмотреть уроки
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

const features = [
  {
    title: 'Структурированная программа',
    description: '6 уровней обучения от Базового до C1, соответствующих международной шкале CEFR',
  },
  {
    title: 'Интерактивные тесты',
    description: '6 типов тестов для эффективной проверки знаний и закрепления материала',
  },
  {
    title: 'Аудио материалы',
    description: 'Развитие навыков аудирования с носителями языка',
  },
  {
    title: 'Гибкое обучение',
    description: 'Учитесь в своем темпе, в любое время и в любом месте',
  },
  {
    title: 'Отслеживание прогресса',
    description: 'Детальная статистика вашего обучения и достижений',
  },
  {
    title: 'Доступная цена',
    description: 'Гибкие тарифные планы для любого бюджета',
  },
]
