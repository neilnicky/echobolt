"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Settings, Layout } from "lucide-react"

const items = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: BarChart3
  },
  {
    title: "Websites",
    href: "/dashboard/websites",
    icon: Layout
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}