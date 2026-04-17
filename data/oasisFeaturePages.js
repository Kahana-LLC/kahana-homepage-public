/**
 * Related enterprise feature deep-dives for solution pages (matches MainIncidentDashboardPreview pageKey).
 * @type {Record<string, { href: string; label: string }[]>}
 */
export const relatedEnterpriseFeaturesBySolution = {
  'secure-browsing': [
    { href: '/features/oasis-enterprise-governance', label: 'Consistent browser governance' },
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Identity and DLP in the session' },
    { href: '/features/oasis-enterprise-external-access', label: 'External collaborator access' },
  ],
  'external-workforce': [
    { href: '/features/oasis-enterprise-external-access', label: 'Secure access for external collaborators' },
    { href: '/features/oasis-enterprise-faster-paths', label: 'Faster paths for external teams' },
    { href: '/features/oasis-enterprise-governance', label: 'Consistent browser governance' },
  ],
  'remote-workforce': [
    { href: '/features/oasis-enterprise-governance', label: 'Session-level governance' },
    { href: '/features/oasis-enterprise-faster-paths', label: 'Faster paths for distributed teams' },
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Identity and DLP integration' },
  ],
  'saas-and-web-apps': [
    { href: '/features/oasis-enterprise-governance', label: 'Governance for SaaS sessions' },
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Connect identity and DLP' },
    { href: '/features/oasis-enterprise-external-access', label: 'Partner and contractor access' },
  ],
  'zero-trust-security': [
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Identity and DLP in the browser' },
    { href: '/features/oasis-enterprise-governance', label: 'Consistent browser governance' },
    { href: '/features/oasis-enterprise-external-access', label: 'Controlled third-party access' },
  ],
  'privileged-user-management': [
    { href: '/features/oasis-enterprise-governance', label: 'Governance for elevated sessions' },
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Identity and DLP alignment' },
    { href: '/features/oasis-enterprise-external-access', label: 'Scoped access for partners' },
  ],
  'workplace-enablement': [
    { href: '/features/oasis-enterprise-governance', label: 'Browser policy at scale' },
    { href: '/features/oasis-enterprise-faster-paths', label: 'Faster onboarding paths' },
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Stack integration' },
  ],
  'merger-integration': [
    { href: '/features/oasis-enterprise-governance', label: 'Governance during transitions' },
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Identity and DLP across tenants' },
    { href: '/features/oasis-enterprise-external-access', label: 'Controlled external access' },
  ],
  'vdi-reduction': [
    { href: '/features/oasis-enterprise-faster-paths', label: 'Browser-first paths vs VDI' },
    { href: '/features/oasis-enterprise-governance', label: 'Session governance for SaaS' },
    { href: '/features/oasis-enterprise-external-access', label: 'Access without imaging every device' },
  ],
  'oasis-enterprise-browser': [
    { href: '/features/oasis-enterprise-external-access', label: 'External collaborators' },
    { href: '/features/oasis-enterprise-governance', label: 'Browser governance' },
    { href: '/features/oasis-enterprise-identity-dlp', label: 'Identity and DLP' },
    { href: '/features/oasis-enterprise-faster-paths', label: 'Faster team paths' },
  ],
};

const defaultLinks = relatedEnterpriseFeaturesBySolution['secure-browsing'];

/**
 * @param {string} pageKey
 * @returns {{ href: string; label: string }[]}
 */
export function getRelatedEnterpriseFeatureLinks(pageKey) {
  return relatedEnterpriseFeaturesBySolution[pageKey] || defaultLinks;
}
