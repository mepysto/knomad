import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NomaKR - 대한민국 노마드 가이드",
  description: "한국의 모든 도시를 노마드 관점으로 재발견하세요",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
