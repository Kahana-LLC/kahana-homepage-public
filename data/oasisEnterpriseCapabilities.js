/** Shared copy for Oasis Enterprise capability blocks (product page + feature deep-dives). */
export const oasisCapabilities = [
  {
    slug: 'oasis-enterprise-external-access',
    title: 'Secure access for external collaborators',
    description:
      'Partner and contractor work keeps landing in the browser, often on laptops you never issued. Oasis is a managed enterprise browser so policy can meet people where SaaS sessions actually run, without treating hardware logistics as the only answer for every web-first role.',
    details: [
      'Let external users work from their own devices when your program allows, with session-level expectations they can see and follow',
      'Shrink the set of cases where shipping machines or standing up hosted desktops is the default for browser-centric work',
      'How fast teams really go live still depends on your IdP, apps, and change management. Oasis removes one structural bottleneck, not every dependency',
    ],
  },
  {
    slug: 'oasis-enterprise-governance',
    title: 'Consistent browser governance',
    description:
      'If policy only follows a managed endpoint image, SaaS on unmanaged or partner-owned devices quietly drifts outside the same enforcement plane. Oasis applies unified browser governance so what “good” means for extensions, data handling, and app access travels with the session.',
    details: [
      'Describe browser-level expectations once, then operationalize them instead of re-litigating them project by project',
      'Align extensions, sensitive flows, and app access to the risk tiers your security team already names in other forums',
      'Specific controls ship with the product roadmap and your configuration. This page states direction, not an exhaustive control matrix',
    ],
  },
  {
    slug: 'oasis-enterprise-identity-dlp',
    title: 'Connect to existing identity and DLP',
    description:
      'Identity answers who is in the session; DLP and data-protection platforms describe what sensitive information is allowed to do. Oasis is designed so those investments extend into SaaS and web workflows instead of stopping where classic network boundaries used to.',
    details: [
      'Tie browser sessions to your identity provider so access feels familiar to users and legible to auditors',
      'Carry enterprise DLP and data rules into the browsing environment where your stack supports browser integration',
      'Exact connectors, event shapes, and enforcement modes belong in architecture review with your IdP and DLP owners before procurement hard commits',
    ],
  },
  {
    slug: 'oasis-enterprise-faster-paths',
    title: 'Faster paths for external teams',
    description:
      'When every new contractor waits on imaging or a fresh hosted desktop seat, calendar time stacks up, especially for roles that mostly live in a handful of SaaS apps. A governed browser session can shorten time-to-productivity when your program allows identity-driven access instead of linear device logistics alone.',
    details: [
      'Move more onboarding energy from “rack, ship, image” to identity, policy, and the handful of apps that matter for the role',
      'Support contractor-heavy programs with less linear ops overhead where browser access is the real bottleneck',
      'Not every workload belongs in a tab. Thick clients and regulated workflows may still need other delivery models; Oasis targets the web-first slice',
    ],
  },
];
