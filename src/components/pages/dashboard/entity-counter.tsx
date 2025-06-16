import { paragraph, subtitle } from "@/components/primitives";
import { cn } from "@/lib/utils";

interface EntityCounterProps {
    entity_label: string;
    entity_count: number;
}

export const EntityCounter = ({entity_label, entity_count}: EntityCounterProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className={cn(subtitle({ size: "sm", class: "capitalize" }))}>{entity_label}:</h2>
      <p className={cn(paragraph({ color: "green", class: "font-semibold" }))}>
        {entity_count}
      </p>
    </div>
  );
};
