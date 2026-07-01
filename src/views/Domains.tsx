import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { DomainSearch } from "@/components/site/DomainSearch";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { domainPrices } from "@/data/site";
import { ArrowRightLeft, Crown, Shield, Globe } from "lucide-react";

export default function Domains() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Domains"
        title={<>Find a name <span className="gradient-text">worth typing</span></>}
        description="Search 400+ TLDs with free WHOIS privacy, instant DNS propagation and one-click connect to your Evanoo hosting account."
      >
        <div className="mx-auto mt-6 max-w-3xl">
          <DomainSearch />
        </div>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Pricing" title="Honest, wholesale pricing" />
        <div className="mt-10 overflow-x-auto glass rounded-2xl">
          <table className="w-full min-w-[600px] text-sm">
            <thead className="border-b border-white/10 text-left">
              <tr>
                <th className="px-6 py-4 font-medium text-muted-foreground">TLD</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Register</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Renew</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Transfer</th>
              </tr>
            </thead>
            <tbody>
              {domainPrices.map((d) => (
                <tr key={d.tld} className="border-b border-white/5 last:border-0">
                  <td className="px-6 py-4 font-semibold">
                    {d.tld}
                    {(d as any).popular && <span className="ml-2 rounded-full bg-[color:var(--brand)]/20 px-2 py-0.5 text-[10px] font-semibold text-[color:var(--brand)]">POPULAR</span>}
                  </td>
                  <td className="px-6 py-4">₹{d.reg}/yr</td>
                  <td className="px-6 py-4">₹{d.renew}/yr</td>
                  <td className="px-6 py-4">₹{d.transfer}/yr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Globe, t: "400+ TLDs", d: "From .com and .in to .ai, .dev and country-code TLDs." },
            { Icon: Shield, t: "Free WHOIS privacy", d: "Protect personal info on all eligible extensions, forever." },
            { Icon: ArrowRightLeft, t: "Easy transfers", d: "Move domains in with a free year of renewal included." },
            { Icon: Crown, t: "Premium domains", d: "Concierge access to 20M+ premium and aftermarket names." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-xl p-6">
              <f.Icon className="h-6 w-6 text-[color:var(--brand)]" />
              <h3 className="mt-4 font-display font-semibold">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA title="Already own a domain?" desc="Transfer to Evanoo and get a free year of renewal." primary={{ to: "/domains", label: "Start transfer" }} secondary={{ to: "/contact", label: "Bulk transfer" }} />
    </SiteLayout>
  );
}
