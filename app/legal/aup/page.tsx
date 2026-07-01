import type { Metadata } from "next";
import LegalAUP from "@/views/LegalAUP";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Evanoo Hosting Acceptable Use Policy — what you may and may not do with our services.",
  robots: { index: false, follow: false },
};

export default function LegalAUPPage() {
  return <LegalAUP />;
}
