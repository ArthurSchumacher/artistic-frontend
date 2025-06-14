import { tv } from "tailwind-variants";

export const logo = tv({
  base: "text-inherit",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-white dark:to-stone-400",
      black: "from-black to-stone-900 dark:from-stone-200 dark:to-white",
      white: "from-stone-200 to-white",
    },
    size: {
      sm: "text-xl"
    }
  },
  defaultVariants: {
    color: "black",
    size: "sm"
  },
});

export const paragraph = tv({
  base: "text-justify font-light",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-white dark:to-stone-400",
      black: "from-black to-stone-900 dark:from-stone-200 dark:to-white",
      white: "from-stone-200 to-white",
    },
    size: {
      sm: "text-sm lg:text-sm",
      md: "text-base md:text-xl",
      lg: "text-sm lg:text-base"
    }

  },
  defaultVariants: {
    size: "lg"
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        "black",
        "white"
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const title = tv({
  base: "tracking-tight leading-relaxed uppercase font-light inline",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-white dark:to-stone-400",
      black: "from-black to-stone-900 dark:from-stone-200 dark:to-white",
      white: "from-stone-200 to-white",
    },
    size: {
      sm: "text-lg lg:text-xl",
      md: "text-2xl md:text-3xl",
      lg: "text-2xl lg:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "sm",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        "black",
        "white",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});