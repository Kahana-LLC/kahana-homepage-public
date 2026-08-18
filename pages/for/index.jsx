import { CatalogIndex } from '../../components/marketing/MarketingLanding';
import { PERSONAS } from '../../data/marketingTaxonomy';
import { ABOUT_ORIGIN } from '../../config/site';

const CANONICAL = `${ABOUT_ORIGIN}/for`;

export default function ForIndexPage() {
  return (
    <CatalogIndex
      canonical={CANONICAL}
      seoTitle="Who Kahana is for"
      seoDescription="Kahana for learners, buyers, creators, authors, and clubs. Same product, different starting points."
      eyebrow="People"
      title="Who Kahana is for"
      lead="Kahana is one library. These pages match how people say they want to use it: browse, buy, sell, publish, or host a club."
      items={PERSONAS}
      hrefPrefix="/for"
    />
  );
}
