/**
 * Static catalog of illustrative Oasis assistant capabilities for marketing pages.
 * Not an exhaustive product contract—extend as features ship.
 *
 * @typedef {Object} OasisSkill
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {string} description
 * @property {string[]} examplePrompts
 * @property {string[]} [aliases]
 * @property {string[]} [tags]
 * @property {string[]} [intentVerbs]
 * @property {string|null} [platformNotes]
 */

/** @type {OasisSkill[]} */
export const oasisSkillsCatalog = [
  {
    id: 'tab-window-management',
    name: 'Tab and window management',
    category: 'Tabs and windows',
    description:
      'List, open, close, move, and organize tabs and windows without digging through menus.',
    examplePrompts: ['What tabs do I have open?', 'Close the tab about…', 'Open this URL in a new tab'],
    aliases: ['windows', 'many tabs', 'tab strip'],
    tags: ['tabs', 'windows', 'session', 'navigation'],
    intentVerbs: ['list', 'open', 'close', 'move', 'organize', 'show'],
  },
  {
    id: 'tab-groups',
    name: 'Tab groups',
    category: 'Tab groups',
    description: 'Create, rename, add or remove tabs, and list groups so a messy session stays scannable.',
    examplePrompts: ['List my tab groups', 'Add this tab to the research group', 'Rename my group to…'],
    aliases: ['group tabs', 'research group', 'organize by project'],
    tags: ['groups', 'organization', 'projects'],
    intentVerbs: ['create', 'rename', 'add', 'remove', 'list', 'organize'],
  },
  {
    id: 'bookmarks-folders',
    name: 'Bookmarks and folders',
    category: 'Bookmarks',
    description:
      'Treat bookmark folders as first-class: list, create, rename, add tabs, open sets of saved pages.',
    examplePrompts: ['Show my bookmark folders', 'Save this tab to…', 'Open everything in my reading folder'],
    aliases: ['favorites', 'saved pages', 'reading list'],
    tags: ['bookmarks', 'folders', 'saved'],
    intentVerbs: ['save', 'open', 'list', 'create', 'rename'],
  },
  {
    id: 'semantic-history',
    name: 'Semantic search and history',
    category: 'History',
    description: 'Find pages by meaning—not only exact keywords—when you half-remember a visit.',
    examplePrompts: ['Find that article about…', 'What did I read about… last week?', 'Search my history for…'],
    aliases: ['browsing history', 'past visits', 'what did I read'],
    tags: ['history', 'search', 'semantic', 'recall'],
    intentVerbs: ['find', 'search', 'what', 'remember'],
  },
  {
    id: 'summarization',
    name: 'Summarization and page understanding',
    category: 'Page understanding',
    description: 'Turn long articles into short answers grounded in what you are viewing.',
    examplePrompts: ['Summarize this page', 'What are the main points?'],
    aliases: ['tl;dr', 'main points', 'article summary'],
    tags: ['summary', 'reading', 'active tab', 'long page'],
    intentVerbs: ['summarize', 'explain', 'what', 'main'],
  },
  {
    id: 'memory-lookup',
    name: 'Memory-style lookup',
    category: 'Saved context',
    description: 'Search across what the assistant can access, including saved and visited context.',
    examplePrompts: ['Have I visited…?', 'Find… in my saved stuff'],
    aliases: ['saved stuff', 'have I been', 'visited before'],
    tags: ['memory', 'saved', 'context'],
    intentVerbs: ['find', 'have', 'visited', 'saved'],
  },
  {
    id: 'web-search',
    name: 'Web search (when enabled)',
    category: 'Web',
    description: 'Augment on-device context with the open web when the task needs fresh sources.',
    examplePrompts: ['Look up…', "What's the latest on…?"],
    aliases: ['internet', 'google', 'news'],
    tags: ['web', 'lookup', 'fresh'],
    intentVerbs: ['look', 'search', 'latest', 'what'],
    platformNotes: 'Requires web search to be enabled in your build or settings.',
  },
];

export function getOasisSkillCategories(skills) {
  const set = new Set(skills.map((s) => s.category));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
