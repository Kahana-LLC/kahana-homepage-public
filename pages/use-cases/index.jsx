import { CatalogIndex } from '../../components/marketing/MarketingLanding';
import { USE_CASES } from '../../data/marketingTaxonomy';
import { ABOUT_ORIGIN } from '../../config/site';

const CANONICAL = `${ABOUT_ORIGIN}/use-cases`;

export default function UseCasesIndexPage() {
  return (
    <CatalogIndex
      canonical={CANONICAL}
      seoTitle="Use cases | Kahana"
      seoDescription="Use Kahana for book clubs, selling digital products and ebooks, workshops, playbooks, journals, and course-like hubs."
      eyebrow="Jobs"
      title="Use cases"
      lead="Jobs people hire Kahana for. Hubs hold the files. Clubs hold the group. Library is how others find you."
      items={USE_CASES}
      hrefPrefix="/use-cases"
    />
  );
}
