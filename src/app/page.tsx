import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FilterSortBar } from '@/components/FilterSortBar'
import { Sidebar } from '@/components/Sidebar'
import { CityGrid } from '@/components/CityGrid'
import { Footer } from '@/components/Footer'
import { PersonalizationSection } from '@/components/PersonalizationSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />

        {/* Social Proof Section */}
        <section className="border-b bg-muted/30 py-4">
          <div className="container px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>언론에 소개된 NomaKR</span>
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-medium">조선일보</span>
                <span className="font-medium">한경비즈</span>
                <span className="font-medium">매경이코노미</span>
                <span className="font-medium">테크크런치</span>
                <span className="font-medium">노컷뉴스</span>
              </div>
            </div>
          </div>
        </section>

        <FilterSortBar />

        {/* Personalization Section */}
        <section className="container px-4 py-8 border-b">
          <PersonalizationSection />
        </section>

        {/* Main Content: Sidebar + Grid */}
        <section className="container px-4 py-8">
          <div className="flex gap-8">
            <Sidebar />
            <CityGrid />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
