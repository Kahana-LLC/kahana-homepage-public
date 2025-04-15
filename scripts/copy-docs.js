const fs = require("fs");
const path = require("path");

// Configuration
const SOURCE_DOCS_DIR = path.join(process.cwd(), "data/docs");
const BUILD_DOCS_DIR = path.join(process.cwd(), "data/docs");

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Creating directory: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDocs() {
  try {
    console.log("Starting documentation copy process...");
    console.log(`Source directory: ${SOURCE_DOCS_DIR}`);
    console.log(`Build directory: ${BUILD_DOCS_DIR}`);

    // Ensure the build directory exists
    ensureDirectoryExists(BUILD_DOCS_DIR);

    // Get list of documentation files
    const files = fs
      .readdirSync(SOURCE_DOCS_DIR)
      .filter((file) => file.endsWith(".json"));

    console.log(`Found ${files.length} documentation files to copy`);

    // Copy each file
    files.forEach((file) => {
      const sourcePath = path.join(SOURCE_DOCS_DIR, file);
      const destPath = path.join(BUILD_DOCS_DIR, file);

      console.log(`Copying ${file} to ${destPath}`);
      fs.copyFileSync(sourcePath, destPath);
    });

    console.log("Documentation copy process completed successfully");
  } catch (error) {
    console.error("Error copying documentation files:", error);
    process.exit(1);
  }
}

copyDocs();
