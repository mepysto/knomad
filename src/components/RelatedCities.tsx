'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { City } from '@/lib/types'
import { cities } from '@/data/cities'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface RelatedCitiesProps {
  currentCity: City
}

function getSimilarCities(currentCity: City, limit: number = 3): City[] {
  const currentCost = currentCity.avg_monthly_cost
  const costRange = 300000 // ₩300k 범위 내

  const similar = cities
    .filter((c) => c.id !== currentCity.id)
    .map((city) => {
      let score = 0

      // Price similarity (가장 중요)
      const costDiff = Math.abs(city.avg_monthly_cost - currentCost)
      if (costDiff <= costRange) {
        score += 30 - (costDiff / costRange) * 30
      }

      // Rating similarity
      const ratingDiff = Math.abs(city.avg_rating - currentCity.avg_rating)
      score += Math.max(0, 20 - ratingDiff * 5)

      // Weather similarity (온도)
      if (currentCity.current_temp && city.current_temp) {
        const tempDiff = Math.abs(city.current_temp - currentCity.current_temp)
        score += Math.max(0, 20 - tempDiff * 2)
      }

      // Same region bonus
      if (city.region === currentCity.region) {
        score += 15
      }

      // Tag overlap
      if (currentCity.tags && city.tags) {
        const commonTags = currentCity.tags.filter((tag) =>
          city.tags?.includes(tag)
        )
        score += commonTags.length * 5
      }

      return { city, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.city)

  return similar
}

export default function RelatedCities({ currentCity }: RelatedCitiesProps) {
  const relatedCities = getSimilarCities(currentCity)

  if (relatedCities.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">이런 도시는 어떨까요?</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedCities.map((city) => (
          <Link key={city.id} href={`/cities/${city.slug}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 h-full cursor-pointer">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={city.image_url}
                  alt={city.name_kr}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardContent className="p-4 space-y-2">
                {/* Title */}
                <div>
                  <h3 className="font-bold text-lg">{city.name_kr}</h3>
                  <p className="text-sm text-muted-foreground">{city.region}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-3 w-3',
                          i < Math.floor(city.avg_rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{city.avg_rating}</span>
                </div>

                {/* Cost Info */}
                <div className="text-sm">
                  <span className="text-muted-foreground">₩</span>
                  <span className="font-semibold">
                    {(city.avg_monthly_cost / 1000000).toFixed(1)}M
                  </span>
                </div>

                {/* Tags */}
                {city.tags && city.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2">
                    {city.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
