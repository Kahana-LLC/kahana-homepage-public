/**
 * Maps each Oasis Enterprise feature deep-dive slug to the index used by
 * `getSceneForFeature('oasis-enterprise-browser', index)` in
 * {@link ../components/solutions/visuals/sceneMapping.js}.
 *
 * Must stay aligned with {@link ./oasisEnterpriseCapabilities.js} array order:
 * 0 external-access, 1 governance, 2 identity-dlp, 3 faster-paths
 * and with solutionSceneMapping['oasis-enterprise-browser']:
 * contractorAccess, sessionGovernance, identityDlp, policyAutomation
 */
export const ENTERPRISE_FEATURE_SCENE_BY_SLUG = {
  'oasis-enterprise-external-access': 0,
  'oasis-enterprise-governance': 1,
  'oasis-enterprise-identity-dlp': 2,
  'oasis-enterprise-faster-paths': 3,
};
