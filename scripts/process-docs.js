const fs = require("fs");
const path = require("path");

// Configuration
const DOCS_DIR = path.join(process.cwd(), "data/docs");
const DATA_DIR = path.join(process.cwd(), "data");
const DOCS_INDEX_PATH = path.join(DATA_DIR, "docs-index.js");

// Ensure directories exist
function ensureDirectories() {
  [DATA_DIR, DOCS_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Validate a documentation file
function validateDoc(doc, filePath) {
  const requiredFields = [
    "title",
    "description",
    "content",
    "date",
    "category",
    "slug",
  ];
  const missingFields = requiredFields.filter((field) => !doc[field]);

  if (missingFields.length > 0) {
    throw new Error(
      `Missing required fields in ${filePath}: ${missingFields.join(", ")}`
    );
  }

  // Validate date format
  if (isNaN(new Date(doc.date).getTime())) {
    throw new Error(`Invalid date format in ${filePath}: ${doc.date}`);
  }

  // Validate slug matches filename
  const expectedSlug = path.basename(filePath, ".json");
  if (doc.slug !== expectedSlug) {
    throw new Error(
      `Slug mismatch in ${filePath}: expected ${expectedSlug}, got ${doc.slug}`
    );
  }
}

// Process a single documentation file
function processDoc(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const doc = JSON.parse(fileContents);

    // Validate the document
    validateDoc(doc, filePath);

    // Ensure content is properly formatted
    if (!doc.content.startsWith("<div class='doc-content'>")) {
      doc.content = `<div class='doc-content'>${doc.content}</div>`;
    }

    // Write the processed file back
    fs.writeFileSync(filePath, JSON.stringify(doc, null, 2));

    console.log(`Processed ${filePath}`);
    return doc;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

// Clean up orphaned JSON files
function cleanupOrphanedFiles() {
  try {
    // Get all JSON files in the docs directory
    const jsonFiles = fs
      .readdirSync(DOCS_DIR)
      .filter((file) => file.endsWith(".json"));

    // Remove JSON files that are invalid
    jsonFiles.forEach((jsonFile) => {
      const filePath = path.join(DOCS_DIR, jsonFile);
      try {
        const fileContents = fs.readFileSync(filePath, "utf8");
        const doc = JSON.parse(fileContents);
        validateDoc(doc, filePath);
      } catch (error) {
        console.error(`Removing invalid documentation file: ${filePath}`);
        fs.unlinkSync(filePath);
      }
    });
  } catch (error) {
    console.error("Error cleaning up orphaned files:", error.message);
  }
}

// Generate documentation index
function generateDocsIndex() {
  try {
    const files = fs
      .readdirSync(DOCS_DIR)
      .filter((file) => file.endsWith(".json"));

    const docs = files
      .map((file) => {
        const filePath = path.join(DOCS_DIR, file);
        return processDoc(filePath);
      })
      .filter(Boolean); // Remove any null entries from failed processing

    if (docs.length === 0) {
      console.warn("No valid documentation files found to process");
      return;
    }

    // Sort docs by date
    docs.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Write docs index
    const indexContent = `// This file is auto-generated. Do not edit directly.
module.exports = ${JSON.stringify(docs, null, 2)};
`;

    fs.writeFileSync(DOCS_INDEX_PATH, indexContent);
    console.log(`Generated documentation index with ${docs.length} entries`);
  } catch (error) {
    console.error("Error generating documentation index:", error.message);
  }
}

// Main execution
function main() {
  try {
    ensureDirectories();

    // Check if a specific file was provided
    const specificFile = process.argv[2];
    if (specificFile) {
      console.log(`Processing specific file: ${specificFile}`);
      processDoc(specificFile);
      generateDocsIndex(); // Still update the index
    } else {
      // Clean up any orphaned or invalid files first
      cleanupOrphanedFiles();
      // Then generate the docs index
      generateDocsIndex();
    }
  } catch (error) {
    console.error("Error in main execution:", error.message);
    process.exit(1);
  }
}

main();
