const fs = require("fs");
const path = require("path");
const { authors } = require("../config/authors");

// Function to process a single blog post file
function processBlogPost(filePath) {
  const content = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (content.authors && Array.isArray(content.authors)) {
    // Extract just the author names from the full author objects
    const authorNames = content.authors.map((author) => {
      if (typeof author === "string") {
        return author; // Already just a name
      }
      return author.name; // Extract name from full author object
    });

    // Verify all authors exist in the config
    authorNames.forEach((name) => {
      if (!authors[name]) {
        console.warn(
          `Warning: Author "${name}" in ${filePath} not found in authors config`
        );
      }
    });

    // Update the content with just author names
    content.authors = authorNames;

    // Write the updated content back to the file
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    return true;
  }
  return false;
}

// Process all JSON files in the data/blog directory
const blogDir = path.join(__dirname, "../data/blog");
let processedCount = 0;

if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir);
  files.forEach((file) => {
    if (file.endsWith(".json")) {
      const filePath = path.join(blogDir, file);
      if (processBlogPost(filePath)) {
        processedCount++;
        console.log(`Processed ${file}`);
      }
    }
  });

  console.log(`\nCompleted processing ${processedCount} blog post files`);
} else {
  console.error("Blog directory not found:", blogDir);
}

// Update authors config file with any new authors
fs.writeFileSync(
  path.join(__dirname, "../config/authors.js"),
  `module.exports = ${JSON.stringify(authors, null, 2)};`
);
