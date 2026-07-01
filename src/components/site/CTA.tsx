import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./Layout";

export function CTA({
  title = "Ready to power your next big idea?",
  desc = "Spin up production-grade hosting in under 60 seconds. 30-day money-back guarantee on every plan.",
  primary = { to: "/pricing", label: "View Pricing" },
  secondary = { to: "/contact", label: "Talk to sales" },
}: {
  title?: string;
  desc?: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl glass p-10 text-center sm:p-16">
        <div className="absolute inset-0 -z-10 hero-bg opacity-80" />
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{desc}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href={primary.to}
            className="inline-flex items-center gap-1.5 rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            {primary.label} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondary.to}
            className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </Section>
  );
}
