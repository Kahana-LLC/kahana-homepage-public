import ProductHuntBadge from './ProductHuntBadge';
import {
  isProductHuntCelebrationActive,
  PRODUCT_HUNT_CELEBRATION_HEADLINE,
  PRODUCT_HUNT_CELEBRATION_SUBLINE,
  PRODUCT_HUNT_PRODUCT_URL,
} from '../data/product-hunt-launch';

export default function ProductHuntLaunchSection({ className = '' }) {
  if (!isProductHuntCelebrationActive()) return null;

  return (
    <section className={`text-center ${className}`} aria-labelledby="product-hunt-celebration-heading">
      <h2 id="product-hunt-celebration-heading" className="text-2xl font-bold text-oasis-green-900">
        {PRODUCT_HUNT_CELEBRATION_HEADLINE} on Product Hunt
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-oasis-green-800">
        {PRODUCT_HUNT_CELEBRATION_SUBLINE}{' '}
        <a
          href={PRODUCT_HUNT_PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#4A6200] no-underline hover:underline"
        >
          See the launch page
        </a>
        .
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <ProductHuntBadge variant="top-post" />
        <ProductHuntBadge variant="featured" />
      </div>
    </section>
  );
}
