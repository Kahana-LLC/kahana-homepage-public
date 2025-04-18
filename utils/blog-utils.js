// Default avatar placeholder
export const DEFAULT_AVATAR =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

// Function to get author headshot from name
export function getAuthorHeadshot(authorName) {
  if (!authorName) return DEFAULT_AVATAR;

  // Convert author name to first_last.jpg format
  const formattedName =
    authorName
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "") + ".jpg";

  // Return the path to the headshot
  return `/assets/headshots/${formattedName}`;
}

// Default placeholder for failed image loads
export const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Blog categories
export const categories = [
  "All",
  "Engineering",
  "Security",
  "Cloud Computing",
  "Development",
  "Company News",
  "Product Updates",
];

// Utility function to truncate text
export function truncateExcerpt(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

// Utility function to format date
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}
