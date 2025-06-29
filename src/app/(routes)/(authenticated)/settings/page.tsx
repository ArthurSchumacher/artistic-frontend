import { EntityButton } from "@/components/pages/settings/entity-button";
import { FeatureCreateForm } from "@/components/pages/settings/features/create-form";
import { FeatureDeleteForm } from "@/components/pages/settings/features/delete-form";
import { FeatureUpdateForm } from "@/components/pages/settings/features/update-form";
import { PricingCardCreateForm } from "@/components/pages/settings/pricing-cards/create-form";
import { PricingCardDeleteForm } from "@/components/pages/settings/pricing-cards/delete-form";
import { PricingCardUpdateForm } from "@/components/pages/settings/pricing-cards/update-form";
import { ProductCreateForm } from "@/components/pages/settings/products/create-form";
import { ProductDeleteForm } from "@/components/pages/settings/products/delete-form";
import { ProductUpdateForm } from "@/components/pages/settings/products/update-form";
import { TestimonialCreateForm } from "@/components/pages/settings/testimonials/create-form";
import { TestimonialDeleteForm } from "@/components/pages/settings/testimonials/delete-form";
import { TestimonialUpdateForm } from "@/components/pages/settings/testimonials/update-form";
import { UserCreateForm } from "@/components/pages/settings/users/create-form";
import { UserDeleteForm } from "@/components/pages/settings/users/delete-form";
import { UserUpdateForm } from "@/components/pages/settings/users/update-form";
import { WordCreateForm } from "@/components/pages/settings/words/create-form";
import { WordDeleteForm } from "@/components/pages/settings/words/delete-form";
import { WordUpdateForm } from "@/components/pages/settings/words/update-form";
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

  const roles = [
    "Admin",
    "User"
  ]

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <EntityButton
          entity_label="users"
          entity_counter={users_count}
          handleCreate={<UserCreateForm roles={roles} />}
          handleUpdate={<UserUpdateForm roles={roles} />}
          handleDelete={<UserDeleteForm />}
        />
        <EntityButton
          entity_label="products"
          entity_counter={products_count}
          handleCreate={<ProductCreateForm />}
          handleUpdate={<ProductUpdateForm />}
          handleDelete={<ProductDeleteForm />}
        />
        <EntityButton
          entity_label="pricing cards"
          entity_counter={pricing_cards_count}
          handleCreate={<PricingCardCreateForm />}
          handleUpdate={<PricingCardUpdateForm />}
          handleDelete={<PricingCardDeleteForm />}
        />
        <EntityButton
          entity_label="about words"
          entity_counter={about_words_count}
          handleCreate={<WordCreateForm />}
          handleUpdate={<WordUpdateForm />}
          handleDelete={<WordDeleteForm />}
        />
      </div>
      <div className="flex flex-col lg:flex-row sm:flex-1 gap-2">
        <EntityButton
          className="lg:h-full"
          entity_label="testimonials"
          entity_counter={testimonials_count}
          handleCreate={<TestimonialCreateForm />}
          handleUpdate={<TestimonialUpdateForm />}
          handleDelete={<TestimonialDeleteForm />}
        />
        <EntityButton
          className="lg:h-full"
          entity_label="features"
          entity_counter={features_count}
          handleCreate={<FeatureCreateForm />}
          handleUpdate={<FeatureUpdateForm />}
          handleDelete={<FeatureDeleteForm />}
        />
      </div>
    </>
  );
}
