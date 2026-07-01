import type { Metadata } from "next";
import Pricing from "@/views/Pricing";

export const metadata: Metadata = {
  title: "Pricing — Transparent Hosting Plans",
  description:
    "Compare every Evanoo hosting plan — shared hosting, VPS, dedicated servers, and more. No hidden fees. 30-day money-back guarantee.",
  openGraph: {
    title: "Pricing — Evanoo Hosting",
    description:
      "Transparent hosting plans with no hidden fees. 30-day money-back guarantee.",
  },
};

export default function PricingPage() {
  return <Pricing />;
}
