import React from 'react';
import dynamic from 'next/dynamic';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';

const OasisMockVoiceOverlay = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisMockVoiceOverlay),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[220px] w-full rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse"
        aria-hidden
      />
    ),
  }
);

const CANONICAL = 'https://kahana.co/features/oasis-voice';

export default function OasisVoiceFeaturePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Voice in the assistant',
    url: CANONICAL,
    description:
      'Voice in Oasis: same assistant thread as typing, focused capture modes, and clear listening states, built for when talking is faster than typing.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Voice in the assistant"
      seoDescription="Oasis voice sessions share one thread with chat, offer Continuous and Precise capture, and respect device permissions. Illustrative UI on this page."
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser"
      heroTitle="Voice where your work already lives"
      heroDescription="Most of your day is already in the browser: tabs, docs, the page in front of you. Voice belongs in that same room: one assistant thread, whether you type or speak."
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser#voice"
      backLabel="← Back to Oasis Browser (Voice)"
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <p>
            Tap the mic in the composer and Oasis opens a dedicated voice surface: a calm overlay with clear capture
            modes. You choose whether answers land back in chat or are spoken aloud, without forking a separate
            &quot;voice app&quot; that forgets what you were doing in the tab.
          </p>
          <p>
            Status hints (listening, pauses, and the like) are there so you are never guessing whether the browser is
            actually hearing you. Small honesty beats a flashy demo that goes quiet when something fails. The mock below is
            illustrative; exact strings and motion ship with your build.
          </p>
          <p className="text-sm text-oasis-green-800/80">
            Voice needs OS permission where the platform requires it, and only appears in supported builds. If voice is
            unavailable, Oasis tells you plainly in product rather than leaving you tapping a dead icon.
          </p>
        </div>
      </section>
      <section className="bg-oasis-green-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-[#7a9200]">
            Illustrative UI (not a live recording of your session)
          </p>
          <div className="overflow-x-auto">
            <OasisMockVoiceOverlay />
          </div>
        </div>
      </section>
    </FeatureDeepDiveShell>
  );
}
