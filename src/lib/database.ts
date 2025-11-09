// Mock database - all data stored in localStorage

import { Level, Lesson, User, Profile, Progress, Subscription } from '@/types'

// Helper to get from localStorage
const getFromStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error)
    return defaultValue
  }
}

// Helper to save to localStorage
const saveToStorage = <T,>(key: string, value: T): void => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error)
  }
}

// Auth helpers
export const auth = {
  // Sign up with email and password
  signUp: async (email: string, password: string, userData?: { firstName?: string; lastName?: string }) => {
    try {
      const users = getFromStorage<User[]>('users', [])

      // Check if user already exists
      if (users.find(u => u.email === email)) {
        return { data: null, error: { message: 'Пользователь с таким email уже существует' } }
      }

      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      users.push(newUser)
      saveToStorage('users', users)

      // Create profile
      const profile: Profile = {
        userId: newUser.id,
        firstName: userData?.firstName || null,
        lastName: userData?.lastName || null,
        avatar: null,
        currentLevel: null,
        totalXp: 0,
        streak: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      const profiles = getFromStorage<Profile[]>('profiles', [])
      profiles.push(profile)
      saveToStorage('profiles', profiles)

      // Save current user
      saveToStorage('currentUser', newUser)

      return { data: { user: newUser }, error: null }
    } catch (error: any) {
      return { data: null, error: { message: error.message } }
    }
  },

  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    try {
      const users = getFromStorage<User[]>('users', [])
      const user = users.find(u => u.email === email)

      if (!user) {
        return { data: null, error: { message: 'Неверный email или пароль' } }
      }

      saveToStorage('currentUser', user)
      return { data: { user }, error: null }
    } catch (error: any) {
      return { data: null, error: { message: error.message } }
    }
  },

  // Sign out
  signOut: async () => {
    try {
      window.localStorage.removeItem('currentUser')
      return { error: null }
    } catch (error: any) {
      return { error: { message: error.message } }
    }
  },

  // Get current user
  getUser: async () => {
    try {
      const user = getFromStorage<User | null>('currentUser', null)
      return { user, error: null }
    } catch (error: any) {
      return { user: null, error: { message: error.message } }
    }
  },

  // Get current session
  getSession: async () => {
    try {
      const user = getFromStorage<User | null>('currentUser', null)
      return { session: user ? { user } : null, error: null }
    } catch (error: any) {
      return { session: null, error: { message: error.message } }
    }
  },

  // Reset password (mock)
  resetPassword: async (email: string) => {
    return { data: { message: 'Письмо для восстановления пароля отправлено' }, error: null }
  },

  // Update password (mock)
  updatePassword: async (newPassword: string) => {
    return { data: { message: 'Пароль обновлен' }, error: null }
  },
}

// Database helpers
export const db = {
  // Levels
  levels: {
    getAll: async () => {
      const levels = getFromStorage<Level[]>('levels', [])
      return { data: levels, error: null }
    },

    getById: async (id: string) => {
      const levels = getFromStorage<Level[]>('levels', [])
      const level = levels.find(l => l.id === id)
      return { data: level || null, error: level ? null : { message: 'Level not found' } }
    },
  },

  // Lessons
  lessons: {
    getAll: async () => {
      const lessons = getFromStorage<Lesson[]>('lessons', [])
      return { data: lessons, error: null }
    },

    getByLevel: async (levelId: string) => {
      const lessons = getFromStorage<Lesson[]>('lessons', [])
      const filtered = lessons.filter(l => l.levelId === levelId)
      return { data: filtered, error: null }
    },

    getById: async (id: string) => {
      const lessons = getFromStorage<Lesson[]>('lessons', [])
      const lesson = lessons.find(l => l.id === id)
      return { data: lesson || null, error: lesson ? null : { message: 'Lesson not found' } }
    },
  },

  // User Progress
  progress: {
    get: async (userId: string) => {
      const progress = getFromStorage<Progress[]>('progress', [])
      const userProgress = progress.filter(p => p.userId === userId)
      return { data: userProgress, error: null }
    },

    getByLesson: async (userId: string, lessonId: string) => {
      const progress = getFromStorage<Progress[]>('progress', [])
      const lessonProgress = progress.find(p => p.userId === userId && p.lessonId === lessonId)
      return { data: lessonProgress || null, error: null }
    },

    upsert: async (userId: string, lessonId: string, score: number, completed: boolean) => {
      const progress = getFromStorage<Progress[]>('progress', [])
      const existingIndex = progress.findIndex(p => p.userId === userId && p.lessonId === lessonId)

      const progressItem: Progress = {
        id: existingIndex >= 0 ? progress[existingIndex].id : Math.random().toString(36).substr(2, 9),
        userId,
        lessonId,
        completed,
        score,
        attempts: existingIndex >= 0 ? progress[existingIndex].attempts + 1 : 1,
        lastAttempt: new Date().toISOString(),
        createdAt: existingIndex >= 0 ? progress[existingIndex].createdAt : new Date().toISOString(),
      }

      if (existingIndex >= 0) {
        progress[existingIndex] = progressItem
      } else {
        progress.push(progressItem)
      }

      saveToStorage('progress', progress)
      return { data: progressItem, error: null }
    },
  },

  // Subscriptions
  subscriptions: {
    get: async (userId: string) => {
      const subscriptions = getFromStorage<Subscription[]>('subscriptions', [])
      const userSub = subscriptions.find(s => s.userId === userId && s.status === 'active')
      return { data: userSub || null, error: null }
    },

    create: async (userId: string, plan: string, price: number) => {
      const subscriptions = getFromStorage<Subscription[]>('subscriptions', [])
      const startDate = new Date()
      const endDate = new Date()

      switch (plan) {
        case 'monthly':
          endDate.setMonth(endDate.getMonth() + 1)
          break
        case 'quarterly':
          endDate.setMonth(endDate.getMonth() + 3)
          break
        case 'yearly':
          endDate.setFullYear(endDate.getFullYear() + 1)
          break
      }

      const subscription: Subscription = {
        id: Math.random().toString(36).substr(2, 9),
        userId,
        plan: plan as any,
        status: 'active',
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        price,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      subscriptions.push(subscription)
      saveToStorage('subscriptions', subscriptions)

      return { data: subscription, error: null }
    },
  },

  // Profiles
  profiles: {
    get: async (userId: string) => {
      const profiles = getFromStorage<Profile[]>('profiles', [])
      const profile = profiles.find(p => p.userId === userId)
      return { data: profile || null, error: null }
    },

    update: async (userId: string, updates: Partial<Profile>) => {
      const profiles = getFromStorage<Profile[]>('profiles', [])
      const index = profiles.findIndex(p => p.userId === userId)

      if (index >= 0) {
        profiles[index] = { ...profiles[index], ...updates, updatedAt: new Date().toISOString() }
        saveToStorage('profiles', profiles)
        return { data: profiles[index], error: null }
      }

      return { data: null, error: { message: 'Profile not found' } }
    },
  },
}

// Initialize with mock data if empty
export const initializeMockData = () => {
  if (typeof window === 'undefined') return

  // Check if already initialized
  if (window.localStorage.getItem('dataInitialized')) return

  // Import and save levels
  const levels: Level[] = [
    {
      id: 'basic',
      name: 'Базовый уровень',
      description: 'Алфавит, произношение, базовые фразы',
      cefr: 'Pre-A1',
      order: 1,
      lessonCount: 50,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'a1',
      name: 'Уровень A1',
      description: 'Элементарный уровень',
      cefr: 'A1',
      order: 2,
      lessonCount: 80,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'a2',
      name: 'Уровень A2',
      description: 'Предпороговый уровень',
      cefr: 'A2',
      order: 3,
      lessonCount: 80,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'b1',
      name: 'Уровень B1',
      description: 'Пороговый уровень + Subjuntivo',
      cefr: 'B1',
      order: 4,
      lessonCount: 80,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'b2',
      name: 'Уровень B2',
      description: 'Продвинутый пороговый уровень',
      cefr: 'B2',
      order: 5,
      lessonCount: 80,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'c1',
      name: 'Уровень C1',
      description: 'Продвинутый уровень',
      cefr: 'C1',
      order: 6,
      lessonCount: 80,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]

  saveToStorage('levels', levels)

  // Create sample lessons for Basic level
  const lessons: Lesson[] = [
    {
      id: 'basic-1',
      levelId: 'basic',
      title: 'Испанский алфавит',
      description: 'Изучаем испанский алфавит и произношение букв',
      content: {
        introduction: {
          title: 'Испанский алфавит',
          goals: ['Выучить испанский алфавит', 'Научиться правильно произносить буквы', 'Понять основные правила чтения'],
          overview: 'В этом уроке мы познакомимся с испанским алфавитом и научимся правильно произносить все буквы.',
        },
        newWords: ['basic-1-word-1', 'basic-1-word-2'],
        grammar: {
          title: 'Испанский алфавит',
          explanation: 'Испанский алфавит содержит 27 букв (включая Ñ). Большинство букв произносятся так же, как пишутся.',
          examples: [
            { spanish: 'A - a (а)', russian: 'Как в слове "арбуз"' },
            { spanish: 'B - be (бэ)', russian: 'Как "б"' },
            { spanish: 'C - ce (сэ)', russian: 'Перед e, i = "с", иначе "к"' },
          ],
        },
        listening: {
          audioUrl: '/audio/basic-1-listening.mp3',
          transcript: 'El alfabeto español tiene veintisiete letras.',
          questions: [
            {
              question: '¿Cuántas letras tiene el alfabeto español?',
              options: ['26 letras', '27 letras', '28 letras', '25 letras'],
              correctAnswer: 1,
            },
          ],
        },
        phrases: [
          {
            spanish: '¿Cómo se escribe?',
            russian: 'Как это пишется?',
            context: 'Используется когда вы хотите узнать написание слова',
          },
        ],
        homework: {
          vocabularyTest: true,
          listening: true,
          reading: true,
          writing: false,
        },
      },
      audioUrl: '/audio/basic-1.mp3',
      readingText: 'El alfabeto español es muy importante para aprender el idioma...',
      duration: 30,
      order: 1,
      isFree: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'basic-2',
      levelId: 'basic',
      title: 'Приветствия',
      description: 'Учимся здороваться и прощаться по-испански',
      content: {
        introduction: {
          title: 'Приветствия и прощания',
          goals: ['Научиться приветствовать людей', 'Узнать как прощаться', 'Понять формальное и неформальное общение'],
          overview: 'Научимся базовым фразам приветствия и прощания на испанском языке.',
        },
        newWords: ['basic-2-word-1', 'basic-2-word-2'],
        grammar: {
          title: 'Приветствия',
          explanation: 'В испанском языке есть формальные и неформальные приветствия.',
          examples: [
            { spanish: 'Hola', russian: 'Привет (неформально)' },
            { spanish: 'Buenos días', russian: 'Доброе утро (формально)' },
            { spanish: 'Adiós', russian: 'До свидания' },
          ],
        },
        listening: {
          audioUrl: '/audio/basic-2-listening.mp3',
          transcript: 'Hola, ¿cómo estás? Muy bien, gracias.',
          questions: [
            {
              question: '¿Cómo se dice "привет" en español?',
              options: ['Adiós', 'Hola', 'Gracias', 'Por favor'],
              correctAnswer: 1,
            },
          ],
        },
        phrases: [
          {
            spanish: '¿Cómo estás?',
            russian: 'Как дела?',
            context: 'Неформальное приветствие',
          },
          {
            spanish: 'Muy bien, gracias',
            russian: 'Очень хорошо, спасибо',
            context: 'Ответ на вопрос о делах',
          },
        ],
        homework: {
          vocabularyTest: true,
          listening: true,
          reading: true,
          writing: false,
        },
      },
      audioUrl: '/audio/basic-2.mp3',
      readingText: 'Cuando conocemos a alguien, es importante saber saludar correctamente...',
      duration: 30,
      order: 2,
      isFree: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]

  saveToStorage('lessons', lessons)
  saveToStorage('users', [])
  saveToStorage('profiles', [])
  saveToStorage('progress', [])
  saveToStorage('subscriptions', [])

  window.localStorage.setItem('dataInitialized', 'true')
}

const dbModule = {
  auth,
  db,
  initializeMockData,
}

export default dbModule
