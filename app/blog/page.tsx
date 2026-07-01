import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, tutorials, and insights on web hosting, cloud infrastructure, and growing your online presence.",
  openGraph: {
    title: "Evanoo Hosting Blog",
    description:
      "Tips, tutorials, and insights on web hosting, cloud infrastructure, and growing your online presence.",
  },
};

export default function BlogPage() {
  return <Blog />;
}
