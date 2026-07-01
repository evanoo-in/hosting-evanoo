import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { sslPlans } from "@/data/site";
import { Lock, ShieldCheck, Award, BadgeCheck } from "lucide-react";

export default function SSL() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="SSL Certificates"
        title={<>Trust, <span className="gradient-text">encrypted</span></>}
        description="DV, OV, EV and Wildcard certificates from globally-trusted CAs. Issued in minutes, backed by warranties up to $1.75M."
      />

      <Section className="!pt-4">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {sslPlans.map((p) => (
            <PricingCard
              key={p.name}
              plan={{
                name: p.name,
                tagline: p.desc,
                price: p.price,
                highlight: (p as any).highlight,
                features: p.features,
              }}
              ctaLabel="Get certificate"
            />
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">Prices shown are per year. Free Let's Encrypt SSL is included with every hosting plan.</p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why SSL" title="Encryption is table stakes" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Lock, t: "256-bit encryption", d: "Bank-grade TLS 1.3 with perfect forward secrecy." },
            { Icon: ShieldCheck, t: "Browser trust", d: "Trusted by 99.9% of desktop and mobile browsers." },
            { Icon: Award, t: "SEO boost", d: "Google ranks HTTPS sites higher — and warns on HTTP ones." },
            { Icon: BadgeCheck, t: "Customer trust", d: "Site seals and EV badges visibly boost conversions." },
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
