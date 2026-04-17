/**
 * Web copy aligned with docs/narrative-framework.md (terminology + story beats).
 * Avoid timing claims (e.g. 24–48h) and named competitor comparisons unless approved.
 */

/** @type {Record<string, { heroEyebrow: string; deckBeat: string; marketTension: string; promiseBridge: string; pillarLabel?: string; relatedSlugs: string[] }>} */
export const enterpriseFeatureNarrativeBySlug = {
  'oasis-enterprise-external-access': {
    heroEyebrow: 'Oasis Enterprise Browser · External access',
    deckBeat: 'Secure contractor SaaS access without device shipping as the only answer',
    pillarLabel: 'Third-party and contractor access',
    marketTension:
      'Work and contractor access increasingly run in the browser, often from third-party devices. When controls are anchored mainly in corporate endpoints, those browser sessions can sit outside the same unified policy story.',
    promiseBridge:
      'Oasis is a managed enterprise browser that extends unified browser policies into the session—so external collaborators can use their own devices when your program allows, without treating laptops or hosted desktops as the default for every web-first role.',
    relatedSlugs: [
      'oasis-enterprise-governance',
      'oasis-enterprise-identity-dlp',
      'oasis-enterprise-faster-paths',
    ],
  },
  'oasis-enterprise-governance': {
    heroEyebrow: 'Oasis Enterprise Browser · Governance',
    deckBeat: 'Policies that follow the session, not only the device',
    pillarLabel: 'Unified browser governance',
    marketTension:
      'When enforcement leans on managed endpoint images and classic network boundaries alone, SaaS activity in the browser on unmanaged or partner-owned devices can drift outside the same expectations.',
    promiseBridge:
      'Oasis puts governance in the browser: unified policies for extensions, data handling, and app access follow the session where SaaS work actually runs.',
    relatedSlugs: [
      'oasis-enterprise-external-access',
      'oasis-enterprise-identity-dlp',
      'oasis-enterprise-faster-paths',
    ],
  },
  'oasis-enterprise-identity-dlp': {
    heroEyebrow: 'Oasis Enterprise Browser · Identity & DLP',
    deckBeat: 'Identity and DLP extend into SaaS and web workflows',
    pillarLabel: 'Stack integration',
    marketTension:
      'Identity answers who is in the session; DLP and data-protection platforms describe what sensitive information is allowed to do. Those signals often stop short of SaaS and web work that lives in the tab.',
    promiseBridge:
      'Oasis is designed so identity and DLP investments reach into browsing and SaaS access where your stack supports integration—keeping session behavior legible to security teams and auditors.',
    relatedSlugs: [
      'oasis-enterprise-governance',
      'oasis-enterprise-external-access',
      'oasis-enterprise-faster-paths',
    ],
  },
  'oasis-enterprise-faster-paths': {
    heroEyebrow: 'Oasis Enterprise Browser · Faster paths',
    deckBeat: 'Ease the laptop-and-VDI default when the browser is the bottleneck',
    pillarLabel: 'Operational paths for external teams',
    marketTension:
      'Onboarding still often defaults to shipping hardware or standing up virtual desktops, even when the real delay is simply reaching sanctioned SaaS through the browser.',
    promiseBridge:
      'Identity-driven access and governed browser sessions can shift energy off linear device logistics for web-first roles—while other workloads may still need different delivery models.',
    relatedSlugs: [
      'oasis-enterprise-external-access',
      'oasis-enterprise-governance',
      'oasis-enterprise-identity-dlp',
    ],
  },
};

/**
 * @param {string} slug
 * @returns {{ heroEyebrow: string; deckBeat: string; marketTension: string; promiseBridge: string; pillarLabel?: string; relatedSlugs: string[] } | null}
 */
export function getEnterpriseFeatureNarrative(slug) {
  return enterpriseFeatureNarrativeBySlug[slug] ?? null;
}
