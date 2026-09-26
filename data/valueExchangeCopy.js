/**
 * Value Exchange — crystalline marketing page (/value-exchange).
 * Full HQ note remains in the source hub; this page is the short public form.
 */

import { ABOUT_ORIGIN } from '../config/site';

export const VALUE_EXCHANGE_CANONICAL = `${ABOUT_ORIGIN}/value-exchange`;

export const VALUE_EXCHANGE_HUB_URL =
  'https://kahana.io/hub/Rzl4UEbzVeym5xqtQ4ZS?resource=46uK8ckhVBPwnyZXVCj1';

export const VALUE_EXCHANGE_INTRO = {
  eyebrow: 'Value exchange',
  title: 'The Library becomes alive when value moves in every direction',
  lead:
    'Kahana is not a one-way feed. Creators build pathways. Learners bring them to life. The community makes value visible. Kahana helps value travel.',
};

export const VALUE_EXCHANGE_SECTIONS = [
  {
    id: 'no-one-is-only-one-thing',
    title: 'No one is only one thing',
    paragraphs: [
      'No one is only a creator. No one is only a learner. Every person carries both. You arrive to learn, then you leave a path for someone else—a hub, a question, Aura, a share.',
    ],
    pullQuotes: [
      'Creation is learning made visible.',
      'Learning is creation beginning.',
    ],
  },
  {
    id: 'living-cycle',
    title: 'The living cycle',
    paragraphs: [
      'Value circulates: enter with curiosity, discover a path, learn, give something back, and the next person finds a stronger trail. The Library grows because people add value—not only take it.',
    ],
    pullQuotes: [
      'The Library is not a pipeline from creator to consumer.',
      'It is a cycle of human becoming.',
    ],
  },
  {
    id: 'aura',
    title: 'Aura: recognition as value',
    paragraphs: [
      'Aura is a scarce signal that says “I found something here.” It is not payment, not proof of truth, and not a popularity score. One Aura is a spark. A pattern of Aura is a path.',
    ],
    pullQuotes: ['Aura helps meaningful work travel.'],
  },
  {
    id: 'monetary',
    title: 'Money as healthy exchange',
    paragraphs: [
      'Payment should be voluntary, clear, and fair: the learner gains a path, the creator gains sustainability, Kahana earns a transparent fee that keeps the Library running. Free and paid hubs both belong here. Creators choose the price; free trials are open doorways, not traps.',
    ],
    pullQuotes: [
      'Payment helps meaningful work continue.',
      'The goal is not the highest price. It is the healthiest exchange.',
    ],
    table: {
      caption: 'Win-win-win',
      headers: ['Participant', 'Value received'],
      rows: [
        ['Learner', 'Useful work at a clear price, when they need it'],
        ['Creator', 'Revenue, recognition, and a direct relationship'],
        ['Kahana', 'A fee that sustains discovery, trust, and infrastructure'],
      ],
    },
  },
  {
    id: 'principles',
    title: 'Principles for exchange',
    paragraphs: [
      'Every monetization feature should be voluntary, clear, informed, respectful, sustainable, and library-first—never dark patterns, empty funnels, or a marketplace without a soul.',
    ],
    pullQuotes: [
      'Kahana does not own the meaning.',
      'It builds the place where meaning can meet.',
    ],
  },
  {
    id: 'final',
    title: 'The final idea',
    paragraphs: [
      'Kahana’s value is not a transaction between a platform and a user. It is a living exchange among people. The work travels. The people grow. The Library becomes more alive.',
    ],
    pullQuotes: [
      'Creators build pathways. Learners bring them to life.',
      'Aura makes recognition visible. Payment helps work continue.',
      'Kahana helps value travel.',
    ],
  },
];
