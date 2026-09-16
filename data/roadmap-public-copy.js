/**
 * Public-facing copy for Linear issues tagged Public roadmap.
 * Matched by identifier (KAH-80) then by Linear title.
 * Keep this visitor-safe: no internals, no identifiers on the site.
 */
export const ROADMAP_PUBLIC_COPY = {
  'KAH-80': {
    title: 'Related hubs while you browse',
    teaser: 'See the next hub that belongs with the one you are already in.',
    what: 'When you open or buy a hub, Kahana can suggest other hubs that fit with it, free and paid, based on what people actually use together.',
    benefit:
      'You spend less time hunting for the next pack. Creators whose hubs belong together get discovered by people who are already in the mood to learn or buy.',
  },
  'KAH-75': {
    title: 'Kahana on iPhone',
    teaser: 'A dedicated iOS app for the library, reading, and Aura.',
    what: 'An iPhone app so you can browse the library, open hubs, read files, and give Aura without staying in a mobile browser.',
    benefit: 'Kahana is easier to pick up on the go, with a home on the App Store and a reading experience built for a phone.',
  },
  'KAH-76': {
    title: 'Kahana on Android',
    teaser: 'A dedicated Android app for the library, reading, and Aura.',
    what: 'An Android app so you can browse the library, open hubs, read files, and give Aura from Google Play.',
    benefit: 'Same library in your pocket if you live on Android, without relying on a browser tab.',
  },
  'KAH-92': {
    title: 'Titles clubs want in the library',
    teaser: 'Club wish lists can show books and packs people want that are not on Kahana yet.',
    what: 'When a club wants a title that is not in the library, that request can be captured so Kahana can help bring it in.',
    benefit: 'Learners get more of what their club is actually trying to read. Creators and authors hear demand that is already waiting.',
  },
  'KAH-59': {
    title: 'Notifications and learning nudges',
    teaser: 'Opt-in alerts for creators, and gentle reminders when you want to finish what you started.',
    what: 'You will be able to turn on updates for follows, saves, purchases, and club activity, plus optional nudges to return to a hub, book, or club focus.',
    benefit: 'Creators see traction without checking analytics all day. Learners who opt in get help keeping a promise to themselves, not a default firehose.',
  },
  'KAH-74': {
    title: 'Invite others and earn rewards',
    teaser: 'A real affiliate link, with perks when people you invite join and grow on Kahana.',
    what: 'A durable invite identity so you can share Kahana and receive rewards the team configures, such as extra hubs, a Growth trial, or a share of referred activity. Brand Ambassadors are a higher tier with more tools.',
    benefit: 'People who already love the library can help it grow and get something back, instead of a one-off UTM link with no follow-through.',
  },
  'KAH-72': {
    title: 'See how similar hubs are priced',
    teaser: 'Public market stats so you can set a hub price with more context.',
    what: 'Optional reference data on how listed hubs are priced in your category, such as typical ranges for one-time and monthly access. It is descriptive, not a recommended price.',
    benefit: 'You can choose free or a price without scraping the library by hand, and still decide for yourself.',
  },
  'KAH-73': {
    title: 'Profile badges and awards',
    teaser: 'Collectible marks on your profile beyond Aura totals.',
    what: 'A shelf of badges for things like listing a hub, company identity, contests, and other achievements Kahana can grant over time.',
    benefit: 'Profiles feel more like a place you have been, not only a count of Aura. Fun recognition without turning the library into a grind.',
  },
  'KAH-43': {
    title: 'Verified creators you can trust',
    teaser: 'Badges that help you tell when a creator is verified.',
    what: 'Verified marks on profiles and hub cards so buyers can see trust signals before they pay for access.',
    benefit: 'You can spend with more confidence when you are new to a creator. Honest sellers look the part.',
  },
};

export const ROADMAP_PUBLIC_COPY_BY_TITLE = {
  'Amazon-style related suggestions for free and paid hubs': ROADMAP_PUBLIC_COPY['KAH-80'],
  'iOS app for Aura Library': ROADMAP_PUBLIC_COPY['KAH-75'],
  'Android app for Aura Library': ROADMAP_PUBLIC_COPY['KAH-76'],
  'Demand-ranked requested titles from club wishlists + outreach claims': ROADMAP_PUBLIC_COPY['KAH-92'],
  'Notifications, creator analytics, and opt-in commitment nudges': ROADMAP_PUBLIC_COPY['KAH-59'],
  'Affiliate Program foundation (links, rewards, Brand Ambassadors)': ROADMAP_PUBLIC_COPY['KAH-74'],
  'Creator pricing insights: market price data for hub monetization': ROADMAP_PUBLIC_COPY['KAH-72'],
  'Profile badges & awards system (Fox, contests, quests)': ROADMAP_PUBLIC_COPY['KAH-73'],
  'Curio V1.0.0.2 - Creator Trust & Verification': ROADMAP_PUBLIC_COPY['KAH-43'],
  'Creator Trust & Verification': ROADMAP_PUBLIC_COPY['KAH-43'],
};

export function publicCopyForIssue({ identifier, title } = {}) {
  const fromId = identifier ? ROADMAP_PUBLIC_COPY[identifier] : null;
  const fromTitle = title ? ROADMAP_PUBLIC_COPY_BY_TITLE[title] : null;
  const copy = fromId || fromTitle;
  if (copy) return copy;
  const fallbackTitle = String(title || 'Upcoming feature').replace(/^Curio V[\d.]+ -\s*/i, '');
  return {
    title: fallbackTitle,
    teaser: 'A planned improvement to the Kahana library.',
    what: 'This is on the public board because it would change how people learn or create in Kahana. Details will get clearer as the work takes shape.',
    benefit: 'Open this card to follow along. Nothing here is a ship date.',
  };
}
