import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please check your .env.local file.')
}

// Create Supabase client for browser usage
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
})

// Auth helpers
export const auth = {
  // Sign up with email and password
  signUp: async (email: string, password: string, userData?: { firstName?: string; lastName?: string }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    })
    return { data, error }
  },

  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  getUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Get current session
  getSession: async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },

  // Reset password
  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    return { data, error }
  },

  // Update password
  updatePassword: async (newPassword: string) => {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    return { data, error }
  },
}

// Database helpers
export const db = {
  // Lessons
  lessons: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .order('order', { ascending: true })
      return { data, error }
    },

    getByLevel: async (levelId: string) => {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('level_id', levelId)
        .order('order', { ascending: true })
      return { data, error }
    },

    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('lessons')
        .select('*, vocabulary(*), tests(*)')
        .eq('id', id)
        .single()
      return { data, error }
    },
  },

  // Levels
  levels: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('levels')
        .select('*')
        .order('order', { ascending: true })
      return { data, error }
    },

    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('levels')
        .select('*, lessons(*)')
        .eq('id', id)
        .single()
      return { data, error }
    },
  },

  // User Progress
  progress: {
    get: async (userId: string) => {
      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', userId)
      return { data, error }
    },

    getByLesson: async (userId: string, lessonId: string) => {
      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', userId)
        .eq('lesson_id', lessonId)
        .single()
      return { data, error }
    },

    upsert: async (userId: string, lessonId: string, score: number, completed: boolean) => {
      const { data, error } = await supabase
        .from('progress')
        .upsert({
          user_id: userId,
          lesson_id: lessonId,
          score,
          completed,
          last_attempt: new Date().toISOString(),
        })
      return { data, error }
    },
  },

  // Subscriptions
  subscriptions: {
    get: async (userId: string) => {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .single()
      return { data, error }
    },

    create: async (userId: string, plan: string, price: number) => {
      const startDate = new Date()
      const endDate = new Date()

      // Calculate end date based on plan
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

      const { data, error } = await supabase
        .from('subscriptions')
        .insert({
          user_id: userId,
          plan,
          status: 'active',
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
          price,
        })
      return { data, error }
    },
  },

  // Profiles
  profiles: {
    get: async (userId: string) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single()
      return { data, error }
    },

    update: async (userId: string, updates: any) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', userId)
      return { data, error }
    },
  },
}

// Storage helpers
export const storage = {
  // Upload audio file
  uploadAudio: async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from('audio')
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      })
    return { data, error }
  },

  // Get audio URL
  getAudioUrl: (path: string) => {
    const { data } = supabase.storage.from('audio').getPublicUrl(path)
    return data.publicUrl
  },

  // Upload image
  uploadImage: async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from('images')
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      })
    return { data, error }
  },

  // Get image URL
  getImageUrl: (path: string) => {
    const { data } = supabase.storage.from('images').getPublicUrl(path)
    return data.publicUrl
  },
}

export default supabase
