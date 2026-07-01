import type { ReactNode } from "react";
import { SiteLayout, PageHero, Section } from "@/components/site/Layout";

export function LegalPage({
  title,
  updated,
  description,
  children,
}: {
  title: string;
  updated: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <Section className="!pt-4">
        <article className="prose-evanoo mx-auto max-w-3xl space-y-5 text-sm text-muted-foreground leading-relaxed">
          <p className="text-xs uppercase tracking-wider">Last updated: {updated}</p>
          {children}
        </article>
      </Section>
    </SiteLayout>
  );
}

export function H({ children }: { children: ReactNode }) {
  return <h2 className="!mt-10 font-display text-xl font-semibold text-foreground">{children}</h2>;
}
