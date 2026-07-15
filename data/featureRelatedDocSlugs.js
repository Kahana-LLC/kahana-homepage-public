/**
 * Maps /features/:slug pages to related /docs/:slug articles (curated).
 */
export const FEATURE_RELATED_DOC_SLUGS = {
  explore: [
    'get-started-learners',
    'buying-and-access',
    'list-hub-on-explore',
    'get-started-creators',
    'how-aura-works',
  ],
  hubs: ['get-started-creators', 'collaborators-and-roles', 'list-hub-on-explore', 'creator-analytics'],
  profiles: ['profile-and-sharing', 'get-started-creators', 'list-hub-on-explore', 'creator-analytics'],
  earning: [
    'turn-on-paid-access',
    'buying-and-access',
    'creator-analytics',
    'when-to-upgrade',
    'profile-and-sharing',
    'get-started-creators',
    'list-hub-on-explore',
  ],
  aura: ['how-aura-works', 'creator-analytics', 'buying-and-access', 'get-started-learners'],
  trust: [
    'adult-content-and-age-verification',
    'list-hub-on-explore',
    'buying-and-access',
    'profile-and-sharing',
    'get-started-learners',
  ],
};
