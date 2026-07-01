import type { Metadata } from "next";
import ClientDomains from "@/views/client/Domains";

export const metadata: Metadata = {
  title: "My Domains",
  robots: { index: false, follow: false },
};

export default function ClientDomainsPage() {
  return <ClientDomains />;
}
