import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DataInitializer } from '@/components/DataInitializer'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EspañolOnline - Онлайн школа испанского языка',
  description: 'Изучайте испанский язык онлайн с уровнями от Базового до C1. 450+ интерактивных уроков, тесты, аудио материалы и отслеживание прогресса.',
  keywords: ['испанский язык', 'онлайн школа', 'изучение испанского', 'уроки испанского', 'español', 'spanish learning'],
  authors: [{ name: 'EspañolOnline Team' }],
  openGraph: {
    title: 'EspañolOnline - Онлайн школа испанского языка',
    description: 'Изучайте испанский язык онлайн с уровнями от Базового до C1',
    type: 'website',
    locale: 'ru_RU',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen bg-neutral-50">
        <DataInitializer />
        {children}
      </body>
    </html>
  )
}
