export const LAUNCH_BADGE_START = new Date('2026-05-27T00:01:00-07:00');
export const LAUNCH_END = new Date('2026-05-28T00:00:00-07:00');

/**
 * Local preview override via NEXT_PUBLIC_PH_LAUNCH_PREVIEW in .env.local:
 * - unset / false — use real schedule (pre-launch until May 27 12:01 AM PDT)
 * - prelaunch — banner + sections on; "Launching May 27" copy
 * - live (or legacy true) — launch-day badge + "We're live on Product Hunt" copy
 */
function resolveLaunchPreviewMode() {
  const raw = (process.env.NEXT_PUBLIC_PH_LAUNCH_PREVIEW || '').trim().toLowerCase();
  if (raw === 'prelaunch') return 'prelaunch';
  if (raw === 'live' || raw === 'true') return 'live';
  return 'off';
}

export const PRODUCT_HUNT_LAUNCH_PREVIEW_MODE = resolveLaunchPreviewMode();

/** @deprecated Use PRODUCT_HUNT_LAUNCH_PREVIEW_MODE === 'live' */
export const PRODUCT_HUNT_LAUNCH_DAY_PREVIEW = PRODUCT_HUNT_LAUNCH_PREVIEW_MODE === 'live';

export const PRODUCT_HUNT_PRODUCT_URL = 'https://www.producthunt.com/products/kahana';
export const PRODUCT_HUNT_EMBED_URL =
  'https://www.producthunt.com/products/kahana?embed=true&utm_source=embed&utm_medium=post_embed';
export const PRODUCT_HUNT_BADGE_URL =
  'https://www.producthunt.com/products/kahana?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-oasis-browser-for-mac';

export const PRODUCT_HUNT_POST_ID = '1146179';
export const PRODUCT_HUNT_BADGE_IMAGE = `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${PRODUCT_HUNT_POST_ID}&theme=light`;
export const PRODUCT_HUNT_BADGE_ALT =
  'Oasis Browser for Mac - A privacy-first ai browser that you can train | Product Hunt';

export const PRODUCT_HUNT_THUMBNAIL =
  'https://ph-files.imgix.net/b83aefb0-b6c2-408e-b4b8-9e4a0360e1d6.png';
export const PRODUCT_HUNT_TITLE = 'Oasis Browser for Mac';
export const PRODUCT_HUNT_TAGLINE = 'A privacy-first ai browser that you can train';

export function isProductHuntFeaturedBadgeActive() {
  if (PRODUCT_HUNT_LAUNCH_PREVIEW_MODE === 'live') return true;
  const now = new Date();
  return now >= LAUNCH_BADGE_START && now < LAUNCH_END;
}

export function isProductHuntLaunchActive() {
  if (PRODUCT_HUNT_LAUNCH_PREVIEW_MODE !== 'off') return true;
  return new Date() < LAUNCH_END;
}

export function isProductHuntPreLaunchActive() {
  if (PRODUCT_HUNT_LAUNCH_PREVIEW_MODE === 'prelaunch') return true;
  if (PRODUCT_HUNT_LAUNCH_PREVIEW_MODE === 'live') return false;
  const now = new Date();
  return now < LAUNCH_BADGE_START && now < LAUNCH_END;
}

export function isProductHuntGlobalBannerRoute(pathname) {
  if (!pathname) return false;
  return (
    pathname === '/' ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/features')
  );
}
