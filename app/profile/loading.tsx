import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileLoading() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-6">
        <div>
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-4 w-[350px] mt-2" />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-8 w-[200px]" />
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-32 w-full" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-8 w-[200px]" />
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-8 w-[200px]" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>
    </div>
  )
}
