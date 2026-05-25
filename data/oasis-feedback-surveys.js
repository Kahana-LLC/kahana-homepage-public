export const oasisZenReward = {
  tokensPerDay: 1000000,
  monthsPerSurvey: 1,
  maxMonthsIfBoth: 2,
  activationDays: '2-3 business days',
};

export const oasisFeedbackSurveys = {
  nps: {
    id: 'nps',
    slug: 'oasis-nps',
    tallyUrl: 'https://tally.so/r/ODoBz7',
    pageUrl: 'https://kahana.co/oasis-nps',
    seoTitle: 'Refer a Friend Survey',
    title: 'Refer a Friend Survey',
    headline: 'How likely are you to refer a friend?',
    description:
      'Your honest score helps us understand how Oasis is landing. It takes about one minute.',
    crossLink: {
      href: '/oasis-pmf',
      label: 'Also share how we can improve',
    },
    iframeHeight: 520,
    iframeTitle: 'Oasis NPS Survey',
  },
  pmf: {
    id: 'pmf',
    slug: 'oasis-pmf',
    tallyUrl: 'https://tally.so/r/EkNbXX',
    pageUrl: 'https://kahana.co/oasis-pmf',
    seoTitle: 'Help Us Improve',
    title: 'Help Us Improve',
    headline: 'How can we improve?',
    description:
      'Tell us what is working and what we should build next. Your answers go directly to the Oasis team.',
    crossLink: {
      href: '/oasis-nps',
      label: 'Also share how likely you are to refer a friend',
    },
    iframeHeight: 640,
    iframeTitle: 'Oasis PMF Survey',
  },
};

export { buildTallyEmbedUrl } from '../utils/tally';
