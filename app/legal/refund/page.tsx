import type { Metadata } from "next";
import LegalRefund from "@/views/LegalRefund";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Evanoo Hosting Refund Policy — 30-day money-back guarantee and refund terms.",
  robots: { index: false, follow: false },
};

export default function LegalRefundPage() {
  return <LegalRefund />;
}
