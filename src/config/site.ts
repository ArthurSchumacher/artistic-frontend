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
  links: {
    instagram: "https://www.instagram.com/arthur.schmacher/",
    linkedin: "https://www.linkedin.com/in/arthur-schumacher/",
    contact: "/contact",
    login: "/login",
    home: "/",
  },
};
