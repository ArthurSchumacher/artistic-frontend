import { Button } from "@/components/ui/button/cta-button";
import { siteConfig } from "@/config/site";
import { CheckIcon, CircleCheckBigIcon, CircleCheckIcon } from "lucide-react";
import Link from "next/link";

export const PricingCards = () => {
  return (
    <div className="flex flex-wrap">
      <div className="p-4 xl:w-1/3 w-full">
        <div className="h-full p-6 rounded-lg border-2 bg-stone-100 border-stone-500 dark:border-stone-300 dark:bg-stone-900 flex flex-col relative overflow-hidden shadow-lg">
          <span className="bg-stone-500 dark:bg-stone-300 text-white dark:text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
          <h2 className="text-sm tracking-widest  mb-1 font-medium">PRO</h2>
          <h1 className="text-5xl text-stone-900 dark:text-stone-50 leading-none flex items-center pb-4 mb-4 border-b border-stone-200">
            <span>$999</span>
          </h1>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Tumeric plaid portland
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-6 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Mixtape chillwave tumeric
          </p>
          <Button
            className="mt-auto w-full"
            type="button"
            as={Link}
            href={siteConfig.links.contact}
          >
            Contact
          </Button>
          <p className="text-xs text-stone-500 mt-3">
            Prices may vary depending on the complexity of the project.
          </p>
        </div>
      </div>
      <div className="p-4 xl:w-1/3 w-full">
        <div className="h-full p-6 rounded-lg border-2 bg-stone-100 dark:bg-stone-900 border-stone-200 dark:border-stone-700 flex flex-col relative overflow-hidden shadow-input">
          <h2 className="text-sm tracking-widest mb-1 font-medium">BUSINESS</h2>
          <h1 className="text-5xl text-stone-900 dark:text-stone-50 leading-none flex items-center pb-4 mb-4 border-b border-stone-200">
            <span>$1999</span>
          </h1>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Tumeric plaid portland
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-6 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Mixtape chillwave tumeric
          </p>
          <Button
            className="mt-auto w-full"
            type="button"
            as={Link}
            href={siteConfig.links.contact}
          >
            Contact
          </Button>
          <p className="text-xs text-stone-500 mt-3">
            Prices may vary depending on the complexity of the project.
          </p>
        </div>
      </div>
      <div className="p-4 xl:w-1/3 w-full">
        <div className="h-full p-6 rounded-lg border-2 bg-stone-100 dark:bg-stone-900 border-stone-200 dark:border-stone-700 flex flex-col relative overflow-hidden shadow-input">
          <h2 className="text-sm tracking-widest mb-1 font-medium">SPECIAL</h2>
          <h1 className="text-5xl text-stone-900 dark:text-stone-50 leading-none flex items-center pb-4 mb-4 border-b border-stone-200">
            <span>$2999</span>
          </h1>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Tumeric plaid portland
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-2 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-stone-600 dark:text-stone-300 mb-6 text-xs">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0">
              <CircleCheckIcon />
            </span>
            Mixtape chillwave tumeric
          </p>
          <Button
            className="mt-auto w-full"
            type="button"
            as={Link}
            href={siteConfig.links.contact}
          >
            Contact
          </Button>
          <p className="text-xs text-stone-500 mt-3">
            Prices may vary depending on the complexity of the project.
          </p>
        </div>
      </div>
    </div>
  );
};
