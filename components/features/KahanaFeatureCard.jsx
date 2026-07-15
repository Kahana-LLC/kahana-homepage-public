import Link from 'next/link';

/**
 * Tile for a Kahana platform feature on /features.
 * @param {{ feature: {
 *   slug: string,
 *   title: string,
 *   excerpt: string,
 *   href: string,
 *   linkLabel: string,
 *   category: string,
 * } }} props
 */
export default function KahanaFeatureCard({ feature }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#313A00]/12 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <Link
        href={feature.href}
        className="doc-card-link no-underline flex h-full flex-col"
      >
        <div className="flex flex-1 flex-col p-6">
          <span className="text-sm font-medium text-[#617500]">{feature.category}</span>
          <h3 className="mt-3 text-xl font-semibold leading-snug text-[#313A00] line-clamp-2">
            {feature.title}
          </h3>
          <p className="mt-2 flex-1 text-base leading-relaxed text-[#666666] line-clamp-3">
            {feature.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center text-sm font-medium text-[#617500]">
            {feature.linkLabel}
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
