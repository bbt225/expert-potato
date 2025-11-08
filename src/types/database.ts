export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'guest' | 'user' | 'premium' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: 'guest' | 'user' | 'premium' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'guest' | 'user' | 'premium' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          user_id: string
          first_name: string | null
          last_name: string | null
          avatar: string | null
          current_level: string | null
          total_xp: number
          streak: number
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          first_name?: string | null
          last_name?: string | null
          avatar?: string | null
          current_level?: string | null
          total_xp?: number
          streak?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          first_name?: string | null
          last_name?: string | null
          avatar?: string | null
          current_level?: string | null
          total_xp?: number
          streak?: number
          created_at?: string
          updated_at?: string
        }
      }
      levels: {
        Row: {
          id: string
          name: string
          description: string
          cefr: string
          order: number
          lesson_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          cefr: string
          order: number
          lesson_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          cefr?: string
          order?: number
          lesson_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          level_id: string
          title: string
          description: string
          content: Json
          audio_url: string | null
          reading_text: string
          duration: number
          order: number
          is_free: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          level_id: string
          title: string
          description: string
          content: Json
          audio_url?: string | null
          reading_text: string
          duration?: number
          order: number
          is_free?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          level_id?: string
          title?: string
          description?: string
          content?: Json
          audio_url?: string | null
          reading_text?: string
          duration?: number
          order?: number
          is_free?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      vocabulary: {
        Row: {
          id: string
          lesson_id: string
          word: string
          translation: string
          example: string
          audio_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          lesson_id: string
          word: string
          translation: string
          example: string
          audio_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          lesson_id?: string
          word?: string
          translation?: string
          example?: string
          audio_url?: string | null
          created_at?: string
        }
      }
      tests: {
        Row: {
          id: string
          lesson_id: string
          type: 'multiple_choice' | 'fill_blank' | 'matching' | 'audio' | 'translation' | 'sentence_order'
          question: string
          options: Json
          correct_answer: string
          explanation: string | null
          created_at: string
        }
        Insert: {
          id?: string
          lesson_id: string
          type: 'multiple_choice' | 'fill_blank' | 'matching' | 'audio' | 'translation' | 'sentence_order'
          question: string
          options: Json
          correct_answer: string
          explanation?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          lesson_id?: string
          type?: 'multiple_choice' | 'fill_blank' | 'matching' | 'audio' | 'translation' | 'sentence_order'
          question?: string
          options?: Json
          correct_answer?: string
          explanation?: string | null
          created_at?: string
        }
      }
      progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          completed: boolean
          score: number
          attempts: number
          last_attempt: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          completed?: boolean
          score?: number
          attempts?: number
          last_attempt?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          completed?: boolean
          score?: number
          attempts?: number
          last_attempt?: string
          created_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          plan: 'free' | 'monthly' | 'quarterly' | 'yearly'
          status: 'active' | 'cancelled' | 'expired'
          start_date: string
          end_date: string
          price: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan: 'free' | 'monthly' | 'quarterly' | 'yearly'
          status?: 'active' | 'cancelled' | 'expired'
          start_date: string
          end_date: string
          price: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan?: 'free' | 'monthly' | 'quarterly' | 'yearly'
          status?: 'active' | 'cancelled' | 'expired'
          start_date?: string
          end_date?: string
          price?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'guest' | 'user' | 'premium' | 'admin'
      test_type: 'multiple_choice' | 'fill_blank' | 'matching' | 'audio' | 'translation' | 'sentence_order'
      subscription_plan: 'free' | 'monthly' | 'quarterly' | 'yearly'
      subscription_status: 'active' | 'cancelled' | 'expired'
    }
  }
}
