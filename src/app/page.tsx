import { FramerMotionIcon } from "@/components/icons/framer-motion-icon";
import { NestJSIcon } from "@/components/icons/nest-js-icon";
import { NextJSIcon } from "@/components/icons/next-js-icon";
import { ReactJSIcon } from "@/components/icons/react-js-icon";
import { TailWindCSSIcon } from "@/components/icons/tailwindcss-icon";
import { TechText } from "@/components/pages/home/tech-text";
import { paragraph, title } from "@/components/primitives";
import { CallToAction } from "@/components/shared/call-to-action";
import { GridDesign } from "@/components/ui/backgrounds/background-grided";
import { FeatureCard } from "@/components/ui/cards/feature-card/feature-card";
import { FeatureDescription } from "@/components/ui/cards/feature-card/feature-description";
import { FeatureTitle } from "@/components/ui/cards/feature-card/feature-title";
import { HeroParallax } from "@/components/ui/hero/hero-parallax/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/testimonials/infinite-moving-cards";
import { AnimatedTooltip } from "@/components/ui/tooltpis/animated-tooltips";
import { homeFeatures, securityFeatures } from "@/data/features";
import { products } from "@/data/products";
import { clientTestimonials } from "@/data/testimonials";
import { users } from "@/data/users";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section>
      <HeroParallax products={products} />

      <div className="p-8 sm:p-16">
        <div className="relative z-20 max-w-7xl mx-auto my-10 lg:my-40">
          <div className="px-8 text-center">
            <h4
              className={cn(
                title({
                  class: "max-w-5xl lg:leading-tight",
                  size: "md",
                  color: "black",
                })
              )}
            >
              All-in-One tools for growth, speed, and simplicity
            </h4>

            <p
              className={cn(
                paragraph({
                  class: "max-w-2xl my-4 mx-auto text-center font-extralight",
                })
              )}
            >
              Capture photos, track clients, deploy in seconds, and grow with
              data-driven marketing—everything you need, streamlined for
              performance.
            </p>
          </div>

          <div className="relative ">
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md md:rounded-2xl bg-white border-stone-200 dark:bg-stone-800 dark:border-stone-600">
              {homeFeatures.map((feature) => (
                <FeatureCard key={feature.id} className={feature.className}>
                  <FeatureTitle>{feature.label}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                  <div className=" h-full w-full">{feature.skeleton}</div>
                </FeatureCard>
              ))}
            </div>
          </div>
        </div>

        <CallToAction />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto my-10 lg:my-40">
          {securityFeatures.map((feature) => (
            <div
              key={feature.id}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
            >
              <GridDesign size={20} />
              <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                {feature.label}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <div className="flex flex-col items-start">
            <p
              className={cn(
                paragraph({
                  color: "black",
                  size: "sm",
                  class: "mb-4 text-wrap sm:text-nowrap",
                })
              )}
            >
              Trusted by Founders and Entrepreneurs from all over the world.
            </p>
            <div className="flex flex-row">
              <AnimatedTooltip items={users} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap">
            <TechText icon={NextJSIcon} title="next.js" />
            <TechText icon={ReactJSIcon} title="react" />
            <TechText icon={TailWindCSSIcon} title="tailwind css" />
            <TechText icon={FramerMotionIcon} title="framer motion" />
            <TechText icon={NestJSIcon} title="nest" />
          </div>
        </div>

        <div className="my-10 lg:my-40">
          <InfiniteMovingCards
            items={clientTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
