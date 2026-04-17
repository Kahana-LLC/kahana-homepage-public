import React from 'react';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import EnterpriseFeatureVisual from '../../components/features/EnterpriseFeatureVisual';
import { oasisCapabilities } from '../../data/oasisEnterpriseCapabilities';
import { getEnterpriseFeatureNarrative } from '../../data/enterpriseFeatureNarrative';
import EnterpriseFeatureNarrativeBand from '../../components/features/EnterpriseFeatureNarrativeBand';

const feature = oasisCapabilities.find((c) => c.slug === 'oasis-enterprise-identity-dlp');
const narrative = getEnterpriseFeatureNarrative(feature.slug);
const CANONICAL = 'https://kahana.co/features/oasis-enterprise-identity-dlp';

export default function OasisEnterpriseIdentityDlpPage() {
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
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-6 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <EnterpriseFeatureNarrativeBand slug={feature.slug} />
          <p>
            Security leaders rarely lack identity or data-protection investments, but they lack a straight line from those
            systems into the hours people spend in SaaS tabs. Oasis is integration-first on purpose: let who someone is
            and what data may do travel with the browsing session, instead of stopping politely at the perimeter while
            work continues out of sight.
          </p>
          <p>
            That framing matters because “browser integration” is not one universal switch. Event shapes, connector
            maturity, and enforcement modes vary by vendor and subscription tier. The right next step is architecture
            review with the teams who own your IdP and DLP roadmaps. This page sets direction, not a procurement checklist
            you can sign without them.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">Questions buyers ask early</p>
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
      <EnterpriseFeatureVisual slug="oasis-enterprise-identity-dlp" />
    </FeatureDeepDiveShell>
  );
}
