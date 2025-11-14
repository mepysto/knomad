'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { DollarSign, Map, Thermometer, Train, Building2, SlidersHorizontal, Grid3x3, MapPin, BarChart3, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { useFilter } from '@/contexts/FilterContext'
import { SortOption } from '@/lib/types'
import FilterPresetButtons from '@/components/FilterPresetButtons'

const AdvancedFilterModal = dynamic(() => import('@/components/AdvancedFilterModal'), {
  loading: () => <div className="text-sm text-muted-foreground">로딩 중...</div>,
})

export function FilterSortBar() {
  const { filters, setFilters, sortOption, setSortOption, filteredCities, resetFilters, totalCities, appliedFilterCount } = useFilter()
  const [showBudgetFilter, setShowBudgetFilter] = useState(false)
  const [showAdvancedFilterModal, setShowAdvancedFilterModal] = useState(false)
  const [showWeatherFilter, setShowWeatherFilter] = useState(false)
  const [showRegionFilter, setShowRegionFilter] = useState(false)
  const [showTransportFilter, setShowTransportFilter] = useState(false)
  const [showAirQualityFilter, setShowAirQualityFilter] = useState(false)

  const regions = ['수도권', '영남권', '호남권', '강원권', '제주권']
  const airQualities = ['good', 'moderate', 'bad']
  const airQualityLabels = { good: '좋음', moderate: '보통', bad: '나쁨' }

  const handleBudgetChange = (value: number[]) => {
    setFilters({
      ...filters,
      budget: { min: value[0], max: value[1] },
    })
  }

  const handleTemperatureChange = (value: number[]) => {
    setFilters({
      ...filters,
      weather: { min: value[0], max: value[1] },
    })
  }

  const handleRegionToggle = (region: string) => {
    const newRegions = filters.regions.includes(region)
      ? filters.regions.filter((r) => r !== region)
      : [...filters.regions, region]
    setFilters({ ...filters, regions: newRegions })
  }

  const handleTransportChange = (type: 'subway' | 'ktx', checked: boolean) => {
    setFilters({
      ...filters,
      transport: { ...filters.transport, [type]: checked },
    })
  }

  const handleAirQualityChange = (quality: string) => {
    setFilters({
      ...filters,
      environment: filters.environment === quality ? undefined : quality,
    })
  }

  return (
    <div className="border-b bg-background">
      <div className="container px-4 py-4">
        {/* Filter Buttons Row */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-3 gap-2">
          {/* Budget Filter Button */}
          <div className="relative w-full md:w-auto">
            <Button
              variant={filters.budget.min > 0 || filters.budget.max < 5000000 ? 'default' : 'outline'}
              className="gap-2 w-full md:w-auto"
              onClick={() => setShowBudgetFilter(!showBudgetFilter)}
              aria-label="예산 필터"
              aria-expanded={showBudgetFilter}
            >
              <DollarSign className="h-4 w-4" aria-hidden="true" />
              예산
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </Button>
            {showBudgetFilter && (
              <div className="absolute top-full left-0 z-10 mt-2 w-64 rounded-md border bg-background p-4 shadow-md">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ₩{filters.budget.min.toLocaleString()} - ₩{filters.budget.max.toLocaleString()}
                  </label>
                  <Slider
                    min={0}
                    max={5000000}
                    step={100000}
                    value={[filters.budget.min, filters.budget.max]}
                    onValueChange={handleBudgetChange}
                    className="w-full"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => setShowBudgetFilter(false)}
                >
                  완료
                </Button>
              </div>
            )}
          </div>

          {/* Region Filter Button */}
          <div className="relative w-full md:w-auto">
            <Button
              variant={filters.regions.length > 0 ? 'default' : 'outline'}
              className="gap-2 w-full md:w-auto"
              onClick={() => setShowRegionFilter(!showRegionFilter)}
              aria-label="지역 필터"
              aria-expanded={showRegionFilter}
            >
              <Map className="h-4 w-4" aria-hidden="true" />
              지역
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </Button>
            {showRegionFilter && (
              <div className="absolute top-full left-0 z-10 mt-2 w-48 rounded-md border bg-background p-4 shadow-md">
                <div className="space-y-2">
                  {regions.map((region) => (
                    <label key={region} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.regions.includes(region)}
                        onChange={() => handleRegionToggle(region)}
                        className="rounded"
                      />
                      {region}
                    </label>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => setShowRegionFilter(false)}
                >
                  완료
                </Button>
              </div>
            )}
          </div>

          {/* Temperature Filter Button */}
          <div className="relative w-full md:w-auto">
            <Button
              variant={
                filters.weather && (filters.weather.min > -10 || filters.weather.max < 40)
                  ? 'default'
                  : 'outline'
              }
              className="gap-2 w-full md:w-auto"
              onClick={() => setShowWeatherFilter(!showWeatherFilter)}
              aria-label="날씨 필터"
              aria-expanded={showWeatherFilter}
            >
              <Thermometer className="h-4 w-4" aria-hidden="true" />
              날씨
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </Button>
            {showWeatherFilter && (
              <div className="absolute top-full left-0 z-10 mt-2 w-64 rounded-md border bg-background p-4 shadow-md">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {filters.weather?.min}°C - {filters.weather?.max}°C
                  </label>
                  <Slider
                    min={-10}
                    max={40}
                    step={1}
                    value={[filters.weather?.min || -10, filters.weather?.max || 40]}
                    onValueChange={handleTemperatureChange}
                    className="w-full"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => setShowWeatherFilter(false)}
                >
                  완료
                </Button>
              </div>
            )}
          </div>

          {/* Transport Filter Button */}
          <div className="relative w-full md:w-auto">
            <Button
              variant={filters.transport.subway || filters.transport.ktx ? 'default' : 'outline'}
              className="gap-2 w-full md:w-auto"
              onClick={() => setShowTransportFilter(!showTransportFilter)}
              aria-label="교통 필터"
              aria-expanded={showTransportFilter}
            >
              <Train className="h-4 w-4" aria-hidden="true" />
              교통
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </Button>
            {showTransportFilter && (
              <div className="absolute top-full left-0 z-10 mt-2 w-48 rounded-md border bg-background p-4 shadow-md">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.transport.subway}
                      onChange={(e) => handleTransportChange('subway', e.target.checked)}
                      className="rounded"
                    />
                    지하철
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.transport.ktx}
                      onChange={(e) => handleTransportChange('ktx', e.target.checked)}
                      className="rounded"
                    />
                    KTX
                  </label>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => setShowTransportFilter(false)}
                >
                  완료
                </Button>
              </div>
            )}
          </div>

          {/* Air Quality Filter Button */}
          <div className="relative w-full md:w-auto">
            <Button
              variant={filters.environment ? 'default' : 'outline'}
              className="gap-2 w-full md:w-auto"
              onClick={() => setShowAirQualityFilter(!showAirQualityFilter)}
              aria-label="환경 필터"
              aria-expanded={showAirQualityFilter}
            >
              <Building2 className="h-4 w-4" aria-hidden="true" />
              환경
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </Button>
            {showAirQualityFilter && (
              <div className="absolute top-full left-0 z-10 mt-2 w-48 rounded-md border bg-background p-4 shadow-md">
                <div className="space-y-2">
                  {airQualities.map((quality) => (
                    <button
                      key={quality}
                      onClick={() => handleAirQualityChange(quality)}
                      className={`w-full px-3 py-2 rounded text-sm text-left ${
                        filters.environment === quality
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {airQualityLabels[quality as keyof typeof airQualityLabels]}
                    </button>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => setShowAirQualityFilter(false)}
                >
                  완료
                </Button>
              </div>
            )}
          </div>

          {/* Spacer */}
          <div className="hidden md:flex md:flex-1" />

          {/* Sort Select */}
          <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">추천순</SelectItem>
              <SelectItem value="price-low">가격 낮은순</SelectItem>
              <SelectItem value="price-high">가격 높은순</SelectItem>
              <SelectItem value="internet-fast">인터넷 빠른순</SelectItem>
              <SelectItem value="air-quality">공기질 좋은순</SelectItem>
              <SelectItem value="popular">인기순</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filters & View Options */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant={appliedFilterCount > 0 ? 'default' : 'outline'}
              size="sm"
              className="gap-2"
              onClick={() => setShowAdvancedFilterModal(true)}
              aria-label="상세 필터 열기"
            >
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              상세필터
              {appliedFilterCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {appliedFilterCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="sm" onClick={resetFilters} aria-label="모든 필터 초기화">
              필터 초기화
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="그리드 보기">
              <Grid3x3 className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="지도 보기">
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="통계 보기">
              <BarChart3 className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Filter Presets */}
        <div className="mt-3 border-t pt-3">
          <div className="text-xs font-semibold text-muted-foreground mb-2">추천 필터</div>
          <FilterPresetButtons />
        </div>

        {/* Status Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            ✓ 총 <span className="font-semibold text-foreground">{filteredCities.length}개 도시</span> 표시 중
            {appliedFilterCount > 0 && (
              <span className="text-xs">
                (원래 {totalCities}개 중)
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Advanced Filter Modal */}
      <AdvancedFilterModal
        isOpen={showAdvancedFilterModal}
        onClose={() => setShowAdvancedFilterModal(false)}
      />
    </div>
  )
}
