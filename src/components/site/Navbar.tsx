"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Cloud, ArrowRight } from "lucide-react";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";
// import logo from "../../../public/evanoo_logo.png"
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            {/* <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand shadow-[var(--shadow-glow)]">
              <Cloud className="h-5 w-5 text-white" />
            </span> */}
            {/* <Image alt="Evanoo Logo" className="h-9 w-9 rounded-full object-cover shadow-elegant" src="/evanoo_logo.png" /> */}
            <div className="h-9 w-9 rounded-full object-cover shadow-elegant relative overflow-hidden">
              <Image alt="Evanoo Logo" fill src="/evanoo_logo.png" className="object-cover" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              Evanoo<span className="text-muted-foreground font-normal"> Hosting</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => {
              // const active = pathname === n.to;
              const active =
                n.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(n.to);
              // const normalize = (path: string) => path.replace(/\/$/, "") || "/";
              // const active = normalize(pathname) === normalize(n.to);
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground bg-white/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/client/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Client Area
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              Buy Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            className="lg:hidden rounded-lg p-2 hover:bg-white/5 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/5 lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3">
              {nav.map((n, idx) => {
                const active =
                  n.to === "/"
                    ? pathname === "/"
                    : pathname.startsWith(n.to);
                return (
                  <Link
                    key={n.to}
                    href={n.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${idx !== 0 && "mt-1"} ${active ? "text-foreground bg-white/5" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
                  >
                    {n.label}
                  </Link>
                )
              })}
              <div className="mt-2 flex gap-2 border-t border-white/5 pt-3">
                <Link
                  href="/client/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-sm font-medium"
                >
                  Client Area
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg gradient-brand px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
