const services = [
  { name: "Business Hosting · brewline.in", plan: "Business · Yearly", next: "Mar 12, 2027" },
  { name: "VPS 2 · evanoo-prod-01", plan: "4 vCPU · 8 GB · 160 GB NVMe", next: "Aug 04, 2026" },
  { name: "WordPress Pro · shop.brewline.in", plan: "WP Pro · Yearly", next: "Jan 18, 2027" },
];

export default function Hosting() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Your hosting services</h2>
      <div className="mt-6 grid gap-4">
        {services.map((s) => (
          <div key={s.name} className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5">
            <div>
              <p className="font-display font-semibold">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.plan} · renews {s.next}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm">Open cPanel</button>
              <button className="rounded-lg gradient-brand px-3 py-1.5 text-sm font-semibold text-white">Upgrade</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
