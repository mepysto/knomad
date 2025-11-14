import {
  filterByCost,
  filterByRegions,
  filterByTemperature,
  filterByTransport,
  filterByAirQuality,
  searchCities,
  applyAllFilters,
  sortCities,
} from '@/lib/filters'
import { City, FilterState, SortOption } from '@/lib/types'

// Mock city data with diverse characteristics for comprehensive testing
const mockCities: City[] = [
  {
    id: 1,
    name_kr: '서울',
    name_en: 'Seoul',
    slug: 'seoul',
    region: 'capital',
    image_url: '/seoul.jpg',
    ranking: 1,
    avg_rating: 4.5,
    review_count: 100,
    recommend_rate: 85,
    avg_monthly_cost: 2000000,
    avg_rent: 800000,
    avg_internet_speed: 100,
    has_subway: true,
    has_ktx: true,
    cafe_count: 500,
    coworking_count: 50,
    current_temp: 15,
    current_weather: 'clear',
    pm25: 25,
    air_quality: 'good',
    tags: ['tech', 'startup'],
    is_english_friendly: true,
  },
  {
    id: 2,
    name_kr: '부산',
    name_en: 'Busan',
    slug: 'busan',
    region: 'south',
    image_url: '/busan.jpg',
    ranking: 2,
    avg_rating: 4.3,
    review_count: 80,
    recommend_rate: 80,
    avg_monthly_cost: 1500000,
    avg_rent: 600000,
    avg_internet_speed: 90,
    has_subway: true,
    has_ktx: true,
    cafe_count: 300,
    coworking_count: 30,
    current_temp: 18,
    current_weather: 'cloudy',
    pm25: 35,
    air_quality: 'moderate',
    tags: ['beach', 'relax'],
    is_english_friendly: false,
  },
  {
    id: 3,
    name_kr: '제주',
    name_en: 'Jeju',
    slug: 'jeju',
    region: 'island',
    image_url: '/jeju.jpg',
    ranking: 3,
    avg_rating: 4.8,
    review_count: 120,
    recommend_rate: 90,
    avg_monthly_cost: 1800000,
    avg_rent: 700000,
    avg_internet_speed: 80,
    has_subway: false,
    has_ktx: false,
    cafe_count: 200,
    coworking_count: 20,
    current_temp: 20,
    current_weather: 'sunny',
    pm25: 15,
    air_quality: 'good',
    tags: ['nature', 'beach'],
    is_english_friendly: true,
  },
  {
    id: 4,
    name_kr: '대전',
    name_en: 'Daejeon',
    slug: 'daejeon',
    region: 'central',
    image_url: '/daejeon.jpg',
    ranking: 4,
    avg_rating: 4.0,
    review_count: 60,
    recommend_rate: 75,
    avg_monthly_cost: 1300000,
    avg_rent: 500000,
    avg_internet_speed: 95,
    has_subway: true,
    has_ktx: true,
    cafe_count: 150,
    coworking_count: 15,
    current_temp: 12,
    current_weather: 'rain',
    pm25: 45,
    air_quality: 'bad',
    tags: ['education', 'tech'],
    is_english_friendly: false,
  },
  {
    id: 5,
    name_kr: '강릉',
    name_en: 'Gangneung',
    slug: 'gangneung',
    region: 'east',
    image_url: '/gangneung.jpg',
    ranking: 5,
    avg_rating: 4.2,
    review_count: 50,
    recommend_rate: 78,
    avg_monthly_cost: 1200000,
    avg_rent: 450000,
    avg_internet_speed: 85,
    has_subway: false,
    has_ktx: true,
    cafe_count: 100,
    coworking_count: 10,
    current_temp: 10,
    current_weather: 'snow',
    pm25: 20,
    air_quality: 'good',
    tags: ['nature', 'coffee'],
    is_english_friendly: false,
  },
  {
    id: 6,
    name_kr: '전주',
    name_en: 'Jeonju',
    slug: 'jeonju',
    region: 'south',
    image_url: '/jeonju.jpg',
    ranking: 6,
    avg_rating: 4.1,
    review_count: 45,
    recommend_rate: 76,
    avg_monthly_cost: 1100000,
    avg_rent: 400000,
    avg_internet_speed: 75,
    has_subway: false,
    has_ktx: true,
    cafe_count: 80,
    coworking_count: 8,
    current_temp: undefined, // Missing temperature
    current_weather: undefined,
    pm25: undefined,
    air_quality: undefined, // Missing air quality
    tags: ['food', 'culture'],
    is_english_friendly: false,
  },
]

describe('filterByCost', () => {
  it('should filter cities within budget range', () => {
    const result = filterByCost(mockCities, 1000000, 1500000)
    expect(result).toHaveLength(4)
    expect(result.map((c) => c.name_en)).toEqual([
      'Busan',
      'Daejeon',
      'Gangneung',
      'Jeonju',
    ])
  })

  it('should include cities at exact min and max boundaries', () => {
    const result = filterByCost(mockCities, 1200000, 1500000)
    expect(result).toHaveLength(3)
    expect(result.some((c) => c.avg_monthly_cost === 1200000)).toBe(true)
    expect(result.some((c) => c.avg_monthly_cost === 1500000)).toBe(true)
  })

  it('should return empty array when no cities match budget', () => {
    const result = filterByCost(mockCities, 3000000, 5000000)
    expect(result).toHaveLength(0)
  })

  it('should handle zero budget range', () => {
    const result = filterByCost(mockCities, 0, 0)
    expect(result).toHaveLength(0)
  })

  it('should handle negative budget values', () => {
    const result = filterByCost(mockCities, -1000000, 1000000)
    expect(result).toHaveLength(0)
  })

  it('should return all cities when range covers all costs', () => {
    const result = filterByCost(mockCities, 0, 10000000)
    expect(result).toHaveLength(mockCities.length)
  })

  it('should handle empty cities array', () => {
    const result = filterByCost([], 1000000, 2000000)
    expect(result).toHaveLength(0)
  })
})

describe('filterByRegions', () => {
  it('should filter cities by single region', () => {
    const result = filterByRegions(mockCities, ['capital'])
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Seoul')
  })

  it('should filter cities by multiple regions', () => {
    const result = filterByRegions(mockCities, ['capital', 'south'])
    expect(result).toHaveLength(3)
    expect(result.map((c) => c.name_en)).toContain('Seoul')
    expect(result.map((c) => c.name_en)).toContain('Busan')
    expect(result.map((c) => c.name_en)).toContain('Jeonju')
  })

  it('should return all cities when regions array is empty', () => {
    const result = filterByRegions(mockCities, [])
    expect(result).toHaveLength(mockCities.length)
  })

  it('should return empty array when no cities match region', () => {
    const result = filterByRegions(mockCities, ['nonexistent'])
    expect(result).toHaveLength(0)
  })

  it('should handle empty cities array', () => {
    const result = filterByRegions([], ['capital'])
    expect(result).toHaveLength(0)
  })

  it('should be case-sensitive for region matching', () => {
    const result = filterByRegions(mockCities, ['CAPITAL'])
    expect(result).toHaveLength(0)
  })
})

describe('filterByTemperature', () => {
  it('should filter cities within temperature range', () => {
    const result = filterByTemperature(mockCities, 10, 18)
    expect(result).toHaveLength(4)
    expect(result.every((c) => c.current_temp! >= 10 && c.current_temp! <= 18)).toBe(
      true
    )
  })

  it('should include cities at exact min and max boundaries', () => {
    const result = filterByTemperature(mockCities, 10, 20)
    expect(result.some((c) => c.current_temp === 10)).toBe(true)
    expect(result.some((c) => c.current_temp === 20)).toBe(true)
  })

  it('should exclude cities with undefined temperature', () => {
    const result = filterByTemperature(mockCities, -10, 50)
    expect(result.every((c) => c.current_temp !== undefined)).toBe(true)
    expect(result.some((c) => c.name_en === 'Jeonju')).toBe(false)
  })

  it('should handle negative temperature range', () => {
    const result = filterByTemperature(mockCities, -10, 5)
    expect(result).toHaveLength(0)
  })

  it('should handle very wide temperature range', () => {
    const result = filterByTemperature(mockCities, -50, 50)
    expect(result).toHaveLength(5) // All except Jeonju (undefined temp)
  })

  it('should handle empty cities array', () => {
    const result = filterByTemperature([], 10, 20)
    expect(result).toHaveLength(0)
  })

  it('should return empty array when min > max', () => {
    const result = filterByTemperature(mockCities, 30, 10)
    expect(result).toHaveLength(0)
  })
})

describe('filterByTransport', () => {
  it('should filter cities with subway when only subway is true', () => {
    const result = filterByTransport(mockCities, true, false)
    expect(result).toHaveLength(3)
    expect(result.every((c) => c.has_subway)).toBe(true)
  })

  it('should filter cities with KTX when only ktx is true', () => {
    const result = filterByTransport(mockCities, false, true)
    expect(result).toHaveLength(5)
    expect(result.every((c) => c.has_ktx)).toBe(true)
  })

  it('should filter cities with subway OR ktx when both are true', () => {
    const result = filterByTransport(mockCities, true, true)
    expect(result).toHaveLength(5)
    expect(result.every((c) => c.has_subway || c.has_ktx)).toBe(true)
  })

  it('should return all cities when both are false', () => {
    const result = filterByTransport(mockCities, false, false)
    expect(result).toHaveLength(mockCities.length)
  })

  it('should handle empty cities array', () => {
    const result = filterByTransport([], true, true)
    expect(result).toHaveLength(0)
  })

  it('should correctly identify cities with only subway', () => {
    const subwayOnly = filterByTransport(mockCities, true, false)
    expect(subwayOnly.every((c) => c.has_subway)).toBe(true)
  })

  it('should correctly identify cities with only KTX', () => {
    const ktxOnly = filterByTransport(mockCities, false, true)
    expect(ktxOnly.every((c) => c.has_ktx)).toBe(true)
  })
})

describe('filterByAirQuality', () => {
  it('should filter cities by good air quality', () => {
    const result = filterByAirQuality(mockCities, 'good')
    expect(result).toHaveLength(3)
    expect(result.every((c) => c.air_quality === 'good')).toBe(true)
  })

  it('should filter cities by moderate air quality', () => {
    const result = filterByAirQuality(mockCities, 'moderate')
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Busan')
  })

  it('should filter cities by bad air quality', () => {
    const result = filterByAirQuality(mockCities, 'bad')
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Daejeon')
  })

  it('should return all cities when quality is undefined', () => {
    const result = filterByAirQuality(mockCities, undefined)
    expect(result).toHaveLength(mockCities.length)
  })

  it('should return all cities when quality is empty string', () => {
    const result = filterByAirQuality(mockCities, '')
    expect(result).toHaveLength(mockCities.length)
  })

  it('should handle empty cities array', () => {
    const result = filterByAirQuality([], 'good')
    expect(result).toHaveLength(0)
  })

  it('should return empty array for nonexistent quality level', () => {
    const result = filterByAirQuality(mockCities, 'excellent' as any)
    expect(result).toHaveLength(0)
  })

  it('should exclude cities with undefined air quality', () => {
    const result = filterByAirQuality(mockCities, 'good')
    expect(result.some((c) => c.name_en === 'Jeonju')).toBe(false)
  })
})

describe('searchCities', () => {
  it('should search cities by Korean name', () => {
    const result = searchCities(mockCities, '서울')
    expect(result).toHaveLength(1)
    expect(result[0].name_kr).toBe('서울')
  })

  it('should search cities by English name', () => {
    const result = searchCities(mockCities, 'Seoul')
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Seoul')
  })

  it('should be case-insensitive', () => {
    const result1 = searchCities(mockCities, 'SEOUL')
    const result2 = searchCities(mockCities, 'seoul')
    const result3 = searchCities(mockCities, 'SeOuL')
    expect(result1).toHaveLength(1)
    expect(result2).toHaveLength(1)
    expect(result3).toHaveLength(1)
  })

  it('should search with partial match', () => {
    const result = searchCities(mockCities, 'je')
    expect(result).toHaveLength(3) // Jeju, Daejeon, Jeonju
    expect(result.map((c) => c.name_en)).toContain('Jeju')
    expect(result.map((c) => c.name_en)).toContain('Jeonju')
    expect(result.map((c) => c.name_en)).toContain('Daejeon')
  })

  it('should return all cities when query is empty', () => {
    const result = searchCities(mockCities, '')
    expect(result).toHaveLength(mockCities.length)
  })

  it('should return all cities when query is whitespace', () => {
    const result = searchCities(mockCities, '   ')
    expect(result).toHaveLength(mockCities.length)
  })

  it('should handle empty cities array', () => {
    const result = searchCities([], 'Seoul')
    expect(result).toHaveLength(0)
  })

  it('should return empty array when no matches found', () => {
    const result = searchCities(mockCities, 'xyz123')
    expect(result).toHaveLength(0)
  })

  it('should handle special characters in search', () => {
    const result = searchCities(mockCities, '서울!@#')
    expect(result).toHaveLength(0)
  })

  it('should match Korean partial text', () => {
    const result = searchCities(mockCities, '부')
    expect(result.some((c) => c.name_kr === '부산')).toBe(true)
  })
})

describe('applyAllFilters', () => {
  const defaultFilters: FilterState = {
    budget: { min: 0, max: 10000000 },
    regions: [],
    weather: undefined,
    transport: { subway: false, ktx: false },
    environment: undefined,
  }

  it('should apply search query filter', () => {
    const result = applyAllFilters(mockCities, defaultFilters, 'Seoul')
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Seoul')
  })

  it('should apply budget filter', () => {
    const filters: FilterState = {
      ...defaultFilters,
      budget: { min: 1000000, max: 1500000 },
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(4)
    expect(result.every((c) => c.avg_monthly_cost <= 1500000)).toBe(true)
  })

  it('should apply regions filter', () => {
    const filters: FilterState = {
      ...defaultFilters,
      regions: ['capital', 'island'],
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(2)
    expect(result.map((c) => c.name_en)).toContain('Seoul')
    expect(result.map((c) => c.name_en)).toContain('Jeju')
  })

  it('should apply weather filter when provided', () => {
    const filters: FilterState = {
      ...defaultFilters,
      weather: { min: 15, max: 20 },
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(3)
    expect(result.every((c) => c.current_temp! >= 15 && c.current_temp! <= 20)).toBe(
      true
    )
  })

  it('should skip weather filter when undefined', () => {
    const filters: FilterState = {
      ...defaultFilters,
      weather: undefined,
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(mockCities.length)
  })

  it('should apply transport filter', () => {
    const filters: FilterState = {
      ...defaultFilters,
      transport: { subway: true, ktx: false },
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(3)
    expect(result.every((c) => c.has_subway)).toBe(true)
  })

  it('should apply environment filter', () => {
    const filters: FilterState = {
      ...defaultFilters,
      environment: 'good',
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(3)
    expect(result.every((c) => c.air_quality === 'good')).toBe(true)
  })

  it('should apply multiple filters together', () => {
    const filters: FilterState = {
      budget: { min: 1000000, max: 2000000 },
      regions: ['capital', 'south', 'island'],
      weather: { min: 15, max: 25 },
      transport: { subway: true, ktx: false },
      environment: 'good',
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Seoul')
  })

  it('should combine search with filters', () => {
    const filters: FilterState = {
      ...defaultFilters,
      budget: { min: 1000000, max: 1600000 },
    }
    const result = applyAllFilters(mockCities, filters, 'bu')
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Busan')
  })

  it('should return empty array when no cities match all filters', () => {
    const filters: FilterState = {
      budget: { min: 3000000, max: 5000000 },
      regions: ['nonexistent'],
      weather: { min: 100, max: 200 },
      transport: { subway: true, ktx: true },
      environment: 'excellent' as any,
    }
    const result = applyAllFilters(mockCities, filters, 'xyz')
    expect(result).toHaveLength(0)
  })

  it('should handle empty cities array', () => {
    const result = applyAllFilters([], defaultFilters, '')
    expect(result).toHaveLength(0)
  })

  it('should not mutate original cities array', () => {
    const original = [...mockCities]
    applyAllFilters(mockCities, defaultFilters, '')
    expect(mockCities).toEqual(original)
  })
})

describe('sortCities', () => {
  it('should sort by recommended (ranking ascending)', () => {
    const result = sortCities(mockCities, 'recommended')
    expect(result[0].ranking).toBe(1)
    expect(result[result.length - 1].ranking).toBe(6)
    expect(result[0].name_en).toBe('Seoul')
  })

  it('should sort by price low to high', () => {
    const result = sortCities(mockCities, 'price-low')
    expect(result[0].avg_monthly_cost).toBe(1100000)
    expect(result[result.length - 1].avg_monthly_cost).toBe(2000000)
    expect(result[0].name_en).toBe('Jeonju')
    expect(result[result.length - 1].name_en).toBe('Seoul')
  })

  it('should sort by price high to low', () => {
    const result = sortCities(mockCities, 'price-high')
    expect(result[0].avg_monthly_cost).toBe(2000000)
    expect(result[result.length - 1].avg_monthly_cost).toBe(1100000)
    expect(result[0].name_en).toBe('Seoul')
    expect(result[result.length - 1].name_en).toBe('Jeonju')
  })

  it('should sort by internet speed descending', () => {
    const result = sortCities(mockCities, 'internet-fast')
    expect(result[0].avg_internet_speed).toBe(100)
    expect(result[result.length - 1].avg_internet_speed).toBe(75)
    expect(result[0].name_en).toBe('Seoul')
  })

  it('should sort by air quality (good > moderate > bad)', () => {
    const result = sortCities(mockCities, 'air-quality')
    const withQuality = result.filter((c) => c.air_quality)
    expect(withQuality[0].air_quality).toBe('good')
    expect(withQuality[withQuality.length - 1].air_quality).toBe('bad')
  })

  it('should handle undefined air quality in air-quality sort', () => {
    const result = sortCities(mockCities, 'air-quality')
    expect(result).toHaveLength(mockCities.length)
    // Cities with undefined should be sorted to the end
    const jeonju = result.find((c) => c.name_en === 'Jeonju')
    expect(jeonju).toBeDefined()
  })

  it('should sort by popular (avg_rating descending)', () => {
    const result = sortCities(mockCities, 'popular')
    expect(result[0].avg_rating).toBe(4.8)
    expect(result[result.length - 1].avg_rating).toBe(4.0)
    expect(result[0].name_en).toBe('Jeju')
  })

  it('should handle unknown sort option by returning original order', () => {
    const result = sortCities(mockCities, 'unknown' as SortOption)
    expect(result).toHaveLength(mockCities.length)
  })

  it('should not mutate original cities array', () => {
    const original = [...mockCities]
    sortCities(mockCities, 'price-low')
    expect(mockCities).toEqual(original)
  })

  it('should handle empty cities array', () => {
    const result = sortCities([], 'recommended')
    expect(result).toHaveLength(0)
  })

  it('should handle single city array', () => {
    const result = sortCities([mockCities[0]], 'price-low')
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(mockCities[0])
  })

  it('should maintain stable sort for equal values', () => {
    const duplicateCities: City[] = [
      { ...mockCities[0], avg_monthly_cost: 1000000 },
      { ...mockCities[1], avg_monthly_cost: 1000000 },
      { ...mockCities[2], avg_monthly_cost: 1000000 },
    ]
    const result = sortCities(duplicateCities, 'price-low')
    expect(result[0].avg_monthly_cost).toBe(1000000)
    expect(result[1].avg_monthly_cost).toBe(1000000)
    expect(result[2].avg_monthly_cost).toBe(1000000)
  })
})

// Edge cases and integration tests
describe('Edge Cases and Integration', () => {
  it('should handle cities with all optional fields undefined', () => {
    const minimalCity: City = {
      id: 999,
      name_kr: '테스트',
      name_en: 'Test',
      slug: 'test',
      region: 'test',
      image_url: '/test.jpg',
      ranking: 99,
      avg_rating: 0,
      review_count: 0,
      recommend_rate: 0,
      avg_monthly_cost: 1000000,
      avg_rent: 400000,
      avg_internet_speed: 50,
      has_subway: false,
      has_ktx: false,
      cafe_count: 0,
      coworking_count: 0,
    }

    const cities = [minimalCity]
    expect(filterByTemperature(cities, 0, 100)).toHaveLength(0)
    expect(filterByAirQuality(cities, 'good')).toHaveLength(0)
    expect(searchCities(cities, 'test')).toHaveLength(1)
    expect(sortCities(cities, 'air-quality')).toHaveLength(1)
  })

  it('should handle very large numbers in budget', () => {
    const result = filterByCost(mockCities, 0, Number.MAX_SAFE_INTEGER)
    expect(result).toHaveLength(mockCities.length)
  })

  it('should handle Unicode characters in search', () => {
    const result = searchCities(mockCities, '서')
    expect(result.some((c) => c.name_kr.includes('서'))).toBe(true)
  })

  it('should chain multiple operations correctly', () => {
    const filtered = filterByCost(mockCities, 1000000, 2000000)
    const searched = searchCities(filtered, 'j')
    const sorted = sortCities(searched, 'price-low')
    expect(sorted).toHaveLength(3) // Jeonju, Daejeon, Jeju
    expect(sorted[0].avg_monthly_cost).toBeLessThanOrEqual(
      sorted[1].avg_monthly_cost
    )
    expect(sorted[1].avg_monthly_cost).toBeLessThanOrEqual(
      sorted[2].avg_monthly_cost
    )
  })

  it('should handle all filters set to most restrictive', () => {
    const filters: FilterState = {
      budget: { min: 1500000, max: 1500000 }, // Exact match
      regions: ['south'],
      weather: { min: 18, max: 18 }, // Exact match
      transport: { subway: true, ktx: true },
      environment: 'moderate',
    }
    const result = applyAllFilters(mockCities, filters, '')
    expect(result).toHaveLength(1)
    expect(result[0].name_en).toBe('Busan')
  })
})
