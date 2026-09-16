import {
  SiAmazon,
  SiAmazonprime,
  SiAudible,
  SiBox,
  SiCircle,
  SiCoursera,
  SiCrunchyroll,
  SiDiscord,
  SiDropbox,
  SiEtsy,
  SiGoodreads,
  SiGoogledrive,
  SiGumroad,
  SiHbo,
  SiInstagram,
  SiInternetarchive,
  SiKit,
  SiKofi,
  SiLinkedin,
  SiLinktree,
  SiMedium,
  SiNetflix,
  SiNotion,
  SiOnlyfans,
  SiPatreon,
  SiPrimevideo,
  SiReddit,
  SiSlack,
  SiSpotify,
  SiSubstack,
  SiTelegram,
  SiTiktok,
  SiUdemy,
  SiVimeo,
  SiWhatsapp,
  SiYoutube,
} from 'react-icons/si';

/** Simple Icons where they exist; otherwise a site favicon. */
const ICONS = {
  youtube: SiYoutube,
  vimeo: SiVimeo,
  tiktok: SiTiktok,
  instagram: SiInstagram,
  discord: SiDiscord,
  slack: SiSlack,
  telegram: SiTelegram,
  whatsapp: SiWhatsapp,
  reddit: SiReddit,
  linkedin: SiLinkedin,
  goodreads: SiGoodreads,
  'amazon-kindle': SiAmazon,
  kindle: SiAmazon,
  medium: SiMedium,
  'internet-archive': SiInternetarchive,
  substack: SiSubstack,
  kit: SiKit,
  udemy: SiUdemy,
  coursera: SiCoursera,
  gumroad: SiGumroad,
  linktree: SiLinktree,
  etsy: SiEtsy,
  patreon: SiPatreon,
  kofi: SiKofi,
  'ko-fi': SiKofi,
  spotify: SiSpotify,
  audible: SiAudible,
  dropbox: SiDropbox,
  'google-drive': SiGoogledrive,
  box: SiBox,
  notion: SiNotion,
  netflix: SiNetflix,
  'prime-video': SiPrimevideo,
  max: SiHbo,
  crunchyroll: SiCrunchyroll,
  onlyfans: SiOnlyfans,
  amazonprime: SiAmazonprime,
  circle: SiCircle,
};

const FAVICON_HOST = {
  skool: 'www.skool.com',
  'nas-io': 'nas.com',
  nas: 'nas.com',
  storygraph: 'www.thestorygraph.com',
  beehiiv: 'www.beehiiv.com',
  teachable: 'teachable.com',
  kajabi: 'kajabi.com',
  podia: 'www.podia.com',
  stan: 'stan.store',
  hulu: 'www.hulu.com',
  fansly: 'fansly.com',
  beacons: 'beacons.ai',
};

const NAME_TO_KEY = {
  youtube: 'youtube',
  vimeo: 'vimeo',
  tiktok: 'tiktok',
  instagram: 'instagram',
  discord: 'discord',
  slack: 'slack',
  telegram: 'telegram',
  whatsapp: 'whatsapp',
  skool: 'skool',
  'nas.io': 'nas-io',
  nas: 'nas-io',
  reddit: 'reddit',
  linkedin: 'linkedin',
  goodreads: 'goodreads',
  kindle: 'amazon-kindle',
  'the storygraph': 'storygraph',
  storygraph: 'storygraph',
  medium: 'medium',
  'internet archive': 'internet-archive',
  substack: 'substack',
  beehiiv: 'beehiiv',
  kit: 'kit',
  teachable: 'teachable',
  kajabi: 'kajabi',
  udemy: 'udemy',
  coursera: 'coursera',
  podia: 'podia',
  gumroad: 'gumroad',
  'stan store': 'stan',
  stan: 'stan',
  linktree: 'linktree',
  'linktree pro': 'linktree',
  etsy: 'etsy',
  patreon: 'patreon',
  'ko-fi': 'kofi',
  kofi: 'kofi',
  spotify: 'spotify',
  audible: 'audible',
  dropbox: 'dropbox',
  'google drive': 'google-drive',
  box: 'box',
  notion: 'notion',
  beacons: 'beacons',
  circle: 'circle',
  netflix: 'netflix',
  hulu: 'hulu',
  'amazon prime video': 'prime-video',
  'max (hbo)': 'max',
  max: 'max',
  crunchyroll: 'crunchyroll',
  onlyfans: 'onlyfans',
  fansly: 'fansly',
  kahana: 'kahana',
};

function resolveKey(id, name) {
  if (id && (ICONS[id] || FAVICON_HOST[id] || id === 'kahana')) return id;
  const fromName = NAME_TO_KEY[(name || '').trim().toLowerCase()];
  if (fromName) return fromName;
  return id || '';
}

function faviconSrc(host) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`;
}

/**
 * Brand glyph for compare chips and tables.
 * Uses Simple Icons when we have them; otherwise the site favicon.
 */
export default function BrandMark({ id, name, className = '', size = 18 }) {
  const key = resolveKey(id, name);

  if (key === 'kahana') {
    return (
      <img
        src="/kahana-bonsai.svg"
        alt=""
        width={size}
        height={Math.round(size * 1.18)}
        className={`inline-block shrink-0 object-contain ${className}`}
      />
    );
  }

  const Icon = ICONS[key];
  if (Icon) {
    return <Icon className={`shrink-0 ${className}`} size={size} aria-hidden />;
  }

  const host = FAVICON_HOST[key];
  if (host) {
    return (
      <img
        src={faviconSrc(host)}
        alt=""
        width={size}
        height={size}
        className={`inline-block shrink-0 rounded-sm object-contain ${className}`}
      />
    );
  }

  return null;
}

export function hasBrandMark(id, name) {
  const key = resolveKey(id, name);
  return key === 'kahana' || Boolean(ICONS[key] || FAVICON_HOST[key]);
}
