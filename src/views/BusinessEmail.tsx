import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { emailPlans } from "@/data/site";
import { Mail, ShieldAlert, Smartphone, Globe } from "lucide-react";

export default function BusinessEmail() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Business Email"
        title={<>Email that says <span className="gradient-text">you mean business</span></>}
        description="Professional email on your own domain with enterprise spam filtering, calendar, contacts and seamless mobile sync."
      />

      <Section className="!pt-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {emailPlans.map((p) => (
            <PricingCard
              key={p.name}
              plan={{
                name: p.name,
                tagline: "Per mailbox, billed monthly",
                price: p.price,
                perUser: true,
                highlight: (p as any).highlight,
                features: p.features,
              }}
              ctaLabel="Set up email"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Built for teams" title="Email people actually want to use" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Mail, t: "Webmail anywhere", d: "Fast, modern web client with full keyboard shortcuts." },
            { Icon: ShieldAlert, t: "Anti-spam & anti-phishing", d: "AI-driven filtering blocks 99.98% of unwanted mail." },
            { Icon: Smartphone, t: "Mobile sync", d: "IMAP, ActiveSync and IMAP IDLE for instant push." },
            { Icon: Globe, t: "Calendar & contacts", d: "CalDAV / CardDAV — works with iOS, Android, Outlook." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-xl p-6">
              <f.Icon className="h-6 w-6 text-[color:var(--brand)]" />
              <h3 className="mt-4 font-display font-semibold">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </SiteLayout>
  );
}
