"use client";
import { useSidebar } from "@/components/ui/sidebar/sidebar";
import { cn } from "@/lib/utils";
import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "motion/react";

export const LogoutButton = () => {
  const { open, animate } = useSidebar();

  return (
    <button
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2 cursor-pointer"
      )}
    >
      <IconArrowLeft className="h-5 w-5 shrink-0 text-stone-700 dark:text-stone-200" />

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-stone-700 dark:text-stone-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        Logout
      </motion.span>
    </button>
  );
};
