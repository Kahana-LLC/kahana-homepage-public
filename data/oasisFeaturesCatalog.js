import { oasisCapabilities } from './oasisEnterpriseCapabilities';

/** Page size for feature/solution gallery grids (3×3). */
export const GALLERY_PAGE_SIZE = 9;

/**
 * Abstract multi-brand gradients (oasis-blue + desert-yellow + oasis-green).
 * Inline CSS so tiles match across browsers and avoid “flat gray” Tailwind purge issues.
 * @type {string[]}
 */
const GALLERY_ABSTRACT_GRADIENTS = [
  'linear-gradient(140deg, #1d3e48 0%, #3a7c91 22%, #617500 48%, #978455 72%, #313a00 100%)',
  'linear-gradient(155deg, #313a00 0%, #489cb5 32%, #645839 55%, #495800 78%, #2b5d6d 100%)',
  'linear-gradient(128deg, #645839 0%, #7a9200 28%, #6dafc4 52%, #94a833 76%, #1d3e48 100%)',
];

/**
 * @param {number} variantIndex
 * @returns {{ backgroundImage: string }}
 */
export function getGalleryGradientStyle(variantIndex) {
  const i = Number(variantIndex) % GALLERY_ABSTRACT_GRADIENTS.length;
  return { backgroundImage: GALLERY_ABSTRACT_GRADIENTS[i] };
}

/** Short grid labels for enterprise slugs (titles come from oasisEnterpriseCapabilities). */
const ENTERPRISE_CARD_LABEL = {
  'oasis-enterprise-external-access': 'External collaborators',
  'oasis-enterprise-governance': 'Browser governance',
  'oasis-enterprise-identity-dlp': 'Identity & DLP',
  'oasis-enterprise-faster-paths': 'Faster team paths',
};

/**
 * @param {string} slug
 * @param {0|1|2} gradientVariant
 */
function enterpriseFeature(slug, gradientVariant) {
  const c = oasisCapabilities.find((x) => x.slug === slug);
  if (!c) {
    throw new Error(`oasisFeaturesCatalog: missing capability ${slug}`);
  }
  const cardTitle = ENTERPRISE_CARD_LABEL[slug] || c.title;
  const searchText = [
    slug.replace(/-/g, ' '),
    cardTitle,
    c.title,
    c.description,
    'enterprise',
    'oasis enterprise browser',
  ]
    .join(' ')
    .toLowerCase();

  return {
    slug,
    href: `/features/${slug}`,
    cardTitle,
    productLine: 'enterprise',
    searchText,
    gradientVariant,
  };
}

const BROWSER_FEATURES = [
  {
    slug: 'oasis-assistant',
    href: '/features/oasis-assistant',
    cardTitle: 'Assistant & context',
    productLine: 'browser',
    searchText:
      'oasis assistant ai chat browser context tabs history skills personal browser',
    gradientVariant: 0,
  },
  {
    slug: 'oasis-voice',
    href: '/features/oasis-voice',
    cardTitle: 'Voice in the assistant',
    productLine: 'browser',
    searchText: 'oasis voice microphone dictation assistant thread personal browser',
    gradientVariant: 1,
  },
  {
    slug: 'oasis-confirmations',
    href: '/features/oasis-confirmations',
    cardTitle: 'Confirmations',
    productLine: 'browser',
    searchText: 'oasis confirmations prompts security sensitive actions browser',
    gradientVariant: 2,
  },
  {
    slug: 'oasis-onboarding',
    href: '/features/oasis-onboarding',
    cardTitle: 'Onboarding checklist',
    productLine: 'browser',
    searchText: 'oasis onboarding checklist first run setup personal browser',
    gradientVariant: 0,
  },
  {
    slug: 'oasis-import',
    href: '/features/oasis-import',
    cardTitle: 'Import from browsers',
    productLine: 'browser',
    searchText: 'oasis import bookmarks passwords history migration chrome safari',
    gradientVariant: 1,
  },
  {
    slug: 'oasis-amplifier',
    href: '/features/oasis-amplifier',
    cardTitle: 'Amplifier',
    productLine: 'browser',
    searchText: 'oasis amplifier feedback assistant planned skills personal browser',
    gradientVariant: 2,
  },
];

/**
 * All public /features/* marketing pages (order: browser, enterprise, analytics).
 * @type {Array<{ slug: string; href: string; cardTitle: string; productLine: 'browser' | 'enterprise'; searchText: string; gradientVariant: number }>}
 */
export const oasisFeaturesCatalog = [
  ...BROWSER_FEATURES,
  enterpriseFeature('oasis-enterprise-external-access', 0),
  enterpriseFeature('oasis-enterprise-governance', 1),
  enterpriseFeature('oasis-enterprise-identity-dlp', 2),
  enterpriseFeature('oasis-enterprise-faster-paths', 0),
  {
    slug: 'user-analytics',
    href: '/features/user-analytics',
    cardTitle: 'Usage insights',
    productLine: 'browser',
    searchText:
      'usage insights user analytics coming soon oasis browser assistant skills tokens training productivity dashboard mock',
    gradientVariant: 1,
  },
];
