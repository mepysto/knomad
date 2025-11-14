'use client'

import { Cloud, Wind, Wifi, Train, Home, Coffee } from 'lucide-react'
import { City } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface DetailSectionsProps {
  city: City
}

export default function DetailSections({ city }: DetailSectionsProps) {
  const airQualityColor = {
    good: 'text-green-600',
    moderate: 'text-yellow-600',
    bad: 'text-red-600',
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Cost Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Home className="h-5 w-5" />
            생활비
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">월 생활비</p>
            <p className="text-2xl font-bold">
              ₩{city.avg_monthly_cost.toLocaleString()}
            </p>
          </div>
          <div className="pt-3 border-t">
            <p className="text-sm text-muted-foreground">월세</p>
            <p className="text-xl font-bold">
              ₩{city.avg_rent.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Wifi className="h-5 w-5" />
            인프라
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">평균 인터넷 속도</p>
            <p className="text-2xl font-bold">{city.avg_internet_speed} Mbps</p>
          </div>
          <div className="pt-3 border-t space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">☕ 카페</span>
              <span className="font-bold">{city.cafe_count}개</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">💼 코워킹</span>
              <span className="font-bold">{city.coworking_count}개</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environment Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            환경
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">날씨</p>
            <p className="text-xl font-bold">{city.current_weather}</p>
            <p className="text-lg mt-1">{city.current_temp}°C</p>
          </div>
          <div className="pt-3 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">미세먼지</span>
              <span
                className={cn('font-bold', airQualityColor[city.air_quality || 'good'])}
              >
                PM {city.pm25}㎍/㎥
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{city.air_quality}</p>
          </div>
        </CardContent>
      </Card>

      {/* Transport Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Train className="h-5 w-5" />
            교통
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {city.has_subway || city.has_ktx ? (
            <div className="flex gap-2 flex-wrap">
              {city.has_subway && (
                <Badge variant="default" className="text-sm">
                  🚇 지하철
                </Badge>
              )}
              {city.has_ktx && (
                <Badge variant="secondary" className="text-sm">
                  🚄 KTX
                </Badge>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">
              지하철/KTX 미운영
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            {city.has_subway || city.has_ktx
              ? '대중교통이 잘 구성되어 있습니다.'
              : '대중교통 이용이 제한적입니다.'}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
