const { authors } = require("../config/authors");

// Import headshot images
const headshots = {
  adam_kershner: "/assets/headshots/adam_kershner.jpg",
  jordan_kern: "/assets/headshots/jordan_kern.jpg",
  jescetta_joy: "/assets/headshots/jescetta_joy.jpg",
  vruksha_joshi: "/assets/headshots/vruksha_joshi.jpg",
  sonakshi_singh: "/assets/headshots/sonakshi_singh.jpg",
  venkesh_agarwal: "/assets/headshots/venkesh_agarwal.jpg",
  vedant_gupta: "/assets/headshots/vedant_gupta.jpg",
  shivangi_chamoli: "/assets/headshots/shivangi_chamoli.jpg",
  saideep_pajjuri: "/assets/headshots/saideep_pajjuri.jpg",
  vinit_juneja: "/assets/headshots/vinit_juneja.jpg",
  konika_dhull: "/assets/headshots/konika_dhull.jpeg",
  shalvi_save: "/assets/headshots/shalvi_save.jpg",
  fahiza_syed: "/assets/headshots/fahiza_syed.jpg",
};

// Default avatar placeholder
const DEFAULT_AVATAR =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

// Helper function to get author headshot path
function getAuthorHeadshot(authorName) {
  if (!authorName) return DEFAULT_AVATAR;
  try {
    // Convert author name to lowercase and replace spaces with underscores
    const formattedName = authorName.toLowerCase().replace(/\s+/g, "_");
    // Try to get the imported headshot
    const headshot = headshots[formattedName];
    if (headshot) {
      return headshot;
    }
    // If no headshot found, return default avatar
    console.warn(`No headshot found for author: ${authorName}`);
    return DEFAULT_AVATAR;
  } catch (error) {
    console.warn(`Could not load headshot for author: ${authorName}`);
    return DEFAULT_AVATAR;
  }
}

const getAuthorDetails = (authorNames) => {
  if (!authorNames) return [];

  // If it's not an array, try to handle it as a single author
  if (!Array.isArray(authorNames)) {
    // If it's an object with a name property, treat it as a single author
    if (
      typeof authorNames === "object" &&
      authorNames !== null &&
      authorNames.name
    ) {
      const author = authors[authorNames.name];
      if (!author) {
        return [
          {
            name: authorNames.name,
            role: authorNames.role || "Unknown",
            bio: authorNames.bio || "",
            linkedinProfile: authorNames.linkedinProfile || null,
            avatar: DEFAULT_AVATAR,
          },
        ];
      }
      return [
        {
          ...author,
          avatar:
            typeof author.avatar === "string"
              ? author.avatar
              : author.avatar?.default || getAuthorHeadshot(authorNames.name),
        },
      ];
    }
    // If it's a string, treat it as a single author name
    if (typeof authorNames === "string") {
      const author = authors[authorNames];
      if (!author) {
        return [
          {
            name: authorNames,
            role: "Unknown",
            bio: "",
            linkedinProfile: null,
            avatar: DEFAULT_AVATAR,
          },
        ];
      }
      return [
        {
          ...author,
          avatar:
            typeof author.avatar === "string"
              ? author.avatar
              : author.avatar?.default || getAuthorHeadshot(authorNames),
        },
      ];
    }
    return [];
  }

  return authorNames
    .map((nameOrObject) => {
      // Handle case where the author is already an object
      if (typeof nameOrObject === "object" && nameOrObject !== null) {
        // If the object has a name property, use it
        if (nameOrObject.name) {
          const author = authors[nameOrObject.name];
          if (!author) {
            return {
              name: nameOrObject.name,
              role: nameOrObject.role || "Unknown",
              bio: nameOrObject.bio || "",
              linkedinProfile: nameOrObject.linkedinProfile || null,
              avatar: DEFAULT_AVATAR,
            };
          }
          return {
            ...author,
            avatar:
              typeof author.avatar === "string"
                ? author.avatar
                : author.avatar?.default ||
                  getAuthorHeadshot(nameOrObject.name),
          };
        }
        // If no name property, try to use the object itself as a name
        const name = Object.values(nameOrObject)[0];
        if (typeof name === "string") {
          const author = authors[name];
          if (!author) {
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
            avatar:
              typeof author.avatar === "string"
                ? author.avatar
                : author.avatar?.default || getAuthorHeadshot(name),
          };
        }
        return null;
      }

      // Handle case where the author is a string (name)
      const name = nameOrObject;
      const author = authors[name];
      if (!author) {
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
        avatar:
          typeof author.avatar === "string"
            ? author.avatar
            : author.avatar?.default || getAuthorHeadshot(name),
      };
    })
    .filter(Boolean); // Remove any null entries
};

module.exports = { getAuthorDetails };
