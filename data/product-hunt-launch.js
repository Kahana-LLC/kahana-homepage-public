/** Kill switch — set false to hide all Product Hunt celebration UI site-wide. */
export const SHOW_PRODUCT_HUNT_CELEBRATION = true;

/**
 * Local preview override via NEXT_PUBLIC_PH_LAUNCH_PREVIEW in .env.local:
 * - unset — celebration UI follows SHOW_PRODUCT_HUNT_CELEBRATION
 * - celebration (or legacy live / true) — force celebration UI on
 * - off — force celebration UI off (local testing)
 */
function resolveLaunchPreviewMode() {
  const raw = (process.env.NEXT_PUBLIC_PH_LAUNCH_PREVIEW || '').trim().toLowerCase();
  if (raw === 'off' || raw === 'false') return 'off';
  if (raw === 'celebration' || raw === 'live' || raw === 'true') return 'celebration';
  return 'default';
}

export const PRODUCT_HUNT_LAUNCH_PREVIEW_MODE = resolveLaunchPreviewMode();

export const PRODUCT_HUNT_PRODUCT_URL = 'https://www.producthunt.com/products/kahana';
export const PRODUCT_HUNT_EMBED_URL =
  'https://www.producthunt.com/products/kahana?embed=true&utm_source=embed&utm_medium=post_embed';

export const PRODUCT_HUNT_POST_ID = '1146179';

export const PRODUCT_HUNT_TOP_POST_BADGE_URL =
  'https://www.producthunt.com/products/kahana?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_campaign=badge-oasis-browser-for-mac';
export const PRODUCT_HUNT_TOP_POST_BADGE_IMAGE = `https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=${PRODUCT_HUNT_POST_ID}&theme=light&period=daily`;

export const PRODUCT_HUNT_FEATURED_BADGE_URL =
  'https://www.producthunt.com/products/kahana?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-oasis-browser-for-mac';
export const PRODUCT_HUNT_FEATURED_BADGE_IMAGE = `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${PRODUCT_HUNT_POST_ID}&theme=light`;

/** @deprecated Use PRODUCT_HUNT_FEATURED_BADGE_URL */
export const PRODUCT_HUNT_BADGE_URL = PRODUCT_HUNT_FEATURED_BADGE_URL;
/** @deprecated Use PRODUCT_HUNT_FEATURED_BADGE_IMAGE */
export const PRODUCT_HUNT_BADGE_IMAGE = PRODUCT_HUNT_FEATURED_BADGE_IMAGE;

export const PRODUCT_HUNT_BADGE_ALT =
  'Oasis Browser for Mac - A privacy-first AI browser you can train anonymously | Product Hunt';

export const PRODUCT_HUNT_THUMBNAIL =
  'https://ph-files.imgix.net/b83aefb0-b6c2-408e-b4b8-9e4a0360e1d6.png';
export const PRODUCT_HUNT_TITLE = 'Oasis Browser for Mac';
export const PRODUCT_HUNT_TAGLINE =
  'A privacy-first AI browser you can train anonymously';

export const PRODUCT_HUNT_CELEBRATION_HEADLINE = '#4 Product of the Day';
export const PRODUCT_HUNT_CELEBRATION_SUBLINE =
  'Thank you to everyone who supported Oasis on Product Hunt.';
export const PRODUCT_HUNT_CELEBRATION_BANNER_DESKTOP =
  'Oasis finished #4 Product of the Day on Product Hunt — thank you for the support.';
export const PRODUCT_HUNT_CELEBRATION_BANNER_MOBILE =
  '#4 on Product Hunt — thank you!';

export function isProductHuntCelebrationActive() {
  if (PRODUCT_HUNT_LAUNCH_PREVIEW_MODE === 'off') return false;
  if (PRODUCT_HUNT_LAUNCH_PREVIEW_MODE === 'celebration') return true;
  return SHOW_PRODUCT_HUNT_CELEBRATION;
}

/** @deprecated Use isProductHuntCelebrationActive */
export function isProductHuntLaunchActive() {
  return isProductHuntCelebrationActive();
}

export function isProductHuntGlobalBannerRoute(pathname) {
  if (!pathname) return false;
  return (
    pathname === '/' ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/products') ||
    pathname.startsWith('/features')
  );
}
