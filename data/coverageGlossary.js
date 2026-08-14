/**
 * Shared glossary for Kahana vs platform coverage rows.
 * Yes = the platform has this as a first-class product job, not something you could hunt for.
 */
export const COVERAGE_GLOSSARY = [
  {
    fragmentId: 'ebook-reading',
    label: 'Ebook',
    definition:
      'Yes if you can easily get and consume ebooks on the platform (free or paid) as a first-class product: open, buy, borrow, or read without hunting.',
    yesExample: 'Kindle, Goodreads, Wattpad, Project Gutenberg',
    noExample: 'Discord (a server might share a PDF; that is not an ebook product)',
  },
  {
    fragmentId: 'short-form-video',
    label: 'Short-form video',
    definition:
      'Yes if you can easily consume short-form video as a first-class surface (For You, Reels, Shorts).',
    yesExample: 'TikTok, Instagram Reels, YouTube Shorts',
    noExample: 'Twitch clips buried in a live-stream product',
  },
  {
    fragmentId: 'long-form-video',
    label: 'Long-form video',
    definition:
      'Yes if you can easily watch creator / UGC long-form video (or specialty long video) as a core surface. Course lectures belong under Courses. Hollywood catalogs belong under Series/Films.',
    yesExample: 'YouTube, Vimeo, Twitch VODs, Nebula',
    noExample: 'Udemy lecture video (that is Courses)',
  },
  {
    fragmentId: 'series-films-streaming',
    label: 'Series/Films',
    definition:
      'Yes if you can easily watch series and films as an SVOD / catalog entertainment product.',
    yesExample: 'Netflix, Disney+, Crunchyroll',
    noExample: 'YouTube (some movies exist; it is not an SVOD catalog)',
  },
  {
    fragmentId: 'courses-learning',
    label: 'Courses',
    definition:
      'Yes if you can easily take or browse structured courses as a first-class product.',
    yesExample: 'Udemy, Coursera, Teachable, Kajabi',
    noExample: 'YouTube tutorials (helpful, not a course catalog)',
  },
  {
    fragmentId: 'newsletters-written',
    label: 'Newsletters',
    definition:
      'Yes if you can easily read or subscribe to newsletters / creator writing as a first-class product.',
    yesExample: 'Substack, beehiiv, Medium, Ghost',
    noExample: 'X posts (not a newsletter product)',
  },
  {
    fragmentId: 'audio-listening',
    label: 'Audio',
    definition:
      'Yes if you can easily listen to music, podcasts, or audiobooks as a first-class product.',
    yesExample: 'Spotify, Amazon Music, Audible, YouTube Music',
    noExample: 'Discord voice chat',
  },
  {
    fragmentId: 'creator-monetization',
    label: 'Memberships',
    definition:
      'Yes if a creator or seller can accept payments from others and make money through the platform: checkout, fan subscriptions, tips, ads, shop, or creator funds. Not only a classic Patreon-style membership product.',
    yesExample: 'YouTube, Instagram, Patreon, Udemy, Gumroad, Shopify',
    noExample: 'Netflix, Goodreads, Slack, Wikipedia (you don’t earn as a typical creator)',
  },
  {
    fragmentId: 'messaging-community',
    label: 'Community & Messaging',
    definition:
      'Yes if you can create or join a group, community, or club, including group chats, Groups, subreddits, community tabs, discussion boards, or community feeds. A one-off comment on a single video or listing is not the bar; a durable place for the group to talk is.',
    yesExample: 'Discord, WhatsApp, Facebook Groups, YouTube Community, Reddit, LinkedIn Groups, Kajabi Community, Instagram',
    noExample: 'Netflix, Kindle, Spotify (no group/community space to create and talk in)',
  },
  {
    fragmentId: 'online-storefront',
    label: 'Storefronts',
    definition:
      'Yes if the product gives a creator a custom storefront or site that can take the place of building their own website (bio page, creator site, branded shop). Not a shop tab on someone else’s multi-seller marketplace.',
    yesExample: 'Linktree, Kajabi, Stan, Beacons, Shopify',
    noExample: 'Udemy instructor page, Etsy shop on Etsy’s marketplace',
  },
  {
    fragmentId: 'digital-marketplaces',
    label: 'Marketplaces',
    definition:
      'Yes if a typical person can search and shop a catalog of offerings from many sellers: courses, books, digital goods, etc. Storefront software (Shopify, WooCommerce) is not a marketplace unless shoppers browse many sellers there.',
    yesExample: 'Udemy (courses), Etsy, Gumroad, Kindle Store, Creative Market',
    noExample: 'Kajabi or Linktree (your site, not a public multi-seller catalog)',
  },
]

export const COVERAGE_GLOSSARY_BY_ID = Object.fromEntries(
  COVERAGE_GLOSSARY.map((item) => [item.fragmentId, item]),
)

export function getCoverageGlossaryEntry(fragmentId, fallback = {}) {
  return COVERAGE_GLOSSARY_BY_ID[fragmentId] || fallback
}
