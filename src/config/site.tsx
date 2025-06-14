import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Artistic Club",
  description: "Driven by a commitment to quality and long-term partnership, we stand at the intersection of strategy, design, and technology—transforming complex challenges into elegant, high-performance software.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  dashboardItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-stone-700 dark:text-stone-200" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-stone-700 dark:text-stone-200" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-stone-700 dark:text-stone-200" />
      ),
    },
  ],
  links: {
    instagram: "https://www.instagram.com/arthur.schmacher/",
    linkedin: "https://www.linkedin.com/in/arthur-schumacher/",
    contact: "/contact",
    login: "/login",
    home: "/",
  },
};
