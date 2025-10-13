import { cities } from '@/data/cities'
import { CityCard } from './CityCard'

export function CityGrid() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div
            key={city.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CityCard city={city} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-lg border-2 border-dashed border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
          더 보기...
        </button>
      </div>
    </div>
  )
}
