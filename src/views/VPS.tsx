import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { vpsPlans } from "@/data/site";
import { Cpu, MemoryStick, HardDrive, Network, Server, Wrench } from "lucide-react";

export default function VPS() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="VPS Hosting"
        title={<>Cloud VPS, <span className="gradient-text">built for power users</span></>}
        description="Pure KVM virtualization, NVMe storage, dedicated vCPUs and 1 Gbps networking. Spin up in 60 seconds and scale in one click."
      />

      <Section className="!pt-4">
        <div className="overflow-x-auto">
          <div className="grid min-w-[640px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vpsPlans.map((p) => (
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
                    `Bandwidth: ${p.bandwidth}`,
                    "1 Gbps network port",
                    "Full root / SSH access",
                    "Free weekly snapshots",
                    "1 IPv4 + /64 IPv6",
                  ],
                }}
                ctaLabel="Deploy now"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What's inside" title="Every VPS includes" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { Icon: Cpu, t: "Dedicated vCPU cores", d: "Intel Xeon Gold / AMD EPYC, never oversold." },
            { Icon: MemoryStick, t: "DDR4 ECC memory", d: "Hot-attachable, scale up without restart." },
            { Icon: HardDrive, t: "NVMe Gen-4 storage", d: "Up to 7 GB/s read, with RAID-10 redundancy." },
            { Icon: Network, t: "1 Gbps network", d: "Anti-DDoS up to 1 Tbps via Cloudflare Magic Transit." },
            { Icon: Server, t: "Choice of OS", d: "Ubuntu, Debian, AlmaLinux, Rocky, CentOS Stream, Windows." },
            { Icon: Wrench, t: "Snapshots & rescue", d: "Free weekly snapshots and one-click rescue mode." },
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
