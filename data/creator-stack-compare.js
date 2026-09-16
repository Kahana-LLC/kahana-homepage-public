/**
 * Illustrative “paid creator stack vs Kahana Growth” ledger for /compare.
 * Prices are public list-plan round numbers for copy tweaking — not quotes.
 */

export const KAHANA_STACK_PRICE_USD = 29.99;
export const KAHANA_STACK_PLAN = 'Growth';

/** @typedef {{ id: string, emoji: string, title: string, replaces: string[], priceUsd: number }} StackLine */

/** @type {StackLine[]} */
export const CREATOR_STACK_LINES = [
  {
    id: 'files',
    emoji: '📁',
    title: 'File library and cloud storage',
    replaces: ['Dropbox', 'Google Drive', 'Box'],
    priceUsd: 12,
  },
  {
    id: 'notes',
    emoji: '📝',
    title: 'Notes, links, and curriculum shelf',
    replaces: ['Notion'],
    priceUsd: 10,
  },
  {
    id: 'collab',
    emoji: '💬',
    title: 'Team chat and collaboration',
    replaces: ['Slack'],
    priceUsd: 8,
  },
  {
    id: 'courses',
    emoji: '🎓',
    title: 'Course and membership hosting',
    replaces: ['Teachable', 'Kajabi'],
    priceUsd: 119,
  },
  {
    id: 'community',
    emoji: '🔒',
    title: 'Creator community and clubs',
    replaces: ['Skool', 'Circle', 'Nas.io'],
    priceUsd: 99,
  },
  {
    id: 'storefront',
    emoji: '🛒',
    title: 'Link-in-bio store and checkout',
    replaces: ['Beacons', 'Linktree Pro', 'Stan Store'],
    priceUsd: 29,
  },
  {
    id: 'catalog',
    emoji: '📚',
    title: 'Public library listing and discovery',
    replaces: ['Gumroad'],
    priceUsd: 10,
  },
];

export function stackOtherwiseTotal(lines = CREATOR_STACK_LINES) {
  return lines.reduce((sum, line) => sum + line.priceUsd, 0);
}

export function formatUsd(n) {
  if (Number.isInteger(n)) return `$${n}`;
  return `$${n.toFixed(2)}`.replace(/\.00$/, '');
}
