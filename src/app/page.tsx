import { HeroParallax } from "@/components/ui/hero/hero-parallax/hero-parallax";
import { products } from "@/data/products";

export default function Home() {
  return (
    <section>
      <HeroParallax products={products} />
    </section>
  );
}
