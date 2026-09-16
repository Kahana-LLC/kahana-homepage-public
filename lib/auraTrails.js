import { AURA_TRAIL_SNAPSHOT } from '../data/aura-trail-snapshot';

const API_BASE = 'https://us-central1-kahana-15c2a.cloudfunctions.net/api';

export const AURA_TRAIL_HUBS = [
  {
    id: 'QnvQ8OTa3S1Qp7XWOXPZ',
    title: 'Philosophical and Religious Thoughts for the Young Adult',
  },
  {
    id: 'ncqkaConfukeopShys9r',
    title: 'Inward: A 30-Day Conversation With Yourself',
    coverSrc: '/images/success-stories/rashmi-cover.webp',
  },
];

const FETCH_MS = 8000;
const GIVERS_LIMIT = 24;

/** Stable sample names for the marketing preview. Photos and hub trails stay real. */
const ALIAS_BY_UID = {
  lxZb9mrcMROsWZhigOBfTwbUGfB3: 'Maya Chen',
  IRo5MSiS63bc060Zzkc5kb6gBWY2: 'Jordan Hale',
  jfRyczW5wehKN8ffPrqtmsN7hyg2: 'Samira Cole',
  FrZZdagV0LMnd5fPcBr2It7SyqI2: 'Leo Okonkwo',
  '6lQQnfYC82aiYxSPl5xXKHnzwYl1': 'Priya Nair',
  l56jkuDqcDPAQmwmi4i6RntksOC2: 'Elena Vargas',
  ORSfDfURf8XNzumjeESeaEyqPRc2: 'Noah Park',
  bFwJWOEfIpf6QVoMpiXaWyczgyx1: 'Amara Diallo',
  Ln1bgbZNqpbo05iu1GnLYnwngVg1: 'Chris Adeyemi',
  Z9DYU7zBRFhF9h1aREwtbOey1Ck2: 'Mina Cho',
  UN9ZTS7H2fQrCHZkX52E3aT2Rfx1: 'River Santos',
};

const ALIAS_POOL = [
  'Maya Chen',
  'Priya Nair',
  'Leo Okonkwo',
  'Jordan Hale',
  'Samira Cole',
  'Elena Vargas',
  'Noah Park',
  'Amara Diallo',
  'Chris Adeyemi',
  'Mina Cho',
  'River Santos',
  'Nina Okada',
  'Omar Farouk',
  'Tess Nguyen',
  'Ibrahim Cole',
  'Lila Rahman',
];

function aliasName(uid) {
  if (uid && ALIAS_BY_UID[uid]) return ALIAS_BY_UID[uid];
  const key = String(uid || '');
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return ALIAS_POOL[hash % ALIAS_POOL.length];
}

function httpsUrl(value) {
  return typeof value === 'string' && value.startsWith('https://') ? value : null;
}

function slimGiver(giver) {
  const hubsGiven = (giver.hubsGiven || []).slice(0, 6).map((hub) => {
    const item = {
      hubId: hub.hubId,
      name: String(hub.name || 'Hub').replace(/\u00a0/g, ' ').trim(),
      amount: Number(hub.amount) || 0,
    };
    const thumb = httpsUrl(hub.coverThumbUrl);
    if (thumb) item.coverThumbUrl = thumb;
    return item;
  });

  const out = {
    uid: giver.uid,
    displayName: aliasName(giver.uid),
    amount: Number(giver.amount) || 0,
    accountCreatedAt: giver.accountCreatedAt || null,
    hubsGivenCount: Number(giver.hubsGivenCount) || 0,
    hubsGiven,
  };
  return out;
}

export function aliasAuraDisplayName(uid) {
  return aliasName(uid);
}

const FEMALE_HAIR_BY_NAME = {
  'Maya Chen': 'variant30',
  'Priya Nair': 'variant24',
  'Samira Cole': 'variant18',
  'Elena Vargas': 'variant36',
  'Amara Diallo': 'variant24',
  'Mina Cho': 'variant30',
  'Nina Okada': 'variant18',
  'Tess Nguyen': 'variant30',
};

export function sampleAvatarUrl(name) {
  const label = String(name || 'kahana').trim();
  const seed = label.replace(/\s+/g, '');
  const params = new URLSearchParams({
    seed,
    size: '96',
    backgroundColor: 'efe8d8',
    beardProbability: '0',
  });
  const hair = FEMALE_HAIR_BY_NAME[label];
  if (hair) {
    params.set('hair', hair);
    params.set('earringsProbability', '80');
  }
  return `https://api.dicebear.com/9.x/lorelei/png?${params.toString()}`;
}

export function formatAuraMemberSince(iso) {
  if (!iso) return null;
  const date = new Date(iso);
  if (!Number.isFinite(date.getTime())) return null;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function initialsFromName(name) {
  const parts = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return 'K';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

async function fetchHubTrail(seed) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_MS);
  try {
    const res = await fetch(
      `${API_BASE}/workspaces/${seed.id}/spirit-tokens?limit=${GIVERS_LIMIT}`,
      { headers: { Accept: 'application/json' }, signal: controller.signal },
    );
    if (!res.ok) return null;
    const body = await res.json();
    return {
      id: seed.id,
      title: seed.title,
      coverSrc: seed.coverSrc || null,
      count: Number(body.count) || 0,
      giverCount: Number(body.giverCount) || 0,
      givers: (body.givers || []).map(slimGiver),
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function snapshotHub(seed) {
  const snap = (AURA_TRAIL_SNAPSHOT.hubs || []).find((hub) => hub.id === seed.id);
  if (!snap) {
    return {
      id: seed.id,
      title: seed.title,
      coverSrc: seed.coverSrc || null,
      count: 0,
      giverCount: 0,
      givers: [],
    };
  }
  return {
    id: seed.id,
    title: seed.title || snap.title,
    coverSrc: seed.coverSrc || snap.coverSrc || null,
    count: Number(snap.count) || 0,
    giverCount: Number(snap.giverCount) || 0,
    givers: (snap.givers || []).map(slimGiver),
  };
}

export async function fetchAuraTrails() {
  const live = await Promise.all(AURA_TRAIL_HUBS.map(fetchHubTrail));
  return AURA_TRAIL_HUBS.map((seed, i) => live[i] || snapshotHub(seed));
}
