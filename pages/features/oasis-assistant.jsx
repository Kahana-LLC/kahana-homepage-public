import React from 'react';
import dynamic from 'next/dynamic';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';

const OasisMockAssistantHero = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisMockAssistantHero),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[280px] w-full rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const OasisSkillsGallery = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisSkillsGallery),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[320px] w-full rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const CANONICAL = 'https://kahana.co/features/oasis-assistant';

export default function OasisAssistantFeaturePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Assistant grounded in browser context',
    url: CANONICAL,
    description:
      'Oasis assistant: chat, tools, and illustrative skills grounded in tabs, history, and the page you are on, not a generic side chat.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Assistant grounded in browser context"
      seoDescription="The Oasis assistant sits beside real browser context: open tabs, bookmarks, history, and the active page, plus read-aloud, feedback, and busy states you can read at a glance."
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser"
      heroTitle="An assistant that reads the room (your tabs)"
      heroDescription="Work moved into the browser; the assistant should meet you there, not in a disconnected chat bubble that pretends every page is the same blank slate."
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser#assistant"
      backLabel="← Back to Oasis Browser (Assistant)"
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <p>
            The panel is deliberately boring in the good way: a timeline you can skim, a composer that stays put, busy
            states when a tool is actually running, and read-aloud plus feedback on the latest reply when you want the
            answer in your ears, or want to thumbs-down a miss without breaking flow.
          </p>
          <p>
            The skills gallery is a <span className="font-medium text-oasis-green-800">tasting menu</span>, not a contract.
            Search and filters show how we think about discoverability; your catalog, labels, and guardrails will follow
            what ships in your build and what your admins allow.
          </p>
          <p className="text-sm text-oasis-green-800/80">
            If a command would do something sensitive in the browser, confirmations (covered on their own page) are the
            other half of the story: speed when it is safe, friction when it is not.
          </p>
        </div>
      </section>
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-[#7a9200]">
            Looping demo (illustrative UI, not a full skills catalog)
          </p>
          <OasisMockAssistantHero />
        </div>
      </section>
      <section className="bg-oasis-green-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OasisSkillsGallery />
        </div>
      </section>
    </FeatureDeepDiveShell>
  );
}
