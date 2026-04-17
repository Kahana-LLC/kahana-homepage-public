import React from 'react';

/** Shared enterprise product copy: [pages/products/oasis-enterprise-browser.jsx](oasis-enterprise-browser) and buyer guide. */
export const enterpriseHeroDescription =
  'Enterprise work runs in the browser on corporate and third-party devices, but many controls still assume owned laptops and network perimeters. Oasis is a managed enterprise browser: governance in the session, integrated with your IdP and enterprise DLP, so you can scale SaaS access without treating hardware shipping or VDI as the only answer.';

export const deviceVsBrowserBandProps = {
  heading: 'When work moved to the browser, the control model had to follow',
  intro:
    'SaaS, internal web apps, and AI tools run in sessions that sit beyond classic device-only assumptions. Oasis treats that session as a first-class place for policy.',
  leftTitle: 'What breaks with a purely device-centric story',
  leftItems: [
    'Access is gated on shipping laptops, heavy imaging, or expanding hosted desktops for roles that mostly live in SaaS.',
    'Contractors and partners on unmanaged devices fall outside consistent browser enforcement.',
    'Sensitive activity in web apps is hard to govern if policy stops at the network edge or owned endpoint.',
  ],
  rightTitle: 'What browser-centric governance changes',
  rightItems: [
    'Enterprise rules apply inside the managed browser session where SaaS work happens.',
    'The same policy story can cover corporate and third-party devices when Oasis is in scope.',
    'Identity and data protection stacks can extend into workflows instead of stopping short of the tab.',
  ],
};

export const enterpriseBrowserMetrics = [
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
    insight:
      'Of breaches involved a third party, including data custodians, third-party software issues, or other supply chain paths, in DBIR analysis.',
    source: {
      url: 'https://www.verizon.com/about/news/2024-data-breach-investigations-report-vulnerability-exploitation-boom',
      label: 'Verizon, 2024',
    },
  },
];

export const valuePillars = [
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
    description: 'Reduce trade-offs between speed, cost, and control by meeting people where they work: the browser.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export const enterpriseCapabilitiesSectionIntro = {
  title: 'What Oasis is built to deliver',
  body: 'Four capabilities map to how security and IT teams describe the job: external access, consistent governance, stack integration, and operational speed for web-first work.',
};
