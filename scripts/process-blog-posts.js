const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

// Configuration
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const DATA_DIR = path.join(process.cwd(), "data");
const BLOG_DATA_DIR = path.join(DATA_DIR, "blog");
const BLOG_INDEX_PATH = path.join(DATA_DIR, "blog-index.js");
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), "public/images");

// Ensure directories exist
function ensureDirectories() {
  [DATA_DIR, BLOG_DATA_DIR, PUBLIC_IMAGES_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Generate a URL-friendly slug
function generateSlug(title) {
  if (!title) {
    throw new Error("Title is required for generating a slug");
  }
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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
      continue;
    }

    // Handle local images
    const imageFileName = path.basename(imagePath);
    const sourceImagePath = path.join(BLOG_DIR, imagePath);
    const targetImagePath = path.join(postImagesDir, imageFileName);

    // Copy the image if it exists
    if (fs.existsSync(sourceImagePath)) {
      fs.copyFileSync(sourceImagePath, targetImagePath);

      // Update the markdown reference
      const newImagePath = `/images/${postSlug}/${imageFileName}`;
      processedContent = processedContent.replace(
        fullMatch,
        `![${altText}](${newImagePath})`
      );
    } else {
      console.warn(`Image not found: ${sourceImagePath}`);
    }
  }

  return processedContent;
}

// Process a single blog post
function processPost(filePath) {
  try {
    const source = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(source);

    if (!frontmatter.title) {
      throw new Error(`No title found in frontmatter for ${filePath}`);
    }

    // Generate slug from title if not provided
    const slug = frontmatter.slug || generateSlug(frontmatter.title);

    // Process local images in the content
    const processedContent = processLocalImages(content, slug);

    // Convert markdown to HTML
    const htmlContent = marked(processedContent);

    // Format the date properly
    const date = frontmatter.date
      ? new Date(frontmatter.date).toISOString()
      : new Date().toISOString();

    // Create author object from frontmatter
    const author = {
      name: frontmatter.author,
      role: frontmatter.authorRole || "Contributor",
      bio: frontmatter.authorBio || null,
      linkedinProfile: frontmatter.linkedinProfile || null,
    };

    // Create post metadata
    const postData = {
      ...frontmatter,
      slug,
      date,
      author,
      readingTime: Math.ceil(
        htmlContent.replace(/<[^>]*>/g, "").split(/\s+/).length / 200
      ), // Calculate from HTML content
    };

    // Remove redundant fields that are now in the author object
    delete postData.authorRole;
    delete postData.authorBio;
    delete postData.linkedinProfile;

    // Write individual post file
    const postFilePath = path.join(BLOG_DATA_DIR, `${slug}.json`);
    fs.writeFileSync(
      postFilePath,
      JSON.stringify({ ...postData, content: htmlContent }, null, 2)
    );

    console.log(`Processed ${filePath} -> ${postFilePath}`);
    return postData;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

// Clean up orphaned JSON files
function cleanupOrphanedFiles() {
  try {
    // Get all markdown files
    const markdownFiles = fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".md"));

    // Generate slugs for all markdown files
    const validSlugs = markdownFiles.map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data: frontmatter } = matter(source);
      return frontmatter.slug || generateSlug(frontmatter.title);
    });

    // Get all JSON files in the blog data directory
    const jsonFiles = fs
      .readdirSync(BLOG_DATA_DIR)
      .filter((file) => file.endsWith(".json"));

    // Remove JSON files that don't have a corresponding markdown file
    jsonFiles.forEach((jsonFile) => {
      const slug = path.basename(jsonFile, ".json");
      if (!validSlugs.includes(slug)) {
        const jsonPath = path.join(BLOG_DATA_DIR, jsonFile);
        fs.unlinkSync(jsonPath);
        console.log(`Removed orphaned JSON file: ${jsonPath}`);
      }
    });
  } catch (error) {
    console.error("Error cleaning up orphaned files:", error.message);
  }
}

// Generate blog index
function generateBlogIndex() {
  try {
    const files = fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".md"));

    const posts = files
      .map((file) => {
        const filePath = path.join(BLOG_DIR, file);
        return processPost(filePath);
      })
      .filter(Boolean); // Remove any null entries from failed processing

    if (posts.length === 0) {
      console.warn("No valid blog posts found to process");
      return;
    }

    // Sort posts by date
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Write blog index
    const indexContent = `// This file is auto-generated. Do not edit directly.
module.exports = ${JSON.stringify(posts, null, 2)};
`;

    fs.writeFileSync(BLOG_INDEX_PATH, indexContent);
    console.log(`Generated blog index with ${posts.length} posts`);
  } catch (error) {
    console.error("Error generating blog index:", error.message);
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
      processPost(specificFile);
      generateBlogIndex(); // Still update the index
    } else {
      // Clean up any orphaned JSON files first
      cleanupOrphanedFiles();
      // Then generate the blog index
      generateBlogIndex();
    }
  } catch (error) {
    console.error("Error in main execution:", error.message);
    process.exit(1);
  }
}

main();
