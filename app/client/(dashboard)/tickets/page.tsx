import type { Metadata } from "next";
import Tickets from "@/views/client/Tickets";

export const metadata: Metadata = {
  title: "Support Tickets",
  robots: { index: false, follow: false },
};

export default function TicketsPage() {
  return <Tickets />;
}
