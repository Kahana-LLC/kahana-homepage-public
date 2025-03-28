import { createClient } from "pexels";

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY);

export async function searchPhotos(query, perPage = 1) {
  try {
    const response = await client.photos.search({
      query,
      per_page: perPage,
    });
    return response.photos;
  } catch (error) {
    console.error("Error fetching photos from Pexels:", error);
    return null;
  }
}

export async function getRandomPhoto(query) {
  try {
    const photos = await searchPhotos(query, 15);
    if (!photos || photos.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex];
  } catch (error) {
    console.error("Error getting random photo:", error);
    return null;
  }
}

export function getOptimizedPhotoUrl(photo, width = 800) {
  if (!photo) return null;
  return photo.src.large2x;
}
