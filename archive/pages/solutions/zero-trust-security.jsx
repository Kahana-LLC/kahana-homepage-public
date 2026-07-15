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
    title: 'Identity and policy anchored in the browsing session',
    description:
      'Zero trust architectures emphasize verified identity and explicit policy instead of implicit trust inside a network. Much of enterprise work now happens in SaaS through the browser. Oasis is a managed enterprise browser so authentication, session behavior, and data rules can attach to that workspace, not only to the corporate LAN or device image.',
    details: [
      'Browser sessions tied to enterprise identity through your IdP',
      'Session-level rules that reduce silent trust for web and SaaS activity',
      'Consistent posture on managed and authorized third-party devices where policy allows',
      'One part of a broader zero trust program you design with architecture and risk',
    ],
  },
  {
    title: 'Least-privilege patterns for apps, data, and AI tools in the browser',
    description:
      'Least privilege is not only about network segments. It includes what users can paste, download, or send to generative tools in the browser. Centralized browser governance helps enforce those boundaries in the place work actually happens.',
    details: [
      'Browser policies aligned to how SaaS and AI-assisted workflows are used',
      'Reduce over-broad access paths that consumer browsers often allow by default',
      'Single control plane for rules that should apply across teams and locations',
      'Specific controls depend on your Oasis configuration and policies',
    ],
  },
  {
    title: 'Extend data protection into SaaS workflows',
    description:
      'Enterprise DLP and data classification investments should follow sensitive data into web applications. Oasis integrates with enterprise DLP so data policies extend into browsing activity instead of stopping at the endpoint alone.',
    details: [
      'DLP-aware handling in the browsing layer where supported by your stack',
      'Less shadow copying and ungoverned export paths for regulated content',
      'Builds on security investments instead of replacing them',
      'Validation with your DLP vendor and legal team for your use cases',
    ],
  },
  {
    title: 'Visibility for assume-breach and detection programs',
    description:
      'Zero trust assumes adversaries may already be present. Session visibility for sanctioned browsers supports investigation and tuning: who accessed which SaaS, under which identity, with browser-level signals your SOC can use alongside other tools.',
    details: [
      'Browser-level activity tied to identity for clearer accountability',
      'Complements EDR, CASB, and network telemetry rather than duplicating them',
      'Helps close blind spots when work is browser-first',
      'Maturity of logging and SIEM integration depends on your deployment',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Consistent enforcement',
    description:
      'Apply a coherent policy story to SaaS and web apps instead of hoping consumer browsers and ad hoc extensions behave.',
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
    title: 'Stack fit',
    description:
      'Plugs into identity and DLP you already bought so zero trust initiatives extend into the session without a parallel product silo.',
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
    title: 'Contractor and hybrid coverage',
    description:
      'External users and distributed staff often sit outside your standard device trust model. Session governance reaches them when full device compliance is not realistic.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'Operational clarity',
    description:
      'Fewer implicit trust assumptions for browser-centric work makes audits, tabletop exercises, and roadmap conversations easier to ground in reality.',
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

const zeroTrustMetrics = [
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

export default function ZeroTrustSecurity() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Zero trust and the browser: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis supports zero trust-oriented security by extending identity and data policies into managed browser sessions for SaaS and web apps, with integration to IdP and enterprise DLP as part of a broader architecture.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser that helps organizations apply session-level governance aligned to zero trust principles.',
    },
  };

  return (
    <>
      <SEO
        title="Zero trust: Browser session governance with Oasis | Kahana"
        description="Managed enterprise browser for zero trust programs: extend identity and DLP into SaaS sessions, reduce implicit trust in the browser, and govern contractor and hybrid access alongside your broader architecture."
        image="https://kahana.io/assets/oasis-browser-preview.png"
        url="https://kahana.io/solutions/zero-trust-security"
        type="webpage"
        schema={pageSchema}
      />
      <Head>
        <title>Zero trust: Browser session governance with Oasis | Kahana</title>
        <meta
          name="description"
          content="Zero trust requires verified access everywhere work happens, including SaaS in the browser. Oasis is a managed enterprise browser: policies in the session, integration with identity and DLP, and a control layer that complements your network and endpoint program."
        />
      </Head>

      <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Zero trust</h2>
            <h1 className="text-5xl font-bold text-oasis-green-800 mb-6">Extend zero trust into the browser session</h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 leading-relaxed">
              Zero trust has to cover SaaS, collaboration, and AI in the browser, not only the network edge. Oasis is a managed enterprise browser: explicit session policy and data controls plug into your IdP and DLP as the browser layer next to endpoint and network investments.
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

      <MainIncidentDashboardPreview pageKey="zero-trust-security" />

      <RelatedEnterpriseFeatureLinks pageKey="zero-trust-security" />

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-4 tracking-tight">
            The browser became a trust boundary whether or not it was on the diagram
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Classic perimeter thinking assumed that once someone was inside, broad access was acceptable. Modern programs verify each request and limit blast radius. The gap: many controls still stop at the network or device while users spend the day in web sessions. Closing that gap is what a managed browser is for.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">Where implicit trust lingers</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Consumer browsers with weak or inconsistent enterprise policy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>SaaS access that depends on device trust you cannot assert for contractors.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Extensions, credentials, and AI workflows that bypass older control points.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">What session governance adds</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Explicit policy and visibility in the workspace where SaaS runs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Alignment with enterprise identity and data protection patterns.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>A managed surface security teams can reason about in zero trust terms.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why the browsing layer belongs in the conversation
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Attackers target credentials, phishing, and supply chain paths. Industry reporting continues to highlight browser-related incident factors and fast-moving web threats. For zero trust roadmaps, ignoring the browser leaves a persistent hole in verify-everywhere intent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {zeroTrustMetrics.map((metric, idx) => {
              const isLastOdd = zeroTrustMetrics.length % 2 === 1 && idx === zeroTrustMetrics.length - 1;
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
            What Oasis delivers for zero trust-oriented programs
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Oasis is not a full zero trust platform. It is a managed browser that helps you apply identity-backed policy, data controls, and visibility in SaaS sessions as part of the architecture your CISO and architects own.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <SolutionFeatureWithVisual key={index} pageKey="zero-trust-security" feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-10 tracking-tight">
            Outcomes security and architecture leaders care about
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Stronger alignment between zero trust intent and browser reality, better use of IdP and DLP investments, coverage for external users, and clearer narratives for risk and audit. Scope and maturity depend on your rollout.
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

      <SolutionsExploreGrid currentHref="/solutions/zero-trust-security" />

      <SharedCTA
        title="Verify every session that touches your SaaS"
        description="Put governance in the browser for zero trust-aligned access, with identity-backed policy, data controls, and visibility your security and architecture teams can stand behind."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
