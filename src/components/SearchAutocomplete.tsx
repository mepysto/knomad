'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { cities } from '@/data/cities'
import { useFilter } from '@/contexts/FilterContext'
import { cn } from '@/lib/utils'

export default function SearchAutocomplete() {
  const { searchQuery, setSearchQuery } = useFilter()
  const [isOpen, setIsOpen] = useState(false)

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    return cities
      .filter((city) =>
        city.name_kr.toLowerCase().includes(query) ||
        city.name_en.toLowerCase().includes(query)
      )
      .slice(0, 8) // 최대 8개 제안
  }, [searchQuery])

  const handleSelectCity = (cityName: string) => {
    setSearchQuery(cityName)
    setIsOpen(false)
  }

  const handleInputChange = (value: string) => {
    setSearchQuery(value)
    setIsOpen(value.length > 0)
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="도시명으로 검색..."
          value={searchQuery}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsOpen(searchQuery.length > 0)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className={cn(
            'w-full pl-10 pr-3 py-2 text-sm border border-input rounded-md bg-background',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          )}
        />
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-input rounded-md shadow-lg">
          {suggestions.map((city) => (
            <button
              key={city.id}
              onClick={() => handleSelectCity(city.name_kr)}
              className={cn(
                'w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors',
                'border-b last:border-b-0'
              )}
            >
              <div className="font-medium">{city.name_kr}</div>
              <div className="text-xs text-muted-foreground">{city.region}</div>
            </button>
          ))}
        </div>
      )}

      {isOpen && searchQuery.length > 0 && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-input rounded-md shadow-lg p-3 text-sm text-muted-foreground">
          검색 결과가 없습니다
        </div>
      )}
    </div>
  )
}
