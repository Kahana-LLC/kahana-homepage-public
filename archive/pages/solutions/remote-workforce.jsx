import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';
import SolutionsExploreGrid from '../../components/solutions/SolutionsExploreGrid';
import MainIncidentDashboardPreview from '../../components/solutions/visuals/MainIncidentDashboardPreview';
import SolutionFeatureWithVisual from '../../components/solutions/visuals/SolutionFeatureWithVisual';
import ByodSavingsCalculator from '../../components/solutions/ByodSavingsCalculator';
import RelatedEnterpriseFeatureLinks from '../../components/features/RelatedEnterpriseFeatureLinks';
import SharedCTA from '../../components/SharedCTA';

const securityFeatures = [
  {
    title: 'Governance where distributed employees actually work',
    description:
      'Remote and hybrid staff live in the browser: collaboration suites, HR and IT portals, line-of-business SaaS, and AI-assisted workflows from home, travel, and co-working networks. Oasis puts policy enforcement in that session, not only on the office LAN.',
    details: [
      'Consistent controls on corporate-issued and authorized personal devices where policy allows',
      'Visibility into browser-level activity tied to identity',
      'Less reliance on consumer browsers alone for corporate data and sign-in flows',
      'Reduces gaps when workers shift between locations and networks',
    ],
  },
  {
    title: 'Policies that follow the session, not the office perimeter',
    description:
      'When teams are distributed, security cannot assume everyone sits behind the same managed stack every day. Unified browser policies travel with the user so SaaS access stays governable across sites and time zones.',
    details: [
      'Single control plane for browser-level rules and data handling',
      'Concrete workflow for IT teams: draft policy, validate on a pilot group, publish broadly, then monitor outcomes',
      'DLP and usage policy aligned to how remote teams use web apps',
      'Same posture for HQ, hybrid, and fully remote roles where you standardize on Oasis',
      'Complements VPN and endpoint tools instead of pretending one model fits every path',
    ],
  },
  {
    title: 'Connects to identity and data protection you already use',
    description:
      'Oasis integrates with existing identity providers and enterprise DLP so access rules and data policies extend into SaaS workflows. Remote programs scale without asking every worker to route all browsing through a different stack.',
    details: [
      'IdP-driven authentication and access patterns employees already know',
      'Enterprise DLP and data controls enforced in the browsing layer',
      'Browser activity tied to identity for clearer accountability off campus',
      'Modern browser experience with governance people will adopt',
    ],
  },
  {
    title: 'Practical access for hires, movers, and surge support',
    description:
      'Onboarding and org changes are harder when access is tied to shipping hardware or standing up VDI for every scenario. A managed browser session offers a faster path to productive SaaS access within your security boundary, especially for distributed timelines.',
    details: [
      'Fewer blocking dependencies when laptops are back-ordered or in transit',
      'Useful pattern for Staff who do not need a purchased corporate laptop',
      'Operational model can shift toward identity-driven access management',
      'Exact timelines depend on your approvals, risk posture, and tooling',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Workforce velocity',
    description:
      'Keep projects moving when secure access does not always wait on office-only patterns or hardware logistics for every new remote hire or transfer.',
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
      'Reduce pressure to over-invest in one-size device and VDI answers for every remote edge case when the browser can carry policy for many SaaS workflows.',
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
      'Corporate SaaS and internal web workflows stay governed when activity happens in a managed browser session, including off traditional campus networks.',
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
      'Support hybrid and remote-first scale without multiplying exceptions, shadow workflows, and unmanaged browser sprawl linearly.',
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

const remoteMetrics = [
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

const byodBusinessCasePoints = [
  {
    title: 'Representative enterprise pattern',
    description:
      'A late-stage enterprise buyer wanted secure SaaS access for Staff and preferred to avoid shipping managed laptops for each engagement.',
  },
  {
    title: 'Controls still required',
    description:
      'The team needed identity-driven access and DLP-aligned controls in the browsing session, including policy enforcement without local admin dependencies.',
  },
  {
    title: 'Economic model',
    description:
      'Laptop-based access costs scaled with Staff volume. Oasis pricing follows a per-Staff annual model with a minimum spend floor, creating a clear breakeven point and expanding upside as eligible Staff volume rises.',
  },
];

export default function RemoteWorkforce() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote workforce: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps organizations secure browser-centric work for remote and hybrid employees, with session-level governance, unified policies across locations, identity and DLP integration, and practical SaaS access without office-only assumptions.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser so distributed teams can access SaaS with policies that follow the session.',
    },
  };

  return (
    <>
      <SEO
        title="Remote workforce: Secure SaaS access with Oasis | Kahana"
        description="Managed enterprise browser for remote and hybrid teams: governance in the browser, unified policies across sites and devices, IdP and DLP integration, and secure work without defaulting to office-centric access only."
        image="https://kahana.io/assets/oasis-browser-preview.png"
        url="https://kahana.io/solutions/remote-workforce"
        type="webpage"
        schema={pageSchema}
      />
      <Head>
        <title>Remote workforce: Secure SaaS access with Oasis | Kahana</title>
        <meta
          name="description"
          content="Distributed employees reach corporate SaaS through the browser from many networks and devices. Oasis is a managed enterprise browser: policies in the session, integration with identity and DLP, and a consistent layer for hybrid and remote work."
        />
      </Head>

      <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Remote workforce</h2>
            <h1 className="text-5xl font-bold text-oasis-green-800 mb-6">Secure SaaS access for distributed teams</h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 leading-relaxed">
              Distributed teams reach corporate SaaS from home networks and endpoints you do not own. Governance moves with Oasis: a managed enterprise browser that carries policy, visibility, and data rules in the session through your IdP and DLP.
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

      <ByodSavingsCalculator />

      <section className="bg-white py-12 md:py-14 border-b border-oasis-green-800/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base font-semibold text-brand-link mb-2">From savings estimate to day-two operations</p>
          <h2 className="text-2xl md:text-3xl font-bold text-oasis-green-800 tracking-tight mb-4">
            Keep distributed browser sessions visible and governable
          </h2>
          <p className="text-oasis-green-800/95 leading-relaxed">
            After you model the device-path savings above, the next question is how you keep remote access safe as you
            scale. As you roll out Oasis, teams can monitor browser-level activity tied to identity, including
            distributed-work incidents such as risky AI usage, policy bypass attempts, and unusual session exports, so
            security can respond quickly instead of flying blind. When policies go live, that visibility shows up in
            monitoring right away.
          </p>
        </div>
      </section>

      <MainIncidentDashboardPreview pageKey="remote-workforce" />

      <section className="bg-white py-12 md:py-14 border-b border-oasis-green-800/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-oasis-green-800 text-center tracking-tight mb-4">
            Less policy admin, faster enforcement for IT teams
          </h2>
          <p className="text-oasis-green-800/95 text-center max-w-4xl mx-auto leading-relaxed mb-8">
            Many IT and security teams spend significant time manually configuring browser policies, rolling out
            changes, and checking multiple places to confirm enforcement. Oasis is designed to cut down the
            administrative overhead by centralizing policy workflows and monitoring in one operating model.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-oasis-green-800 mb-2">Draft and validate faster</h3>
              <p className="text-sm text-oasis-green-800/90 leading-relaxed">
                Start from reusable policy templates, scope to pilot groups, and validate behavior before broad
                rollout.
              </p>
            </div>
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-oasis-green-800 mb-2">Publish with fewer exceptions</h3>
              <p className="text-sm text-oasis-green-800/90 leading-relaxed">
                Push policy updates through one control plane so enforcement can follow Staff sessions consistently
                across remote locations and devices.
              </p>
            </div>
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-oasis-green-800 mb-2">Monitor and iterate in one loop</h3>
              <p className="text-sm text-oasis-green-800/90 leading-relaxed">
                Use incident telemetry to tune policies quickly, reduce repetitive admin effort, and keep governance
                aligned as risk patterns change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedEnterpriseFeatureLinks pageKey="remote-workforce" />

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-4 tracking-tight">
            The office perimeter is not where work happens anymore
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            VPNs, managed laptops, and network boundaries still matter, but most day-to-day work is web sessions on laptops and networks IT does not own end to end. When policies stop at the device or the tunnel, browser activity on SaaS and AI tools can outpace what those models see. Oasis adds a control layer where the work actually occurs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">Office-centric assumptions</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Most users were on corporate networks and managed desktops most of the time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Security tooling could assume a known endpoint and location.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Remote access was the exception, not the default.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">Distributed reality</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>SaaS, collaboration, and internal tools are one click away in the browser.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>People work from home Wi-Fi, travel, and shared spaces on varied hardware.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Extensions, credentials, and AI workflows concentrate in the session.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why browser governance matters for remote work
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry reporting highlights browser involvement in incidents, fast-moving phishing, and breaches with a third-party dimension. For distributed teams, governing the browsing layer helps close gaps that office-only mental models often miss.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {remoteMetrics.map((metric, idx) => {
              const isLastOdd = remoteMetrics.length % 2 === 1 && idx === remoteMetrics.length - 1;
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
            What Oasis delivers for remote and hybrid teams
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Session-level governance, policies that follow people across locations, integration with your identity and DLP stack, and a practical way to onboard and support workers without treating every remote scenario as a custom exception.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <SolutionFeatureWithVisual key={index} pageKey="remote-workforce" feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-4 tracking-tight">
            BYOD access for distributed roles: security, operations, and economics
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            In remote programs, Staff access is where security controls and operating cost often collide. A managed
            browser approach can let organizations support BYOD while keeping enterprise identity, session policy, and
            DLP controls in place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {byodBusinessCasePoints.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-oasis-green-800/10 bg-white p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-oasis-green-800 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-oasis-green-800/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-oasis-green-800/75 mt-8 max-w-4xl mx-auto leading-relaxed text-center">
            The business case model in this calculator is directional and assumption-driven. Actual outcomes vary by Staff
            mix, internal support model, rollout scope, and how much purchased-device path cost is truly avoidable.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-10 tracking-tight">
            Outcomes security and IT leaders care about
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Themes for hybrid and remote programs: speed to productive access, sustainable cost, governance off campus, and scale without unmanaged sprawl. Your results depend on policy, rollout, and risk appetite.
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

      <SolutionsExploreGrid currentHref="/solutions/remote-workforce" />

      <SharedCTA
        title="Distributed work with consistent browser governance"
        description="Put policy and visibility in the browser for remote and hybrid SaaS, with secure access from authorized devices and controls your security and IT teams can stand behind."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
