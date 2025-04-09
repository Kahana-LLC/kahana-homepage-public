# Testing Guide for Next.js Blog System

This guide will help you test your Next.js blog system locally to ensure everything works correctly.

## Prerequisites

- Node.js and npm installed
- Next.js project set up with the blog system
- Pexels API key configured in your environment variables

## Step 1: Start the Development Server

First, start the Next.js development server:

```bash
npm run dev
```

This will start your Next.js application on http://localhost:3000.

## Step 2: Start the Blog Post Watcher

In a separate terminal, start the blog post watcher:

```bash
npm run watch-blog
```

This will watch for changes to your Markdown files in the `content/blog` directory and automatically process them.

## Step 3: Test Adding a New Blog Post

1. Create a new Markdown file in the `content/blog` directory:

```bash
touch content/blog/test-post.md
```

2. Add the following content to the file:

````markdown
---
title: Testing the Blog System
date: 2024-04-10
author: Adam Kershner
authorRole: CTO
category: Testing
excerpt: A test post to verify the blog system is working correctly.
defaultImageQuery: technology testing
---

# Testing the Blog System

This is a test post to verify that our blog system is working correctly. It includes various elements to test different aspects of the system.

## Local Image Test

Here's a test of a local image:

![Test Image](./images/test-image.jpg)

## Pexels Image Test

Here's a test of a Pexels image that will be fetched client-side:

![Pexels Test Image](https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg)

## Markdown Features

Let's test some Markdown features:

### Lists

- Item 1
- Item 2
- Item 3

### Code Blocks

```javascript
function testFunction() {
  console.log("Testing the blog system");
  return true;
}
```
````

### Tables

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

## Conclusion

This test post should help us verify that all aspects of the blog system are working correctly.

````

3. Create a test image:

```bash
mkdir -p content/blog/images
# Add an image file to content/blog/images/test-image.jpg
````

## Step 4: Check the Generated Files

After adding the test post, the watcher should automatically process it. Check the following files:

1. `data/blog/test-post.json` - This should contain the processed blog post data
2. `data/blog-index.js` - This should include the new blog post in the index
3. `public/images/test-post/test-image.jpg` - This should be a copy of your test image

## Step 5: View the Blog Post

1. Visit http://localhost:3000/blog to see the list of blog posts
2. Click on the "Testing the Blog System" post to view it at http://localhost:3000/blog/test-post

## Step 6: Test Editing a Blog Post

1. Edit the `content/blog/test-post.md` file
2. The watcher should automatically process the changes
3. Refresh the blog post page to see the changes

## Step 7: Test Deleting a Blog Post

1. Delete the `content/blog/test-post.md` file
2. The watcher should automatically remove the corresponding JSON file
3. Refresh the blog page to see that the post is no longer listed

## Common Issues and Debugging

### Issue 1: Watcher Not Triggering

If the watcher is not triggering when you make changes:

1. Check that the watcher is running in a separate terminal
2. Verify that the file path is correct
3. Try restarting the watcher

### Issue 2: Data Not Updating

If the data is not updating after processing:

1. Check the console output for errors
2. Verify that the JSON files are being generated correctly
3. Try manually running `npm run process-blog` to process all blog posts

### Issue 3: Images Not Displaying

If images are not displaying:

1. Check that the image files exist in the correct location
2. Verify that the image paths in the HTML are correct
3. Check the browser console for errors

### Issue 4: Pexels API Issues

If Pexels images are not loading:

1. Verify that your Pexels API key is correctly set in your environment variables
2. Check the browser console for API errors
3. Try using a different image query

## Testing Checklist

- [ ] Blog post list page loads correctly
- [ ] Blog post detail page loads correctly
- [ ] Local images are displayed correctly
- [ ] Pexels images are fetched and displayed correctly
- [ ] Markdown features (lists, code blocks, tables) are rendered correctly
- [ ] Adding a new blog post works
- [ ] Editing a blog post works
- [ ] Deleting a blog post works
- [ ] Blog index is updated correctly

## Next Steps

After testing the basic functionality, you can:

1. Add more complex Markdown content
2. Test with different image types and sizes
3. Test with different Pexels image queries
4. Test the revalidation functionality by modifying the revalidation time
