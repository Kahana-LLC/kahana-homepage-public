/**
 * Marketing IA: Help sections, Features, personas, and use cases.
 * Help JSON `section` + `tags` must use these ids.
 */

import {
  APP_ANALYTICS_URL,
  APP_CLUBS_URL,
  APP_CREATE_URL,
  APP_ACTIVITY_URL,
  APP_FOLLOWING_URL,
  APP_FOR_YOU_URL,
  APP_MESSAGES_URL,
  APP_NOTES_URL,
  APP_SAVED_URL,
  EXPLORE_URL as APP_LIBRARY_URL,
} from '../lib/productLinks';

export {
  APP_CREATE_URL,
  APP_LIBRARY_URL,
  APP_CLUBS_URL,
  APP_ANALYTICS_URL,
  APP_SAVED_URL,
  APP_NOTES_URL,
  APP_MESSAGES_URL,
  APP_FOLLOWING_URL,
  APP_ACTIVITY_URL,
  APP_FOR_YOU_URL,
};

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
    lead: 'Library is Kahana’s public catalog. Discover heady ebooks, videos, knowledge, files, and artifacts, and explore challenging topics and subjects. It is a library, not a feed like TikTok or Instagram. Guests can browse most public, non-adult listings.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Open Library',
    helpSlug: 'explore',
    audiences: ['learner'],
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
    audiences: ['creator', 'learner'],
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
    audiences: ['creator'],
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
    audiences: ['creator', 'learner'],
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
    slug: 'discussions',
    title: 'Discussions',
    eyebrow: 'Feature',
    summary: 'Talk beside a hub or a file. Comments, replies, and a watch so you hear when the thread moves.',
    lead: 'A discussion sits on a hub or on a file inside it. It is not the club feed. People who can open the hub can read the thread, comment, reply, and watch it.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Explore the Library',
    helpSlug: 'hub-and-file-discussions',
    audiences: ['creator', 'learner'],
    personas: ['learners', 'creators', 'clubs'],
    useCases: ['hub-discussions', 'book-clubs'],
    bullets: [
      'Open the discussion from a hub or from a file',
      'Comment, or reply to someone already in the thread',
      'Watch a thread and turn the watch off when you are done',
      'Separate from the club feed, which lives on the club',
    ],
    note: 'Club posts, comments, and reactions stay on the club. Hub and file discussions stay on the work.',
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    eyebrow: 'Feature',
    summary: 'Creators see hub views, members, and conversion. Learners see private learning time and streak.',
    lead: 'Kahana analytics has two sides. Author analytics is for hubs you run. Learning analytics is private: time, streak, and email opt-ins. Dollar detail still lives in Stripe.',
    appHref: APP_ANALYTICS_URL,
    appLabel: 'Open Analytics',
    helpSlug: 'creator-analytics',
    audiences: ['creator', 'learner'],
    personas: ['creators', 'authors', 'learners'],
    useCases: ['selling-digital-products', 'selling-ebooks', 'selling-courses'],
    bullets: [
      'Author tab: views, members, purchasers, files, Aura, and saves',
      'Learning tab: personal time and Cognition streak (private)',
      'Low views usually means a discovery problem',
      'High views and low purchasers usually means the offer or paywall needs work',
    ],
    note: 'Use Stripe for payouts and revenue. Kahana analytics is for product, discovery, and your own learning, not a full P&L.',
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
    audiences: ['creator'],
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
    audiences: ['creator', 'learner'],
    personas: ['learners', 'creators'],
    useCases: ['book-clubs'],
    bullets: [
      'Give Aura to hubs and files you found useful',
      'Counts show on cards, profiles, and analytics',
      'For You can weigh Aura as a signal',
      'Streaks are optional reminders, not a payout',
    ],
    note: 'Aura does not replace purchases, saves, or follows. See also Aura, trust, and information quality.',
  },
  {
    slug: 'aura-pathways',
    title: 'Aura pathways',
    eyebrow: 'Feature',
    summary: 'See how Aura moves from a file to a hub, who gave it, and how that signal shows up in Library, For You, and analytics.',
 lead: 'A pathway is the trail of an endorsement: where it landed, who spent scarce Aura, and how quality becomes visible. Not a black-box like count.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'how-aura-works',
    audiences: ['creator', 'learner'],
    personas: ['learners', 'creators'],
    useCases: ['book-clubs'],
    bullets: [
      'File Aura also lifts the hub by 1; hub Aura does not roll down to files',
      'Open who gave Aura on hubs and files that show a count',
      'Creators see Aura in hub and account analytics',
      'For You can weigh Aura as one discovery signal',
    ],
    note: 'Aura is promotion, not payment. It does not unlock a paywall.',
  },
  {
    slug: 'aura-and-trust',
    title: 'Aura, trust, and information quality',
    eyebrow: 'Feature',
    summary:
 'See who gave Aura, when they joined, and what else they endorsed, so Library quality and access come with named context, not a black-box like count.',
    lead:
      'Aura does not tell you what to think. It lets you inspect scarce, human recognition: who spent it, how long they have been a member, and other public hubs they carried forward.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'how-aura-works',
    audiences: ['creator', 'learner'],
    personas: ['learners', 'creators'],
    useCases: ['book-clubs'],
    bullets: [
      'Open who gave Aura on a hub: name, avatar, and amount',
      'Member since shows when that giver created their account',
      'See other public hubs they gave Aura to, or open their profile history',
 'For You can weigh Aura as one signal. Not a ranking of truth',
    ],
    note: 'Aura is not a fact-checker. File Aura still opens the hub givers list.',
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
    audiences: ['creator', 'learner'],
    personas: ['authors', 'creators', 'learners'],
    useCases: ['selling-digital-products', 'workshops', 'playbooks'],
    bullets: [
      'Public bio, photo, and links',
      'Listed hubs appear together',
      'Follow and message from the profile',
      'Stripe Identity adds a check mark when verification is complete',
    ],
    note: 'A profile picture is part of Library listing readiness for your hubs. Share hubs or your profile from the outbound share sheet (copy link, email, SMS, and social).',
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
    audiences: ['creator', 'learner'],
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
  {
    slug: 'for-you',
    title: 'For You',
    eyebrow: 'Feature',
    summary: 'A personalized Library tab from Aura, saves, follows, and For you / Not for you marks. You can weight the signals.',
    lead: 'For You ranks hubs from how you use the library. Taste marks are yours. They are not a public review and not Aura.',
    appHref: APP_FOR_YOU_URL,
    appLabel: 'Open For You',
    helpSlug: 'for-you-and-taste',
    audiences: ['learner'],
    personas: ['learners'],
    useCases: ['book-clubs'],
    bullets: [
      'Personalized feed on the For You Library tab',
      'Mark hubs, files, authors, and clubs For you or Not for you',
      'Turn signals up or down and save weights',
      'Guests still use the main Library catalog',
    ],
    note: 'You need an account for a meaningful For You feed. Interests at signup also live under Settings.',
  },
  {
    slug: 'saved',
    title: 'Saved collections',
    eyebrow: 'Feature',
    summary: 'Bookmark hubs and files into collections so you can reopen them later.',
    lead: 'Saved is your private shelf. It is not a public list and not a club wish list.',
    appHref: APP_SAVED_URL,
    appLabel: 'Open Saved',
    helpSlug: 'saving-and-collections',
    audiences: ['learner'],
    personas: ['learners', 'buyers'],
    useCases: ['book-clubs'],
    bullets: [
      'Save hubs and files from Library, search, and hub pages',
      'Group items into collections',
      'Needs an account; guests can still browse public listings',
    ],
    note: 'Saving does not grant paid access. A paywalled hub still needs a purchase or invite.',
  },
  {
    slug: 'files',
    title: 'Files and embeds',
    eyebrow: 'Feature',
    summary: 'Upload images, video, audio, and documents; nest folders; embed YouTube or a webpage; read PDFs in the hub.',
    lead: 'A hub holds the artifacts you curate. Links, notes, and some embeds generally do not count toward upload quota.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'adding-files-and-embeds',
    audiences: ['creator', 'learner'],
    personas: ['creators', 'learners', 'authors'],
    useCases: ['selling-digital-products', 'playbooks', 'selling-ebooks'],
    bullets: [
      'Uploads: images, video, audio, PDF, Office, ZIP',
      'YouTube and webpage embeds without hosting the file',
      'Folders to keep a growing hub readable',
      'In-hub PDF reader, optional split, and browser reading mode',
    ],
    note: 'Free plans cap counted uploads and file size. Only add what you have the right to share.',
  },
  {
    slug: 'archive-import',
    title: 'Internet Archive import',
    eyebrow: 'Feature',
    summary: 'Paste an archive.org URL and Kahana fetches the PDF into your hub when the rights allow.',
    lead: 'Archive.org holds the scan. Kahana is where you curate a hub around a public-domain or openly licensed work.',
    appHref: APP_CREATE_URL,
    appLabel: 'Open the app',
    helpSlug: 'import-from-internet-archive',
    audiences: ['creator'],
    personas: ['authors', 'creators'],
    useCases: ['selling-ebooks', 'journals'],
    bullets: [
      'Paste an Internet Archive item URL',
      'Server-side PDF import into the hub you own',
      'Rights hint before you confirm',
      'Works alongside ordinary file uploads',
    ],
    note: 'Finding a scan is not permission. Confirm public domain or license before you list or monetize.',
  },
  {
    slug: 'collaborators',
    title: 'Collaborators',
    eyebrow: 'Feature',
    summary: 'Invite people into a hub with roles so you can curate together without handing over ownership.',
    lead: 'A hub stays owned by its creator. Collaborators help add files, notes, and structure.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'collaborators-and-roles',
    audiences: ['creator'],
    personas: ['creators', 'authors'],
    useCases: ['workshops', 'playbooks', 'selling-courses'],
    bullets: [
      'Invite collaborators from hub settings',
      'Roles for who can edit versus admin',
      'Leave a hub you were invited to',
      'Listing and paywall stay with the owner',
    ],
    note: 'Club membership is separate. Being in a club does not make you a hub collaborator.',
  },
  {
    slug: 'messages',
    title: 'Messages',
    eyebrow: 'Feature',
    summary: 'Direct messages with privacy controls: off, open, or followers-only.',
    lead: 'Messages are for people already on Kahana. You choose who can start a thread.',
    appHref: APP_MESSAGES_URL,
    appLabel: 'Open Messages',
    helpSlug: 'messages-and-privacy',
    audiences: ['learner', 'creator'],
    personas: ['learners', 'creators'],
    useCases: ['book-clubs'],
    bullets: [
      'Inbox, compose, and drafts',
      'Privacy: off, open, or followers',
      'Email and in-app notification prefs',
      'Unread badges in the app shell',
    ],
    note: 'Messages are not a public comment wall. Club talk also lives in the club feed.',
  },
  {
    slug: 'notifications',
    title: 'Activity',
    eyebrow: 'Feature',
    summary: 'Aura, follows, saves, purchases, club invites, and hub access requests in one Activity list.',
    lead: 'Activity is the in-app feed of things that happened to you or that you need to act on.',
    appHref: APP_ACTIVITY_URL,
    appLabel: 'Open Activity',
    helpSlug: 'notifications',
    audiences: ['learner', 'creator'],
    personas: ['learners', 'creators'],
    useCases: ['book-clubs'],
    bullets: [
      'Aura, follows, and saves',
      'Purchases and access requests',
      'Club invites, comments, and events',
      'Email and browser badge prefs in Communication settings',
    ],
    note: 'Activity is not a social feed of the whole library. It is your own events.',
  },
  {
    slug: 'notes',
    title: 'Notes',
    eyebrow: 'Feature',
    summary: 'Rich notes inside hubs plus personal notes across hubs, with smart links to hubs, files, authors, and clubs.',
    lead: 'Hub notes are part of the pack you share. Personal notes stay yours. You can pick Blocks or Classic as the hub notes editor.',
    appHref: APP_NOTES_URL,
    appLabel: 'Open Notes',
    helpSlug: 'notes',
    audiences: ['creator', 'learner'],
    personas: ['creators', 'learners', 'authors'],
    useCases: ['playbooks', 'journals', 'workshops'],
    bullets: [
      'Notes inside a hub for intros and reading guides',
      'Personal notes across hubs at /notes',
      'Smart links to hubs, files, authors, and clubs',
      'Blocks or Classic editor preference in Settings',
    ],
    note: 'Notes in a listed hub are part of what members see. Personal notes are not a public blog.',
  },
  {
    slug: 'following',
    title: 'Following',
    eyebrow: 'Feature',
    summary: 'Follow authors and reopen their public work from a Following page. For You can weigh follows as a signal.',
    lead: 'Following is how you keep up with people whose hubs you want to see again. It is not the same as joining a club.',
    appHref: APP_FOLLOWING_URL,
    appLabel: 'Open Following',
    helpSlug: 'following',
    audiences: ['learner'],
    personas: ['learners', 'buyers'],
    useCases: ['book-clubs'],
    bullets: [
      'Follow from a public profile',
      'Following page of people you keep up with',
      'Optional For You signal from followed authors',
      'Needs an account',
    ],
    note: 'Following does not grant paid hub access.',
  },
  {
    slug: 'cognition-streak',
    title: 'Cognition streak',
    eyebrow: 'Feature',
    summary: 'A UTC-day streak from visiting and opening library material, with optional email reminders. Not an Aura grant.',
    lead: 'Cognition streak counts showing up to learn. It is not money, not Aura, and not a ranking of quality.',
    appHref: APP_ANALYTICS_URL,
    appLabel: 'Open Analytics',
    helpSlug: 'cognition-streak',
    audiences: ['learner'],
    personas: ['learners'],
    useCases: ['book-clubs'],
    bullets: [
      'Streak grows on UTC days you visit or open material',
      'Chip in the app plus rules in Learning analytics',
      'Optional same-day, weekly snapshot, and restart emails',
      'Does not pay out and does not unlock paywalls',
    ],
    note: 'Giving Aura is a separate daily budget. Streak reminders are opt-in under Communication settings.',
  },
];

export const PERSONAS = [
  {
    slug: 'learners',
    title: 'For learners',
    eyebrow: 'Who it is for',
    summary: 'Browse, save, and open hubs others have shared. Give Aura when something helps.',
    lead: 'If you came for ebooks, videos, and guides in one library, start in Library. Save what you want to reopen. Join a club if you want to read with other people.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'get-started-learners',
    features: ['explore', 'aura', 'clubs'],
    useCases: ['book-clubs', 'finish-more-books', 'learn-a-skill', 'meet-people', 'personal-library'],
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
    useCases: ['unlock-paid-hubs', 'selling-ebooks', 'learn-a-skill', 'workshops'],
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
    useCases: ['paid-memberships', 'get-discovered', 'collaborate-on-hubs', 'selling-digital-products'],
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
    useCases: ['selling-ebooks', 'journals', 'share-your-profile', 'get-discovered'],
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
    useCases: ['book-clubs', 'meet-people', 'cohorts-and-communities'],
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
    slug: 'hub-discussions',
    title: 'Talk beside the files',
    eyebrow: 'Use case',
    summary: 'Keep a conversation on a hub or a file, next to the work, without starting a club.',
    lead: 'When the point is the hub itself, open its discussion. Comment on the hub or on a single file, reply, and watch the thread. A club feed is a different room, for the group.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Explore the Library',
    helpSlug: 'hub-and-file-discussions',
    features: ['discussions', 'hubs', 'files'],
    personas: ['learners', 'creators'],
    bullets: [
      'Discuss a hub as a whole, or one file inside it',
      'Reply in the thread instead of starting a new post elsewhere',
      'Watch the discussion when you want updates',
      'Use a club when the group needs a feed, a list, and events',
    ],
    note: 'Discussion does not replace the files. The hub is still what people open.',
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
  {
    slug: 'study-and-research',
    title: 'Study and research packs',
    eyebrow: 'Use case',
    summary: 'Keep PDFs, notes, slides, and links in one hub so the paper you need is not lost in a folder.',
    lead: 'A research hub is a working shelf: papers, notes, and the files you reopen. Share it with collaborators, or keep it private.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'notes',
    features: ['hubs', 'files', 'notes', 'collaborators'],
    personas: ['learners', 'creators'],
    bullets: [
      'Upload PDFs and split long files when you need chapters',
      'Add hub notes and personal notes with smart links',
      'Invite editors if you research with other people',
      'Save listed hubs you did not create into collections',
    ],
    note: 'Kahana is not a citation manager. Use it as the place the files and notes live together.',
  },
  {
    slug: 'personal-library',
    title: 'A personal library',
    eyebrow: 'Use case',
    summary: 'Save hubs, follow authors, and keep a For You feed from taste, Aura, and what you actually open.',
    lead: 'You do not have to publish to use Kahana. Browse Library, save what you want to reopen, follow people, and keep a Cognition streak if you want the habit.',
    appHref: APP_SAVED_URL,
    appLabel: 'Open Saved',
    helpSlug: 'get-started-learners',
    features: ['explore', 'saved', 'for-you', 'cognition-streak'],
    personas: ['learners'],
    bullets: [
      'Search and filter Library without creating a hub',
      'Save hubs into collections',
      'Mark For you or Not for you to tune the feed',
      'Opt in to streak reminder emails when you want them',
    ],
    note: 'Saved is yours. It is not a public bookshelf unless you publish a hub.',
  },
  {
    slug: 'video-companion',
    title: 'A library next to YouTube',
    eyebrow: 'Use case',
    summary: 'Keep videos on YouTube. Put the PDF, notes, and club in a Kahana hub so the pack is not a comment thread.',
    lead: 'YouTube is the player and the reach. Kahana is the shelf: extras, discussion in a club, and Aura on the files worth finding.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'adding-files-and-embeds',
    features: ['hubs', 'files', 'clubs', 'preview-reels'],
    personas: ['creators', 'learners'],
    bullets: [
      'Embed or link the video, then add the rest of the pack',
      'Use a preview reel so Library visitors can sample a clip',
      'Pin the hub in a YouTube description or Discord channel',
      'See how it fits on the comparison page',
    ],
    note: 'Kahana is not a replacement for YouTube hosting or ads.',
  },
  {
    slug: 'newsletter-companion',
    title: 'A library after the newsletter',
    eyebrow: 'Use case',
    summary: 'Keep sending email on Substack, beehiiv, or Kit. Give subscribers a hub to open when the issue is a pack, not a post.',
    lead: 'The inbox is for the issue. Kahana is for the files, the series, and the club that should still be there next month.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'hubs',
    features: ['hubs', 'clubs', 'profiles'],
    personas: ['creators', 'authors'],
    bullets: [
      'Link the hub from an issue or a profile',
      'Keep the full series, extras, and files in one place',
      'List on Library if you want people who are not on the list to find it',
      'Paid hub access is optional and separate from newsletter billing',
    ],
    note: 'Kahana does not replace your email tool.',
  },
  {
    slug: 'public-domain-ebooks',
    title: 'Public-domain ebooks',
    eyebrow: 'Use case',
    summary: 'Import a public-domain scan from Internet Archive, then add notes, structure, and a club when the rights allow.',
    lead: 'Archive.org holds the scan. Kahana is where you curate a hub around a work you are allowed to share: cover, notes, and a place to read with other people.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'import-from-internet-archive',
    features: ['archive-import', 'hubs', 'explore'],
    personas: ['authors', 'learners', 'creators'],
    bullets: [
      'Paste an Archive.org URL when redistribution is allowed',
      'Add notes and a reading path',
      'List on Library or keep it private',
      'Confirm content rights before you monetize',
    ],
    note: 'Public domain and open licenses are not the same as “the file is easy to download.” Read Content rights.',
  },
  {
    slug: 'cohorts-and-communities',
    title: 'Cohorts and communities',
    eyebrow: 'Use case',
    summary: 'A club is the group. A hub is the pack. Use both when people need a list, a focus, a feed, and events.',
    lead: 'Kahana Clubs start private. You can keep them as a small cohort, or publish to unlisted or listed. The club does not replace the hub. Members still open the files in a hub.',
    appHref: APP_CLUBS_URL,
    appLabel: 'Open Clubs',
    helpSlug: 'club-feed-and-events',
    features: ['clubs', 'hubs', 'explore'],
    personas: ['clubs', 'creators', 'learners'],
    bullets: [
      'Create a club (always private at first)',
      'Add hubs, files, or links to a shared list',
      'Use feed, events, and a current focus',
      'Request hub access from a private listing when you need it',
    ],
    note: 'A club is not Skool or Discord. Keep live chat where it already works if that is your living room.',
  },
  {
    slug: 'paid-memberships',
    title: 'Sell monthly access',
    eyebrow: 'Use case',
    summary: 'Charge for ongoing hub access. Same 5% fee as a one-time unlock. Stripe handles the card.',
    lead: 'If your pack updates, a monthly price can fit better than a one-time file drop. Buyers unlock the hub while they are subscribed. You can still list free hubs next to paid ones.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'turn-on-paid-access',
    features: ['earning', 'hubs', 'analytics'],
    personas: ['creators', 'buyers'],
    bullets: [
      'Connect Stripe and set monthly access',
      'Optional free trial on the paywall',
      'Analytics show purchasers; Stripe shows payouts',
      'Same 5% Kahana fee on Free and Growth',
    ],
    note: 'This is hub access, not a Patreon-style social feed. The product is the library pack.',
  },
  {
    slug: 'get-discovered',
    title: 'Get discovered in Library',
    eyebrow: 'Use case',
    summary: 'List a hub so people can find it in search, For You, and preview reels. Aura is scarce endorsement, not a like count.',
    lead: 'Exposure on Kahana is a Library listing plus signals people can inspect: views, saves, Aura pathways, and a public profile. You keep YouTube and Instagram for reach. Kahana is where the pack can be found as a library.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Open Library',
    helpSlug: 'list-hub-on-explore',
    features: ['explore', 'preview-reels', 'aura', 'profiles'],
    personas: ['creators', 'authors'],
    bullets: [
      'Cover, title, category, and tags so search can surface you',
      'Optional preview reel on the Library card',
      'Aura and pathways show named endorsement',
      'Stripe Identity check mark on the listing when you verify',
    ],
    note: 'Listing is not a paid boost. For You can weigh Aura as one signal among saves, follows, and taste.',
  },
  {
    slug: 'collaborate-on-hubs',
    title: 'Build with other creators',
    eyebrow: 'Use case',
    summary: 'Invite editors and admins on a hub. Unlimited collaborators on Free and Growth.',
    lead: 'A hub can be a shared shelf: two teachers, a writer and a designer, a cohort lead and a guest. Roles stay on the hub. The listing still has owners people can trust.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'collaborators-and-roles',
    features: ['collaborators', 'hubs', 'messages'],
    personas: ['creators', 'authors'],
    bullets: [
      'Invite editors or admins while the hub is private',
      'Keep roles on the hub, not in a separate workspace app',
      'Message people you already know in Kahana',
      'Follow authors you want to work with next',
    ],
    note: 'Collaborators are not a public creator directory. Follow and profiles are how you find people.',
  },
  {
    slug: 'share-your-profile',
    title: 'A public creator shelf',
    eyebrow: 'Use case',
    summary: 'Your profile is the shelf of hubs you listed. Share one link. People follow you for the next pack.',
    lead: 'Library’s Authors tab is people who contribute hubs. A profile with listed work is how buyers and learners come back without hunting a bio link farm.',
    appHref: APP_CREATE_URL,
    appLabel: 'Create a hub',
    helpSlug: 'profile-and-sharing',
    features: ['profiles', 'following', 'explore'],
    personas: ['creators', 'authors'],
    bullets: [
      'List hubs so they appear on your public profile',
      'Share the profile or a single hub link',
      'Followers can weigh into For You if they opt into that signal',
      'Verified badge after Stripe Identity',
    ],
    note: 'A Kahana profile is not a social network home feed. It is a library identity.',
  },
  {
    slug: 'finish-more-books',
    title: 'Finish more books',
    eyebrow: 'Use case',
    summary: 'Keep a Cognition streak, opt in to reminder emails, and put the book in a club so you are not reading alone.',
    lead: 'Reading more is a habit, not a shopping cart. Kahana gives you a private Learning tab, a UTC-day streak, and optional emails that nudge you back to the book. Clubs hold the group. The hub holds the file.',
    appHref: APP_ANALYTICS_URL,
    appLabel: 'Open Learning analytics',
    helpSlug: 'cognition-streak',
    features: ['cognition-streak', 'analytics', 'clubs', 'saved'],
    personas: ['learners'],
    bullets: [
      'Streak grows on UTC days you visit or open material',
      'Opt in to same-day, weekly, and restart emails',
      'Save hubs and join a book club for cadence',
      'Give Aura when a book actually helped',
    ],
    note: 'Streak is not Aura and not a paywall. Reminders stay off until you save them.',
  },
  {
    slug: 'learn-a-skill',
    title: 'Learn a skill from a hub',
    eyebrow: 'Use case',
    summary: 'Open a pack of videos, PDFs, and checklists on a subject you want to learn. Hubs are flexible. They are not a graded classroom.',
    lead: 'True learning here means you can reopen the files, take notes, and talk in a club. You are not locked into a drip LMS. Preview reels help you sample before you buy.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'get-started-learners',
    features: ['explore', 'files', 'notes', 'preview-reels'],
    personas: ['learners', 'buyers'],
    bullets: [
      'Filter Library for free or paid skill packs',
      'Use reading mode and notes while you work through files',
      'Join a club if a group is going through the same hub',
      'Mark For you so similar packs show up later',
    ],
    note: 'Kahana is not Teachable. If you need quizzes and certificates, keep that engine and list a companion hub here.',
  },
  {
    slug: 'unlock-paid-hubs',
    title: 'Unlock paid tools and packs',
    eyebrow: 'Use case',
    summary: 'Buy access to a hub when the creator priced it. Preview first. One-time or monthly, depending on the listing.',
    lead: 'Helpful digital products on Kahana are hubs: templates, workshops, ebooks, kits. You see the listing, often a preview reel, then Stripe checkout. After that the hub opens like any other hub you can access.',
    appHref: APP_LIBRARY_URL,
    appLabel: 'Browse Library',
    helpSlug: 'buying-and-access',
    features: ['explore', 'earning', 'preview-reels', 'saved'],
    personas: ['buyers', 'learners'],
    bullets: [
      'Filter for paid hubs and read what is inside',
      'Pay once or monthly, depending on the creator',
      'Cancel monthly access from your account when you need to',
      'Save free hubs the same way. Paid is optional.',
    ],
    note: 'Kahana’s 5% is the creator’s marketplace fee, not a fee you pay on top as a separate Kahana subscription to browse.',
  },
  {
    slug: 'meet-people',
    title: 'Meet people in clubs and hubs',
    eyebrow: 'Use case',
    summary: 'Join a club, follow authors, and talk in the club feed. Request access when a listed pack is still private.',
    lead: 'Meeting people on Kahana is around the material: a club wish list, a focus book, events, comments. Direct messages exist with privacy controls. This is not a dating app or a global chat room.',
    appHref: APP_CLUBS_URL,
    appLabel: 'Open Clubs',
    helpSlug: 'clubs',
    features: ['clubs', 'following', 'messages', 'explore'],
    personas: ['learners', 'clubs'],
    bullets: [
      'Join listed clubs or request to join',
      'Vote on what to read or watch next',
      'Follow authors whose hubs you want to see again',
      'Use message privacy settings if you do not want open DMs',
    ],
    note: 'Clubs start private. Listed clubs are still groups around a list, not a public square for everyone on Kahana.',
  },
  {
    slug: 'learn-in-depth',
    title: 'Understand a topic in depth',
    eyebrow: 'Use case',
    summary: 'Notes, discussion, and a flexible hub beat a one-size course. Aura helps you see what other people found worth scarce attention.',
    lead: 'Understanding is slower than a feed. A hub can hold the source files, your notes, and a club talking through the same path. Aura pathways show who endorsed a file, not a black-box like count.',
    appHref: APP_NOTES_URL,
    appLabel: 'Open Notes',
    helpSlug: 'notes',
    features: ['notes', 'aura-pathways', 'clubs', 'hubs'],
    personas: ['learners', 'authors'],
    bullets: [
      'Write hub notes and personal notes with smart links',
      'Inspect Aura on a hub or file when you want named context',
      'Use a club if interpretation matters as much as the PDF',
      'Taste marks train For You away from noise',
    ],
    note: 'Aura is not a ranking of truth. It is scarce, named recognition you can inspect.',
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
    tags: ['feature:for-you', 'feature:explore', 'persona:learners'],
  },
  'saving-and-collections': {
    section: 'library',
    tags: ['feature:saved', 'feature:explore', 'persona:learners'],
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
    tags: ['feature:files', 'feature:hubs', 'persona:creators', 'persona:learners'],
  },
  'import-from-internet-archive': {
    section: 'hubs-and-files',
    tags: ['feature:archive-import', 'feature:hubs', 'use-case:selling-ebooks', 'persona:authors'],
  },
  'list-hub-on-explore': {
    section: 'hubs-and-files',
    tags: ['feature:explore', 'feature:hubs', 'persona:creators'],
  },
  'collaborators-and-roles': {
    section: 'hubs-and-files',
    tags: ['feature:collaborators', 'feature:hubs', 'persona:creators'],
  },
  clubs: {
    section: 'clubs',
    tags: ['feature:clubs', 'use-case:book-clubs', 'persona:clubs', 'persona:learners'],
  },
  'messages-and-privacy': {
    section: 'trust-and-account',
    tags: ['feature:messages', 'persona:learners', 'persona:creators'],
  },
  notifications: {
    section: 'trust-and-account',
    tags: ['feature:notifications', 'persona:learners', 'persona:creators'],
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
    tags: [
      'feature:aura',
      'feature:aura-pathways',
      'feature:aura-and-trust',
      'persona:learners',
    ],
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
  notes: {
    section: 'hubs-and-files',
    tags: ['feature:notes', 'feature:hubs', 'persona:creators', 'persona:learners'],
  },
  following: {
    section: 'library',
    tags: ['feature:following', 'persona:learners'],
  },
  'cognition-streak': {
    section: 'library',
    tags: ['feature:cognition-streak', 'persona:learners'],
  },
  'learning-analytics': {
    section: 'library',
    tags: ['feature:analytics', 'feature:cognition-streak', 'persona:learners'],
  },
  'club-feed-and-events': {
    section: 'clubs',
    tags: ['feature:clubs', 'use-case:book-clubs', 'persona:clubs', 'persona:learners'],
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

export const FEATURE_AUDIENCES = [
  { id: 'all', label: 'All' },
  { id: 'creator', label: 'Creators' },
  { id: 'learner', label: 'Learners' },
];

export function parseFeatureAudience(raw) {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value === 'creator' || value === 'learner' ? value : 'all';
}

export function filterFeaturesByAudience(audience, items = FEATURES) {
  if (!audience || audience === 'all') return items;
  return items.filter((item) => (item.audiences || []).includes(audience));
}

export function filterFeatures(items = FEATURES, { audienceId = 'all', query = '' } = {}) {
  const byAudience = filterFeaturesByAudience(audienceId, items);
  const q = (query || '').trim().toLowerCase();
  if (!q) return byAudience;
  return byAudience.filter((item) => {
    const hay = `${item.title} ${item.summary} ${item.lead || ''} ${(item.bullets || []).join(' ')}`.toLowerCase();
    return hay.includes(q);
  });
}

export function getPersona(slug) {
  return PERSONA_BY_SLUG[slug] || null;
}

export function getUseCase(slug) {
  return USE_CASE_BY_SLUG[slug] || null;
}

export const USE_CASE_AUDIENCE_BY_SLUG = {
  'book-clubs': ['learner'],
  'selling-digital-products': ['creator'],
  'selling-ebooks': ['creator'],
  'selling-courses': ['creator'],
  workshops: ['creator'],
  playbooks: ['creator'],
  journals: ['creator', 'learner'],
  'study-and-research': ['creator', 'learner'],
  'personal-library': ['learner'],
  'video-companion': ['creator', 'learner'],
  'newsletter-companion': ['creator'],
  'public-domain-ebooks': ['creator', 'learner'],
  'cohorts-and-communities': ['creator'],
  'paid-memberships': ['creator'],
  'get-discovered': ['creator'],
  'collaborate-on-hubs': ['creator'],
  'share-your-profile': ['creator'],
  'finish-more-books': ['learner'],
  'learn-a-skill': ['learner'],
  'unlock-paid-hubs': ['learner'],
  'meet-people': ['learner'],
  'learn-in-depth': ['learner'],
};

export function audiencesForUseCase(item) {
  return USE_CASE_AUDIENCE_BY_SLUG[item.slug] || ['creator', 'learner'];
}

export function filterUseCases(items = USE_CASES, { audienceId = 'all', query = '' } = {}) {
  const q = (query || '').trim().toLowerCase();
  return items.filter((item) => {
    if (audienceId && audienceId !== 'all' && !audiencesForUseCase(item).includes(audienceId)) {
      return false;
    }
    if (!q) return true;
    const hay = `${item.title} ${item.summary} ${item.lead || ''} ${(item.bullets || []).join(' ')}`.toLowerCase();
    return hay.includes(q);
  });
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
  ebook: ['e-book', 'pdf', 'digital product', 'selling-ebooks', 'public-domain-ebooks'],
  course: ['workshop', 'playbook', 'selling-courses'],
  newsletter: ['substack', 'beehiiv', 'newsletter-companion'],
  youtube: ['video', 'video-companion'],
  research: ['pdf', 'study', 'study-and-research', 'notes'],
  cohort: ['community', 'club', 'cohorts-and-communities'],
  sell: ['monetize', 'paid hub', 'earning', 'digital product'],
  author: ['writer', 'authors'],
  coach: ['creators', 'workshop'],
  student: ['learners', 'learner'],
  trailer: ['preview', 'carousel', 'reel'],
  preview: ['trailer', 'carousel', 'reel'],
  analytics: ['insights', 'stats', 'learning'],
  streak: ['cognition', 'habit'],
  notes: ['notepad', 'smart link'],
  follow: ['following', 'authors'],
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
