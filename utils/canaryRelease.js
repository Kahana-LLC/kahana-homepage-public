const RELEASE_URL =
  "https://api.github.com/repos/Kahana-LLC/firefox-oasis/releases/tags/canary";
const USER_AGENT = process.env.GITHUB_API_USER_AGENT || "kahana-homepage-public";

const OASIS_DMG_PATTERN = /^oasis-\d+\.\d+\.\d+\.\d+\..+\.dmg$/i;
const APPLE_SILICON_PATTERNS = [/\.aarch64\.mac\.dmg$/i];
const INTEL_PATTERNS = [/\.x86_64\.mac\.dmg$/i];
const UNIVERSAL_PATTERNS = [/\.universal\.mac\.dmg$/i];

const parseOasisVersion = (name) => {
  const match = name.match(/oasis-(\d+\.\d+\.\d+\.\d+)/i);
  if (!match) return null;
  return match[1].split(".").map((part) => Number.parseInt(part, 10));
};

const compareDmgAssets = (a, b) => {
  const versionA = parseOasisVersion(a.name);
  const versionB = parseOasisVersion(b.name);

  if (versionA && versionB) {
    for (let i = 0; i < Math.max(versionA.length, versionB.length); i += 1) {
      const diff = (versionB[i] ?? 0) - (versionA[i] ?? 0);
      if (diff !== 0) return diff;
    }
    return 0;
  }

  return (
    new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime()
  );
};

const findAsset = (assets, patterns) =>
  assets.find((asset) => {
    const name = asset.name.toLowerCase();
    return patterns.some((pattern) => pattern.test(name));
  });

export const normalizeCanaryRelease = (release) => {
  const dmgAssets = (Array.isArray(release.assets) ? release.assets : [])
    .filter(
      (asset) =>
        typeof asset?.name === "string" &&
        OASIS_DMG_PATTERN.test(asset.name) &&
        asset.state === "uploaded"
    )
    .map((asset) => ({
      name: asset.name,
      url: asset.browser_download_url,
      updatedAt: asset.updated_at,
    }))
    .sort(compareDmgAssets);

  const latest = dmgAssets[0] ?? null;
  const appleSilicon = findAsset(dmgAssets, APPLE_SILICON_PATTERNS);
  const intel = findAsset(dmgAssets, INTEL_PATTERNS);
  const universal = findAsset(dmgAssets, UNIVERSAL_PATTERNS);
  const fallback = appleSilicon || intel || universal || latest;

  return {
    tag: release.tag_name,
    publishedAt: release.published_at,
    latest: latest?.url ?? null,
    appleSilicon: appleSilicon?.url ?? null,
    intel: intel?.url ?? null,
    universal: universal?.url ?? null,
    fallback: fallback?.url ?? null,
    assets: dmgAssets,
  };
};

export async function fetchCanaryReleasePayload() {
  const response = await fetch(RELEASE_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": USER_AGENT,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    const details = await response.text();
    const error = new Error("Failed to fetch canary release");
    error.status = response.status;
    error.details = details;
    throw error;
  }

  const release = await response.json();
  return normalizeCanaryRelease(release);
}

export default async function canaryReleaseHandler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = await fetchCanaryReleasePayload();
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600");
    return res.status(200).json(payload);
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        error: "Failed to fetch canary release",
        details: error.details,
      });
    }

    return res.status(500).json({
      error: "Unable to load canary release",
      details: error?.message,
    });
  }
}
