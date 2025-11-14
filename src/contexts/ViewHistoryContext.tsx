'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { City } from '@/lib/types'

interface ViewHistoryContextType {
  viewHistory: City[]
  addViewHistory: (city: City) => void
  getRecentCities: (limit?: number) => City[]
  isLoading: boolean
}

const ViewHistoryContext = createContext<ViewHistoryContextType | undefined>(
  undefined
)

export function ViewHistoryProvider({ children }: { children: ReactNode }) {
  const [viewHistory, setViewHistory] = useState<City[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load view history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('knomad_view_history')
    if (stored) {
      try {
        setViewHistory(JSON.parse(stored))
      } catch (error) {
        console.error('Failed to parse view history:', error)
      }
    }
    setIsLoading(false)
  }, [])

  // Save view history to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('knomad_view_history', JSON.stringify(viewHistory))
    }
  }, [viewHistory, isLoading])

  const addViewHistory = (city: City) => {
    setViewHistory((prev) => {
      // Remove if already exists
      const filtered = prev.filter((c) => c.id !== city.id)
      // Add to the beginning
      const updated = [city, ...filtered]
      // Keep only last 10
      return updated.slice(0, 10)
    })
  }

  const getRecentCities = (limit: number = 10): City[] => {
    return viewHistory.slice(0, limit)
  }

  return (
    <ViewHistoryContext.Provider
      value={{
        viewHistory,
        addViewHistory,
        getRecentCities,
        isLoading,
      }}
    >
      {children}
    </ViewHistoryContext.Provider>
  )
}

export function useViewHistory() {
  const context = useContext(ViewHistoryContext)
  if (!context) {
    throw new Error('useViewHistory must be used within ViewHistoryProvider')
  }
  return context
}
