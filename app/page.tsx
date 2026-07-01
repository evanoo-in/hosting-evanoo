import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title: "Evanoo Hosting — Premium Cloud Hosting, Domains & Business Email",
  description:
    "Spin up production-grade hosting in under 60 seconds. Shared hosting, VPS, dedicated servers, domain registration, and business email built for Indian businesses.",
  openGraph: {
    title: "Evanoo Hosting — Premium Cloud Hosting for Indian Businesses",
    description:
      "Powering websites. Empowering businesses. Premium cloud hosting, domains, and business email built by Evanoo Technologies.",
    url: "https://hosting.evanoo.in",
  },
};

export default function HomePage() {
  return <Home />;
}
