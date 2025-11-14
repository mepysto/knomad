'use client'

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react'
import { FilterState, SortOption, City } from '@/lib/types'
import { cities } from '@/data/cities'
import { applyAllFilters, sortCities } from '@/lib/filters'

export interface FilterPreset {
  id: string
  name: string
  filters: FilterState
  isCustom?: boolean
}

interface FilterContextType {
  filters: FilterState
  sortOption: SortOption
  searchQuery: string
  filteredCities: City[]
  totalCities: number
  appliedFilterCount: number
  presets: FilterPreset[]
  setFilters: (filters: FilterState) => void
  setSortOption: (option: SortOption) => void
  setSearchQuery: (query: string) => void
  resetFilters: () => void
  applyPreset: (presetId: string) => void
  saveCustomPreset: (name: string) => void
  deleteCustomPreset: (presetId: string) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

const defaultFilters: FilterState = {
  budget: {
    min: 0,
    max: 5000000,
  },
  regions: [],
  weather: {
    min: -10,
    max: 40,
  },
  transport: {
    subway: false,
    ktx: false,
  },
  environment: undefined,
}

// 기본 프리셋 정의
const defaultPresets: FilterPreset[] = [
  {
    id: 'cheap-cities',
    name: '저렴한 도시',
    filters: {
      budget: { min: 0, max: 2000000 },
      regions: [],
      weather: { min: -10, max: 40 },
      transport: { subway: false, ktx: false },
      environment: undefined,
    },
  },
  {
    id: 'quiet-cities',
    name: '조용한 도시',
    filters: {
      budget: { min: 0, max: 5000000 },
      regions: ['강원권'],
      weather: { min: 0, max: 30 },
      transport: { subway: false, ktx: false },
      environment: undefined,
    },
  },
  {
    id: 'beach-cities',
    name: '해변 도시',
    filters: {
      budget: { min: 0, max: 5000000 },
      regions: ['호남권', '영남권'],
      weather: { min: 10, max: 40 },
      transport: { subway: false, ktx: false },
      environment: undefined,
    },
  },
  {
    id: 'mountain-cities',
    name: '산악 도시',
    filters: {
      budget: { min: 0, max: 5000000 },
      regions: ['강원권'],
      weather: { min: -10, max: 25 },
      transport: { subway: false, ktx: false },
      environment: undefined,
    },
  },
]

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [sortOption, setSortOption] = useState<SortOption>('recommended')
  const [searchQuery, setSearchQuery] = useState('')
  const [customPresets, setCustomPresets] = useState<FilterPreset[]>([])

  const filteredCities = sortCities(
    applyAllFilters(cities, filters, searchQuery),
    sortOption
  )

  // 필터 카운트 계산
  const appliedFilterCount = useMemo(() => {
    let count = 0
    if (filters.budget.min > defaultFilters.budget.min || filters.budget.max < defaultFilters.budget.max) count++
    if (filters.regions.length > 0) count++
    if (
      filters.weather &&
      defaultFilters.weather &&
      (filters.weather.min > defaultFilters.weather.min || filters.weather.max < defaultFilters.weather.max)
    )
      count++
    if (filters.transport.subway || filters.transport.ktx) count++
    if (filters.environment !== undefined) count++
    return count
  }, [filters])

  const resetFilters = () => {
    setFilters(defaultFilters)
    setSortOption('recommended')
    setSearchQuery('')
  }

  const applyPreset = (presetId: string) => {
    const preset = [...defaultPresets, ...customPresets].find((p) => p.id === presetId)
    if (preset) {
      setFilters(preset.filters)
    }
  }

  const saveCustomPreset = (name: string) => {
    const newPreset: FilterPreset = {
      id: `custom-${Date.now()}`,
      name,
      filters: JSON.parse(JSON.stringify(filters)),
      isCustom: true,
    }
    setCustomPresets((prev) => [...prev, newPreset])
  }

  const deleteCustomPreset = (presetId: string) => {
    setCustomPresets((prev) => prev.filter((p) => p.id !== presetId))
  }

  const allPresets = [...defaultPresets, ...customPresets]

  const value: FilterContextType = {
    filters,
    sortOption,
    searchQuery,
    filteredCities,
    totalCities: cities.length,
    appliedFilterCount,
    presets: allPresets,
    setFilters,
    setSortOption,
    setSearchQuery,
    resetFilters,
    applyPreset,
    saveCustomPreset,
    deleteCustomPreset,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}
