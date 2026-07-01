import Link from "next/link";
import { SiteLayout, Section } from "@/components/site/Layout";

export default function NotFound() {
  return (
    <SiteLayout>
      <Section className="grid min-h-[60vh] place-items-center text-center">
        <div>
          <p className="text-8xl font-bold text-muted-foreground/20">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
          <p className="mt-2 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            ← Back to Home
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}
