/**
 * Marketing site URL helpers.
 * After Phase 2.5, indexed company URLs prefer corporate subdomains;
 * SITE_URL stays apex for legacy absoluteUrl callers and asset roots.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://kahana.io').replace(
  /\/$/,
  ''
);

const ABOUT_ORIGIN = 'https://about.kahana.io';
const NEWSROOM_ORIGIN = 'https://newsroom.kahana.io';
const CAREERS_ORIGIN = 'https://careers.kahana.io';
const HELP_ORIGIN = 'https://help.kahana.io';

function absoluteUrl(path = '') {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Absolute URL on the preferred corporate host for a path (Phase 2.5 SEO).
 * Falls back to about.kahana.io for company/legal leftovers.
 */
function absoluteCorporateUrl(path = '/') {
  const pathname = !path || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;

  if (pathname === '/') return `${ABOUT_ORIGIN}/`;

  const newsroom = ['/blog', '/press', '/press-releases', '/events', '/white-papers'];
  const careers = ['/careers', '/learning-internship', '/right-to-work'];
  const help = ['/help', '/docs', '/support', '/community', '/community-guidelines', '/community-faq'];
  const about = [
    '/about',
    '/team',
    '/manifesto',
    '/security',
    '/security-guide',
    '/press-kit',
    '/pricing',
        '/faq',
    '/aura',
    '/success-stories',
    '/use-cases',
    '/testimonials',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  const matchPrefix = (prefixes, origin) => {
    for (const prefix of prefixes) {
      if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
        return `${origin}${pathname}`;
      }
    }
    return null;
  };

  // Contact is canonical on apex, not about.kahana.io
  if (pathname === '/contact' || pathname.startsWith('/contact/')) {
    return `${SITE_URL}${pathname}`;
  }

  return (
    matchPrefix(newsroom, NEWSROOM_ORIGIN) ||
    matchPrefix(careers, CAREERS_ORIGIN) ||
    matchPrefix(help, HELP_ORIGIN) ||
    matchPrefix(about, ABOUT_ORIGIN) ||
    `${ABOUT_ORIGIN}${pathname === '/' ? '/' : pathname}`
  );
}

module.exports = {
  SITE_URL,
  ABOUT_ORIGIN,
  NEWSROOM_ORIGIN,
  CAREERS_ORIGIN,
  HELP_ORIGIN,
  absoluteUrl,
  absoluteCorporateUrl,
};
