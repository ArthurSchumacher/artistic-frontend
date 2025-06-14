import { Skeleton } from "./skeleton";

export const SkeletonTestimonials = () => (
  <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
    <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
      <div>
        <div className="relative h-80 w-full">
          <Skeleton className="h-full w-full rounded-3xl bg-stone-200 dark:bg-stone-800" />
        </div>
      </div>
      <div className="flex flex-col justify-between py-4">
        <div>
          <Skeleton className="h-6 w-1/2 mb-2 bg-stone-200 dark:bg-stone-800" />
          <Skeleton className="h-4 w-1/3 mb-8 bg-stone-200 dark:bg-stone-800" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-stone-200 dark:bg-stone-800" />
            <Skeleton className="h-4 w-5/6 bg-stone-200 dark:bg-stone-800" />
            <Skeleton className="h-4 w-2/3 bg-stone-200 dark:bg-stone-800" />
          </div>
        </div>
        <div className="flex gap-4 pt-12 md:pt-0">
          <Skeleton className="h-7 w-7 rounded-full bg-stone-200 dark:bg-stone-800" />
          <Skeleton className="h-7 w-7 rounded-full bg-stone-200 dark:bg-stone-800" />
        </div>
      </div>
    </div>
  </div>
);