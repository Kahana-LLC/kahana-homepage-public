const {
  ABOUT_ORIGIN,
  NEWSROOM_ORIGIN,
  CAREERS_ORIGIN,
  HELP_ORIGIN,
  absoluteCorporateUrl,
} = require('../../config/site');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSiteMap());
  res.end();
}

function urlEntry(loc, changefreq, priority) {
  return `     <url>
       <loc>${loc}</loc>
       <changefreq>${changefreq}</changefreq>
       <priority>${priority}</priority>
     </url>`;
}

function generateSiteMap() {
  const aboutPages = [
    ['/', 'daily', '1.0'],
    ['/about', 'weekly', '0.8'],
    ['/team', 'weekly', '0.7'],
    ['/manifesto', 'monthly', '0.7'],
    ['/contact', 'monthly', '0.8'],
    ['/security', 'monthly', '0.7'],
    ['/pricing', 'weekly', '0.8'],
    ['/press-kit', 'monthly', '0.6'],
    ['/privacy-policy', 'monthly', '0.5'],
    ['/terms-and-conditions', 'monthly', '0.5'],
  ].map(([path, freq, pri]) =>
    urlEntry(absoluteCorporateUrl(path), freq, pri)
  );

  const newsroomPages = [
    ['/blog', 'daily', '0.9'],
    ['/press', 'weekly', '0.8'],
    ['/events', 'weekly', '0.7'],
  ].map(([path, freq, pri]) =>
    urlEntry(absoluteCorporateUrl(path), freq, pri)
  );

  const careersPages = [['/careers', 'weekly', '0.8']].map(([path, freq, pri]) =>
    urlEntry(absoluteCorporateUrl(path), freq, pri)
  );

  const helpPages = [
    ['/docs', 'weekly', '0.9'],
    ['/support', 'weekly', '0.8'],
    ['/community', 'weekly', '0.7'],
  ].map(([path, freq, pri]) =>
    urlEntry(absoluteCorporateUrl(path), freq, pri)
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- about.kahana.io -->
${aboutPages.join('\n')}

     <!-- newsroom.kahana.io -->
${newsroomPages.join('\n')}

     <!-- careers.kahana.io -->
${careersPages.join('\n')}

     <!-- help.kahana.io -->
${helpPages.join('\n')}

     <!-- Hub loc origins (for crawlers discovering company hosts) -->
${urlEntry(`${ABOUT_ORIGIN}/`, 'daily', '1.0')}
${urlEntry(`${NEWSROOM_ORIGIN}/`, 'daily', '0.9')}
${urlEntry(`${CAREERS_ORIGIN}/`, 'weekly', '0.8')}
${urlEntry(`${HELP_ORIGIN}/`, 'weekly', '0.9')}
   </urlset>
 `;
}
