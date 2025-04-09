import { createClient } from "pexels";

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY);

export async function searchPhotos(query, options = {}) {
  try {
    const response = await client.photos.search({
      query,
      per_page: options.per_page || 1,
      orientation: options.orientation || "landscape",
    });

    if (response && response.photos && response.photos.length > 0) {
      return response.photos;
    }

    console.warn(`No photos found for query: ${query}`);
    return [];
  } catch (error) {
    console.error("Error fetching photos from Pexels:", error);
    return [];
  }
}

export async function getRandomPhoto(query) {
  try {
    const photos = await searchPhotos(query, { per_page: 15 });
    if (!photos || photos.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex];
  } catch (error) {
    console.error("Error getting random photo:", error);
    return null;
  }
}

export function getOptimizedPhotoUrl(photo, width = 800) {
  if (!photo || !photo.src) return null;
  return photo.src.large2x || photo.src.large || photo.src.original;
}
