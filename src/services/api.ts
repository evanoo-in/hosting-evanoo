import {
  sharedPlans,
  vpsPlans,
  dedicatedPlans,
  wpPlans,
  emailPlans,
  sslPlans,
  domainPrices,
  testimonials,
  faqs,
  stats,
  features,
  nav,
  footerNav,
} from "@/data/site";

const PLACEHOLDER_BASE = "/api";

async function fakeFetch<T>(data: T): Promise<T> {
  return Promise.resolve(data);
}

export const api = {
  plans: {
    getShared: () => fakeFetch(sharedPlans),
    getVPS: () => fakeFetch(vpsPlans),
    getDedicated: () => fakeFetch(dedicatedPlans),
    getWordPress: () => fakeFetch(wpPlans),
    getEmail: () => fakeFetch(emailPlans),
    getSSL: () => fakeFetch(sslPlans),
  },
  domains: {
    getPrices: () => fakeFetch(domainPrices),
    search: (_query: string) =>
      fakeFetch({ available: true, suggestions: [] as string[] }),
  },
  marketing: {
    getTestimonials: () => fakeFetch(testimonials),
    getFAQs: () => fakeFetch(faqs),
    getStats: () => fakeFetch(stats),
    getFeatures: () => fakeFetch(features),
  },
  nav: {
    getMain: () => fakeFetch(nav),
    getFooter: () => fakeFetch(footerNav),
  },
};

export const endpoints = {
  plans: {
    shared: `${PLACEHOLDER_BASE}/plans/shared`,
    vps: `${PLACEHOLDER_BASE}/plans/vps`,
    dedicated: `${PLACEHOLDER_BASE}/plans/dedicated`,
    wordpress: `${PLACEHOLDER_BASE}/plans/wordpress`,
    email: `${PLACEHOLDER_BASE}/plans/email`,
    ssl: `${PLACEHOLDER_BASE}/plans/ssl`,
  },
  domains: {
    prices: `${PLACEHOLDER_BASE}/domains/prices`,
    search: `${PLACEHOLDER_BASE}/domains/search`,
  },
};
