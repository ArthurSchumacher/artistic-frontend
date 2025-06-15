import { cn } from "@/lib/utils";
import { paragraph, subtitle } from "@/components/primitives";
import { User } from "@/types/user/get-user";
import { DataDialog } from "./data-dialog";
import {
  CaseLower,
  CircleFadingPlus,
  Component,
  Star,
  Users,
  WalletCards,
} from "lucide-react";
import { Card } from "@/types/card/get-card";
import { Product } from "@/types/product/get-product";
import { productColumns } from "./products/columns";
import { pricingCardsColumns } from "./pricing-cards/columns";
import { usersColumns } from "./users/columns";
import { Word } from "@/types/word/get-word";
import { Testimonial } from "@/types/testimonial/get-testimonial";
import { MinimalFeature } from "@/types/feature/get-feature";
import { wordsColumns } from "./words/columns";
import { testimonialsColumns } from "./testimonials/columns";
import { featuresColumns } from "./features/columns";

interface DashboardProps {
  users: User[];
  users_count: number;
  products: Product[];
  products_count: number;
  cards: Card[];
  pricing_cards_count: number;
  words: Word[];
  about_words_count: number;
  testimonials: Testimonial[];
  testimonials_count: number;
  features: MinimalFeature[];
  features_count: number;
}

export const Dashboard = ({
  users,
  users_count,
  products,
  products_count,
  cards,
  pricing_cards_count,
  words,
  about_words_count,
  testimonials,
  testimonials_count,
  features,
  features_count,
}: DashboardProps) => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border p-2 md:p-10 bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col items-center justify-center">
              <h2 className={cn(subtitle({ size: "sm" }))}>Users:</h2>
              <p
                className={cn(
                  paragraph({ color: "green", class: "font-semibold" })
                )}
              >
                {users_count}
              </p>
            </div>
            <DataDialog
              triggerIcon={<Users />}
              dialogTitle="Users data:"
              dialogDescription="Let's take a look at the users table to see the current list of registered users and their details."
              data={users}
              columns={usersColumns}
              filterBy="name"
            />
          </div>
          <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col items-center justify-center">
              <h2 className={cn(subtitle({ size: "sm" }))}>Products:</h2>
              <p
                className={cn(
                  paragraph({ color: "green", class: "font-semibold" })
                )}
              >
                {products_count}
              </p>
            </div>
            <DataDialog
              triggerIcon={<Component />}
              dialogTitle="Products data:"
              dialogDescription="Let's take a look at the products table to see the current list of registered products and their details."
              data={products}
              columns={productColumns}
              filterBy="label"
            />
          </div>
          <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col items-center justify-center">
              <h2 className={cn(subtitle({ size: "sm" }))}>Pricing cards:</h2>
              <p
                className={cn(
                  paragraph({ color: "green", class: "font-semibold" })
                )}
              >
                {pricing_cards_count}
              </p>
            </div>
            <DataDialog
              triggerIcon={<WalletCards />}
              dialogTitle="Pricing cards data:"
              dialogDescription="Let's take a look at the pricing cards table to see the current list of registered cards and their details."
              data={cards}
              columns={pricingCardsColumns}
              filterBy="label"
            />
          </div>
          <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col items-center justify-center">
              <h2 className={cn(subtitle({ size: "sm" }))}>About words:</h2>
              <p
                className={cn(
                  paragraph({ color: "green", class: "font-semibold" })
                )}
              >
                {about_words_count}
              </p>
            </div>
            <DataDialog
              triggerIcon={<CaseLower />}
              dialogTitle="Words data:"
              dialogDescription="Let's take a look at the words table to see the current list of registered words and their details."
              data={words}
              columns={wordsColumns}
              filterBy="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row sm:flex-1 gap-2">
          <div className="h-20 lg:h-full w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col items-center justify-center">
              <h2 className={cn(subtitle({ size: "sm" }))}>Testimonials:</h2>
              <p
                className={cn(
                  paragraph({ color: "green", class: "font-semibold" })
                )}
              >
                {testimonials_count}
              </p>
            </div>
            <DataDialog
              triggerIcon={<Star />}
              dialogTitle="Testimonials data:"
              dialogDescription="Let's take a look at the testimonials table to see the current list of registered testimonials and their details."
              data={testimonials}
              columns={testimonialsColumns}
              filterBy="name"
            />
          </div>
          <div className="h-20 lg:h-full w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col items-center justify-center">
              <h2 className={cn(subtitle({ size: "sm" }))}>Features:</h2>
              <p
                className={cn(
                  paragraph({ color: "green", class: "font-semibold" })
                )}
              >
                {features_count}
              </p>
            </div>
            <DataDialog
              triggerIcon={<CircleFadingPlus />}
              dialogTitle="Features data:"
              dialogDescription="Let's take a look at the features table to see the current list of registered features and their details."
              data={features}
              columns={featuresColumns}
              filterBy="label"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
