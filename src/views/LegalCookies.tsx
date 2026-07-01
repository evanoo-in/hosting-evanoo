import { LegalPage, H } from "@/components/site/LegalPage";

export default function LegalCookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="01 June 2026"
      description="What cookies we set, what they're for, and how you can control them."
    >
      <H>Strictly necessary cookies</H>
      <p>Used to keep you signed in to the client area, remember your billing cycle preference, and maintain security tokens. These cannot be disabled without breaking core functionality.</p>
      <H>Analytics cookies</H>
      <p>We use first-party analytics (Plausible) which does not use cookies or track individuals. We do not deploy Google Analytics, Facebook Pixel, or any third-party tracking on hosting.evanoo.in.</p>
      <H>Marketing cookies</H>
      <p>We do not set marketing or advertising cookies on our website.</p>
      <H>Managing cookies</H>
      <p>You can clear or block cookies through your browser settings. Doing so may sign you out of the client area.</p>
    </LegalPage>
  );
}
