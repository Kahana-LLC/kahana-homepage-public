/**
 * Copy for /features/profiles. Align with FAQ + product facts.
 * Storefront / presence language. Not a social feed. No vanity score.
 */

export const PROFILES_FEATURE_CANONICAL = 'https://about.kahana.io/features/profiles';

export const PROFILES_FEATURE_SEO = {
  title: 'Profiles | Kahana Features',
  description:
    'One link for your presence: hubs you’ve shared and the reputation you grow through views, saves, Aura, followers, and purchases.',
};

export const PROFILES_FEATURE_ONE_LINER =
  'One link for your presence—hubs you’ve shared and the reputation you grow.';

export const PROFILE_SURFACE_ITEMS = [
  { title: 'Photo and name', body: 'Avatar and optional background so people recognize you.' },
  { title: 'Bio and tagline', body: 'A short story of what you share and who it is for.' },
  { title: 'Links', body: 'Social and custom links, easy to share like a link-in-bio.' },
  { title: 'Public hubs', body: 'The hubs you have made public, with view and monetization cues where relevant.' },
];

export const PROFILE_REPUTATION_SIGNALS = [
  {
    title: 'Views',
    body: 'How often people open what you share.',
  },
  {
    title: 'Saves',
    body: 'When someone keeps a hub for later.',
  },
  {
    title: 'Aura',
    body: 'Careful endorsements on hubs worth learning from.',
  },
  {
    title: 'Followers',
    body: 'People who want to keep up with your public work.',
  },
  {
    title: 'Purchases',
    body: 'When someone pays for access to a monetized hub.',
  },
];

export const PROFILE_PRODUCT_FACTS = [
  'Your public page lives at /profile/:userId. Guests can open it.',
  'Edit through profile settings (/profile/:userId/settings and related settings).',
  'A profile pic is part of the Explore-listing checklist for hubs. Missing one can block listing readiness.',
  'Buyers also find creators via Following (/following) and saved hubs (/saved).',
];
