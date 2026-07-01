import type { Metadata } from "next";
import Status from "@/views/Status";

export const metadata: Metadata = {
  title: "System Status",
  description:
    "Check the real-time operational status of all Evanoo Hosting services — servers, DNS, email, billing, and more.",
  openGraph: {
    title: "System Status — Evanoo Hosting",
    description: "Real-time status of all Evanoo Hosting services.",
  },
};

export default function StatusPage() {
  return <Status />;
}
