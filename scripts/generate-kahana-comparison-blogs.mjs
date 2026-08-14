#!/usr/bin/env node
/**
 * Generate Kahana-vs-<company> comparison blog posts from the landscape catalog.
 *
 * Usage:
 *   node scripts/snapshot-company-landscape.mjs
 *   node scripts/generate-kahana-comparison-blogs.mjs
 *
 * Handmade posts (kept, not overwritten):
 *   kahana-vs-gumroad-stan, kahana-vs-linktree, kahana-vs-notion-google-drive
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const CATALOG_PATH = path.join(ROOT, 'data', 'company-landscape-catalog.json')
const BLOG_DIR = path.join(ROOT, 'data', 'blog')
const INDEX_PATH = path.join(ROOT, 'data', 'blog-index.js')

const SKIP_IDS = new Set(['gumroad', 'stan', 'linktree'])
const SKIP_SLUGS = new Set([
  'kahana-vs-gumroad-stan',
  'kahana-vs-linktree',
  'kahana-vs-notion-google-drive',
])

const ADAM = {
  name: 'Adam Kershner',
  role: 'Founder',
  bio: '',
  linkedinProfile: 'https://www.linkedin.com/in/adam-kershner/',
  avatar: '/assets/headshots/adam_kershner.jpg',
}

const CATEGORIES = ['Comparisons', 'Creators', 'Product']

const KAHANA = {
  coreJob: 'Curated hubs + Explore library + Clubs',
  discovery: 'Browse, search, categories, and creator profiles',
  content: 'Multi-format hubs (files, video, PDFs, links, notes)',
  proof: 'Aura, views, saves — not star-rating piles',
  commerce: 'Optional Stripe Connect; Kahana 5% + Stripe processing',
  collaboration: 'Roles inside a hub; Clubs for shared reading',
}

const ROLE_COPY = {
  audio: {
    coreJob: 'Audio streaming / listening at scale',
    whenTheyWin:
      'You want a dedicated listening app, playlists, and the catalog people already pay a subscription for.',
    whenKahana:
      'You want a specific album, podcast, or lecture series to live next to notes, PDFs, and discussion, not only in a music feed.',
    together:
      'Keep listening on {name}, where the catalog and players are strongest. Put episode lists, companion notes, and Club discussion on Kahana so assigned audio is a library item, not only a For You row.',
    kahanaJob: 'A library shelf for the audio you actually assign, plus Clubs to talk about it.',
    synergy: true,
  },
  'community-messaging': {
    coreJob: 'Real-time chat, groups, and community velocity',
    whenTheyWin:
      'The job is hanging out, announcements, and live conversation, not packaging knowledge into something strangers can browse later.',
    whenKahana:
      'Chat is burying the syllabus. You need a shelf, a reading list, and a Club room that still exists after the thread scrolls away.',
    together:
      'Keep live conversation on {name}. Pin a Kahana hub or Club link in a channel, discuss live there, and assign the next ebook, video, or course from Kahana so the syllabus is not buried in the thread.',
    kahanaJob: 'The shelf and reading list beside the chat, not another inbox.',
    synergy: true,
  },
  'course-learning': {
    coreJob: 'Course hosting, drip, enrollment, and lesson checkout',
    whenTheyWin:
      'You are running a full course engine: drip, quizzes, student progress, and checkout that already works.',
    whenKahana:
      'You want that course discovered next to ebooks and video hubs, with a Club for cohort discussion, not only a storefront URL you already have to promote.',
    together:
      'Keep the course engine on {name} for drip, quizzes, and enrollment. Also list or link that teaching on Kahana so Explore, Clubs, and Aura can give it another place to be found. {name} stays the LMS; Kahana is another surface for exposure.',
    kahanaJob: 'Discovery + cohort discussion around teaching you already run elsewhere.',
    synergy: true,
  },
  ebook: {
    coreJob: 'Reading, catalogs, tracking, or ebook storefronts',
    whenTheyWin:
      'You need a dedicated reader, a giant store, or social tracking of everything you have ever read.',
    whenKahana:
      'A specific book (or a small stack) is the curriculum for a Club, with companion files, notes, and discussion, not a personal Goodreads-style shelf of thousands of titles.',
    together:
      'Keep the reader or tracker you already use. Put the Club pick, discussion questions, and related files on Kahana so the book is a shared library item, not only a private progress bar.',
    kahanaJob: 'Clubs and hubs around the books you actually read together.',
    synergy: true,
  },
  'long-form': {
    coreJob: 'Long-form video hosting, reach, and subscriptions',
    whenTheyWin:
      'You need distribution, search, ads, or a native player at platform scale.',
    whenKahana:
      'A specific video (or a short series) is curriculum for a Club, watched in library context, discussed with people you chose, not a public comment feed.',
    together:
      'Keep hosting and distribution on {name}. Put the lectures or series that deserve a shelf into Kahana hubs, ideally via embed, then discuss them in a Club. Reach stays on {name}; Kahana is where the work is findable after the tab is closed, and where you can grow an audience around it.',
    kahanaJob: 'The club layer and discovery signal for learning from video.',
    synergy: true,
  },
  marketplace: {
    coreJob: 'Selling digital (or physical) goods through a store or marketplace',
    whenTheyWin:
      'The SKU is the product: a file, a theme, a craft listing, or a store you already operate.',
    whenKahana:
      'The product is a curated collection people open, hubs with artifacts, collaborators, and optional paywalls, and you want strangers to find it in a library.',
    together:
      'Keep {name} for SKUs you already sell well. Put the curated collection on Kahana: a public hub on Explore, Aura as signal, and Stripe when you want a second place people can find and pay.',
    kahanaJob: 'Marketplace discovery for curated hubs, not another SKU grid.',
    synergy: true,
  },
  'membership-fan': {
    coreJob: 'Recurring membership, patronage, or exclusive fan content',
    whenTheyWin:
      'Fans already live on that membership surface and prefer tiers, posts, or patronage-native extras.',
    whenKahana:
      'You want the same (or related) work in a library: Explore discovery, Clubs, Aura, and one-time or monthly hub access without rebuilding the whole fan stack.',
    together:
      'Keep patronage-native fans on {name}. Dual-list related work on Kahana so people who browse libraries can find it, join a Club, and pay there too without rebuilding your whole fan stack.',
    kahanaJob: 'Library discovery and flexible hub pricing beside patronage.',
    synergy: true,
  },
  'newsletter-writing': {
    coreJob: 'Writing, email, and subscriber publishing',
    whenTheyWin:
      'The inbox is the product: essays, archives, and paid subscriptions you already send on a cadence.',
    whenKahana:
      'A post or series should become a hub people can open, discuss in a Club, and find on Explore, not only an email they missed.',
    together:
      'Keep {name} as distribution. Link a Kahana hub or Club as the deep destination: archives, files, and discussion that survive a missed email.',
    kahanaJob: 'A durable library home for writing you already publish.',
    synergy: true,
  },
  streaming: {
    coreJob: 'Series and films streaming (SVOD)',
    whenTheyWin:
      'You want the licensed catalog, apps, and living-room playback those services are built for.',
    whenKahana:
      'A specific film or series is a Club curriculum with notes and discussion, not a replacement for Netflix-class catalogs.',
    together:
      'Watch on the streamer. Use Kahana for the watch party syllabus: why this title, companion readings, and Club conversation.',
    kahanaJob: 'Clubs around titles, not another SVOD app.',
    synergy: false,
  },
  'short-form': {
    coreJob: 'Short-form video reach and social discovery',
    whenTheyWin:
      'The job is reach, trends, and native social distribution.',
    whenKahana:
      'A clip is a trailer for a hub, the durable collection people open after the swipe. You want a destination, not only a For You page.',
    together:
      'Keep posting on {name} for reach. Repurpose the clips that should last: turn a series into a hub, or point your bio and pinned comment at a Kahana profile. You can grow an audience on Kahana as well as on the feed.',
    kahanaJob: 'The room behind the swipe: hubs, Clubs, optional paywalls.',
    synergy: true,
  },
  'storefront-commerce': {
    coreJob: 'Link-in-bio, landing pages, or creator storefronts',
    whenTheyWin:
      'You only need a door: route followers to many tools, or a thin storefront you already know.',
    whenKahana:
      'The destination should be hubs people open, find on Explore, and optionally pay for, not twelve exits and no room behind them.',
    together:
      'Keep {name} as the door that routes followers to many tools. Add Kahana as what they open: a profile and hubs, listed on Explore, with optional paywalls. Put Kahana as the main learn or buy link on {name} so the bio is not twelve exits and no room behind them.',
    kahanaJob: 'Profile + hubs as the destination behind the link.',
    synergy: true,
  },
  'knowledge-reference': {
    coreJob: 'Reference, Q&A, or encyclopedia-scale knowledge',
    whenTheyWin:
      'You need a giant public reference or Q&A graph that is not packaged as a creator hub.',
    whenKahana:
      'Expertise should live as a curated hub with an owner, optional collaborators, Aura, and a path to paid access, not only an anonymous page.',
    together:
      'Use reference sites for lookup. Put teachable collections, the stack you actually want people to work through, on Kahana.',
    kahanaJob: 'Owned, curated hubs rather than anonymous reference pages.',
    synergy: false,
  },
  'discovery-search': {
    coreJob: 'Web-scale search and indexing',
    whenTheyWin:
      'You need to find anything on the open web.',
    whenKahana:
      'You want a trusted library of hubs with owners, Aura, and optional commerce, not a general-purpose index of the whole internet.',
    together:
      'Google remains how people find the public web, including Kahana pages. Kahana is the catalog once they want curated knowledge, not another ten blue links.',
    kahanaJob: 'A library catalog, not a replacement for web search.',
    synergy: false,
  },
  'content-platform': {
    coreJob: 'Broad content platform',
    whenTheyWin: 'The incumbent already owns the format and the audience.',
    whenKahana:
      'You want a multi-format hub people can find in a library, discuss in Clubs, and optionally pay for.',
    together:
      'Keep {name} for reach. Use Kahana for the curated collection and Club around the work that deserves a shelf, and to grow an audience there as well.',
    kahanaJob: 'Curated hubs beside the feed.',
    synergy: true,
  },
}

const DEFAULT_ROLE = ROLE_COPY['content-platform']

const TITLE_SUBTITLES = {
  audio: [
    'Keep the Player, Add the Shelf',
    'The Playlist vs the Assigned Listen',
    'Curriculum Beside the Stream',
    'Not Another For You Row',
  ],
  'community-messaging': [
    'Keep the Chat, Add the Shelf',
    'When the Syllabus Gets Buried',
    'A Room That Survives the Thread',
    'Living Room vs Library',
  ],
  'course-learning': [
    'Discovery Beside the LMS',
    'The Cohort Needs a Shelf',
    'Enroll There, Discuss Here',
    'When the Course URL Is Not Enough',
  ],
  ebook: [
    'Club Shelf vs Personal Reader',
    'The Book You Assign Together',
    'Shared Reading, Not a Private Progress Bar',
    'A Stack for the Club, Not a Lifetime Catalog',
  ],
  'long-form': [
    'The Club Layer for Video',
    'Watch There, Discuss Here',
    'Curriculum, Not a Comment Feed',
    'When Reach Is Not the Whole Job',
  ],
  marketplace: [
    'Hubs vs SKUs',
    'Discovery Beside Checkout',
    'A Library Item, Not a Listing Grid',
    'When the Collection Is the Product',
  ],
  'membership-fan': [
    'Library Beside Patronage',
    'Dual Listing, Not a Migration',
    'Explore Without Rebuilding the Fan Stack',
    'When Tiers Are Not a Catalog',
  ],
  'newsletter-writing': [
    'A Home for the Archive',
    'Beyond the Missed Email',
    'Inbox for Reach, Hub for Depth',
    'When the Cadence Needs a Shelf',
  ],
  streaming: [
    'Watch Party Syllabus',
    'Clubs Around Titles',
    'Not Another SVOD App',
    'The Film as Curriculum',
  ],
  'short-form': [
    'The Room Behind the Swipe',
    'A Destination After the Clip',
    'Trailer vs the Hub',
    'When Reach Needs a Door',
  ],
  'storefront-commerce': [
    'The Room Behind the Link',
    'A Destination, Not Twelve Exits',
    'Profile and Hubs vs a Bio Router',
    'When the Door Is Not the Product',
  ],
  'knowledge-reference': [
    'Owned Hubs vs Anonymous Pages',
    'A Stack You Can Work Through',
    'Lookup There, Teach Here',
    'When Reference Is Not a Course',
  ],
  'discovery-search': [
    'A Library Catalog, Not Ten Blue Links',
    'After You Find the Open Web',
    'Curated Knowledge vs the Whole Index',
    'Search Gets You There; the Shelf Keeps You',
  ],
  'content-platform': [
    'Curated Hubs Beside the Feed',
    'Keep the Reach, Add the Shelf',
    'When the Format Already Has an Owner',
    'A Collection Worth Opening',
  ],
}

const COVER_SCENES = {
  audio: 'headphones and a speaker beside a wooden library shelf of labeled albums and notes',
  'community-messaging': 'a warm living-room conversation in one half, a quiet labeled shelf of books and folders in the other',
  'course-learning': 'a classroom desk with a laptop lesson on screen and a curated stack of course binders on a nearby shelf',
  ebook: 'an e-ink reader on a table next to a small shared book-club stack with paper notes',
  'long-form': 'a paused monitor beside a discussion table and a shelf of related lectures',
  marketplace: 'a market stall of goods opening into a calm library of collections',
  'membership-fan': 'a membership pin beside an open public library catalog of the same creator’s work',
  'newsletter-writing': 'an overflowing inbox on a desk, with a bound archive and lamp on a library shelf behind it',
  streaming: 'living-room TV glow with a watch-party syllabus and companion books on a coffee table',
  'short-form': 'a phone mid-swipe opening a doorway into a quiet room of hubs and shelves',
  'storefront-commerce': 'a simple door with many small exit arrows, and behind it one well-lit room of collections',
  'knowledge-reference': 'an enormous encyclopedia wall versus a small owned desk with a curated teaching stack',
  'discovery-search': 'a vast search-result landscape narrowing into a labeled library catalog drawer',
  'content-platform': 'a crowded content-feed river with a quiet curated island of hubs beside it',
}

/** Per-company copy when the generic role template is not enough. */
const COMPANY_COPY = {
  curios: {
    coreJob: 'Direct-to-fan author storefronts, ebook/audio delivery, and reader apps',
    whenTheyWin:
      'You only need niche author tooling: studio uploads, 100% of list price, bundles, and a consumer app for purchased books and audio.',
    whenKahana:
      'An author wants live Book Clubs, demand-driven uploads, Explore discovery, and Aura — not only a direct-sales storefront.',
    together:
      'Keep Curios for author storefronts and in-app reading if that tooling is useful. Run clubs, discussion, and library discovery on Kahana so the book is a shared shelf, not only a checkout and a reader.',
    kahanaJob: 'Clubs, library engagement, and optional hub paywalls beside author tooling.',
    synergy: true,
    stance:
      'Stay outcome-focused — Clubs, shelf, Aura — not competitor trash talk. Kahana (once branded Curio) is a different company from Curios at curios.com.',
    disambiguation:
      'One naming note: Kahana was previously called Curio. This article compares Kahana to Curios (curios.com / studio.curios.com), a separate direct-to-fan author platform. They are not the same product.',
  },
}

function normalizeEmDashesInString(str) {
  if (typeof str !== 'string' || !str.includes('\u2014')) return str
  let s = str.replace(/\s*\u2014\s*/g, ', ')
  s = s.replace(/,\s*,+/g, ', ')
  s = s.replace(/\.,\s+/g, (match, offset, full) => {
    const prefix = full.slice(0, offset)
    if (/\be\.g$/i.test(prefix) || /\bi\.e$/i.test(prefix) || /\betc$/i.test(prefix) || /\bet al$/i.test(prefix)) {
      return match
    }
    return '. '
  })
  s = s.replace(/\(\s*,/g, '(')
  s = s.replace(/,\s*\)/g, ')')
  return s
}

function stripEmDashesDeep(obj) {
  if (typeof obj === 'string') return normalizeEmDashesInString(obj)
  if (Array.isArray(obj)) return obj.map(stripEmDashesDeep)
  if (obj && typeof obj === 'object') {
    const out = {}
    for (const key of Object.keys(obj)) out[key] = stripEmDashesDeep(obj[key])
    return out
  }
  return obj
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function stripQuotes(str) {
  return String(str || '')
    .trim()
    .replace(/^[“"']+/, '')
    .replace(/[”"']+$/, '')
}

function firstSentence(str, fallback) {
  const clean = stripQuotes(str)
  if (!clean) return fallback
  const match = clean.match(/^[^.!?]+[.!?]/)
  return match ? match[0] : clean
}

function hashString(str) {
  let h = 2166136261
  for (let i = 0; i < String(str).length; i += 1) {
    h ^= String(str).charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function pickHashed(list, key) {
  const items = list || []
  if (!items.length) return ''
  return items[hashString(key) % items.length]
}

function lowerFirst(str) {
  const s = String(str || '')
  if (!s) return s
  return s.charAt(0).toLowerCase() + s.slice(1)
}

function asSentence(str) {
  const s = String(str || '').replace(/\s+/g, ' ').trim()
  if (!s) return s
  return /[.!?]$/.test(s) ? s : `${s}.`
}

function asNamedSentence(name, str) {
  const sentence = asSentence(str)
  if (!sentence) return asSentence(`${name} is a platform people already use.`)
  if (sentence.toLowerCase().startsWith(String(name).toLowerCase())) return sentence
  if (/^(a|an|the)\s/i.test(sentence)) return asSentence(`${name} is ${lowerFirst(sentence)}`)
  return sentence
}

function slugifyName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function estimateReadingTime(html) {
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(2, Math.ceil(words / 225))
}

function truncate(str, max) {
  const s = String(str)
  if (s.length <= max) return s
  const cut = s.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${(lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim()}…`
}

function pick(list, n) {
  return (list || []).slice(0, n)
}

function roleCopy(company) {
  return COMPANY_COPY[company.id] || ROLE_COPY[company.roleTag] || DEFAULT_ROLE
}

function coreJobThey(company) {
  const extra = company.extraDescription
  if (extra) return firstSentence(extra, roleCopy(company).coreJob)
  if (company.synergy?.theyDo) return firstSentence(company.synergy.theyDo, roleCopy(company).coreJob)
  return roleCopy(company).coreJob
}

function researchTagline(company) {
  const research = company.research || {}
  return stripQuotes(
    research.tagline ||
      company.extraDescription ||
      `${company.name} is a ${company.roleLabel || 'platform'} people already use.`,
  )
}

function stripTrailingPeriod(str) {
  return String(str || '').replace(/\s+/g, ' ').trim().replace(/[.]+$/, '')
}

function joinAnd(items) {
  const list = (items || []).filter(Boolean)
  if (!list.length) return ''
  if (list.length === 1) return list[0]
  if (list.length === 2) return `${list[0]} and ${list[1]}`
  return `${list.slice(0, -1).join(', ')}, and ${list[list.length - 1]}`
}

function companyYesLabels(company) {
  return (Array.isArray(company.coverage) ? company.coverage : [])
    .filter((col) => col.company === 'yes')
    .map((col) => col.label)
    .filter(Boolean)
}

function insightItems(list) {
  return pick(list, 4)
    .map((item) => {
      if (!item) return null
      if (typeof item === 'string') return { title: '', detail: item }
      const title = String(item.title || '').trim()
      const detail = String(item.detail || '').trim()
      if (!title && !detail) return null
      return { title, detail }
    })
    .filter(Boolean)
}

function buildTitle(company, slug) {
  const pool = TITLE_SUBTITLES[company.roleTag] || TITLE_SUBTITLES['content-platform']
  const subtitle = pickHashed(pool, slug)
  return `Kahana vs ${company.name}: ${subtitle}`
}

function buildExcerpt(company) {
  const name = company.name
  const role = roleCopy(company)
  const theyJob = lowerFirst(stripTrailingPeriod(asSentence(coreJobThey(company))))
  const kahanaJob = lowerFirst(stripTrailingPeriod(asSentence(role.kahanaJob)))
  return truncate(`${name} is ${theyJob}. Kahana is ${kahanaJob}.`.replace(/\s+/g, ' ').trim(), 240)
}

function buildContent(company) {
  const name = company.name
  const role = roleCopy(company)
  const theyJob = lowerFirst(stripTrailingPeriod(asSentence(coreJobThey(company))))
  const tagline = firstSentence(
    researchTagline(company),
    `${name} is a ${company.roleLabel || 'platform'} people already use.`,
  )
  const website = company.website
  const siteBit = website
    ? ` <a href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">Official site</a>.`
    : ''

  return `<p class="lead">Kahana is a library of curated hubs, Explore, Clubs, and optional Stripe. ${escapeHtml(name)} is ${escapeHtml(theyJob)}. They overlap in places and diverge in others.</p>

<h2>What each one is</h2>
<p>Kahana is built around <a href="/help/hubs">hubs</a> people can open, <a href="/help/explore">Explore</a> so strangers can find them, <a href="/help/how-aura-works">Aura</a> as scarce daily recognition, and Clubs so discussion outlives a feed. Selling stays optional.</p>
<p>${escapeHtml(asNamedSentence(name, tagline))}${siteBit}</p>

<h2>Why this comparison</h2>
<p>This article puts Kahana and ${escapeHtml(name)} side by side. It covers what each supports as a first-class product job, key features, and a few research notes so you have a clearer picture of what they are, how they compare, and what you can actually do on each one. It is not a teardown, and it is not a switch-tomorrow pitch.</p>
${role.disambiguation ? `<p>${escapeHtml(role.disambiguation)}</p>` : ''}
`
}

function buildContentAfter(company) {
  const name = company.name
  const role = roleCopy(company)
  const yesLabels = companyYesLabels(company)
  const theyJob = lowerFirst(stripTrailingPeriod(asSentence(coreJobThey(company))))
  const yesBit = yesLabels.length
    ? `On ${escapeHtml(name)} you can use ${escapeHtml(joinAnd(yesLabels))} as ${yesLabels.length === 1 ? 'a first-class product job' : 'first-class product jobs'}.`
    : `On ${escapeHtml(name)}, this chart does not mark a first-class library job. The product still wins at ${escapeHtml(theyJob)}.`

  return `<h2>What you can do on each</h2>
<p>On Kahana you can publish a hub, list it on Explore, discuss it in a Club, grant Aura, and turn on a Stripe paywall when you are ready to charge.</p>
<p>${yesBit} ${escapeHtml(asSentence(role.whenTheyWin))}</p>
${buildTogetherHtml(company)}
`
}

function buildTogetherHtml(company) {
  const role = roleCopy(company)
  if (!role.synergy || !role.together) return ''
  const name = company.name
  const together = asSentence(String(role.together).replaceAll('{name}', name))
  return `
<h2>Using Kahana with ${escapeHtml(name)}</h2>
<p>You can use both. ${escapeHtml(name)} keeps doing what it already does well. Kahana is another place to package the work, get discovered, and grow an audience.</p>
<p>${escapeHtml(together)}</p>
`
}

function buildResearchInsights(company) {
  const research = company.research || {}
  const scaleFacts = pick(research.scaleFacts, 4).map((fact) => String(fact || '').trim()).filter(Boolean)
  const strengths = insightItems(research.benefits)
  const weaknesses = insightItems(research.weaknesses)
  const sources = pick(research.sources, 4).filter(Boolean)
  if (!scaleFacts.length && !strengths.length && !weaknesses.length) return null
  return {
    companyName: company.name,
    scaleFacts,
    strengths,
    weaknesses,
    sources,
  }
}

function buildCoveragePayload(company) {
  const columns = Array.isArray(company.coverage) ? company.coverage : []
  if (!columns.length) return null
  return {
    companyName: company.name,
    columns: columns.map((col) => ({
      fragmentId: col.fragmentId,
      label: col.label,
      definition: col.definition || '',
      kahana: col.kahana === 'yes' ? 'yes' : 'no',
      company: col.company === 'yes' ? 'yes' : 'no',
    })),
  }
}

/** Newest generated post is Fri 14 Aug 2026; each next index walks back one weekday. */
function publishDateForIndex(index, slug) {
  const hours = [13, 14, 15, 16, 17, 18, 19, 20]
  const hour = hours[hashString(`${slug}:hour`) % hours.length]
  const minute = 5 + (hashString(`${slug}:minute`) % 50)
  const d = new Date(Date.UTC(2026, 7, 14, hour, minute, 0))
  let remaining = index
  while (remaining > 0) {
    d.setUTCDate(d.getUTCDate() - 1)
    const weekday = d.getUTCDay()
    if (weekday !== 0 && weekday !== 6) remaining -= 1
  }
  return d.toISOString()
}

function buildPost(company, index) {
  const slug = `kahana-vs-${slugifyName(company.name)}`.replace(/-+$/g, '')
  const role = roleCopy(company)
  const title = buildTitle(company, slug)
  const excerpt = buildExcerpt(company)
  const date = publishDateForIndex(index, slug)
  const content = buildContent(company)
  const contentAfter = buildContentAfter(company)
  const researchInsights = buildResearchInsights(company)
  const seoTitle = truncate(`Kahana vs ${company.name} | ${pickHashed(TITLE_SUBTITLES[company.roleTag] || TITLE_SUBTITLES['content-platform'], slug)}`, 60)
  const metaDescription = truncate(excerpt, 160)
  const coverage = buildCoveragePayload(company)
  const researchText = [
    ...(researchInsights?.scaleFacts || []),
    ...(researchInsights?.strengths || []).map((item) => `${item.title} ${item.detail}`),
    ...(researchInsights?.weaknesses || []).map((item) => `${item.title} ${item.detail}`),
  ].join(' ')

  return stripEmDashesDeep({
    slug,
    title,
    date,
    authors: [ADAM],
    category: CATEGORIES,
    excerpt,
    defaultImageQuery: `${company.name} ${role.kahanaJob}`,
    featuredImage: `/assets/blog/${slug}.jpg`,
    readingTime: estimateReadingTime(`${content} ${contentAfter} ${researchText}`),
    seoTitle,
    metaDescription,
    focusKeyword: `${company.name} alternative`,
    landscapeCompanyId: company.id,
    landscapeRole: company.roleTag || 'content-platform',
    coverage,
    ...(researchInsights ? { researchInsights } : {}),
    content,
    contentAfter,
  })
}

function indexEntry(post) {
  return `  {
    title: ${JSON.stringify(post.title)},
    date: ${JSON.stringify(post.date)},
    authors: ["Adam Kershner"],
    category: ${JSON.stringify(post.category)},
    excerpt: ${JSON.stringify(post.excerpt)},
    defaultImageQuery: ${JSON.stringify(post.defaultImageQuery)},
    featuredImage: ${JSON.stringify(post.featuredImage)},
    slug: ${JSON.stringify(post.slug)},
    readingTime: ${post.readingTime},
  },`
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'))
  const handmade = [
    {
      title: 'Kahana vs Notion and Google Drive: Private Workspace vs Public Library',
      date: '2026-07-15T18:00:00.000Z',
      authors: ['Adam Kershner'],
      category: ['Comparisons', 'Creators', 'Product'],
      excerpt:
        'Notion and Drive excel at organizing files for you and your team. Kahana is a public library for curated hubs, Explore discovery, Aura, and optional Stripe paywalls. An honest look at a Notion alternative marketplace for knowledge you want found.',
      defaultImageQuery: 'Private cloud drive workspace versus public digital library marketplace',
      featuredImage: '/assets/blog/blog-kahana-vs-notion-drive.jpg',
      slug: 'kahana-vs-notion-google-drive',
      readingTime: 7,
    },
    {
      title: 'Kahana vs Linktree: What’s Behind the Link-in-Bio Door',
      date: '2026-07-15T12:00:00.000Z',
      authors: ['Adam Kershner'],
      category: ['Comparisons', 'Creators', 'Product'],
      excerpt:
        'Linktree answers “where should they click?” Kahana answers “what do they open, find, and pay for?”: profiles, hubs, Explore, and optional paywalls. An honest Linktree / link-in-bio alternative for creators packaging knowledge.',
      defaultImageQuery: 'Creator link in bio profile catalog digital library',
      featuredImage: '/assets/blog/blog-kahana-vs-linktree.jpg',
      slug: 'kahana-vs-linktree',
      readingTime: 6,
    },
    {
      title: 'Kahana vs Gumroad and Stan: Marketplace Discovery vs Checkout-First Selling',
      date: '2026-07-15T00:00:00.000Z',
      authors: ['Adam Kershner'],
      category: ['Comparisons', 'Creators', 'Product'],
      excerpt:
        'Gumroad and Stan-style tools are strong at checkout links. Kahana is built for curated hubs inside an Explore marketplace, with Aura as community signal and optional paid access. An honest comparison for creators weighing a Gumroad or Stan Store alternative.',
      defaultImageQuery: 'Creator marketplace library discovery digital products comparison',
      featuredImage: '/assets/blog/blog-kahana-vs-gumroad-stan.jpg',
      slug: 'kahana-vs-gumroad-stan',
      readingTime: 7,
    },
  ]

  const companies = catalog.companies
    .filter((c) => !SKIP_IDS.has(c.id))
    .sort((a, b) => a.name.localeCompare(b.name))

  const generated = []
  const usedSlugs = new Set(SKIP_SLUGS)

  companies.forEach((company, i) => {
    const post = buildPost(company, i)
    if (usedSlugs.has(post.slug)) {
      post.slug = `${post.slug}-${company.id}`
    }
    usedSlugs.add(post.slug)

    const filepath = path.join(BLOG_DIR, `${post.slug}.json`)
    const { landscapeCompanyId, ...toSave } = post
    fs.writeFileSync(filepath, JSON.stringify({ ...toSave, landscapeCompanyId }, null, 2) + '\n')
    generated.push(post)
  })

  const generatedEntries = generated.map((p) => ({
    title: p.title,
    date: p.date,
    authors: ['Adam Kershner'],
    category: p.category,
    excerpt: p.excerpt,
    defaultImageQuery: p.defaultImageQuery,
    featuredImage: p.featuredImage,
    slug: p.slug,
    readingTime: p.readingTime,
  }))

  const allIndex = [...generatedEntries, ...handmade.map(stripEmDashesDeep)]
  const body = allIndex.map(indexEntry).join('\n')
  const file = `/**
 * Public blog listing index. Oasis-era posts live under archive/data/blog/.
 * New Kahana posts: prepend here and add data/blog/<slug>.json.
 *
 * Landscape comparisons (except three handmade posts) are generated by
 * scripts/generate-kahana-comparison-blogs.mjs from data/company-landscape-catalog.json.
 */
export const blogIndex = [
${body}
];
`
  fs.writeFileSync(INDEX_PATH, file)

  console.log(`Generated ${generated.length} comparison posts`)
  console.log(`Index now has ${allIndex.length} posts → ${path.relative(ROOT, INDEX_PATH)}`)
}

main()
