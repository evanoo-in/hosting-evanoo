const tickets = [
  { id: "#4821", subject: "Need help enabling Redis Object Cache", status: "Resolved", updated: "5 days ago" },
  { id: "#4798", subject: "Migrate brewline-staging.com to new VPS", status: "Resolved", updated: "12 days ago" },
  { id: "#4762", subject: "Outbound SMTP throttling", status: "Resolved", updated: "Mar 18, 2026" },
];

export default function Tickets() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold">Support tickets</h2>
        <button className="rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white">+ New ticket</button>
      </div>
      <div className="mt-6 grid gap-3">
        {tickets.map((t) => (
          <div key={t.id} className="glass flex items-center justify-between rounded-xl p-4">
            <div>
              <p className="text-xs text-muted-foreground">{t.id}</p>
              <p className="font-display font-semibold">{t.subject}</p>
            </div>
            <div className="text-right">
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs">{t.status}</span>
              <p className="mt-1 text-xs text-muted-foreground">{t.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
