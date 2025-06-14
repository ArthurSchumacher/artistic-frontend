import { cn } from "@/lib/utils";
import { paragraph } from "@/components/primitives";
import { IconSvgProps } from "@/interfaces";

interface TechTextProps {
  icon: React.ComponentType<IconSvgProps>;
  title: string;
  iconSize?: number;
}

export const TechText = ({ icon: Icon, title}: TechTextProps) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center",
        paragraph({ color: "black", size: "sm", class: "uppercase text-nowrap" })
      )}
    >
      <Icon className="text-black dark:text-white" />
      <p className="px-4">{title}</p>
    </div>
  );
};
