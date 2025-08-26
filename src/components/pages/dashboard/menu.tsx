"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/sidebar/sidebar";
import { LogoutButton } from "./logout-button";
import { IconUserBolt } from "@tabler/icons-react";
import { CircleFadingPlus } from "lucide-react";

interface MenuProps {
  children: React.ReactNode;
}

export const dashboardItems = [
  {
    label: "Profile",
    href: "/profile",
    icon: (
      <IconUserBolt className="h-5 w-5 shrink-0 text-stone-700 dark:text-stone-200" />
    ),
  },
  {
    label: "Features",
    href: "/features",
    icon: (
      <CircleFadingPlus className="h-5 w-5 shrink-0 text-stone-700 dark:text-stone-200" />
    ),
  },
];

export const Menu = ({ children }: MenuProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border md:flex-row bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700",
        "h-[60vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="my-8 flex flex-col gap-2">
              {dashboardItems.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>

            <LogoutButton />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
};
