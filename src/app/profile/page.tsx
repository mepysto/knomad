'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Heart, MessageCircle, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cities } from '@/data/cities'
import { useFavorites } from '@/contexts/FavoritesContext'
import { useReviews } from '@/contexts/ReviewsContext'
import { useViewHistory } from '@/contexts/ViewHistoryContext'

export default function ProfilePage() {
  const { favorites } = useFavorites()
  const { userReviews } = useReviews()
  const { viewHistory, isLoading } = useViewHistory()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <div className="text-center text-muted-foreground">로딩 중...</div>
        </div>
      </div>
    )
  }

  const favoriteCount = favorites.length
  const reviewCount = userReviews.length
  const viewCount = viewHistory.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              뒤로가기
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 space-y-8">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Heart className="h-4 w-4" />
                즐겨찾기
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{favoriteCount}</div>
              <p className="text-xs text-muted-foreground mt-1">저장한 도시</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                리뷰
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{reviewCount}</div>
              <p className="text-xs text-muted-foreground mt-1">작성한 리뷰</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Eye className="h-4 w-4" />
                조회
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{viewCount}</div>
              <p className="text-xs text-muted-foreground mt-1">본 도시</p>
            </CardContent>
          </Card>
        </div>

        {/* Favorites Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">즐겨찾기 ({favoriteCount})</h2>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favorites.slice(0, 6).map((cityId) => {
                const city = cities.find((c) => c.id === cityId)
                return city ? (
                  <Link key={city.id} href={`/cities/${city.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="relative h-32 w-full">
                        <Image
                          src={city.image_url}
                          alt={city.name_kr}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-sm">{city.name_kr}</h3>
                        <p className="text-xs text-muted-foreground">{city.region}</p>
                        <div className="flex items-center justify-between mt-2 text-xs">
                          <span>⭐ {city.avg_rating.toFixed(1)}</span>
                          <span>₩{(city.avg_monthly_cost / 1000000).toFixed(1)}M</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ) : null
              })}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">저장한 도시가 없습니다.</p>
          )}
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">내 리뷰 ({reviewCount})</h2>
          {userReviews.length > 0 ? (
            <div className="space-y-3">
              {userReviews.slice(0, 5).map((review) => {
                const reviewCity = cities.find((c) => c.slug === review.citySlug)
                return (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{review.title}</div>
                          <p className="text-xs text-muted-foreground">
                            {reviewCity?.name_kr} • {new Date(review.date).toLocaleDateString('ko-KR')}
                          </p>
                          <p className="text-sm mt-2 line-clamp-2">{review.content}</p>
                        </div>
                        <div className="text-lg font-semibold ml-4">⭐ {review.rating}</div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">작성한 리뷰가 없습니다.</p>
          )}
        </div>

        {/* View History Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">조회 기록 ({viewCount})</h2>
          {viewHistory.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {viewHistory.slice(0, 6).map((city) => (
                <Link key={city.id} href={`/cities/${city.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="relative h-32 w-full">
                      <Image
                        src={city.image_url}
                        alt={city.name_kr}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm">{city.name_kr}</h3>
                      <p className="text-xs text-muted-foreground">{city.region}</p>
                      <div className="flex items-center justify-between mt-2 text-xs">
                        <span>⭐ {city.avg_rating.toFixed(1)}</span>
                        <span>₩{(city.avg_monthly_cost / 1000000).toFixed(1)}M</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">조회 기록이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  )
}
