'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { isValidEmail, isValidPassword } from '@/lib/utils'
import { FiMail, FiLock, FiUser, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

export default function RegisterPage() {
  const router = useRouter()
  const { signUp } = useAuth()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    // Validation
    if (!formData.firstName || !formData.lastName) {
      setError('Пожалуйста, заполните имя и фамилию')
      return
    }

    if (!isValidEmail(formData.email)) {
      setError('Пожалуйста, введите корректный email')
      return
    }

    const passwordValidation = isValidPassword(formData.password)
    if (!passwordValidation.valid) {
      setError(passwordValidation.message || 'Некорректный пароль')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают')
      return
    }

    setIsSubmitting(true)

    try {
      const result = await signUp(
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName
      )

      if (result.success) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      } else {
        setError(result.error || 'Ошибка регистрации')
      }
    } catch (err: any) {
      setError(err.message || 'Произошла ошибка при регистрации')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <span className="text-3xl font-bold text-primary-500">Español</span>
            <span className="text-3xl font-bold text-neutral-900">Online</span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-neutral-900">
            Создать аккаунт
          </h1>
          <p className="mt-2 text-neutral-600">
            Начните изучение испанского языка сегодня
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

          {success && (
            <div className="mb-6 p-4 bg-success-light border border-success text-success-dark rounded-lg flex items-start gap-3">
              <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Регистрация успешна! Перенаправляем...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="label">
                  Имя
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input pl-10"
                    placeholder="Иван"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="label">
                  Фамилия
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                  placeholder="Иванов"
                />
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleChange}
                  className="input pl-10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label">
                Пароль
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="input pl-10"
                  placeholder="••••••••"
                />
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                Минимум 8 символов, включая заглавные, строчные буквы и цифры
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="label">
                Подтвердите пароль
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-neutral-600">
                Я согласен с{' '}
                <Link href="/terms" className="text-primary-500 hover:text-primary-600">
                  условиями использования
                </Link>{' '}
                и{' '}
                <Link href="/privacy" className="text-primary-500 hover:text-primary-600">
                  политикой конфиденциальности
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || success}
              className="btn-primary btn-md w-full"
            >
              {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neutral-500">
                  Уже есть аккаунт?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Войти
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
