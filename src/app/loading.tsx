export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="space-y-4 max-w-md w-full px-4">
        <div className="h-12 bg-muted rounded animate-pulse" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 bg-muted rounded animate-pulse" />
          <div className="h-32 bg-muted rounded animate-pulse" />
        </div>
        <div className="h-40 bg-muted rounded animate-pulse" />
        <div className="h-20 bg-muted rounded animate-pulse" />
      </div>
    </div>
  )
}
