import { APP_URL, EXPLORE_URL, productHref, withProductUtm } from '../../lib/productLinks';

export { APP_URL, EXPLORE_URL };

/** Canonical contact form (product app at kahana.io — not about.kahana.io). */
export const CONTACT_URL = 'https://kahana.io/contact';

/** Prefills product /contact for partnership outreach. */
export const PARTNERSHIP_CONTACT_URL = withProductUtm(
  `${CONTACT_URL}?source=partnerships`,
  { campaign: 'partnerships' },
);

/** Prefills product /contact for integration / API outreach. */
export const INTEGRATION_CONTACT_URL = withProductUtm(
  `${CONTACT_URL}?source=integrations`,
  { campaign: 'integrations' },
);

const GROWTH_TRIAL_HREF = productHref(
  '/billing?intent=sell&trial=growth',
  'nav_growth_trial',
);

const SUPPORT_HREF = withProductUtm('https://kahana.io/support', {
  campaign: 'nav_support',
});

/**
 * Desktop primary nav — simple links only (no mega-menu).
 * Philosophy and Help sit together; NavbarDup draws a divider between them.
 */
export const desktopNavItems = [
  {
    id: 'philosophy',
    label: 'Philosophy',
    href: '/philosophy',
  },
  {
    id: 'help',
    label: 'Help',
    href: '/help',
  },
];

/**
 * Mobile drawer groups (footer destinations, nav-optimized).
 */
export const mobileNavSections = [
  {
    heading: 'Creators & learners',
    links: [
      { label: 'For learners', href: '/learners' },
      { label: 'Benefits for learners', href: '/learner-benefits' },
      { label: 'Kahana for creators', href: '/creators' },
      { label: 'Benefits for creators', href: '/creator-benefits' },
      { label: 'Pricing', href: '/pricing' },
      {
        label: '14-day Growth trial',
        href: GROWTH_TRIAL_HREF,
        external: true,
      },
      { label: 'Become an affiliate', href: '/affiliates' },
      { label: 'Content safety', href: '/creator-safety' },
    ],
  },
  {
    heading: 'Product & resources',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Use cases', href: '/use-cases' },
      { label: 'Your stack', href: '/compare' },
      { label: 'Suggestion engine', href: '/suggestion-engine' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Creator stories', href: '/success-stories' },
      { label: 'What to post', href: '/do-well' },
      { label: 'Contact', href: CONTACT_URL, external: true },
      { label: 'Support', href: SUPPORT_HREF, external: true },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'Philosophy', href: '/philosophy' },
      { label: 'Value exchange', href: '/value-exchange' },
      { label: 'Help', href: '/help' },
      { label: 'Partnerships', href: PARTNERSHIP_CONTACT_URL, external: true },
      { label: 'Integrations', href: INTEGRATION_CONTACT_URL, external: true },
      { label: 'Full sitemap', href: '/sitemap' },
    ],
  },
];

/** @deprecated Prefer mobileNavSections — kept for any leftover imports. */
export const mobileNavRows = mobileNavSections.flatMap((section) =>
  section.links ? section.links : [],
);
