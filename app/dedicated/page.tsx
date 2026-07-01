import type { Metadata } from "next";
import Dedicated from "@/views/Dedicated";

export const metadata: Metadata = {
  title: "Dedicated Servers",
  description:
    "High-performance bare-metal dedicated servers with full root access, 99.9% uptime SLA, and 24/7 managed support.",
  openGraph: {
    title: "Dedicated Servers — Evanoo Hosting",
    description:
      "High-performance bare-metal dedicated servers with full root access.",
  },
};

export default function DedicatedPage() {
  return <Dedicated />;
}
