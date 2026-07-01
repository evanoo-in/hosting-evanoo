"use client";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input defaultValue={value} className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[color:var(--brand)]" />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-2xl font-bold">Profile</h2>
      <p className="text-sm text-muted-foreground">Update your personal and billing details.</p>
      <form className="mt-6 space-y-4 glass rounded-2xl p-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" value="Aarav Mehta" />
          <Field label="Email" value="aarav@brewline.in" />
          <Field label="Phone" value="+91 98765 43210" />
          <Field label="Company" value="Brewline Coffee Pvt Ltd" />
          <Field label="GSTIN" value="29ABCDE1234F1Z5" />
          <Field label="Country" value="India" />
        </div>
        <button className="rounded-lg gradient-brand px-5 py-2.5 text-sm font-semibold text-white">Save changes</button>
      </form>
    </div>
  );
}
