const fs = require("fs");
const path = require("path");

// Configuration
const SOURCE_DIR = path.join(process.cwd(), "data", "docs");
const BUILD_DIR = path.join(process.cwd(), "public", "docs");

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
      case "success":
        console.log("\x1b[32m%s\x1b[0m", message);
        break;
      default:
        console.log(message);
    }
  }
};

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Creating directory: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDocs() {
  try {
    log("Starting documentation copy process...");
    log(`Current working directory: ${process.cwd()}`);
    log(`Source directory: ${SOURCE_DIR}`);
    log(`Build directory: ${BUILD_DIR}`);

    // List contents of current directory to debug
    log("Contents of current directory:");
    fs.readdirSync(process.cwd()).forEach((file) => {
      log(` - ${file}`);
    });

    // Check if source directory exists
    if (!fs.existsSync(SOURCE_DIR)) {
      log(`Source directory ${SOURCE_DIR} does not exist!`);
      // Try to find docs in the root directory
      const rootSourceDir = path.join(process.cwd(), "docs");
      if (fs.existsSync(rootSourceDir)) {
        log(`Found docs directory in root: ${rootSourceDir}`);
        // Update source directory
        SOURCE_DIR = rootSourceDir;
      } else {
        throw new Error("Documentation source directory not found!");
      }
    }

    // Ensure the build directory exists
    ensureDirectoryExists(BUILD_DIR);

    // Get list of documentation files
    const files = fs
      .readdirSync(SOURCE_DIR)
      .filter((file) => file.endsWith(".json"));

    log(`Found ${files.length} documentation files to copy`);

    // Copy each file
    for (const file of files) {
      const sourcePath = path.join(SOURCE_DIR, file);
      const destPath = path.join(BUILD_DIR, file);

      log(`Copying ${file} to ${destPath}`);
      fs.copyFileSync(sourcePath, destPath);
    }

    log("Documentation copy process completed successfully", "success");
  } catch (error) {
    log(`Error copying documentation: ${error.message}`, "error");
    process.exit(1);
  }
}

copyDocs();
