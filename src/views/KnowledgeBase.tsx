"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { Search, BookOpen, Globe, Mail, Lock, Server } from "lucide-react";

const categories = [
  { Icon: Server, name: "Hosting Guides", count: 42, slug: "hosting" },
  { Icon: Globe, name: "Domain Guides", count: 28, slug: "domains" },
  { Icon: Mail, name: "Email Guides", count: 19, slug: "email" },
  { Icon: Lock, name: "SSL Guides", count: 14, slug: "ssl" },
  { Icon: BookOpen, name: "WordPress Guides", count: 36, slug: "wordpress" },
];

const articles = [
  { title: "How to migrate WordPress from any host to Evanoo in 30 minutes", cat: "WordPress", read: "8 min" },
  { title: "Setting up free Cloudflare CDN on your Evanoo account", cat: "Hosting", read: "5 min" },
  { title: "What's the difference between DV, OV and EV SSL?", cat: "SSL", read: "6 min" },
  { title: "Connecting a domain bought elsewhere to Evanoo hosting", cat: "Domains", read: "4 min" },
  { title: "Configuring email on iPhone, Android, Outlook and Apple Mail", cat: "Email", read: "7 min" },
  { title: "Hardening your VPS — UFW, Fail2ban and unattended-upgrades", cat: "Hosting", read: "12 min" },
  { title: "Speed up WooCommerce with LiteSpeed Cache + Object Cache", cat: "WordPress", read: "10 min" },
  { title: "Setting up SPF, DKIM and DMARC for inbox deliverability", cat: "Email", read: "9 min" },
];

export default function KnowledgeBase() {
  const [q, setQ] = useState("");
  const filtered = articles.filter((a) => a.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Knowledge Base"
        title={<>How can we <span className="gradient-text">help you ship?</span></>}
        description="139 in-depth guides written by our own engineers. Search, browse by category, or contact support if you can't find it."
      >
        <div className="mx-auto mt-2 max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search guides, articles, errors..."
              className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-[color:var(--brand)]"
            />
          </div>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => (
            <div key={c.slug} className="glass rounded-xl p-5 transition-transform hover:-translate-y-1">
              <c.Icon className="h-6 w-6 text-[color:var(--brand)]" />
              <h3 className="mt-4 font-display font-semibold">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.count} articles</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-bold">Popular articles</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((a) => (
            <Link key={a.title} href="/knowledge-base" className="glass block rounded-xl p-5 transition-colors hover:bg-white/10">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full bg-white/5 px-2 py-1">{a.cat}</span>
                <span>{a.read} read</span>
              </div>
              <h3 className="mt-3 font-display font-semibold">{a.title}</h3>
            </Link>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
