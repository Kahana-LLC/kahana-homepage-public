import React from 'react';
import dynamic from 'next/dynamic';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import { getFeatureRelatedDocsProps } from '../../utils/featurePageStaticProps';

const OasisMockConfirmModal = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisMockConfirmModal),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto min-h-[280px] max-w-lg rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const CANONICAL = 'https://kahana.io/features/oasis-confirmations';

export async function getStaticProps() {
  return getFeatureRelatedDocsProps('oasis-confirmations');
}

export default function OasisConfirmationsFeaturePage({ relatedDocs = [] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Confirmations for sensitive actions',
    url: CANONICAL,
    description:
      'Oasis confirmations: plain-language prompts and a visible command preview before meaningful browser changes.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.io' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Confirmations for sensitive actions"
      seoDescription="Before Oasis runs a command that could meaningfully change your browsing state, you see what will happen: words you can scan and a command line you can recognize."
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser"
      heroTitle="Trust beats surprise"
      heroDescription="The worst security UX is the one that trains people to click OK without reading. Oasis slows the moment that matters: when the browser is about to do something on your behalf that you would notice later."
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser#confirmations"
      backLabel="← Back to Oasis Browser (Confirmations)"
      relatedDocs={relatedDocs}
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <p>
            When a suggestion graduates from chat into action (closing tabs, changing settings, or anything else you would
            care about if it happened while you looked away), Oasis can ask in plain language first. You get the human
            explanation <em>and</em> the machine-readable command line highlighted so power users and skeptics alike
            can sanity-check the same surface.
          </p>
          <p>
            That pairing is intentional: narrative for speed-reading, syntax for precision. Approve, cancel, or ask for
            a different approach without playing whack-a-mole with silent failures.
          </p>
          <p className="text-sm text-oasis-green-800/80">
            The modal below is a mock. Real copy, icons, and which actions require confirmation evolve with product and
            policy, and some environments may route certain actions through your org&apos;s tooling instead.
          </p>
        </div>
      </section>
      <section className="flex justify-center bg-oasis-green-50 py-12 md:py-16">
        <div className="w-full max-w-xl px-4 sm:px-6 lg:px-8">
          <OasisMockConfirmModal />
        </div>
      </section>
    </FeatureDeepDiveShell>
  );
}
