import Link from 'next/link';
import { COMPARE_PLATFORMS } from '../../data/platform-compare';
import BrandMark from './BrandMark';

function MarqueeRow({ platforms, direction, linked, href }) {
  const track = [...platforms, ...platforms];
  const className = 'category-marquee__chip no-underline';
  const chipHref = href || '/compare';

  return (
    <div className={`category-marquee__row category-marquee__row--${direction}`}>
      <div className="category-marquee__track">
        {track.map((platform, i) => {
          const inner = (
            <>
              <BrandMark id={platform.id} name={platform.name} className="category-marquee__icon" size={16} />
              {platform.name}
            </>
          );
          return linked ? (
            <Link
              key={`${direction}-${platform.id}-${i}`}
              href={chipHref}
              className={className}
            >
              {inner}
            </Link>
          ) : (
            <span key={`${direction}-${platform.id}-${i}`} className={className}>
              {inner}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Dual-row CSS marquee of platforms you can use with Kahana.
 * Chips go to /compare (same as homepage category chips go to Explore).
 */
export default function UseWithMarquee({ linked = true, label, href = '/compare' }) {
  const mid = Math.ceil(COMPARE_PLATFORMS.length / 2);
  const left = COMPARE_PLATFORMS.slice(0, mid);
  const right = COMPARE_PLATFORMS.slice(mid);

  return (
    <div className="category-marquee" role="group" aria-label={label || 'Use Kahana with'}>
      <MarqueeRow platforms={left} direction="left" linked={linked} href={href} />
      <MarqueeRow platforms={right} direction="right" linked={linked} href={href} />
    </div>
  );
}
