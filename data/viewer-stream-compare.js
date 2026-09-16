/**
 * Learner / viewer comparison vs ad-supported streamers.
 * Kahana is a digital library, not a licensed TV catalog.
 */

export const VIEWER_STREAMERS = [
  {
    id: 'netflix',
    name: 'Netflix',
    website: 'https://www.netflix.com',
    access: 'Paid subscription',
    ads: 'Ads on the cheaper plan; extra to watch without them',
    catalog: 'Licensed TV and movies',
  },
  {
    id: 'hulu',
    name: 'Hulu',
    website: 'https://www.hulu.com',
    access: 'Paid subscription',
    ads: 'Ads unless you pay the no-ads plan',
    catalog: 'Licensed TV and movies',
  },
  {
    id: 'prime-video',
    name: 'Amazon Prime Video',
    website: 'https://www.primevideo.com',
    access: 'Paid (Prime or a Video plan)',
    ads: 'Ads unless you pay extra to remove them',
    catalog: 'Licensed TV, movies, and extras',
  },
  {
    id: 'max',
    name: 'Max (HBO)',
    website: 'https://www.max.com',
    access: 'Paid subscription',
    ads: 'Ads on the cheaper plan; extra to remove them',
    catalog: 'Licensed HBO and studio shows',
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    website: 'https://www.crunchyroll.com',
    access: 'Paid for full catalog / no ads',
    ads: 'Ads on the free tier; paid removes them',
    catalog: 'Licensed anime and related video',
  },
];

export const VIEWER_KAHANA = {
  id: 'kahana',
  name: 'Kahana',
  access: 'Free to browse the Library',
  ads: 'Zero ads. We do not sell your attention.',
  catalog: 'Hubs, ebooks, files, clubs — a library, not a TV app',
};
