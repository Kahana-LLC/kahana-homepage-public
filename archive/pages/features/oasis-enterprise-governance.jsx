import React from 'react';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import EnterpriseFeatureVisual from '../../components/features/EnterpriseFeatureVisual';
import EnterpriseFeatureExplainerDiagram from '../../components/features/diagrams/EnterpriseFeatureExplainerDiagram';
import { oasisCapabilities } from '../../data/oasisEnterpriseCapabilities';
import { getEnterpriseFeatureNarrative } from '../../data/enterpriseFeatureNarrative';
import EnterpriseFeatureNarrativeBand from '../../components/features/EnterpriseFeatureNarrativeBand';
import { getFeatureRelatedDocsProps } from '../../utils/featurePageStaticProps';

const feature = oasisCapabilities.find((c) => c.slug === 'oasis-enterprise-governance');
const narrative = getEnterpriseFeatureNarrative(feature.slug);
const CANONICAL = 'https://kahana.io/features/oasis-enterprise-governance';

export async function getStaticProps() {
  return getFeatureRelatedDocsProps('oasis-enterprise-governance');
}

export default function OasisEnterpriseGovernancePage({ relatedDocs = [] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: feature.title,
    url: CANONICAL,
    description: feature.description,
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.io' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle={`${feature.title} | Oasis Enterprise`}
      seoDescription={feature.description}
      url={CANONICAL}
      schema={schema}
      heroEyebrow={narrative.heroEyebrow}
      heroTitle={feature.title}
      heroDescription={feature.description}
      primaryHref="/schedule-demo"
      primaryLabel="Schedule a demo"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-enterprise-browser"
      backLabel="← Back to Oasis Enterprise Browser"
      relatedDocs={relatedDocs}
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-6 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <EnterpriseFeatureNarrativeBand slug={feature.slug} />
          <p>
            “Governance” is an easy word to say and a hard one to keep coherent. Teams write policies for endpoints,
            then watch the same employees and contractors open sensitive SaaS from browsers that never saw those
            controls. Oasis treats the managed enterprise browser as the place where expectations for extensions, data
            handling, and app access stay attached to the session, so the story does not fracture the moment someone is
            not on the golden laptop image.
          </p>
          <p>
            Central configuration is the boring superpower: describe what good looks like once, instrument adoption and
            drift with operational tools, and spend fewer audit cycles rediscovering the same shadow patterns. The goal is
            not theatrical lockdown; it is predictable enforcement people can plan around.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">Where teams focus first</p>
          <ul className="space-y-3">
            {feature.details.map((line) => (
              <li key={line} className="flex gap-3 text-sm sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EnterpriseFeatureExplainerDiagram variant="governance" />
      <EnterpriseFeatureVisual slug="oasis-enterprise-governance" />
    </FeatureDeepDiveShell>
  );
}
