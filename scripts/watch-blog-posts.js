const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const { exec } = require("child_process");

// Configuration
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const DATA_DIR = path.join(process.cwd(), "data");
const BLOG_DATA_DIR = path.join(DATA_DIR, "blog");

// Ensure directories exist
function ensureDirectories() {
  [DATA_DIR, BLOG_DATA_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Process a single blog post
function processPost(filePath) {
  console.log(`Processing ${filePath}...`);

  return new Promise((resolve, reject) => {
    exec(
      `node scripts/process-blog-posts.js "${filePath}"`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error processing ${filePath}:`, error);
          reject(error);
          return;
        }

        console.log(`Successfully processed ${filePath}`);
        console.log(stdout);

        if (stderr) {
          console.warn(`Warnings for ${filePath}:`, stderr);
        }

        resolve();
      }
    );
  });
}

// Process all blog posts
function processAllPosts() {
  console.log("Processing all blog posts...");

  return new Promise((resolve, reject) => {
    exec("node scripts/process-blog-posts.js", (error, stdout, stderr) => {
      if (error) {
        console.error("Error processing all blog posts:", error);
        reject(error);
        return;
      }

      console.log("Successfully processed all blog posts");
      console.log(stdout);

      if (stderr) {
        console.warn("Warnings during processing:", stderr);
      }

      resolve();
    });
  });
}

// Main execution
async function main() {
  try {
    ensureDirectories();

    // Process all blog posts initially
    await processAllPosts();

    // Watch for changes
    const watcher = chokidar.watch(BLOG_DIR, {
      ignored: /(^|[\/\\])\../, // Ignore hidden files
      persistent: true,
    });

    console.log(`Watching for changes in ${BLOG_DIR}...`);

    // Handle file changes
    watcher.on("add", async (filePath) => {
      if (filePath.endsWith(".md")) {
        console.log(`New file detected: ${filePath}`);
        await processPost(filePath);
      }
    });

    watcher.on("change", async (filePath) => {
      if (filePath.endsWith(".md")) {
        console.log(`File changed: ${filePath}`);
        await processPost(filePath);
      }
    });

    watcher.on("unlink", async (filePath) => {
      if (filePath.endsWith(".md")) {
        console.log(`File deleted: ${filePath}`);

        // Extract the slug from the filename
        const fileName = path.basename(filePath);
        const slug = fileName.replace(/\.md$/, "");

        // Remove the corresponding JSON file
        const jsonPath = path.join(BLOG_DATA_DIR, `${slug}.json`);
        if (fs.existsSync(jsonPath)) {
          fs.unlinkSync(jsonPath);
          console.log(`Removed ${jsonPath}`);
        }

        // Regenerate the blog index to remove the deleted post
        await processAllPosts();
      }
    });

    console.log("Watch script is running. Press Ctrl+C to stop.");
  } catch (error) {
    console.error("Error in main execution:", error.message);
    process.exit(1);
  }
}

main();
