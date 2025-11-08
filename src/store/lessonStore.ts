import { create } from 'zustand'
import { Lesson, Progress } from '@/types'

interface LessonState {
  currentLesson: Lesson | null
  progress: Progress | null
  isPlaying: boolean
  currentTime: number

  // Actions
  setCurrentLesson: (lesson: Lesson | null) => void
  setProgress: (progress: Progress | null) => void
  setIsPlaying: (playing: boolean) => void
  setCurrentTime: (time: number) => void
  resetLesson: () => void
}

export const useLessonStore = create<LessonState>((set) => ({
  currentLesson: null,
  progress: null,
  isPlaying: false,
  currentTime: 0,

  setCurrentLesson: (lesson) => set({ currentLesson: lesson }),

  setProgress: (progress) => set({ progress }),

  setIsPlaying: (playing) => set({ isPlaying: playing }),

  setCurrentTime: (time) => set({ currentTime: time }),

  resetLesson: () => set({
    currentLesson: null,
    progress: null,
    isPlaying: false,
    currentTime: 0
  }),
}))
