/**
 * Platform FAQ for marketing site (home teaser + /faq).
 * Source of truth copy: PLATFORM_FAQ.md
 * Answers may use blank-line breaks for multi-paragraph display.
 */

/** @typedef {{ id: string, question: string, answer: string }} PlatformFaqItem */
/** @typedef {{ id: string, title: string, items: PlatformFaqItem[] }} PlatformFaqSection */

/** @type {PlatformFaqSection[]} */
export const FAQ_SECTIONS = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        id: 'benefits',
        question: 'What are the benefits of Kahana?',
        answer:
          'You get one place to contribute what you know, get discovered, and help others learn.\n\nAs a contributor: publish curated hubs (files, links, notes), list them on Explore, collaborate, earn Aura when people value your work, and turn on paid access later if you want.\n\nAs a seeker: browse high-signal hubs in one catalog, save what matters, and learn without chasing scattered links or DMs.\n\nAura is the community signal that lifts quality so the best contributions rise.',
      },
      {
        id: 'value-prop',
        question: 'What makes Kahana different from everything else?',
        answer:
          'Most tools only do one job. Gumroad sells a link. Linktree points to links. Notion and Drive hold files. None of them is a public library with discovery and community quality signal built in.\n\nKahana starts with contribution and Explore: your hub is the product, people can find it beyond your existing audience, and Aura helps quality rise with people, not only ads or SEO.\n\nPaid access is optional. Sharing and discovery come first. Earning was added because contributors asked for it.',
      },
      {
        id: 'optimize-benefits',
        question: 'How do I optimize the benefits of Kahana?',
        answer:
          'First, don\'t overthink it. Share what you know. When people search, they can find it.\n\nFilenames, hub names, tags, and descriptions all feed the search algorithm, similar to YouTube. Kahana is built to make niche knowledge and expertise more discoverable. The more context you give, the more exposure you get.\n\nThen use analytics and reports to watch view counts, saves, and purchases so you can see what is landing and improve from there.\n\nShort path: share → add clear names, tags, and descriptions → check analytics → keep giving context.',
      },
      {
        id: 'what-is-kahana',
        question: 'What is Kahana?',
        answer:
          'Kahana is a library for curated digital knowledge.\n\nYou contribute hubs of files and links, get discovered on Explore, and earn Aura when people value your work. Seekers browse and learn in one place.\n\nPaid access is optional. We added it later, after users asked to earn from their best hubs.',
      },
      {
        id: 'who-operates',
        question: 'Who operates Kahana?',
        answer: 'Kahana Group Inc.',
      },
      {
        id: 'where-start',
        question: 'Where do I start?',
        answer:
          'Go to app.kahana.io.\n\nIf you want to learn, open Explore. If you want to share, sign up, contribute a hub, and list it when you are ready. You can turn on paid access later if you want.',
      },
      {
        id: 'about-info',
        question: 'Where is company / About information?',
        answer:
          'Visit about.kahana.io.\n\nIn the app, open About from the guest header, or go to Settings & support → Resources when you are logged in.',
      },
      {
        id: 'vs-tools',
        question: 'How is Kahana different from Gumroad, Linktree, or Notion?',
        answer:
          'Gumroad starts from selling. Linktree is light on discovery and hubs. Notion and Drive are great workspaces, but not a public library with community signal.\n\nKahana starts with contribution and discovery, plus Aura. Optional earning came later because contributors asked for it.',
      },
      {
        id: 'can-earn',
        question: 'Can I earn money when people access my hubs?',
        answer:
          'Yes, if you want to.\n\nKahana started as knowledge sharing only. After a user asked to earn when others accessed their top hubs, we added paid access.\n\nWhen you are ready, connect Stripe, set a price, and charge for access. Sharing and discovery still come first.',
      },
    ],
  },
  {
    id: 'creators',
    title: 'For creators',
    items: [
      {
        id: 'what-is-hub',
        question: 'What is a hub?',
        answer:
          'A hub is a curated place for your knowledge: files, links, notes, and optional collaborators.\n\nYou can leave it private, make it public, list it on Explore, and charge for access later if you want.',
      },
      {
        id: 'how-sell',
        question: 'How do I turn on paid access for a hub?',
        answer:
          'Contribute a hub and add your content. Make it public and list it on Explore when it is ready.\n\nTo earn from access, connect Stripe, turn on monetization, and set a one-time or monthly price. Then share your link or get found on Explore.',
      },
      {
        id: 'creator-cost',
        question: 'How much does Kahana cost for creators?',
        answer:
          'Free is $0. You get up to 3 hubs, unlimited collaborators, and files up to about 5 MB. You can still charge for access if you want.\n\nGrowth is $9.99 a month or $99.99 a year. You get unlimited hubs and uploads, live chat support, 100 GB of storage, and files up to 5 GB.\n\nEnterprise is custom, with white-glove support and flexible limits if you need them.\n\nOpen Billing in the app for the latest plan details.',
      },
      {
        id: 'platform-fee',
        question: 'What fee does Kahana take on sales?',
        answer:
          'Kahana takes 5% on hub sales processed through Stripe Connect.\n\nStripe also charges its usual processing fees (often about 2.9% + $0.30 for US cards). Kahana does not hold your funds. Stripe handles payouts.',
      },
      {
        id: 'need-stripe',
        question: 'Do I need Stripe?',
        answer:
          'Only if you want to charge for hub access.\n\nBrowsing, contributing free hubs, and discovering on Explore do not require Stripe.',
      },
      {
        id: 'subscription',
        question: 'Can I charge a subscription?',
        answer:
          'Yes. You can offer a one-time purchase for ongoing hub access, or a monthly subscription. Free trials may be available on hubs that enable them.',
      },
      {
        id: 'collaborate',
        question: 'Can I collaborate with others on a hub?',
        answer:
          'Yes. Invite collaborators with role-based access. Unlimited collaborators are included on Free and Growth.',
      },
      {
        id: 'get-discovered',
        question: 'How do I get discovered?',
        answer:
          'List a public hub on Explore. Keep your creator profile current. Share your profile or hub link.\n\nYou can also earn Aura when the community endorses your hub.',
      },
      {
        id: 'verified-badge',
        question: 'What is a verified creator badge?',
        answer:
          'Creators who complete Stripe Identity verification may show a verified badge on their profile or paywall.\n\nIt helps buyers trust who you are. It is not a ranking guarantee.',
      },
      {
        id: 'adult-content',
        question: 'Is adult content allowed?',
        answer:
          'You can flag a hub as adult content. Those hubs are filtered on Explore.\n\nBuyers must be logged in and verify they are 18+ with their date of birth before they can access them.',
      },
      {
        id: 'fork-hub',
        question: 'Can I fork or duplicate a hub?',
        answer:
          'Where permissions allow, you can duplicate or fork a hub’s structure. Availability depends on product settings.',
      },
    ],
  },
  {
    id: 'buyers',
    title: 'For buyers',
    items: [
      {
        id: 'how-buy',
        question: 'How do I buy a digital product on Kahana?',
        answer:
          'Browse Explore or a creator’s profile, open a hub, and check out on the paywall.\n\nWhen payment succeeds, the hub unlocks in your account.',
      },
      {
        id: 'browse-without-account',
        question: 'Can I browse without an account?',
        answer:
          'Yes for most public hubs on Explore. Adult content and some purchases require login.',
      },
      {
        id: 'after-pay',
        question: 'What do I get after I pay?',
        answer:
          'Access to that hub’s content in your Kahana account.\n\nOne-time purchases usually keep access going. Monthly products need an active subscription.',
      },
      {
        id: 'refunds',
        question: 'How do refunds work?',
        answer:
          'Payments and disputes follow Stripe and Kahana’s terms.\n\nFor help, use in-app Support (/support) or the channels listed in product settings.',
      },
      {
        id: 'payment-secure',
        question: 'Is my payment secure?',
        answer:
          'Checkout runs on Stripe. Kahana does not store your full card number.',
      },
      {
        id: 'free-vs-paid',
        question: 'How do I find free vs paid hubs?',
        answer:
          'On Explore, filter by free or paid, price range, category, or search.',
      },
      {
        id: 'aura-pay',
        question: 'What is Aura? Do I pay for it?',
        answer:
          'Aura is limited. You can give up to 5 Aura per day. It replenishes at midnight UTC.\n\nAura is not money and not crypto. It is endorsement: give it to lift hubs you value, see who gave it, and help the best contributions rise. You cannot give Aura to your own contributions.',
      },
    ],
  },
  {
    id: 'aura',
    title: 'Aura and community',
    items: [
      {
        id: 'what-is-aura',
        question: 'What is Aura?',
        answer:
          'Aura is limited. You can give up to 5 Aura per day. Put it all on one hub or split it across a few. It replenishes at midnight UTC.\n\nAura is not money and not crypto. It is endorsement for contributions you value. See who gave it. Because it is scarce, people give it carefully, which helps the best work rise and makes Kahana a place you can trust to learn.\n\nYou cannot give Aura to your own contributions.',
      },
      {
        id: 'aura-budget',
        question: 'How much Aura can I give?',
        answer:
          'Aura is limited to 5 Aura per day.\n\nYou can put it all on one hub or split it across a few. It replenishes at midnight UTC. You cannot give Aura to your own contributions.',
      },
      {
        id: 'aura-streak',
        question: 'What is an Aura streak?',
        answer:
          'Giving Aura on consecutive days builds a streak in the app. It encourages discovery. It is not a cash reward.',
      },
      {
        id: 'aura-official',
        question: 'Does Aura mean a hub is officially recommended by Kahana?',
        answer:
          'No. Aura is a community signal. Kahana may still curate or moderate listings on its own.',
      },
    ],
  },
  {
    id: 'explore',
    title: 'Explore and discovery',
    items: [
      {
        id: 'what-is-explore',
        question: 'What is Explore?',
        answer:
          'Explore is the public marketplace at /explore.\n\nBrowse hubs or creators, search, and filter by category, price, free or paid, and more.',
      },
      {
        id: 'listing-fee',
        question: 'Do I need to pay to list on Explore?',
        answer:
          'No separate listing fee. You just need to meet public listing requirements.\n\nPlatform and Stripe fees only apply when someone buys a paid hub. Free hubs can still appear when listed.',
      },
      {
        id: 'hub-not-on-explore',
        question: 'Why isn’t my hub on Explore?',
        answer:
          'Common reasons: it is not public or not listed yet, listing requirements are incomplete, visibility or adult settings, or a short indexing delay.\n\nCheck hub settings for Explore readiness.',
      },
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts, privacy, and trust',
    items: [
      {
        id: 'sign-up',
        question: 'How do I sign up?',
        answer:
          'Use email or Google sign-in at app.kahana.io/signup, or choose Sign in → Create account.',
      },
      {
        id: 'get-help',
        question: 'How do I get help?',
        answer:
          'In the app, use Support (/support) or Send feedback from Settings & support.\n\nFor company info, visit about.kahana.io. Growth plans include live chat support.',
      },
      {
        id: 'privacy-terms',
        question: 'Where are Privacy and Terms?',
        answer:
          'Find them in the guest menu, and typically at kahana.io/privacy-policy and kahana.io/terms-and-conditions.',
      },
      {
        id: 'age-verification',
        question: 'How does age verification work for adult hubs?',
        answer:
          'You must be logged in and enter your date of birth. If you are 18+, the server records verification.\n\nThere is no anonymous “I’m 18” unlock.',
      },
    ],
  },
  {
    id: 'billing',
    title: 'Billing and Growth',
    items: [
      {
        id: 'upgrade-growth',
        question: 'When should I upgrade to Growth?',
        answer:
          'Common reasons: you need a 4th hub, Free upload limits feel tight, you need larger files, or you want live chat support.\n\nCompare plans in Billing in the app.',
      },
      {
        id: 'cancel-growth',
        question: 'How do I cancel Growth?',
        answer:
          'Manage your subscription from Billing in settings.\n\nAccess continues through the end of the paid period.',
      },
      {
        id: 'free-still-fee',
        question: 'Do Free creators still pay the 5% marketplace fee?',
        answer:
          'Yes. The 5% fee applies to hub sales on Free and Growth.\n\nGrowth is for higher limits and support. It does not remove the marketplace fee.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical and compatibility',
    items: [
      {
        id: 'browsers',
        question: 'What browsers are supported?',
        answer:
          'Modern browsers like Chrome, Safari, Firefox, and Edge. Use an up-to-date desktop or mobile browser for the best experience.',
      },
      {
        id: 'mobile-app',
        question: 'Is there a native mobile app?',
        answer: 'Kahana is a web app that works well in mobile browsers.',
      },
      {
        id: 'embed',
        question: 'Can I embed Kahana on my own site?',
        answer:
          'The usual path is linking your Kahana profile or hub URL. Deeper embeds and white-label are Enterprise-oriented.',
      },
    ],
  },
];

/** Locked homepage teaser (3 items — keep the full list on /faq). */
export const FAQ_TEASER_IDS = [
  'benefits',
  'value-prop',
  'optimize-benefits',
];

/** Flat list of all FAQ items (for schema). */
export function getAllFaqItems() {
  return FAQ_SECTIONS.flatMap((section) => section.items);
}

/** Homepage teaser subset in locked order. */
export function getFaqTeaserItems() {
  const byId = Object.fromEntries(getAllFaqItems().map((item) => [item.id, item]));
  return FAQ_TEASER_IDS.map((id) => byId[id]).filter(Boolean);
}
