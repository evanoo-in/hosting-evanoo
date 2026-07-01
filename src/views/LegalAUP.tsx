import { LegalPage, H } from "@/components/site/LegalPage";

export default function LegalAUP() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      updated="01 June 2026"
      description="Use of the Evanoo network must respect the law, our infrastructure, and other customers. This policy describes what is — and isn't — allowed."
    >
      <H>Prohibited content</H>
      <p>You may not host content that is illegal under Indian law, including but not limited to child sexual abuse material, content infringing intellectual property, content promoting terrorism or hate, phishing pages, malware distribution, or unauthorized cryptocurrency mining.</p>
      <H>Network abuse</H>
      <p>Unsolicited bulk email (spam), denial-of-service attacks, port scanning, vulnerability scanning of third parties, and IP spoofing are strictly forbidden and result in immediate suspension.</p>
      <H>Resource usage</H>
      <p>Shared hosting plans are subject to fair-use limits on CPU, RAM and I/O. Sustained use exceeding fair-use thresholds may require upgrade to a VPS or dedicated plan.</p>
      <H>Reporting abuse</H>
      <p>Report abuse to abuse@evanoo.in. We investigate every report within 24 hours and act decisively to protect the integrity of our network.</p>
    </LegalPage>
  );
}
