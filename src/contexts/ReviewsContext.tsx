'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import type { Review } from '@/lib/types'

export type UserReview = Review

interface UserHelpfulness {
  reviewId: number
  isHelpful: boolean // true: helpful, false: not helpful, null: not voted
}

interface ReviewsContextType {
  userReviews: UserReview[]
  addUserReview: (review: Omit<UserReview, 'id' | 'helpful' | 'notHelpful' | 'isUserGenerated'>) => void
  updateHelpfulness: (reviewId: number, isHelpful: boolean | null) => void
  getHelpfulnessStatus: (reviewId: number) => boolean | null
  isLoading: boolean
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined)

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [userReviews, setUserReviews] = useState<UserReview[]>([])
  const [helpfulness, setHelpfulness] = useState<UserHelpfulness[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load user reviews and helpfulness from localStorage on mount
  useEffect(() => {
    const storedReviews = localStorage.getItem('knomad_user_reviews')
    const storedHelpfulness = localStorage.getItem('knomad_review_helpfulness')

    if (storedReviews) {
      try {
        setUserReviews(JSON.parse(storedReviews))
      } catch (error) {
        console.error('Failed to parse user reviews:', error)
      }
    }

    if (storedHelpfulness) {
      try {
        setHelpfulness(JSON.parse(storedHelpfulness))
      } catch (error) {
        console.error('Failed to parse helpfulness data:', error)
      }
    }

    setIsLoading(false)
  }, [])

  // Save user reviews to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('knomad_user_reviews', JSON.stringify(userReviews))
    }
  }, [userReviews, isLoading])

  // Save helpfulness to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('knomad_review_helpfulness', JSON.stringify(helpfulness))
    }
  }, [helpfulness, isLoading])

  const addUserReview = (review: Omit<UserReview, 'id' | 'helpful' | 'notHelpful' | 'isUserGenerated'>) => {
    const newReview: UserReview = {
      ...review,
      id: Date.now(), // Simple ID generation
      helpful: 0,
      notHelpful: 0,
      isUserGenerated: true,
    }

    setUserReviews((prev) => [newReview, ...prev])
  }

  const updateHelpfulness = (reviewId: number, isHelpful: boolean | null) => {
    setHelpfulness((prev) => {
      const existing = prev.find((h) => h.reviewId === reviewId)

      if (!existing) {
        if (isHelpful === null) {
          return prev
        }
        return [...prev, { reviewId, isHelpful }]
      }

      if (isHelpful === null) {
        return prev.filter((h) => h.reviewId !== reviewId)
      }

      if (existing.isHelpful === isHelpful) {
        // Toggle off: remove if clicking the same button again
        return prev.filter((h) => h.reviewId !== reviewId)
      }

      // Change vote
      return prev.map((h) =>
        h.reviewId === reviewId ? { ...h, isHelpful } : h
      )
    })
  }

  const getHelpfulnessStatus = (reviewId: number): boolean | null => {
    const record = helpfulness.find((h) => h.reviewId === reviewId)
    return record ? record.isHelpful : null
  }

  return (
    <ReviewsContext.Provider
      value={{
        userReviews,
        addUserReview,
        updateHelpfulness,
        getHelpfulnessStatus,
        isLoading,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  )
}

export function useReviews() {
  const context = useContext(ReviewsContext)
  if (!context) {
    throw new Error('useReviews must be used within ReviewsProvider')
  }
  return context
}
