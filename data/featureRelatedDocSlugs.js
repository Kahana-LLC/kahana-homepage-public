/**
 * Maps /features/:slug pages to related /docs/:slug articles (curated).
 * Only slugs that exist under data/docs/*.json should be listed.
 */
export const FEATURE_RELATED_DOC_SLUGS = {
  'oasis-assistant': [
    'chat-timeline',
    'composer-and-follow-ups',
    'busy-streaming-state',
    'chat-history-indexeddb',
    'insert-capabilities-overview',
    'active-tool-indicator',
  ],
  'oasis-voice': [
    'voice-and-sign-in',
    'composer-microphone',
    'spoken-vs-chat-replies-orb',
    'voice-orb-hands-free',
    'echo-guard',
  ],
  'oasis-confirmations': ['destructive-action-confirmations', 'guest-vs-signed-in', 'plain-english-browser-control'],
  'oasis-onboarding': [
    'onboarding-checklist-assistant-panel',
    'oasis-welcome-not-firefox-about-welcome',
    'new-tab-and-assistant-landing',
    'post-sign-in-assistant',
    'import-opt-out',
  ],
  'oasis-import': ['onboarding-checklist-assistant-panel', 'import-opt-out', 'new-tab-and-assistant-landing'],
  'oasis-amplifier': [
    'thumbs-and-structured-feedback',
    'training-gallery-and-milestones',
    'earn-chip-hints',
    'external-feedback-links',
  ],
  'oasis-enterprise-external-access': ['guest-vs-signed-in', 'kahana-supabase-sign-in', 'welcome-back-after-sign-out'],
  'oasis-enterprise-governance': [
    'global-privacy-control',
    'tracking-protection-settings',
    'total-cookie-protection',
    'connection-settings',
  ],
  'oasis-enterprise-identity-dlp': [
    'primary-password',
    'autofill',
    'deceptive-content-protection',
    'enhanced-tracking-protection',
  ],
  'oasis-enterprise-faster-paths': ['quick-actions', 'picture-in-picture', 'performance', 'notifications'],
  'user-analytics': [
    'daily-token-usage-bar',
    'subscription-refresh',
    'router-assist-usage',
    'router-and-usage-metadata',
  ],
};
