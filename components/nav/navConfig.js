import { APP_URL, EXPLORE_URL } from '../../lib/productLinks';

export { APP_URL, EXPLORE_URL };

/** Canonical contact form (apex — not about.kahana.io). */
export const CONTACT_URL = 'https://kahana.io/contact';

/** Desktop primary nav text links (Explore is a CTA button on the right). */
export const desktopNavItems = [
  {
    id: 'help',
    label: 'Help',
    href: '/help',
  },
];

/**
 * Mobile drawer rows after CTAs (order preserved).
 * Explore is a CTA button in the drawer, not listed here.
 * Learn / About cluster links hidden for now.
 */
export const mobileNavRows = [
  { label: 'Help', href: '/help' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: CONTACT_URL, external: true },
];
