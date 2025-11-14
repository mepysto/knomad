'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Star, Target, MapPin, Clock, Megaphone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useFilter } from '@/contexts/FilterContext'
import { useViewHistory } from '@/contexts/ViewHistoryContext'
import { cities } from '@/data/cities'

export function Sidebar() {
  const { filters, setFilters, filteredCities } = useFilter()
  const { viewHistory, isLoading } = useViewHistory()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const popularCities = [...cities]
    .sort((a, b) => b.avg_rating - a.avg_rating)
    .slice(0, 5)

  const recommendations = [
    {
      icon: '💰',
      label: '저렴한 곳',
      onClick: () =>
        setFilters({
          ...filters,
          budget: { min: 0, max: 1300000 },
        }),
    },
    {
      icon: '🤫',
      label: '조용한 곳',
      onClick: () => setFilters({ ...filters, regions: ['강원권'] }),
    },
    {
      icon: '🏖️',
      label: '해변 도시',
      onClick: () => setFilters({ ...filters, regions: ['제주권', '호남권'] }),
    },
    {
      icon: '⛰️',
      label: '산악 도시',
      onClick: () => setFilters({ ...filters, regions: ['강원권'] }),
    },
  ]

  const regions = [
    { name: '수도권', count: cities.filter((c) => c.region === '수도권').length },
    { name: '영남권', count: cities.filter((c) => c.region === '영남권').length },
    { name: '호남권', count: cities.filter((c) => c.region === '호남권').length },
    { name: '강원권', count: cities.filter((c) => c.region === '강원권').length },
    { name: '제주권', count: cities.filter((c) => c.region === '제주권').length },
  ]


  return (
    <aside className="hidden lg:block w-72 space-y-6">
      {/* Popular Ranking */}
      <Card className="dark:bg-slate-900 dark:border-slate-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-500" />
            인기순위
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularCities.map((city, index) => (
            <Link key={city.id} href={`/cities/${city.slug}`}>
              <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors text-left">
                <span className="text-sm font-bold text-primary">#{index + 1}</span>
                <div className="flex-1">
                  <div className="font-medium text-sm">{city.name_kr}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>{city.avg_rating}</span>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="dark:bg-slate-900 dark:border-slate-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            추천 도시
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {recommendations.map((rec) => (
            <button
              key={rec.label}
              onClick={rec.onClick}
              className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-left text-sm"
            >
              <span>{rec.icon}</span>
              <span>{rec.label}</span>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Regions */}
      <Card className="dark:bg-slate-900 dark:border-slate-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            지역별
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {regions.map((region) => (
            <label
              key={region.name}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300"
                checked={filters.regions.includes(region.name)}
                onChange={(e) => {
                  const newRegions = e.target.checked
                    ? [...filters.regions, region.name]
                    : filters.regions.filter((r) => r !== region.name)
                  setFilters({ ...filters, regions: newRegions })
                }}
              />
              <span className="flex-1 text-sm">{region.name}</span>
              <Badge variant="secondary" className="text-xs">
                {region.count}
              </Badge>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Recent Viewed */}
      {isClient && !isLoading && viewHistory.length > 0 && (
        <Card className="dark:bg-slate-900 dark:border-slate-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              최근 본 도시
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {viewHistory.slice(0, 5).map((city) => (
              <Link key={city.id} href={`/cities/${city.slug}`}>
                <button className="w-full text-left p-2 rounded-lg hover:bg-muted transition-colors text-sm">
                  • {city.name_kr}
                </button>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Announcements */}
      <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Megaphone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="dark:text-blue-100">공지사항</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="p-2">
            <div className="font-medium text-blue-900 dark:text-blue-100">신규 도시 추가!</div>
            <div className="text-xs text-blue-700 dark:text-blue-300">평창, 통영 추가되었습니다</div>
          </div>
          <div className="p-2">
            <div className="font-medium text-blue-900 dark:text-blue-100">리뷰 이벤트</div>
            <div className="text-xs text-blue-700 dark:text-blue-300">리뷰 작성하고 혜택 받으세요</div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
