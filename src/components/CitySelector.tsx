'use client'

import { Button } from '@/components/ui/button'
import { cities } from '@/data/cities'
import { X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface CitySelectorProps {
  selectedIds: number[]
  onAdd: (cityId: number) => void
  onRemove: (cityId: number) => void
  maxCities?: number
}

export function CitySelector({
  selectedIds,
  onAdd,
  onRemove,
  maxCities = 4,
}: CitySelectorProps) {
  const availableCities = cities.filter((c) => !selectedIds.includes(c.id))
  const selectedCities = cities.filter((c) => selectedIds.includes(c.id))

  const handleAddCity = (cityId: string) => {
    if (selectedIds.length < maxCities) {
      onAdd(parseInt(cityId))
    }
  }

  return (
    <div className="space-y-4">
      {/* Add City Dropdown */}
      {selectedIds.length < maxCities && (
        <div className="flex gap-2">
          <Select onValueChange={handleAddCity}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="도시 추가 (최대 4개)" />
            </SelectTrigger>
            <SelectContent>
              {availableCities.map((city) => (
                <SelectItem key={city.id} value={city.id.toString()}>
                  {city.name_kr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Selected Cities */}
      <div className="flex flex-wrap gap-2">
        {selectedCities.map((city) => (
          <div
            key={city.id}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
          >
            <span>{city.name_kr}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 hover:bg-transparent"
              onClick={() => onRemove(city.id)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        {selectedIds.length} / {maxCities}개 도시 선택됨
      </p>
    </div>
  )
}
