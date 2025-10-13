'use client'

import { DollarSign, Map, Thermometer, Train, Building2, SlidersHorizontal, Grid3x3, MapPin, BarChart3, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

export function FilterSortBar() {
  return (
    <div className="border-b bg-background">
      <div className="container px-4 py-4">
        {/* Filter Buttons Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter Buttons */}
          <Button variant="outline" className="gap-2">
            <DollarSign className="h-4 w-4" />
            예산
            <ChevronDown className="h-3 w-3" />
          </Button>

          <Button variant="outline" className="gap-2">
            <Map className="h-4 w-4" />
            지역
            <ChevronDown className="h-3 w-3" />
          </Button>

          <Button variant="outline" className="gap-2">
            <Thermometer className="h-4 w-4" />
            날씨
            <ChevronDown className="h-3 w-3" />
          </Button>

          <Button variant="outline" className="gap-2">
            <Train className="h-4 w-4" />
            교통
            <ChevronDown className="h-3 w-3" />
          </Button>

          <Button variant="outline" className="gap-2">
            <Building2 className="h-4 w-4" />
            환경
            <ChevronDown className="h-3 w-3" />
          </Button>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Sort Select */}
          <Select defaultValue="recommended">
            <SelectTrigger className="w-[180px]">
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
            <Button variant="ghost" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              상세필터
            </Button>
            <Button variant="ghost" size="sm">
              필터 초기화
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MapPin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <BarChart3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            ✓ 총 <span className="font-semibold text-foreground">20개 도시</span> 표시 중
          </span>
          <span className="text-xs">• 최신 업데이트: 2분 전</span>
        </div>
      </div>
    </div>
  )
}
