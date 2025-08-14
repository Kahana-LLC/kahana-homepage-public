const fs = require("fs");
const path = require("path");

// Configuration
const DOCS_DIR = path.join(process.cwd(), "public", "docs");
const DATA_DIR = path.join(process.cwd(), "data");
const DOCS_INDEX_PATH = path.join(DATA_DIR, "docs-index.json");

// Silent logging function
const log = (message, type = "info") => {
  if (
    process.env.NODE_ENV === "development" &&
    process.env.VERBOSE === "true"
  ) {
    switch (type) {
      case "error":
        console.error(message);
        break;
      case "warn":
        console.warn(message);
        break;
      case "success":
        console.log("\x1b[32m%s\x1b[0m", message);
        break;
      default:
        console.log(message);
    }
  }
};

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

// Process documentation files
async function processDocs() {
  try {
    if (!fs.existsSync(DOCS_DIR)) {
      log("Documentation directory not found", "error");
      return;
    }

    const files = fs
      .readdirSync(DOCS_DIR)
      .filter((file) => file.endsWith(".json"));

    if (files.length === 0) {
      log("No documentation files found", "warn");
      return;
    }

    const processedDocs = [];
    for (const file of files) {
      try {
        const filePath = path.join(DOCS_DIR, file);
        const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
        validateDoc(content, filePath);
        processedDocs.push(content);
      } catch (error) {
        log(`Error processing ${file}: ${error.message}`, "error");
      }
    }

    // Sort docs by date
    processedDocs.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Write the processed docs to a single file
    fs.writeFileSync(DOCS_INDEX_PATH, JSON.stringify(processedDocs, null, 2));

    log(
      `Successfully processed ${processedDocs.length} documentation files`,
      "success"
    );
  } catch (error) {
    log(`Error processing documentation: ${error.message}`, "error");
    process.exit(1);
  }
}

// Run the processing
processDocs();
