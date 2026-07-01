import type { Metadata } from "next";
import SharedHosting from "@/views/SharedHosting";

export const metadata: Metadata = {
  title: "Shared Hosting",
  description:
    "Affordable shared hosting plans with cPanel, free SSL, one-click WordPress installer, and 99.9% uptime for personal and business websites.",
  openGraph: {
    title: "Shared Hosting Plans — Evanoo",
    description:
      "Affordable shared hosting with cPanel, free SSL, and one-click WordPress.",
  },
};

export default function SharedHostingPage() {
  return <SharedHosting />;
}
