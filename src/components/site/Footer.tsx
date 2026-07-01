import Link from "next/link";
import { Cloud, Github, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { footerNav } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[oklch(0.13_0.02_265)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand">
                <Cloud className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold">Evanoo Hosting</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Powering websites. Empowering businesses. Premium cloud hosting, domains, and
              business email — built by Evanoo Technologies.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerNav).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Evanoo Hosting, a brand of Evanoo Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            hosting.evanoo.in · Made with care in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
