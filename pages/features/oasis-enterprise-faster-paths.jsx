import React from 'react';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import EnterpriseFeatureVisual from '../../components/features/EnterpriseFeatureVisual';
import EnterpriseFeatureExplainerDiagram from '../../components/features/diagrams/EnterpriseFeatureExplainerDiagram';
import { oasisCapabilities } from '../../data/oasisEnterpriseCapabilities';
import { getEnterpriseFeatureNarrative } from '../../data/enterpriseFeatureNarrative';
import EnterpriseFeatureNarrativeBand from '../../components/features/EnterpriseFeatureNarrativeBand';
import { getFeatureRelatedDocsProps } from '../../utils/featurePageStaticProps';

const feature = oasisCapabilities.find((c) => c.slug === 'oasis-enterprise-faster-paths');
const narrative = getEnterpriseFeatureNarrative(feature.slug);
const CANONICAL = 'https://kahana.co/features/oasis-enterprise-faster-paths';

export async function getStaticProps() {
  return getFeatureRelatedDocsProps('oasis-enterprise-faster-paths');
}

export default function OasisEnterpriseFasterPathsPage({ relatedDocs = [] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: feature.title,
    url: CANONICAL,
    description: feature.description,
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
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
            Contractor access has a way of becoming the slowest line on the Gantt chart, not because people drag their
            feet, but because the default playbook still imagines every contributor behind your standard issue laptop or
            hosted desktop. That made sense when work lived on the file share. It strains when the real job is eight
            tabs in SaaS and a handful of approvals.
          </p>
          <p>
            A governed browser session does not erase procurement, background checks, or app owners. It can reweight the
            critical path: less time waiting on metal, more time on identity, policy, and the specific apps that unlock
            value. We avoid fairy tales about every workload living in the browser. Some programs will always need other
            delivery models. Oasis targets the slice where web-first access is the bottleneck everyone already feels.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">What changes when the model fits</p>
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
      <EnterpriseFeatureExplainerDiagram variant="faster" />
      <EnterpriseFeatureVisual slug="oasis-enterprise-faster-paths" />
    </FeatureDeepDiveShell>
  );
}
