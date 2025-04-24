const { authors } = require("../config/authors");

// Default avatar placeholder
const DEFAULT_AVATAR =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

// Helper function to get author headshot path
function getAuthorHeadshot(authorName) {
  if (!authorName) return DEFAULT_AVATAR;
  try {
    // Convert author name to lowercase and replace spaces with underscores
    const formattedName = authorName.toLowerCase().replace(/\s+/g, "_");
    // Try to require the image dynamically
    const imagePath = `/assets/headshots/${formattedName}.jpg`;
    // Return the public URL path
    return imagePath;
  } catch (error) {
    console.warn(`Could not load headshot for author: ${authorName}`);
    return DEFAULT_AVATAR;
  }
}

const getAuthorDetails = (authorNames) => {
  if (!Array.isArray(authorNames)) {
    console.warn("getAuthorDetails expects an array of author names");
    return [];
  }

  return authorNames
    .map((nameOrObject) => {
      // Handle case where the author is already an object
      if (typeof nameOrObject === "object" && nameOrObject !== null) {
        const name = nameOrObject.name;
        if (!name) {
          console.warn("Author object missing name property");
          return null;
        }
        const author = authors[name];
        if (!author) {
          console.warn(`Author not found: ${name}`);
          return {
            name,
            role: nameOrObject.role || "Unknown",
            bio: nameOrObject.bio || "",
            linkedinProfile: nameOrObject.linkedinProfile || null,
            avatar: DEFAULT_AVATAR,
          };
        }
        return {
          ...author,
          avatar: getAuthorHeadshot(name),
        };
      }

      // Handle case where the author is a string (name)
      const name = nameOrObject;
      const author = authors[name];
      if (!author) {
        console.warn(`Author not found: ${name}`);
        return {
          name,
          role: "Unknown",
          bio: "",
          linkedinProfile: null,
          avatar: DEFAULT_AVATAR,
        };
      }
      return {
        ...author,
        avatar: getAuthorHeadshot(name),
      };
    })
    .filter(Boolean); // Remove any null entries
};

module.exports = { getAuthorDetails };
