'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CitySelector } from '@/components/CitySelector'
import { ComparisonTable } from '@/components/ComparisonTable'
import { cities } from '@/data/cities'

export default function ComparePage() {
  const [selectedCityIds, setSelectedCityIds] = useState<number[]>([])

  const selectedCities = cities.filter((c) =>
    selectedCityIds.includes(c.id)
  )

  const handleAddCity = (cityId: number) => {
    if (selectedCityIds.length < 4) {
      setSelectedCityIds([...selectedCityIds, cityId])
    }
  }

  const handleRemoveCity = (cityId: number) => {
    setSelectedCityIds(selectedCityIds.filter((id) => id !== cityId))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              뒤로가기
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">🔍 도시 비교</h1>
          <p className="text-muted-foreground mt-2">
            최대 4개 도시를 비교하여 살펴보세요.
          </p>
        </div>

        {/* City Selector */}
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">비교할 도시 선택</h2>
          <CitySelector
            selectedIds={selectedCityIds}
            onAdd={handleAddCity}
            onRemove={handleRemoveCity}
            maxCities={4}
          />
        </div>

        {/* Comparison Table */}
        {selectedCities.length > 0 ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">비교 결과</h2>
            <ComparisonTable cities={selectedCities} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-2xl font-semibold mb-2">도시를 선택해주세요</h2>
            <p className="text-muted-foreground">
              위의 드롭다운에서 비교할 도시를 선택하면 비교 테이블이 표시됩니다.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
