import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { stats, integrations } from "@/data/site";
import { Target, Eye, Heart, Cpu } from "lucide-react";

export default function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Evanoo"
        title={<>Infrastructure built by <span className="gradient-text">people who ship</span></>}
        description="We're engineers, sysadmins and entrepreneurs who got tired of slow, overpriced hosting. So we built our own — and opened it to the world."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { Icon: Target, t: "Mission", d: "Make world-class hosting infrastructure radically simple and affordable for every business — from a one-person studio to a 1,000-engineer enterprise." },
            { Icon: Eye, t: "Vision", d: "Be the default cloud for the next million Indian and global businesses to come online, with infrastructure that fades into the background." },
            { Icon: Heart, t: "Values", d: "Engineers in support. Transparent pricing. No dark patterns. Refunds without an argument. We treat customers the way we'd want to be treated." },
          ].map((v) => (
            <div key={v.t} className="glass rounded-2xl p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand">
                <v.Icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="By the numbers" title="A platform you can rely on" />
        <div className="mt-10 grid gap-6 rounded-3xl glass p-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold gradient-text">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">Technology</span>
            <h2 className="mt-2 font-display text-3xl font-bold">A stack that scales with you</h2>
            <p className="mt-4 text-muted-foreground">
              Evanoo is built on KVM virtualization, NVMe Gen-4 storage, LiteSpeed Enterprise,
              Cloudflare Enterprise CDN, BGP-anycast DNS and a 100% in-house control plane.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Intel Xeon Scalable", "AMD EPYC Genoa", "NVMe Gen-4 SSD", "DDR5 ECC Memory", "10/40/100 Gbps networking", "Cloudflare Magic Transit", "Anycast DNS", "ISO 27001 audited"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Cpu className="h-4 w-4 text-[color:var(--brand)]" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold">Powering the platform</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {integrations.map((i) => (
                <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">{i}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTA title="Want to join the team?" desc="We're always looking for sysadmins, network engineers and product folks. Drop us a line." primary={{ to: "/contact", label: "Get in touch" }} secondary={{ to: "/blog", label: "Read our blog" }} />
    </SiteLayout>
  );
}
