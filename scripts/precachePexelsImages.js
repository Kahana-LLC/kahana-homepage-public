import { blogIndex } from "../data/blog-index.js";
import { searchPhotos } from "../utils/pexels.js";

async function precacheImages() {
  for (const post of blogIndex) {
    const query = post.defaultImageQuery;
    if (!query) continue;
    console.log(`Caching images for: ${query}`);
    try {
      await searchPhotos(query, { per_page: 2 });
    } catch (err) {
      console.warn(`Failed to cache images for: ${query}`);
    }
    // Wait 2.5 seconds to avoid rate limits
    await new Promise((res) => setTimeout(res, 2500));
  }
  console.log("Pre-caching complete!");
}

precacheImages();
