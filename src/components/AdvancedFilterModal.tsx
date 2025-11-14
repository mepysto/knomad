'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFilter } from '@/contexts/FilterContext'
import { FilterState } from '@/lib/types'
import { cn } from '@/lib/utils'

interface AdvancedFilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdvancedFilterModal({
  isOpen,
  onClose,
}: AdvancedFilterModalProps) {
  const { filters, setFilters, resetFilters } = useFilter()
  const [tempFilters, setTempFilters] = useState<FilterState>(filters)

  const regions = ['수도권', '영남권', '호남권', '강원권', '제주권']
  const airQualities = ['good', 'moderate', 'bad']
  const airQualityLabels = { good: '좋음', moderate: '보통', bad: '나쁨' }

  const handleBudgetChange = (value: number[]) => {
    setTempFilters({
      ...tempFilters,
      budget: { min: value[0], max: value[1] },
    })
  }

  const handleTemperatureChange = (value: number[]) => {
    setTempFilters({
      ...tempFilters,
      weather: { min: value[0], max: value[1] },
    })
  }

  const handleRegionToggle = (region: string) => {
    const newRegions = tempFilters.regions.includes(region)
      ? tempFilters.regions.filter((r) => r !== region)
      : [...tempFilters.regions, region]
    setTempFilters({ ...tempFilters, regions: newRegions })
  }

  const handleTransportToggle = (type: 'subway' | 'ktx') => {
    setTempFilters({
      ...tempFilters,
      transport: {
        ...tempFilters.transport,
        [type]: !tempFilters.transport[type],
      },
    })
  }

  const handleEnvironmentChange = (value: string) => {
    setTempFilters({
      ...tempFilters,
      environment: value === 'none' ? undefined : value,
    })
  }

  const handleApply = () => {
    setFilters(tempFilters)
    onClose()
  }

  const handleCancel = () => {
    setTempFilters(filters)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle>상세 필터</CardTitle>
          <button
            onClick={handleCancel}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Budget */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">예산</label>
            <div className="space-y-2">
              <Slider
                value={[tempFilters.budget.min, tempFilters.budget.max]}
                onValueChange={handleBudgetChange}
                min={0}
                max={5000000}
                step={100000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₩{tempFilters.budget.min.toLocaleString()}</span>
                <span>₩{tempFilters.budget.max.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Temperature */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">날씨 (온도 범위)</label>
            <div className="space-y-2">
              <Slider
                value={[
                  tempFilters.weather?.min ?? -10,
                  tempFilters.weather?.max ?? 40,
                ]}
                onValueChange={handleTemperatureChange}
                min={-20}
                max={50}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{tempFilters.weather?.min ?? -10}°C</span>
                <span>{tempFilters.weather?.max ?? 40}°C</span>
              </div>
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">지역</label>
            <div className="grid grid-cols-2 gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => handleRegionToggle(region)}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors border',
                    tempFilters.regions.includes(region)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background border-input hover:bg-muted'
                  )}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Transport */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">교통</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleTransportToggle('subway')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors border',
                  tempFilters.transport.subway
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-input hover:bg-muted'
                )}
              >
                지하철 있음
              </button>
              <button
                onClick={() => handleTransportToggle('ktx')}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors border',
                  tempFilters.transport.ktx
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-input hover:bg-muted'
                )}
              >
                KTX 있음
              </button>
            </div>
          </div>

          {/* Air Quality */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">공기질</label>
            <Select
              value={tempFilters.environment || 'none'}
              onValueChange={handleEnvironmentChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">전체</SelectItem>
                {airQualities.map((quality) => (
                  <SelectItem key={quality} value={quality}>
                    {airQualityLabels[quality as keyof typeof airQualityLabels]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => {
                setTempFilters(filters)
                // Reset to default while keeping modal open
              }}
              className="flex-1"
            >
              초기화
            </Button>
            <Button variant="outline" onClick={handleCancel} className="flex-1">
              취소
            </Button>
            <Button onClick={handleApply} className="flex-1">
              적용
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
