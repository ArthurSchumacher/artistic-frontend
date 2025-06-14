"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"
import { NavbarButton } from "@/components/ui/navbar/navbar-button"


export function ThemeSwitch() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme
  const isDark = currentTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <NavbarButton variant="secondary" onClick={toggleTheme}>
      {isDark ? (
        <Moon className="transition-all" />
      ) : (
        <Sun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </NavbarButton>
  )
}
