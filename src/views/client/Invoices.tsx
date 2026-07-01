const invoices = [
  { id: "INV-20461", date: "Jun 24, 2026", amount: "₹2,499", status: "Paid" },
  { id: "INV-20402", date: "May 24, 2026", amount: "₹2,499", status: "Paid" },
  { id: "INV-20338", date: "Apr 24, 2026", amount: "₹2,499", status: "Paid" },
  { id: "INV-20275", date: "Mar 24, 2026", amount: "₹4,998", status: "Paid" },
];

export default function Invoices() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Invoices</h2>
      <p className="text-sm text-muted-foreground">Download invoices and manage billing.</p>
      <div className="mt-6 overflow-x-auto glass rounded-2xl">
        <table className="w-full min-w-[500px] text-sm">
          <thead className="border-b border-white/10 text-left">
            <tr>
              <th className="px-6 py-4 font-medium text-muted-foreground">Invoice</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">Date</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">Amount</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((i) => (
              <tr key={i.id} className="border-b border-white/5 last:border-0">
                <td className="px-6 py-4 font-medium">{i.id}</td>
                <td className="px-6 py-4 text-muted-foreground">{i.date}</td>
                <td className="px-6 py-4">{i.amount}</td>
                <td className="px-6 py-4"><span className="rounded-full bg-[color:var(--success)]/15 px-2 py-0.5 text-xs text-[color:var(--success)]">{i.status}</span></td>
                <td className="px-6 py-4 text-right"><a className="text-sm font-medium text-[color:var(--brand)]" href="#">Download PDF</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
