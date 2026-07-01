import Link from "next/link";
import { SiteLayout, Section } from "@/components/site/Layout";

export default function NotFound() {
  return (
    <SiteLayout>
      <Section>
        <div className="py-24 text-center">
          <p className="font-display text-8xl font-bold gradient-text">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
          <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]">
            Back to home
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}
