import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Evanoo Technologies — the team powering India's next generation of web hosting solutions.",
  openGraph: {
    title: "About Evanoo Hosting",
    description:
      "Learn about Evanoo Technologies — the team powering India's next generation of web hosting solutions.",
  },
};

export default function AboutPage() {
  return <About />;
}
