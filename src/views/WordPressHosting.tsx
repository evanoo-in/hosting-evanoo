"use client";

import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { BillingToggle, useBilling } from "@/components/site/BillingToggle";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { wpPlans } from "@/data/site";
import { Zap, Move, Shield, Gauge } from "lucide-react";

export default function WordPressHosting() {
  const [billing, setBilling] = useBilling();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="WordPress Hosting"
        title={<>WordPress, <span className="gradient-text">optimized to the metal</span></>}
        description="One-click installs, automatic core updates, daily malware scans and a Cloudflare-fronted LiteSpeed stack tuned specifically for WordPress."
      />

      <Section className="!pt-4">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Zap, t: "12× faster", d: "LiteSpeed + LSCache + Object Cache." },
            { Icon: Gauge, t: "Auto-tuned PHP", d: "PHP 8.3, OPcache, JIT enabled by default." },
            { Icon: Shield, t: "Malware shield", d: "Real-time scanning + automatic cleanup." },
            { Icon: Move, t: "Free migration", d: "Our team moves your site in under 24h." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-xl p-5">
              <f.Icon className="h-5 w-5 text-[color:var(--brand)]" />
              <h3 className="mt-3 font-display font-semibold">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Speed" title="See the difference, in numbers" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { label: "TTFB", evanoo: "120 ms", others: "640 ms" },
            { label: "LCP", evanoo: "0.9 s", others: "3.2 s" },
            { label: "Lighthouse", evanoo: "98 / 100", others: "62 / 100" },
          ].map((m) => (
            <div key={m.label} className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-muted-foreground">{m.label}</p>
              <p className="mt-2 font-display text-3xl font-bold gradient-text">{m.evanoo}</p>
              <p className="mt-2 text-xs text-muted-foreground">vs {m.others} on legacy hosts</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex justify-center mb-8">
          <BillingToggle value={billing} onChange={setBilling} />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {wpPlans.map((p) => {
            const price = billing === "yearly" ? p.yearly : p.monthly;
            return (
              <PricingCard
                key={p.name}
                plan={{
                  name: p.name,
                  tagline: p.sites,
                  price,
                  highlight: (p as any).highlight,
                  features: [
                    p.sites,
                    p.storage,
                    `${p.visits} visits`,
                    "Free SSL + CDN",
                    "LiteSpeed Cache + Object Cache",
                    "Automatic WordPress updates",
                    "Daily backups + staging",
                    "Free migration",
                    "24×7 WordPress-expert support",
                  ],
                }}
                ctaLabel="Get started"
              />
            );
          })}
        </div>
      </Section>

      <CTA />
    </SiteLayout>
  );
}
