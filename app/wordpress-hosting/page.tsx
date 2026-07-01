import type { Metadata } from "next";
import WordPressHosting from "@/views/WordPressHosting";

export const metadata: Metadata = {
  title: "WordPress Hosting",
  description:
    "Managed WordPress hosting with automatic updates, daily backups, free CDN, free SSL, and staging environments. Optimised for speed.",
  openGraph: {
    title: "WordPress Hosting — Evanoo",
    description:
      "Managed WordPress hosting with auto-updates, daily backups, and free CDN.",
  },
};

export default function WordPressHostingPage() {
  return <WordPressHosting />;
}
