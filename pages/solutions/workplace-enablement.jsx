import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import SolutionsExploreGrid from '../../components/solutions/SolutionsExploreGrid';
import MainIncidentDashboardPreview from '../../components/solutions/visuals/MainIncidentDashboardPreview';
import SolutionFeatureWithVisual from '../../components/solutions/visuals/SolutionFeatureWithVisual';
import RelatedEnterpriseFeatureLinks from '../../components/features/RelatedEnterpriseFeatureLinks';
import SharedCTA from '../../components/SharedCTA';

const enablementFeatures = [
  {
    title: 'One place for corporate web and SaaS work',
    description:
      'Digital workplace programs promise simple access to the apps people need. In practice, work is scattered across consumer browsers, personal profiles, and inconsistent device setups. Oasis gives IT a managed enterprise browser as the standard surface for approved web work.',
    details: [
      'Employees and partners use a browser your organization controls and can support',
      'Fewer one-off instructions for “use this profile” or “install this extension”',
      'Rollout scope and features depend on your subscription and deployment choices',
      'Oasis complements your IdP and app catalog; it does not replace them',
    ],
  },
  {
    title: 'Access that feels aligned with how people sign in',
    description:
      'Enablement breaks when sign-in is confusing or when people maintain parallel accounts. A managed browser session can follow the same identity story as the rest of your stack so users spend less time fighting access and more time working.',
    details: [
      'Sessions tied to enterprise identity where you configure IdP integration',
      'More predictable paths to sanctioned SaaS than ad hoc consumer defaults',
      'Reduces some classes of shadow access when policy is enforced in the session',
      'Exact flows vary by your IdP, apps, and conditional access design',
    ],
  },
  {
    title: 'Support hybrid, remote, and extended workforce models',
    description:
      'Workplace enablement is not only headquarters employees on managed laptops. Contractors, agencies, and distributed teams still need a governed way to reach corporate tools. Oasis extends a consistent browsing layer without assuming every scenario looks the same.',
    details: [
      'A common pattern for web-first roles that do not map cleanly to legacy desktop delivery',
      'Policy and data expectations travel with the session, not only the office network',
      'Useful when VPN-heavy models create friction or uneven adoption',
      'Not a full VDI or desktop replacement; scope to browser-based work',
    ],
  },
  {
    title: 'IT and security can operationalize the experience',
    description:
      'Enablement programs need owners who can set policy, respond to incidents, and explain controls to leadership. Browser-level governance produces clearer ownership than hoping hundreds of unmanaged Chrome installs behave the same way.',
    details: [
      'Central configuration instead of chasing exceptions machine by machine',
      'Telemetry and logging options that support help desk and security workflows',
      'Easier narratives for audit and risk conversations about web access',
      'Depth of reporting and integrations depends on your deployment',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Less friction for everyday work',
    description:
      'When the standard browser matches enterprise identity and policy, people spend fewer cycles on workarounds.',
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
    title: 'Fewer one-off browser exceptions',
    description:
      'A managed surface reduces sprawl from mixed extensions, sync accounts, and unsupported configurations.',
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
    title: 'Better alignment with security expectations',
    description:
      'Workplace and security goals meet in the session: data handling, extensions, and access patterns your program can explain.',
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
    title: 'Clearer IT ownership',
    description:
      'A defined enterprise browser makes support, rollout, and governance someone’s job instead of an invisible default.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
];

const workplaceEnablementMetrics = [
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

export default function WorkplaceEnablement() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Workplace enablement with Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps IT and digital workplace teams enable productive, governed access to SaaS and web apps: a managed enterprise browser, identity-aligned sessions, and policy in the session.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser so organizations can standardize how employees and partners work on the web.',
    },
  };

  return (
    <>
      <SEO
        title="Workplace enablement: Managed enterprise browser | Kahana"
        description="Standardize corporate web and SaaS access with Oasis: a managed enterprise browser for digital workplace programs, identity-backed sessions, and IT-operationalized policy without consumer-browser sprawl."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co/solutions/workplace-enablement"
        type="webpage"
        schema={pageSchema}
      />
      <Head>
        <title>Workplace enablement: Managed enterprise browser | Kahana</title>
        <meta
          name="description"
          content="Digital workplace success depends on how people reach SaaS and web tools. Oasis is a managed enterprise browser: one governed surface, aligned with identity and policy, so enablement teams deliver access people can adopt and IT can support."
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

      <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Workplace enablement</h2>
            <h1 className="text-5xl font-bold text-oasis-green-800 mb-6">Give people a browser IT can stand behind</h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 leading-relaxed">
              Workplace programs stall when IT cannot standardize how people reach corporate web apps and SaaS. Oasis is a managed enterprise browser: one governed client where identity-backed sessions and policy stay coherent for users and supportable for your team.
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

      <MainIncidentDashboardPreview pageKey="workplace-enablement" />

      <RelatedEnterpriseFeatureLinks pageKey="workplace-enablement" />

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-4 tracking-tight">
            Enablement fails when the browser is an afterthought
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Catalogs, portals, and SSO get attention; the actual client is often whatever Chrome or Edge build the user already had. That gap creates support load, uneven experiences, and security stories that are hard to explain. A managed enterprise browser closes it where work really happens.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">What teams feel today</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Tickets for “wrong account,” extensions, or broken SSO flows in unmanaged clients.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Inconsistent experiences between office, remote, and partner populations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Security and workplace programs that cannot describe how web access is governed.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">What changes with Oasis</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>A defined enterprise browser as part of your workplace standard.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Sessions and policy that align with identity and data expectations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Operational clarity for IT, security, and program owners.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why the browser belongs in workplace strategy
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry reporting ties incidents to browser factors, phishing, and third-party paths. Enablement is not only productivity: it is delivering access in a way that holds up when risk teams ask questions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {workplaceEnablementMetrics.map((metric, idx) => {
              const isLastOdd = workplaceEnablementMetrics.length % 2 === 1 && idx === workplaceEnablementMetrics.length - 1;
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
            What Oasis delivers for workplace enablement
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Oasis is not a magic portal to every app. It is the managed client where governed web work happens: consistent for users, accountable for IT, and compatible with the identity and security tools you already run.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {enablementFeatures.map((feature, index) => (
              <SolutionFeatureWithVisual key={index} pageKey="workplace-enablement" feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-10 tracking-tight">
            Outcomes for digital workplace and IT leaders
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Smoother day-to-day access, fewer browser exceptions, better alignment with security, and clearer ownership. Your outcomes depend on rollout design, change management, and how policies map to real workflows.
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

      <SolutionsExploreGrid currentHref="/solutions/workplace-enablement" />

      <SharedCTA
        title="Make the browser part of your workplace standard"
        description="Show your teams a managed enterprise browser that pairs productivity with governance, and give IT a surface they can support end to end."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
