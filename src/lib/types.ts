export interface City {
  id: number
  name_kr: string
  name_en: string
  slug: string
  region: string
  image_url: string
  ranking: number

  // Rating
  avg_rating: number
  review_count: number
  recommend_rate: number

  // Cost
  avg_monthly_cost: number
  avg_rent: number

  // Infrastructure
  avg_internet_speed: number
  has_subway: boolean
  has_ktx: boolean
  cafe_count: number
  coworking_count: number

  // Weather & Environment
  current_temp?: number
  current_weather?: string
  pm25?: number
  air_quality?: 'good' | 'moderate' | 'bad'

  // Tags
  tags?: string[]
  is_english_friendly?: boolean
}

export interface FilterState {
  budget: {
    min: number
    max: number
  }
  regions: string[]
  weather?: {
    min: number
    max: number
  }
  transport: {
    subway: boolean
    ktx: boolean
  }
  environment?: string
}

export type SortOption =
  | 'recommended'
  | 'price-low'
  | 'price-high'
  | 'internet-fast'
  | 'air-quality'
  | 'popular'

export interface Review {
  id: number
  citySlug: string
  author: string
  rating: number
  title: string
  content: string
  date: string
  helpful: number
  notHelpful: number
  isUserGenerated?: boolean
}
