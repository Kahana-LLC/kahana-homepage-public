/**
 * Lightweight lexical search for Oasis skills (natural-language friendly, no backend).
 * Swap this module later for API/semantic search without changing UI props.
 */

const SYNONYM_EXPANSIONS = {
  history: ['visited', 'past', 'browsing', 'recall'],
  visited: ['history', 'past'],
  article: ['page', 'post', 'story'],
  tabs: ['tab', 'windows'],
  group: ['groups', 'folder', 'project'],
  groups: ['group', 'tabgroup'],
  bookmark: ['bookmarks', 'favorite', 'favourites', 'saved'],
  favorites: ['bookmark', 'saved'],
  find: ['search', 'locate', 'where'],
  search: ['find', 'lookup'],
  summarize: ['summary', 'tldr', 'tl', 'dr', 'main', 'points'],
  close: ['kill', 'dismiss'],
  open: ['launch', 'go'],
  organize: ['sort', 'clean', 'tidy'],
  remember: ['recall', 'forgot', 'half'],
  week: ['last', 'recent'],
  read: ['reading', 'article'],
};

const INTENT_VERB_WEIGHT = 2.2;
const NAME_TOKEN_WEIGHT = 4;
const CATEGORY_WEIGHT = 2.5;
const TAG_WEIGHT = 2;
const ALIAS_WEIGHT = 2.5;
const DESCRIPTION_WEIGHT = 1.2;
const EXAMPLE_WEIGHT = 1.5;
const SYNONYM_MATCH_BONUS = 0.35;

function normalizeText(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(normalized) {
  if (!normalized) return [];
  return normalized.split(' ').filter(Boolean);
}

function expandTokens(tokens) {
  const bag = new Set(tokens);
  for (const t of tokens) {
    const extra = SYNONYM_EXPANSIONS[t];
    if (extra) extra.forEach((e) => bag.add(e));
  }
  return [...bag];
}

function countTokenHits(haystackNorm, tokens) {
  if (!tokens.length) return { hits: 0, detail: 0 };
  let hits = 0;
  let detail = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (haystackNorm.includes(t)) {
      hits += 1;
      const idx = haystackNorm.indexOf(t);
      detail += 1 / (1 + idx * 0.01);
    }
  }
  return { hits, detail };
}

function verbOverlapScore(queryTokens, intentVerbs) {
  if (!intentVerbs?.length) return 0;
  const intents = new Set(intentVerbs.map((v) => normalizeText(v)));
  let n = 0;
  for (const q of queryTokens) {
    if (intents.has(q)) n += 1;
  }
  return n * INTENT_VERB_WEIGHT;
}

/**
 * @param {object[]} skills - Oasis skill records from `oasisSkillsCatalog`
 * @param {{ query?: string, category?: string | null }} options
 * @returns {{ skill: object, score: number }[]}
 */
export function searchOasisSkills(skills, options = {}) {
  const { query = '', category = null } = options;
  const qNorm = normalizeText(query);
  const rawTokens = tokenize(qNorm);
  const queryTokens = expandTokens(rawTokens);

  let pool = skills;
  if (category && category !== 'all') {
    pool = skills.filter((s) => s.category === category);
  }

  if (!qNorm) {
    return pool.map((skill) => ({ skill, score: 0 }));
  }

  const scored = pool.map((skill) => {
    const nameNorm = normalizeText(skill.name);
    const catNorm = normalizeText(skill.category);
    const descNorm = normalizeText(skill.description);
    const examplesNorm = (skill.examplePrompts || []).map(normalizeText).join(' ');
    const aliasesNorm = (skill.aliases || []).map(normalizeText).join(' ');
    const tagsNorm = (skill.tags || []).map(normalizeText).join(' ');
    const haystack = [nameNorm, catNorm, descNorm, examplesNorm, aliasesNorm, tagsNorm].join(' ');

    const nameHits = countTokenHits(nameNorm, queryTokens);
    const catHits = countTokenHits(catNorm, queryTokens);
    const tagHits = countTokenHits(tagsNorm, queryTokens);
    const aliasHits = countTokenHits(aliasesNorm, queryTokens);
    const descHits = countTokenHits(descNorm, queryTokens);
    const exHits = countTokenHits(examplesNorm, queryTokens);
    const fullHits = countTokenHits(haystack, queryTokens);

    let score =
      nameHits.hits * NAME_TOKEN_WEIGHT +
      nameHits.detail +
      catHits.hits * CATEGORY_WEIGHT +
      tagHits.hits * TAG_WEIGHT +
      aliasHits.hits * ALIAS_WEIGHT +
      descHits.hits * DESCRIPTION_WEIGHT +
      exHits.hits * EXAMPLE_WEIGHT +
      fullHits.detail * 0.15;

    score += verbOverlapScore(queryTokens, skill.intentVerbs);

    for (const t of rawTokens) {
      const syn = SYNONYM_EXPANSIONS[t];
      if (!syn) continue;
      for (const s of syn) {
        if (haystack.includes(s)) score += SYNONYM_MATCH_BONUS;
      }
    }

    if (qNorm.length >= 3 && haystack.includes(qNorm)) {
      score += 6;
    }

    return { skill, score };
  });

  scored.sort((a, b) => b.score - a.score || a.skill.name.localeCompare(b.skill.name));
  return scored.filter((x) => x.score > 0);
}

export function normalizeOasisSkillQuery(query) {
  return normalizeText(query);
}
