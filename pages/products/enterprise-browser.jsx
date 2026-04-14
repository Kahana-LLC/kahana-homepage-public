import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';
import OasisProductHero from '../../components/products/OasisProductHero';
import DeviceVsBrowserBand from '../../components/products/DeviceVsBrowserBand';
import CapabilityGrid from '../../components/products/CapabilityGrid';

const heroDescription =
  'Enterprise work runs in the browser on corporate and third-party devices, but many controls still assume owned laptops and network perimeters. Oasis is a managed enterprise browser: governance in the session, integrated with your IdP and enterprise DLP, so you can scale SaaS access without treating hardware shipping or VDI as the only answer.';

const oasisCapabilities = [
  {
    title: 'Secure access for external collaborators',
    description:
      'Contractors and partners often need corporate SaaS from machines you do not manage. Oasis gives them a managed client where your rules apply.',
    details: [
      'Work from their devices when your program allows, with session-level policy',
      'Reduce default reliance on laptop logistics or hosted desktops for browser-first work',
      'Onboarding speed depends on your IdP, apps, and change management',
    ],
  },
  {
    title: 'Consistent browser governance',
    description:
      'Policies should follow the browser session, not only the endpoint image, so enforcement stays coherent across environments.',
    details: [
      'Central configuration for browser-level expectations your teams can operationalize',
      'Align extensions, data handling, and app access to the risk tiers you define',
      'Specific controls depend on product capabilities and your configuration',
    ],
  },
  {
    title: 'Connect to existing identity and DLP',
    description:
      'Oasis is built to extend the investments you already made in identity and data protection into SaaS workflows.',
    details: [
      'Integrate with your identity provider for enterprise-backed sessions',
      'Enterprise DLP and data rules where your stack supports browser integration',
      'Validate exact integrations with your vendors before procurement commitments',
    ],
  },
  {
    title: 'Faster paths for external teams',
    description:
      'When access waits on hardware or complex VDI rollouts, projects stall. A governed browser session can shorten time-to-productivity for web-first roles.',
    details: [
      'Shift more onboarding effort from device logistics to identity-driven access',
      'Scale contractor-heavy work with less linear ops overhead where browser access fits',
      'Timing and feasibility vary by workload; thick apps may still need other delivery models',
    ],
  },
];

const valuePillars = [
  {
    title: 'Third-party SaaS without default device sprawl',
    description:
      'Give external collaborators a path to sanctioned apps with identity, session, and data expectations that match corporate-grade posture.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'One control plane for browser policy',
    description:
      'Apply browser-level policy from a single place for corporate and third-party contexts instead of hoping consumer defaults behave the same everywhere.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: 'Operational leverage for security and IT',
    description:
      'Reduce trade-offs between speed, cost, and control by meeting people where they work: the browser.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const enterpriseBrowserMetrics = [
  {
    label: 'Browser-related IR',
    value: '44%',
    insight: 'Share of incidents where browser-related factors appear in industry incident research.',
    source: {
      url: 'https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report',
      label: 'Palo Alto Networks, 2024',
    },
  },
  {
    label: 'Zero-hour phishing',
    value: '130%',
    insight: 'Year-over-year increase in zero-hour phishing called out in browser security reporting.',
    source: {
      url: 'https://www.menlosecurity.com/press-releases/menlo-security-state-of-browser-security-report-finds-130-increase-in-zero-hour-phishing-attacks-and-identified-nearly-600-incidents-of-genai-fraud',
      label: 'Menlo Security, 2025',
    },
  },
  {
    label: 'Third-party and partner paths',
    value: '15%',
    insight: 'Of breaches involved a third party, including data custodians, third-party software issues, or other supply chain paths, in DBIR analysis.',
    source: {
      url: 'https://www.verizon.com/about/news/2024-data-breach-investigations-report-vulnerability-exploitation-boom',
      label: 'Verizon, 2024',
    },
  },
];

const previewImageUrl = getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' });
const enterpriseHeroImageUrl = getCloudinaryImageUrl('/images/enterprise.jpeg', { width: 1200, quality: 'auto:good' });

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
    screenshot: enterpriseHeroImageUrl,
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
        '@id': 'https://kahana.co/products/enterprise-browser#webpage',
        name: 'Oasis: Managed enterprise browser for secure SaaS access',
        description:
          'Oasis is a managed enterprise browser. Extend identity, session, and data policy into browser work so teams access SaaS with governance on corporate and third-party devices.',
        url: 'https://kahana.co/products/enterprise-browser',
        isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
        about: { '@id': 'https://kahana.co/products/enterprise-browser#software' },
      },
      {
        ...softwareSchema,
        '@id': 'https://kahana.co/products/enterprise-browser#software',
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
        url="https://kahana.co/products/enterprise-browser"
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
        description={heroDescription}
        primaryHref="/schedule-demo"
        primaryLabel="Schedule a demo"
        secondaryHref="/contact"
        secondaryLabel="Get in touch"
      />

      <section className="bg-white py-12 md:py-16 overflow-x-hidden border-b border-[#4A5745]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center w-full">
            <div className="w-full max-w-5xl">
              <Image
                src={enterpriseHeroImageUrl}
                alt="Oasis Enterprise Browser Interface"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-xl border border-[#4A5745]/10"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <DeviceVsBrowserBand
        heading="When work moved to the browser, the control model had to follow"
        intro="SaaS, internal web apps, and AI tools run in sessions that sit beyond classic device-only assumptions. Oasis treats that session as a first-class place for policy."
        leftTitle="What breaks with a purely device-centric story"
        leftItems={[
          'Access is gated on shipping laptops, heavy imaging, or expanding hosted desktops for roles that mostly live in SaaS.',
          'Contractors and partners on unmanaged devices fall outside consistent browser enforcement.',
          'Sensitive activity in web apps is hard to govern if policy stops at the network edge or owned endpoint.',
        ]}
        rightTitle="What browser-centric governance changes"
        rightItems={[
          'Enterprise rules apply inside the managed browser session where SaaS work happens.',
          'The same policy story can cover corporate and third-party devices when Oasis is in scope.',
          'Identity and data protection stacks can extend into workflows instead of stopping short of the tab.',
        ]}
      />

      <section className="bg-[#f8faf9] py-14 md:py-20 border-b border-[#4A5745]/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A5745] mb-4 tracking-tight">
            A browser built as an enterprise control layer
          </h2>
          <p className="text-[#4A5745]/95 leading-relaxed mb-4">
            Oasis is not a consumer browser with a few enterprise toggles. It is a managed platform so security and IT can define how sanctioned SaaS and web work runs: who is signed in, what data can move, and how sessions are supported end to end.
          </p>
          <p className="text-sm text-[#4A5745]/90 leading-relaxed mb-6">
            Goal: fewer unmanaged sessions for corporate work, less default reliance on hardware logistics, and less VDI sprawl for browser-first roles. Oasis complements your IdP, DLP, and endpoint programs; it does not replace every legacy delivery model.
          </p>
          <p className="text-sm text-[#4A5745]/85">
            Evaluating procurement? See the{' '}
            <Link
              href="/enterprise-buyer-guide"
              className="text-[#66C2BE] font-semibold no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
            >
              enterprise buyer guide
            </Link>
            .
          </p>
        </div>
      </section>

      <CapabilityGrid
        title="What Oasis is built to deliver"
        intro="Four capabilities map to how security and IT teams describe the job: external access, consistent governance, stack integration, and operational speed for web-first work."
        items={oasisCapabilities}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-10 tracking-tight">
            Value pillars for enterprise buyers
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            These themes line up with how organizations measure success: less sprawl, clearer enforcement, and programs that scale when work is in SaaS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {valuePillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#4A5745]/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#4A5745] leading-snug tracking-tight pt-1.5">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4A5745]/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf9] py-14 md:py-20 border-y border-[#4A5745]/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A5745] text-center mb-6 tracking-tight">
            Fits the stack you already run
          </h2>
          <p className="text-[#4A5745]/95 text-center leading-relaxed mb-8">
            Oasis is integration-first: connect enterprise identity for authentication and session context, and align data controls with your DLP program where vendors support browser-level enforcement. Your architecture review should confirm exact connectors and data flows.
          </p>
          <ul className="max-w-xl mx-auto space-y-3 text-sm text-[#4A5745]/95">
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
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Why the browser belongs in the security strategy
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto leading-relaxed">
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
                    'font-sans bg-white rounded-xl border border-[#4A5745]/10 shadow-sm p-6 flex flex-col transition-colors hover:border-[#66C2BE]/35 hover:shadow-md',
                    isLastOdd ? 'md:col-span-2 md:max-w-md md:mx-auto' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="text-3xl font-bold tracking-tight text-[#4A5745] mb-2 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-[#4A5745]/85 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-[#4A5745]/90 leading-relaxed mb-3">{metric.insight}</div>
                  {metric.source && (
                    <a
                      href={metric.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-xs text-[#4A5745]/65 no-underline underline-offset-2 hover:text-[#66C2BE] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
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

      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            See Oasis in your environment
          </h2>
          <p className="text-xl text-[#4A5745] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Walk through managed browser sessions, policy design, and how Oasis sits next to your IdP and DLP with the team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/schedule-demo"
              className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto"
            >
              Schedule a demo
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
