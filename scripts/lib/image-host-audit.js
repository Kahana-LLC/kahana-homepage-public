const fs = require("fs");
const path = require("path");

const URL_REGEX = /https?:\/\/[^\s"'`)<>\]]+/g;
const IMAGE_LIKE_KEYS = new Set([
  "featuredImage",
  "image",
  "avatar",
  "authorAvatar",
  "thumbnail",
  "ogImage",
  "coverImage",
]);

function extractUrlsFromText(text) {
  return text.match(URL_REGEX) || [];
}

function walkObjectForImageFieldUrls(value, urls = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => walkObjectForImageFieldUrls(item, urls));
    return urls;
  }
  if (!value || typeof value !== "object") return urls;

  Object.entries(value).forEach(([key, item]) => {
    if (typeof item === "string" && IMAGE_LIKE_KEYS.has(key)) {
      const matches = extractUrlsFromText(item);
      matches.forEach((u) => urls.push(u));
      return;
    }
    walkObjectForImageFieldUrls(item, urls);
  });
  return urls;
}

function extractUrlsFromJsImageFields(text) {
  const matches = [];
  const fieldRegex = /\b(featuredImage|image|avatar|thumbnail|ogImage|coverImage)\s*:\s*["'`]([^"'`]+)["'`]/g;
  let match = fieldRegex.exec(text);
  while (match) {
    const maybeUrl = match[2];
    if (/^https?:\/\//i.test(maybeUrl)) matches.push(maybeUrl);
    match = fieldRegex.exec(text);
  }
  return matches;
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (_) {
    return "";
  }
}

function buildHostMap(workspaceRoot) {
  const hostMap = new Map();
  const sourceFiles = [];

  const blogIndexPath = path.join(workspaceRoot, "data", "blog-index.js");
  const authorsPath = path.join(workspaceRoot, "config", "authors.js");
  const blogDir = path.join(workspaceRoot, "data", "blog");

  const candidateFiles = [blogIndexPath, authorsPath];

  if (fs.existsSync(blogDir)) {
    const entries = fs
      .readdirSync(blogDir)
      .filter((name) => name.endsWith(".json"))
      .map((name) => path.join(blogDir, name));
    candidateFiles.push(...entries);
  }

  candidateFiles.forEach((absolutePath) => {
    if (!fs.existsSync(absolutePath)) return;
    sourceFiles.push(absolutePath);

    const relPath = path.relative(workspaceRoot, absolutePath).replaceAll(path.sep, "/");
    const content = safeRead(absolutePath);
    let urls = [];

    if (absolutePath.endsWith(".json")) {
      try {
        const parsed = JSON.parse(content);
        urls = walkObjectForImageFieldUrls(parsed);
      } catch (_) {
        urls = extractUrlsFromJsImageFields(content);
      }
    } else {
      urls = extractUrlsFromJsImageFields(content);
    }

    urls.forEach((url) => {
      let hostname;
      try {
        hostname = new URL(url).hostname;
      } catch (_) {
        return;
      }
      if (!hostMap.has(hostname)) {
        hostMap.set(hostname, new Set());
      }
      hostMap.get(hostname).add(relPath);
    });
  });

  const hosts = Array.from(hostMap.keys()).sort();
  const byHost = {};
  hosts.forEach((host) => {
    byHost[host] = Array.from(hostMap.get(host)).sort();
  });

  return {
    hosts,
    byHost,
    sourceFiles: sourceFiles.map((p) => path.relative(workspaceRoot, p).replaceAll(path.sep, "/")),
  };
}

function hostnamePatternToRegex(pattern) {
  const escaped = pattern
    .replaceAll(".", "\\.")
    .replaceAll("**", "§§DOUBLE_WILDCARD§§")
    .replaceAll("*", "[^.]+")
    .replaceAll("§§DOUBLE_WILDCARD§§", ".*");
  return new RegExp(`^${escaped}$`, "i");
}

function pathnamePatternToRegex(pattern) {
  const escaped = pattern
    .replaceAll("/", "\\/")
    .replaceAll(".", "\\.")
    .replaceAll("**", "§§DOUBLE_WILDCARD§§")
    .replaceAll("*", "[^/]+")
    .replaceAll("§§DOUBLE_WILDCARD§§", ".*");
  return new RegExp(`^${escaped}$`, "i");
}

function isHostAllowed(hostname, allowedDomains, remotePatterns) {
  if (allowedDomains.has(hostname)) return true;
  return remotePatterns.some((pattern) => {
    const hostRegex = hostnamePatternToRegex(pattern.hostname || "");
    const pathRegex = pathnamePatternToRegex(pattern.pathname || "/**");
    return hostRegex.test(hostname) && pathRegex.test("/");
  });
}

module.exports = {
  buildHostMap,
  isHostAllowed,
};
