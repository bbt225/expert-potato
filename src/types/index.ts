// User types
export type UserRole = 'guest' | 'user' | 'premium' | 'admin'

export interface User {
  id: string
  email: string
  role: UserRole
  createdAt: string
  updatedAt: string
}

export interface Profile {
  userId: string
  firstName: string | null
  lastName: string | null
  avatar: string | null
  currentLevel: string | null
  totalXp: number
  streak: number
  createdAt: string
  updatedAt: string
}

// Level types
export interface Level {
  id: string
  name: string
  description: string
  cefr: string
  order: number
  lessonCount: number
  createdAt: string
  updatedAt: string
}

// Lesson types
export interface Lesson {
  id: string
  levelId: string
  title: string
  description: string
  content: LessonContent
  audioUrl: string | null
  readingText: string
  duration: number
  order: number
  isFree: boolean
  createdAt: string
  updatedAt: string
  vocabulary?: Vocabulary[]
  tests?: Test[]
}

export interface LessonContent {
  introduction: {
    title: string
    goals: string[]
    overview: string
  }
  newWords: string[]
  grammar: {
    title: string
    explanation: string
    examples: Array<{
      spanish: string
      russian: string
    }>
    tables?: Array<{
      title: string
      headers: string[]
      rows: string[][]
    }>
  }
  listening: {
    audioUrl: string
    transcript: string
    questions: Array<{
      question: string
      options: string[]
      correctAnswer: number
    }>
  }
  phrases: Array<{
    spanish: string
    russian: string
    context: string
    audioUrl?: string
  }>
  homework: {
    vocabularyTest: boolean
    listening: boolean
    reading: boolean
    writing: boolean
  }
}

// Vocabulary types
export interface Vocabulary {
  id: string
  lessonId: string
  word: string
  translation: string
  example: string
  audioUrl: string | null
  createdAt: string
}

// Test types
export type TestType = 'multiple_choice' | 'fill_blank' | 'matching' | 'audio' | 'translation' | 'sentence_order'

export interface Test {
  id: string
  lessonId: string
  type: TestType
  question: string
  options: TestOptions
  correctAnswer: string
  explanation: string | null
  createdAt: string
}

export type TestOptions =
  | { type: 'multiple_choice'; choices: string[] }
  | { type: 'fill_blank'; blanks: string[] }
  | { type: 'matching'; pairs: Array<{ left: string; right: string }> }
  | { type: 'audio'; audioUrl: string; choices: string[] }
  | { type: 'translation'; direction: 'es-ru' | 'ru-es' }
  | { type: 'sentence_order'; words: string[] }

// Progress types
export interface Progress {
  id: string
  userId: string
  lessonId: string
  completed: boolean
  score: number
  attempts: number
  lastAttempt: string
  createdAt: string
}

// Subscription types
export type SubscriptionPlan = 'free' | 'monthly' | 'quarterly' | 'yearly'
export type SubscriptionStatus = 'active' | 'cancelled' | 'expired'

export interface Subscription {
  id: string
  userId: string
  plan: SubscriptionPlan
  status: SubscriptionStatus
  startDate: string
  endDate: string
  price: number
  createdAt: string
  updatedAt: string
}

export interface PricingPlan {
  id: SubscriptionPlan
  name: string
  price: number
  priceMonthly?: number
  discount?: number
  features: string[]
  popular?: boolean
}

// Statistics types
export interface UserStatistics {
  completedLessons: number
  totalLessons: number
  averageScore: number
  totalXp: number
  currentStreak: number
  wordsLearned: number
  hoursStudied: number
  testsCompleted: number
}

// Admin types
export interface AdminStats {
  totalUsers: number
  premiumUsers: number
  totalLessons: number
  totalRevenue: number
  conversionRate: number
  activeUsers: number
}
