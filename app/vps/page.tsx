import type { Metadata } from "next";
import VPS from "@/views/VPS";

export const metadata: Metadata = {
  title: "VPS Hosting",
  description:
    "Scalable VPS hosting with full root access, SSD NVMe storage, KVM virtualisation, and 99.9% uptime SLA. Plans starting at ₹499/mo.",
  openGraph: {
    title: "VPS Hosting — Evanoo",
    description:
      "Scalable VPS with full root access and NVMe SSD storage.",
  },
};

export default function VPSPage() {
  return <VPS />;
}
