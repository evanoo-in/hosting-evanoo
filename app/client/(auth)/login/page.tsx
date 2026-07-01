import type { Metadata } from "next";
import Login from "@/views/client/Login";

export const metadata: Metadata = {
  title: "Client Login",
  description: "Sign in to your Evanoo Hosting client area.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <Login />;
}
