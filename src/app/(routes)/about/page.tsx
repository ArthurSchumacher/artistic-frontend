import { paragraph, title } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { TracingBeam } from "@/components/ui/tracing-beam/tracing-beam";
import { Cover } from "@/components/ui/cover/cover";
import { WorldClient } from "@/components/ui/globe/world-client";
import { globeConfig, sampleArcs } from "@/data/globe";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
  Skeleton,
} from "@/components/ui/cards/block-animated-card/block-animated-card";
import { BackgroundLines } from "@/components/ui/backgrounds/background-lines";
import { mobileWords, words } from "@/data/words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effects/typewriter-effect-smooth";

export default function AboutPage() {
  return (
    <TracingBeam className="px-7">
      <div className="max-w-6xl mx-auto antialiased pt-4 relative">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <Cover>
            <h1
              className={cn(
                title({
                  color: "cyan",
                  size: "lg",
                  class: "relative z-20 pointer-events-none",
                })
              )}
            >
              About Us
            </h1>
          </Cover>
          <div className="flex flex-col items-center justify-center">
            <span
              className={cn(
                paragraph({
                  color: "black",
                  class: "relative z-20 text-center",
                })
              )}
            >
              Cutting-edge software solutions with
            </span>
            <TypewriterEffectSmooth className="hidden sm:flex" words={words} />
            <TypewriterEffectSmooth className="flex sm:hidden" words={mobileWords} />
          </div>
        </BackgroundLines>
        <div className="flex gap-8 sm:gap-4 flex-wrap">
          <div className="flex-grow sm:flex-1 self-center">
            <p className={cn(paragraph({ size: "sm" }))}>
              At Artistic Club, we are a premier software house specializing in
              delivering bespoke digital solutions to global enterprises,
              ambitious startups, and visionary brands. With a focus on
              innovation, scalability, and exceptional user experience, we
              harness cutting-edge technologies to develop software that
              empowers businesses to lead in a rapidly evolving digital world.
            </p>

            <div className="flex gap-8 sm:gap-4 flex-wrap">
              <div className="flex-grow sm:flex-1">
                <WorldClient data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>

            <p className={cn(paragraph({ size: "sm" }))}>
              Our multidisciplinary team of engineers, designers, and
              strategists brings deep expertise across a range of
              industries—including finance, healthcare, retail, and
              technology—ensuring every project is driven by insight, precision,
              and excellence. From custom software development and enterprise
              systems to AI-driven platforms and cloud-native applications, we
              craft solutions that are robust, secure, and future-ready.
            </p>
          </div>
          <div className="flex-grow sm:flex-1">
            <Card className="shadow-input max-w-sm mx-auto p-4 rounded-md md:rounded-2xl md:p-8 bg-white border-stone-200 dark:bg-stone-800 dark:border-stone-600">
              <CardSkeletonContainer>
                <Skeleton />
              </CardSkeletonContainer>
              <CardTitle>Technologies we use.</CardTitle>
              <CardDescription>
                A card that showcases a set of tools that you use to create your
                product.
              </CardDescription>
            </Card>
          </div>
        </div>

        <div className="flex gap-8 sm:gap-4 flex-wrap mt-8 sm:mt-4">
          <div className="flex-grow sm:flex-1">
            <p className={cn(paragraph({ size: "sm" }))}>
              Driven by a commitment to quality and long-term partnership, we
              stand at the intersection of strategy, design, and
              technology—transforming complex challenges into elegant,
              high-performance software. Experience the craftsmanship of code.
              Experience Artistic Club.
            </p>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}
