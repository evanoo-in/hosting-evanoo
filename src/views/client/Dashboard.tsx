import { TrendingUp, Server, Globe, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Good evening, Aarav 👋</h2>
        <p className="text-sm text-muted-foreground">Here's what's happening across your account.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { Icon: Server, label: "Active services", value: "5" },
          { Icon: Globe, label: "Domains", value: "12" },
          { Icon: FileText, label: "Open invoices", value: "₹2,499" },
          { Icon: TrendingUp, label: "30-day bandwidth", value: "412 GB" },
        ].map((m) => (
          <div key={m.label} className="glass rounded-xl p-5">
            <m.Icon className="h-5 w-5 text-[color:var(--brand)]" />
            <p className="mt-3 text-xs text-muted-foreground">{m.label}</p>
            <p className="mt-1 font-display text-2xl font-bold">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold">Resource usage</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "Disk", used: 32, total: 50, unit: "GB" },
              { label: "Bandwidth", used: 412, total: 1000, unit: "GB" },
              { label: "Email mailboxes", used: 18, total: 30 },
              { label: "Databases", used: 8, total: 25 },
            ].map((r) => (
              <div key={r.label}>
                <div className="flex justify-between text-sm">
                  <span>{r.label}</span>
                  <span className="text-muted-foreground">{r.used}{r.unit ?? ""} / {r.total}{r.unit ?? ""}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full gradient-brand" style={{ width: `${(r.used / r.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold">Recent activity</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { t: "Invoice #INV-20461 paid · ₹2,499", time: "2 hours ago" },
              { t: "Domain brewline.in renewed for 1 year", time: "Yesterday" },
              { t: "Backup completed for evanoo-prod-01", time: "Yesterday" },
              { t: "SSL renewed for shop.brewline.in", time: "3 days ago" },
              { t: "Support ticket #4821 resolved", time: "5 days ago" },
            ].map((a) => (
              <li key={a.t} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                <span>{a.t}</span>
                <span className="text-xs text-muted-foreground">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
