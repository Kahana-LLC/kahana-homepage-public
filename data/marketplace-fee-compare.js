/**
 * Public marketplace platform-fee snapshot for /compare.
 * Kahana: 5% application fee on hub sales (Stripe processing extra).
 * Peer percents are typical published platform take-rates, not quotes.
 */

export const FEE_EXAMPLE_SALE_USD = 20;

export const MARKETPLACE_FEE_PEERS = [
  {
    id: 'onlyfans',
    name: 'OnlyFans',
    website: 'https://onlyfans.com',
    platformFeePct: 20,
    processing: 'Usually bundled into the 20%',
    note: 'Subscriptions and PPV',
  },
  {
    id: 'fansly',
    name: 'Fansly',
    website: 'https://fansly.com',
    platformFeePct: 20,
    processing: 'Usually bundled into the 20%',
    note: 'Subscriptions and PPV',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    website: 'https://www.patreon.com',
    platformFeePct: 10,
    processing: 'Plus card processing (~2.9% + $0.30 in the US)',
    note: 'Memberships, typical published rate',
  },
  {
    id: 'substack',
    name: 'Substack',
    website: 'https://substack.com',
    platformFeePct: 10,
    processing: 'Plus payment processing',
    note: 'Paid newsletters',
  },
  {
    id: 'gumroad',
    name: 'Gumroad',
    website: 'https://gumroad.com',
    platformFeePct: 10,
    processing: 'Plus payment processing',
    note: 'Digital products',
  },
  {
    id: 'etsy',
    name: 'Etsy',
    website: 'https://www.etsy.com',
    platformFeePct: 6.5,
    processing: 'Plus listing and payment fees',
    note: 'Transaction fee on item price',
  },
];

export const MARKETPLACE_FEE_KAHANA = {
  id: 'kahana',
  name: 'Kahana',
  platformFeePct: 5,
  processing: 'Plus Stripe processing (~2.9% + $0.30 for US cards)',
  note: 'Paid hub access, same on Free and Growth',
};

export function platformTakeUsd(pct, saleUsd = FEE_EXAMPLE_SALE_USD) {
  return Math.round(saleUsd * (pct / 100) * 100) / 100;
}

export function formatMoney(n) {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}

export function formatPct(n) {
  return `${n}%`;
}
