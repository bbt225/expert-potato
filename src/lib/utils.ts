import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format date to readable string
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(d)
}

/**
 * Format duration in minutes to hours and minutes
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours === 0) {
    return `${mins} мин`
  }

  return `${hours} ч ${mins} мин`
}

/**
 * Calculate percentage
 */
export function calculatePercentage(completed: number, total: number): number {
  if (total === 0) return 0
  return Math.round((completed / total) * 100)
}

/**
 * Format price in rubles
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(price)
}

/**
 * Get greeting based on time of day
 */
export function getGreeting(): string {
  const hour = new Date().getHours()

  if (hour < 12) {
    return 'Доброе утро'
  } else if (hour < 18) {
    return 'Добрый день'
  } else {
    return 'Добрый вечер'
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate password strength
 */
export function isValidPassword(password: string): { valid: boolean; message?: string } {
  if (password.length < 8) {
    return { valid: false, message: 'Пароль должен содержать минимум 8 символов' }
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: 'Пароль должен содержать хотя бы одну заглавную букву' }
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, message: 'Пароль должен содержать хотя бы одну строчную букву' }
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, message: 'Пароль должен содержать хотя бы одну цифру' }
  }

  return { valid: true }
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Sleep utility for async operations
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Get initials from name
 */
export function getInitials(firstName?: string | null, lastName?: string | null): string {
  const first = firstName?.charAt(0) || ''
  const last = lastName?.charAt(0) || ''
  return (first + last).toUpperCase() || '??'
}

/**
 * Shuffle array randomly
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Get CEFR level color
 */
export function getLevelColor(cefr: string): string {
  const colors: Record<string, string> = {
    'Pre-A1': 'bg-blue-500',
    'A1': 'bg-green-500',
    'A2': 'bg-yellow-500',
    'B1': 'bg-orange-500',
    'B2': 'bg-red-500',
    'C1': 'bg-purple-500',
  }
  return colors[cefr] || 'bg-gray-500'
}

/**
 * Check if user has premium access
 */
export function hasPremiumAccess(role: string): boolean {
  return role === 'premium' || role === 'admin'
}

/**
 * Check if user is admin
 */
export function isAdmin(role: string): boolean {
  return role === 'admin'
}

/**
 * Generate unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}
