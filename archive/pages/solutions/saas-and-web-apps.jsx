import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';
import SolutionsExploreGrid from '../../components/solutions/SolutionsExploreGrid';
import MainIncidentDashboardPreview from '../../components/solutions/visuals/MainIncidentDashboardPreview';
import SolutionFeatureWithVisual from '../../components/solutions/visuals/SolutionFeatureWithVisual';
import RelatedEnterpriseFeatureLinks from '../../components/features/RelatedEnterpriseFeatureLinks';
import SharedCTA from '../../components/SharedCTA';

const securityFeatures = [
  {
    title: 'Secure access for contractors and partners without the laptop default',
    description:
      'External users work from their own devices when policy allows, without corporate laptops or virtual desktops as the only path. Oasis is a managed enterprise browser that carries identity, session, and data policy in the session.',
    details: [
      'Managed browser sessions on third-party devices where your program permits it',
      'Corporate-grade authentication and access patterns through your IdP',
      'Less hardware logistics for short-term and project-based collaborators',
      'Shifts onboarding toward identity-driven access management',
    ],
  },
  {
    title: 'Governance that follows the session, not only the device',
    description:
      'Unified browser policies apply across corporate and partner environments. When work lives in SaaS and internal web apps, enforcement belongs in the browsing layer, not only on endpoints you own.',
    details: [
      'Single control plane for browser-level rules and visibility',
      'Consistent posture for apps, extensions, and AI-assisted workflows in the browser',
      'Policies travel with the user session across locations and devices',
      'Reduces exception sprawl from device-only control models',
    ],
  },
  {
    title: 'Connects to identity and data protection you already use',
    description:
      'Oasis integrates with existing identity providers and enterprise DLP so access rules and data policies extend into SaaS workflows. You build on the stack you have instead of duplicating it.',
    details: [
      'IdP-driven sign-in and access aligned to how you manage users today',
      'Enterprise DLP and data controls enforced in the browsing layer',
      'Browser activity tied to identity for clearer accountability',
      'Modern browser experience with governance people can adopt',
    ],
  },
  {
    title: 'Faster paths to productive access for external teams',
    description:
      'Contractor access is often the slowest part of delivery when the default is ship hardware or stand up VDI. Controlled browser sessions aim to get collaborators working in hours instead of weeks, within your security boundary.',
    details: [
      'Fewer blocking dependencies on device procurement and imaging',
      'Practical model for surge staff, integrators, and vendors',
      'Scales external collaboration without linear growth in laptop programs',
      'Specific timelines depend on your environment and approvals',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Project velocity',
    description:
      'External specialists and partners contribute sooner when secure access does not wait on hardware provisioning and heavy setup for every engagement.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'Cost structure',
    description:
      'Less pressure to purchase, ship, track, and recover laptops for contractors, rotations, and short programs when the browser can carry policy instead.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'Governance confidence',
    description:
      'Sensitive SaaS and internal web workflows stay governed when activity happens in a managed browser session on corporate and authorized third-party devices.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'Operational scalability',
    description:
      'Support contractor-heavy and distributed SaaS adoption without scaling device-centric exceptions and one-off access paths linearly.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
];

const saasMetrics = [
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

export default function SaasAndWebApps() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SaaS and web apps: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis is a managed enterprise browser for SaaS and web app access: governance in the browser session, unified policies across corporate and third-party devices, identity and DLP integration, and contractor access without laptop shipping or VDI as the default.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser so organizations can govern SaaS and browser-centric work with policies that follow the session.',
    },
  };

  return (
    <>
      <SEO
        title="SaaS and web apps: Secure access with Oasis | Kahana"
        description="Managed enterprise browser for SaaS: governance in the browser where work happens, unified policies across devices, IdP and DLP integration, and secure contractor access without default laptop or VDI programs."
        image="https://kahana.io/assets/oasis-browser-preview.png"
        url="https://kahana.io/solutions/saas-and-web-apps"
        type="webpage"
        schema={pageSchema}
      />
      <Head>
        <title>SaaS and web apps: Secure access with Oasis | Kahana</title>
        <meta
          name="description"
          content="Enterprise work moved into the browser, but many access models still assume corporate devices. Oasis puts governance in the session: identity and data policy in a managed browser, practical third-party access, and a path off pure laptop and VDI defaults."
        />
      </Head>

      <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">SaaS and web apps</h2>
            <h1 className="text-5xl font-bold text-oasis-green-800 mb-6">Governance where SaaS work actually happens</h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 leading-relaxed">
              SaaS and internal web work happen in the browser, where laptop- and network-only controls leave gaps. Oasis is a managed enterprise browser: unified policy in the session, wired to your IdP and DLP, so contractors and partners get governed access without hardware or VDI as the default.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/schedule-demo"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Schedule a demo
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MainIncidentDashboardPreview pageKey="saas-and-web-apps" />

      <RelatedEnterpriseFeatureLinks pageKey="saas-and-web-apps" />

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-4 tracking-tight">
            When access shifts to the browser, device-only controls fall short
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            SaaS, internal tools, collaboration, and AI workflows run in web sessions, often on devices the organization does not own. Legacy laptop, VPN, and VDI patterns still matter for many use cases, but they do not fully govern what users do inside the browser. Oasis treats the browser as a first-class place to enforce policy and visibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">Device-centric model</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Access is often framed around corporate laptops and managed endpoints.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Contractors may need shipped hardware or virtual desktops for &quot;secure&quot; SaaS access.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Enforcement is tied to device ownership and traditional network boundaries.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">Browser-centric reality</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>SaaS is reached directly through the browser from many device types.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Partners and staff aug often work from their own machines.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Sensitive actions, extensions, and AI tools concentrate inside the session.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why browser governance matters for SaaS
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry reporting points to browser involvement in incidents, fast-moving phishing, and breaches with a third-party dimension. For organizations living in SaaS, governing the session complements endpoint and network investments instead of replacing them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {saasMetrics.map((metric, idx) => {
              const isLastOdd = saasMetrics.length % 2 === 1 && idx === saasMetrics.length - 1;
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

      <section className="bg-oasis-green-50 py-16 md:py-20 border-y border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12 tracking-tight">
            What Oasis delivers for SaaS and web apps
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Four capabilities anchor how we talk about the product: secure external access, policies that follow the session, connection to your existing identity and DLP investments, and faster onboarding for teams that should not wait on hardware logistics.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <SolutionFeatureWithVisual key={index} pageKey="saas-and-web-apps" feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-10 tracking-tight">
            Outcomes security and IT leaders care about
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Themes aligned to the business case for governing SaaS in the browser: velocity, cost, confidence, and scale. Your numbers depend on programs, risk tolerance, and rollout scope.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {industryBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-oasis-green-800/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-oasis-green-800 leading-snug tracking-tight pt-1.5">
                    {benefit.title}
                  </h3>
                </div>
                {benefit.stat != null && benefit.statLabel != null && (
                  <div className="mb-4">
                    <div className="text-2xl font-bold tracking-tight text-oasis-green-800 tabular-nums mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-oasis-green-800/85">{benefit.statLabel}</div>
                  </div>
                )}
                {benefit.source && (
                  <a
                    href={benefit.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 block text-xs text-oasis-green-800/65 no-underline underline-offset-2 hover:text-kahana-primary-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kahana-primary-700"
                  >
                    Source: {benefit.source.label}
                  </a>
                )}
                <p className="text-sm text-oasis-green-800/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionsExploreGrid currentHref="/solutions/saas-and-web-apps" />

      <SharedCTA
        title="External collaboration without operational drag"
        description="Put governance in the browser for SaaS and web apps, with secure access from authorized devices, policy enforcement, and visibility your security and IT teams can stand behind."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
