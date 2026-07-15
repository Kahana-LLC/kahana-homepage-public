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
    title: 'A managed browser for high-risk web and SaaS sessions',
    description:
      'Privileged work increasingly happens in the browser: identity admin portals, SaaS administration, cloud consoles, finance and HR systems. Those sessions deserve the same seriousness as jump hosts, but consumer browsers rarely enforce enterprise policy. Oasis is a managed enterprise browser so elevated activity runs in a governed surface.',
    details: [
      'Browser-level policy for accounts and workflows you classify as sensitive',
      'Consistent controls when admins work from corporate or authorized devices',
      'Reduces ad hoc use of unmanaged profiles for powerful roles',
      'Complements vault, jump server, and IdP programs; it does not replace every PAM pattern',
    ],
  },
  {
    title: 'Tighter data handling for powerful roles',
    description:
      'Administrators can copy, export, and paste across systems in ways standard users cannot. Enterprise DLP integrated at the browsing layer helps apply your data rules to those actions in web applications where your stack supports it.',
    details: [
      'Extend DLP posture into SaaS admin and sensitive web workflows',
      'Align with least-privilege intent for what can leave the browser',
      'Validation with your DLP vendor and security team for scope and coverage',
      'Policy specifics depend on your Oasis and DLP configuration',
    ],
  },
  {
    title: 'Identity-backed access that matches elevated accountability',
    description:
      'Strong authentication and lifecycle management still live in your identity provider. Oasis works with your IdP so privileged browser access ties to the same identity story you expect for elevated roles.',
    details: [
      'IdP-driven sign-in for managed browser sessions',
      'Supports separation between everyday browsing and admin-focused sessions where you standardize on Oasis',
      'Works alongside MFA and conditional access decisions your IdP enforces',
      'Break-glass and emergency access remain governed by your runbooks',
    ],
  },
  {
    title: 'Visibility for investigations and access reviews',
    description:
      'Security and IAM teams need to explain who did what in sensitive SaaS. Browser-level telemetry tied to identity can support reviews and incidents alongside CASB, IdP logs, and SaaS audit trails. Depth of logging varies by deployment.',
    details: [
      'Browser activity associated with enterprise identity for clearer timelines',
      'Useful when proving governance for admin and contractor admin access',
      'Complements native SaaS admin audit features rather than duplicating them',
      'Maturity of exports to SIEM depends on your integration choices',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Governance confidence',
    description:
      'Reduce blind spots when powerful accounts work in web consoles on browsers you do not manage or standardize.',
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
    title: 'Data loss posture',
    description:
      'Bring copy, paste, upload, and download expectations into admin browser sessions instead of hoping consumer defaults are enough.',
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
    title: 'Stack fit',
    description:
      'Extends identity and DLP investments into the place admin work often happens: the browser.',
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
      'Give IAM and security a clearer story for privileged web access during audits, tabletop exercises, and vendor diligence.',
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

const privilegedMetrics = [
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

export default function PrivilegedUserManagement() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privileged user management: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps organizations govern privileged and administrative access to SaaS and web consoles through a managed enterprise browser, with identity and DLP integration and session-level policy alongside existing PAM and IAM programs.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser for governed access to sensitive browser-based administration and SaaS.',
    },
  };

  return (
    <>
      <SEO
        title="Privileged user management: Secure admin sessions with Oasis | Kahana"
        description="Managed enterprise browser for privileged SaaS and web admin work: session governance, IdP and DLP integration, and visibility for elevated roles without relying on consumer browsers alone."
        image="https://kahana.io/assets/oasis-browser-preview.png"
        url="https://kahana.io/solutions/privileged-user-management"
        type="webpage"
        schema={pageSchema}
      />
      <Head>
        <title>Privileged user management: Secure admin sessions with Oasis | Kahana</title>
        <meta
          name="description"
          content="Privileged access is not only SSH and jump boxes. Admins live in SaaS consoles and cloud web UIs. Oasis is a managed enterprise browser: policy in the session, integration with identity and DLP, and a governed surface for high-risk browser work alongside your PAM and IAM stack."
        />
      </Head>

      <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Privileged user management</h2>
            <h1 className="text-5xl font-bold text-oasis-green-800 mb-6">Govern privileged work in the browser, not only on the server</h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 leading-relaxed">
              Vaults and jump hosts still matter, yet admins live in cloud consoles and identity portals in the browser. Oasis is a managed enterprise browser: privileged web sessions run under the same session governance, IdP, and DLP alignment as the rest of your program, alongside PAM where you use it.
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

      <MainIncidentDashboardPreview pageKey="privileged-user-management" />

      <RelatedEnterpriseFeatureLinks pageKey="privileged-user-management" />

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-4 tracking-tight">
            Privileged access moved into SaaS and web consoles
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Your PAM program may cover the data center while administrators reset tenants, change billing, or export reports through the browser. Treating that layer as out of scope creates inconsistency: the same person is fully governed on one path and under-monitored on another.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">Where programs often stop short</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Strong controls for server access, weaker norms for SaaS super-admin roles.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Shared or personal browsers without enterprise policy for powerful accounts.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>High-impact actions that leave the browser with limited DLP enforcement.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-oasis-green-800/10 bg-white p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-oasis-green-800 mb-3">What session governance adds</h3>
              <ul className="space-y-2.5 text-sm text-oasis-green-800/95 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>A managed browser standard for roles and apps you designate.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Identity and DLP integration aligned to elevated accountability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>Clearer narrative for auditors on how admin web access is controlled.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why the browsing layer matters for privileged risk
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Credential theft, phishing, and supplier paths show up across industry reporting. Powerful accounts are high-value targets. Governing where those users work in SaaS closes a gap that server-centric PAM alone may not address.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {privilegedMetrics.map((metric, idx) => {
              const isLastOdd = privilegedMetrics.length % 2 === 1 && idx === privilegedMetrics.length - 1;
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
            What Oasis delivers for privileged web and SaaS access
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Oasis is not a full replacement for vault or jump-server PAM for every protocol. It is the place to standardize how elevated roles use the browser so policy, data protection, and identity stay coherent.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <SolutionFeatureWithVisual key={index} pageKey="privileged-user-management" feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-10 tracking-tight">
            Outcomes IAM and security leaders care about
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Stronger coverage for admin SaaS sessions, better alignment with DLP and identity investments, clearer audit stories, and fewer exceptions for powerful roles on unmanaged browsers.
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

      <SolutionsExploreGrid currentHref="/solutions/privileged-user-management" />

      <SharedCTA
        title="Privileged SaaS sessions your teams can defend"
        description="Put governance in the browser for elevated web and admin work, with identity-backed access, data controls, and visibility your security and IAM teams can stand behind."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
