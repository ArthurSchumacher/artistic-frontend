import { paragraph, title } from "@/components/primitives";
import { CallToAction } from "@/components/shared/call-to-action/call-to-action";
import { BackgroundBoxed } from "@/components/ui/backgrounds/background-boxed";
import { Feature } from "@/components/ui/cards/features/feature";
import { FocusCards } from "@/components/ui/cards/focus-card";
import { AnimatedTestimonials } from "@/components/ui/testimonials/animated-testimonials";
import { InfiniteMovingCards } from "@/components/ui/testimonials/infinite-moving-cards";
import { TracingBeam } from "@/components/ui/tracing-beam/tracing-beam";
import { cards } from "@/data/cards";
import { features } from "@/data/features";
import { clientTestimonials, ownersTestimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <div>
      <BackgroundBoxed color="bg-gradient-to-b from-stone-700 to-stone-900 dark:from-stone-800 dark:to-stone-950">
        <h1
          className={cn(
            title({
              color: "green",
              size: "lg",
              class: "relative z-20",
            })
          )}
        >
          Pricing
        </h1>

        <p
          className={cn(
            paragraph({
              color: "white",
              class: "relative z-20",
            })
          )}
        >
          Simple, transparent pricing — built to scale with you.
        </p>
      </BackgroundBoxed>

      <TracingBeam className="flex gap-8 sm:gap-4 flex-wrap my-5 lg:my-20">
        <FocusCards cards={cards} />
      </TracingBeam>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.label}
            description={feature.description}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>

      <CallToAction />

      <AnimatedTestimonials testimonials={ownersTestimonials} />

      <InfiniteMovingCards
        items={clientTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
