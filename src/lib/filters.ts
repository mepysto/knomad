import { City, FilterState, SortOption } from './types'

/**
 * 예산으로 도시 필터링
 */
export function filterByCost(cities: City[], min: number, max: number): City[] {
  return cities.filter(
    (city) => city.avg_monthly_cost >= min && city.avg_monthly_cost <= max
  )
}

/**
 * 지역으로 도시 필터링 (다중 선택)
 */
export function filterByRegions(cities: City[], regions: string[]): City[] {
  if (regions.length === 0) return cities
  return cities.filter((city) => regions.includes(city.region))
}

/**
 * 온도로 도시 필터링
 */
export function filterByTemperature(
  cities: City[],
  min: number,
  max: number
): City[] {
  return cities.filter(
    (city) =>
      city.current_temp !== undefined &&
      city.current_temp >= min &&
      city.current_temp <= max
  )
}

/**
 * 교통 수단으로 도시 필터링 (지하철, KTX)
 */
export function filterByTransport(
  cities: City[],
  hasSubway: boolean,
  hasKtx: boolean
): City[] {
  if (!hasSubway && !hasKtx) return cities

  return cities.filter((city) => {
    if (hasSubway && hasKtx) return city.has_subway || city.has_ktx
    if (hasSubway) return city.has_subway
    if (hasKtx) return city.has_ktx
    return true
  })
}

/**
 * 공기질로 도시 필터링
 */
export function filterByAirQuality(
  cities: City[],
  quality?: string
): City[] {
  if (!quality) return cities
  return cities.filter((city) => city.air_quality === quality)
}

/**
 * 도시명으로 검색
 */
export function searchCities(cities: City[], query: string): City[] {
  if (!query.trim()) return cities

  const lowerQuery = query.toLowerCase()
  return cities.filter(
    (city) =>
      city.name_kr.toLowerCase().includes(lowerQuery) ||
      city.name_en.toLowerCase().includes(lowerQuery)
  )
}

/**
 * 모든 필터를 순차적으로 적용
 */
export function applyAllFilters(
  cities: City[],
  filters: FilterState,
  searchQuery: string
): City[] {
  let result = [...cities]

  // 검색 적용 (가장 먼저)
  result = searchCities(result, searchQuery)

  // 예산 필터
  result = filterByCost(result, filters.budget.min, filters.budget.max)

  // 지역 필터
  result = filterByRegions(result, filters.regions)

  // 온도 필터
  if (filters.weather) {
    result = filterByTemperature(result, filters.weather.min, filters.weather.max)
  }

  // 교통 필터
  result = filterByTransport(
    result,
    filters.transport.subway,
    filters.transport.ktx
  )

  // 공기질 필터
  result = filterByAirQuality(result, filters.environment)

  return result
}

/**
 * 도시 목록 정렬
 */
export function sortCities(cities: City[], sortOption: SortOption): City[] {
  const sorted = [...cities]

  switch (sortOption) {
    case 'recommended':
      // 랭킹 순 (추천순)
      return sorted.sort((a, b) => a.ranking - b.ranking)

    case 'price-low':
      // 가격 낮은순
      return sorted.sort((a, b) => a.avg_monthly_cost - b.avg_monthly_cost)

    case 'price-high':
      // 가격 높은순
      return sorted.sort((a, b) => b.avg_monthly_cost - a.avg_monthly_cost)

    case 'internet-fast':
      // 인터넷 빠른순
      return sorted.sort((a, b) => b.avg_internet_speed - a.avg_internet_speed)

    case 'air-quality':
      // 공기질 좋은순
      const airQualityOrder = { good: 3, moderate: 2, bad: 1 }
      return sorted.sort(
        (a, b) =>
          (airQualityOrder[b.air_quality || 'bad'] || 0) -
          (airQualityOrder[a.air_quality || 'bad'] || 0)
      )

    case 'popular':
      // 인기순 (평점 높은순)
      return sorted.sort((a, b) => b.avg_rating - a.avg_rating)

    default:
      return sorted
  }
}
