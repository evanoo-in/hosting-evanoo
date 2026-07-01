import type { Metadata } from "next";
import SSL from "@/views/SSL";

export const metadata: Metadata = {
  title: "SSL Certificates",
  description:
    "Secure your website with SSL certificates from Evanoo. DV, OV, and EV certificates with automated issuance and free HTTPS setup.",
  openGraph: {
    title: "SSL Certificates — Evanoo Hosting",
    description: "DV, OV, and EV SSL certificates with automated issuance.",
  },
};

export default function SSLPage() {
  return <SSL />;
}
