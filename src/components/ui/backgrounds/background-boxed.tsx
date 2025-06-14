import { cn } from "@/lib/utils";
import { Boxes } from "./boxes";

interface BackgroundBoxedProps {
  children?: React.ReactNode;
  color: string;
}

export const BackgroundBoxed = ({ color, children }: BackgroundBoxedProps) => {
  return (
    <div
      className={cn(
        "h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg",
        color,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none",
          color,
        )}
      />
      <Boxes />
      {children}
    </div>
  );
};
