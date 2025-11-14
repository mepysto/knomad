'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  user?: { email?: string } | null
  isLoading: boolean
  onLogout: (e: React.FormEvent) => void
}

export function MobileMenu({ isOpen, onClose, user, isLoading, onLogout }: MobileMenuProps) {
  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const menuItems = [
    { label: '홈', href: '/' },
    { label: '도시', href: '/cities' },
    { label: '❤️ 즐겨찾기', href: '/favorites' },
    { label: '비교', href: '/compare' },
    { label: '커뮤니티', href: '/community' },
    { label: '가이드', href: '/guide' },
    { label: '프리미엄', href: '/premium' },
  ]

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-16 left-0 right-0 bg-background border-b z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="navigation"
        aria-label="모바일 메뉴"
      >
        <div className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Navigation Links */}
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start text-base"
                onClick={onClose}
                aria-label={item.label}
              >
                {item.label}
              </Button>
            </Link>
          ))}

          <hr className="my-2" />

          {/* Auth Section */}
          {!isLoading && !user ? (
            <div className="space-y-2">
              <Link href="/login" className="w-full block">
                <Button variant="ghost" className="w-full justify-start text-base">
                  로그인
                </Button>
              </Link>
              <Link href="/signup" className="w-full block">
                <Button className="w-full justify-start text-base">
                  회원가입
                </Button>
              </Link>
            </div>
          ) : user ? (
            <div className="space-y-2">
              <Link href="/profile" className="w-full block">
                <Button variant="ghost" className="w-full justify-start text-base">
                  프로필
                </Button>
              </Link>
              <form onSubmit={onLogout} className="w-full">
                <Button type="submit" variant="outline" className="w-full justify-start text-base">
                  로그아웃
                </Button>
              </form>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  )
}
