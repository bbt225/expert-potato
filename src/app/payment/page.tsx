'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/lib/database'
import { FiCreditCard, FiLock, FiCheckCircle, FiXCircle } from 'react-icons/fi'
import { formatPrice } from '@/lib/utils'

const plans = {
  monthly: { name: 'Месячный', price: 990, duration: '1 месяц' },
  quarterly: { name: 'Квартальный', price: 2490, duration: '3 месяца' },
  yearly: { name: 'Годовой', price: 7990, duration: '1 год' },
}

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, isLoading, isAuthenticated } = useAuth()

  const planId = searchParams.get('plan') || 'monthly'
  const plan = plans[planId as keyof typeof plans] || plans.monthly

  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed'>('idle')

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/payment?plan=' + planId)
    }
  }, [isLoading, isAuthenticated, router, planId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) return

    setIsProcessing(true)

    // Имитация обработки платежа
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Случайно выбираем успех или отказ (70% успеха)
    const success = Math.random() > 0.3

    if (success) {
      // Создаем подписку
      await db.subscriptions.create(user.id, planId, plan.price)
      setPaymentStatus('success')

      // Перенаправляем через 3 секунды
      setTimeout(() => {
        router.push('/dashboard')
      }, 3000)
    } else {
      setPaymentStatus('failed')
    }

    setIsProcessing(false)
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

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="card text-center">
            <div className="inline-flex p-4 rounded-full bg-success-light mb-4">
              <FiCheckCircle className="w-12 h-12 text-success" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2">
              Оплата успешна!
            </h1>
            <p className="text-neutral-600 mb-6">
              Ваша подписка активирована. Перенаправляем в личный кабинет...
            </p>
            <Link href="/dashboard" className="btn-primary btn-md w-full">
              Перейти в кабинет
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="card text-center">
            <div className="inline-flex p-4 rounded-full bg-error-light mb-4">
              <FiXCircle className="w-12 h-12 text-error" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2">
              Оплата отклонена
            </h1>
            <p className="text-neutral-600 mb-6">
              Проверьте данные карты и попробуйте снова, или свяжитесь с вашим банком.
            </p>
            <button
              onClick={() => setPaymentStatus('idle')}
              className="btn-primary btn-md w-full mb-3"
            >
              Попробовать снова
            </button>
            <Link href="/pricing" className="btn-outline btn-md w-full">
              Вернуться к тарифам
            </Link>
          </div>
        </div>
      </div>
    )
  }

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
          </div>
        </div>
      </nav>

      {/* Payment Form */}
      <div className="container max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-6">
              Оформление подписки
            </h1>

            <div className="card mb-6">
              <h2 className="font-semibold text-neutral-900 mb-4">Детали заказа</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Тариф</span>
                  <span className="font-semibold text-neutral-900">{plan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Период</span>
                  <span className="font-semibold text-neutral-900">{plan.duration}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-neutral-200">
                  <span className="text-neutral-600">Итого</span>
                  <span className="text-2xl font-bold text-primary-500">
                    {formatPrice(plan.price)}
                  </span>
                </div>
              </div>
            </div>

            <div className="card bg-primary-50 border-primary-200">
              <h3 className="font-semibold text-neutral-900 mb-2">
                Что входит в подписку
              </h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>Доступ ко всем 450+ урокам</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>Все типы тестов и упражнений</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>Аудио материалы</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>Отслеживание прогресса</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>Сертификаты по завершении уровней</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <div className="card">
              <div className="flex items-center gap-2 mb-6">
                <FiLock className="w-5 h-5 text-success" />
                <span className="text-sm text-neutral-600">Безопасная оплата</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label">Номер карты</label>
                  <div className="relative">
                    <FiCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\s/g, '')
                        if (value.length <= 16 && /^\d*$/.test(value)) {
                          setCardNumber(value.replace(/(\d{4})/g, '$1 ').trim())
                        }
                      }}
                      className="input pl-10"
                      placeholder="1234 5678 9012 3456"
                      required
                      maxLength={19}
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    Это демо - используйте любой номер карты
                  </p>
                </div>

                <div>
                  <label className="label">Имя держателя карты</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="input"
                    placeholder="IVAN IVANOV"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Срок действия</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        if (value.length <= 4) {
                          const formatted = value.length >= 2
                            ? value.slice(0, 2) + '/' + value.slice(2)
                            : value
                          setCardExpiry(formatted)
                        }
                      }}
                      className="input"
                      placeholder="MM/YY"
                      required
                      maxLength={5}
                    />
                  </div>

                  <div>
                    <label className="label">CVV</label>
                    <input
                      type="text"
                      value={cardCVV}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        if (value.length <= 3) {
                          setCardCVV(value)
                        }
                      }}
                      className="input"
                      placeholder="123"
                      required
                      maxLength={3}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-primary btn-lg w-full"
                >
                  {isProcessing ? 'Обработка...' : `Оплатить ${formatPrice(plan.price)}`}
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <Link href="/terms" className="text-primary-500 hover:text-primary-600">
                    условиями использования
                  </Link>
                </p>
              </form>
            </div>

            <div className="mt-6 card bg-neutral-100">
              <p className="text-sm text-neutral-700">
                <strong>Демо версия:</strong> Оплата имитируется. Данные карты не сохраняются.
                Успешность платежа определяется случайно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
