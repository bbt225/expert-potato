'use client'

import { useEffect } from 'react'
import { initializeMockData } from '@/lib/database'

export function DataInitializer() {
  useEffect(() => {
    // Initialize mock data on client side (async)
    initializeMockData().catch(console.error)
  }, [])

  return null
}
