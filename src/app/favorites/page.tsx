'use client'

import { useFavorites } from '@/contexts/FavoritesContext'
import { cities } from '@/data/cities'
import { CityCard } from '@/components/CityCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function FavoritesPage() {
  const { favorites, isLoading } = useFavorites()

  const favoriteCities = cities.filter((city) => favorites.includes(city.id))

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">로드 중...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
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
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">❤️ 즐겨찾기</h1>
          <p className="text-muted-foreground mt-2">
            {favoriteCities.length}개의 도시를 즐겨찾기했습니다.
          </p>
        </div>

        {favoriteCities.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold mb-2">즐겨찾기가 없습니다</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              도시 카드의 하트 아이콘을 클릭하여 즐겨찾기에 추가하세요.
            </p>
            <Link href="/">
              <Button>홈으로 돌아가기</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {favoriteCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
