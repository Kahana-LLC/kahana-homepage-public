import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import SolutionsExploreGrid from '../../components/solutions/SolutionsExploreGrid';
import MainIncidentDashboardPreview from '../../components/solutions/visuals/MainIncidentDashboardPreview';
import SolutionFeatureWithVisual from '../../components/solutions/visuals/SolutionFeatureWithVisual';
import RelatedEnterpriseFeatureLinks from '../../components/features/RelatedEnterpriseFeatureLinks';

const securityFeatures = [
  {
    title: 'Secure contractor and partner access without the laptop default',
    description:
      'External specialists need corporate SaaS from their own devices when policy allows. Oasis is a managed enterprise browser: identity, session behavior, and data policy live in the browsing layer so you can avoid shipping corporate hardware or standing up VDI for every engagement.',
    details: [
      'Managed browser sessions on third-party-owned devices where your program permits',
      'Corporate-grade authentication through your IdP',
      'Practical alternative to laptop logistics for short-term and project-based workers',
      'Shifts onboarding toward identity-driven access management',
    ],
  },
  {
    title: 'Governance that follows the session, not only your endpoints',
    description:
      'Contractors rarely match your standard corporate image. Unified browser policies apply in the session across external and internal users, so SaaS usage stays governable even when you do not own the machine.',
    details: [
      'Single control plane for browser-level enforcement',
      'DLP and usage rules aligned to how contractors actually use web apps',
      'Consistent posture for sensitive workflows in SaaS',
      'Less reliance on consumer browsers alone for corporate data',
    ],
  },
  {
    title: 'Connects to identity and data protection you already use',
    description:
      'Oasis integrates with existing identity providers and enterprise DLP. Access rules and data policies extend into contractor browser sessions without asking security to duplicate the stack.',
    details: [
      'IdP-driven sign-in patterns external users can adopt quickly',
      'Enterprise DLP and data controls enforced where work happens',
      'Builds on investments in identity and data protection',
      'Modern browser experience built for real adoption',
    ],
  },
  {
    title: 'Faster paths to productive access for external teams',
    description:
      'Contractor access is often the slowest part of delivery when the default is hardware or VDI. Controlled browser sessions aim to shorten time to governed SaaS access within your security boundary.',
    details: [
      'Fewer blocking dependencies on device procurement for every cohort',
      'Scales staff aug, integrators, and vendor teams without linear laptop growth',
      'Timelines depend on your approvals, risk posture, and environment',
      'Complements VPN and endpoint programs where you still need them',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Project velocity',
    description:
      'Keep programs moving when external contributors get governed SaaS access without waiting weeks on hardware provisioning alone.',
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
      'Reduce the operational tax of purchasing, shipping, tracking, and recovering laptops for contractors, surge staff, and rotating partners.',
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
      'Corporate SaaS stays governed when contractors work in a managed browser on authorized devices, aligned to your policies and obligations.',
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
      'Support contractor-heavy portfolios without scaling device programs and one-off exceptions linearly.',
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

const externalMetrics = [
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

export default function ExternalWorkforce() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'External workforce: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps organizations secure SaaS access for contractors and partners with session-level governance, unified browser policies, identity and DLP integration, and access from their own devices without laptop shipping or VDI as the default.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser for secure contractor and third-party SaaS access.',
    },
  };

  return (
    <>
      <SEO
        title="External workforce: Secure SaaS access with Oasis | Kahana"
        description="Managed enterprise browser for contractors and partners: governance in the browser, unified policies across devices, IdP and DLP integration, and secure access without default laptop or VDI programs."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co/solutions/external-workforce"
        type="webpage"
        schema={pageSchema}
      />
      <Head>
        <title>External workforce: Secure SaaS access with Oasis | Kahana</title>
        <meta
          name="description"
          content="Contractors and partners reach corporate SaaS in the browser, often on devices you do not manage. Oasis is a managed enterprise browser: policies in the session, wired to identity and DLP, with a practical path off pure laptop and VDI defaults."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      <section className="bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">External workforce</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">Secure contractor SaaS without shipping laptops</h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8 leading-relaxed">
              Third-party access slows down when the only trusted pattern is shipping laptops or standing up VDI. Oasis is a managed enterprise browser: identity, session, and data policy extend into browser work on their devices when your program allows, without that hardware tax.
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

      <MainIncidentDashboardPreview pageKey="external-workforce" />

      <RelatedEnterpriseFeatureLinks pageKey="external-workforce" />

      <section className="bg-white py-16 md:py-20 border-b border-[#4A5745]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-4 tracking-tight">
            The trade-off security teams keep revisiting
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            External work is browser-centric SaaS, but many access models still assume owned endpoints. Shipping laptops or standing up VDI restores control at a high operational cost. Unmanaged consumer browsers restore speed at a governance cost. Oasis targets the gap: policy and visibility in the browsing layer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-[#4A5745]/10 bg-[#f8faf9] p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-[#4A5745] mb-3">What the old default looks like</h3>
              <ul className="space-y-2.5 text-sm text-[#4A5745]/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Contractors wait on shipped hardware or virtual desktops for governed access.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Each engagement adds procurement, configuration, and recovery work.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Device-only enforcement cannot fully govern SaaS inside unmanaged browsers.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#4A5745]/10 bg-white p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-[#4A5745] mb-3">What session governance enables</h3>
              <ul className="space-y-2.5 text-sm text-[#4A5745]/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Policies and data controls attach to the managed browser session.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Identity and DLP integrations extend into contractor workflows.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Onboarding can move toward hours and identity steps instead of only logistics.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Why browser governance matters for external teams
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Partners and contractors expand your attack surface: shared credentials, phishing, and supplier-mediated breach paths show up in industry data. Governing how external users work in SaaS reduces gaps that endpoint-only models often leave open.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {externalMetrics.map((metric, idx) => {
              const isLastOdd = externalMetrics.length % 2 === 1 && idx === externalMetrics.length - 1;
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

      <section className="bg-[#f8faf9] py-16 md:py-20 border-y border-[#4A5745]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12 tracking-tight">
            What Oasis delivers for contractors and partners
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Secure access from their devices when policy allows, browser policies that follow the session, hooks into identity and DLP, and faster onboarding paths that scale with contractor-heavy work.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <SolutionFeatureWithVisual key={index} pageKey="external-workforce" feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-10 tracking-tight">
            Outcomes security and IT leaders care about
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Project velocity, sustainable cost, governance for third-party access, and scale without linear device overhead. Your results depend on policy, risk appetite, and rollout scope.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {industryBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#4A5745]/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#4A5745] leading-snug tracking-tight pt-1.5">
                    {benefit.title}
                  </h3>
                </div>
                {benefit.stat != null && benefit.statLabel != null && (
                  <div className="mb-4">
                    <div className="text-2xl font-bold tracking-tight text-[#4A5745] tabular-nums mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-[#4A5745]/85">{benefit.statLabel}</div>
                  </div>
                )}
                {benefit.source && (
                  <a
                    href={benefit.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 block text-xs text-[#4A5745]/65 no-underline underline-offset-2 hover:text-kahana-primary-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kahana-primary-700"
                  >
                    Source: {benefit.source.label}
                  </a>
                )}
                <p className="text-sm text-[#4A5745]/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionsExploreGrid currentHref="/solutions/external-workforce" />

      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            External collaboration without operational drag
          </h2>
          <p className="text-xl text-[#4A5745] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Put governance in the browser for contractor and partner SaaS, with secure access from authorized devices, policy enforcement, and visibility your security and IT teams can stand behind.
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
