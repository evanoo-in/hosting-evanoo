import { LegalPage, H } from "@/components/site/LegalPage";

export default function LegalPrivacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="01 June 2026"
      description="This page explains what personal data Evanoo Hosting collects, why we collect it, and the rights you have over it."
    >
      <p>This Privacy Policy is maintained by Evanoo Technologies (operating the brand "Evanoo Hosting") and applies to all services offered at hosting.evanoo.in.</p>
      <H>Information we collect</H>
      <p>Account details (name, email, billing address, GSTIN if applicable), service usage data (resource consumption, login times, support tickets), and payment metadata processed by our PCI-DSS-certified payment partners. We do not store full card numbers on our servers.</p>
      <H>How we use your data</H>
      <p>To deliver and bill the services you order, communicate service-critical updates, prevent fraud and abuse, comply with legal obligations under Indian law (including the IT Act 2000 and DPDP Act 2023), and improve our products with aggregated, de-identified analytics.</p>
      <H>Data retention</H>
      <p>Account data is retained for the lifetime of your account plus 7 years for tax and audit purposes. Server backups are retained for 30 days. You may request earlier deletion at privacy@evanoo.in, subject to legal retention requirements.</p>
      <H>Your rights</H>
      <p>You have the right to access, correct, port, or delete your personal data, and to lodge a complaint with the Data Protection Board of India. Contact privacy@evanoo.in for any request — we respond within 30 days.</p>
      <H>Third-party processors</H>
      <p>We share data only with vetted sub-processors: Razorpay (payments), Cloudflare (network), AWS Mumbai (off-site backups), Zoho Mail (corporate email), and Sentry (error monitoring).</p>
      <H>Contact</H>
      <p>Questions? Email privacy@evanoo.in or write to Evanoo Technologies, Manyata Tech Park, Bengaluru 560045, India.</p>
    </LegalPage>
  );
}
