"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function BillingToggle({
  value,
  onChange,
}: {
  value: "monthly" | "yearly";
  onChange: (v: "monthly" | "yearly") => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {(["monthly", "yearly"] as const).map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            value === opt
              ? "gradient-brand text-white shadow-[var(--shadow-glow)]"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {opt === "monthly" ? "Monthly" : "Yearly"}
          {opt === "yearly" && (
            <span className="ml-1.5 rounded-full bg-[color:var(--success)]/20 px-1.5 py-0.5 text-[10px] font-semibold text-[color:var(--success)]">
              -30%
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

export function useBilling() {
  return useState<"monthly" | "yearly">("yearly");
}
