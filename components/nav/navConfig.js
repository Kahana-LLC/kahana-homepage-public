export const APP_URL = 'https://app.kahana.io';

/** Desktop primary nav — Learn / About dropdowns hidden for now (pages still exist). */
export const desktopNavItems = [
  {
    id: 'explore',
    label: 'Explore',
    href: `${APP_URL}/explore`,
    external: true,
  },
  {
    id: 'features',
    label: 'Features',
    href: '/features',
  },
];

/**
 * Mobile drawer rows after CTAs (order preserved).
 * Explore is a CTA button in the drawer, not listed here.
 * Learn / About cluster links hidden for now.
 */
export const mobileNavRows = [
  { label: 'Features', href: '/features' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];
