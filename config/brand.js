/** Product vs company brand — keep in sync with kahana-web `src/constants/brand.js`. */
const APP_NAME = 'Kahana';
const COMPANY_NAME = 'Kahana Group Inc.';
const APP_TAGLINE =
  'Contribute what you know, learn from curated hubs on Explore, and give Aura so quality rises.';

const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/kahanahq';
const X_PROFILE_URL = 'https://x.com/KahanaHQ';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@kahanaHQ';
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/kahanahq';

function pageTitle(page) {
  return page ? `${page} | ${APP_NAME}` : APP_NAME;
}

const brand = {
  APP_NAME,
  COMPANY_NAME,
  APP_TAGLINE,
  LINKEDIN_COMPANY_URL,
  X_PROFILE_URL,
  YOUTUBE_CHANNEL_URL,
  INSTAGRAM_PROFILE_URL,
  pageTitle,
};

// CommonJS (require)
module.exports = brand;

// ESM / Next named-import interop: `import { APP_NAME } from '../config/brand'`
module.exports.APP_NAME = APP_NAME;
module.exports.COMPANY_NAME = COMPANY_NAME;
module.exports.APP_TAGLINE = APP_TAGLINE;
module.exports.LINKEDIN_COMPANY_URL = LINKEDIN_COMPANY_URL;
module.exports.X_PROFILE_URL = X_PROFILE_URL;
module.exports.YOUTUBE_CHANNEL_URL = YOUTUBE_CHANNEL_URL;
module.exports.INSTAGRAM_PROFILE_URL = INSTAGRAM_PROFILE_URL;
module.exports.pageTitle = pageTitle;
module.exports.default = brand;
module.exports.__esModule = true;
