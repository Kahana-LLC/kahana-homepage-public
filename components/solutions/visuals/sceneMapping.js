export const solutionSceneMapping = {
  'oasis-enterprise-browser': ['contractorAccess', 'sessionGovernance', 'identityDlp', 'policyAutomation'],
  'secure-browsing': ['incidentTriaging', 'sessionGovernance', 'identityDlp', 'policyAutomation'],
  'external-workforce': ['contractorAccess', 'sessionGovernance', 'identityDlp', 'incidentTriaging'],
  'remote-workforce': ['sessionGovernance', 'policyAutomation', 'identityDlp', 'contractorAccess'],
  'saas-and-web-apps': ['contractorAccess', 'sessionGovernance', 'identityDlp', 'policyAutomation'],
  'zero-trust-security': ['identityDlp', 'sessionGovernance', 'policyAutomation', 'incidentTriaging'],
  'privileged-user-management': ['incidentTriaging', 'policyAutomation', 'identityDlp', 'sessionGovernance'],
  'workplace-enablement': ['contractorAccess', 'identityDlp', 'sessionGovernance', 'incidentTriaging'],
  'merger-integration': ['sessionGovernance', 'policyAutomation', 'identityDlp', 'contractorAccess'],
};

export function getSceneForFeature(pageKey, index) {
  const pageScenes = solutionSceneMapping[pageKey] || solutionSceneMapping['secure-browsing'];
  return pageScenes[index] || pageScenes[0];
}
