import type { Metadata } from "next";
import Hosting from "@/views/client/Hosting";

export const metadata: Metadata = {
  title: "My Hosting",
  robots: { index: false, follow: false },
};

export default function HostingPage() {
  return <Hosting />;
}
