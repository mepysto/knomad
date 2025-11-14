'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Palette } from 'lucide-react'

type Theme = 'default' | 'minimal' | 'neon' | 'nature' | 'luxury'

const themes = [
  { id: 'default' as Theme, name: '기본', icon: '🎨' },
  { id: 'minimal' as Theme, name: '미니멀', icon: '⚪' },
  { id: 'neon' as Theme, name: '네온 사이버', icon: '🌟' },
  { id: 'nature' as Theme, name: '네이처', icon: '🌿' },
  { id: 'luxury' as Theme, name: '럭셔리', icon: '💎' },
]

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('default')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setCurrentTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const applyTheme = (theme: Theme) => {
    const html = document.documentElement

    // Remove all theme classes
    html.classList.remove('theme-minimal', 'theme-neon', 'theme-nature', 'theme-luxury')

    // Apply new theme class
    if (theme !== 'default') {
      html.classList.add(`theme-${theme}`)
    }
  }

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme)
    applyTheme(theme)
    localStorage.setItem('theme', theme)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">테마</span>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 w-56 rounded-lg border bg-popover p-2 shadow-lg">
            <div className="text-sm font-semibold mb-2 px-2 text-muted-foreground">
              테마 선택
            </div>
            <div className="space-y-1">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm
                    hover:bg-accent hover:text-accent-foreground transition-colors
                    ${currentTheme === theme.id ? 'bg-accent text-accent-foreground' : ''}
                  `}
                >
                  <span className="text-xl">{theme.icon}</span>
                  <span className="flex-1 text-left">{theme.name}</span>
                  {currentTheme === theme.id && (
                    <span className="text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
