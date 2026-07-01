import { LegalPage, H } from "@/components/site/LegalPage";

export default function LegalTerms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="01 June 2026"
      description="The legal agreement between you and Evanoo Technologies for use of our hosting, domain, email and related services."
    >
      <p>By signing up for or using any Evanoo service, you agree to be bound by these terms. If you do not agree, please do not use the services.</p>
      <H>Account & responsibilities</H>
      <p>You are responsible for keeping your account credentials secure, for all activity on your account, and for ensuring the content you host complies with applicable laws and our Acceptable Use Policy.</p>
      <H>Service level agreement</H>
      <p>Evanoo commits to 99.9% network and server uptime for shared and WordPress hosting, and 99.99% for VPS and dedicated servers, measured monthly. If we miss the SLA, you receive prorated service credits applied automatically to your next invoice.</p>
      <H>Billing</H>
      <p>Invoices are issued in advance for the chosen billing cycle. Late payments incur a 1.5% monthly fee. Services are suspended after 7 days overdue and terminated after 30 days.</p>
      <H>Termination</H>
      <p>You may cancel any service at any time from your client area. We may suspend or terminate accounts that violate these terms, our AUP, or applicable law, with notice where possible.</p>
      <H>Limitation of liability</H>
      <p>Evanoo's total liability under these terms is limited to the fees paid in the 12 months preceding the claim. We are not liable for indirect or consequential damages.</p>
      <H>Governing law</H>
      <p>These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.</p>
    </LegalPage>
  );
}
