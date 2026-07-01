import type { Metadata } from "next";
import LegalPrivacy from "@/views/LegalPrivacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Evanoo Hosting Privacy Policy — how we collect, use, and protect your personal data.",
  robots: { index: false, follow: false },
};

export default function LegalPrivacyPage() {
  return <LegalPrivacy />;
}
