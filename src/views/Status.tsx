import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  { name: "Shared Hosting", status: "operational" },
  { name: "WordPress Hosting", status: "operational" },
  { name: "VPS Platform", status: "operational" },
  { name: "Dedicated Servers", status: "operational" },
  { name: "Business Email", status: "operational" },
  { name: "Domain Registration", status: "operational" },
  { name: "DNS (Anycast)", status: "operational" },
  { name: "Client Area / Billing", status: "operational" },
  { name: "Cloudflare Edge", status: "operational" },
];

const regions = ["Mumbai (in-bom-1)", "Bengaluru (in-blr-1)", "Singapore (sg-sin-1)", "Frankfurt (de-fra-1)", "London (uk-lhr-1)", "New York (us-nyc-1)", "São Paulo (br-gru-1)"];

const incidents = [
  { date: "Jun 22, 2026", title: "Scheduled maintenance — Frankfurt VPS hypervisor upgrade", status: "Completed", desc: "All workloads were live-migrated. Zero downtime observed." },
  { date: "Jun 14, 2026", title: "Brief mail-queue delay (12 min) — Mumbai SMTP relay", status: "Resolved", desc: "An upstream RBL miscategorization caused a 12-minute outbound delay." },
  { date: "May 28, 2026", title: "Scheduled maintenance — DNS anycast network expansion", status: "Completed", desc: "Added 14 new POPs. Resolution times improved 22% in APAC." },
];

export default function Status() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Status"
        title={<><span className="gradient-text">All systems operational</span></>}
        description="Real-time status of every Evanoo service, region and dependency."
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--success)]/30 bg-[color:var(--success)]/10 px-4 py-1.5 text-sm text-[color:var(--success)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--success)] animate-pulse" />
          99.99% uptime in the last 30 days
        </div>
      </PageHero>

      <Section className="!pt-4">
        <div className="grid gap-3">
          {services.map((s) => (
            <div key={s.name} className="glass flex items-center justify-between rounded-xl p-4">
              <span className="font-medium">{s.name}</span>
              <span className="inline-flex items-center gap-2 text-sm text-[color:var(--success)]">
                <CheckCircle2 className="h-4 w-4" /> Operational
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-bold">Network & data centers</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r} className="glass flex items-center justify-between rounded-xl p-4">
              <span className="text-sm">{r}</span>
              <span className="text-xs text-[color:var(--success)]">● Online</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-bold">Recent incidents & maintenance</h2>
        <div className="mt-6 space-y-3">
          {incidents.map((i) => (
            <div key={i.title} className="glass rounded-xl p-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{i.date}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--success)]/15 px-2 py-0.5 text-[color:var(--success)]">
                  <AlertCircle className="h-3 w-3" /> {i.status}
                </span>
              </div>
              <h3 className="mt-2 font-display font-semibold">{i.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
