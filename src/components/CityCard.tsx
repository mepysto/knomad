import Image from 'next/image'
import { Star, Wifi, ThumbsUp, Cloud, Wind, Train, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { City } from '@/lib/types'
import { cn } from '@/lib/utils'

interface CityCardProps {
  city: City
}

export function CityCard({ city }: CityCardProps) {
  const airQualityColor = {
    good: 'text-green-600',
    moderate: 'text-yellow-600',
    bad: 'text-red-600',
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={city.image_url}
          alt={city.name_kr}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-white/90 font-semibold">
            #{city.ranking}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Title & Location */}
        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">
            {city.name_kr}
          </h3>
          <p className="text-sm text-muted-foreground">
            🇰🇷 대한민국 · {city.region}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < Math.floor(city.avg_rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-300'
                )}
              />
            ))}
          </div>
          <span className="font-semibold">{city.avg_rating}</span>
          <span className="text-sm text-muted-foreground">
            ({city.review_count} 리뷰)
          </span>
        </div>

        {/* Key Metrics */}
        <div className="space-y-2 py-2 border-t border-b">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">💵 월 생활비</span>
            <span className="font-semibold">
              ₩{city.avg_monthly_cost.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <Wifi className="h-3 w-3" />
              인터넷
            </span>
            <span className="font-semibold">{city.avg_internet_speed} Mbps</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              추천
            </span>
            <span className="font-semibold">{city.recommend_rate}%</span>
          </div>
        </div>

        {/* Environment Info */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Cloud className="h-3 w-3" />
              {city.current_weather}
            </span>
            <span className="font-medium">{city.current_temp}°C</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Wind className="h-3 w-3" />
              미세먼지
            </span>
            <span className={cn('font-medium', airQualityColor[city.air_quality || 'good'])}>
              PM {city.pm25}㎍/㎥
            </span>
          </div>
          {(city.has_subway || city.has_ktx) && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Train className="h-3 w-3" />
              <div className="flex gap-1">
                {city.has_subway && <Badge variant="outline" className="text-xs">지하철</Badge>}
                {city.has_ktx && <Badge variant="outline" className="text-xs">KTX</Badge>}
              </div>
            </div>
          )}
        </div>

        {/* Tags */}
        {city.tags && city.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {city.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Action Button */}
        <Button className="w-full" variant="outline">
          자세히 보기
        </Button>
      </CardContent>
    </Card>
  )
}
