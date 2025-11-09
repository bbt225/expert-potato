'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { FiUser, FiLogOut, FiSettings } from 'react-icons/fi'
import { useState } from 'react'

export default function Header() {
  const { user, profile, isLoading, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleLogout = async () => {
    await logout()
    setShowUserMenu(false)
  }

  return (
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
            {user?.role === 'admin' && (
              <Link href="/admin" className="text-neutral-700 hover:text-primary-500 transition-colors">
                Админ
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-10 w-24 bg-neutral-200 rounded-lg"></div>
              </div>
            ) : isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <FiUser className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">
                    {profile?.firstName || user.email}
                  </span>
                </button>

                {showUserMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowUserMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-20">
                      <Link
                        href="/dashboard"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-neutral-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <FiSettings className="w-4 h-4" />
                        <span>Личный кабинет</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-neutral-50 transition-colors w-full text-left text-red-600"
                      >
                        <FiLogOut className="w-4 h-4" />
                        <span>Выйти</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="btn-ghost btn-md">
                  Войти
                </Link>
                <Link href="/register" className="btn-primary btn-md">
                  Начать обучение
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
