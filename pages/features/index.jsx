import { CatalogIndex } from '../../components/marketing/MarketingLanding';
import { FEATURES } from '../../data/marketingTaxonomy';
import { ABOUT_ORIGIN } from '../../config/site';

const CANONICAL = `${ABOUT_ORIGIN}/features`;

export default function FeaturesIndexPage() {
  return (
    <CatalogIndex
      canonical={CANONICAL}
      seoTitle="Features | Kahana"
      seoDescription="Kahana features: Library, hubs, Clubs, preview reels, paid access, analytics, Aura, profiles, and trust."
      eyebrow="Product"
      title="Features"
      lead="What Kahana can do: a library of hubs, optional paid access, clubs that read together, and the tools to list and measure what you share."
      items={FEATURES}
      hrefPrefix="/features"
    />
  );
}
