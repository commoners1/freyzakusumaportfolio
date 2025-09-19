import React, { Suspense } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Skeleton } from "@/components/ui/skeleton";

const Skills = React.lazy(() =>
  import("@/components/skills").then((module) => ({ default: module.Skills }))
);
const Experience = React.lazy(() =>
  import("@/components/experience").then((module) => ({ default: module.Experience }))
);
const Portfolio = React.lazy(() =>
  import("@/components/portfolio").then((module) => ({ default: module.Portfolio }))
);
const Contact = React.lazy(() =>
  import("@/components/contact").then((module) => ({ default: module.Contact }))
);
const Footer = React.lazy(() =>
  import("@/components/footer").then((module) => ({ default: module.Footer }))
);


export default function Home() {
  const SectionSkeleton = () => (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Skeleton className="h-12 w-1/2" />
        <Skeleton className="h-6 w-3/4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<Skeleton className="h-24 w-full" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
