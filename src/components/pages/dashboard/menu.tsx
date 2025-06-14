"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/sidebar/sidebar";
import { siteConfig } from "@/config/site";
import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "motion/react";
import { LogoutButton } from "./logout-button";

interface MenuProps {
  children: React.ReactNode;
}

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
              {siteConfig.dashboardItems.map((link, idx) => (
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
