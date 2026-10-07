/**
 * Production counts for /company-stats.
 * Read from kahana-15c2a on October 7, 2026. Do not round these up.
 *
 * Library hubs: workspace docs that are active, public, and exploreListed.
 * Files and notes: collection-group totals across every hub, including private ones.
 * Public Library contents: contentIndex on the listed hubs (resources, notes, links).
 * Creator earnings: retail on buyer paidHubs, after Kahana's 5% fee.
 * Purchases under $3 are left out. Card processing is not subtracted.
 * No buyer or creator is identified.
 */
export const LIBRARY_NUMBERS_AS_OF = 'October 7, 2026';

export const LIBRARY_NUMBERS = {
  firstHubCreated: 'May 7, 2020',
  firstAccount: 'August 27, 2020',
  accounts: 6707,
  publicCreators: 1216,
  allHubs: 42494,
  libraryHubs: 409,
  freeLibraryHubs: 271,
  pricedLibraryHubs: 138,
  oneTimeLibraryHubs: 115,
  monthlyLibraryHubs: 23,
  oneTimeMedianUsd: 25,
  oneTimeAverageUsd: 83.7,
  monthlyMedianUsd: 10,
  libraryFiles: 2749,
  libraryNotes: 2352,
  libraryLinks: 520,
  allFiles: 66208,
  allNotes: 128339,
  auraGiven: 136,
  auraHubs: 19,
  creatorEarningsUsd: 30783.28,
  buyerPaidUsd: 32403.33,
  creatorTransactions: 211,
  clubs: 16,
};

/** What creators kept each year after the 5% fee. Years with many purchases only. */
export const CREATOR_EARNINGS_BY_YEAR = [
  { year: 2023, earnings: 2439.6, transactions: 38 },
  { year: 2024, earnings: 1544.7, transactions: 45 },
  { year: 2025, earnings: 16823.98, transactions: 93 },
  { year: 2026, earnings: 9590.25, transactions: 32 },
];

/**
 * Purchases at each exact price, through $500.
 * Same production read as the totals above. Purchases under $3 are already omitted.
 */
export const PURCHASES_BY_PRICE = [
  { price: 4.2, purchases: 2 },
  { price: 5, purchases: 1 },
  { price: 6.99, purchases: 3 },
  { price: 7.99, purchases: 1 },
  { price: 9.99, purchases: 1 },
  { price: 10, purchases: 1 },
  { price: 12, purchases: 9 },
  { price: 12.5, purchases: 10 },
  { price: 14, purchases: 1 },
  { price: 14.99, purchases: 2 },
  { price: 15, purchases: 5 },
  { price: 19, purchases: 1 },
  { price: 20, purchases: 2 },
  { price: 25, purchases: 12 },
  { price: 29, purchases: 16 },
  { price: 30, purchases: 34 },
  { price: 35, purchases: 1 },
  { price: 50, purchases: 6 },
  { price: 55, purchases: 2 },
  { price: 59, purchases: 1 },
  { price: 67, purchases: 5 },
  { price: 75, purchases: 1 },
  { price: 97, purchases: 19 },
  { price: 197, purchases: 1 },
  { price: 199, purchases: 1 },
  { price: 225, purchases: 1 },
  { price: 249, purchases: 1 },
  { price: 275, purchases: 1 },
  { price: 295, purchases: 3 },
  { price: 375, purchases: 65 },
  { price: 492, purchases: 2 },
];

/** Categories with enough purchases to show a dollar total. */
export const PRICING_BY_CATEGORY = [
  {
    label: 'Knowledge',
    purchases: 146,
    earnings: 27920.5,
    oneTimeMedian: 97,
    pricedHubs: 21,
  },
  {
    label: 'Uncategorized',
    purchases: 59,
    earnings: 2799.13,
    oneTimeMedian: 17,
    pricedHubs: 103,
  },
];

export const LIBRARY_HUBS_BY_YEAR = [
  { year: 2020, hubs: 6 },
  { year: 2021, hubs: 9 },
  { year: 2022, hubs: 237 },
  { year: 2023, hubs: 37 },
  { year: 2024, hubs: 89 },
  { year: 2025, hubs: 29 },
  { year: 2026, hubs: 14 },
];

export function formatCount(value) {
  return Number(value).toLocaleString('en-US');
}

export function formatMoney(value) {
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
