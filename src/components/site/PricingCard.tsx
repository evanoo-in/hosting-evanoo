import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingPlan {
  name: string;
  tagline?: string;
  monthly?: number;
  yearly?: number;
  price?: number;
  perUser?: boolean;
  highlight?: boolean;
  features: string[];
}

export function PricingCard({
  plan,
  yearly = true,
  ctaLabel = "Get started",
  ctaTo = "/contact",
}: {
  plan: PricingPlan;
  yearly?: boolean;
  ctaLabel?: string;
  ctaTo?: string;
}) {
  const price =
    plan.price !== undefined ? plan.price : yearly ? plan.yearly : plan.monthly;
  const suffix = plan.perUser ? "/user/mo" : "/mo";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1",
        plan.highlight
          ? "glass border-2 border-[color:var(--brand)]/40 shadow-[var(--shadow-glow)]"
          : "glass"
      )}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full gradient-brand px-3 py-1 text-xs font-semibold text-white">
          <Sparkles className="h-3 w-3" /> Most Popular
        </span>
      )}

      <h3 className="font-display text-xl font-bold">{plan.name}</h3>
      {plan.tagline && (
        <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
      )}

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold">₹{price}</span>
        <span className="text-sm text-muted-foreground">{suffix}</span>
      </div>
      {plan.yearly !== undefined && plan.monthly !== undefined && (
        <p className="mt-1 text-xs text-muted-foreground">
          {yearly ? `Billed yearly — save ₹${(plan.monthly - plan.yearly) * 12}/yr` : "Billed monthly"}
        </p>
      )}

      <ul className="mt-6 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--success)]/15 text-[color:var(--success)]">
              <Check className="h-3 w-3" />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaTo}
        className={cn(
          "mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]",
          plan.highlight
            ? "gradient-brand text-white shadow-[var(--shadow-glow)]"
            : "border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
