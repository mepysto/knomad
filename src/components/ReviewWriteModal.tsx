'use client'

import { useState } from 'react'
import { Star, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useReviews } from '@/contexts/ReviewsContext'

interface ReviewWriteModalProps {
  citySlug: string
  onClose: () => void
  isLoggedIn: boolean
}

const FAKE_USERNAMES = [
  '노마드여행가',
  '디지털노마드',
  '세계일꾼',
  '온라인직장인',
  '자유로운영혼',
  '도시탐험가',
  '카페와일의친구',
  '인터넷속도꾼',
]

export default function ReviewWriteModal({
  citySlug,
  onClose,
  isLoggedIn,
}: ReviewWriteModalProps) {
  const { addUserReview } = useReviews()
  const [rating, setRating] = useState(0)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLoggedIn) {
      alert('로그인 후 리뷰를 작성할 수 있습니다.')
      return
    }

    if (rating === 0) {
      alert('평점을 선택해주세요.')
      return
    }

    if (!title.trim()) {
      alert('제목을 입력해주세요.')
      return
    }

    if (!content.trim()) {
      alert('리뷰 내용을 입력해주세요.')
      return
    }

    setIsSubmitting(true)

    try {
      const randomUsername = FAKE_USERNAMES[Math.floor(Math.random() * FAKE_USERNAMES.length)]
      const today = new Date().toISOString().split('T')[0]

      addUserReview({
        citySlug,
        author: randomUsername,
        rating,
        title,
        content,
        date: today,
      })

      // Reset form
      setRating(0)
      setTitle('')
      setContent('')
      onClose()
    } catch (error) {
      console.error('Failed to submit review:', error)
      alert('리뷰 제출에 실패했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle>리뷰 작성</CardTitle>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-3">
              <p className="text-foreground font-semibold">로그인이 필요합니다</p>
              <p className="text-sm text-muted-foreground">
                리뷰를 작성하려면 먼저 로그인해주세요.
              </p>
              <div className="flex gap-2 pt-3">
                <Button variant="outline" onClick={onClose} className="flex-1">
                  취소
                </Button>
                <Button className="flex-1">
                  로그인
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle>리뷰 작성</CardTitle>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Rating Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">평점 *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={cn(
                        'h-8 w-8 transition-colors',
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      )}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-muted-foreground">{rating}점</p>
              )}
            </div>

            {/* Title */}
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                제목 *
              </label>
              <Input
                id="title"
                placeholder="리뷰 제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
              />
              <p className="text-xs text-muted-foreground">
                {title.length}/100
              </p>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                리뷰 내용 *
              </label>
              <textarea
                id="content"
                placeholder="이 도시에서의 경험을 자세히 공유해주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={500}
                rows={5}
                className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              />
              <p className="text-xs text-muted-foreground">
                {content.length}/500
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                취소
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || rating === 0 || !title.trim() || !content.trim()}
                className="flex-1"
              >
                {isSubmitting ? '제출 중...' : '리뷰 제출'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
