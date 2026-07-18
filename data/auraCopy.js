/**
 * Shared Aura explainer facts (home teasers, /aura page, FAQ alignment).
 * Keep sentences short and friendly. No em dashes.
 */

export const AURA_PAGE_CANONICAL = 'https://about.kahana.io/aura';

export const AURA_SEO = {
  title: 'Aura | Kahana',
  description:
    'Aura is how Kahana promotes quality: a scarce daily endorsement you control. Give it to hubs or to files inside hubs—file Aura rolls up to the hub and surfaces noteworthy work in search.',
};

/** Long-form sections for /aura (order locked). */
export const AURA_SECTIONS = [
  {
    id: 'what',
    title: 'What Aura is',
    paragraphs: [
      'Aura is community endorsement. You give it to hubs and to files inside hubs that you find worth learning from, so quality can rise across the library.',
      'Aura is not money. It is not crypto. It is not payment. It is a careful signal from people who care about what they learn.',
    ],
  },
  {
    id: 'why-not-reviews',
    title: 'Why not star ratings and written reviews?',
    paragraphs: [
      'Traditional review systems do not work perfectly for either side. Star scores and written reviews look simple, but they create a mess in practice.',
      'A single negative review can drown out many thoughtful positive ones. People often care more about how many reviews something has than about the score itself. A 5.0 with one review does not feel trustworthy. A flood of glowing reviews can feel just as suspicious.',
      'Writers spend energy managing optics. Readers second-guess every average. So we wanted something different: Aura.',
      'Aura is scarce. You only get a little each day. That budget is yours to give and take, so every mark tends to mean more than another anonymous star. You can see who endorsed a hub or file. No self-Aura. The goal is a fairer signal of quality, not a pile of opinions that cancel each other out.',
    ],
  },
  {
    id: 'budget',
    title: 'How your daily budget works',
    paragraphs: [
      'You automatically have up to 5 Aura to give each day. Give all of your Aura to one hub or file, or split it across a few.',
      'Your Aura renews daily. At midnight UTC you get 5 Aura again to give, even if you used all 5 already.',
    ],
  },
  {
    id: 'stays',
    title: 'What stays and what renews',
    paragraphs: [
      'When your daily Aura renews, that is a fresh budget to give. Aura you already placed on a hub or file stays there. It does not vanish overnight.',
      'You control it. If you change your mind later, you can remove Aura you gave. Given Aura stays until you decide otherwise.',
    ],
  },
  {
    id: 'who',
    title: 'Who can give Aura',
    paragraphs: [
      'Anyone with an account can give Aura. You do not need to create a hub first.',
      'Learners and creators share the same daily budget and the same rules.',
    ],
  },
  {
    id: 'target',
    title: 'What you can give Aura to',
    paragraphs: [
      'You can give Aura to hubs of digital artifacts, and to files inside those hubs (videos, documents, ebooks, images, links, and more).',
      'When you give Aura to a file, that hub also receives 1 Aura. Giving Aura to a hub does not add Aura to the files inside it. That one-way rollup helps particularly noteworthy files get exposure: file Aura shows on the file inside the hub and in search and ranking.',
      'You cannot give Aura directly to hub owners, profiles, or other users as people.',
    ],
  },
  {
    id: 'self',
    title: 'No self-Aura',
    paragraphs: [
      'You cannot give Aura to your own hubs or to files you own in them. Endorsement has to come from others.',
    ],
  },
  {
    id: 'create',
    title: 'Create a hub, then earn Aura',
    paragraphs: [
      'To contribute knowledge to the library, you Create a hub, add digital artifacts, and optimize it so people can find it (clear names, tags, description, Explore listing).',
      'You can invite editors and admins to collaborate on a hub. Team contribution still starts with creating that hub.',
      'When others value your hub or a standout file inside it, they may give Aura. Creating is how you add knowledge. Creating is not required to give Aura.',
    ],
  },
];
