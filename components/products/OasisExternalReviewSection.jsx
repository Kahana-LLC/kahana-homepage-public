import Link from 'next/link';
import { YTC_OASIS_REVIEW } from '../../data/oasis-external-reviews';

export default function OasisExternalReviewSection() {
  const {
    publication,
    author,
    reviewUrl,
    methodologyUrl,
    score,
    scoreMax,
    scoreLabel,
    scoreSystemName,
    reviewedAt,
    independenceNote,
    pullQuote,
    testedHighlights,
    productPageAnchor,
  } = YTC_OASIS_REVIEW;

  return (
    <section
      id={productPageAnchor}
      className="border-t border-oasis-green-800/8 bg-white py-16 md:py-20"
      aria-labelledby="external-review-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">Independent review</p>
        <h2 id="external-review-heading" className="mt-2 text-2xl font-bold tracking-tight text-oasis-green-800 md:text-3xl">
          Reviewed by {publication}
        </h2>
        <p className="mt-3 max-w-3xl text-oasis-green-800/90 leading-relaxed">
          {independenceNote}{' '}
          <a
            href={methodologyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
          >
            See their review methodology
          </a>
          .
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-start">
          <div className="rounded-2xl border border-oasis-green-800/12 bg-oasis-green-50 p-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-oasis-green-800/70">{scoreSystemName}</p>
            <p className="mt-2 text-4xl font-bold text-oasis-green-800">
              {score}
              <span className="text-lg font-semibold text-oasis-green-800/60"> / {scoreMax}</span>
            </p>
            <p className="mt-1 text-sm font-semibold text-[#7a9200]">{scoreLabel}</p>
            <p className="mt-3 text-xs text-oasis-green-800/70">
              Reviewed {reviewedAt} by {author}
            </p>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              Read full review on {publication} →
            </a>
          </div>

          <div className="space-y-6">
            <blockquote className="rounded-xl border border-oasis-green-800/10 bg-oasis-green-50/60 p-5">
              <p className="text-oasis-green-800 leading-relaxed">&ldquo;{pullQuote}&rdquo;</p>
              <footer className="mt-3 text-sm text-oasis-green-800/75">
                — {author}, {publication}
              </footer>
            </blockquote>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-oasis-green-800/80">What they tested</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-oasis-green-800/90">
                {testedHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-oasis-green-800/80">
              <Link
                href={`/blog/${YTC_OASIS_REVIEW.blogSummarySlug}`}
                className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
              >
                Read Kahana&apos;s summary of the review
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
