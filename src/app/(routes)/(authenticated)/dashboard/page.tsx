import { Dashboard } from "@/components/pages/dashboard/dashboard";
import { cards } from "@/data/cards";
import { features, homeFeatures, securityFeatures } from "@/data/features";
import { products } from "@/data/products";
import { clientTestimonials, ownersTestimonials } from "@/data/testimonials";
import { users } from "@/data/users";
import { words } from "@/data/words";
import { MinimalFeature } from "@/types/feature/get-feature";
import { Testimonial } from "@/types/testimonial/get-testimonial";

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

  return (
    <>
      <Dashboard
        users={users}
        users_count={1}
        products={products}
        products_count={1}
        cards={cards}
        pricing_cards_count={3}
        words={words}
        about_words_count={5}
        testimonials={testimonials}
        testimonials_count={7}
        features={minimalFeatures}
        features_count={16}
      />
    </>
  );
}
