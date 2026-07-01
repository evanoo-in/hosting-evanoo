"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, ShieldCheck, Zap, Globe2, Server } from "lucide-react";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PricingCard } from "@/components/site/PricingCard";
import { DomainSearch } from "@/components/site/DomainSearch";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { sharedPlans, testimonials, faqs, stats, features } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <PlansPreview />
      <WhyChoose />
      <FeaturesGrid />
      <DomainSection />
      <Stats />
      <Testimonials />
      <FAQSection />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--success)] animate-pulse" />
            Now live: NVMe Gen-4 storage across all regions
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Powering websites.<br />
            <span className="gradient-text">Empowering businesses.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Lightning-fast cloud hosting, domains, VPS and business email — engineered on NVMe SSDs,
            LiteSpeed and Cloudflare's global edge. Backed by 24×7 in-house engineers.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              Start hosting <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/vps"
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore VPS
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {[
              { Icon: ShieldCheck, label: "99.99% uptime SLA" },
              { Icon: Zap, label: "LiteSpeed + NVMe" },
              { Icon: Globe2, label: "7 global regions" },
              { Icon: Server, label: "Free migration" },
            ].map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-[color:var(--brand)]" /> {label}
              </span>
            ))}
          </div>
        </motion.div>

        <DashboardPreview />
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto mt-16 max-w-5xl"
    >
      <div className="relative rounded-2xl glass p-3 shadow-[var(--shadow-glow)]">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.23_25)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.78_0.17_85)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.72_0.17_155)]" />
          <span className="ml-3 text-xs text-muted-foreground">app.evanoo.in / dashboard</span>
        </div>
        <div className="grid gap-3 rounded-xl bg-[oklch(0.13_0.02_265)] p-4 sm:grid-cols-4">
          {[
            { label: "Active sites", value: "24", trend: "+3 this week" },
            { label: "Uptime", value: "99.99%", trend: "30-day avg" },
            { label: "Bandwidth", value: "412 GB", trend: "↑ 12% MoM" },
            { label: "Open tickets", value: "0", trend: "All resolved" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <p className="text-xs text-muted-foreground">{m.label}</p>
              <p className="mt-1 font-display text-2xl font-bold">{m.value}</p>
              <p className="mt-1 text-xs text-[color:var(--success)]">{m.trend}</p>
            </div>
          ))}
          <div className="sm:col-span-4 rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Server response time — last 24h</p>
              <span className="text-xs text-muted-foreground">avg 184ms</span>
            </div>
            <svg viewBox="0 0 600 80" className="mt-3 w-full">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="oklch(0.62 0.24 305)" stopOpacity="0.6" />
                  <stop offset="1" stopColor="oklch(0.65 0.21 265)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 60 L40 50 L80 55 L120 40 L160 45 L200 30 L240 38 L280 22 L320 28 L360 18 L400 25 L440 15 L480 20 L520 12 L560 18 L600 10 L600 80 L0 80 Z"
                fill="url(#g1)"
              />
              <path
                d="M0 60 L40 50 L80 55 L120 40 L160 45 L200 30 L240 38 L280 22 L320 28 L360 18 L400 25 L440 15 L480 20 L520 12 L560 18 L600 10"
                fill="none"
                stroke="oklch(0.65 0.21 265)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PlansPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Hosting Plans"
        title="Pick the plan that grows with you"
        desc="From your first portfolio to a 1M-visit storefront — every plan ships with free SSL, free migration and 24×7 support."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {sharedPlans.map((p) => (
          <PricingCard key={p.name} plan={p} ctaTo="/shared-hosting" ctaLabel="Choose plan" />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--brand)] hover:underline">
          Compare every plan <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function WhyChoose() {
  const reasons = [
    { Icon: Icons.Activity, title: "99.99% Uptime", desc: "Backed by a real SLA with automatic prorated credits." },
    { Icon: Icons.HardDrive, title: "NVMe Gen-4 SSD", desc: "3× faster I/O than legacy SSD storage, in every plan." },
    { Icon: Icons.Rocket, title: "LiteSpeed Web Server", desc: "LSAPI, QUIC and edge cache out of the box." },
    { Icon: Icons.ShieldCheck, title: "Cloudflare Protection", desc: "Enterprise DDoS, WAF and Bot Management — included." },
    { Icon: Icons.Lock, title: "Free SSL Forever", desc: "Auto-renewed Let's Encrypt + Sectigo on demand." },
    { Icon: Icons.Truck, title: "Free Migration", desc: "Our team moves your site in under 24 hours, downtime-free." },
    { Icon: Icons.MessageSquare, title: "24×7 Live Support", desc: "Real engineers on chat in under 60 seconds." },
    { Icon: Icons.Database, title: "Daily Off-site Backups", desc: "30 days of restorable backups in a different region." },
    { Icon: Icons.Globe, title: "7 Data Centers", desc: "Mumbai · Bengaluru · Singapore · Frankfurt · NYC · LON · GRU." },
    { Icon: Icons.GitBranch, title: "Git, Node, Python", desc: "Modern stacks, SSH and Docker on every VPS." },
  ];
  return (
    <Section className="!py-24">
      <SectionHeading
        eyebrow="Why Evanoo"
        title="Built for performance. Priced for everyone."
        desc="Every feature you'd expect from a hyperscaler — without the hyperscaler bill."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map((r) => (
          <div key={r.title} className="glass rounded-xl p-5 transition-transform hover:-translate-y-1">
            <span className="grid h-10 w-10 place-items-center rounded-lg gradient-brand">
              <r.Icon className="h-5 w-5 text-white" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold">{r.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FeaturesGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Platform Features"
        title="Everything you need. Nothing you don't."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const Icon = (Icons as any)[f.icon] ?? Icons.Sparkles;
          return (
            <div key={f.title} className="glass rounded-2xl p-6">
              <Icon className="h-6 w-6 text-[color:var(--brand)]" />
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function DomainSection() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">Domains</span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Claim your name. Build your brand.</h2>
          <p className="mt-4 text-muted-foreground">
            Search 400+ TLDs at wholesale prices with free WHOIS privacy, instant DNS, and one-click
            connect to your Evanoo hosting account.
          </p>
        </div>
        <DomainSearch />
      </div>
    </Section>
  );
}

function Stats() {
  return (
    <Section className="!py-16">
      <div className="grid gap-6 rounded-3xl glass p-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl font-bold gradient-text">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Loved by builders"
        title="Trusted by 12,000+ businesses worldwide"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="glass rounded-2xl p-6">
            <blockquote className="text-base leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-brand text-sm font-bold text-white">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section>
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="mt-12">
        <FAQ items={faqs} />
      </div>
    </Section>
  );
}
