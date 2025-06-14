import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArtisticClubLogo } from "./logo";
import { cn } from "@/lib/utils";

export const Footer = async () => {
  return (
    <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <ArtisticClubLogo/>
      <p
        className={cn(
          "sm:py-2 sm:mt-0 mt-4",
          "sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-stone-300",
          "text-sm font-light text-stone-500",
        )}
      >
        © 2025 Artistic.club —
        <Link
          href={siteConfig.links.instagram}
          className={cn("ml-1", "text-sm font-light text-stone-500")}
          rel="noopener noreferrer"
          target="_blank"
        >
          @arthur.schmacher
        </Link>
      </p>
      {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href={siteConfig.links.instagram}>
          <Instagram />
        </Link>
      </span> */}
    </footer>
  );
};
