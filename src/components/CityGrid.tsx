'use client'

import { useState } from 'react'
import { CityCard } from './CityCard'
import { useFilter } from '@/contexts/FilterContext'
import { Button } from '@/components/ui/button'

export function CityGrid() {
  const { filteredCities } = useFilter()
  const [displayCount, setDisplayCount] = useState(12)

  const displayedCities = filteredCities.slice(0, displayCount)
  const hasMore = displayCount < filteredCities.length

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 12)
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedCities.map((city, index) => (
          <div
            key={city.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CityCard city={city} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="px-8 py-3"
            onClick={handleLoadMore}
          >
            더 보기...
          </Button>
        </div>
      )}

      {/* No Results Message */}
      {filteredCities.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">조건에 맞는 도시가 없습니다.</p>
        </div>
      )}
    </div>
  )
}
