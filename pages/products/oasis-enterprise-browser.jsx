import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';
import OasisProductHero from '../../components/products/OasisProductHero';
import DeviceVsBrowserBand from '../../components/products/DeviceVsBrowserBand';
import SolutionFeatureWithVisual from '../../components/solutions/visuals/SolutionFeatureWithVisual';
import MainIncidentDashboardPreview from '../../components/solutions/visuals/MainIncidentDashboardPreview';
import RelatedEnterpriseFeatureLinks from '../../components/features/RelatedEnterpriseFeatureLinks';
import SharedCTA from '../../components/SharedCTA';
import { oasisCapabilities } from '../../data/oasisEnterpriseCapabilities';
import {
  enterpriseHeroDescription,
  deviceVsBrowserBandProps,
  enterpriseBrowserMetrics,
  valuePillars,
} from '../../data/oasisEnterpriseProductContent';

const previewImageUrl = getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' });

const softwareFeatureList = [
  'Secure contractor and partner access to corporate SaaS from managed browser sessions',
  'Browser policies that follow the session across corporate and third-party devices',
  'Integration with enterprise identity providers (IdP)',
  'Integration with enterprise DLP and data protection controls where supported',
  'Centralized browser configuration and governance for IT and security teams',
  'Visibility into browser activity to support operations and compliance conversations',
];

export default function EnterpriseBrowser() {
  const softwareSchema = {
    '@type': 'SoftwareApplication',
    name: 'Kahana Oasis',
    description:
      'Managed enterprise browser for modern SaaS access. Governance in the browser session with identity and DLP integration, for employees, contractors, and partners on corporate and third-party devices.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cross-platform',
    featureList: softwareFeatureList,
    screenshot: previewImageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Kahana',
      url: 'https://kahana.co',
      description:
        'Kahana builds Oasis, a managed enterprise browser so organizations can govern SaaS and web work in the session.',
    },
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://kahana.co/products/oasis-enterprise-browser#webpage',
        name: 'Oasis: Managed enterprise browser for secure SaaS access',
        description:
          'Oasis is a managed enterprise browser. Extend identity, session, and data policy into browser work so teams access SaaS with governance on corporate and third-party devices.',
        url: 'https://kahana.co/products/oasis-enterprise-browser',
        isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
        about: { '@id': 'https://kahana.co/products/oasis-enterprise-browser#software' },
      },
      {
        ...softwareSchema,
        '@id': 'https://kahana.co/products/oasis-enterprise-browser#software',
      },
    ],
  };

  const seoDescription =
    'Oasis is a managed enterprise browser for SaaS access: governance in the browser session, IdP and enterprise DLP integration, and consistent policy for employees, contractors, and partners.';

  return (
    <>
      <SEO
        title="Oasis: Managed enterprise browser for secure SaaS access"
        description={seoDescription}
        image={previewImageUrl}
        url="https://kahana.co/products/oasis-enterprise-browser"
        type="product"
        schema={pageSchema}
      />
      <Head>
        <title>Oasis: Managed enterprise browser for secure SaaS access | Kahana</title>
        <meta name="description" content={seoDescription} />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      <OasisProductHero
        eyebrow="Oasis"
        title="Managed enterprise browser for secure SaaS access"
        description={enterpriseHeroDescription}
        primaryHref="/schedule-demo"
        primaryLabel="Schedule a demo"
        secondaryHref="/contact"
        secondaryLabel="Get in touch"
      />

      <MainIncidentDashboardPreview pageKey="oasis-enterprise-browser" />

      <RelatedEnterpriseFeatureLinks pageKey="oasis-enterprise-browser" />

      <DeviceVsBrowserBand {...deviceVsBrowserBandProps} />

      <section className="bg-oasis-green-50 py-14 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-oasis-green-800 mb-4 tracking-tight">
            A browser built as an enterprise control layer
          </h2>
          <p className="text-oasis-green-800/95 leading-relaxed mb-4">
            Oasis is not a consumer browser with a few enterprise toggles. It is a managed platform so security and IT can define how sanctioned SaaS and web work runs: who is signed in, what data can move, and how sessions are supported end to end.
          </p>
          <p className="text-sm text-oasis-green-800/90 leading-relaxed mb-6">
            Goal: fewer unmanaged sessions for corporate work, less default reliance on hardware logistics, and less VDI sprawl for browser-first roles. Oasis complements your IdP, DLP, and endpoint programs; it does not replace every legacy delivery model.
          </p>
          <p className="text-sm text-oasis-green-800/85">
            Evaluating procurement? See the{' '}
            <Link
              href="/enterprise-buyer-guide"
              className="text-brand-link font-semibold no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              enterprise buyer guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-oasis-green-50 py-16 md:py-20 border-y border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12 tracking-tight">
            What Oasis is built to deliver
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Four capabilities map to how security and IT teams describe the job: external access, consistent governance, stack integration, and operational speed for web-first work.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {oasisCapabilities.map((feature, index) => (
              <div key={feature.slug} className="space-y-3">
                <SolutionFeatureWithVisual
                  pageKey="oasis-enterprise-browser"
                  feature={feature}
                  index={index}
                />
                <p className="text-center">
                  <Link
                    href={`/features/${feature.slug}`}
                    className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                  >
                    Learn more: {feature.title} →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-10 tracking-tight">
            Value pillars for enterprise buyers
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            These themes line up with how organizations measure success: less sprawl, clearer enforcement, and programs that scale when work is in SaaS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {valuePillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-oasis-green-800/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-oasis-green-800 leading-snug tracking-tight pt-1.5">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-oasis-green-800/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-oasis-green-50 py-14 md:py-20 border-y border-oasis-green-800/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-oasis-green-800 text-center mb-6 tracking-tight">
            Fits the stack you already run
          </h2>
          <p className="text-oasis-green-800/95 text-center leading-relaxed mb-8">
            Oasis is integration-first: connect enterprise identity for authentication and session context, and align data controls with your DLP program where vendors support browser-level enforcement. Your architecture review should confirm exact connectors and data flows.
          </p>
          <ul className="max-w-xl mx-auto space-y-3 text-sm text-oasis-green-800/95">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
              <span>Identity providers (IdP) for workforce and external identities as you configure them.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
              <span>Enterprise DLP and data protection platforms where browser integration is supported.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
              <span>SIEM and operations tooling via logging and export options that match your deployment.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why the browser belongs in the security strategy
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry reporting continues to tie incidents to browser factors, phishing, and third-party paths. A managed enterprise browser is part of a modern program, not a niche add-on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {enterpriseBrowserMetrics.map((metric, idx) => {
              const isLastOdd =
                enterpriseBrowserMetrics.length % 2 === 1 && idx === enterpriseBrowserMetrics.length - 1;
              return (
                <div
                  key={idx}
                  className={[
                    'font-sans bg-white rounded-xl border border-oasis-green-800/10 shadow-sm p-6 flex flex-col transition-colors hover:border-brand-link/35 hover:shadow-md',
                    isLastOdd ? 'md:col-span-2 md:max-w-md md:mx-auto' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="text-3xl font-bold tracking-tight text-oasis-green-800 mb-2 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-oasis-green-800/85 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-oasis-green-800/90 leading-relaxed mb-3">{metric.insight}</div>
                  {metric.source && (
                    <a
                      href={metric.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-xs text-oasis-green-800/65 no-underline underline-offset-2 hover:text-brand-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                    >
                      Source: {metric.source.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SharedCTA
        title="See Oasis in your environment"
        description="Walk through managed browser sessions, policy design, and how Oasis sits next to your IdP and DLP with the team."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
