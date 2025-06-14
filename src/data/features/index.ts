import { Feature } from "@/types/feature/get-feature";
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconHeart, IconHelp, IconRouteAltLeft, IconTerminal2 } from "@tabler/icons-react";

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
        description:
            "If you donot like EveryAI, we will convince you to like us.",
        icon: IconAdjustmentsBolt,
    },
    {
        id: 8,
        label: "And everything else",
        description: "I just ran out of copy ideas. Accept my sincere apologies",
        icon: IconHeart,
    },
];