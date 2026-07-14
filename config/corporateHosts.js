/**
 * Phase 1 corporate subdomain map (DOMAIN_CONSOLIDATION_CHARTER.md).
 *
 * Each host serves this same Next app (apex unchanged). Only `/` is rewritten
 * to the surface home; all other paths work as on kahana.io so nav/footer
 * keep working during the additive phase.
 *
 * Canonical URLs stay on https://kahana.io until Phase 2.5 / 3.
 */

export const PRODUCTION_SUFFIX = 'kahana.io';

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
    primaryPaths: ['/', '/about', '/team', '/manifesto', '/products', '/contact'],
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
    homePath: '/docs',
    description: 'Help center, docs, and support hub',
    primaryPaths: ['/docs', '/support', '/community', '/community-faq', '/community-guidelines'],
  },
};

export const SURFACE_BY_HOST = Object.fromEntries(
  Object.values(CORPORATE_SURFACES).map((surface) => [surface.host, surface])
);

/** Beta hosts for kahana-public-beta QA (same surfaces as production). */
export const BETA_HOST_SUFFIX = `-beta.${PRODUCTION_SUFFIX}`;

export const SURFACE_BY_BETA_HOST = Object.fromEntries(
  Object.values(CORPORATE_SURFACES).map((surface) => [
    `${surface.id}${BETA_HOST_SUFFIX}`,
    surface,
  ])
);

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
  return Object.values(CORPORATE_SURFACES).map((s) => s.host);
}

export function listBetaCorporateHosts() {
  return Object.keys(SURFACE_BY_BETA_HOST);
}
