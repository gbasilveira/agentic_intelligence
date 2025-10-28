import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Globe } from "lucide-react"

export default function ResourcesLoading() {
  return (
    <main className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-4" />
            <Skeleton className="h-6 w-5/6 max-w-xl mx-auto mb-8" />

            {/* Search and Filter Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-full sm:w-[180px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="container mx-auto px-6 pb-24">
        <Tabs defaultValue="library" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12">
            <TabsTrigger value="library" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Library</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Tools</span>
            </TabsTrigger>
            <TabsTrigger value="communities" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Global Community</span>
            </TabsTrigger>
          </TabsList>

          {/* Library Tab Skeleton */}
          <TabsContent value="library" className="space-y-8">
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-10 w-[180px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <Card key={index} className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm">
                    <Skeleton className="h-48 w-full" />
                    <CardContent className="p-5">
                      <div className="flex items-center mb-2">
                        <Skeleton className="h-4 w-24 mr-2" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <div className="flex gap-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                    </CardContent>
                    <CardFooter className="p-5 pt-0 flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-8 w-20" />
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Submit Resource CTA Skeleton */}
      <section className="container mx-auto px-6 pb-24">
        <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <Skeleton className="h-8 w-64 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-2" />
              <Skeleton className="h-4 w-4/6 mb-6" />
              <Skeleton className="h-10 w-40" />
            </div>
            <div className="relative hidden md:block">
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Newsletter Skeleton */}
      <section className="container mx-auto px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-full max-w-lg mx-auto mb-2" />
          <Skeleton className="h-4 w-5/6 max-w-md mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </section>
    </main>
  )
}
