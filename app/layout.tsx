import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import "@/index.css";
import "@/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hosting.evanoo.in"),
  title: {
    default: "Evanoo Hosting — Premium Cloud Hosting, Domains & Business Email",
    template: "%s · Evanoo Hosting",
  },
  description:
    "Evanoo Hosting delivers premium cloud hosting, VPS, dedicated servers, domain registration, and business email — built for Indian businesses and startups.",
  keywords: [
    "web hosting India",
    "cloud hosting",
    "VPS hosting",
    "domain registration",
    "business email",
    "Evanoo Hosting",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hosting.evanoo.in",
    siteName: "Evanoo Hosting",
    title: "Evanoo Hosting — Premium Cloud Hosting for Indian Businesses",
    description:
      "Powering websites. Empowering businesses. Premium cloud hosting, domains, and business email built by Evanoo Technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evanoo Hosting",
    description:
      "Premium cloud hosting, VPS, dedicated servers, domain registration, and business email for Indian businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
