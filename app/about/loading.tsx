import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* Hero Section Skeleton */}
      <div className="w-full h-[50vh] min-h-[400px] relative">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <Skeleton className="h-12 w-3/4 max-w-2xl mb-4" />
          <Skeleton className="h-6 w-2/3 max-w-xl" />
        </div>
      </div>

      {/* Our Story Section Skeleton */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Skeleton className="h-10 w-48 mb-6" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-[300px] md:h-[400px] rounded-lg" />
        </div>
      </div>

      {/* Our Mission Section Skeleton */}
      <div className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Skeleton className="h-10 w-48 mx-auto mb-6" />
          <Skeleton className="h-4 w-full max-w-3xl mx-auto mb-3" />
          <Skeleton className="h-4 w-full max-w-3xl mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} className="h-[200px] rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Our Community Section Skeleton */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Skeleton className="h-[300px] md:h-[400px] rounded-lg order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <Skeleton className="h-10 w-48 mb-6" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <Skeleton className="h-4 w-48 mb-4" />
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex mb-3">
                <Skeleton className="h-5 w-5 mr-3" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
