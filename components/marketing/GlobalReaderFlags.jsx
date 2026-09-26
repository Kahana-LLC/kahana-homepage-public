import { GLOBAL_READER_FLAGS, flagImageUrl } from '../../data/globalReaderFlags';

/**
 * Stripe-like rectangular flag icons (not emoji).
 * Always two equal-length rows.
 * https://stripe.com/global
 */
export default function GlobalReaderFlags({
  className = '',
  size = 'md',
  justify = 'center',
  ariaLabel = 'A sample of countries readers already come from. Kahana reaches 110 or more.',
}) {
  const dim = size === 'lg' ? { w: 28, h: 21 } : { w: 22, h: 16 };
  const mid = Math.ceil(GLOBAL_READER_FLAGS.length / 2);
  const rows = [GLOBAL_READER_FLAGS.slice(0, mid), GLOBAL_READER_FLAGS.slice(mid)];
  const justifyClass =
    justify === 'start' ? 'items-start' : justify === 'center' ? 'items-center' : 'items-start';

  return (
    <div className={`flex flex-col gap-2 ${justifyClass} ${className}`.trim()} role="list" aria-label={ariaLabel}>
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex} className="m-0 flex list-none flex-nowrap justify-center gap-2 p-0" role="presentation">
          {row.map(({ name, code }) => (
            <li key={code} title={name} aria-label={name} className="shrink-0 leading-none" role="listitem">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={flagImageUrl(code)}
                alt=""
                width={dim.w}
                height={dim.h}
                loading="lazy"
                decoding="async"
                className="block rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(59,47,26,0.12)]"
                style={{ width: dim.w, height: dim.h }}
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
