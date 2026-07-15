/**
 * Copy for /features/earning (Optional earning).
 * Sharing first; monetization optional. 5% Kahana + Stripe processing.
 */

export const EARNING_FEATURE_CANONICAL = 'https://about.kahana.io/features/earning';

export const EARNING_FEATURE_SEO = {
  title: 'Optional earning | Kahana Features',
  description:
    'Knowledge sharing came first. Paid access is optional—turn it on when demand shows up. 5% platform take rate, plus Stripe processing fees.',
};

export const EARNING_FEATURE_ONE_LINER =
  'Knowledge sharing came first. Paid access is optional—turn it on when demand shows up. 5% platform take rate.';

export const EARNING_TURN_ON_STEPS = [
  {
    title: 'Connect Stripe',
    body: 'Link Stripe Connect so payouts can go to you. You only need this if you want to charge for access.',
  },
  {
    title: 'Enable monetization',
    body: 'Turn it on in hub Monetization and Storefront settings (also reached via /monetization/:workspaceId).',
  },
  {
    title: 'Set a price',
    body: 'Choose one-time or monthly. Optionally offer a free trial or storefront peek before someone buys.',
  },
  {
    title: 'Buyers hit the paywall',
    body: 'Non-buyers see the paywall on /hub/:id. They pay through Stripe; access is granted when payment succeeds.',
  },
];

export const EARNING_FREE_FIRST_FACTS = [
  'Kahana started as sharing. Monetization came later so creators can charge for access if they want.',
  'Free listed hubs are first-class. Selling is not required to belong in the library.',
  'Earning works on Free and Growth. Plans are about capacity. Growth does not waive the 5% take rate.',
];

export const EARNING_FEE_FACTS = [
  'Kahana’s marketplace fee is 5% on hub sales processed through Stripe Connect.',
  'Stripe’s usual card processing fees apply on top. That processing cut is Stripe’s, not an extra Kahana fee dressed up as one number.',
  'Kahana does not hold your funds. Payouts go through Stripe Connect to the creator.',
];

export const EARNING_EXTRA_FACTS = [
  'Adult and monetized hubs still require login, and adult content also needs age verification.',
  'In-product analytics cover views, members or purchasers, and Aura. Detailed dollar reporting lives in Stripe.',
];
