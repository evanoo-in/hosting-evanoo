export const nav = [
  { label: "Hosting", to: "/" },
  { label: "Hosting", to: "/shared-hosting" },
  { label: "WordPress", to: "/wordpress-hosting" },
  { label: "VPS", to: "/vps" },
  { label: "Dedicated", to: "/dedicated" },
  { label: "Domains", to: "/domains" },
  { label: "Email", to: "/business-email" },
  { label: "Pricing", to: "/pricing" },
  { label: "Support", to: "/contact" },
] as const;

export const footerNav = {
  Hosting: [
    { label: "Shared Hosting", to: "/shared-hosting" },
    { label: "WordPress Hosting", to: "/wordpress-hosting" },
    { label: "VPS Hosting", to: "/vps" },
    { label: "Dedicated Servers", to: "/dedicated" },
    { label: "Business Email", to: "/business-email" },
    { label: "Domains", to: "/domains" },
    { label: "SSL Certificates", to: "/ssl" },
  ],
  Support: [
    { label: "Knowledge Base", to: "/knowledge-base" },
    { label: "Status Page", to: "/status" },
    { label: "Contact", to: "/contact" },
    { label: "Client Area", to: "/client/login" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Pricing", to: "/pricing" },
    { label: "Careers", to: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/legal/privacy" },
    { label: "Terms of Service", to: "/legal/terms" },
    { label: "Refund Policy", to: "/legal/refund" },
    { label: "Acceptable Use", to: "/legal/aup" },
    { label: "Cookie Policy", to: "/legal/cookies" },
  ],
} as const;

export const sharedPlans = [
  {
    name: "Starter",
    tagline: "For personal sites and portfolios",
    monthly: 149,
    yearly: 99,
    highlight: false,
    features: [
      "1 Website",
      "10 GB NVMe SSD Storage",
      "100 GB Bandwidth",
      "5 Business Emails",
      "Free SSL Certificate",
      "Free .in or .online domain",
      "Daily Backups",
      "LiteSpeed Cache",
      "cPanel + Softaculous",
      "24×7 Chat Support",
    ],
  },
  {
    name: "Business",
    tagline: "Most popular for growing brands",
    monthly: 349,
    yearly: 249,
    highlight: true,
    features: [
      "Unlimited Websites",
      "50 GB NVMe SSD Storage",
      "Unmetered Bandwidth",
      "Unlimited Business Emails",
      "Free SSL + Cloudflare CDN",
      "Free .com or .in domain",
      "Daily Backups + On-demand",
      "LiteSpeed + Object Cache",
      "Free Website Migration",
      "Priority 24×7 Support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For high-traffic stores and SaaS",
    monthly: 749,
    yearly: 549,
    highlight: false,
    features: [
      "Unlimited Websites",
      "200 GB NVMe SSD Storage",
      "Unmetered Bandwidth",
      "Unlimited Business Emails",
      "Free SSL + Premium CDN",
      "Free .com / .in / .net domain",
      "Hourly Backups",
      "Dedicated IP",
      "Free WHMCS License",
      "Dedicated Account Manager",
    ],
  },
];

export const vpsPlans = [
  { name: "VPS 1", cpu: "2 vCPU", ram: "4 GB", storage: "80 GB NVMe", bandwidth: "4 TB", price: 599 },
  { name: "VPS 2", cpu: "4 vCPU", ram: "8 GB", storage: "160 GB NVMe", bandwidth: "8 TB", price: 1099, highlight: true },
  { name: "VPS 3", cpu: "6 vCPU", ram: "16 GB", storage: "320 GB NVMe", bandwidth: "16 TB", price: 1999 },
  { name: "VPS 4", cpu: "8 vCPU", ram: "32 GB", storage: "640 GB NVMe", bandwidth: "32 TB", price: 3499 },
];

export const dedicatedPlans = [
  { name: "Intel Xeon E-2388G", cpu: "8C / 16T @ 3.2 GHz", ram: "64 GB DDR4", storage: "2 × 1 TB NVMe", bandwidth: "1 Gbps Unmetered", price: 9999 },
  { name: "AMD Ryzen 9 7950X", cpu: "16C / 32T @ 4.5 GHz", ram: "128 GB DDR5", storage: "2 × 2 TB NVMe", bandwidth: "1 Gbps Unmetered", price: 14999, highlight: true },
  { name: "Dual Xeon Gold 6338", cpu: "64C / 128T @ 2.0 GHz", ram: "256 GB DDR4 ECC", storage: "4 × 2 TB NVMe", bandwidth: "10 Gbps Unmetered", price: 29999 },
];

export const domainPrices = [
  { tld: ".com", reg: 899, renew: 1099, transfer: 899, popular: true },
  { tld: ".in", reg: 499, renew: 699, transfer: 499, popular: true },
  { tld: ".net", reg: 1099, renew: 1299, transfer: 1099 },
  { tld: ".org", reg: 999, renew: 1199, transfer: 999 },
  { tld: ".io", reg: 3299, renew: 3499, transfer: 3299, popular: true },
  { tld: ".ai", reg: 6999, renew: 7299, transfer: 6999 },
  { tld: ".dev", reg: 1499, renew: 1699, transfer: 1499 },
  { tld: ".co", reg: 2299, renew: 2499, transfer: 2299 },
  { tld: ".store", reg: 199, renew: 4499, transfer: 199 },
  { tld: ".tech", reg: 299, renew: 3999, transfer: 299 },
];

export const sslPlans = [
  { name: "DV SSL", desc: "Domain Validated — issued in minutes for blogs and small sites.", price: 599, features: ["256-bit encryption", "Issued in 5 minutes", "99.9% browser support", "Free reissue"] },
  { name: "OV SSL", desc: "Organization Validated — verified business identity for SMBs.", price: 3499, features: ["Business validation", "Site seal", "Issued in 1–3 days", "$1M warranty"], highlight: true },
  { name: "EV SSL", desc: "Extended Validation — the highest trust for enterprise sites.", price: 8999, features: ["Full legal vetting", "Green address bar", "Issued in 3–5 days", "$1.75M warranty"] },
  { name: "Wildcard SSL", desc: "Secure your domain and all subdomains with one certificate.", price: 4999, features: ["Unlimited subdomains", "256-bit encryption", "Free reissue", "$500K warranty"] },
];

export const emailPlans = [
  { name: "Email Starter", price: 49, perUser: true, features: ["10 GB Mailbox", "Spam & Virus Protection", "Webmail Access", "IMAP / POP / SMTP", "Mobile Sync"] },
  { name: "Email Business", price: 99, perUser: true, highlight: true, features: ["30 GB Mailbox", "Advanced Spam Filter", "Calendar & Contacts", "Mobile + Desktop Sync", "Shared Folders", "24×7 Support"] },
  { name: "Email Enterprise", price: 199, perUser: true, features: ["100 GB Mailbox", "AI Anti-Phishing", "Email Archiving", "DLP & Encryption", "Priority Support"] },
];

export const wpPlans = [
  { name: "WP Starter", monthly: 199, yearly: 129, sites: "1 WordPress site", storage: "20 GB NVMe", visits: "25,000 / month" },
  { name: "WP Pro", monthly: 449, yearly: 299, sites: "10 WordPress sites", storage: "100 GB NVMe", visits: "200,000 / month", highlight: true },
  { name: "WP Agency", monthly: 999, yearly: 749, sites: "Unlimited sites", storage: "300 GB NVMe", visits: "1M+ / month" },
];

export const testimonials = [
  { name: "Aarav Mehta", role: "Founder, Brewline Coffee", quote: "We migrated 12 stores to Evanoo in a weekend. Page loads dropped from 4.2s to 800ms — and our checkout conversion jumped 18%." },
  { name: "Priya Iyer", role: "CTO, Lendkart Fintech", quote: "Their managed VPS handles our peak loan traffic without breaking a sweat. The 24×7 team has answered every ticket in under 4 minutes." },
  { name: "Daniel Ortega", role: "Lead Dev, Northstar SaaS", quote: "Git deploys, Node 22, Docker support, daily backups — Evanoo gives us the dev workflow of Vercel with the control of bare metal." },
  { name: "Sneha Kapoor", role: "Marketing Head, Velvet Studio", quote: "Free migration, free SSL, free CDN — and a real human on chat at 2 AM. This is what hosting should feel like." },
];

export const faqs = [
  { q: "Do you offer a money-back guarantee?", a: "Yes. Every shared and WordPress hosting plan comes with a 30-day no-questions-asked refund. VPS and dedicated servers carry a 7-day refund window." },
  { q: "Can I migrate my existing website for free?", a: "Absolutely. Our migration team handles unlimited cPanel, WordPress, and custom-stack migrations for free on all paid plans, usually within 24 hours." },
  { q: "Where are your data centers located?", a: "Evanoo operates Tier-IV-grade data centers in Mumbai, Bengaluru, Singapore, Frankfurt, London, New York, and São Paulo, with Cloudflare's 300+ edge POPs in front." },
  { q: "What kind of uptime do you guarantee?", a: "We guarantee 99.9% uptime backed by a written SLA. If we miss it, you get prorated credits applied automatically to your next invoice." },
  { q: "Do you provide 24×7 support?", a: "Yes — live chat, ticketing, and phone support are staffed around the clock, every day of the year, by in-house engineers (no outsourced scripts)." },
  { q: "Can I upgrade my plan later?", a: "One-click upgrades are available from your client area. Resources scale instantly with zero downtime, and we prorate the difference for you." },
];

export const stats = [
  { value: "50,000+", label: "Websites Hosted" },
  { value: "12,000+", label: "Happy Clients" },
  { value: "75,000+", label: "Domains Managed" },
  { value: "99.99%", label: "Uptime Last Year" },
];

export const features = [
  { icon: "Zap", title: "LiteSpeed + NVMe", desc: "LSAPI, OPcache and NVMe SSDs deliver up to 12× faster load times than legacy Apache stacks." },
  { icon: "ShieldCheck", title: "Cloudflare Enterprise", desc: "Every plan includes Cloudflare CDN, DDoS protection, WAF rules and Argo smart routing — at no extra cost." },
  { icon: "Lock", title: "Free SSL, Forever", desc: "Auto-provisioned Let's Encrypt certificates with HTTP/3, TLS 1.3 and HSTS preload — set up in one click." },
  { icon: "Database", title: "Daily Off-site Backups", desc: "30-day rolling backups stored in a separate geographic region. One-click restore from your dashboard." },
  { icon: "Globe2", title: "7 Global Regions", desc: "Mumbai, Bengaluru, Singapore, Frankfurt, London, New York, São Paulo — pick the closest edge to your users." },
  { icon: "Terminal", title: "Built for Developers", desc: "Git push deploys, SSH, WP-CLI, Node 22, Python 3.12, PHP 8.3, Docker-ready VPS and a full REST API." },
  { icon: "LifeBuoy", title: "Real Humans, 24×7", desc: "In-house engineers respond on chat in under 60 seconds. No tier-1 scripts, no AI runaround." },
  { icon: "TrendingUp", title: "Scale Without Downtime", desc: "Upgrade RAM, CPU or storage with one click. Resources hot-attach with zero restart required." },
];

export const integrations = [
  "WHMCS", "Razorpay", "Stripe", "PayPal", "Cloudflare", "cPanel", "Plesk", "WordPress",
  "Let's Encrypt", "Sectigo", "OpenStack", "KVM", "Docker", "Kubernetes",
];
