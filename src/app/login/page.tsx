'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi'

export default function LoginPage() {
  const router = useRouter()
  const { signIn, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const result = await signIn(email, password)

      if (result.success) {
        router.push('/dashboard')
      } else {
        setError(result.error || 'Ошибка входа. Проверьте email и пароль.')
      }
    } catch (err) {
      setError('Произошла ошибка при входе')
    } finally {
      setIsSubmitting(false)
    }
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
            Вход в аккаунт
          </h1>
          <p className="mt-2 text-neutral-600">
            Продолжите обучение испанскому языку
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

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="label mb-0">
                  Пароль
                </label>
                <Link
                  href="/reset-password"
                  className="text-sm text-primary-500 hover:text-primary-600"
                >
                  Забыли пароль?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary btn-md w-full"
            >
              {isSubmitting ? 'Вход...' : 'Войти'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neutral-500">
                  Нет аккаунта?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/register"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Зарегистрироваться
              </Link>
            </div>
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
