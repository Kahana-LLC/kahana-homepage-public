/**
 * Phase 2.5 — apex (kahana.io) marketing paths → corporate subdomains.
 * Used only when Host is kahana.io (not about/newsroom/careers/help).
 *
 * @see docs/PHASE2_5_APEX_REDIRECT_MAP.md
 */

export const ABOUT_ORIGIN = 'https://about.kahana.io';
export const NEWSROOM_ORIGIN = 'https://newsroom.kahana.io';
export const CAREERS_ORIGIN = 'https://careers.kahana.io';
export const HELP_ORIGIN = 'https://help.kahana.io';

/** Hosts that should run apex → subdomain 301s */
export const APEX_MARKETING_HOSTS = new Set(['kahana.io', 'www.kahana.io']);

export function isApexMarketingHost(host) {
  return Boolean(host) && APEX_MARKETING_HOSTS.has(host);
}

/**
 * Path-preserving prefix rules (longest match wins).
 * destinationPath = pathname (unchanged) on target origin.
 */
const PATH_PRESERVE_PREFIXES = [
  { prefix: '/press-releases', origin: NEWSROOM_ORIGIN },
  { prefix: '/white-papers', origin: NEWSROOM_ORIGIN },
  { prefix: '/learning-internship', origin: CAREERS_ORIGIN },
  { prefix: '/right-to-work', origin: CAREERS_ORIGIN },
  { prefix: '/community-guidelines', origin: HELP_ORIGIN },
  { prefix: '/community-faq', origin: HELP_ORIGIN },
  { prefix: '/press-kit', origin: ABOUT_ORIGIN },
  { prefix: '/testimonials', origin: ABOUT_ORIGIN },
  { prefix: '/privacy-policy', origin: ABOUT_ORIGIN },
  { prefix: '/terms-and-conditions', origin: ABOUT_ORIGIN },
  { prefix: '/manifesto', origin: ABOUT_ORIGIN },
  { prefix: '/security-guide', origin: ABOUT_ORIGIN },
  { prefix: '/security', origin: ABOUT_ORIGIN },
  { prefix: '/careers', origin: CAREERS_ORIGIN },
  { prefix: '/pricing', origin: ABOUT_ORIGIN },
  { prefix: '/contact', origin: ABOUT_ORIGIN },
  { prefix: '/support', origin: HELP_ORIGIN },
  { prefix: '/community', origin: HELP_ORIGIN },
  { prefix: '/events', origin: NEWSROOM_ORIGIN },
  { prefix: '/press', origin: NEWSROOM_ORIGIN },
  { prefix: '/about', origin: ABOUT_ORIGIN },
  { prefix: '/team', origin: ABOUT_ORIGIN },
  { prefix: '/blog', origin: NEWSROOM_ORIGIN },
  { prefix: '/docs', origin: HELP_ORIGIN },
];

/**
 * Prefixes cleared from apex → org home on about (Oasis / legacy product marketing).
 */
const OASIS_LEFTOVER_PREFIXES = [
  '/products',
  '/features',
  '/markets',
  '/solutions',
  '/use-cases',
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
 * @returns {{ origin: string, pathname: string } | null}
 */
export function resolveApexRedirect(pathname) {
  const path = normalizePathname(pathname);

  if (path === '/' || path === '') {
    return { origin: ABOUT_ORIGIN, pathname: '/' };
  }

  // Never redirect API from this table (middleware should skip /api first)
  if (path === '/api' || path.startsWith('/api/')) {
    return null;
  }

  // Longest prefix among path-preserving rules
  let best = null;
  for (const rule of PATH_PRESERVE_PREFIXES) {
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
        return { origin: ABOUT_ORIGIN, pathname: '/' };
      }
    } else if (path === prefix || path.startsWith(`${prefix}/`)) {
      return { origin: ABOUT_ORIGIN, pathname: '/' };
    }
  }

  // Default: any other apex page → about home (clear apex for product)
  return { origin: ABOUT_ORIGIN, pathname: '/' };
}

/**
 * @param {string} pathname
 * @param {string} [search]
 * @returns {string | null} absolute Location URL
 */
export function buildApexRedirectUrl(pathname, search = '') {
  const target = resolveApexRedirect(pathname);
  if (!target) return null;
  const basePath = target.pathname === '/' ? '/' : target.pathname;
  return `${target.origin}${basePath}${search || ''}`;
}

export function apexMarketingRedirectsEnabled() {
  // Default on; set ENABLE_APEX_MARKETING_REDIRECTS=false to disable (local/debug).
  return process.env.ENABLE_APEX_MARKETING_REDIRECTS !== 'false';
}
