import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Evanoo Hosting team. We're available 24/7 to answer your questions and help you choose the right plan.",
  openGraph: {
    title: "Contact Evanoo Hosting",
    description: "Get in touch with our team — available 24/7.",
  },
};

export default function ContactPage() {
  return <Contact />;
}
