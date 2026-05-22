export const buyerGuidePromo = {
  type: 'promo',
  href: '/enterprise-buyer-guide',
  prefetch: false,
  imagePath: '/assets/pexels-kamo11235-667838.jpg',
  imageWidth: 280,
  imageHeight: 160,
  title: 'Enterprise Browser Buyer Guide',
};

export const desktopNavItems = [
  {
    id: 'products',
    label: 'Products',
    href: '/products',
    dropdown: {
      panelWidth: 280,
      gridTemplateColumns: '1fr',
      splitColumns: false,
      sections: [
        {
          heading: 'Our Products',
          links: [
            { label: 'Oasis Browser', href: '/products/oasis-browser' },
            { label: 'Oasis Enterprise Browser', href: '/products/oasis-enterprise-browser' },
          ],
        },
      ],
    },
  },
  {
    id: 'learn',
    label: 'Learn',
    href: '/docs',
    dropdown: {
      panelWidth: 480,
      gridTemplateColumns: '1fr 1fr',
      splitColumns: true,
      sections: [
        {
          heading: 'Learn',
          links: [
            { label: 'Blog', href: '/blog' },
            { label: 'Wall of Love', href: '/wall-of-love' },
            { label: 'Docs', href: '/docs' },
            { label: 'Events', href: '/events' },
            { label: 'Press releases', href: '/press-releases' },
            { label: 'Data Leakage Consortium', href: '/data-leakage-consortium' },
          ],
        },
        buyerGuidePromo,
      ],
    },
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    prefetchTop: false,
    dropdown: {
      panelWidth: 280,
      gridTemplateColumns: '1fr 1fr',
      splitColumns: true,
      sections: [
        {
          heading: 'About Kahana',
          links: [
            { label: 'About', href: '/about', prefetch: false },
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
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/oasis-pricing',
  },
];

/**
 * Mobile drawer rows after CTAs (order preserved).
 * variant: default uses .mobile-link; buyer-guide uses featured card layout.
 */
export const mobileNavRows = [
  { label: 'Oasis Browser', href: '/products/oasis-browser' },
  { label: 'Enterprise Browser', href: '/products/oasis-enterprise-browser' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
  { label: 'Events', href: '/events' },
  { label: 'Press releases', href: '/press-releases' },
  { label: 'Data Leakage Consortium', href: '/data-leakage-consortium' },
  {
    variant: 'buyer-guide',
    label: 'Enterprise Browser Buyer Guide',
    subtitle: 'Comprehensive guide for enterprise decision makers',
    href: '/enterprise-buyer-guide',
    prefetch: false,
    imagePath: '/assets/pexels-kamo11235-667838.jpg',
  },
  { label: 'About Kahana', href: '/about', prefetch: false },
  { label: 'Press kit', href: '/press-kit' },
  { label: 'Support', href: '/support' },
  { label: 'Careers', href: '/careers' },
  { label: 'Pricing', href: '/oasis-pricing' },
];
