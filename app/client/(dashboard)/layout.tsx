"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cloud, LayoutDashboard, FileText, Globe, Server, LifeBuoy, Download, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const clientNav = [
  { href: "/client/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { href: "/client/invoices", label: "Invoices", Icon: FileText },
  { href: "/client/domains", label: "Domains", Icon: Globe },
  { href: "/client/hosting", label: "Hosting", Icon: Server },
  { href: "/client/tickets", label: "Support Tickets", Icon: LifeBuoy },
  { href: "/client/downloads", label: "Downloads", Icon: Download },
  { href: "/client/profile", label: "Profile", Icon: User },
];

export default function ClientDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[oklch(0.13_0.02_265)]">
      <aside className="hidden w-64 border-r border-white/5 bg-[oklch(0.16_0.025_265)] p-4 lg:block">
        <Link href="/" className="flex items-center gap-2 px-2 py-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg gradient-brand">
            <Cloud className="h-4 w-4 text-white" />
          </span>
          <span className="font-display font-bold">Evanoo</span>
        </Link>
        <nav className="mt-4 space-y-1">
          {clientNav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === n.href
                  ? "gradient-brand text-white"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <n.Icon className="h-4 w-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/client/login"
          className="mt-8 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </Link>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-white/5 bg-[oklch(0.16_0.025_265)] px-6 py-4">
          <h1 className="font-display text-lg font-semibold">Client Area</h1>
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">
            ← Back to site
          </Link>
        </header>
        <div className="p-6 lg:p-10">{children}</div>
      </div>
    </div>
  );
}
