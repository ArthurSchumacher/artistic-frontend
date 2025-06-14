"use client";

import { SkeletonTestimonials } from "@/components/ui/skeleton/skeleton-testimonials";
import { OwnerTestimonial } from "@/types/owner-testimonial/get-owner-testimonial";
import dynamic from "next/dynamic";

interface AnimatedTestimonialsProps {
  testimonials: OwnerTestimonial[];
  autoplay?: boolean;
};

export const AnimatedTestimonials = dynamic<AnimatedTestimonialsProps>(
  () =>
    import("../../ui/testimonials/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials
    ),
  {
    ssr: false,
    loading: () => <SkeletonTestimonials />,
  }
);
