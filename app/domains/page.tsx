import type { Metadata } from "next";
import Domains from "@/views/Domains";

export const metadata: Metadata = {
  title: "Domain Registration",
  description:
    "Register your perfect domain name at India's best prices. .in, .com, .net, and 50+ TLDs with free DNS management and WHOIS privacy.",
  openGraph: {
    title: "Domain Registration — Evanoo Hosting",
    description:
      "Register .in, .com, .net and 50+ TLDs at India's best prices.",
  },
};

export default function DomainsPage() {
  return <Domains />;
}
