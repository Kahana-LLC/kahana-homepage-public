/**
 * Last-resort board if Linear is unreachable.
 * Live source: Kahana issues with label Public roadmap.
 */
import { publicCopyForIssue } from './roadmap-public-copy';

function card(id, identifier, title, createdAt) {
  const copy = publicCopyForIssue({ identifier, title });
  return {
    id,
    kind: 'Feature',
    createdAt,
    title: copy.title,
    teaser: copy.teaser,
    what: copy.what,
    benefit: copy.benefit,
  };
}

export const ROADMAP_SNAPSHOT = {
  fetchedAt: '2026-09-16T19:50:00.000Z',
  live: false,
  columns: {
    backlog: [
      card('snap-76', 'KAH-76', 'Android app for Aura Library', '2026-08-10T16:10:22.797Z'),
      card('snap-92', 'KAH-92', 'Demand-ranked requested titles from club wishlists + outreach claims', '2026-08-25T14:18:34.956Z'),
      card('snap-59', 'KAH-59', 'Notifications, creator analytics, and opt-in commitment nudges', '2026-07-30T20:21:58.918Z'),
      card('snap-74', 'KAH-74', 'Affiliate Program foundation (links, rewards, Brand Ambassadors)', '2026-08-10T16:08:05.621Z'),
      card('snap-72', 'KAH-72', 'Creator pricing insights: market price data for hub monetization', '2026-08-10T15:58:29.865Z'),
      card('snap-73', 'KAH-73', 'Profile badges & awards system (Fox, contests, quests)', '2026-08-10T16:03:22.348Z'),
    ],
    inProgress: [
      card('snap-80', 'KAH-80', 'Amazon-style related suggestions for free and paid hubs', '2026-08-17T17:44:19.092Z'),
      card('snap-75', 'KAH-75', 'iOS app for Aura Library', '2026-08-10T16:10:20.869Z'),
    ],
    shipped: [
      card('snap-43', 'KAH-43', 'Curio V1.0.0.2 - Creator Trust & Verification', '2026-06-24T17:37:56.575Z'),
    ],
  },
};
