# Image Handling in the Next.js Blog

This document explains the two approaches implemented for handling images in the Next.js blog project.

## Option 1: Process Local Images During Build

This approach processes local images during the build process by copying them from the content directory to the public directory.

### How It Works

1. The `process-blog-posts.js` script scans Markdown files for local image references.
2. When a local image is found, it's copied from `content/blog/` to `public/images/[post-slug]/`.
3. The Markdown reference is updated to point to the new location (e.g., `/images/[post-slug]/image.jpg`).
4. The updated Markdown is then converted to HTML and stored in the JSON file.

### Benefits

- Images are processed once during build time, not at runtime.
- No client-side image processing is required.
- Works well with Next.js static site generation.
- Avoids build failures due to missing images.

### Usage

1. Place your images in the `content/blog/images/` directory.
2. Reference them in your Markdown files using relative paths:
   ```markdown
   ![Image Description](./images/image.jpg)
   ```
3. Run the `process-blog-posts.js` script to process the images.

## Option 2: Fetch Pexels API Images Client-Side

This approach fetches Pexels API images at runtime using React's `useEffect` hook.

### How It Works

1. The `[slug].jsx` page component uses React's `useEffect` hook to fetch images from the Pexels API.
2. The images are stored in component state and rendered when available.
3. A loading state is managed to handle the asynchronous nature of the image fetching.

### Benefits

- Avoids build-time API calls that might fail or rate-limit.
- Provides a better user experience with loading states.
- Allows for dynamic image selection based on user preferences or other factors.
- Reduces build time by not processing images during build.

### Usage

1. Add a `defaultImageQuery` property to your blog post frontmatter:
   ```yaml
   ---
   title: My Blog Post
   defaultImageQuery: technology office
   ---
   ```
2. The page component will automatically fetch images based on this query.

## Which Option to Choose?

- **Option 1** is best for local images that you want to include in your blog posts.
- **Option 2** is best for dynamic images from external APIs like Pexels.

You can use both options together in the same project. Local images will be processed during build, while Pexels images will be fetched at runtime.

## Implementation Details

### Option 1: Process Local Images

The `processLocalImages` function in `process-blog-posts.js` handles the image processing:

```javascript
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
```

### Option 2: Fetch Pexels API Images Client-Side

The `BlogPost` component in `[slug].jsx` handles the client-side image fetching:

```javascript
export default function BlogPost({ post }) {
  const [contentImages, setContentImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        // Fetch images for the post content
        const images = await searchPhotos(
          post.defaultImageQuery || "technology business"
        );
        setContentImages(images || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [post.defaultImageQuery]);

  // Component rendering...
}
```

## Testing

You can test the image handling by running the `test-image-processing.js` script:

```bash
node scripts/test-image-processing.js
```

This script will process a sample blog post and show the original and processed content.
