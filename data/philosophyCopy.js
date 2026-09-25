/**
 * Mission, vision, dream (Philomaths, Dialectic, Mouseion).
 * Home shows the nutshell. /philosophy expands each pillar.
 */

export const PHILOSOPHY_PAGE_CANONICAL = 'https://about.kahana.io/philosophy';

export const PHILOSOPHY_INTRO =
  'Our philosophy has three pillars: Philomaths, Dialectic, and Mouseion. When we nourish people who love to learn, open space for conversation toward the truth, and keep a house where great minds work together, the human race goes far.';

export const PHILOSOPHY_PILLARS = [
  {
    id: 'philomaths',
    role: 'Mission',
    word: 'Philomaths',
    gloss: 'support people who love to learn',
    etymology: 'From Greek: philos, loving, and manthanein, to learn',
    cardBody:
      'Our mission is to gather knowledge of every kind into one library. We want to build an ideal place for people who love to learn. We want to bring all knowledge into one convenient place to read, watch, highlight, and discuss, so there is no need to journey across scattered platforms.',
    tone: 'mission',
    expand: [
      'Philomaths are people who love to learn. Kahana exists for them first.',
      'The Aura Library is that one place: hubs of unique knowledge, files beside discussion, and a global catalog so you are not jumping platforms to find the next serious thing to open.',
      'Create, learn, and research on a global scale. Readers already come from over 110 countries and speak many languages. The library is meant to hold heady topics and heady subjects, not only what is easy to scroll past.',
    ],
  },
  {
    id: 'dialectic',
    role: 'Vision',
    word: 'Dialectic',
    gloss: 'spark conversations toward the truth',
    etymology: 'From Greek dialegesthai, to converse',
    cardBody:
      'We envision a future where people can trust what they learn. Misinformation makes quality hard to see. Use your Aura to signal to other people what is worthy of our attention. Once the knowledge is sound, we hope it leads to more discussion among people.',
    tone: 'vision',
    expand: [
      'Quality has to be visible. Aura is the scarce signal that says this hub or file was worth attention. It helps careful work rise and keeps low-effort filler from winning by volume alone.',
      'Discussion belongs next to the work. Hub and file discussions (and clubs when a group needs a room) are how dialectic happens on Kahana: conversation toward the truth, not another empty feed.',
      'Trust is communal. You endorse what helped you. Others see who gave Aura. The library gets a public record of what people found worthy.',
    ],
  },
  {
    id: 'mouseion',
    role: 'Dream',
    word: 'Mouseion',
    gloss: 'where great minds work together',
    etymology: 'From Greek, a temple of the Muses, and the origin of the word museum',
    cardBody:
      'We dream that Kahana will become a special place where new work and ideas can arise. When we have access to all our collective knowledge and join in conversations towards truth, there will be immense progress and innovation.',
    tone: 'dream',
    expand: [
      'A Mouseion is a house of the Muses: a place where minds meet and new work can start. That is the dream for Kahana.',
      'The Library still needs to be built with your help. Unique knowledge only arrives when someone uploads it, lists it, and stands behind it.',
      'When people can create, learn, and research together at global scale, progress is not a slogan. It is what happens when the best work is findable and the conversation stays next to it.',
    ],
  },
];

export const PHILOSOPHY_TONE_STYLES = {
  mission: {
    bg: '!bg-[#EDE6D2]',
    role: '!text-[#A67C2A]',
    word: '!text-[#A67C2A]',
    icon: 'text-[#A67C2A]',
    well: 'bg-white/70 text-[#A67C2A]',
  },
  vision: {
    bg: '!bg-[#E8DCC4]',
    role: '!text-[#8A6622]',
    word: '!text-[#8A6622]',
    icon: 'text-[#8A6622]',
    well: 'bg-white/70 text-[#8A6622]',
  },
  dream: {
    bg: '!bg-[#D9DACB]',
    role: '!text-[#4F5140]',
    word: '!text-[#4F5140]',
    icon: 'text-[#4F5140]',
    well: 'bg-white/70 text-[#4F5140]',
  },
};
