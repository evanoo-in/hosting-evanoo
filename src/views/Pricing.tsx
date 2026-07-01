"use client";

import Link from "next/link";
import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { BillingToggle, useBilling } from "@/components/site/BillingToggle";
import { FAQ } from "@/components/site/FAQ";
import { SectionHeading } from "@/components/site/SectionHeading";
import { sharedPlans, faqs } from "@/data/site";
import { Phone } from "lucide-react";

export default function Pricing() {
  const [billing, setBilling] = useBilling();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title={<>Simple pricing, <span className="gradient-text">serious value</span></>}
        description="Pick a plan, switch billing cycle, scale up or down anytime. No setup fees. 30-day money-back guarantee."
      >
        <BillingToggle value={billing} onChange={setBilling} />
      </PageHero>

      <Section className="!pt-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {sharedPlans.map((p) => (
            <PricingCard key={p.name} plan={p} yearly={billing === "yearly"} ctaLabel="Get started" />
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass rounded-3xl p-10 sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
                <Phone className="h-3.5 w-3.5" /> Enterprise
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold">Need more horsepower?</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Custom infrastructure, dedicated hardware, private cloud, SOC-2 compliance support
                and a named technical account manager.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]">
              Contact sales
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Pricing & billing" />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </Section>
    </SiteLayout>
  );
}
