import { cn } from "@/lib/utils";
import { IconProps } from "@tabler/icons-react";

export const Feature = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-stone-200 dark:border-stone-600",
        (index === 0 || index === 4) && "lg:border-l border-l-stone-200 dark:border-stone-600",
        index < 4 && "lg:border-b border-b-stone-200 dark:border-stone-600"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-stone-100 dark:from-stone-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-stone-100 dark:from-stone-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-stone-600 dark:text-stone-400">
        <Icon size={32} className="text-stone-600 dark:text-stone-400" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-stone-300 dark:bg-stone-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-stone-800 dark:text-stone-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
