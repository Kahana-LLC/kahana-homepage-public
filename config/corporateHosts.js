/**
 * Phase 1 corporate subdomain map (DOMAIN_CONSOLIDATION_CHARTER.md).
 *
 * Each host serves this same Next app (apex unchanged). Only `/` is rewritten
 * to the surface home; all other paths work as on the apex so nav/footer
 * keep working during the additive phase.
 *
 * Phase 2.5: apex Host=kahana.io (and auralibrary.org) 301s marketing paths
 * to these hosts (see config/apexRedirects.js). Preferred sitemap locs stay on
 * kahana.io corporate origins.
 */

export const PRODUCTION_SUFFIX = 'kahana.io';

/** Additional production brand suffix (same surfaces / routes). */
export const ALT_PRODUCTION_SUFFIX = 'auralibrary.org';

export const PRODUCTION_SUFFIXES = [PRODUCTION_SUFFIX, ALT_PRODUCTION_SUFFIX];

/**
 * @typedef {'about' | 'newsroom' | 'careers' | 'help'} CorporateSurfaceId
 */

/**
 * @type {Record<CorporateSurfaceId, {
 *   id: CorporateSurfaceId,
 *   host: string,
 *   label: string,
 *   homePath: string | null,
 *   description: string,
 *   primaryPaths: string[],
 * }>}
 */
export const CORPORATE_SURFACES = {
  about: {
    id: 'about',
    host: `about.${PRODUCTION_SUFFIX}`,
    label: 'About',
    // Marketing homepage (same as today’s apex `/`)
    homePath: null,
    description: 'Company / marketing home (current kahana.io homepage experience)',
    primaryPaths: ['/', '/about', '/team', '/manifesto', '/products', '/help', '/faq'],
  },
  newsroom: {
    id: 'newsroom',
    host: `newsroom.${PRODUCTION_SUFFIX}`,
    label: 'Newsroom',
    homePath: '/blog',
    description: 'News, blog, press, and events',
    primaryPaths: [
      '/blog',
      '/press',
      '/press-kit',
      '/press-releases',
      '/events',
      '/white-papers',
    ],
  },
  careers: {
    id: 'careers',
    host: `careers.${PRODUCTION_SUFFIX}`,
    label: 'Careers',
    homePath: '/careers',
    description: 'Careers and related hiring pages',
    primaryPaths: ['/careers', '/learning-internship', '/right-to-work'],
  },
  help: {
    id: 'help',
    host: `help.${PRODUCTION_SUFFIX}`,
    label: 'Help',
    homePath: '/help',
    description: 'Help center and support hub',
    primaryPaths: ['/help', '/docs', '/support', '/community', '/community-faq', '/community-guidelines'],
  },
};

export const SURFACE_BY_HOST = Object.fromEntries(
  Object.values(CORPORATE_SURFACES).map((surface) => [surface.host, surface])
);

/** Map alternate brand hosts (e.g. about.auralibrary.org) → same surfaces. */
for (const surface of Object.values(CORPORATE_SURFACES)) {
  for (const suffix of PRODUCTION_SUFFIXES) {
    if (suffix === PRODUCTION_SUFFIX) continue;
    SURFACE_BY_HOST[`${surface.id}.${suffix}`] = surface;
  }
}

/** Beta hosts for kahana-public-beta QA (same surfaces as production). */
export const BETA_HOST_SUFFIX = `-beta.${PRODUCTION_SUFFIX}`;

export const SURFACE_BY_BETA_HOST = Object.fromEntries(
  Object.values(CORPORATE_SURFACES).map((surface) => [
    `${surface.id}${BETA_HOST_SUFFIX}`,
    surface,
  ])
);

for (const surface of Object.values(CORPORATE_SURFACES)) {
  for (const suffix of PRODUCTION_SUFFIXES) {
    if (suffix === PRODUCTION_SUFFIX) continue;
    SURFACE_BY_BETA_HOST[`${surface.id}-beta.${suffix}`] = surface;
  }
}

/**
 * @param {string | null | undefined} surfaceId
 * @returns {typeof CORPORATE_SURFACES[CorporateSurfaceId] | null}
 */
export function getCorporateSurfaceById(surfaceId) {
  if (!surfaceId) return null;
  const id = String(surfaceId).toLowerCase();
  return CORPORATE_SURFACES[id] ?? null;
}

/**
 * Apex host (no subdomain) for a request host on a known brand suffix.
 * @param {string | null | undefined} hostHeader
 * @returns {string} e.g. kahana.io | auralibrary.org
 */
export function resolveApexHostname(hostHeader) {
  if (!hostHeader) return PRODUCTION_SUFFIX;
  const host = hostHeader.split(':')[0].toLowerCase();
  for (const suffix of PRODUCTION_SUFFIXES) {
    if (host === suffix || host === `www.${suffix}` || host.endsWith(`.${suffix}`)) {
      return suffix;
    }
  }
  return PRODUCTION_SUFFIX;
}

/**
 * @param {string | null | undefined} hostHeader
 * @returns {typeof CORPORATE_SURFACES[CorporateSurfaceId] | null}
 */
export function resolveCorporateSurface(hostHeader) {
  if (!hostHeader) return null;
  const host = hostHeader.split(':')[0].toLowerCase();

  if (SURFACE_BY_HOST[host]) {
    return SURFACE_BY_HOST[host];
  }

  if (SURFACE_BY_BETA_HOST[host]) {
    return SURFACE_BY_BETA_HOST[host];
  }

  // Local / preview: about.localhost, newsroom.localhost:3000, etc.
  const local = host.match(/^(about|newsroom|careers|help)\.localhost$/);
  if (local) {
    return CORPORATE_SURFACES[local[1]] ?? null;
  }

  return null;
}

/**
 * Heroku review / *.herokuapp.com hosts cannot use newsroom.<app>.herokuapp.com
 * (nested subdomains are not provisioned). Allow an explicit surface override
 * on preview hosts only via ?kahana_surface=newsroom or x-kahana-surface.
 */
export function isPreviewHost(hostHeader) {
  if (!hostHeader) return false;
  const host = hostHeader.split(':')[0].toLowerCase();
  return (
    host.endsWith('.herokuapp.com') ||
    host === 'localhost' ||
    host.endsWith('.localhost') ||
    host === '127.0.0.1'
  );
}

export function listCorporateHosts() {
  return Object.keys(SURFACE_BY_HOST);
}

export function listBetaCorporateHosts() {
  return Object.keys(SURFACE_BY_BETA_HOST);
}
