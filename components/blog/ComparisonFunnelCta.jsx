import Link from 'next/link';
import { productHref } from '../../lib/productLinks';
import { useMarketingI18n } from '../../contexts/MarketingI18n';
import UseWithMarquee from '../compare/UseWithMarquee';

export default function ComparisonFunnelCta() {
  const { t } = useMarketingI18n();
  const exploreUrl = productHref('/library', 'blog_compare_cta_explore');
  const createUrl = productHref('/', 'blog_compare_cta_create');

  return (
    <aside className="not-prose my-10">
      <p className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
        {t('blogCompareCta.useWith')}
      </p>
      <UseWithMarquee label={t('blogCompareCta.useWith')} />
      <div className="mt-8 rounded-[1.75rem] bg-white px-6 py-8 ring-1 ring-[#E4D9C4] sm:px-8">
        <h2 className="text-2xl font-semibold text-[#3B2F1A]">{t('blogCompareCta.title')}</h2>
        <p className="mt-3 text-base leading-relaxed text-[#5C4520]">{t('blogCompareCta.lead')}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/blog/set-up-kahana-in-an-afternoon" className="btn-primary inline-flex items-center justify-center no-underline">
            Set up Kahana
          </Link>
          <Link href="/use-cases" className="btn-secondary inline-flex items-center justify-center no-underline">
            {t('blogCompareCta.useCases')}
          </Link>
          <Link href="/compare" className="btn-secondary inline-flex items-center justify-center no-underline">
            {t('blogCompareCta.compare')}
          </Link>
          <Link href="/blog?category=Guides" className="btn-secondary inline-flex items-center justify-center no-underline">
            {t('blogCompareCta.guides')}
          </Link>
        </div>
        <p className="mt-5 text-sm text-[#8A9378]">
          <a
            href={exploreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
          >
            {t('home.explore')}
          </a>
          {' · '}
          <a
            href={createUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
          >
            {t('home.create')}
          </a>
        </p>
      </div>
    </aside>
  );
}
