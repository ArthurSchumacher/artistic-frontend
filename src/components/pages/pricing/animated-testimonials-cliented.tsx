"use client";

import { SkeletonTestimonials } from "@/components/ui/skeleton/skeleton-testimonials";
import { Testimonial } from "@/types/testimonial/get-testimonial";
import dynamic from "next/dynamic";

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
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
