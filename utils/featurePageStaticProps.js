import { getAllDocsMetadata } from './docsUtils';
import { FEATURE_RELATED_DOC_SLUGS } from '../data/featureRelatedDocSlugs';

/**
 * @param {string} featureKey — key in FEATURE_RELATED_DOC_SLUGS (e.g. oasis-assistant)
 */
export async function getFeatureRelatedDocsProps(featureKey) {
  const slugs = FEATURE_RELATED_DOC_SLUGS[featureKey] || [];
  const all = await getAllDocsMetadata();
  const relatedDocs = slugs.map((slug) => all.find((d) => d.slug === slug)).filter(Boolean);
  return {
    props: {
      relatedDocs,
    },
  };
}
