/** Product vs company brand — keep in sync with kahana-web `src/constants/brand.js`. */
const APP_NAME = 'Kahana';
const COMPANY_NAME = 'Kahana Group Inc.';
const APP_TAGLINE =
  'Contribute what you know, learn from curated hubs on Explore, and give Aura so quality rises.';

function pageTitle(page) {
  return page ? `${page} | ${APP_NAME}` : APP_NAME;
}

const brand = {
  APP_NAME,
  COMPANY_NAME,
  APP_TAGLINE,
  pageTitle,
};

// CommonJS (require)
module.exports = brand;

// ESM / Next named-import interop: `import { APP_NAME } from '../config/brand'`
module.exports.APP_NAME = APP_NAME;
module.exports.COMPANY_NAME = COMPANY_NAME;
module.exports.APP_TAGLINE = APP_TAGLINE;
module.exports.pageTitle = pageTitle;
module.exports.default = brand;
module.exports.__esModule = true;
