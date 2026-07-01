import type { Metadata } from "next";
import LegalTerms from "@/views/LegalTerms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Evanoo Hosting Terms of Service — the legal agreement between you and Evanoo Technologies.",
  robots: { index: false, follow: false },
};

export default function LegalTermsPage() {
  return <LegalTerms />;
}
