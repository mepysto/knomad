'use client'

import { City } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ComparisonTableProps {
  cities: City[]
}

export function ComparisonTable({ cities }: ComparisonTableProps) {
  if (cities.length === 0) {
    return null
  }

  const metrics = [
    { key: 'ranking', label: '랭킹', format: (v: any) => `#${v}` },
    { key: 'avg_rating', label: '평점', format: (v: any) => `${v}점` },
    {
      key: 'review_count',
      label: '리뷰 수',
      format: (v: any) => `${v}개`,
    },
    {
      key: 'recommend_rate',
      label: '추천도',
      format: (v: any) => `${v}%`,
    },
    {
      key: 'avg_monthly_cost',
      label: '월 생활비',
      format: (v: any) => `₩${(v / 1000000).toFixed(1)}M`,
    },
    {
      key: 'avg_rent',
      label: '월세',
      format: (v: any) => `₩${(v / 1000000).toFixed(1)}M`,
    },
    {
      key: 'avg_internet_speed',
      label: '인터넷 속도',
      format: (v: any) => `${v}Mbps`,
    },
    { key: 'cafe_count', label: '☕ 카페 수', format: (v: any) => `${v}개` },
    {
      key: 'coworking_count',
      label: '💼 코워킹스페이스',
      format: (v: any) => `${v}개`,
    },
    {
      key: 'current_weather',
      label: '날씨',
      format: (v: any) => v || '-',
    },
    {
      key: 'current_temp',
      label: '기온',
      format: (v: any) => `${v}°C`,
    },
    {
      key: 'pm25',
      label: '미세먼지 (PM2.5)',
      format: (v: any) => `${v}㎍/㎥`,
    },
    {
      key: 'air_quality',
      label: '공기질',
      format: (v: any) => {
        const qualityMap: Record<string, string> = {
          good: '좋음',
          moderate: '보통',
          bad: '나쁨',
        }
        return qualityMap[v] || '-'
      },
    },
    {
      key: 'has_subway',
      label: '🚇 지하철',
      format: (v: any) => (v ? '있음' : '없음'),
    },
    {
      key: 'has_ktx',
      label: '🚄 KTX',
      format: (v: any) => (v ? '있음' : '없음'),
    },
  ]

  return (
    <div className="w-full overflow-x-auto border rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted border-b">
            <th className="px-4 py-3 text-left font-semibold sticky left-0 bg-muted w-40 min-w-40">
              항목
            </th>
            {cities.map((city) => (
              <th
                key={city.id}
                className="px-4 py-3 text-left font-semibold min-w-32"
              >
                <div className="font-bold">{city.name_kr}</div>
                <div className="text-xs text-muted-foreground">{city.region}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, idx) => (
            <tr
              key={metric.key}
              className={cn(
                'border-b',
                idx % 2 === 0 ? 'bg-background' : 'bg-muted/30'
              )}
            >
              <td className="px-4 py-3 font-medium sticky left-0 bg-inherit">
                {metric.label}
              </td>
              {cities.map((city) => (
                <td
                  key={`${city.id}-${metric.key}`}
                  className="px-4 py-3 text-center"
                >
                  {metric.format(
                    (city as any)[metric.key as keyof City]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
