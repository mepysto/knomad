import { ArrowRight, Briefcase, Globe, BarChart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <div className="mb-6 animate-slide-up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-primary">대한민국</span> 노마드 가이드
            </h1>
          </div>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            한국의 모든 도시를 노마드 관점으로 재발견하세요
          </p>

          {/* Features */}
          <div className="mb-12 grid gap-4 sm:grid-cols-3 text-sm md:text-base animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-background p-4 shadow-sm">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>원격근무자부터 디지털 노마드까지</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-background p-4 shadow-sm">
              <Globe className="h-5 w-5 text-primary" />
              <span>외국인과 한국인 모두를 위한</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-background p-4 shadow-sm">
              <BarChart className="h-5 w-5 text-primary" />
              <span>실제 거주자들의 생생한 평가</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="이메일을 입력하세요"
                className="h-12 flex-1"
              />
              <Button size="lg" className="h-12 gap-2">
                시작하기
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              이미 계정이 있으신가요?{' '}
              <a href="/login" className="text-primary hover:underline">
                로그인하기
              </a>
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>
                <span className="font-semibold text-foreground">1,247</span>명의 노마드
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📝</span>
              <span>
                <span className="font-semibold text-foreground">3,891</span>개의 리뷰
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏙️</span>
              <span>
                <span className="font-semibold text-foreground">20</span>개 도시
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100 opacity-50 blur-3xl" />
      </div>
    </section>
  )
}
