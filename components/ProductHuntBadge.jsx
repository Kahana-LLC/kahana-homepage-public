import {
  PRODUCT_HUNT_BADGE_ALT,
  PRODUCT_HUNT_FEATURED_BADGE_IMAGE,
  PRODUCT_HUNT_FEATURED_BADGE_URL,
  PRODUCT_HUNT_TOP_POST_BADGE_IMAGE,
  PRODUCT_HUNT_TOP_POST_BADGE_URL,
} from '../data/product-hunt-launch';

const VARIANTS = {
  'top-post': {
    href: PRODUCT_HUNT_TOP_POST_BADGE_URL,
    src: PRODUCT_HUNT_TOP_POST_BADGE_IMAGE,
  },
  featured: {
    href: PRODUCT_HUNT_FEATURED_BADGE_URL,
    src: PRODUCT_HUNT_FEATURED_BADGE_IMAGE,
  },
};

export default function ProductHuntBadge({
  variant = 'top-post',
  className = '',
  imgClassName = 'h-10 w-auto sm:h-11 md:h-[54px] md:w-[250px]',
  width = 250,
  height = 54,
}) {
  const config = VARIANTS[variant] || VARIANTS['top-post'];

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 no-underline hover:no-underline focus:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oasis-green-600 ${className}`}
      aria-label={PRODUCT_HUNT_BADGE_ALT}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={config.src}
        alt=""
        width={width}
        height={height}
        className={imgClassName}
      />
    </a>
  );
}
