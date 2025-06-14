import { Logo } from "@/components/icons/logo-icon";
import { logo } from "@/components/primitives";
import { Cover } from "@/components/ui/cover/cover";
import { fontMono } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ArtisticClubLogo = () => {
  return (
    <Link
      href={siteConfig.links.home}
      className={cn(
        logo(),
        "z-20 flex items-center space-x-2 px-2 py-1",
        fontMono.className
      )}
    >
      <Logo />
      <Cover>
        <p>Artistic</p>
      </Cover>
    </Link>
  );
};
