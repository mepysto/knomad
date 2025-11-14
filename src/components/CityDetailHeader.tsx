'use client'

import { Star } from 'lucide-react'
import { City } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface CityDetailHeaderProps {
  city: City
}

export default function CityDetailHeader({ city }: CityDetailHeaderProps) {
  return (
    <div className="space-y-4">
      {/* Title and Location */}
      <div>
        <h1 className="text-4xl font-bold">{city.name_kr}</h1>
        <p className="text-lg text-muted-foreground mt-2">
          🇰🇷 대한민국 · {city.region}
        </p>
      </div>

      {/* Rating and Review Count */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-5 w-5',
                  i < Math.floor(city.avg_rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-300'
                )}
              />
            ))}
          </div>
          <span className="text-2xl font-bold">{city.avg_rating}</span>
          <span className="text-muted-foreground">({city.review_count}개 리뷰)</span>
        </div>

        <Badge variant="default" className="text-base px-3 py-1">
          #{city.ranking}
        </Badge>

        <Badge variant="secondary" className="text-base px-3 py-1">
          추천도 {city.recommend_rate}%
        </Badge>
      </div>

      {/* Tags */}
      {city.tags && city.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {city.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
