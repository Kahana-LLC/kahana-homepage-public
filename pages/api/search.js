import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "7IUAU6VN0W",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || "c2a4d857f669ce2b5a26ef929a9b9974"
);

const index = searchClient.initIndex("Prod_PublicWorkspaces");

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { q, category } = req.query;

  try {
    const searchParams = {
      hitsPerPage: 9,
    };

    if (category) {
      searchParams.filters = `metadata.tags:${category}`;
    }

    const { hits } = await index.search(q || '', searchParams);

    res.status(200).json({ hits });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Search failed', error: error.message });
  }
}
