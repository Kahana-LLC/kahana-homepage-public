/**
 * Dual-row horizontal category marquee (CSS-driven; pauses on hover/focus).
 * @param {{ categories: { label: string, Icon: import('react').ComponentType<{ className?: string }> }[], href: string }} props
 */
export default function CategoryMarquee({ categories, href }) {
  const track = [...categories, ...categories];

  return (
    <div className="category-marquee" role="group" aria-label="Browse categories">
      <div className="category-marquee__row category-marquee__row--left">
        <div className="category-marquee__track">
          {track.map((item, i) => {
            const { Icon } = item;
            return (
              <a
                key={`left-${item.label}-${i}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="category-marquee__chip"
              >
                <Icon className="category-marquee__icon" aria-hidden />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="category-marquee__row category-marquee__row--right">
        <div className="category-marquee__track">
          {track.map((item, i) => {
            const { Icon } = item;
            return (
              <a
                key={`right-${item.label}-${i}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="category-marquee__chip"
              >
                <Icon className="category-marquee__icon" aria-hidden />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
