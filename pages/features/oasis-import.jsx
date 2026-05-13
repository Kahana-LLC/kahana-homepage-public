import React from 'react';
import dynamic from 'next/dynamic';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import { getFeatureRelatedDocsProps } from '../../utils/featurePageStaticProps';

const OasisMockImportBrowser = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisMockImportBrowser),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[260px] w-full rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const importItems = [
  'Bookmarks (or favorites, depending on source browser)',
  'Passwords',
  'History',
  'Form autofill data',
  'Payment methods (where supported)',
  'Extensions (where the platform can transfer them)',
];

const CANONICAL = 'https://kahana.co/features/oasis-import';

export async function getStaticProps() {
  return getFeatureRelatedDocsProps('oasis-import');
}

export default function OasisImportFeaturePage({ relatedDocs = [] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Guided import from other browsers',
    url: CANONICAL,
    description:
      'Guided import in Oasis: migration-style flow for bookmarks, passwords, history, autofill, payments, and extensions where the OS and source browser allow.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Guided import from other browsers"
      seoDescription="Switch browsers without a weekend project: Oasis walks import choices step by step, asks OS permission only when needed, and names what cannot move when a platform does not expose it."
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser"
      heroTitle="Bring your digital habits with you"
      heroDescription="The honest pitch is not “one click and everything teleports.” It is one guided flow that respects platform limits, explains tradeoffs, and gets you productive before the coffee cools."
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser#import"
      backLabel="← Back to Oasis Browser (Import)"
      relatedDocs={relatedDocs}
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <p>
            Oasis treats import like a migration conversation: what matters to you first, what can move automatically,
            what needs an OS prompt, and what simply cannot cross because the source browser never offered a handle.
            Surprises belong in release notes, not in the middle of your Tuesday night switch.
          </p>
          <p>
            That is why the wizard leans on clarity over bravado. If a data class is unsupported on your combination of
            OS and source app, we would rather tell you upfront than silently drop it and let you discover the gap weeks
            later.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">What the flow can include</p>
          <ul className="space-y-2.5">
            {importItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-oasis-green-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <OasisMockImportBrowser />
        </div>
      </section>
    </FeatureDeepDiveShell>
  );
}
