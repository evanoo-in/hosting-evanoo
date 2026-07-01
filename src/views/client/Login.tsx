"use client";

import Link from "next/link";
import { Cloud } from "lucide-react";

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input type={type} className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[color:var(--brand)]" />
    </div>
  );
}

export default function Login() {
  return (
    <div className="grid min-h-screen place-items-center hero-bg p-4">
      <div className="w-full max-w-md glass rounded-2xl p-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand">
            <Cloud className="h-5 w-5 text-white" />
          </span>
          <span className="font-display font-bold">Evanoo</span>
        </Link>
        <h1 className="mt-6 font-display text-2xl font-bold">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">Sign in to manage your hosting, domains and invoices.</p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <button className="w-full rounded-lg gradient-brand py-2.5 text-sm font-semibold text-white">Sign in</button>
        </form>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          New here? <Link href="/client/register" className="font-medium text-[color:var(--brand)]">Create an account</Link>
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">UI placeholder — integrates with WHMCS in production.</p>
      </div>
    </div>
  );
}
