import Link from 'next/link';
import { COMPARISONS_BLOG_INDEX, getBlogPostsBySlugs } from '../../data/platform-blog-links';

export default function ComparisonDeepDives({ t, slugs, title, lead }) {
  const posts = getBlogPostsBySlugs(slugs);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-center text-lg text-[#5C4520]">{lead}</p>
        <ul className="mt-10 list-none space-y-3 p-0">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-2xl bg-white px-5 py-4 no-underline ring-1 ring-[#E4D9C4] hover:ring-[#8A6622]/40"
              >
                <p className="font-semibold text-[#3B2F1A]">{post.title}</p>
                {post.excerpt ? (
                  <p className="mt-1 text-sm leading-relaxed text-[#666666]">{post.excerpt}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link
            href={COMPARISONS_BLOG_INDEX}
            className="text-base font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
          >
            {t('deepDives.allComparisons')}
          </Link>
        </p>
      </div>
    </section>
  );
}
