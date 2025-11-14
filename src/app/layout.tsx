import type { Metadata } from "next"
import "./globals.css"
import { FilterProvider } from "@/contexts/FilterContext"
import { FavoritesProvider } from "@/contexts/FavoritesContext"
import { ReviewsProvider } from "@/contexts/ReviewsContext"
import { ViewHistoryProvider } from "@/contexts/ViewHistoryContext"

export const metadata: Metadata = {
  title: "NomaKR - 대한민국 노마드 가이드",
  description: "한국의 모든 도시를 노마드 관점으로 재발견하세요. 생활비, 인터넷 속도, 날씨 등 노마드를 위한 맞춤 도시 정보",
  keywords: ["노마드", "한국", "도시", "여행", "생활"],
  authors: [{ name: "NomaKR Team" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://nomakr.com",
    siteName: "NomaKR",
    title: "NomaKR - 대한민국 노마드 가이드",
    description: "한국의 모든 도시를 노마드 관점으로 재발견하세요",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "NomaKR - 대한민국 노마드 가이드",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <FilterProvider>
          <FavoritesProvider>
            <ReviewsProvider>
              <ViewHistoryProvider>
                {children}
              </ViewHistoryProvider>
            </ReviewsProvider>
          </FavoritesProvider>
        </FilterProvider>
      </body>
    </html>
  )
}
