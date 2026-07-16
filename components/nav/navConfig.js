export const APP_URL = 'https://app.kahana.io';

/** Desktop primary nav text links (Explore is a CTA button on the right). */
export const desktopNavItems = [
  {
    id: 'help',
    label: 'Help',
    href: '/help',
  },
];

export const EXPLORE_URL = `${APP_URL}/explore`;

/**
 * Mobile drawer rows after CTAs (order preserved).
 * Explore is a CTA button in the drawer, not listed here.
 * Learn / About cluster links hidden for now.
 */
export const mobileNavRows = [
  { label: 'Help', href: '/help' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];
