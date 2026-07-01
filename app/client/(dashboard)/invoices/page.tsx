import type { Metadata } from "next";
import Invoices from "@/views/client/Invoices";

export const metadata: Metadata = {
  title: "Invoices",
  robots: { index: false, follow: false },
};

export default function InvoicesPage() {
  return <Invoices />;
}
