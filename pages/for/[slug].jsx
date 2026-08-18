import MarketingLanding from '../../components/marketing/MarketingLanding';
import { PERSONAS, getPersona } from '../../data/marketingTaxonomy';
import { ABOUT_ORIGIN } from '../../config/site';

export async function getStaticPaths() {
  return {
    paths: PERSONAS.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = getPersona(params.slug);
  if (!item) {
    return { notFound: true };
  }
  return { props: { slug: item.slug } };
}

export default function PersonaPage({ slug }) {
  const item = getPersona(slug);
  if (!item) return null;
  return (
    <MarketingLanding
      canonical={`${ABOUT_ORIGIN}/for/${item.slug}`}
      seoTitle={`${item.title} | Kahana`}
      seoDescription={item.summary}
      item={item}
      kind="persona"
    />
  );
}
