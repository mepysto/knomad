import { City } from './types'

/**
 * Calculate similarity score between two cities
 * Based on: rating, price, and tags
 */
export function calculateSimilarity(city1: City, city2: City): number {
  if (city1.id === city2.id) return 0

  let similarityScore = 0
  let factors = 0

  // Rating similarity (±1 point = high similarity)
  const ratingDiff = Math.abs(city1.avg_rating - city2.avg_rating)
  if (ratingDiff <= 1) {
    similarityScore += 40
  } else if (ratingDiff <= 2) {
    similarityScore += 20
  }
  factors++

  // Price similarity (±5M won = high similarity)
  const priceDiff = Math.abs(city1.avg_monthly_cost - city2.avg_monthly_cost)
  if (priceDiff <= 500000) {
    similarityScore += 40
  } else if (priceDiff <= 1000000) {
    similarityScore += 20
  }
  factors++

  // Tag similarity (common tags ratio)
  if (city1.tags && city2.tags && city1.tags.length > 0 && city2.tags.length > 0) {
    const commonTags = city1.tags.filter((tag) => city2.tags?.includes(tag))
    const tagSimilarity = commonTags.length / Math.max(city1.tags.length, city2.tags.length)
    similarityScore += tagSimilarity * 20
    factors++
  }

  return similarityScore / factors
}

/**
 * Get recommended cities based on viewed/selected city
 * Returns up to 6 most similar cities
 */
export function getRecommendedCities(
  viewedCity: City | City[],
  allCities: City[]
): City[] {
  const viewedCities = Array.isArray(viewedCity) ? viewedCity : [viewedCity]

  // Calculate average similarity for each city compared to all viewed cities
  const scoredCities = allCities
    .filter((city) => !viewedCities.some((v) => v.id === city.id))
    .map((city) => ({
      city,
      score: viewedCities.reduce((sum, viewed) => sum + calculateSimilarity(viewed, city), 0) /
        viewedCities.length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)

  return scoredCities.map((item) => item.city)
}
