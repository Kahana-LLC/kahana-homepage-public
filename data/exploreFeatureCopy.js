/**
 * Copy for /features/explore. Align with FAQ + product facts.
 * Catalog / discovery language only. Not a social feed.
 */

export const EXPLORE_FEATURE_CANONICAL = 'https://about.kahana.io/features/explore';

export const EXPLORE_FEATURE_SEO = {
  title: 'Explore | Kahana Features',
  description:
    'Public discovery of hubs and creators with search, categories, and filters. Browse what people share worldwide, without a social feed.',
};

export const EXPLORE_FEATURE_ONE_LINER =
  'Public discovery of hubs and creators with search, categories, and filters.';

/** How discovery works (sequence). */
export const EXPLORE_DISCOVERY_STEPS = [
  {
    title: 'Search',
    body: 'Type what you need. Results sort by relevance when you search, or by popular when you browse.',
  },
  {
    title: 'Filter',
    body: 'Narrow by category, free or paid, price range, tags, and adult visibility. Skip what you do not want.',
  },
  {
    title: 'Open',
    body: 'Open a card to land in the hub or the creator’s profile. That is the next stop for learning or connecting.',
  },
];

/** Compact filter list for the filters section. */
export const EXPLORE_FILTER_CHIPS = [
  'Text search',
  '16 categories',
  'Free vs monetized',
  'Price range',
  'Custom tags',
  'Adult modes',
  'Sort: popular / relevance',
];

export const EXPLORE_TABS = [
  {
    id: 'hubs',
    title: 'Hubs',
    query: '?tab=hubs',
    body: 'Browse public hubs listed on Explore: curated digital artifacts ready to open.',
  },
  {
    id: 'creators',
    title: 'Creators',
    query: '?tab=creators',
    body: 'Browse people who contribute. Open a profile to see their listed hubs and presence.',
  },
];

export const EXPLORE_LISTING_FACTS = [
  'A hub appears on Explore when it is public, active, and listed, with the basics ready: title, cover, description, category, profile pic, adult yes/no, and public access.',
  'Not every shareable hub is Explore-listed. Unlisted public hubs stay link-only and stay out of SEO indexing.',
  'Listing helps people find you. It is not a ranking promise or guaranteed traffic.',
];

export const EXPLORE_GUEST_FACTS = [
  'Guests can browse most public, non-adult listings on Explore.',
  'Adult hubs can be listed, but they stay hidden by default. You need the adult filter, login, and age verification to see them.',
];
