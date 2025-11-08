'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import { supabase, auth, db } from '@/lib/supabase'

export function useAuth() {
  const router = useRouter()
  const { user, profile, isLoading, setUser, setProfile, setLoading, logout: logoutStore } = useAuthStore()

  useEffect(() => {
    // Check active session
    const checkSession = async () => {
      try {
        setLoading(true)
        const { session } = await auth.getSession()

        if (session?.user) {
          setUser(session.user)

          // Load user profile
          const { data: profileData } = await db.profiles.get(session.user.id)
          if (profileData) {
            setProfile(profileData as any)
          }
        } else {
          setUser(null)
          setProfile(null)
        }
      } catch (error) {
        console.error('Error checking session:', error)
        setUser(null)
        setProfile(null)
      } finally {
        setLoading(false)
      }
    }

    checkSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user)

        // Load user profile
        const { data: profileData } = await db.profiles.get(session.user.id)
        if (profileData) {
          setProfile(profileData as any)
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
        setProfile(null)
      }

      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [setUser, setProfile, setLoading])

  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    try {
      const { data, error } = await auth.signUp(email, password, { firstName, lastName })

      if (error) throw error

      if (data.user) {
        setUser(data.user)
        return { success: true }
      }

      return { success: false, error: 'Ошибка регистрации' }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await auth.signIn(email, password)

      if (error) throw error

      if (data.user) {
        setUser(data.user)

        // Load user profile
        const { data: profileData } = await db.profiles.get(data.user.id)
        if (profileData) {
          setProfile(profileData as any)
        }

        return { success: true }
      }

      return { success: false, error: 'Ошибка входа' }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await auth.signOut()
      logoutStore()
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      const { error } = await auth.resetPassword(email)

      if (error) throw error

      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  return {
    user,
    profile,
    isLoading,
    isAuthenticated: !!user,
    signUp,
    signIn,
    logout,
    resetPassword,
  }
}
