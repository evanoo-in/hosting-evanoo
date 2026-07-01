import type { Metadata } from "next";
import LegalCookies from "@/views/LegalCookies";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Evanoo Hosting Cookie Policy — how we use cookies and similar technologies.",
  robots: { index: false, follow: false },
};

export default function LegalCookiesPage() {
  return <LegalCookies />;
}
