const fs = require("fs");
const path = require("path");

// Configuration
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), "public/images");

// Ensure directories exist
function ensureDirectories() {
  [PUBLIC_IMAGES_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Process local images in markdown content
function processLocalImages(content, postSlug) {
  // Create a directory for this post's images
  const postImagesDir = path.join(PUBLIC_IMAGES_DIR, postSlug);
  if (!fs.existsSync(postImagesDir)) {
    fs.mkdirSync(postImagesDir, { recursive: true });
  }

  // Find all local image references in markdown
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  let processedContent = content;

  while ((match = imageRegex.exec(content)) !== null) {
    const [fullMatch, altText, imagePath] = match;

    // Skip external URLs
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      console.log(`Skipping external image: ${imagePath}`);
      continue;
    }

    // Handle local images
    const imageFileName = path.basename(imagePath);
    const sourceImagePath = path.join(BLOG_DIR, imagePath);
    const targetImagePath = path.join(postImagesDir, imageFileName);

    console.log(`Processing image: ${sourceImagePath} -> ${targetImagePath}`);

    // Copy the image if it exists
    if (fs.existsSync(sourceImagePath)) {
      fs.copyFileSync(sourceImagePath, targetImagePath);

      // Update the markdown reference
      const newImagePath = `/images/${postSlug}/${imageFileName}`;
      processedContent = processedContent.replace(
        fullMatch,
        `![${altText}](${newImagePath})`
      );

      console.log(
        `Updated image reference: ${fullMatch} -> ![${altText}](${newImagePath})`
      );
    } else {
      console.warn(`Image not found: ${sourceImagePath}`);
    }
  }

  return processedContent;
}

// Main execution
function main() {
  try {
    ensureDirectories();

    // Test with sample post
    const samplePostPath = path.join(BLOG_DIR, "sample-post.md");
    if (fs.existsSync(samplePostPath)) {
      const content = fs.readFileSync(samplePostPath, "utf8");
      const processedContent = processLocalImages(content, "sample-post");

      console.log("Original content:");
      console.log(content);
      console.log("\nProcessed content:");
      console.log(processedContent);
    } else {
      console.error("Sample post not found:", samplePostPath);
    }
  } catch (error) {
    console.error("Error in main execution:", error.message);
    process.exit(1);
  }
}

main();
