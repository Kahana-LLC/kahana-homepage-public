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
    ['/help', 'weekly', '0.9'],
    ['/help/explore', 'weekly', '0.8'],
    ['/help/hubs', 'weekly', '0.8'],
    ['/help/clubs', 'weekly', '0.8'],
    ['/help/for-you-and-taste', 'weekly', '0.7'],
    ['/help/adding-files-and-embeds', 'weekly', '0.7'],
    ['/help/profiles', 'weekly', '0.8'],
    ['/help/how-aura-works', 'weekly', '0.8'],
    ['/help/earning', 'weekly', '0.8'],
    ['/help/trust', 'weekly', '0.8'],
    ['/help/delete-my-account', 'weekly', '0.6'],
    ['/aura', 'weekly', '0.7'],
    ['/one-place', 'weekly', '0.7'],
    ['/verifiable-credibility', 'weekly', '0.7'],
    ['/tailored-for-understanding', 'weekly', '0.7'],
    ['/gain-exposure', 'weekly', '0.7'],
    ['/help-others-learn', 'weekly', '0.7'],
    ['/earn-money', 'weekly', '0.7'],
    ['/success-stories', 'weekly', '0.8'],
    ['/features', 'weekly', '0.9'],
    ['/features/explore', 'weekly', '0.8'],
    ['/features/hubs', 'weekly', '0.8'],
    ['/features/preview-reels', 'weekly', '0.8'],
    ['/features/clubs', 'weekly', '0.8'],
    ['/features/analytics', 'weekly', '0.8'],
    ['/features/earning', 'weekly', '0.8'],
    ['/features/aura', 'weekly', '0.7'],
    ['/features/profiles', 'weekly', '0.7'],
    ['/features/trust', 'weekly', '0.7'],
    ['/for', 'weekly', '0.8'],
    ['/for/learners', 'weekly', '0.7'],
    ['/for/buyers', 'weekly', '0.7'],
    ['/for/creators', 'weekly', '0.7'],
    ['/for/authors', 'weekly', '0.7'],
    ['/for/clubs', 'weekly', '0.7'],
    ['/use-cases', 'weekly', '0.8'],
    ['/use-cases/book-clubs', 'weekly', '0.7'],
    ['/use-cases/selling-digital-products', 'weekly', '0.7'],
    ['/use-cases/selling-ebooks', 'weekly', '0.7'],
    ['/use-cases/selling-courses', 'weekly', '0.7'],
    ['/use-cases/workshops', 'weekly', '0.7'],
    ['/use-cases/playbooks', 'weekly', '0.7'],
    ['/use-cases/journals', 'weekly', '0.7'],
    ['/help/preview-reels', 'weekly', '0.7'],
    ['/help/get-started-creators', 'weekly', '0.7'],
    ['/help/get-started-learners', 'weekly', '0.7'],
    ['/help/turn-on-paid-access', 'weekly', '0.7'],
    ['/help/creator-analytics', 'weekly', '0.7'],
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
    ['/help', 'weekly', '0.9'],
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
