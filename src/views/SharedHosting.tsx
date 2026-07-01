"use client";

import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { BillingToggle, useBilling } from "@/components/site/BillingToggle";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { sharedPlans, faqs } from "@/data/site";
import { Check, X } from "lucide-react";

export default function SharedHosting() {
  const [billing, setBilling] = useBilling();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Shared Hosting"
        title={<>Production hosting <span className="gradient-text">from ₹99/month</span></>}
        description="Everything you need to launch — NVMe SSD, LiteSpeed, free SSL, free domain and a dashboard that doesn't get in your way."
      >
        <BillingToggle value={billing} onChange={setBilling} />
      </PageHero>

      <Section className="!pt-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {sharedPlans.map((p) => (
            <PricingCard key={p.name} plan={p} yearly={billing === "yearly"} ctaLabel="Order now" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Compare" title="Every feature, side by side" />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="py-3 font-medium text-muted-foreground">Feature</th>
                {sharedPlans.map((p) => (
                  <th key={p.name} className="py-3 text-center font-semibold">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Websites", "1", "Unlimited", "Unlimited"],
                ["NVMe Storage", "10 GB", "50 GB", "200 GB"],
                ["Bandwidth", "100 GB", "Unmetered", "Unmetered"],
                ["Free Domain", true, true, true],
                ["Free SSL", true, true, true],
                ["Daily Backups", true, true, "Hourly"],
                ["LiteSpeed Cache", true, true, true],
                ["Cloudflare CDN", false, true, "Premium"],
                ["Free Migration", true, true, true],
                ["Dedicated IP", false, false, true],
                ["WHMCS License", false, false, true],
                ["Priority Support", false, true, "Dedicated AM"],
              ].map((row) => (
                <tr key={row[0] as string} className="border-b border-white/5">
                  <td className="py-3 text-muted-foreground">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="py-3 text-center">
                      {cell === true ? <Check className="mx-auto h-4 w-4 text-[color:var(--success)]" /> :
                       cell === false ? <X className="mx-auto h-4 w-4 text-muted-foreground/40" /> :
                       <span>{cell as string}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Shared hosting questions" />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </Section>

      <CTA />
    </SiteLayout>
  );
}
