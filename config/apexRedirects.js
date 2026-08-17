/**
 * Phase 2.5 — apex marketing paths → corporate subdomains.
 * Used only when Host is an apex marketing host (kahana.io / auralibrary.org),
 * not about/newsroom/careers/help.
 *
 * @see docs/PHASE2_5_APEX_REDIRECT_MAP.md
 */

export const ABOUT_ORIGIN = 'https://about.kahana.io';
export const NEWSROOM_ORIGIN = 'https://newsroom.kahana.io';
export const CAREERS_ORIGIN = 'https://careers.kahana.io';
export const HELP_ORIGIN = 'https://help.kahana.io';

/** Hosts that should run apex → subdomain 301s */
export const APEX_MARKETING_HOSTS = new Set([
  'kahana.io',
  'www.kahana.io',
  'auralibrary.org',
  'www.auralibrary.org',
]);

/**
 * @param {string | null | undefined} host
 * @returns {'kahana.io' | 'auralibrary.org'}
 */
export function corporateSuffixForApexHost(host) {
  const h = (host || '').split(':')[0].toLowerCase();
  if (h === 'auralibrary.org' || h === 'www.auralibrary.org' || h.endsWith('.auralibrary.org')) {
    return 'auralibrary.org';
  }
  return 'kahana.io';
}

/**
 * @param {string | null | undefined} host
 */
export function corporateOriginsForHost(host) {
  const suffix = corporateSuffixForApexHost(host);
  return {
    about: `https://about.${suffix}`,
    newsroom: `https://newsroom.${suffix}`,
    careers: `https://careers.${suffix}`,
    help: `https://help.${suffix}`,
  };
}

export function isApexMarketingHost(host) {
  return Boolean(host) && APEX_MARKETING_HOSTS.has(host);
}

/**
 * Path-preserving prefix rules (longest match wins).
 * destinationPath = pathname (unchanged) on target origin.
 * @param {{ about: string, newsroom: string, careers: string, help: string }} origins
 */
function pathPreservePrefixes(origins) {
  return [
    { prefix: '/press-releases', origin: origins.newsroom },
    { prefix: '/white-papers', origin: origins.newsroom },
    { prefix: '/learning-internship', origin: origins.careers },
    { prefix: '/right-to-work', origin: origins.careers },
    { prefix: '/community-guidelines', origin: origins.help },
    { prefix: '/community-faq', origin: origins.help },
    { prefix: '/press-kit', origin: origins.about },
    { prefix: '/testimonials', origin: origins.about },
    { prefix: '/privacy-policy', origin: origins.about },
    { prefix: '/terms-and-conditions', origin: origins.about },
    { prefix: '/manifesto', origin: origins.about },
    { prefix: '/security-guide', origin: origins.about },
    { prefix: '/security', origin: origins.about },
    { prefix: '/careers', origin: origins.careers },
    { prefix: '/pricing', origin: origins.about },
    { prefix: '/faq', origin: origins.about },
    { prefix: '/aura', origin: origins.about },
    { prefix: '/success-stories', origin: origins.about },
    { prefix: '/use-cases', origin: origins.about },
    // /contact stays on apex — do not send to about
    { prefix: '/support', origin: origins.help },
    { prefix: '/community', origin: origins.help },
    { prefix: '/events', origin: origins.newsroom },
    { prefix: '/press', origin: origins.newsroom },
    { prefix: '/about', origin: origins.about },
    { prefix: '/team', origin: origins.about },
    { prefix: '/blog', origin: origins.newsroom },
    { prefix: '/help', origin: origins.help },
    { prefix: '/docs', origin: origins.help },
  ];
}

/**
 * Prefixes cleared from apex → org home on about (Oasis / legacy product marketing).
 */
const OASIS_LEFTOVER_PREFIXES = [
  '/products',
  // Oasis /features/* leftovers redirected in resolveApexRedirect (not path-preserved)
  '/markets',
  '/solutions',
  '/oasis-',
  '/oasis-auth',
  '/oasis-pricing',
  '/oasis-waitlist',
  '/oasis-beta-program',
  '/oasis-mobile',
  '/oasis-augmented-reality',
  '/oasis-nps',
  '/oasis-pmf',
  '/oasis-feedback-survey',
  '/enterprise-buyer-guide',
  '/buyers-guide',
  '/data-leakage-consortium',
  '/installations',
  '/schedule-demo',
  '/sales',
  '/thankyou-demo',
  '/customers',
  '/resources',
  '/download-future',
  '/appendix-future',
  '/references-future',
  '/early-bird',
  '/marketing-kit',
  '/kahana-health-survey',
  '/explore',
  '/confirm-success',
  '/forgot-password',
  '/update-password',
  '/password-reset-success',
  '/oauth-callback',
  '/adam-kershner',
];

function normalizePathname(pathname) {
  if (!pathname) return '/';
  // strip trailing slash except root
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/**
 * @param {string} pathname
 * @param {string} [host] apex host (defaults to kahana.io origins)
 * @returns {{ origin: string, pathname: string } | null}
 */
export function resolveApexRedirect(pathname, host = 'kahana.io') {
  const path = normalizePathname(pathname);
  const origins = corporateOriginsForHost(host);

  if (path === '/' || path === '') {
    return { origin: origins.about, pathname: '/' };
  }

  // Never redirect API from this table (middleware should skip /api first)
  if (path === '/api' || path.startsWith('/api/')) {
    return null;
  }

  // Contact lives on apex, not about.*
  if (path === '/contact' || path.startsWith('/contact/')) {
    return null;
  }

  // Legacy /features URLs → help host (Next redirects path to /help topics).
  // Oasis feature deep-dives → about home.
  if (path === '/features' || path.startsWith('/features/')) {
    const isOasisFeature =
      path.startsWith('/features/oasis') || path === '/features/user-analytics';
    if (isOasisFeature) {
      return { origin: origins.about, pathname: '/' };
    }
    return { origin: origins.help, pathname: path };
  }

  // Longest prefix among path-preserving rules
  let best = null;
  for (const rule of pathPreservePrefixes(origins)) {
    if (path === rule.prefix || path.startsWith(`${rule.prefix}/`)) {
      if (!best || rule.prefix.length > best.prefix.length) {
        best = rule;
      }
    }
  }
  if (best) {
    return { origin: best.origin, pathname: path };
  }

  for (const prefix of OASIS_LEFTOVER_PREFIXES) {
    if (prefix.endsWith('-')) {
      // e.g. /oasis- matches /oasis-waitlist
      if (path.startsWith(prefix) || path === prefix.slice(0, -1)) {
        return { origin: origins.about, pathname: '/' };
      }
    } else if (path === prefix || path.startsWith(`${prefix}/`)) {
      return { origin: origins.about, pathname: '/' };
    }
  }

  // Default: any other apex page → about home (clear apex for product)
  return { origin: origins.about, pathname: '/' };
}

/**
 * @param {string} pathname
 * @param {string} [search]
 * @param {string} [host]
 * @returns {string | null} absolute Location URL
 */
export function buildApexRedirectUrl(pathname, search = '', host = 'kahana.io') {
  const target = resolveApexRedirect(pathname, host);
  if (!target) return null;
  const basePath = target.pathname === '/' ? '/' : target.pathname;
  return `${target.origin}${basePath}${search || ''}`;
}

export function apexMarketingRedirectsEnabled() {
  // Default on; set ENABLE_APEX_MARKETING_REDIRECTS=false to disable (local/debug).
  return process.env.ENABLE_APEX_MARKETING_REDIRECTS !== 'false';
}
