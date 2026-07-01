import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { dedicatedPlans } from "@/data/site";
import { Cpu, Shield, Phone, Zap } from "lucide-react";

export default function Dedicated() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Dedicated Servers"
        title={<>Bare metal, <span className="gradient-text">enterprise-grade</span></>}
        description="Latest-gen Intel Xeon and AMD EPYC platforms with NVMe storage, 10 Gbps uplinks and a dedicated support engineer assigned to your account."
      />

      <Section className="!pt-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {dedicatedPlans.map((p) => (
            <PricingCard
              key={p.name}
              plan={{
                name: p.name,
                tagline: p.cpu,
                price: p.price,
                highlight: (p as any).highlight,
                features: [
                  `CPU: ${p.cpu}`,
                  `RAM: ${p.ram}`,
                  `Storage: ${p.storage}`,
                  `Network: ${p.bandwidth}`,
                  "5 dedicated IPv4 + /48 IPv6",
                  "Free IPMI / KVM-over-IP",
                  "Daily off-site backups",
                  "24×7 onsite hands & eyes",
                ],
              }}
              ctaLabel="Request server"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Enterprise" title="Why teams choose Evanoo bare metal" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Cpu, t: "Custom builds", d: "Configure CPU, RAM, NVMe, GPUs and network in minutes." },
            { Icon: Zap, t: "10 Gbps networking", d: "Unmetered uplinks with sub-millisecond regional latency." },
            { Icon: Shield, t: "DDoS Tier-IV", d: "1 Tbps mitigation via Cloudflare Magic Transit." },
            { Icon: Phone, t: "Dedicated engineer", d: "Named technical account manager + 15-min response SLA." },
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
