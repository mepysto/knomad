'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

interface FavoritesContextType {
  favorites: number[]
  addFavorite: (cityId: number) => void
  removeFavorite: (cityId: number) => void
  isFavorite: (cityId: number) => boolean
  isLoading: boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('knomad_favorites')
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch (error) {
        console.error('Failed to parse favorites:', error)
      }
    }
    setIsLoading(false)
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('knomad_favorites', JSON.stringify(favorites))
    }
  }, [favorites, isLoading])

  const addFavorite = (cityId: number) => {
    setFavorites((prev) => {
      if (!prev.includes(cityId)) {
        return [...prev, cityId]
      }
      return prev
    })
  }

  const removeFavorite = (cityId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== cityId))
  }

  const isFavorite = (cityId: number) => {
    return favorites.includes(cityId)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        isLoading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider')
  }
  return context
}
