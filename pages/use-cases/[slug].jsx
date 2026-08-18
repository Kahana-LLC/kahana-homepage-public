import MarketingLanding from '../../components/marketing/MarketingLanding';
import { USE_CASES, getUseCase } from '../../data/marketingTaxonomy';
import { ABOUT_ORIGIN } from '../../config/site';

export async function getStaticPaths() {
  return {
    paths: USE_CASES.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = getUseCase(params.slug);
  if (!item) {
    return { notFound: true };
  }
  return { props: { slug: item.slug } };
}

export default function UseCasePage({ slug }) {
  const item = getUseCase(slug);
  if (!item) return null;
  return (
    <MarketingLanding
      canonical={`${ABOUT_ORIGIN}/use-cases/${item.slug}`}
      seoTitle={`${item.title} | Kahana`}
      seoDescription={item.summary}
      item={item}
      kind="use-case"
    />
  );
}
