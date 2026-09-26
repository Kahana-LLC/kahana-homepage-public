/** Sample of countries readers already come from (Kahana reaches 110+). ISO 3166-1 alpha-2. */
export const GLOBAL_READER_FLAGS = [
  { name: 'United States', code: 'us' },
  { name: 'Canada', code: 'ca' },
  { name: 'Mexico', code: 'mx' },
  { name: 'Brazil', code: 'br' },
  { name: 'Argentina', code: 'ar' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'France', code: 'fr' },
  { name: 'Germany', code: 'de' },
  { name: 'Spain', code: 'es' },
  { name: 'Italy', code: 'it' },
  { name: 'Nigeria', code: 'ng' },
  { name: 'Kenya', code: 'ke' },
  { name: 'South Africa', code: 'za' },
  { name: 'Egypt', code: 'eg' },
  { name: 'India', code: 'in' },
  { name: 'China', code: 'cn' },
  { name: 'Japan', code: 'jp' },
  { name: 'South Korea', code: 'kr' },
  { name: 'Philippines', code: 'ph' },
  { name: 'Indonesia', code: 'id' },
  { name: 'Australia', code: 'au' },
  { name: 'United Arab Emirates', code: 'ae' },
  { name: 'Israel', code: 'il' },
  { name: 'Sweden', code: 'se' },
];

/** Local Stripe-style rectangular flags (public/images/flags). */
export function flagImageUrl(code) {
  return `/images/flags/${String(code).toLowerCase()}.png`;
}
