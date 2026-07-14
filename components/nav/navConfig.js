export const APP_URL = 'https://app.kahana.io';

export const desktopNavItems = [
  {
    id: 'discover',
    label: 'Discover',
    href: 'https://kahana.io',
    external: true,
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 'learn',
    label: 'Learn',
    href: '/blog',
    dropdown: {
      panelWidth: 280,
      gridTemplateColumns: '1fr',
      splitColumns: false,
      sections: [
        {
          heading: 'Learn',
          links: [
            { label: 'Blog', href: '/blog' },
            { label: 'Docs', href: '/docs' },
            { label: 'Events', href: '/events' },
            { label: 'Press releases', href: '/press-releases' },
          ],
        },
      ],
    },
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    dropdown: {
      panelWidth: 280,
      gridTemplateColumns: '1fr 1fr',
      splitColumns: true,
      sections: [
        {
          heading: 'About Kahana',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Team', href: '/team', prefetch: false },
            { label: 'Careers', href: '/careers' },
            { label: 'Press kit', href: '/press-kit' },
          ],
        },
        {
          heading: 'Get Started',
          links: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'Support', href: '/support' },
          ],
        },
      ],
    },
  },
];

/**
 * Mobile drawer rows after CTAs (order preserved).
 */
export const mobileNavRows = [
  { label: 'Discover', href: 'https://kahana.io', external: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
  { label: 'Events', href: '/events' },
  { label: 'Press releases', href: '/press-releases' },
  { label: 'About Kahana', href: '/about', prefetch: false },
  { label: 'Team', href: '/team', prefetch: false },
  { label: 'Careers', href: '/careers' },
  { label: 'Press kit', href: '/press-kit' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];
