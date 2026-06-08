import { getFeatureReviewQuote } from '../../data/oasis-external-reviews';

export default function FeatureExternalReviewQuote({ featureSlug }) {
  const data = getFeatureReviewQuote(featureSlug);
  if (!data) return null;

  const { quote, context, review } = data;

  return (
    <section className="border-b border-oasis-green-800/8 bg-oasis-green-50/50 py-12 md:py-14" aria-label="Independent review quote">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">Independent review</p>
        <blockquote className="mt-3 rounded-xl border border-oasis-green-800/10 bg-white p-5 shadow-sm">
          <p className="text-oasis-green-800 leading-relaxed">&ldquo;{quote}&rdquo;</p>
          <footer className="mt-4 text-sm text-oasis-green-800/75">
            — {review.author},{' '}
            <a
              href={review.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              {review.publication}
            </a>
            {' '}
            ({review.scoreSystemName}: {review.score}/{review.scoreMax}, {review.scoreLabel})
          </footer>
        </blockquote>
        {context ? <p className="mt-3 text-xs text-oasis-green-800/65">{context}</p> : null}
      </div>
    </section>
  );
}
