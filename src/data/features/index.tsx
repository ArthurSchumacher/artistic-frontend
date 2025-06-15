import { Feature } from "@/types/feature/get-feature";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { SkeletonFour } from "@/components/ui/skeleton/skeleton-four";
import { SkeletonOne } from "@/components/ui/skeleton/skeleton-one";
import { SkeletonTwo } from "@/components/ui/skeleton/skeleton-two";

export const features: Feature[] = [
  {
    id: 1,
    label: "Built for enterprises",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: IconTerminal2,
  },
  {
    id: 2,
    label: "Ease of use",
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: IconEaseInOut,
  },
  {
    id: 3,
    label: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: IconCurrencyDollar,
  },
  {
    id: 4,
    label: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: IconCloud,
  },
  {
    id: 5,
    label: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: IconRouteAltLeft,
  },
  {
    id: 6,
    label: "24/7 Customer Support",
    description:
      "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: IconHelp,
  },
  {
    id: 7,
    label: "Money back guarantee",
    description: "If you donot like EveryAI, we will convince you to like us.",
    icon: IconAdjustmentsBolt,
  },
  {
    id: 8,
    label: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: IconHeart,
  },
];

export const homeFeatures: Feature[] = [
  {
    id: 1,
    label: "Track clients effectively",
    description:
      "Track and manage your clients with ease using your preferred e-mail provider.",
    skeleton: <SkeletonOne imgSrc="/assets/1.png" />,
    className:
      "col-span-1 lg:col-span-4 border-b lg:border-r border-stone-200 dark:border-stone-600",
  },
  {
    id: 2,
    label: "Capture pictures",
    description: "Capture stunning photos effortlessly using our technology.",
    skeleton: <SkeletonTwo />,
    className:
      "border-b col-span-1 lg:col-span-2 border-stone-200 dark:border-stone-600",
  },
  {
    id: 3,
    label: "Growth through strategic marketing.",
    description:
      "Data-driven marketing strategies tailored to their goals, analytics, and performance to maximize results.",
    skeleton: <SkeletonOne imgSrc="/assets/damn.jpg" />,
    className:
      "col-span-1 lg:col-span-3 lg:border-r border-stone-200 dark:border-stone-600",
  },
  {
    id: 4,
    label: "Deploy in seconds",
    description:
      "With our blazing fast cloud services, you can deploy your model in seconds.",
    skeleton: <SkeletonFour />,
    className: "col-span-1 lg:col-span-3 border-b lg:border-none",
  },
];

export const securityFeatures: Feature[] = [
  {
    id: 1,
    label: "HIPAA, SOC2 and LGPD Compliant",
    description:
      "Our applications are HIPAA, SOC2 and LGPD compliant, your data is safe with us, always.",
  },
  {
    id: 2,
    label: "Advanced Analytics",
    description:
      "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
  },
  {
    id: 3,
    label: "Audience Targeting",
    description:
      "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
  },
  {
    id: 4,
    label: "Customizable Templates",
    description:
      "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
  },
];
