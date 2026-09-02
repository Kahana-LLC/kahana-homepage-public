import ExternalReviewerAttribution from '../reviews/ExternalReviewerAttribution';
import { getFeatureReviewQuote } from '../../data/oasis-external-reviews';

export default function FeatureExternalReviewQuote({ featureSlug }) {
  const data = getFeatureReviewQuote(featureSlug);
  if (!data) return null;

  const { quote, context, review } = data;

  return (
    <section className="border-b border-oasis-green-800/8 bg-oasis-green-50/50 py-12 md:py-14" aria-label="Independent review quote">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">Independent review</p>
        <blockquote className="mt-3 rounded-xl border border-oasis-green-800/10 bg-white p-5 shadow-sm">
          <p className="text-oasis-green-800 leading-relaxed">&ldquo;{quote}&rdquo;</p>
          <footer className="mt-4">
            <ExternalReviewerAttribution variant="compact" />
          </footer>
        </blockquote>
        {context ? <p className="mt-3 text-xs text-oasis-green-800/65">{context}</p> : null}
      </div>
    </section>
  );
}
