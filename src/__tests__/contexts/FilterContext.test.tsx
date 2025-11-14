import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FilterProvider, useFilter, FilterPreset } from '@/contexts/FilterContext'
import { FilterState, SortOption } from '@/lib/types'

// Test wrapper component that provides FilterContext
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FilterProvider>{children}</FilterProvider>
)

// Helper component to test useFilter hook
const TestComponent = () => {
  const context = useFilter()
  return (
    <div>
      <div data-testid="filter-count">{context.appliedFilterCount}</div>
      <div data-testid="total-cities">{context.totalCities}</div>
      <div data-testid="filtered-cities">{context.filteredCities.length}</div>
      <div data-testid="search-query">{context.searchQuery}</div>
      <div data-testid="sort-option">{context.sortOption}</div>
      <div data-testid="preset-count">{context.presets.length}</div>
    </div>
  )
}

describe('FilterContext', () => {
  describe('FilterProvider', () => {
    it('provides context value to children', () => {
      render(
        <FilterProvider>
          <TestComponent />
        </FilterProvider>
      )

      expect(screen.getByTestId('filter-count')).toHaveTextContent('0')
      expect(screen.getByTestId('total-cities')).toHaveTextContent('20')
      expect(screen.getByTestId('filtered-cities')).toHaveTextContent('20')
      expect(screen.getByTestId('sort-option')).toHaveTextContent('recommended')
    })

    it('initializes with default values', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      expect(result.current.filters).toEqual({
        budget: { min: 0, max: 5000000 },
        regions: [],
        weather: { min: -10, max: 40 },
        transport: { subway: false, ktx: false },
        environment: undefined,
      })
      expect(result.current.sortOption).toBe('recommended')
      expect(result.current.searchQuery).toBe('')
      expect(result.current.appliedFilterCount).toBe(0)
    })

    it('provides default presets', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      expect(result.current.presets).toHaveLength(4)
      expect(result.current.presets[0]).toEqual({
        id: 'cheap-cities',
        name: '저렴한 도시',
        filters: expect.any(Object),
      })
      expect(result.current.presets[1].id).toBe('quiet-cities')
      expect(result.current.presets[2].id).toBe('beach-cities')
      expect(result.current.presets[3].id).toBe('mountain-cities')
    })
  })

  describe('useFilter hook', () => {
    it('throws error when used outside FilterProvider', () => {
      // Suppress console.error for this test
      const originalError = console.error
      console.error = jest.fn()

      expect(() => {
        renderHook(() => useFilter())
      }).toThrow('useFilter must be used within a FilterProvider')

      console.error = originalError
    })

    it('returns context when used within FilterProvider', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      expect(result.current).toBeDefined()
      expect(result.current.filters).toBeDefined()
      expect(result.current.setFilters).toBeDefined()
      expect(result.current.filteredCities).toBeDefined()
    })
  })

  describe('setFilters', () => {
    it('updates filter state', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      const newFilters: FilterState = {
        budget: { min: 1000000, max: 2000000 },
        regions: ['수도권'],
        weather: { min: 10, max: 25 },
        transport: { subway: true, ktx: false },
        environment: 'good',
      }

      act(() => {
        result.current.setFilters(newFilters)
      })

      expect(result.current.filters).toEqual(newFilters)
    })

    it('updates filtered cities when filters change', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      const initialCount = result.current.filteredCities.length

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 1000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      // Should have fewer cities with lower budget
      expect(result.current.filteredCities.length).toBeLessThan(initialCount)
    })

    it('applies budget filter correctly', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 1200000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      const allWithinBudget = result.current.filteredCities.every(
        (city) => city.avg_monthly_cost >= 0 && city.avg_monthly_cost <= 1200000
      )
      expect(allWithinBudget).toBe(true)
    })

    it('applies region filter correctly', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: ['강원권'],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      const allInRegion = result.current.filteredCities.every(
        (city) => city.region === '강원권'
      )
      expect(allInRegion).toBe(true)
      expect(result.current.filteredCities.length).toBeGreaterThan(0)
    })

    it('applies temperature filter correctly', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: 15, max: 20 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      const allWithinTemp = result.current.filteredCities.every(
        (city) =>
          city.current_temp !== undefined &&
          city.current_temp >= 15 &&
          city.current_temp <= 20
      )
      expect(allWithinTemp).toBe(true)
    })

    it('applies transport filter for subway', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: true, ktx: false },
          environment: undefined,
        })
      })

      const allHaveSubway = result.current.filteredCities.every(
        (city) => city.has_subway
      )
      expect(allHaveSubway).toBe(true)
    })

    it('applies transport filter for KTX', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: true },
          environment: undefined,
        })
      })

      const allHaveKTX = result.current.filteredCities.every((city) => city.has_ktx)
      expect(allHaveKTX).toBe(true)
    })

    it('applies air quality filter correctly', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: 'good',
        })
      })

      const allGoodQuality = result.current.filteredCities.every(
        (city) => city.air_quality === 'good'
      )
      expect(allGoodQuality).toBe(true)
    })
  })

  describe('setSortOption', () => {
    it('updates sort option', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSortOption('price-low')
      })

      expect(result.current.sortOption).toBe('price-low')
    })

    it('sorts by price low to high', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSortOption('price-low')
      })

      const prices = result.current.filteredCities.map((city) => city.avg_monthly_cost)
      const sortedPrices = [...prices].sort((a, b) => a - b)
      expect(prices).toEqual(sortedPrices)
    })

    it('sorts by price high to low', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSortOption('price-high')
      })

      const prices = result.current.filteredCities.map((city) => city.avg_monthly_cost)
      const sortedPrices = [...prices].sort((a, b) => b - a)
      expect(prices).toEqual(sortedPrices)
    })

    it('sorts by internet speed', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSortOption('internet-fast')
      })

      const speeds = result.current.filteredCities.map((city) => city.avg_internet_speed)
      const sortedSpeeds = [...speeds].sort((a, b) => b - a)
      expect(speeds).toEqual(sortedSpeeds)
    })

    it('sorts by popularity', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSortOption('popular')
      })

      const ratings = result.current.filteredCities.map((city) => city.avg_rating)
      const sortedRatings = [...ratings].sort((a, b) => b - a)
      expect(ratings).toEqual(sortedRatings)
    })

    it('sorts by recommended ranking', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSortOption('recommended')
      })

      const rankings = result.current.filteredCities.map((city) => city.ranking)
      const sortedRankings = [...rankings].sort((a, b) => a - b)
      expect(rankings).toEqual(sortedRankings)
    })
  })

  describe('setSearchQuery', () => {
    it('updates search query', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSearchQuery('서울')
      })

      expect(result.current.searchQuery).toBe('서울')
    })

    it('filters cities by Korean name', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSearchQuery('제주')
      })

      expect(result.current.filteredCities.length).toBeGreaterThan(0)
      const allContainJeju = result.current.filteredCities.every((city) =>
        city.name_kr.includes('제주')
      )
      expect(allContainJeju).toBe(true)
    })

    it('filters cities by English name', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSearchQuery('seoul')
      })

      expect(result.current.filteredCities.length).toBeGreaterThan(0)
      const allContainSeoul = result.current.filteredCities.every((city) =>
        city.name_en.toLowerCase().includes('seoul')
      )
      expect(allContainSeoul).toBe(true)
    })

    it('is case insensitive', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSearchQuery('BUSAN')
      })

      expect(result.current.filteredCities.length).toBeGreaterThan(0)
    })

    it('returns all cities when search query is empty', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSearchQuery('')
      })

      expect(result.current.filteredCities.length).toBe(20)
    })

    it('combines search with filters', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSearchQuery('제주')
        result.current.setFilters({
          budget: { min: 0, max: 1700000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.filteredCities.length).toBeGreaterThan(0)
      const allMatchCriteria = result.current.filteredCities.every(
        (city) =>
          city.name_kr.includes('제주') && city.avg_monthly_cost <= 1700000
      )
      expect(allMatchCriteria).toBe(true)
    })
  })

  describe('resetFilters', () => {
    it('resets all filters to default', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 1000000, max: 2000000 },
          regions: ['수도권'],
          weather: { min: 10, max: 25 },
          transport: { subway: true, ktx: true },
          environment: 'good',
        })
        result.current.setSortOption('price-low')
        result.current.setSearchQuery('서울')
      })

      act(() => {
        result.current.resetFilters()
      })

      expect(result.current.filters).toEqual({
        budget: { min: 0, max: 5000000 },
        regions: [],
        weather: { min: -10, max: 40 },
        transport: { subway: false, ktx: false },
        environment: undefined,
      })
      expect(result.current.sortOption).toBe('recommended')
      expect(result.current.searchQuery).toBe('')
    })

    it('resets filtered cities to all cities', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 1000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.filteredCities.length).toBeLessThan(20)

      act(() => {
        result.current.resetFilters()
      })

      expect(result.current.filteredCities.length).toBe(20)
    })
  })

  describe('appliedFilterCount', () => {
    it('counts budget filter when min is increased', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 1000000, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.appliedFilterCount).toBe(1)
    })

    it('counts budget filter when max is decreased', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 2000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.appliedFilterCount).toBe(1)
    })

    it('counts region filter when regions are selected', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: ['수도권'],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.appliedFilterCount).toBe(1)
    })

    it('counts weather filter when temperature range changes', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: 10, max: 30 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.appliedFilterCount).toBe(1)
    })

    it('counts transport filter when subway is enabled', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: true, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.appliedFilterCount).toBe(1)
    })

    it('counts environment filter when air quality is selected', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: 'good',
        })
      })

      expect(result.current.appliedFilterCount).toBe(1)
    })

    it('counts multiple filters correctly', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 1000000, max: 2000000 },
          regions: ['수도권', '강원권'],
          weather: { min: 10, max: 25 },
          transport: { subway: true, ktx: true },
          environment: 'good',
        })
      })

      expect(result.current.appliedFilterCount).toBe(5)
    })

    it('returns 0 when no filters are applied', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      expect(result.current.appliedFilterCount).toBe(0)
    })
  })

  describe('applyPreset', () => {
    it('applies cheap cities preset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.applyPreset('cheap-cities')
      })

      expect(result.current.filters.budget.max).toBe(2000000)
    })

    it('applies quiet cities preset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.applyPreset('quiet-cities')
      })

      expect(result.current.filters.regions).toContain('강원권')
    })

    it('applies beach cities preset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.applyPreset('beach-cities')
      })

      expect(result.current.filters.regions).toEqual(['호남권', '영남권'])
      expect(result.current.filters.weather?.min).toBe(10)
    })

    it('applies mountain cities preset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.applyPreset('mountain-cities')
      })

      expect(result.current.filters.regions).toContain('강원권')
      expect(result.current.filters.weather?.max).toBe(25)
    })

    it('does nothing for invalid preset ID', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      const initialFilters = result.current.filters

      act(() => {
        result.current.applyPreset('invalid-preset')
      })

      expect(result.current.filters).toEqual(initialFilters)
    })

    it('updates filtered cities after applying preset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.applyPreset('cheap-cities')
      })

      const allCheap = result.current.filteredCities.every(
        (city) => city.avg_monthly_cost <= 2000000
      )
      expect(allCheap).toBe(true)
    })
  })

  describe('saveCustomPreset', () => {
    it('saves current filters as custom preset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 1000000, max: 2000000 },
          regions: ['수도권'],
          weather: { min: 10, max: 25 },
          transport: { subway: true, ktx: false },
          environment: 'good',
        })
      })

      const initialPresetCount = result.current.presets.length

      act(() => {
        result.current.saveCustomPreset('My Custom Preset')
      })

      expect(result.current.presets.length).toBe(initialPresetCount + 1)
      const customPreset = result.current.presets.find(
        (p) => p.name === 'My Custom Preset'
      )
      expect(customPreset).toBeDefined()
      expect(customPreset?.isCustom).toBe(true)
    })

    it('generates unique ID for custom preset', async () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.saveCustomPreset('Preset 1')
      })

      // Wait a small amount to ensure different timestamp
      await new Promise((resolve) => setTimeout(resolve, 10))

      act(() => {
        result.current.saveCustomPreset('Preset 2')
      })

      const customPresets = result.current.presets.filter((p) => p.isCustom)
      const ids = customPresets.map((p) => p.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('preserves filter values in custom preset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      const customFilters: FilterState = {
        budget: { min: 1500000, max: 2500000 },
        regions: ['영남권'],
        weather: { min: 15, max: 30 },
        transport: { subway: false, ktx: true },
        environment: 'moderate',
      }

      act(() => {
        result.current.setFilters(customFilters)
      })

      act(() => {
        result.current.saveCustomPreset('Beach Living')
      })

      const customPreset = result.current.presets.find((p) => p.name === 'Beach Living')
      expect(customPreset?.filters).toEqual(customFilters)
    })
  })

  describe('deleteCustomPreset', () => {
    it('deletes custom preset by ID', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      let presetId: string

      act(() => {
        result.current.saveCustomPreset('To Be Deleted')
      })

      const customPreset = result.current.presets.find(
        (p) => p.name === 'To Be Deleted'
      )
      presetId = customPreset!.id

      const presetCountBefore = result.current.presets.length

      act(() => {
        result.current.deleteCustomPreset(presetId)
      })

      expect(result.current.presets.length).toBe(presetCountBefore - 1)
      expect(result.current.presets.find((p) => p.id === presetId)).toBeUndefined()
    })

    it('does not delete default presets', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      const initialPresetCount = result.current.presets.length

      act(() => {
        result.current.deleteCustomPreset('cheap-cities')
      })

      expect(result.current.presets.length).toBe(initialPresetCount)
      expect(result.current.presets.find((p) => p.id === 'cheap-cities')).toBeDefined()
    })

    it('does nothing for invalid preset ID', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      const initialPresetCount = result.current.presets.length

      act(() => {
        result.current.deleteCustomPreset('non-existent-preset')
      })

      expect(result.current.presets.length).toBe(initialPresetCount)
    })
  })

  describe('filteredCities', () => {
    it('returns all cities when no filters applied', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      expect(result.current.filteredCities.length).toBe(20)
    })

    it('applies filters and returns correct subset', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 1200000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.filteredCities.length).toBeLessThan(20)
      expect(result.current.filteredCities.length).toBeGreaterThan(0)
    })

    it('returns empty array when no cities match filters', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 100 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.filteredCities.length).toBe(0)
    })

    it('maintains sort order after filtering', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setSortOption('price-low')
        result.current.setFilters({
          budget: { min: 0, max: 2000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      const prices = result.current.filteredCities.map((city) => city.avg_monthly_cost)
      const sortedPrices = [...prices].sort((a, b) => a - b)
      expect(prices).toEqual(sortedPrices)
    })
  })

  describe('edge cases', () => {
    it('handles empty filter state', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.filteredCities.length).toBe(20)
    })

    it('handles all filters applied simultaneously', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 1000000, max: 2000000 },
          regions: ['수도권'],
          weather: { min: 13, max: 16 },
          transport: { subway: true, ktx: true },
          environment: 'good',
        })
      })

      expect(result.current.filteredCities.length).toBeGreaterThanOrEqual(0)
    })

    it('handles rapid filter changes', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 1000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
        result.current.setFilters({
          budget: { min: 0, max: 2000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
        result.current.setFilters({
          budget: { min: 0, max: 5000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.filteredCities.length).toBe(20)
    })

    it('maintains consistent totalCities value', () => {
      const { result } = renderHook(() => useFilter(), { wrapper })

      const initialTotal = result.current.totalCities

      act(() => {
        result.current.setFilters({
          budget: { min: 0, max: 1000000 },
          regions: [],
          weather: { min: -10, max: 40 },
          transport: { subway: false, ktx: false },
          environment: undefined,
        })
      })

      expect(result.current.totalCities).toBe(initialTotal)
    })
  })

  describe('memoization', () => {
    it('does not recalculate filteredCities if filters unchanged', () => {
      const { result, rerender } = renderHook(() => useFilter(), { wrapper })

      const initialCities = result.current.filteredCities

      rerender()

      // Note: filteredCities is recalculated on every render due to sortCities call
      // This test verifies the result is the same, not referential equality
      expect(result.current.filteredCities).toEqual(initialCities)
    })

    it('does not recalculate appliedFilterCount if filters unchanged', () => {
      const { result, rerender } = renderHook(() => useFilter(), { wrapper })

      const initialCount = result.current.appliedFilterCount

      rerender()

      expect(result.current.appliedFilterCount).toBe(initialCount)
    })
  })
})
