/**
 * Public platform compare — curated snapshot for kahana.io/compare.
 * Not the data-room advisor landscape. Tandem copy only; outbound homepages.
 * Skip adult-only peers. Every row has a website.
 */

export const PLATFORM_COMPARE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'video', label: 'Video' },
  { id: 'community', label: 'Community' },
  { id: 'reading', label: 'Reading' },
  { id: 'newsletters', label: 'Newsletters' },
  { id: 'courses', label: 'Courses' },
  { id: 'storefronts', label: 'Storefronts' },
  { id: 'memberships', label: 'Memberships' },
  { id: 'audio', label: 'Audio' },
];

/** @typedef {{ id: string, name: string, website: string, category: string, blurb: string, withKahana: string }} ComparePlatform */

/** @type {ComparePlatform[]} */
export const COMPARE_PLATFORMS = [
  {
    id: 'youtube',
    name: 'YouTube',
    website: 'https://www.youtube.com',
    category: 'video',
    blurb: 'Long-form video, search, subscriptions, and comments at scale.',
    withKahana:
      'Keep videos on YouTube. Put them in a Kahana hub or club (embed when you can) so people watch with a library around them, discuss in the club, and give Aura to the ones worth finding.',
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    website: 'https://vimeo.com',
    category: 'video',
    blurb: 'Hosted video for creators and teams who want a quieter player than YouTube.',
    withKahana:
      'Host on Vimeo if that is your player. List the same work in a Kahana hub so it sits next to ebooks and files, and so clubs can use it as shared curriculum.',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    website: 'https://www.tiktok.com',
    category: 'video',
    blurb: 'Short video reach. Discovery happens in the feed.',
    withKahana:
      'TikTok is the spark. Kahana is the shelf: put the full session, PDF, or playlist in a hub, then point your bio or a pinned comment at Kahana for people who want the whole thing.',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    website: 'https://www.instagram.com',
    category: 'video',
 blurb: 'Visual feed, Reels, and Stories, audience lives in the app.',
    withKahana:
      'Keep posting on Instagram. Add a Kahana hub or club link in bio so followers who want depth land in the library instead of a scattered Drive folder.',
  },
  {
    id: 'discord',
    name: 'Discord',
    website: 'https://discord.com',
    category: 'community',
 blurb: 'Live chat, voice, and servers, the living-room conversation.',
    withKahana:
      'Discord is the talk. Kahana is the shelf. Pin a club or hub link in a channel; read or watch on Kahana; discuss live on Discord; give Aura so the best material rises.',
  },
  {
    id: 'slack',
    name: 'Slack',
    website: 'https://slack.com',
    category: 'community',
    blurb: 'Workplace chat and channels for teams.',
    withKahana:
      'Keep Slack for day-to-day work chat. Put the reading list, recordings, and files in a Kahana hub or club so the team has one library instead of lost threads.',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    website: 'https://telegram.org',
    category: 'community',
    blurb: 'Fast groups and channels, including large broadcasts.',
    withKahana:
      'Broadcast on Telegram. Point members to a Kahana hub for the actual files, videos, and structure so the group is not only a scroll of messages.',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    website: 'https://www.whatsapp.com',
    category: 'community',
    blurb: 'Private chats and groups people already use every day.',
    withKahana:
      'Keep the group chat on WhatsApp. Share a Kahana club or hub link so the materials live in one place people can reopen later.',
  },
  {
    id: 'skool',
    name: 'Skool',
    website: 'https://www.skool.com',
    category: 'community',
    blurb: 'Paid groups with a classroom, feed, and live calls.',
    withKahana:
 'Run the cohort on Skool if that is your community home. List a companion hub on Kahana so the library (ebooks, videos, files) is public and discoverable on Explore.',
  },
  {
    id: 'nas-io',
    name: 'Nas.io',
    website: 'https://nas.com',
    category: 'community',
    blurb: 'Community and creator storefronts, including paid groups.',
    withKahana:
 'Keep Nas for community ops if that is where members already are. Put the knowledge pack on Kahana so it is a library listing. Not only a group behind a wall.',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    website: 'https://www.reddit.com',
    category: 'community',
    blurb: 'Public forums organized by topic.',
    withKahana:
      'Reddit is the town square. When a thread needs a real pack of files or a guided path, point people to a Kahana hub instead of a pile of comments and Drive links.',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    website: 'https://www.linkedin.com',
    category: 'community',
    blurb: 'Professional network, posts, and newsletters.',
    withKahana:
      'Post and network on LinkedIn. Link your Kahana profile or hub so people who want the full playbook, templates, or course pack can open it in the library.',
  },
  {
    id: 'goodreads',
    name: 'Goodreads',
    website: 'https://www.goodreads.com',
    category: 'reading',
    blurb: 'Book tracking, reviews, and reading lists.',
    withKahana:
      'Track books on Goodreads. Run the club and the files (notes, PDFs, companion video) on Kahana so discussion sits next to the actual materials.',
  },
  {
    id: 'amazon-kindle',
    name: 'Kindle',
    website: 'https://www.amazon.com/kindle-dbs/fd/kcp',
    category: 'reading',
    blurb: 'Amazon’s ebook store, devices, and Kindle Unlimited.',
    withKahana:
 'People can still buy and read on Kindle. On Kahana you can add notes, extras, and a club around the same book, and list companion files the Kindle store does not hold.',
  },
  {
    id: 'storygraph',
    name: 'The StoryGraph',
    website: 'https://app.thestorygraph.com/',
    category: 'reading',
    blurb: 'Reading tracker with mood and genre stats.',
    withKahana:
      'Keep your reading log on StoryGraph. Use Kahana for the club, the PDFs, and the discussion so tracking and the library stay complementary.',
  },
  {
    id: 'medium',
    name: 'Medium',
    website: 'https://medium.com',
    category: 'reading',
    blurb: 'Essay platform and membership for writers and readers.',
    withKahana:
      'Publish essays on Medium if that is your writing home. Collect the series, extras, and paid pack as a Kahana hub so it lives as a library, not only a feed of posts.',
  },
  {
    id: 'internet-archive',
    name: 'Internet Archive',
    website: 'https://archive.org',
    category: 'reading',
    blurb: 'Public digital library of books, audio, and video.',
    withKahana:
 'Archive.org holds the scan. Kahana is where you curate a hub around a public-domain work (notes, structure, and a club) when the rights allow.',
  },
  {
    id: 'substack',
    name: 'Substack',
    website: 'https://substack.com',
    category: 'newsletters',
    blurb: 'Newsletter publishing, email, and paid subscriptions.',
    withKahana:
      'Keep the inbox on Substack. Put the book-length work, extras, and club on Kahana, and link Substack from your Kahana profile so each surface sends people to the other.',
  },
  {
    id: 'beehiiv',
    name: 'beehiiv',
    website: 'https://www.beehiiv.com',
    category: 'newsletters',
    blurb: 'Newsletter infrastructure and monetization for publishers.',
    withKahana:
 'Send email on beehiiv. Host the library (files, video, club) on Kahana so subscribers have a place to go after the issue, not only an archive of emails.',
  },
  {
    id: 'kit',
    name: 'Kit',
    website: 'https://kit.com',
    category: 'newsletters',
    blurb: 'Creator email (formerly ConvertKit) for newsletters and automations.',
    withKahana:
      'Keep email in Kit. Link issues to a Kahana hub when the work is a pack of files or a club, not a single post.',
  },
  {
    id: 'teachable',
    name: 'Teachable',
    website: 'https://teachable.com',
    category: 'courses',
    blurb: 'Course hosting, enrollment, drip, and checkout.',
    withKahana:
 'Run the course engine on Teachable. List a companion hub on Kahana for Explore, clubs, and Aura, students still enroll on Teachable; discussion and discovery can live in the library.',
  },
  {
    id: 'kajabi',
    name: 'Kajabi',
    website: 'https://kajabi.com',
    category: 'courses',
    blurb: 'All-in-one courses, memberships, email, and landing pages.',
    withKahana:
      'Keep Kajabi as the teaching business. Dual-list a hub on Kahana so the course sits in a public library next to books and video, with a club for the cohort.',
  },
  {
    id: 'udemy',
    name: 'Udemy',
    website: 'https://www.udemy.com',
    category: 'courses',
    blurb: 'Large course marketplace with search, ratings, and enrollment.',
    withKahana:
      'Keep marketplace volume on Udemy. Put a companion hub or club on Kahana so the same teaching sits beside ebooks and long-form video, and so classmates can talk in a club.',
  },
  {
    id: 'coursera',
    name: 'Coursera',
    website: 'https://www.coursera.org',
    category: 'courses',
    blurb: 'University-backed courses and certificates.',
    withKahana:
      'Take or teach the formal course on Coursera. Use Kahana for the unofficial reading list, notes, and a club of people going through it together.',
  },
  {
    id: 'podia',
    name: 'Podia',
    website: 'https://www.podia.com',
    category: 'courses',
    blurb: 'Courses, digital downloads, and memberships for indie teachers.',
    withKahana:
      'Sell and host on Podia if that is your school. List the same pack on Kahana when you want Explore discovery and a club around the materials.',
  },
  {
    id: 'gumroad',
    name: 'Gumroad',
    website: 'https://gumroad.com',
    category: 'storefronts',
    blurb: 'Simple digital checkout and file delivery from a link.',
    withKahana:
      'Gumroad is fast link checkout. Kahana is the library listing: same product in a hub people can find on Explore, use in a club, and mark with Aura.',
  },
  {
    id: 'stan',
    name: 'Stan Store',
    website: 'https://stan.store',
    category: 'storefronts',
    blurb: 'Mobile creator storefront tuned for Instagram and TikTok traffic.',
    withKahana:
 'Stan is the bio checkout. Add a Kahana hub or club link on Stan so people who want the full library (not only a one-tap product) have a place to land.',
  },
  {
    id: 'linktree',
    name: 'Linktree',
    website: 'https://linktr.ee',
    category: 'storefronts',
    blurb: 'One URL for a list of links from a social bio.',
    withKahana:
      'Keep Linktree as the door. Feature your Kahana hub or club as a link so serious learners walk into the library, not only another outbound click.',
  },
  {
    id: 'etsy',
    name: 'Etsy',
    website: 'https://www.etsy.com',
    category: 'storefronts',
    blurb: 'Marketplace for crafts and digital downloads.',
    withKahana:
 'Sell crafts and printables on Etsy. Put knowledge packs (workshops, templates, guided journals) in Kahana hubs when you want a library listing and a club, not a craft stall.',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    website: 'https://www.patreon.com',
    category: 'memberships',
    blurb: 'Recurring membership, tiers, and posts for supporting a creator.',
    withKahana:
 'Keep Patreon for fans who already live there. List related work on Kahana (one-time or monthly hub access) so it can be found in the library and used in clubs, dual listing, not either/or.',
  },
  {
    id: 'kofi',
    name: 'Ko-fi',
    website: 'https://ko-fi.com',
    category: 'memberships',
    blurb: 'Tips, memberships, and shop for creators.',
    withKahana:
 'Take tips on Ko-fi. Put the actual library (files, video, club) on Kahana so supporters have something to open besides a tip jar.',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    website: 'https://open.spotify.com',
    category: 'audio',
    blurb: 'Music, podcasts, and audiobooks in one player.',
    withKahana:
 'Listen on Spotify. Build a Kahana hub around a podcast season or playlist (show notes, PDFs, and a club) so audio is not stranded without the rest of the pack.',
  },
  {
    id: 'audible',
    name: 'Audible',
    website: 'https://www.audible.com',
    category: 'audio',
    blurb: 'Audiobook store and app, mostly Amazon’s catalog.',
    withKahana:
      'Listen on Audible. Use Kahana for the club, companion notes, and extras the audiobook app does not hold.',
  },
];

/** Creator vs learner/viewer use cases for the comparison table filters. */
export const COMPARE_AUDIENCES = [
  { id: 'all', label: 'All' },
  { id: 'creator', label: 'Creators' },
  { id: 'learner', label: 'Learners' },
];

const AUDIENCE_BY_ID = {
  youtube: ['creator', 'learner'],
  vimeo: ['creator'],
  tiktok: ['creator', 'learner'],
  instagram: ['creator', 'learner'],
  discord: ['creator', 'learner'],
  slack: ['creator', 'learner'],
  telegram: ['creator', 'learner'],
  whatsapp: ['creator', 'learner'],
  skool: ['creator'],
  'nas-io': ['creator'],
  reddit: ['learner'],
  linkedin: ['creator', 'learner'],
  goodreads: ['learner'],
  'amazon-kindle': ['learner'],
  storygraph: ['learner'],
  medium: ['creator', 'learner'],
  'internet-archive': ['learner', 'creator'],
  substack: ['creator'],
  beehiiv: ['creator'],
  kit: ['creator'],
  teachable: ['creator'],
  kajabi: ['creator'],
  udemy: ['learner', 'creator'],
  coursera: ['learner', 'creator'],
  podia: ['creator'],
  gumroad: ['creator'],
  stan: ['creator'],
  linktree: ['creator'],
  etsy: ['creator'],
  patreon: ['creator'],
  kofi: ['creator'],
  spotify: ['learner'],
  audible: ['learner'],
};

export function audiencesForPlatform(platform) {
  return AUDIENCE_BY_ID[platform.id] || ['creator', 'learner'];
}

export function filterComparePlatforms(platforms, { categoryId, query, audienceId }) {
  const q = (query || '').trim().toLowerCase();
  return platforms.filter((p) => {
    if (categoryId && categoryId !== 'all' && p.category !== categoryId) return false;
    if (audienceId && audienceId !== 'all' && !audiencesForPlatform(p).includes(audienceId)) {
      return false;
    }
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.blurb.toLowerCase().includes(q) ||
      p.withKahana.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });
}

export function categoryLabel(categoryId) {
  return PLATFORM_COMPARE_CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId;
}
