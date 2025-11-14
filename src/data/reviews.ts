import type { Review } from '@/lib/types'

export const reviews: Review[] = [
  // Seoul Gangnam Reviews
  {
    id: 1,
    citySlug: 'seoul-gangnam',
    author: '김노마드',
    rating: 5,
    title: '완벽한 도시 생활',
    content: '강남은 정말 모든 것이 가깝고 편리합니다. 카페, 음식점, 업무 공간 모두 최고 수준이고 인터넷도 빠릅니다. 가격이 높은 게 유일한 단점입니다.',
    date: '2024-10-15',
    helpful: 28,
    notHelpful: 2,
  },
  {
    id: 2,
    citySlug: 'seoul-gangnam',
    author: '서울사랑',
    rating: 4,
    title: '바쁘지만 매력적인',
    content: '편의시설은 최고지만 사람이 많아서 시끄럽고 스트레스받을 수 있습니다. 경험이 필요한 노마드에게는 추천합니다.',
    date: '2024-10-10',
    helpful: 15,
    notHelpful: 3,
  },
  {
    id: 3,
    citySlug: 'seoul-gangnam',
    author: '도시인',
    rating: 5,
    title: '코딩하기 좋은 곳',
    content: '카페들이 많고 조용한 곳들이 있어서 작업하기 좋습니다. 네트워킹도 쉬워요.',
    date: '2024-09-28',
    helpful: 42,
    notHelpful: 1,
  },

  // Jeju Reviews
  {
    id: 4,
    citySlug: 'jeju',
    author: '휴식을원하는자',
    rating: 5,
    title: '힐링 그 자체',
    content: '자연이 정말 아름답고 공기가 맑습니다. 카페에서 일하면서 바다를 볼 수 있어서 최고의 경험이었어요.',
    date: '2024-10-12',
    helpful: 51,
    notHelpful: 1,
  },
  {
    id: 5,
    citySlug: 'jeju',
    author: '자연인',
    rating: 5,
    title: '완벽한 여유로움',
    content: '제주에서의 생활은 마치 휴가를 가는 것 같습니다. 스트레스가 많이 풀립니다.',
    date: '2024-10-08',
    helpful: 38,
    notHelpful: 2,
  },
  {
    id: 6,
    citySlug: 'jeju',
    author: '여행자',
    rating: 4,
    title: '좋지만 다소 외로울 수 있음',
    content: '정말 아름답지만 다른 노마드들을 만나기가 어렵고 네트워킹 기회가 적습니다.',
    date: '2024-09-30',
    helpful: 22,
    notHelpful: 4,
  },

  // Busan Reviews
  {
    id: 7,
    citySlug: 'busan',
    author: '항구인',
    rating: 5,
    title: '도시와 자연의 조화',
    content: '부산은 대도시의 편의성과 해변의 여유로움을 모두 가지고 있습니다. 가성비도 좋아요.',
    date: '2024-10-14',
    helpful: 31,
    notHelpful: 1,
  },
  {
    id: 8,
    citySlug: 'busan',
    author: '해변사랑',
    rating: 4,
    title: '발전하는 도시',
    content: '모든 인프라가 빠르게 개선되고 있습니다. 사람들도 친절합니다.',
    date: '2024-10-05',
    helpful: 19,
    notHelpful: 2,
  },
  {
    id: 9,
    citySlug: 'busan',
    author: '일하는사람',
    rating: 4,
    title: '업무 효율성 높은 도시',
    content: '카페에서 일하기 좋고 코워킹 스페이스도 많습니다. 강남보다 훨씬 저렴해요.',
    date: '2024-09-25',
    helpful: 25,
    notHelpful: 1,
  },

  // Gangneung Reviews
  {
    id: 10,
    citySlug: 'gangneung',
    author: '산림욕',
    rating: 5,
    title: '침묵의 가치를 느끼다',
    content: '조용하고 평화로운 분위기에서 깊이 있는 작업을 할 수 있습니다. 해변도 아름답습니다.',
    date: '2024-10-13',
    helpful: 27,
    notHelpful: 0,
  },
  {
    id: 11,
    citySlug: 'gangneung',
    author: '조용함찾는자',
    rating: 4,
    title: '하지만 외로울 수 있습니다',
    content: '정말 조용하지만 그만큼 외로울 수 있습니다. 장기 체류에는 좋지만 단기는 힘들 수 있어요.',
    date: '2024-09-20',
    helpful: 17,
    notHelpful: 3,
  },
  {
    id: 12,
    citySlug: 'gangneung',
    author: '명상가',
    rating: 5,
    title: '마음을 비우기 좋은 곳',
    content: '스트레스로 가득한 업무에서 벗어나 명상할 수 있는 공간입니다.',
    date: '2024-09-15',
    helpful: 33,
    notHelpful: 2,
  },

  // Jeonju Reviews
  {
    id: 13,
    citySlug: 'jeonju',
    author: '문화애호가',
    rating: 5,
    title: '문화와 음식의 천국',
    content: '전통문화도 풍부하고 음식이 정말 맛있습니다. 가격도 저렴하고 좋습니다.',
    date: '2024-10-11',
    helpful: 36,
    notHelpful: 1,
  },
  {
    id: 14,
    citySlug: 'jeonju',
    author: '미식가',
    rating: 5,
    title: '음식만으로도 가치 있음',
    content: '한옥마을도 멋있고 음식은 정말 최고입니다. 작은 도시지만 매력이 넘쳐납니다.',
    date: '2024-10-02',
    helpful: 28,
    notHelpful: 1,
  },
  {
    id: 15,
    citySlug: 'jeonju',
    author: '예술가',
    rating: 4,
    title: '창작자에게 영감을 주는 곳',
    content: '문화적 영감을 얻기에 좋은 도시입니다. 비비로 분위기도 좋아요.',
    date: '2024-09-22',
    helpful: 19,
    notHelpful: 2,
  },
]

export function getReviewsByCity(citySlug: string): Review[] {
  return reviews.filter((review) => review.citySlug === citySlug)
}

export function getAverageRating(citySlug: string): number {
  const cityReviews = getReviewsByCity(citySlug)
  if (cityReviews.length === 0) return 0
  const sum = cityReviews.reduce((acc, review) => acc + review.rating, 0)
  return Math.round((sum / cityReviews.length) * 10) / 10
}

export function getRatingDistribution(
  citySlug: string
): Record<number, number> {
  const cityReviews = getReviewsByCity(citySlug)
  const distribution: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }

  cityReviews.forEach((review) => {
    distribution[review.rating]++
  })

  return distribution
}

export function getRecommendRate(citySlug: string): number {
  const cityReviews = getReviewsByCity(citySlug)
  if (cityReviews.length === 0) return 0

  const recommendCount = cityReviews.filter((review) => review.rating >= 4).length
  return Math.round((recommendCount / cityReviews.length) * 100)
}
