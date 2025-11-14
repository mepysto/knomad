"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-2">서버 오류가 발생했습니다</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => reset()}>다시 시도</Button>
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            홈으로
          </Button>
        </div>
      </div>
    </div>
  )
}
