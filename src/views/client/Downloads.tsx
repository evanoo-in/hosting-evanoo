const files = [
  { name: "Welcome to Evanoo (PDF)", size: "1.2 MB" },
  { name: "cPanel Quick-Start Guide (PDF)", size: "3.4 MB" },
  { name: "Brand assets — logos & wordmarks (ZIP)", size: "8.7 MB" },
  { name: "Tax invoice template (DOCX)", size: "82 KB" },
];

export default function Downloads() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Downloads</h2>
      <div className="mt-6 grid gap-3">
        {files.map((f) => (
          <div key={f.name} className="glass flex items-center justify-between rounded-xl p-4">
            <div>
              <p className="font-display font-semibold">{f.name}</p>
              <p className="text-xs text-muted-foreground">{f.size}</p>
            </div>
            <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm">Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}
