#!/usr/bin/env node
/**
 * Snapshot Company Landscape research from the data-room repo into this site.
 *
 * Usage:
 *   node scripts/snapshot-company-landscape.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DATA_ROOM_DATA = path.join(
  ROOT,
  '..',
  '..',
  'Data Room',
  'data-room',
  'financial-dashboard',
  'src',
  'data',
)

const NAME_OVERRIDES = {
  'amazon-kindle': 'Amazon Kindle',
  amazon: 'Amazon',
  'apple-books': 'Apple Books',
  'google-play-books': 'Google Play Books',
  kobo: 'Kobo',
  goodreads: 'Goodreads',
  wattpad: 'Wattpad',
  fable: 'Fable',
  'mighty-networks': 'Mighty Networks',
  'facebook-groups': 'Facebook Groups',
  'apple-music': 'Apple Music',
  'amazon-music': 'Amazon Music',
  'youtube-music': 'YouTube Music',
  'prime-video': 'Prime Video',
  'youtube-shorts': 'YouTube Shorts',
  coursera: 'Coursera',
  udemy: 'Udemy',
  kajabi: 'Kajabi',
  teachable: 'Teachable',
  thinkific: 'Thinkific',
  skool: 'Skool',
  discord: 'Discord',
  telegram: 'Telegram',
  slack: 'Slack',
  whatsapp: 'WhatsApp',
  circle: 'Circle',
  bettermode: 'BetterMode',
  hivebrite: 'Hivebrite',
  disciple: 'Disciple',
  guild: 'Guild',
  signal: 'Signal',
  groupme: 'GroupMe',
  patreon: 'Patreon',
  onlyfans: 'OnlyFans',
  kofi: 'Ko-fi',
  fansly: 'Fansly',
  memberful: 'Memberful',
  stan: 'Stan Store',
  beacons: 'Beacons',
  pensight: 'Pensight',
  linktree: 'Linktree',
  podia: 'Podia',
  hypage: 'Hypage',
  gumroad: 'Gumroad',
  etsy: 'Etsy',
  shopify: 'Shopify',
  substack: 'Substack',
  beehiiv: 'beehiiv',
  medium: 'Medium',
  ghost: 'Ghost',
  scribd: 'Scribd',
  spotify: 'Spotify',
  audible: 'Audible',
  netflix: 'Netflix',
  disney: 'Disney+',
  max: 'Max',
  hulu: 'Hulu',
  crunchyroll: 'Crunchyroll',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  instagram: 'Instagram',
  twitch: 'Twitch',
  wikipedia: 'Wikipedia',
  edx: 'edX',
  domestika: 'Domestika',
  peacock: 'Peacock',
  wordpress: 'WordPress',
  nebula: 'Nebula',
  vimeo: 'Vimeo',
  snapchat: 'Snapchat',
  triller: 'Triller',
  likee: 'Likee',
  curios: 'Curios',
}

const WEBSITE_OVERRIDES = {
  curios: 'https://studio.curios.com/',
}

function titleCaseId(id) {
  return id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

async function loadModule(fileName) {
  const filePath = path.join(DATA_ROOM_DATA, fileName)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing data-room file: ${filePath}`)
  }
  return import(pathToFileURL(filePath).href)
}

function buildCoverage(id, primaryFragmentId, secondaryFragmentIds, coverageMod) {
  const fragmentIds = [...coverageMod.REVIEWED_FRAGMENT_IDS]
  return fragmentIds.map((fragmentId) => {
    const def = coverageMod.getCoverageColumnDefinition(fragmentId) || {}
    const reviewed = coverageMod.getReviewedFragmentPresence(fragmentId, id)
    const fallbackIds = [primaryFragmentId, ...(secondaryFragmentIds || [])].filter(Boolean)
    const company =
      reviewed != null ? reviewed : fallbackIds.includes(fragmentId) ? 'yes' : 'no'
    return {
      fragmentId,
      label: def.label || fragmentId,
      definition: def.definition || '',
      kahana: 'yes',
      company,
    }
  })
}

async function main() {
  const researchMod = await loadModule('companyLandscapeResearch.js')
  const metaMod = await loadModule('companyLandscapeMeta.js')
  const synergyMod = await loadModule('kahanaSynergyCards.js')
  const coverageMod = await loadModule('companyFragmentCoverage.js')

  const research = researchMod.COMPANY_LANDSCAPE_RESEARCH
  const extras = metaMod.LANDSCAPE_EXTRA_COMPANIES
  const extrasById = new Map(extras.map((c) => [c.id, c]))
  const synergyById = new Map(synergyMod.SYNERGY_CARDS.map((c) => [c.id, c]))
  // Stan synergy card uses stan-store
  if (synergyById.has('stan-store') && !synergyById.has('stan')) {
    synergyById.set('stan', synergyById.get('stan-store'))
  }

  const ids = [...new Set([...Object.keys(research), ...extras.map((c) => c.id)])].sort()

  const companies = ids.map((id) => {
    const extra = extrasById.get(id)
    const card = research[id] ?? null
    const synergy = synergyById.get(id) ?? null
    const roleTag = metaMod.getRoleTag(id)
    const sizeTier = metaMod.getSizeTier(id)
    const categoryOverride = metaMod.LANDSCAPE_CATEGORY_OVERRIDES[id] ?? {}
    const primaryFragmentId =
      extra?.primaryFragmentId ?? categoryOverride.primaryFragmentId ?? null
    const secondaryFragmentIds =
      extra?.secondaryFragmentIds ?? categoryOverride.secondaryFragmentIds ?? []

    return {
      id,
      name: extra?.name ?? NAME_OVERRIDES[id] ?? titleCaseId(id),
      website: extra?.website ?? WEBSITE_OVERRIDES[id] ?? null,
      extraDescription: extra?.description ?? null,
      roleTag,
      roleLabel: roleTag ? metaMod.ROLE_TAG_LABELS[roleTag] : null,
      sizeTier,
      sizeTierLabel: sizeTier ? metaMod.SIZE_TIER_LABELS[sizeTier] : null,
      primaryFragmentId,
      secondaryFragmentIds,
      coverage: buildCoverage(id, primaryFragmentId, secondaryFragmentIds, coverageMod),
      research: card,
      synergy: synergy
        ? {
            theyDo: synergy.theyDo,
            weDo: synergy.weDo,
            together: synergy.together,
            exampleFlow: synergy.exampleFlow,
            stance: synergy.stance,
          }
        : null,
    }
  })

  const outPath = path.join(ROOT, 'data', 'company-landscape-catalog.json')
  const payload = {
    generatedAt: new Date().toISOString(),
    source: 'data-room/financial-dashboard Company Landscape',
    count: companies.length,
    companies,
  }
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n')
  console.log(`Wrote ${companies.length} companies → ${path.relative(ROOT, outPath)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
