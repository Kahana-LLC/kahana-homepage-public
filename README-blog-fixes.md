# Blog Post Formatting Guide

## Quick Fixes for Common Issues

Before adding a new blog post to the system, ensure it meets these requirements:

### 1. File Structure

✅ File should start EXACTLY with frontmatter - no content before it
❌ Remove any:

- Perplexity AI logo or other images
- Narrative text about writing the post
- HTML tags
- Duplicate title headings

### 2. Frontmatter Format

```markdown
---
title: "Your Title Here"
date: YYYY-MM-DD
author: Adam Kershner
authorRole: CTO
authorBio: Adam is the CTO of Kahana, where he leads the technical vision and development of enterprise browser solutions. With extensive experience in browser security and enterprise software, he is passionate about transforming how organizations approach secure browsing.
category: [Privacy|Security|Enterprise|Technology|Browser]
excerpt: [2-3 compelling sentences]
defaultImageQuery: [Image theme description]
---
```

### 3. Link Format

✅ DO THIS:

```markdown
According to [Gartner's 2024 Browser Security Report](https://gartner.com/report), enterprises are increasingly adopting specialized browser solutions.
```

❌ REMOVE ANY:

- Numbered references: (1), (2), (3)
- Footnotes: [^1], [^2]
- Reference lists at bottom
- Raw URLs: https://example.com
- Generic link text: [click here](link)
- HTML links: <a href="link">text</a>

### 4. Content Structure

✅ REQUIRED:

- Start with introduction paragraph (no title heading)
- Use ## for main sections
- Use ### for subsections
- Add blank lines between sections

❌ REMOVE:

- Title heading (the frontmatter title is sufficient)
- Footnotes section
- Reference lists
- HTML formatting

## Fixing Script

Here's a prompt for ChatGPT/Claude to fix a markdown file:

```
Please fix this markdown file to meet our blog requirements:

1. Remove any content before the frontmatter
2. Remove any duplicate title heading
3. Convert all numbered references and footnotes into contextual links
4. Remove any reference lists at the bottom
5. Remove any HTML tags
6. Ensure proper section hierarchy
7. Add blank lines between sections
8. Keep only the following elements:
   - Frontmatter (exactly as specified)
   - Introduction (no title heading)
   - Main sections (##)
   - Subsections (###)
   - Contextual links within text
   - Clean markdown formatting

The output should be a clean markdown file starting with frontmatter and containing only properly formatted content.
```

## Example of Proper Content Flow

```markdown
---
title: "Your Title Here"
[other frontmatter fields]
---

Introduction paragraph starts here, with no title heading. According to [recent research](link), this topic is increasingly important.

## First Main Section

Content with [contextual links](link) woven naturally into sentences. Each point supported by [relevant sources](link) without using numbered references.

### Subsection

More detailed content with proper spacing between paragraphs and sections.

## Second Main Section

Continue with clean, properly formatted content.
```

## Common Fixes Needed

1. Remove Perplexity formatting:

   - Delete the logo HTML
   - Remove any narrative text about generating the post
   - Remove any prompt text

2. Fix references:

   - Convert (1), (2), (3) to contextual links
   - Convert [^1] style footnotes to inline links
   - Remove reference lists at bottom
   - Make links part of sentences

3. Clean up structure:
   - Remove duplicate title heading
   - Ensure proper section hierarchy
   - Add proper spacing
   - Remove any HTML formatting

## Testing Your Fix

1. Run the blog post processor:

```bash
node scripts/process-blog-posts.js content/blog/your-post.md
```

2. Check the generated JSON in data/blog/

3. Start the dev server:

```bash
npm run dev
```

4. View your post at:
   http://localhost:3000/blog/your-post-slug

## Need Help?

If you're unsure about any formatting requirements or need help fixing a post, please contact the development team.
