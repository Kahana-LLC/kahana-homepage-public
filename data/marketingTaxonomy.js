/**
 * Marketing IA: Help sections, Features, personas, and use cases.
 * Help JSON `section` + `tags` must use these ids.
 */

export const APP_CREATE_URL = 'https://app.kahana.io';
export const APP_LIBRARY_URL = 'https://kahana.io/explore';
export const APP_CLUBS_URL = 'https://app.kahana.io/clubs';
export const APP_ANALYTICS_URL = 'https://app.kahana.io/analytics';

export const HELP_SECTIONS = [
  { id: 'get-started', label: 'Get started' },
  { id: 'library', label: 'Library' },
  { id: 'hubs-and-files', label: 'Hubs and files' },
  { id: 'clubs', label: 'Clubs' },
  { id: 'selling', label: 'Selling' },
  { id: 'trust-and-account', label: 'Trust and account' },
];

export const FEATURES = [
  {
    slug: 'explore',
    title: 'Library',
    eyebrow: 'Feature',
    summary: 'Search and browse public hubs, authors, and clubs. Filter by topic, free or paid, and more.',
    lead: 'Library is Kahana’s public catalog. It is discovery, not a social feed. Guests can browse most public, non-adult listings.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Open Library',
    helpSlug: 'explore',
    personas: ['learners', 'buyers', 'authors'],
    useCases: ['selling-digital-products', 'selling-ebooks', 'book-clubs'],
    bullets: [
      'Search hubs, authors, and files',
      'Filter by category, free or paid, price, and tags',
      'Authors and Clubs tabs sit next to hubs',
      'For You personalizes from Aura, saves, follows, and taste',
    ],
    note: 'Listing a hub on Library is a separate step from creating it. Unlisted hubs stay link-only.',
  },
  {
    slug: 'hubs',
    title: 'Hubs',
    eyebrow: 'Feature',
    summary: 'A hub is a curated place for files, notes, links, and collaborators. It starts private.',
    lead: 'Package what you know in a hub: ebooks, videos, PDFs, images, embeds, and notes. Share when you are ready. Paid access is optional.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'hubs',
    personas: ['creators', 'authors', 'learners'],
    useCases: ['selling-digital-products', 'selling-ebooks', 'selling-courses', 'workshops', 'playbooks', 'journals'],
    bullets: [
      'Starts private so you can add files before anyone else sees it',
      'Invite collaborators with roles',
      'List on Library, share a link, or keep it invite-only',
      'Turn on a paywall later if you want to charge',
    ],
    note: 'Hubs are flexible libraries, not rigid online courses.',
  },
  {
    slug: 'preview-reels',
    title: 'Preview reels',
    eyebrow: 'Feature',
    summary: 'Optional trailers on Library cards: a hover or swipe carousel so people can sample a hub before they open it.',
    lead: 'A preview reel is a short set of image or video clips you attach to a hub. On Library, it plays as a carousel when someone hovers or swipes the card.',
    appHref: APP_CREATE_URL,
    appLabel: 'Open the app',
    helpSlug: 'preview-reels',
    personas: ['creators', 'buyers'],
    useCases: ['selling-digital-products', 'workshops', 'selling-courses'],
    bullets: [
      'Up to eight clips per hub',
      'Images or short videos (about 30 seconds or less)',
      'Upload new clips or pick files already in the hub',
      'Lead with your strongest trailer first',
    ],
    note: 'Preview reels are optional. A strong cover and title still matter if you skip them.',
  },
  {
    slug: 'clubs',
    title: 'Clubs',
    eyebrow: 'Feature',
    summary: 'Groups that read, list, and talk together. A new club always starts private.',
    lead: 'Clubs are for people who want a shared list, a current focus, a feed, and events. Many clubs are book clubs. They do not have to be.',
    appHref: APP_CLUBS_URL,
    appLabel: 'Open Clubs',
    helpSlug: 'clubs',
    personas: ['clubs', 'learners'],
    useCases: ['book-clubs'],
    bullets: [
      'Private, unlisted, or listed on the public Clubs page',
      'Join immediately or request to join',
      'Collaborative wish list of hubs, files, and links',
      'Focus, feed, events, and hub access requests',
    ],
    note: 'Creating a club is not the same as creating a hub. Hubs stay owned by their creators.',
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    eyebrow: 'Feature',
    summary: 'Views, members, purchasers, saves, and Aura so you can tell discovery from conversion.',
    lead: 'Kahana analytics shows activity on your hubs. Dollar detail lives in the Stripe Dashboard, not as a full P&L inside Kahana.',
    appHref: APP_ANALYTICS_URL,
    appLabel: 'Open Analytics',
    helpSlug: 'creator-analytics',
    personas: ['creators', 'authors'],
    useCases: ['selling-digital-products', 'selling-ebooks', 'selling-courses'],
    bullets: [
      'Account totals and per-hub rows',
      'Views, members, purchasers, files, Aura, and saves',
      'Low views usually means a discovery problem',
      'High views and low purchasers usually means the offer or paywall needs work',
    ],
    note: 'Use Stripe for payouts and revenue. Kahana analytics is for product and discovery performance.',
  },
  {
    slug: 'earning',
    title: 'Paid access',
    eyebrow: 'Feature',
    summary: 'Optional Stripe paywall on a hub: one-time or monthly. You can sell on the Free plan. Kahana’s fee is 5%.',
    lead: 'Monetization is not required. When you want to charge, connect Stripe, set a price, and turn on paid access.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'earning',
    personas: ['creators', 'buyers', 'authors'],
    useCases: ['selling-digital-products', 'selling-ebooks', 'selling-courses', 'workshops'],
    bullets: [
      'Stripe Connect for payouts',
      'One-time or monthly hub access',
      'Optional free trial',
      '5% platform fee plus Stripe processing',
    ],
    note: 'Free knowledge hubs stay first-class. Growth is about hub and storage limits, not permission to sell.',
  },
  {
    slug: 'aura',
    title: 'Aura',
    eyebrow: 'Feature',
    summary: 'A daily community endorsement. Aura is promotion, not money, not crypto, and not payment.',
    lead: 'When something is worth noticing, people give it Aura. You cannot give Aura to your own hubs or files.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'how-aura-works',
    personas: ['learners', 'creators'],
    useCases: ['book-clubs'],
    bullets: [
      'Give Aura to hubs and files you found useful',
      'Counts show on cards, profiles, and analytics',
      'For You can weigh Aura as a signal',
      'Streaks are optional reminders, not a payout',
    ],
    note: 'Aura does not replace purchases, saves, or follows.',
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    eyebrow: 'Feature',
    summary: 'A public page for the hubs you list, with bio, links, and a verified badge if you complete Stripe Identity.',
    lead: 'Authors on Library are people who contribute hubs. Your profile is the storefront for what you have listed.',
    appHref: APP_CREATE_URL,
    appLabel: 'Open the app',
    helpSlug: 'profiles',
    personas: ['authors', 'creators', 'learners'],
    useCases: ['selling-digital-products', 'workshops', 'playbooks'],
    bullets: [
      'Public bio, photo, and links',
      'Listed hubs appear together',
      'Follow and message from the profile',
      'Stripe Identity adds a check mark when verification is complete',
    ],
    note: 'A profile picture is part of Library listing readiness for your hubs.',
  },
  {
    slug: 'trust',
    title: 'Trust',
    eyebrow: 'Feature',
    summary: 'Adult flags, age checks, content rights, and identity verification so access stays intentional.',
    lead: 'Kahana is built for people to share knowledge they have the right to share. Adult listings stay hidden by default.',
    appHref: 'https://help.kahana.io/help/trust',
    appLabel: 'Read Trust help',
    helpSlug: 'trust',
    personas: ['buyers', 'creators', 'learners'],
    useCases: ['selling-digital-products', 'selling-ebooks'],
    bullets: [
      'Adult hubs require login, age verification, and an explicit filter',
      'Content rights before you list or monetize',
      'Report hub, file, or profile',
      'Verified badge from Stripe Identity',
    ],
    note: 'Kahana is not a DRM guarantee. Short-lived file links and access checks apply to paid content.',
  },
];

export const PERSONAS = [
  {
    slug: 'learners',
    title: 'For learners',
    eyebrow: 'Who it is for',
    summary: 'Browse, save, and open hubs others have shared. Give Aura when something helps.',
    lead: 'If you came to find ebooks, videos, and guides in one library, start in Library. Save what you want to reopen. Join a club if you want to read with other people.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'get-started-learners',
    features: ['explore', 'aura', 'clubs'],
    useCases: ['book-clubs', 'playbooks', 'journals'],
    bullets: [
      'Search Library without creating a hub first',
      'Save hubs into collections',
      'For You and taste marks personalize what you see',
      'Buy access only when a hub is paid',
    ],
    intent: 'browse',
  },
  {
    slug: 'buyers',
    title: 'For buyers',
    eyebrow: 'Who it is for',
    summary: 'Find paid hubs, preview what is inside, and unlock access through Stripe.',
    lead: 'Paid hubs use a paywall. You see the listing, the price, and often a preview. After checkout, the hub opens like any other hub you have access to.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'buying-and-access',
    features: ['explore', 'earning', 'preview-reels'],
    useCases: ['selling-digital-products', 'selling-ebooks', 'selling-courses', 'workshops'],
    bullets: [
      'Filter Library for paid or free hubs',
      'One-time or monthly access, depending on the hub',
      'Some hubs offer a free trial',
      'Cancel a monthly hub from your account when you need to',
    ],
    intent: 'shop',
  },
  {
    slug: 'creators',
    title: 'For creators',
    eyebrow: 'Who it is for',
    summary: 'Create hubs, list them on Library, and optionally charge with Stripe Connect.',
    lead: 'You do not have to sell. Many creators share free hubs. When you are ready to charge, connect Stripe and turn on paid access. Kahana’s marketplace fee is 5%.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'get-started-creators',
    features: ['hubs', 'earning', 'analytics', 'preview-reels'],
    useCases: ['selling-digital-products', 'workshops', 'playbooks', 'selling-courses'],
    bullets: [
      'Free plan includes hubs you can still monetize',
      'List on Library when the cover, description, and category are ready',
      'Analytics for views and purchasers; Stripe for payouts',
      'Unlimited collaborators on Free and Growth',
    ],
    intent: 'sell',
  },
  {
    slug: 'authors',
    title: 'For authors',
    eyebrow: 'Who it is for',
    summary: 'Publish ebooks, journals, and resource hubs under a public author profile.',
    lead: 'Library’s Authors tab is for people who contribute hubs. A journal, an ebook, or a bundle of PDFs can all live in a hub with your name on the listing.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'profiles',
    features: ['hubs', 'profiles', 'explore'],
    useCases: ['selling-ebooks', 'journals', 'playbooks'],
    bullets: [
      'Profile plus listed hubs is your public shelf',
      'Import a public-domain PDF from Internet Archive when you have the rights',
      'Free or paid: you choose per hub',
      'Verified badge after Stripe Identity',
    ],
    intent: 'expert_grow',
  },
  {
    slug: 'clubs',
    title: 'For clubs',
    eyebrow: 'Who it is for',
    summary: 'Host or join a group with a wish list, current focus, feed, and events.',
    lead: 'Clubs start private. Publish to unlisted or listed when you want people to find you. Moderators run invites, join requests, and the reading focus.',
    appHref: APP_CLUBS_URL,
    appLabel: 'Open Clubs',
    helpSlug: 'clubs',
    features: ['clubs', 'explore', 'hubs'],
    useCases: ['book-clubs'],
    bullets: [
      'Wish list of hubs, files, and links (including Goodreads, YouTube, Coursera)',
      'Members can request access to a private hub on the list',
      'Events with email reminders',
      'Feed posts, comments, and reactions',
    ],
    intent: 'clubs',
  },
];

export const USE_CASES = [
  {
    slug: 'book-clubs',
    title: 'Book clubs',
    eyebrow: 'Use case',
    summary: 'Run a reading group with a shared list, a current book or hub, and a place to talk.',
    lead: 'Kahana Clubs are built for groups that read together. Set a focus, collect what you want to read next, and keep discussion in the club feed. The club is not a replacement for the hub: members still open the actual book or files in a hub.',
    appHref: APP_CLUBS_URL,
    appLabel: 'Open Clubs',
    helpSlug: 'clubs',
    features: ['clubs', 'explore', 'hubs'],
    personas: ['clubs', 'learners'],
    stories: ['rashmi'],
    bullets: [
      'Create a club (always private at first)',
      'Add hubs, files, or Goodreads links to the wish list',
      'Vote on what to read next',
      'Set focus and schedule events',
    ],
    note: 'Clubs can be book clubs. They can also be any group that lists and talks together.',
  },
  {
    slug: 'selling-digital-products',
    title: 'Selling digital products',
    eyebrow: 'Use case',
    summary: 'Put files in a hub, list it on Library, and charge for access with Stripe.',
    lead: 'The product you sell is access to a hub. Buyers unlock the files, videos, and notes you packed. You can sell on Free. Kahana takes 5% plus Stripe’s processing fee.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'turn-on-paid-access',
    features: ['hubs', 'earning', 'analytics', 'preview-reels'],
    personas: ['creators', 'buyers'],
    stories: ['kelsey', 'amy'],
    bullets: [
      'Build the hub while it is still private',
      'Connect Stripe and set one-time or monthly pricing',
      'List on Library so buyers can find it',
      'Watch views vs purchasers in Analytics',
    ],
    note: 'Do not treat Kahana as a full Stripe revenue dashboard. Open Stripe for payouts.',
  },
  {
    slug: 'selling-ebooks',
    title: 'Selling ebooks',
    eyebrow: 'Use case',
    summary: 'Publish a PDF or a set of documents as a hub. Import from Internet Archive when redistribution is allowed.',
    lead: 'An ebook on Kahana is a hub with the file (and often extras: notes, related links, a journal companion). You can list it free or paid. Only upload what you have rights to share.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'import-from-internet-archive',
    features: ['hubs', 'earning', 'explore'],
    personas: ['authors', 'buyers', 'creators'],
    stories: ['rashmi'],
    bullets: [
      'Upload a PDF or import a public-domain Archive.org file',
      'Add a cover, description, and category',
      'Keep it free, or turn on paid access',
      'Readers open it in the hub file viewer',
    ],
    note: 'See Content rights before you list or monetize. Public domain is allowed when redistribution is permitted.',
  },
  {
    slug: 'selling-courses',
    title: 'Course-like hubs',
    eyebrow: 'Use case',
    summary: 'Package videos, PDFs, and checklists in one hub. This is not a full LMS.',
    lead: 'People search for courses on Kahana. What they find is a hub: session recordings, slides, templates, and notes in a flexible library. There is no graded classroom, drip curriculum engine, or Teachable-style student dashboard.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'get-started-creators',
    features: ['hubs', 'earning', 'preview-reels'],
    personas: ['creators', 'buyers'],
    stories: ['kelsey', 'amy'],
    bullets: [
      'Put lessons in files and folders inside one hub',
      'Use a preview reel so Library visitors can sample a clip',
      'Charge once or monthly for access',
      'Collaborate with editors if you teach as a team',
    ],
    note: 'Kahana hubs are not rigid online courses. Flexibility is the point.',
  },
  {
    slug: 'workshops',
    title: 'Workshops',
    eyebrow: 'Use case',
    summary: 'Turn a live session into a hub: video, slides, and the worksheets people actually need later.',
    lead: 'A workshop replay dies in a Drive folder. On Kahana it can be a listed hub with everything in one place, free or paid.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'get-started-creators',
    features: ['hubs', 'earning', 'preview-reels', 'profiles'],
    personas: ['creators', 'buyers'],
    stories: ['kelsey'],
    bullets: [
      'Upload the session video and slides',
      'Add checklists and follow-along PDFs',
      'List on Library with a clear cover',
      'Optional paywall after the event',
    ],
  },
  {
    slug: 'playbooks',
    title: 'Playbooks and templates',
    eyebrow: 'Use case',
    summary: 'Ship a kit: guides plus copy-ready templates so people are not hunting scattered tips.',
    lead: 'A playbook hub holds the process and the files: resumes, email templates, checklists. Price it or keep it free.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'adding-files-and-embeds',
    features: ['hubs', 'earning', 'explore'],
    personas: ['creators', 'learners'],
    stories: ['amy'],
    bullets: [
      'Mix documents, videos, and notes in one hub',
      'Name files so searchers can find them',
      'List on Library in a matching category',
      'Share the profile so the kit sits with your other hubs',
    ],
  },
  {
    slug: 'journals',
    title: 'Guided journals',
    eyebrow: 'Use case',
    summary: 'Publish a prompt series as a hub: day-by-day files, a how-to note, listed free or paid.',
    lead: 'A journal does not have to be a single PDF. A hub can hold thirty prompts, week by week, so people start on page one and keep going.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'hubs',
    features: ['hubs', 'explore', 'profiles'],
    personas: ['authors', 'learners'],
    stories: ['rashmi'],
    bullets: [
      'One file per day or week, plus an intro',
      'List free if you want anyone to start',
      'Use a writer-facing author profile',
      'Clubs can add the hub to a wish list if a group wants to go through it together',
    ],
  },
];

/** Help slug → section + tags (feature: / persona: / use-case:). */
export const HELP_ARTICLE_TAXONOMY = {
  'get-started-learners': {
    section: 'get-started',
    tags: ['persona:learners', 'feature:explore'],
  },
  'get-started-creators': {
    section: 'get-started',
    tags: ['persona:creators', 'feature:hubs'],
  },
  explore: {
    section: 'library',
    tags: ['feature:explore', 'persona:learners', 'persona:buyers'],
  },
  'for-you-and-taste': {
    section: 'library',
    tags: ['feature:explore', 'persona:learners'],
  },
  'saving-and-collections': {
    section: 'library',
    tags: ['feature:explore', 'persona:learners'],
  },
  'preview-reels': {
    section: 'library',
    tags: ['feature:preview-reels', 'persona:creators', 'persona:buyers'],
  },
  hubs: {
    section: 'hubs-and-files',
    tags: ['feature:hubs', 'persona:creators'],
  },
  'adding-files-and-embeds': {
    section: 'hubs-and-files',
    tags: ['feature:hubs', 'persona:creators'],
  },
  'import-from-internet-archive': {
    section: 'hubs-and-files',
    tags: ['feature:hubs', 'use-case:selling-ebooks', 'persona:authors'],
  },
  'list-hub-on-explore': {
    section: 'hubs-and-files',
    tags: ['feature:explore', 'feature:hubs', 'persona:creators'],
  },
  'collaborators-and-roles': {
    section: 'hubs-and-files',
    tags: ['feature:hubs', 'persona:creators'],
  },
  clubs: {
    section: 'clubs',
    tags: ['feature:clubs', 'use-case:book-clubs', 'persona:clubs', 'persona:learners'],
  },
  'messages-and-privacy': {
    section: 'trust-and-account',
    tags: ['persona:learners', 'persona:creators'],
  },
  notifications: {
    section: 'trust-and-account',
    tags: ['persona:learners'],
  },
  profiles: {
    section: 'library',
    tags: ['feature:profiles', 'persona:authors', 'persona:creators'],
  },
  'profile-and-sharing': {
    section: 'library',
    tags: ['feature:profiles', 'persona:creators'],
  },
  'how-aura-works': {
    section: 'library',
    tags: ['feature:aura', 'persona:learners'],
  },
  earning: {
    section: 'selling',
    tags: ['feature:earning', 'persona:creators', 'use-case:selling-digital-products'],
  },
  'turn-on-paid-access': {
    section: 'selling',
    tags: [
      'feature:earning',
      'persona:creators',
      'use-case:selling-digital-products',
      'use-case:selling-ebooks',
      'use-case:selling-courses',
    ],
  },
  'buying-and-access': {
    section: 'selling',
    tags: ['persona:buyers', 'feature:earning', 'use-case:selling-digital-products'],
  },
  'creator-analytics': {
    section: 'selling',
    tags: ['feature:analytics', 'persona:creators'],
  },
  'when-to-upgrade': {
    section: 'selling',
    tags: ['persona:creators', 'feature:earning'],
  },
  'content-rights': {
    section: 'trust-and-account',
    tags: ['feature:trust', 'persona:creators'],
  },
  'delete-my-account': {
    section: 'trust-and-account',
    tags: ['feature:trust'],
  },
  trust: {
    section: 'trust-and-account',
    tags: ['feature:trust'],
  },
  'adult-content-and-age-verification': {
    section: 'trust-and-account',
    tags: ['feature:trust', 'persona:buyers'],
  },
};

const FEATURE_BY_SLUG = Object.fromEntries(FEATURES.map((item) => [item.slug, item]));
const PERSONA_BY_SLUG = Object.fromEntries(PERSONAS.map((item) => [item.slug, item]));
const USE_CASE_BY_SLUG = Object.fromEntries(USE_CASES.map((item) => [item.slug, item]));
const SECTION_BY_ID = Object.fromEntries(HELP_SECTIONS.map((item) => [item.id, item]));

export function getHelpSectionLabel(sectionId) {
  return SECTION_BY_ID[sectionId]?.label || sectionId;
}

export function getFeature(slug) {
  return FEATURE_BY_SLUG[slug] || null;
}

export function getPersona(slug) {
  return PERSONA_BY_SLUG[slug] || null;
}

export function getUseCase(slug) {
  return USE_CASE_BY_SLUG[slug] || null;
}

export function parseTaxonomyTag(tag) {
  const [kind, ...rest] = String(tag || '').split(':');
  const slug = rest.join(':');
  if (!slug) return null;
  if (kind === 'feature') return { kind, slug, href: `/features/${slug}`, label: getFeature(slug)?.title || slug };
  if (kind === 'persona') return { kind, slug, href: `/for/${slug}`, label: getPersona(slug)?.title || slug };
  if (kind === 'use-case') return { kind, slug, href: `/use-cases/${slug}`, label: getUseCase(slug)?.title || slug };
  return null;
}

export function helpSlugsForTag(tag) {
  return Object.entries(HELP_ARTICLE_TAXONOMY)
    .filter(([, meta]) => (meta.tags || []).includes(tag))
    .map(([slug]) => slug);
}

/** Extra search terms so “sell ebook” / “book club” still hit the right articles. */
export const HELP_SEARCH_SYNONYMS = {
  'book club': ['clubs', 'reading group', 'book-clubs'],
  ebook: ['e-book', 'pdf', 'digital product', 'selling-ebooks'],
  course: ['workshop', 'playbook', 'selling-courses'],
  sell: ['monetize', 'paid hub', 'earning', 'digital product'],
  author: ['writer', 'authors'],
  coach: ['creators', 'workshop'],
  student: ['learners', 'learner'],
  trailer: ['preview', 'carousel', 'reel'],
  preview: ['trailer', 'carousel', 'reel'],
  analytics: ['insights', 'stats'],
  paywall: ['monetize', 'subscription', 'paid'],
};

export function expandHelpSearchQuery(query) {
  const raw = String(query || '').trim().toLowerCase();
  if (!raw) return [];
  const extra = Object.entries(HELP_SEARCH_SYNONYMS)
    .filter(([key]) => raw.includes(key))
    .flatMap(([, terms]) => terms);
  return Array.from(new Set([raw, ...extra]));
}

export function personaChipLabel(persona) {
  return String(persona?.title || '').replace(/^For\s+/i, '') || persona?.slug || '';
}

export function helpDocMatchesQuery(doc, query) {
  const terms = expandHelpSearchQuery(query);
  if (!terms.length) return true;
  const tagLabels = (doc.tags || [])
    .map((tag) => parseTaxonomyTag(tag)?.label || tag)
    .join(' ');
  const hay = [
    doc.title,
    doc.description,
    doc.searchText,
    tagLabels,
    getHelpSectionLabel(doc.section || doc.category),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return terms.some((term) => hay.includes(String(term).toLowerCase()));
}
