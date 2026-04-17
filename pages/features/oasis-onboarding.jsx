import React from 'react';
import dynamic from 'next/dynamic';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';

const OasisMockOnboardingChecklist = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisMockOnboardingChecklist),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto min-h-[200px] max-w-md rounded-xl border border-[#4A5745]/10 bg-[#f8faf9] animate-pulse" aria-hidden />
    ),
  }
);

const CANONICAL = 'https://kahana.co/features/oasis-onboarding';

export default function OasisOnboardingFeaturePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Onboarding checklist',
    url: CANONICAL,
    description:
      'Oasis onboarding: a short docked checklist so new users sign in, send a first prompt, and try voice without guessing what “done” means.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Onboarding checklist"
      seoDescription="After install, Oasis nudges you through a small set of high-leverage steps (sign-in, first prompt, voice) so the first win is obvious, not buried in menus."
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser"
      heroTitle="Skip the blank “now what?” moment"
      heroDescription="New browsers often celebrate the install and then abandon you to an empty window. Oasis keeps a gentle, docked checklist so the first useful session is closer than the docs tab."
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser#onboarding"
      backLabel="← Back to Oasis Browser (Onboarding)"
    >
      <section className="border-b border-[#4A5745]/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-[#4A5745]/95 leading-relaxed sm:px-6 lg:px-8">
          <p>
            The checklist is deliberately short. Each row is a single meaningful action: sign in, send a first prompt, try
            voice, so momentum beats scrolling through a tour you will never finish. Completion states are lightweight
            nods of progress, not gamified noise.
          </p>
          <p>
            Your IT team can still wrap real training around Oasis; this surface exists so individuals are not stuck
            between &quot;installed&quot; and &quot;confident&quot; with nothing in the middle. Think of it as the
            polite friend who remembers the three things you meant to do first.
          </p>
        </div>
      </section>
      <section className="flex justify-center bg-[#f8faf9] py-12 md:py-16">
        <div className="w-full max-w-md px-4 sm:px-6 lg:px-8">
          <OasisMockOnboardingChecklist />
        </div>
      </section>
    </FeatureDeepDiveShell>
  );
}
