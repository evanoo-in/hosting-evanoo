import type { Metadata } from "next";
import BusinessEmail from "@/views/BusinessEmail";

export const metadata: Metadata = {
  title: "Business Email",
  description:
    "Professional business email hosting with custom domains, advanced spam protection, and 99.9% uptime — starting at ₹99/user/mo.",
  openGraph: {
    title: "Business Email Hosting — Evanoo",
    description:
      "Professional business email with custom domains and advanced spam protection.",
  },
};

export default function BusinessEmailPage() {
  return <BusinessEmail />;
}
