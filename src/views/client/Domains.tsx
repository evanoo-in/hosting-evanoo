const items = [
  { name: "brewline.in", expires: "Mar 12, 2027", status: "Active" },
  { name: "brewline.coffee", expires: "Aug 04, 2026", status: "Renewing" },
  { name: "evanoo-demo.com", expires: "Jan 18, 2027", status: "Active" },
  { name: "lendkart.app", expires: "Nov 30, 2026", status: "Active" },
];

export default function Domains() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Your domains</h2>
      <div className="mt-6 grid gap-3">
        {items.map((d) => (
          <div key={d.name} className="glass flex flex-wrap items-center justify-between gap-4 rounded-xl p-4">
            <div>
              <p className="font-display font-semibold">{d.name}</p>
              <p className="text-xs text-muted-foreground">Expires {d.expires}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[color:var(--success)]/15 px-2 py-0.5 text-xs text-[color:var(--success)]">{d.status}</span>
              <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm">Manage DNS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
