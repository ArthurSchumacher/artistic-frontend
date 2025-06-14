import Link from "next/link";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { Cover } from "@/components/ui/cover/cover";
import { Button } from "@/components/ui/button/button";

export const CallToAction = async () => {
  return (
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1
        className={cn(
          title({
            class: "flex-grow sm:pr-16",
            size: "sm",
          })
        )}
      >
        Transform Your Ideas into Cutting-Edge Software &mdash; Let's Build
        Something Amazing Together!
      </h1>
      <Cover>
        <Button type="button" as={Link} href={siteConfig.links.contact}>
          Contact
        </Button>
      </Cover>
    </div>
  );
};
