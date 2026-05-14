const RELEASE_URL = 'https://api.github.com/repos/Kahana-LLC/firefox-oasis/releases/tags/canary';
const USER_AGENT = process.env.GITHUB_API_USER_AGENT || 'kahana-homepage-public';

const findAsset = (assets, patterns) => {
  return assets.find((asset) => {
    const name = asset.name.toLowerCase();
    return patterns.some((pattern) => pattern.test(name));
  });
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const response = await fetch(RELEASE_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': USER_AGENT,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (!response.ok) {
      const details = await response.text();
      res.status(response.status).json({ error: 'Failed to fetch canary release', details });
      return;
    }

    const release = await response.json();
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const dmgAssets = assets
      .filter((asset) => typeof asset?.name === 'string' && asset.name.toLowerCase().endsWith('.dmg'))
      .map((asset) => ({
        name: asset.name,
        url: asset.browser_download_url,
      }));

    const appleSilicon = findAsset(dmgAssets, [/arm64/, /aarch64/, /apple\s*silicon/, /m1/, /m2/, /m3/, /m4/]);
    const intel = findAsset(dmgAssets, [/x64/, /x86_64/, /intel/, /amd64/, /x86/]);
    const universal = findAsset(dmgAssets, [/universal/, /all/]);
    const fallback = dmgAssets[0] || null;

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=3600');
    res.status(200).json({
      tag: release.tag_name,
      publishedAt: release.published_at,
      appleSilicon: appleSilicon?.url ?? null,
      intel: intel?.url ?? null,
      universal: universal?.url ?? null,
      fallback: fallback?.url ?? null,
      assets: dmgAssets,
    });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load canary release', details: error?.message });
  }
}
