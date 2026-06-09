import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

export const YTC_OASIS_REVIEW = {
  publication: 'Your Tech Compass',
  author: 'Diana Nadim',
  authorRole: 'Co-Founder & Senior Tech Writer',
  authorLinkedIn: 'https://www.linkedin.com/in/nadim-diana/',
  authorImagePath: '/assets/headshots/diana_nadim.png',
  reviewUrl: 'https://yourtechcompass.com/oasis-browser-review/',
  methodologyUrl: 'https://yourtechcompass.com/review-methodology/',
  reviewTitle: 'Oasis Browser by Kahana: The Privacy-First AI Browser That Understands Your Tabs',
  score: 87,
  scoreMax: 100,
  scoreLabel: 'Excellent',
  scoreSystemName: 'YTC Tool Intelligence Score',
  reviewedAt: 'June 2026',
  independenceNote:
    'This review is independent from Your Tech Compass. No brand paid for coverage, and no score was negotiated.',
  pullQuote:
    'Oasis is one of the most architecturally interesting browsers I have reviewed: browser-grounded AI with a verifiable privacy architecture and a free plan that does not require a credit card.',
  excerpt:
    'Hands-on review of Oasis Browser covering browser-grounded AI, semantic history search, published privacy payloads, voice input, import, pricing, and honest caveats on platform availability and roadmap features.',
  testedHighlights: [
    'Minimum seven days of hands-on daily use before scoring',
    'Assistant capabilities: tabs, history, bookmarks, summarization, confirmations',
    'Privacy architecture verified against published JSON interaction payloads',
    'Weighted YTC Tool Intelligence Score across five dimensions',
  ],
  blogSummarySlug: 'your-tech-compass-oasis-browser-review-87-2026',
  productPageAnchor: 'external-review',
};

/** @type {Record<string, { quote: string; context?: string }>} */
export const YTC_FEATURE_QUOTES = {
  'oasis-assistant': {
    quote:
      'Semantic history search is the feature I find most compelling. Instead of searching your history with exact keywords, you can ask in plain language and the assistant searches by meaning rather than exact text match.',
    context: 'From Your Tech Compass review of Oasis Browser assistant capabilities',
  },
  'oasis-voice': {
    quote:
      'Voice input in an AI browser is rare. Voice and typing share the same assistant thread, so you can switch between speaking and typing mid-conversation without losing context.',
    context: 'From Your Tech Compass review of Oasis Browser voice input',
  },
  'oasis-confirmations': {
    quote:
      'When a command would change your browsing state in a meaningful way, Oasis shows a plain-language confirmation modal that displays the exact command before executing it. That is a small design decision that carries real practical weight.',
    context: 'From Your Tech Compass review of Oasis Browser confirmations',
  },
  'oasis-import': {
    quote:
      'The import experience is designed around a principle most browser migrations ignore: switching typically takes seconds, not a weekend.',
    context: 'From Your Tech Compass review of Oasis Browser import',
  },
  'oasis-amplifier': {
    quote:
      'Amplifier is Oasis planned feedback loop. Kahana explicitly states this is a roadmap, not a promise of ship dates, and the product page is admirably transparent about its current status.',
    context: 'From Your Tech Compass review of Oasis Amplifier',
  },
  'oasis-onboarding': {
    quote:
      'Oasis is a product that is actively maturing. Some features are working and polished; others are explicitly on the roadmap, and understanding what Oasis does today versus what it is building toward matters enormously.',
    context: 'From Your Tech Compass review of Oasis Browser',
  },
};

/**
 * @param {string | null | undefined} slug
 * @returns {{ quote: string; context?: string; review: typeof YTC_OASIS_REVIEW } | null}
 */
export function getFeatureReviewQuote(slug) {
  if (!slug || !YTC_FEATURE_QUOTES[slug]) return null;
  return {
    ...YTC_FEATURE_QUOTES[slug],
    review: YTC_OASIS_REVIEW,
  };
}

export const YTC_BLOG_CALLOUT_HTML = `<hr>
<p><em>Independent review:</em> Your Tech Compass scored Oasis Browser <strong>87/100 (Excellent)</strong> after hands-on testing. <a href="/blog/your-tech-compass-oasis-browser-review-87-2026">Read our summary</a> or the <a href="https://yourtechcompass.com/oasis-browser-review/" target="_blank" rel="noopener noreferrer">full review on Your Tech Compass</a>. Kahana did not pay for this coverage.</p>`;

export function getReviewerImageUrl(options = {}) {
  return getCloudinaryImageUrl(YTC_OASIS_REVIEW.authorImagePath, {
    width: 448,
    height: 448,
    quality: 'auto:good',
    ...options,
  });
}

export function getYtcReviewSchema() {
  const { reviewUrl, author, authorLinkedIn, publication, score, scoreMax, reviewTitle, reviewedAt } =
    YTC_OASIS_REVIEW;
  return {
    '@type': 'Review',
    '@id': 'https://kahana.co/products/oasis-browser#ytc-review',
    name: reviewTitle,
    reviewBody: YTC_OASIS_REVIEW.excerpt,
    datePublished: '2026-06-01',
    author: {
      '@type': 'Person',
      name: author,
      sameAs: authorLinkedIn,
      image: getReviewerImageUrl(),
    },
    publisher: {
      '@type': 'Organization',
      name: publication,
      url: 'https://yourtechcompass.com',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(score),
      bestRating: String(scoreMax),
      ratingExplanation: `${YTC_OASIS_REVIEW.scoreSystemName} — ${YTC_OASIS_REVIEW.scoreLabel} (${reviewedAt})`,
    },
    url: reviewUrl,
    itemReviewed: {
      '@id': 'https://kahana.co/products/oasis-browser#software',
    },
  };
}
