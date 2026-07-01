"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { domainPrices } from "@/data/site";

export function DomainSearch({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<null | { name: string; tld: string }>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!clean) return;
    const [name, ...rest] = clean.split(".");
    setResult({ name, tld: rest.length ? `.${rest.join(".")}` : ".com" });
  };

  const popular = domainPrices.slice(0, 6);

  return (
    <div className={compact ? "" : "glass rounded-2xl p-6 sm:p-8"}>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your perfect domain..."
            className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--brand)]"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
        >
          Search
        </button>
      </form>

      {result && (
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((d) => (
            <div
              key={d.tld}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="text-sm">
                <span className="font-semibold">{result.name}</span>
                <span className="text-muted-foreground">{d.tld}</span>
              </span>
              <span className="text-sm font-semibold text-[color:var(--success)]">
                ₹{d.reg}/yr
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span>Popular:</span>
        {popular.map((d) => (
          <span key={d.tld} className="rounded-full border border-white/10 px-2.5 py-1">
            {d.tld} from ₹{d.reg}
          </span>
        ))}
      </div>
    </div>
  );
}
