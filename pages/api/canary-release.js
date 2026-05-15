const RELEASE_URL = "https://api.github.com/repos/Kahana-LLC/firefox-oasis/releases/tags/canary";
const USER_AGENT = process.env.GITHUB_API_USER_AGENT || "kahana-homepage-public";

const findAsset = (assets, patterns) =>
  assets.find((asset) => {
    const name = asset.name.toLowerCase();
    return patterns.some((pattern) => pattern.test(name));
  });

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(RELEASE_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": USER_AGENT,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!response.ok) {
      const details = await response.text();
      return res
        .status(response.status)
        .json({ error: "Failed to fetch canary release", details });
    }

    const release = await response.json();

    const dmgAssets = (Array.isArray(release.assets) ? release.assets : [])
      .filter(
        (asset) =>
          typeof asset?.name === "string" &&
          asset.name.toLowerCase().endsWith(".dmg") &&
          asset.state === "uploaded"
      )
      .sort(
        (a, b) =>
          new Date(b.updated_at || b.created_at || 0).getTime() -
          new Date(a.updated_at || a.created_at || 0).getTime()
      )
      .map((asset) => ({
        name: asset.name,
        url: asset.browser_download_url,
        updatedAt: asset.updated_at,
      }));

    const appleSilicon = findAsset(dmgAssets, [
      /arm64/,
      /aarch64/,
      /apple\s*silicon/,
      /m\d+/,
    ]);
    const intel = findAsset(dmgAssets, [/x86_64/, /amd64/, /x64/, /intel/]);
    const universal = findAsset(dmgAssets, [/universal/]);
    const fallback = appleSilicon || intel || universal || dmgAssets[0] || null;

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600");
    return res.status(200).json({
      tag: release.tag_name,
      publishedAt: release.published_at,
      appleSilicon: appleSilicon?.url ?? null,
      intel: intel?.url ?? null,
      universal: universal?.url ?? null,
      fallback: fallback?.url ?? null,
      assets: dmgAssets,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Unable to load canary release", details: error?.message });
  }
}
