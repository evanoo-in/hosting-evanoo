import { LegalPage, H } from "@/components/site/LegalPage";

export default function LegalRefund() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="01 June 2026"
      description="Our refund window, what's covered, and how to request a refund."
    >
      <H>30-day money-back guarantee</H>
      <p>Shared hosting, WordPress hosting and business email plans purchased on annual or longer terms are covered by a 30-day no-questions-asked refund. Cancel within 30 days of your initial purchase for a full refund of hosting fees.</p>
      <H>VPS, dedicated and SSL</H>
      <p>VPS plans carry a 7-day refund window. Dedicated servers, SSL certificates and domain registrations are non-refundable once provisioned, as they involve hard costs to upstream vendors.</p>
      <H>What's not refundable</H>
      <p>Domain registration and renewal fees, premium domains, SSL certificates, dedicated IPs, software licenses (cPanel, Plesk, WHMCS, LiteSpeed), and any setup fees once the service has been delivered.</p>
      <H>How to request a refund</H>
      <p>Open a billing ticket from your client area or email billing@evanoo.in. Approved refunds are processed back to the original payment method within 7–10 business days.</p>
    </LegalPage>
  );
}
