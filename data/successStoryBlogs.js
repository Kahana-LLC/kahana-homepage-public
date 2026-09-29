/** Success story posts: one hub per blog. Filtered from blogIndex. */
import { blogIndex } from './blog-index';

export const SUCCESS_STORY_CATEGORY = 'Creator stories';

/** story id (use-case-stories) → blog slug */
export const STORY_BLOG_BY_ID = {};

export function getStoryBlogHref(storyId) {
  const slug = STORY_BLOG_BY_ID[storyId];
  return slug ? `/blog/${slug}` : null;
}

export function getSuccessStoryPosts() {
  return blogIndex.filter((post) =>
    Array.isArray(post.category)
      ? post.category.includes(SUCCESS_STORY_CATEGORY)
      : post.category === SUCCESS_STORY_CATEGORY,
  );
}
