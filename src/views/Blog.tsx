import Link from "next/link";
import { SiteLayout, PageHero, Section } from "@/components/site/Layout";

const posts = [
  { cat: "Performance", date: "Jun 20, 2026", title: "Why TTFB matters more than your homepage hero image", excerpt: "A 200ms reduction in time-to-first-byte raised checkout conversions 11% across 312 stores we benchmarked. Here's what we did." },
  { cat: "Security", date: "Jun 12, 2026", title: "The 2026 WordPress vulnerability report", excerpt: "We scanned 1.2M WordPress installs. The top 5 attack vectors are exactly what you'd expect — and the fixes are 10 minutes of work." },
  { cat: "Cloud", date: "May 30, 2026", title: "From shared hosting to Kubernetes — when (and when not) to migrate", excerpt: "Most companies move to K8s 18 months too early. A practical framework for when distributed infrastructure actually pays off." },
  { cat: "SEO", date: "May 18, 2026", title: "Core Web Vitals in 2026: the new INP threshold explained", excerpt: "Google's Interaction to Next Paint metric is now a ranking signal. What it measures, and how to stay under 200ms." },
  { cat: "Hosting tutorials", date: "May 02, 2026", title: "Deploying a Next.js 15 app on an Evanoo VPS with zero downtime", excerpt: "PM2, NGINX, Let's Encrypt and a GitHub Actions pipeline — the whole thing, end to end, in under an hour." },
  { cat: "Announcements", date: "Apr 28, 2026", title: "Introducing NVMe Gen-4 across all 7 regions", excerpt: "Every existing customer is being migrated for free. Here's what's changing under the hood, and what it means for your sites." },
];

export default function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Evanoo Blog"
        title={<>Notes from the <span className="gradient-text">engine room</span></>}
        description="Tutorials, post-mortems, performance breakdowns and announcements — written by the team that runs the platform."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.title} href="/blog" className="glass block rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full bg-[color:var(--brand)]/15 px-2.5 py-1 text-[color:var(--brand)] font-medium">{p.cat}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <p className="mt-5 text-sm font-medium text-[color:var(--brand)]">Read article →</p>
            </Link>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
