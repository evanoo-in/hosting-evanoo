"use client";

import { useState } from "react";
import { SiteLayout, PageHero, Section } from "@/components/site/Layout";
import { Mail, MessageCircle, MapPin, Clock, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk <span className="gradient-text">hosting</span></>}
        description="Sales, partnerships, enterprise migrations or just a question — our team replies within one business hour."
      />

      <Section className="!pt-4">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Company" name="company" />
              <Select label="Service" name="service" options={["Shared Hosting", "WordPress Hosting", "VPS", "Dedicated Server", "Business Email", "Domains", "Enterprise"]} />
              <Select label="Budget" name="budget" options={["Under ₹5,000 / mo", "₹5,000 – ₹25,000 / mo", "₹25,000 – ₹1,00,000 / mo", "₹1,00,000+ / mo"]} />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[color:var(--brand)]"
                placeholder="Tell us what you're building..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] sm:w-auto"
            >
              Send enquiry
            </button>
            {submitted && (
              <p className="text-sm text-[color:var(--success)]">Thanks — we'll reply within the hour.</p>
            )}
          </form>

          <div className="space-y-4">
            {[
              { Icon: Mail, t: "Email us", d: "hello@evanoo.in", href: "mailto:hello@evanoo.in" },
              { Icon: MessageCircle, t: "WhatsApp", d: "+91 98765 43210", href: "https://wa.me/919876543210" },
              { Icon: Phone, t: "Call sales", d: "+91 80 6920 4000", href: "tel:+918069204000" },
              { Icon: Clock, t: "Business hours", d: "Mon – Sat · 09:00 – 21:00 IST  |  Support: 24×7" },
              { Icon: MapPin, t: "HQ", d: "Evanoo Technologies, Manyata Tech Park, Bengaluru 560045, India" },
            ].map((c) => {
              const inner = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg gradient-brand">
                    <c.Icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">{c.t}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{c.d}</p>
                  </div>
                </>
              );
              return (c as any).href ? (
                <a key={c.t} href={(c as any).href} className="glass flex items-center gap-4 rounded-xl p-5 transition-colors hover:bg-white/10">{inner}</a>
              ) : (
                <div key={c.t} className="glass flex items-center gap-4 rounded-xl p-5">{inner}</div>
              );
            })}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-[color:var(--brand)]"> *</span>}</label>
      <input name={name} type={type} required={required} className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[color:var(--brand)]" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select name={name} className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[color:var(--brand)]">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} className="bg-[oklch(0.16_0.025_265)]">{o}</option>)}
      </select>
    </div>
  );
}
