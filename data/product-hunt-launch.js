export const LAUNCH_BADGE_START = new Date('2026-05-27T00:01:00-07:00');
export const LAUNCH_END = new Date('2026-05-28T00:00:00-07:00');

/** Set NEXT_PUBLIC_PH_LAUNCH_PREVIEW=true in .env.local to preview launch-day UI locally. */
export const PRODUCT_HUNT_LAUNCH_DAY_PREVIEW =
  process.env.NEXT_PUBLIC_PH_LAUNCH_PREVIEW === 'true';

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
  if (PRODUCT_HUNT_LAUNCH_DAY_PREVIEW) return true;
  const now = new Date();
  return now >= LAUNCH_BADGE_START && now < LAUNCH_END;
}

export function isProductHuntLaunchActive() {
  if (PRODUCT_HUNT_LAUNCH_DAY_PREVIEW) return true;
  return new Date() < LAUNCH_END;
}

export function isProductHuntPreLaunchActive() {
  if (PRODUCT_HUNT_LAUNCH_DAY_PREVIEW) return false;
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
