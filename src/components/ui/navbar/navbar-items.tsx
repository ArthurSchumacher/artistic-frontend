"use client"
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

interface NavItemsProps {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-stone-600 transition duration-200 hover:text-stone-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-stone-600 dark:text-stone-300"
          key={`link-${idx}`}
          href={item.href}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-stone-200 dark:bg-stone-800 z-10"
            />
          )}
          <span className="relative z-20 font-light">{item.label}</span>
        </Link>
      ))}
    </motion.div>
  );
};
