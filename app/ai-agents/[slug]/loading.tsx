import { Skeleton } from "@/components/ui/skeleton"
import ParticleBackground from "@/components/particle-background"

export default function Loading() {
  return (
    <main className="min-h-screen pb-20">
      <ParticleBackground />

      {/* Hero Section Skeleton */}
      <section className="relative pt-24 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-6 w-32 mb-6 bg-gray-800" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Agent Image and Basic Info Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 shadow-lg">
                <Skeleton className="aspect-square w-full bg-gray-800" />

                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <Skeleton className="h-5 w-24 bg-gray-800" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-8 w-8 rounded-full bg-gray-800" />
                      <Skeleton className="h-8 w-8 rounded-full bg-gray-800" />
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index} className="flex items-center">
                          <Skeleton className="h-4 w-4 mr-2 bg-gray-800" />
                          <Skeleton className="h-4 w-full bg-gray-800" />
                        </div>
                      ))}
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <Skeleton className="h-5 w-16 mb-2 bg-gray-800" />
                    <div className="flex items-center">
                      <Skeleton className="h-10 w-10 rounded-full mr-3 bg-gray-800" />
                      <div>
                        <Skeleton className="h-4 w-32 mb-1 bg-gray-800" />
                        <Skeleton className="h-3 w-24 bg-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags Skeleton */}
              <div className="mt-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-5">
                <Skeleton className="h-5 w-16 mb-3 bg-gray-800" />
                <div className="flex flex-wrap gap-2">
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} className="h-6 w-16 rounded-full bg-gray-800" />
                    ))}
                </div>
              </div>

              {/* Tools Skeleton */}
              <div className="mt-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-5">
                <Skeleton className="h-5 w-40 mb-3 bg-gray-800" />
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2 bg-gray-800" />
                        <Skeleton className="h-4 w-full bg-gray-800" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Agent Description and Details Skeleton */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 mb-8">
                <Skeleton className="h-8 w-3/4 mb-2 bg-gray-800" />
                <Skeleton className="h-6 w-full mb-6 bg-gray-800" />

                <div className="flex flex-wrap gap-4 mb-8">
                  <Skeleton className="h-12 w-32 rounded-lg bg-gray-800" />
                  <Skeleton className="h-12 w-32 rounded-lg bg-gray-800" />
                  <Skeleton className="h-12 w-32 rounded-lg bg-gray-800" />
                </div>

                <div className="space-y-4">
                  <Skeleton className="h-4 w-full bg-gray-800" />
                  <Skeleton className="h-4 w-full bg-gray-800" />
                  <Skeleton className="h-4 w-5/6 bg-gray-800" />
                  <Skeleton className="h-6 w-1/2 bg-gray-800" />
                  <Skeleton className="h-4 w-full bg-gray-800" />
                  <Skeleton className="h-4 w-full bg-gray-800" />
                  <Skeleton className="h-4 w-4/5 bg-gray-800" />
                </div>
              </div>

              {/* Technical Specifications Skeleton */}
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 mb-8">
                <Skeleton className="h-6 w-64 mb-4 bg-gray-800" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="p-4 border border-gray-800 rounded-lg">
                        <Skeleton className="h-5 w-32 mb-2 bg-gray-800" />
                        <Skeleton className="h-4 w-full bg-gray-800" />
                      </div>
                    ))}
                </div>
              </div>

              {/* Pricing Options Skeleton */}
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 mb-8">
                <Skeleton className="h-6 w-40 mb-4 bg-gray-800" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="p-6 border border-gray-800 rounded-xl">
                        <Skeleton className="h-5 w-24 mb-2 bg-gray-800" />
                        <Skeleton className="h-8 w-20 mb-1 bg-gray-800" />
                        <Skeleton className="h-4 w-16 mb-4 bg-gray-800" />
                        <div className="space-y-2 mb-6">
                          {Array(4)
                            .fill(0)
                            .map((_, i) => (
                              <div key={i} className="flex items-center">
                                <Skeleton className="h-4 w-4 mr-2 bg-gray-800" />
                                <Skeleton className="h-4 w-full bg-gray-800" />
                              </div>
                            ))}
                        </div>
                        <Skeleton className="h-10 w-full rounded-lg bg-gray-800" />
                      </div>
                    ))}
                </div>
              </div>

              {/* Reviews Skeleton */}
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6">
                <Skeleton className="h-6 w-32 mb-4 bg-gray-800" />
                <div className="space-y-6">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="p-4 border border-gray-800 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Skeleton className="h-10 w-10 rounded-full mr-3 bg-gray-800" />
                          <div>
                            <Skeleton className="h-4 w-32 mb-1 bg-gray-800" />
                            <Skeleton className="h-3 w-24 bg-gray-800" />
                          </div>
                          <div className="ml-auto">
                            <Skeleton className="h-4 w-20 bg-gray-800" />
                          </div>
                        </div>
                        <Skeleton className="h-4 w-full bg-gray-800" />
                        <Skeleton className="h-4 w-full bg-gray-800" />
                        <Skeleton className="h-4 w-4/5 bg-gray-800" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Agents Skeleton */}
      <section className="px-4 md:px-8 lg:px-16 mt-8">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-6 w-48 mb-6 bg-gray-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-800"
                >
                  <Skeleton className="h-48 w-full bg-gray-800" />
                  <div className="p-5">
                    <Skeleton className="h-5 w-3/4 mb-2 bg-gray-800" />
                    <Skeleton className="h-4 w-full mb-4 bg-gray-800" />
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Skeleton className="h-6 w-16 rounded-full bg-gray-800" />
                      <Skeleton className="h-6 w-20 rounded-full bg-gray-800" />
                    </div>
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-4 w-20 bg-gray-800" />
                      <Skeleton className="h-4 w-16 bg-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
