const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://kahana.io').replace(
  /\/$/,
  ''
);

function absoluteUrl(path = '') {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

module.exports = { SITE_URL, absoluteUrl };
