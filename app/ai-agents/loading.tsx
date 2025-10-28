import { Skeleton } from "@/components/ui/skeleton"
import ParticleBackground from "@/components/particle-background"

export default function Loading() {
  return (
    <main className="min-h-screen">
      <ParticleBackground />

      {/* Hero Section Skeleton */}
      <section className="relative pt-24 pb-12 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-5xl mx-auto">
          <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2 bg-gray-800" />
          <Skeleton className="h-6 w-5/6 max-w-2xl mx-auto mb-8 bg-gray-800" />

          {/* Search and Filter Bar Skeleton */}
          <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl shadow-lg mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton className="h-10 flex-grow bg-gray-800" />
              <div className="flex gap-2">
                <Skeleton className="h-10 w-28 bg-gray-800" />
                <Skeleton className="h-10 w-24 bg-gray-800" />
                <Skeleton className="h-10 w-24 bg-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid Skeleton */}
      <section className="px-4 md:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300"
                >
                  <Skeleton className="h-48 w-full bg-gray-800" />
                  <div className="p-5">
                    <Skeleton className="h-6 w-3/4 mb-2 bg-gray-800" />
                    <Skeleton className="h-4 w-full mb-1 bg-gray-800" />
                    <Skeleton className="h-4 w-5/6 mb-4 bg-gray-800" />
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Skeleton className="h-6 w-16 rounded-full bg-gray-800" />
                      <Skeleton className="h-6 w-20 rounded-full bg-gray-800" />
                      <Skeleton className="h-6 w-24 rounded-full bg-gray-800" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-8 rounded-full bg-gray-800" />
                        <Skeleton className="h-4 w-20 bg-gray-800" />
                      </div>
                      <Skeleton className="h-4 w-16 bg-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-1">
              {Array(7)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className="w-10 h-10 rounded-lg bg-gray-800" />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
