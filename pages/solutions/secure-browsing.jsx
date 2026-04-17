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
    title: 'A browser IT and security can standardize on',
    description:
      'Consumer browsers were built for individuals, not for enterprise policy. Oasis is a managed enterprise browser: your organization chooses the surface where SaaS and web work runs, applies rules consistently, and reduces reliance on dozens of unmanaged installs and profiles.',
    details: [
      'Central control plane for browser-level configuration and policy',
      'Consistent experience for employees and contractors where you deploy Oasis',
      'Less shadow IT from ad hoc extensions and unsanctioned sync accounts',
      'Rollout scope and management features depend on your subscription and design',
    ],
  },
  {
    title: 'Policies for sites, SaaS, extensions, and data handling',
    description:
      'Secure browsing is not only blocking bad URLs. It is governing how people use approved applications: what can be copied, which extensions load, and how sensitive data moves. Oasis applies those expectations in the session.',
    details: [
      'Align browsing rules to risk tiers and data classes you define',
      'Reduce risky copy, paste, download, and upload paths where policy applies',
      'Tighter control over add-ons and unvetted tools in the browsing layer',
      'Specific controls vary by product capabilities and your configuration',
    ],
  },
  {
    title: 'Identity and DLP integrated with how users sign in',
    description:
      'Secure browsing works best when it is tied to enterprise identity and data protection investments. Oasis integrates with identity providers and enterprise DLP so access and data rules extend into web workflows instead of stopping at the network edge.',
    details: [
      'IdP-driven authentication for managed browser sessions',
      'Enterprise DLP and data controls where your stack supports browser integration',
      'Fewer parallel security stories between endpoint, network, and SaaS',
      'Validation with your vendors for your exact integrations',
    ],
  },
  {
    title: 'Visibility security teams can use',
    description:
      'Investigations and hygiene programs need to know what happened in the browser: sanctioned apps, risky navigation patterns, and identity context. Browser-level signals tied to users can complement EDR, CASB, and SaaS audit logs.',
    details: [
      'Activity associated with enterprise identity for clearer timelines',
      'Supports governance reviews and incident response alongside other telemetry',
      'Not a replacement for full network or endpoint monitoring',
      'Logging depth and SIEM export depend on your deployment choices',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Reduced browser sprawl',
    description:
      'One governed surface for corporate web work instead of inconsistent consumer defaults across the fleet.',
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
    title: 'Data and access posture',
    description:
      'Bring browsing behavior in line with how you treat identity and sensitive data everywhere else.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'User experience people will adopt',
    description:
      'Security fails when users route around it. A modern managed browser aims for governance without forcing unrealistic friction.',
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
    title: 'Operational clarity',
    description:
      'Clearer answers for risk, audit, and leadership on how web and SaaS access is controlled.',
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

const secureBrowsingMetrics = [
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

export default function SecureBrowsing() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Secure browsing: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis is a managed enterprise browser for secure browsing at work: centralized policy, session governance for SaaS and web apps, identity and DLP integration, and visibility for security teams.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser so organizations can govern how employees and partners use the web for corporate work.',
    },
  };

  return (
    <>
      <SEO
        title="Secure browsing: Enterprise browser with Oasis | Kahana"
        description="Managed enterprise browser for secure work on the web: policy in the session, SaaS and data controls, IdP and DLP integration, and visibility without relying on consumer browsers alone."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co/solutions/secure-browsing"
        type="webpage"
        schema={pageSchema}
      />
      <Head>
        <title>Secure browsing: Enterprise browser with Oasis | Kahana</title>
        <meta
          name="description"
          content="Most corporate work happens in the browser, often on tools built for consumers. Oasis is a managed enterprise browser: governance in the session, integration with identity and DLP, and a standard surface your security and IT teams can enforce."
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
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Secure browsing</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">Enterprise-grade browsing for real work</h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8 leading-relaxed">
              Consumer browsers optimize for individuals; enterprises need accountable access to SaaS and the web. Oasis is a managed enterprise browser: policy and data expectations live in the session, integrated with your IdP and DLP.
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

      <MainIncidentDashboardPreview pageKey="secure-browsing" />

      <RelatedEnterpriseFeatureLinks pageKey="secure-browsing" />

      <section className="bg-white py-16 md:py-20 border-b border-[#4A5745]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-4 tracking-tight">
            Consumer browsers were not built for your risk model
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            URL block lists and endpoint agents help, but they do not turn a consumer browser into an enterprise control plane. Policy, extensions, sync, and user habits still create gaps. A managed browser closes the loop where work happens.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-[#4A5745]/10 bg-[#f8faf9] p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-[#4A5745] mb-3">What often breaks down</h3>
              <ul className="space-y-2.5 text-sm text-[#4A5745]/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Unmanaged profiles, extensions, and personal accounts mixed with corporate sign-in.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Policy that is hard to enforce consistently on every device type.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Data movement in SaaS that bypasses traditional network-only controls.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#4A5745]/10 bg-white p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-[#4A5745] mb-3">What a managed browser changes</h3>
              <ul className="space-y-2.5 text-sm text-[#4A5745]/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Enterprise-owned browsing surface with centralized governance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Session rules aligned to identity and data protection programs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Visibility for security operations and compliance conversations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Why secure browsing belongs in the enterprise strategy
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry reporting continues to tie incidents to browser factors, phishing, and third-party paths. Treating the browser as a first-class surface is part of a modern security program, not an optional add-on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {secureBrowsingMetrics.map((metric, idx) => {
              const isLastOdd = secureBrowsingMetrics.length % 2 === 1 && idx === secureBrowsingMetrics.length - 1;
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
            What Oasis delivers for secure browsing
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            A managed browser platform for policy, data handling, identity integration, and visibility. It is not a promise that no web risk will ever occur; it is a way to bring browsing in line with how you run security everywhere else.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <SolutionFeatureWithVisual key={index} pageKey="secure-browsing" feature={feature} index={index} />
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
            Less sprawl, better data and access alignment, adoption-friendly controls, and clearer narratives for risk and compliance. Your results depend on rollout, policy design, and organizational buy-in.
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

      <SolutionsExploreGrid currentHref="/solutions/secure-browsing" />

      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Browsing your security program can stand behind
          </h2>
          <p className="text-xl text-[#4A5745] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Put governance in the browser for corporate web and SaaS work, with identity-backed access, data controls, and visibility your teams can operationalize.
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
