'use client'

import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cities } from '@/data/cities'
import { City } from '@/lib/types'
import CityDetailHeader from '@/components/CityDetailHeader'
import DetailSections from '@/components/DetailSections'
import ReviewSection from '@/components/ReviewSection'
import RelatedCities from '@/components/RelatedCities'
import { cn } from '@/lib/utils'
import { useViewHistory } from '@/contexts/ViewHistoryContext'

interface CityDetailPageProps {
  params: {
    slug: string
  }
}

export default function CityDetailPage({ params }: CityDetailPageProps) {
  const { addViewHistory } = useViewHistory()
  const city = cities.find((c) => c.slug === params.slug)

  // Add to view history when city detail page is loaded
  useEffect(() => {
    if (city) {
      addViewHistory(city)
    }
  }, [city, addViewHistory])

  if (!city) {
    notFound()
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

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <Image
          src={city.image_url}
          alt={city.name_kr}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container py-8 space-y-8">
        {/* Header */}
        <CityDetailHeader city={city} />

        {/* Detail Sections */}
        <DetailSections city={city} />

        {/* Reviews Section */}
        <ReviewSection citySlug={city.slug} />

        {/* Related Cities */}
        <RelatedCities currentCity={city} />
      </div>
    </div>
  )
}
