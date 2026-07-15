/**
 * Copy for /features/hubs. Align with FAQ + product facts.
 * Hub-first library language. Not Drive, not LMS.
 */

export const HUBS_FEATURE_CANONICAL = 'https://about.kahana.io/features/hubs';

export const HUBS_FEATURE_SEO = {
  title: 'Hubs | Kahana Features',
  description:
    'A curated place for digital artifacts and collaborators. Private by default, public and listed on Explore when you are ready. Monetization is optional.',
};

export const HUBS_FEATURE_ONE_LINER =
  'A curated place for digital artifacts and collaborators—private by default, public and listed when you’re ready.';

export const HUB_ARTIFACT_TYPES = [
  'Files',
  'Videos',
  'Images',
  'PDFs',
  'Documents',
  'Links',
  'Notes',
  'And more',
];

/** Lifecycle: create → share path (sequence). */
export const HUB_LIFECYCLE_STEPS = [
  {
    title: 'Create',
    body: 'A new hub starts private. Add artifacts and shape it before anyone else can see it.',
  },
  {
    title: 'Collaborate',
    body: 'Invite people with roles when you want help. Work stays private until you change access.',
  },
  {
    title: 'Make public',
    body: 'Share a link when you are ready. Public does not mean listed on Explore yet.',
  },
  {
    title: 'List on Explore',
    body: 'Optionally list so people can find the hub in the public catalog and in search.',
  },
  {
    title: 'Optional paid access',
    body: 'Turn on monetization later if you want. Free knowledge hubs stay first-class.',
  },
];

export const HUB_COLLABORATOR_ROLES = [
  { role: 'OWNER', body: 'Full control of the hub, including ownership decisions.' },
  { role: 'ADMIN', body: 'Manage settings and collaborators without transferring ownership.' },
  { role: 'WRITE', body: 'Add and edit artifacts alongside the team.' },
  { role: 'COMMENT', body: 'Leave feedback without changing the contents.' },
  { role: 'READ', body: 'View access for people who only need to look.' },
];

export const HUB_SETTINGS_AREAS = [
  'General',
  'Access',
  'Monetization',
  'Storefront',
  'Analytics',
];

export const HUB_MARKETPLACE_SIGNALS = [
  'Marketplace cards can show views, saves, and Aura.',
  'Creators get analytics in hub settings to see how the hub is doing.',
];

export const HUB_SEO_FACTS = [
  'Explore-listed public non-adult hubs get bot HTML and sitemap inclusion.',
  'Public-but-unlisted hubs stay shareable by link, but stay noindex.',
];

export const HUB_PLAN_LIMITS = [
  {
    plan: 'Free',
    hubs: '3 hubs',
    uploads: '10 counted uploads per hub*',
    fileSize: 'Files up to 5 MB',
  },
  {
    plan: 'Growth',
    hubs: 'Unlimited hubs',
    uploads: 'Unlimited uploads',
    fileSize: 'Large files (marketed up to 5 GB)',
  },
];
