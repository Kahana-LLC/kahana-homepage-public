import { ROADMAP_SNAPSHOT } from '../data/roadmap-snapshot';
import { publicCopyForIssue } from '../data/roadmap-public-copy';

const LINEAR_GQL = 'https://api.linear.app/graphql';
const TEAM_NAME = 'Kahana';
const PUBLIC_LABEL = 'Public roadmap';
const SHIPPED_DAYS = 90;
const SHIPPED_CAP = 12;
const FETCH_MS = 10000;

const ISSUE_QUERY = `
  query PublicRoadmap($after: String) {
    issues(
      first: 50
      after: $after
      filter: {
        team: { name: { eq: "${TEAM_NAME}" } }
        labels: { name: { eq: "${PUBLIC_LABEL}" } }
        state: { type: { nin: ["canceled", "duplicate"] } }
      }
    ) {
      pageInfo { hasNextPage endCursor }
      nodes {
        id
        identifier
        title
        createdAt
        completedAt
        state { name type }
        labels { nodes { name } }
      }
    }
  }
`;

function publicKind(labelNames) {
  const names = labelNames.map((n) => String(n || '').toLowerCase());
  if (names.includes('improvement') && !names.includes('feature')) return 'Improvement';
  return 'Feature';
}

function mapIssue(node) {
  const labels = (node.labels?.nodes || []).map((l) => l.name);
  const copy = publicCopyForIssue({
    identifier: node.identifier,
    title: node.title,
  });
  return {
    id: node.id,
    kind: publicKind(labels),
    statusType: node.state?.type || '',
    createdAt: node.createdAt || null,
    completedAt: node.completedAt || null,
    title: copy.title,
    teaser: copy.teaser,
    what: copy.what,
    benefit: copy.benefit,
  };
}

function assignColumns(issues) {
  const cutoff = Date.now() - SHIPPED_DAYS * 24 * 60 * 60 * 1000;
  const backlog = [];
  const inProgress = [];
  const shipped = [];

  issues.forEach((issue) => {
    if (!issue.title) return;
    if (issue.statusType === 'canceled' || issue.statusType === 'duplicate') return;
    if (issue.statusType === 'started') {
      inProgress.push(issue);
      return;
    }
    if (issue.statusType === 'completed') {
      const done = issue.completedAt ? new Date(issue.completedAt).getTime() : 0;
      if (Number.isFinite(done) && done >= cutoff) shipped.push(issue);
      return;
    }
    if (issue.statusType === 'backlog' || issue.statusType === 'unstarted') {
      backlog.push(issue);
    }
  });

  shipped.sort((a, b) => {
    const ta = new Date(a.completedAt || 0).getTime();
    const tb = new Date(b.completedAt || 0).getTime();
    return tb - ta;
  });

  const slim = (row) => ({
    id: row.id,
    title: row.title,
    teaser: row.teaser,
    what: row.what,
    benefit: row.benefit,
    kind: row.kind,
    createdAt: row.createdAt,
  });

  return {
    backlog: backlog.map(slim),
    inProgress: inProgress.map(slim),
    shipped: shipped.slice(0, SHIPPED_CAP).map(slim),
  };
}

async function linearIssues(apiKey) {
  const nodes = [];
  let after = null;
  for (let page = 0; page < 6; page += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_MS);
    let body;
    try {
      const res = await fetch(LINEAR_GQL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: apiKey,
        },
        body: JSON.stringify({ query: ISSUE_QUERY, variables: { after } }),
        signal: controller.signal,
      });
      body = await res.json();
      if (!res.ok || body.errors) return null;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
    const conn = body?.data?.issues;
    if (!conn) return null;
    nodes.push(...(conn.nodes || []));
    if (!conn.pageInfo?.hasNextPage) break;
    after = conn.pageInfo.endCursor;
  }
  return nodes;
}

export async function fetchPublicRoadmap() {
  const apiKey = process.env.LINEAR_API_KEY;
  if (!apiKey) {
    return { ...ROADMAP_SNAPSHOT, live: false };
  }

  const nodes = await linearIssues(apiKey);
  if (!nodes) {
    return { ...ROADMAP_SNAPSHOT, live: false };
  }

  const columns = assignColumns(nodes.map(mapIssue));
  const hasAny = columns.backlog.length + columns.inProgress.length + columns.shipped.length;
  if (!hasAny) {
    return { ...ROADMAP_SNAPSHOT, live: false };
  }

  return {
    fetchedAt: new Date().toISOString(),
    live: true,
    columns,
  };
}
