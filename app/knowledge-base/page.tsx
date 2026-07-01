import type { Metadata } from "next";
import KnowledgeBase from "@/views/KnowledgeBase";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description:
    "Browse our comprehensive knowledge base for tutorials, guides, and answers to common hosting questions.",
  openGraph: {
    title: "Knowledge Base — Evanoo Hosting",
    description:
      "Tutorials, guides, and answers to common hosting questions.",
  },
};

export default function KnowledgeBasePage() {
  return <KnowledgeBase />;
}
