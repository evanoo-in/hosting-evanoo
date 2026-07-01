import type { Metadata } from "next";
import Downloads from "@/views/client/Downloads";

export const metadata: Metadata = {
  title: "Downloads",
  robots: { index: false, follow: false },
};

export default function DownloadsPage() {
  return <Downloads />;
}
