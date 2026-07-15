/**
 * Copy for /features/trust.
 * Intentional access + charge-ready sellers. Not a moderation SLA pitch.
 * Verified badge = Connect charges_enabled (FAQ/UI often say Stripe Identity).
 */

export const TRUST_FEATURE_CANONICAL = 'https://about.kahana.io/features/trust';

export const TRUST_FEATURE_SEO = {
  title: 'Trust | Kahana Features',
  description:
    'Adult content flags, age verification, and verified creators—so access stays intentional and sellers can show who’s charge-ready.',
};

export const TRUST_FEATURE_ONE_LINER =
  'Adult content flags, age verification, and verified creators—so access stays intentional and sellers can show who’s charge-ready.';

export const TRUST_ADULT_FACTS = [
  'Creators mark hubs that are adult (18+) as part of listing readiness (isAdultContent).',
  'Explore can include, exclude, or show only adult hubs when you use the adult filter. Default browsing keeps adult hubs out.',
  'Adult hubs stay out of SEO indexing: not in the sitemap and not in bot HTML.',
];

export const TRUST_AGE_FACTS = [
  'Adult access requires login plus date of birth. There is no anonymous “I’m 18” unlock.',
  'When you verify, the app stores verification if your DOB proves you are 18+.',
  'Anonymous APIs do not grant READ on adult hubs. You must be authenticated.',
];

/** Confirmed app legal surface; related hub/creator policies also live under /legal/… */
export const TRUST_LEGAL_LINKS = [
  {
    label: 'Adult content',
    href: 'https://app.kahana.io/legal/adult-content',
  },
];
