import MarketingLanding from '../../components/marketing/MarketingLanding';
import { FEATURES, getFeature } from '../../data/marketingTaxonomy';
import { ABOUT_ORIGIN } from '../../config/site';

export async function getStaticPaths() {
  return {
    paths: FEATURES.filter(
      (item) =>
        item.slug !== 'aura-pathways' &&
        item.slug !== 'aura-and-trust' &&
        item.slug !== 'discussions' &&
        item.slug !== 'explore',
    ).map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = getFeature(params.slug);
  if (!item) {
    return { notFound: true };
  }
  return { props: { slug: item.slug } };
}

export default function FeaturePage({ slug }) {
  const item = getFeature(slug);
  if (!item) return null;
  return (
    <MarketingLanding
      canonical={`${ABOUT_ORIGIN}/features/${item.slug}`}
      seoTitle={`${item.title} | Kahana`}
      seoDescription={item.summary}
      item={item}
      kind="feature"
    />
  );
}
