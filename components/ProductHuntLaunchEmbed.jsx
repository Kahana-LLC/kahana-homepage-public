import Image from 'next/image';
import {
  isProductHuntLaunchActive,
  PRODUCT_HUNT_EMBED_URL,
  PRODUCT_HUNT_TAGLINE,
  PRODUCT_HUNT_THUMBNAIL,
  PRODUCT_HUNT_TITLE,
} from '../data/product-hunt-launch';

export default function ProductHuntLaunchEmbed({ className = '', variant = 'default' }) {
  if (!isProductHuntLaunchActive()) return null;

  return (
    <aside
      className={`mx-auto w-full max-w-[500px] rounded-xl border border-oasis-green-600/15 bg-white p-5 shadow-sm ${variant === 'compact' ? 'my-6' : 'my-8'} ${className}`}
      aria-label="Product Hunt launch"
    >
      <div className="mb-3 flex items-center gap-3">
        <Image
          src={PRODUCT_HUNT_THUMBNAIL}
          alt={PRODUCT_HUNT_TITLE}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold leading-tight text-oasis-green-900">
            {PRODUCT_HUNT_TITLE}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-oasis-green-700">
            {PRODUCT_HUNT_TAGLINE}
          </p>
        </div>
      </div>
      <a
        href={PRODUCT_HUNT_EMBED_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 rounded-lg bg-[#ff6154] px-4 py-2 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6154]"
      >
        Check it out on Product Hunt
        <span aria-hidden>→</span>
      </a>
    </aside>
  );
}
