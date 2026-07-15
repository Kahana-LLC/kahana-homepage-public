/**
 * Kahana platform features catalog for /features index (searchable tiles).
 * Oasis Browser / Enterprise items stay in oasisFeaturesCatalog.js.
 */

export const FEATURES_PER_PAGE = 9;

/** @typedef {'Discovery' | 'Knowledge' | 'Presence' | 'Quality' | 'Monetization' | 'Trust'} KahanaFeatureCategory */

/** @type {Array<{
 *   slug: string,
 *   title: string,
 *   excerpt: string,
 *   href: string,
 *   linkLabel: string,
 *   category: KahanaFeatureCategory,
 *   searchText: string,
 *   order: number,
 * }>} */
export const KAHANA_FEATURES = [
  {
    slug: 'explore',
    title: 'Explore',
    excerpt:
      'Public discovery with search and categories. Find hubs contributed by experts worldwide.',
    href: '/features/explore',
    linkLabel: 'How Explore works',
    category: 'Discovery',
    searchText:
      'explore discovery catalog search categories filters hubs creators tabs free paid price tags adult sort popular relevance browse marketplace',
    order: 1,
  },
  {
    slug: 'hubs',
    title: 'Hubs',
    excerpt:
      'Digital artifacts (files, videos, images, PDFs, documents, links, and more) plus collaborators in one curated place. Easy to open and easy to find.',
    href: '/features/hubs',
    linkLabel: 'How hubs work',
    category: 'Knowledge',
    searchText:
      'hubs workspace artifacts files videos images pdfs documents links notes collaborators roles owner admin write comment read private public explore list monetization analytics',
    order: 2,
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    excerpt: 'One link for your presence: hubs you have shared and the reputation you grow.',
    href: '/features/profiles',
    linkLabel: 'How profiles work',
    category: 'Presence',
    searchText:
      'profiles creator presence bio links storefront followers views saves aura purchases verified badge stripe connect charges_enabled linktree following saved',
    order: 3,
  },
  {
    slug: 'aura',
    title: 'Aura',
    excerpt:
      'The spirit of the library. Give Aura, see who gave it, and help the best contributions rise.',
    href: '/features/aura',
    linkLabel: 'How Aura works',
    category: 'Quality',
    searchText:
      'aura spirit library endorsement community signal daily budget five hubs quality no self-aura not money crypto star ratings recognition analytics',
    order: 4,
  },
  {
    slug: 'earning',
    title: 'Optional earning',
    excerpt:
      'Kahana began as knowledge sharing. Paid access came later, after a user asked for it. When your hubs earn demand, you can charge for access if you want. 5% platform take rate.',
    href: '/features/earning',
    linkLabel: 'How optional earning works',
    category: 'Monetization',
    searchText:
      'optional earning monetization paid access stripe connect paywall one-time monthly trial 5% take rate marketplace fee free growth selling storefront',
    order: 5,
  },
  {
    slug: 'trust',
    title: 'Trust',
    excerpt:
      'Adult content flags, age verification, and verified creators—so access stays intentional and sellers can show who’s charge-ready.',
    href: '/features/trust',
    linkLabel: 'How trust works',
    category: 'Trust',
    searchText:
      'trust adult content age verification date of birth 18+ verified creators stripe identity charges_enabled explore filter seo noindex intentional access legal',
    order: 6,
  },
];

/** Category labels in catalog order (first appearance). */
export function getKahanaFeatureCategories() {
  const seen = new Set();
  const categories = [];
  for (const feature of KAHANA_FEATURES) {
    if (!seen.has(feature.category)) {
      seen.add(feature.category);
      categories.push(feature.category);
    }
  }
  return categories;
}

/** Sorted catalog for browse (by `order`). */
export function getKahanaFeaturesSorted() {
  return [...KAHANA_FEATURES].sort((a, b) => a.order - b.order);
}
