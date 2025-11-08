'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/supabase'
import { Lesson, Level } from '@/types'

export function useLessons(levelId?: string) {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const { data, error: fetchError } = levelId
          ? await db.lessons.getByLevel(levelId)
          : await db.lessons.getAll()

        if (fetchError) throw fetchError

        setLessons(data as Lesson[] || [])
      } catch (err: any) {
        setError(err.message)
        console.error('Error fetching lessons:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLessons()
  }, [levelId])

  return { lessons, isLoading, error }
}

export function useLesson(lessonId: string) {
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const { data, error: fetchError } = await db.lessons.getById(lessonId)

        if (fetchError) throw fetchError

        setLesson(data as Lesson)
      } catch (err: any) {
        setError(err.message)
        console.error('Error fetching lesson:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (lessonId) {
      fetchLesson()
    }
  }, [lessonId])

  return { lesson, isLoading, error }
}

export function useLevels() {
  const [levels, setLevels] = useState<Level[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const { data, error: fetchError } = await db.levels.getAll()

        if (fetchError) throw fetchError

        setLevels(data as Level[] || [])
      } catch (err: any) {
        setError(err.message)
        console.error('Error fetching levels:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLevels()
  }, [])

  return { levels, isLoading, error }
}
