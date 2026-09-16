import { blogIndex } from './blog-index';

/** Ids whose default `kahana-vs-${id}` slug does not match blog-index. */
const BLOG_SLUG_BY_ID = {
  'nas-io': 'kahana-vs-nasio-nascom',
  storygraph: 'kahana-vs-the-storygraph',
  'internet-archive': 'kahana-vs-internet-archive-open-library',
  kit: 'kahana-vs-kit-convertkit',
  gumroad: 'kahana-vs-gumroad-stan',
  stan: 'kahana-vs-gumroad-stan',
  kofi: 'kahana-vs-ko-fi',
};

const SLUG_SET = new Set(blogIndex.map((post) => post.slug));

function slugExists(slug) {
  return SLUG_SET.has(slug);
}

export function getComparisonBlogSlug(id) {
  if (!id) return null;
  const override = BLOG_SLUG_BY_ID[id];
  if (override && slugExists(override)) return override;
  const guessed = `kahana-vs-${id}`;
  if (slugExists(guessed)) return guessed;
  return null;
}

export function getComparisonBlogPost(id) {
  const slug = getComparisonBlogSlug(id);
  return slug ? blogIndex.find((post) => post.slug === slug) ?? null : null;
}

export function getComparisonBlogHref(id) {
  const slug = getComparisonBlogSlug(id);
  return slug ? `/blog/${slug}` : null;
}

export function getBlogPostsBySlugs(slugs) {
  return slugs.map((slug) => blogIndex.find((post) => post.slug === slug)).filter(Boolean);
}

export const CREATOR_DEEP_DIVE_SLUGS = [
  'kahana-vs-gumroad-stan',
  'kahana-vs-patreon',
  'kahana-vs-skool',
  'kahana-vs-nasio-nascom',
  'kahana-vs-kajabi',
  'kahana-vs-discord',
  'kahana-vs-notion-google-drive',
  'kahana-vs-linktree',
];

export const LEARNER_DEEP_DIVE_SLUGS = [
  'kahana-vs-netflix',
  'kahana-vs-hulu',
  'kahana-vs-prime-video',
  'kahana-vs-max',
  'kahana-vs-crunchyroll',
  'kahana-vs-goodreads',
  'kahana-vs-youtube',
];

export const COMPARISONS_BLOG_INDEX = '/blog?category=Comparisons';
