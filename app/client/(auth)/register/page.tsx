import type { Metadata } from "next";
import Register from "@/views/client/Register";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your Evanoo Hosting client account.",
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return <Register />;
}
