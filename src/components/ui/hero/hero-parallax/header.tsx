import { paragraph, title } from "@/components/primitives";
import { Cover } from "../../cover/cover";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className={cn(title({ size: "lg" }))}>
        <Cover>
          The Artistic <br /> development studio
        </Cover>
      </h1>
      <p className={cn(paragraph({ size: "md", class: "max-w-2xl mt-8", color: "black" }))}>
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        products.
      </p>
    </div>
  );
};
