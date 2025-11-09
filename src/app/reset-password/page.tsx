'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { db } from '@/lib/database'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const result = await db.auth.resetPassword(email)

      if (result.error) {
        setError(result.error.message)
      } else {
        setSuccess(true)
      }
    } catch (err) {
      setError('Произошла ошибка при отправке письма')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="text-3xl font-bold text-primary-500">Español</span>
              <span className="text-3xl font-bold text-neutral-900">Online</span>
            </Link>
          </div>

          <div className="card text-center">
            <div className="inline-flex p-4 rounded-full bg-success-light mb-4">
              <FiCheckCircle className="w-12 h-12 text-success" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2">
              Письмо отправлено!
            </h1>
            <p className="text-neutral-600 mb-6">
              Мы отправили инструкции по восстановлению пароля на адрес <strong>{email}</strong>
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              Не получили письмо? Проверьте папку "Спам" или попробуйте еще раз через несколько минут.
            </p>
            <Link href="/login" className="btn-primary btn-md w-full">
              Вернуться ко входу
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-neutral-600 hover:text-neutral-900">
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <span className="text-3xl font-bold text-primary-500">Español</span>
            <span className="text-3xl font-bold text-neutral-900">Online</span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-neutral-900">
            Восстановление пароля
          </h1>
          <p className="mt-2 text-neutral-600">
            Введите email, который вы использовали при регистрации
          </p>
        </div>

        {/* Form */}
        <div className="card">
          {error && (
            <div className="mb-6 p-4 bg-error-light border border-error text-error-dark rounded-lg flex items-start gap-3">
              <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary btn-md w-full"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить инструкции'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              Вернуться ко входу
            </Link>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-neutral-600 hover:text-neutral-900">
            ← Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  )
}
