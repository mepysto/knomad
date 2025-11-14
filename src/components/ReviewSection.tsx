'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { getReviewsByCity, getRatingDistribution, getAverageRating, getRecommendRate } from '@/data/reviews'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { useReviews } from '@/contexts/ReviewsContext'

const ReviewWriteModal = dynamic(() => import('@/components/ReviewWriteModal'), {
  loading: () => <div className="text-sm text-muted-foreground">로딩 중...</div>,
})

interface ReviewSectionProps {
  citySlug: string
  isLoggedIn?: boolean
}

type SortOption = 'latest' | 'helpful'

export default function ReviewSection({ citySlug, isLoggedIn = false }: ReviewSectionProps) {
  const [sortOption, setSortOption] = useState<SortOption>('latest')
  const [showWriteModal, setShowWriteModal] = useState(false)
  const { userReviews, updateHelpfulness, getHelpfulnessStatus } = useReviews()

  const baseReviews = getReviewsByCity(citySlug)
  const userCityReviews = userReviews.filter((review) => review.citySlug === citySlug)

  const distribution = getRatingDistribution(citySlug)
  const averageRating = getAverageRating(citySlug)
  const recommendRate = getRecommendRate(citySlug)

  const sortedReviews = useMemo(() => {
    const allReviews = [...userCityReviews, ...baseReviews]

    if (sortOption === 'latest') {
      return allReviews.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    } else if (sortOption === 'helpful') {
      return allReviews.sort(
        (a, b) => b.helpful - a.helpful
      )
    }

    return allReviews
  }, [baseReviews, userCityReviews, sortOption])

  if (baseReviews.length === 0 && userCityReviews.length === 0) {
    return null
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-3xl font-bold">리뷰 & 평가</h2>
          <Button
            onClick={() => setShowWriteModal(true)}
            className="shrink-0"
          >
            리뷰 작성
          </Button>
        </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Rating Summary */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">평점 요약</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Average Rating */}
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">평균 평점</div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{averageRating}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < Math.round(averageRating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      )}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{baseReviews.length + userCityReviews.length}개의 리뷰</p>
            </div>

            {/* Recommend Rate */}
            <div className="space-y-1 pt-3 border-t">
              <div className="text-sm text-muted-foreground">추천도</div>
              <div className="text-2xl font-bold">{recommendRate}%</div>
              <p className="text-xs text-muted-foreground">4점 이상 비율</p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2 pt-3 border-t">
              <div className="text-sm text-muted-foreground mb-2">평점 분포</div>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">{distribution[rating]}개</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews List */}
        <div className="md:col-span-2 space-y-4">
          {/* Sort Options */}
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              총 {baseReviews.length + userCityReviews.length}개의 리뷰
            </p>
            <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="helpful">유용순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reviews Cards */}
          {sortedReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 space-y-3">
                {/* Review Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'h-4 w-4',
                              i < review.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            )}
                          />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {review.rating}점
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-base">{review.title}</h3>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-sm text-foreground leading-relaxed">
                  {review.content}
                </p>

                {/* Review Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{review.author}</span>
                    <span>·</span>
                    <span>{review.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        'gap-1 h-8 text-xs',
                        getHelpfulnessStatus(review.id) === true && 'text-amber-500'
                      )}
                      onClick={() => {
                        const current = getHelpfulnessStatus(review.id)
                        updateHelpfulness(review.id, current === true ? null : true)
                      }}
                    >
                      <ThumbsUp className="h-3 w-3" />
                      {review.helpful}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        'gap-1 h-8 text-xs',
                        getHelpfulnessStatus(review.id) === false && 'text-amber-500'
                      )}
                      onClick={() => {
                        const current = getHelpfulnessStatus(review.id)
                        updateHelpfulness(review.id, current === false ? null : false)
                      }}
                    >
                      <ThumbsDown className="h-3 w-3" />
                      {review.notHelpful}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>

    {showWriteModal && (
      <ReviewWriteModal
        citySlug={citySlug}
        onClose={() => setShowWriteModal(false)}
        isLoggedIn={isLoggedIn}
      />
    )}
    </>
  )
}
