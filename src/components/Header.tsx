'use client'

import { Search, Globe, Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { MobileMenu } from '@/components/MobileMenu'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { signout } from '@/app/actions'
import { useFilter } from '@/contexts/FilterContext'

export function Header() {
  const { setSearchQuery } = useFilter()
  const [user, setUser] = useState<{ email?: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser({ email: user.email })
      } else {
        setUser(null)
      }
      setIsLoading(false)
    }
    checkAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser({ email: session.user.email })
      } else {
        setUser(null)
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    await signout()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2" aria-label="NomaKR 홈">
            <span className="text-2xl" aria-hidden="true">🏔️</span>
            <span className="text-xl font-bold text-primary">NomaKR</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium" aria-label="메인 네비게이션">
            <a href="/" className="transition-colors hover:text-primary">
              홈
            </a>
            <a href="/cities" className="transition-colors hover:text-primary">
              도시
            </a>
            <a href="/favorites" className="transition-colors hover:text-primary">
              ❤️ 즐겨찾기
            </a>
            <a href="/compare" className="transition-colors hover:text-primary">
              비교
            </a>
            <a href="/community" className="transition-colors hover:text-primary">
              커뮤니티
            </a>
            <a href="/guide" className="transition-colors hover:text-primary">
              가이드
            </a>
            <a href="/premium" className="transition-colors hover:text-primary text-amber-600">
              프리미엄
            </a>
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden lg:flex relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="도시 검색..."
              className="pl-9"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Language Toggle */}
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
            <Globe className="h-4 w-4" />
            <span>KR</span>
          </Button>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {!isLoading && !user ? (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    로그인
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">
                    회원가입
                  </Button>
                </Link>
              </>
            ) : user ? (
              <>
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    프로필
                  </Button>
                </Link>
                <form action={signout}>
                  <Button size="sm" variant="outline">
                    로그아웃
                  </Button>
                </form>
              </>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
        isLoading={isLoading}
        onLogout={handleLogout}
      />
    </header>
  )
}
