'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cities } from '@/data/cities'
import { useViewHistory } from '@/contexts/ViewHistoryContext'
import { getRecommendedCities } from '@/lib/recommendations'

export function PersonalizationSection() {
  const { viewHistory, isLoading } = useViewHistory()
  const [recommendedCities, setRecommendedCities] = useState(cities.slice(0, 6))
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isLoading && viewHistory.length > 0) {
      const recommended = getRecommendedCities(viewHistory, cities)
      setRecommendedCities(recommended.length > 0 ? recommended : cities.slice(0, 6))
    }
  }, [viewHistory, isLoading])

  if (!isClient || isLoading) return null

  // Only show personalization sections if user has view history
  if (viewHistory.length === 0) return null

  return (
    <div className="space-y-8">
      {/* Recent Viewed Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">최근 본 도시</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {viewHistory.slice(0, 3).map((city) => (
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
      </div>

      {/* Recommended Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">당신을 위한 추천</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedCities.slice(0, 3).map((city) => (
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
      </div>
    </div>
  )
}
