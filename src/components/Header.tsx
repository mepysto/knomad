import { Search, Globe, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏔️</span>
            <span className="text-xl font-bold text-primary">NomaKR</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="/" className="transition-colors hover:text-primary">
              홈
            </a>
            <a href="/cities" className="transition-colors hover:text-primary">
              도시
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
            />
          </div>

          {/* Language Toggle */}
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
            <Globe className="h-4 w-4" />
            <span>KR</span>
          </Button>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm">
              회원가입
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
