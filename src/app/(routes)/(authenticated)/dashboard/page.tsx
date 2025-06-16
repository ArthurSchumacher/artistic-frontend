import { DataDialog } from "@/components/pages/dashboard/data-dialog";
import { EntityCounter } from "@/components/pages/dashboard/entity-counter";
import { featuresColumns } from "@/components/pages/dashboard/features/columns";
import { pricingCardsColumns } from "@/components/pages/dashboard/pricing-cards/columns";
import { productColumns } from "@/components/pages/dashboard/products/columns";
import { testimonialsColumns } from "@/components/pages/dashboard/testimonials/columns";
import { usersColumns } from "@/components/pages/dashboard/users/columns";
import { wordsColumns } from "@/components/pages/dashboard/words/columns";
import { cards } from "@/data/cards";
import { features, homeFeatures, securityFeatures } from "@/data/features";
import { products } from "@/data/products";
import { clientTestimonials, ownersTestimonials } from "@/data/testimonials";
import { users } from "@/data/users";
import { words } from "@/data/words";
import { MinimalFeature } from "@/types/feature/get-feature";
import { Testimonial } from "@/types/testimonial/get-testimonial";
import { CaseLower, CircleFadingPlus, Component, Star, Users, WalletCards } from "lucide-react";

export default async function DashboardPage() {
  const testimonials: Testimonial[] = [
    ...ownersTestimonials,
    ...clientTestimonials,
  ];
  
  const minimalFeatures: MinimalFeature[] = [
    ...features,
    ...homeFeatures,
    ...securityFeatures,
  ].map(({ id, label, description }) => ({ id, label, description }));

  const users_count: number = users.length;
  const products_count: number = products.length;
    const pricing_cards_count: number = cards.length;
  const about_words_count: number = words.length;
  const testimonials_count: number = testimonials.length;
  const features_count: number = minimalFeatures.length;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
          <EntityCounter entity_label="users" entity_count={users_count} />
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
          <EntityCounter
            entity_label="products"
            entity_count={products_count}
          />
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
          <EntityCounter
            entity_label="pricing cards"
            entity_count={pricing_cards_count}
          />
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
          <EntityCounter
            entity_label="about words"
            entity_count={about_words_count}
          />
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
          <EntityCounter
            entity_label="testimonials"
            entity_count={testimonials_count}
          />
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
          <EntityCounter
            entity_label="features"
            entity_count={features_count}
          />
          <DataDialog
            triggerIcon={<CircleFadingPlus />}
            dialogTitle="Features data:"
            dialogDescription="Let's take a look at the features table to see the current list of registered features and their details."
            data={minimalFeatures}
            columns={featuresColumns}
            filterBy="label"
          />
        </div>
      </div>
    </>
  );
}
