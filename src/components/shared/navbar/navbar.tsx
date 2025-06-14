"use client";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { ArtisticClubLogo } from "../logo/logo";
import { ThemeSwitch } from "./theme-switch";
import { Navbar as UINavbar } from "@/components/ui/navbar/navbar";
import { NavBody } from "@/components/ui/navbar/navbar-body";
import { NavItems } from "@/components/ui/navbar/navbar-items";
import { NavbarButton } from "@/components/ui/navbar/navbar-button";
import { MobileNav } from "@/components/ui/navbar/mobile-navbar";
import { MobileNavHeader } from "@/components/ui/navbar/mobile-navbar-header";
import { MobileNavMenu } from "@/components/ui/navbar/mobile-navbar-menu";
import { MobileNavToggle } from "@/components/ui/navbar/mobile-navbar-toggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <UINavbar>
        <NavBody>
          <ArtisticClubLogo />
          <NavItems items={siteConfig.navItems} />
          <div className="flex items-center">
            <NavbarButton variant="secondary" className="font-light">
              Login
            </NavbarButton>
            <NavbarButton variant="primary" className="font-light">
              Book a call
            </NavbarButton>
            <ThemeSwitch />
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <ArtisticClubLogo />
            <div className="flex items-center">
              <ThemeSwitch />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {siteConfig.navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.label}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </UINavbar>
    </div>
  );
}
