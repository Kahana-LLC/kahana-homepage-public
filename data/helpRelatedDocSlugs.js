/**
 * Maps help article slugs to related help slugs (shown at the bottom of /help/:slug).
 * Falls back to same-category articles when a slug is missing here.
 */
export const HELP_RELATED_DOC_SLUGS = {
  explore: ['for-you-and-taste', 'list-hub-on-explore', 'get-started-learners'],
  'for-you-and-taste': ['explore', 'how-aura-works', 'saving-and-collections'],
  'list-hub-on-explore': ['hubs', 'explore', 'content-rights'],
  hubs: ['adding-files-and-embeds', 'list-hub-on-explore', 'get-started-creators'],
  'adding-files-and-embeds': ['hubs', 'import-from-internet-archive', 'when-to-upgrade'],
  'import-from-internet-archive': ['adding-files-and-embeds', 'content-rights', 'hubs'],
  'get-started-learners': ['explore', 'saving-and-collections', 'how-aura-works'],
  'get-started-creators': ['hubs', 'list-hub-on-explore', 'adding-files-and-embeds'],
  'how-aura-works': ['for-you-and-taste', 'explore', 'creator-analytics'],
  clubs: ['explore', 'messages-and-privacy', 'hubs'],
  'saving-and-collections': ['explore', 'for-you-and-taste', 'get-started-learners'],
  'messages-and-privacy': ['notifications', 'profile-and-sharing', 'clubs'],
  notifications: ['messages-and-privacy', 'how-aura-works', 'clubs'],
  'delete-my-account': ['trust', 'profile-and-sharing', 'content-rights'],
  earning: ['turn-on-paid-access', 'buying-and-access', 'when-to-upgrade'],
  'turn-on-paid-access': ['earning', 'buying-and-access', 'when-to-upgrade'],
  'buying-and-access': ['explore', 'turn-on-paid-access', 'how-aura-works'],
  'when-to-upgrade': ['get-started-creators', 'hubs', 'turn-on-paid-access'],
  'collaborators-and-roles': ['hubs', 'get-started-creators', 'list-hub-on-explore'],
  'creator-analytics': ['list-hub-on-explore', 'how-aura-works', 'earning'],
  profiles: ['profile-and-sharing', 'explore', 'list-hub-on-explore'],
  'profile-and-sharing': ['profiles', 'messages-and-privacy', 'list-hub-on-explore'],
  trust: ['adult-content-and-age-verification', 'content-rights', 'delete-my-account'],
  'adult-content-and-age-verification': ['trust', 'list-hub-on-explore', 'buying-and-access'],
  'content-rights': ['list-hub-on-explore', 'import-from-internet-archive', 'trust'],
};
