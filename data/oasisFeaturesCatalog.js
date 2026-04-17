import { oasisCapabilities } from './oasisEnterpriseCapabilities';

/**
 * Background gradients for feature discovery cards (slate / tan / olive families).
 * @type {string[]}
 */
export const FEATURE_CARD_GRADIENTS = [
  'linear-gradient(142deg, #5c6678 0%, #c4b5a0 100%)',
  'linear-gradient(142deg, #a68b5b 0%, #3d2a1f 100%)',
  'linear-gradient(142deg, #5a6b35 0%, #1e2a16 100%)',
];

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
