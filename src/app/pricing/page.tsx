'use client'

import Link from 'next/link'
import { FiCheck, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'навсегда',
    description: 'Начните изучение бесплатно',
    features: [
      { text: '10% уроков каждого уровня', included: true },
      { text: 'Базовые тесты', included: true },
      { text: 'Отслеживание прогресса', included: true },
      { text: 'Мобильное приложение', included: false },
      { text: 'Все уроки', included: false },
      { text: 'Сертификаты', included: false },
      { text: 'Приоритетная поддержка', included: false },
    ],
    cta: 'Начать бесплатно',
    href: '/register',
    popular: false,
  },
  {
    id: 'monthly',
    name: 'Месячный',
    price: 990,
    priceMonthly: 990,
    period: 'месяц',
    description: 'Полный доступ на месяц',
    features: [
      { text: 'Все 450+ уроков', included: true },
      { text: 'Все типы тестов', included: true },
      { text: 'Аудио материалы', included: true },
      { text: 'Отслеживание прогресса', included: true },
      { text: 'Сертификаты', included: true },
      { text: 'Без рекламы', included: true },
      { text: 'Email поддержка', included: true },
    ],
    cta: 'Выбрать план',
    href: '/payment?plan=monthly',
    popular: false,
  },
  {
    id: 'quarterly',
    name: 'Квартальный',
    price: 2490,
    priceMonthly: 830,
    period: '3 месяца',
    discount: 15,
    description: 'Лучший выбор для регулярного обучения',
    features: [
      { text: 'Все 450+ уроков', included: true },
      { text: 'Все типы тестов', included: true },
      { text: 'Аудио материалы', included: true },
      { text: 'Отслеживание прогресса', included: true },
      { text: 'Сертификаты', included: true },
      { text: 'Без рекламы', included: true },
      { text: 'Приоритетная поддержка', included: true },
    ],
    cta: 'Выбрать план',
    href: '/payment?plan=quarterly',
    popular: true,
  },
  {
    id: 'yearly',
    name: 'Годовой',
    price: 7990,
    priceMonthly: 665,
    period: 'год',
    discount: 33,
    description: 'Максимальная выгода для серьезного обучения',
    features: [
      { text: 'Все 450+ уроков', included: true },
      { text: 'Все типы тестов', included: true },
      { text: 'Аудио материалы', included: true },
      { text: 'Отслеживание прогресса', included: true },
      { text: 'Сертификаты', included: true },
      { text: 'Без рекламы', included: true },
      { text: 'VIP поддержка', included: true },
      { text: 'Персональные консультации', included: true },
    ],
    cta: 'Выбрать план',
    href: '/payment?plan=yearly',
    popular: false,
  },
]

export default function PricingPage() {
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
              <Link href="/login" className="btn-ghost btn-md">
                Войти
              </Link>
              <Link href="/register" className="btn-primary btn-md">
                Начать бесплатно
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
              Выберите свой план
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Начните с бесплатного плана или выберите premium для полного доступа ко всем урокам
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border-2 p-8 bg-white ${
                  plan.popular
                    ? 'border-primary-500 shadow-large'
                    : 'border-neutral-200 shadow-soft'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <span className="inline-flex items-center rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold text-white">
                      Популярный
                    </span>
                  </div>
                )}

                {plan.discount && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center rounded-full bg-success-light text-success-dark px-3 py-1 text-xs font-semibold">
                      -{plan.discount}%
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-neutral-900">
                      {plan.price.toLocaleString('ru-RU')}
                    </span>
                    <span className="ml-2 text-neutral-600">₽</span>
                  </div>
                  {plan.priceMonthly && plan.priceMonthly !== plan.price && (
                    <p className="mt-1 text-sm text-neutral-500">
                      {plan.priceMonthly.toLocaleString('ru-RU')} ₽/месяц
                    </p>
                  )}
                  <p className="mt-1 text-sm text-neutral-500">
                    за {plan.period}
                  </p>
                </div>

                <Link
                  href={plan.href}
                  className={`block w-full text-center ${
                    plan.popular ? 'btn-primary' : 'btn-outline'
                  } btn-md mb-6`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <FiCheck className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <FiX className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-neutral-700' : 'text-neutral-400'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-neutral-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Начните изучение сегодня
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Присоединяйтесь к тысячам студентов, изучающих испанский язык
            </p>
            <div className="mt-8">
              <Link href="/register" className="btn-secondary btn-lg">
                Попробовать бесплатно
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

const faqs = [
  {
    question: 'Можно ли отменить подписку?',
    answer: 'Да, вы можете отменить подписку в любое время. Доступ к материалам сохранится до окончания оплаченного периода.',
  },
  {
    question: 'Есть ли возврат средств?',
    answer: 'Мы предлагаем возврат средств в течение 14 дней с момента покупки, если вы не удовлетворены качеством обучения.',
  },
  {
    question: 'Что включено в бесплатный план?',
    answer: 'Бесплатный план включает доступ к 10% уроков каждого уровня, базовым тестам и отслеживанию прогресса.',
  },
  {
    question: 'Могу ли я изменить план в любое время?',
    answer: 'Да, вы можете перейти на другой план в любое время. При переходе на более дорогой план разница будет пропорционально рассчитана.',
  },
  {
    question: 'Есть ли скидки для студентов?',
    answer: 'Да, мы предоставляем скидку 20% для студентов при предъявлении студенческого билета.',
  },
]
