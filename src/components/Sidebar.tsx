import { Star, Target, MapPin, Clock, Megaphone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Sidebar() {
  const popularCities = [
    { rank: 1, name: '서울(강남)', rating: 4.8 },
    { rank: 2, name: '제주', rating: 4.9 },
    { rank: 3, name: '부산', rating: 4.7 },
    { rank: 4, name: '강릉', rating: 4.6 },
    { rank: 5, name: '전주', rating: 4.5 },
  ]

  const recommendations = [
    { icon: '💰', label: '저렴한 곳' },
    { icon: '🤫', label: '조용한 곳' },
    { icon: '🏖️', label: '해변 도시' },
    { icon: '⛰️', label: '산악 도시' },
  ]

  const regions = [
    { name: '수도권', count: 8 },
    { name: '영남권', count: 4 },
    { name: '호남권', count: 2 },
    { name: '강원권', count: 3 },
    { name: '제주권', count: 3 },
  ]

  const recentViewed = [
    '서울(강남)',
    '제주',
  ]

  return (
    <aside className="hidden lg:block w-72 space-y-6">
      {/* Popular Ranking */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-500" />
            인기순위
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularCities.map((city) => (
            <button
              key={city.rank}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <span className="text-sm font-bold text-primary">#{city.rank}</span>
              <div className="flex-1">
                <div className="font-medium text-sm">{city.name}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span>{city.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
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
              className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-left text-sm"
            >
              <span>{rec.icon}</span>
              <span>{rec.label}</span>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Regions */}
      <Card>
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
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="flex-1 text-sm">{region.name}</span>
              <Badge variant="secondary" className="text-xs">
                {region.count}
              </Badge>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Recent Viewed */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            최근 본 도시
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {recentViewed.map((city) => (
            <button
              key={city}
              className="w-full text-left p-2 rounded-lg hover:bg-muted transition-colors text-sm"
            >
              • {city}
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Announcements */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Megaphone className="h-4 w-4 text-blue-600" />
            공지사항
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="p-2">
            <div className="font-medium text-blue-900">신규 도시 추가!</div>
            <div className="text-xs text-blue-700">평창, 통영 추가되었습니다</div>
          </div>
          <div className="p-2">
            <div className="font-medium text-blue-900">리뷰 이벤트</div>
            <div className="text-xs text-blue-700">리뷰 작성하고 혜택 받으세요</div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
