import React from 'react';
import Link from 'next/link';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import UserAnalyticsFeatureVisuals from '../../components/features/UserAnalyticsFeatureVisuals';
import SharedCTA from '../../components/SharedCTA';

const CANONICAL = 'https://kahana.co/features/user-analytics';

const seoDescription =
  'Coming soon: personal usage insights in Oasis Browser—a preview of how you could see assistant activity, skills, tokens, and training signals in one place. Not available yet; illustrations only.';

export default function UserAnalyticsFeatures() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Usage insights (coming soon)',
    url: CANONICAL,
    description: seoDescription,
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Usage insights (coming soon) | Kahana"
      seoDescription={seoDescription}
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser · Coming soon"
      heroTitle="Usage insights, inside the browser you already use"
      heroDescription="A planned dashboard-style view so you can understand how you use the assistant, which skills you reach for, and how plan usage adds up—without exporting logs or stitching spreadsheets."
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser"
      backLabel="← Back to Oasis Browser"
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">Planned feature</p>
          <p>
            <strong>User analytics / usage insights are not shipped yet.</strong> This page is a preview of the direction:
            give people who use{' '}
            <Link
              href="/products/oasis-browser"
              className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              Oasis Browser
            </Link>{' '}
            clearer visibility into productivity—assistant activity, skills, and usage over time—when we are ready to
            release it. Final metrics, privacy controls, and aggregation will ship with the feature.
          </p>
          <p>
            Structured training and feedback loops matter for how the assistant improves over time.{' '}
            <Link
              href="/features/oasis-amplifier"
              className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              Amplifier
            </Link>{' '}
            (planned) describes that story; insights here would complement it once both exist—not everything below will
            map one-to-one until we document what actually lands in product.
          </p>
          <p className="text-sm text-oasis-green-800/80">
            All numbers and charts on this page are <strong>illustrative mock data</strong> for layout and narrative only.
            They are not live telemetry and are not a guarantee of future UI or reporting.
          </p>
        </div>
      </section>

      <UserAnalyticsFeatureVisuals />

      <SharedCTA
        title="Try Oasis today"
        description="Download from pricing, or get in touch. Usage insights will arrive in a future release—we will say so clearly in release notes when they do."
        primaryLabel="Download"
        primaryHref="/oasis-pricing"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
        className="!bg-oasis-green-50 border-t border-oasis-green-800/8"
      />
    </FeatureDeepDiveShell>
  );
}
