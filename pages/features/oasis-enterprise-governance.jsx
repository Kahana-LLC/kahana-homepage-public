import React from 'react';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import { oasisCapabilities } from '../../data/oasisEnterpriseCapabilities';

const feature = oasisCapabilities.find((c) => c.slug === 'oasis-enterprise-governance');
const CANONICAL = 'https://kahana.co/features/oasis-enterprise-governance';

export default function OasisEnterpriseGovernancePage() {
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
      heroEyebrow="Oasis Enterprise Browser"
      heroTitle={feature.title}
      heroDescription={feature.description}
      primaryHref="/schedule-demo"
      primaryLabel="Schedule a demo"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-enterprise-browser"
      backLabel="← Back to Oasis Enterprise Browser"
    >
      <section className="border-b border-[#4A5745]/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-6 text-[#4A5745]/95 leading-relaxed sm:px-6 lg:px-8">
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
    </FeatureDeepDiveShell>
  );
}
