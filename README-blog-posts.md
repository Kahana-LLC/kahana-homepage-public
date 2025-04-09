# Blog Post Generation Guide

Generate a properly formatted markdown file that works with our Next.js blog system. The post should be comprehensive, well-researched, and maintain a professional yet engaging tone throughout.

## Required Frontmatter Format

The markdown file must start with this exact format (and ONLY this format):

```markdown
---
title: "Your Title Here"
date: YYYY-MM-DD
author: Adam Kershner
authorRole: CTO
authorBio: Adam is the CTO of Kahana, where he leads the technical vision and development of enterprise browser solutions. With extensive experience in browser security and enterprise software, he is passionate about transforming how organizations approach secure browsing.
linkedinProfile: https://www.linkedin.com/in/adam-kershner/
category: [Choose one: Privacy, Security, Enterprise, Technology, Browser]
excerpt: [2-3 compelling sentences summarizing the post's key insights]
defaultImageQuery: [Descriptive theme for the header image]
---
```

## Author Field Instructions

When creating a new blog post, you need to update the following fields in the frontmatter:

1. **title**: Replace "Your Title Here" with your actual blog post title. Use a clear, descriptive title that captures the main topic. Keep it under 100 characters.

2. **date**: Replace YYYY-MM-DD with the publication date in the format YYYY-MM-DD (e.g., 2025-04-15).

3. **author**: This field is pre-filled with "Adam Kershner" and should not be changed unless you're writing as a different author.

4. **authorRole**: This field is pre-filled with "CTO" and should not be changed unless you're writing as a different author.

5. **authorBio**: This field is pre-filled with Adam's bio and should not be changed unless you're writing as a different author.

6. **linkedinProfile**: Replace with the author's LinkedIn profile URL. For Adam Kershner, use https://www.linkedin.com/in/adam-kershner/

7. **category**: Replace the placeholder with one of the following categories:

   - Privacy
   - Security
   - Enterprise
   - Technology
   - Browser

8. **excerpt**: Replace the placeholder with 2-3 compelling sentences that summarize the key insights of your post. This will appear in blog listings and social media previews.

9. **defaultImageQuery**: Replace the placeholder with a descriptive theme for the header image. This should be 3-5 words that describe the visual theme you want for the post's header image.

## Link Integration Requirements:

1. Use Contextual Link Text
   DO THIS:

   ```markdown
   According to [Gartner's 2024 Browser Security Report](https://gartner.com/report), enterprises are increasingly adopting specialized browser solutions.
   ```

   NOT THIS:

   ```markdown
   - Enterprises are increasingly adopting specialized browser solutions[^1]
   - Read more [here](https://gartner.com/report)
   - Click [this link](https://gartner.com/report) for more information
   - For more information: https://gartner.com/report
   ```

2. Link Integration Rules:
   - Make the link text natural part of the sentence
   - Include relevant context in the linked text
   - Link to specific reports, studies, or sources being referenced
   - Never use footnotes or endnotes
   - Never show raw URLs
   - Never use "click here" or similar generic text
   - Keep links relevant and valuable

## Content Structure:

1. Start with a single # for the title
2. Use ## for main sections
3. Use ### for subsections
4. Add blank lines between sections
5. Keep paragraphs focused and concise

Example of proper link integration in content:

```markdown
## The Evolution of Browser Security

Enterprise browser security has evolved significantly. [Recent research from Gartner](https://gartner.com/report) shows that 73% of organizations now prioritize browser-level security in their IT strategy, while [Mozilla's Privacy Report](https://mozilla.org/privacy) indicates growing concerns about fingerprinting techniques.

### Emerging Trends

[Chrome Enterprise's latest security study](https://chrome.com/study) reveals three key trends in browser security:

- Enhanced fingerprint protection
- Improved isolation techniques
- Advanced threat detection

According to [Microsoft's 2024 Security Intelligence Report](https://microsoft.com/security), these trends are reshaping how enterprises approach browser security.
```

## Technical Requirements:

1. File Format:

   - Use .md extension
   - UTF-8 encoding
   - LF line endings
   - No HTML tags
   - No custom components

2. Metadata:

   - Proper YAML frontmatter only
   - Double quotes around title
   - Exact date format: YYYY-MM-DD
   - Predefined author information
   - One of the specified categories
   - Clear, concise excerpt
   - Relevant defaultImageQuery

3. Content:
   - Clean markdown formatting
   - Proper header hierarchy
   - Contextual links throughout
   - Consistent spacing
   - No footnotes or endnotes
   - No raw URLs

IMPORTANT NOTES:

1. Never include multiple frontmatter blocks
2. Never include HTML tags
3. Never use footnotes or endnotes
4. Always use contextual links in the text
5. Keep the structure clean and consistent
6. Ensure all links are meaningful and descriptive
7. Use only the specified frontmatter fields
8. Do not include perplexity logo
9. Do not duplicate the title as a header

## Processing Workflow

After creating your markdown file:

1. Place it in the `content/blog/` directory
2. Run the blog post processing script:
   ```
   node scripts/process-blog-posts.js content/blog/your-file-name.md
   ```
3. Rebuild the site to apply changes:
   ```
   npm run build
   ```

The system will automatically:

- Extract frontmatter data
- Process the content
- Generate a JSON file with structured data
- Update the blog index
- Create the necessary routes for the blog post

## Deleting Blog Posts

To properly delete a blog post from the site:

1. Delete the markdown file from the `content/blog/` directory
2. Run the blog post processing script to clean up and regenerate the blog index:
   ```
   node scripts/process-blog-posts.js
   ```
3. Rebuild the site to apply changes:
   ```
   npm run build
   ```

The system will automatically:

- Remove the corresponding JSON file from the `data/blog/` directory
- Update the blog index to remove the deleted post
- Remove the post from the site

**Note:** Simply deleting the markdown file is not enough. You must run the processing script afterward to ensure the post is completely removed from the site.
