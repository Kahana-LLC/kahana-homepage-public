import React from 'react';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import { oasisCapabilities } from '../../data/oasisEnterpriseCapabilities';

const feature = oasisCapabilities.find((c) => c.slug === 'oasis-enterprise-external-access');
const CANONICAL = 'https://kahana.co/features/oasis-enterprise-external-access';

export default function OasisEnterpriseExternalAccessPage() {
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
            The uncomfortable truth in most programs is that external specialists already touch internal SaaS. They just
            do it from consumer browsers, personal profiles, and extension habits you never approved. That is not a
            morality play about contractors; it is a geometry problem. Work moved into the session, and the session needs
            a place where your rules are legible without pretending every machine is yours.
          </p>
          <p>
            Oasis is not a claim that every relationship fits a browser-only model. Regulated fat clients, air-gapped
            workflows, and legacy thick apps still exist. The bet is narrower and more honest: shrink the share of
            projects where laptop logistics or hosted desktops are the <em>default</em> answer for people who mostly live
            in a handful of web apps.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">What teams usually optimize for</p>
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
