import { EntityCounter } from "@/components/pages/dashboard/entity-counter";
import { cards } from "@/data/cards";
import { features, homeFeatures, securityFeatures } from "@/data/features";
import { products } from "@/data/products";
import { clientTestimonials, ownersTestimonials } from "@/data/testimonials";
import { users } from "@/data/users";
import { words } from "@/data/words";
import { MinimalFeature } from "@/types/feature/get-feature";
import { Testimonial } from "@/types/testimonial/get-testimonial";

export default async function SettingsPage() {
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
        </div>
        <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
          <EntityCounter
            entity_label="products"
            entity_count={products_count}
          />
        </div>
        <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
          <EntityCounter
            entity_label="pricing cards"
            entity_count={pricing_cards_count}
          />
        </div>
        <div className="h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
          <EntityCounter
            entity_label="about words"
            entity_count={about_words_count}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row sm:flex-1 gap-2">
        <div className="h-20 lg:h-full w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
          <EntityCounter
            entity_label="testimonials"
            entity_count={testimonials_count}
          />
        </div>
        <div className="h-20 lg:h-full w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900">
          <EntityCounter
            entity_label="features"
            entity_count={features_count}
          />
        </div>
      </div>
    </>
  );
}
