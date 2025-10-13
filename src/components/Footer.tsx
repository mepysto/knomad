import { Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-20">
      <div className="container px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Service */}
          <div>
            <h3 className="font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-foreground transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="/guide" className="hover:text-foreground transition-colors">
                  가이드
                </a>
              </li>
              <li>
                <a href="/premium" className="hover:text-foreground transition-colors">
                  프리미엄
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-foreground transition-colors">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="/partnership" className="hover:text-foreground transition-colors">
                  파트너십
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">법적정보</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="/cookie" className="hover:text-foreground transition-colors">
                  쿠키정책
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">팔로우</h3>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-muted transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-muted transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-muted transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-muted transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto mb-8 p-6 bg-background rounded-lg border">
          <h3 className="font-semibold mb-2">뉴스레터 구독</h3>
          <p className="text-sm text-muted-foreground mb-4">
            최신 노마드 정보를 받아보세요
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="이메일 입력..." />
            <Button>구독하기</Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🏔️</span>
            <span className="font-bold text-primary">NomaKR</span>
            <span className="text-sm text-muted-foreground">
              | 한국 디지털 노마드의 모든 것
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 NomaKR. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Made with ❤️ in Seoul, Korea
          </p>
        </div>
      </div>
    </footer>
  )
}
