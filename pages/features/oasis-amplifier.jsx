import React from 'react';
import dynamic from 'next/dynamic';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';

const OasisAmplifierStory = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisAmplifierStory),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[100px] max-w-md rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const OasisAmplifierVisuals = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisAmplifierVisuals),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[280px] w-full rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const CANONICAL = 'https://kahana.co/features/oasis-amplifier';

export default function OasisAmplifierFeaturePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Amplifier (planned)',
    url: CANONICAL,
    description:
      'Amplifier (planned): structured feedback (tags, notes, thumbs) as signal for a steadier assistant over time. Illustrations only; not live metrics.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Amplifier (planned)"
      seoDescription="Amplifier is a planned Oasis capability: turn structured reactions into a feedback loop for the assistant. Previews on this page are conceptual, not guarantees or live dashboards."
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser · Coming soon"
      heroTitle="Amplifier: teach the assistant with real work"
      heroDescription="The best models still miss tone, speed, and risk in real tabs. Amplifier is our bet that steady, structured reactions, not vibes, could steer the assistant the way you already steer colleagues."
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser#amplifier"
      backLabel="← Back to Oasis Browser (Amplifier)"
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">Planned capability</p>
          <p>
            Until we ship and document Amplifier in release notes, treat everything here as intent, not inventory. The
            north star is simple: capture session-grounded signal (what felt slow, wrong, unsafe, or great) and fold it
            back into how the assistant behaves for you, without turning your browsing history into a free-for-all data
            grab.
          </p>
          <p>
            The chart and trajectory visuals are deliberately labeled as illustrations. They exist to explain the
            <em> shape</em> of the idea: feedback compounding over weeks, not a promise that a slope will match your org on
            day one.
          </p>
          <p className="text-sm text-oasis-green-800/80">
            Privacy and minimization still matter: anything cross-user would be designed around aggregation and consent,
            not raw replay of individual sessions. Final policy will ship with the feature.
          </p>
        </div>
      </section>
      <section className="bg-oasis-green-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <OasisAmplifierStory />
          </div>
          <OasisAmplifierVisuals />
        </div>
      </section>
    </FeatureDeepDiveShell>
  );
}
