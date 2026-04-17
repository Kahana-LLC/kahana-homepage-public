# 🚀 Fast Blog Post Generation Guide

## Goal: Create 1 Blog Post Every 30 Minutes

This guide shows you how to use the automated blog generation script to create comparison blog posts quickly.

## Quick Start (5 minutes)

### Step 1: Run the Script
```bash
node scripts/create-comparison-blog.js
```

### Step 2: Answer the Questions
The script will ask you:
- **Topic**: e.g., "Comet vs Atlas vs Oasis"
- **Year**: e.g., "2026"
- **Date**: e.g., "2026-01-21"
- **Author**: e.g., "Konika Dhull" (default)
- **Image URL**: Paste the featured image URL
- **CTA**: e.g., "Try Oasis"
- **Sources**: Paste URLs (one per line, Enter twice when done)
- **Internal Links**: Format: "/slug" → "anchor text"
- **Oasis Angle**: e.g., "Enterprise security, Most reliable, Privacy-focused"

### Step 3: Generate Content with AI
1. Open the generated `*-PROMPT.md` file
2. Copy the information
3. In Cursor, use the `prompts/comparison-blog.md` template
4. Paste the information and let AI generate the full HTML content

### Step 4: Update JSON
1. Open `data/blog/[slug].json`
2. Replace the `content` field with the generated HTML
3. Done! The blog post is live.

## Using Command Line Arguments (Even Faster!)

```bash
node scripts/create-comparison-blog.js \
  --topic "Comet vs Chrome vs Oasis" \
  --year "2026" \
  --date "2026-01-22" \
  --author "Konika Dhull" \
  --image "https://example.com/image.jpg" \
  --cta "Try Oasis" \
  --angle "Enterprise security, Most reliable, Privacy-focused"
```

Then just paste sources and internal links when prompted.

## Workflow Optimization Tips

### 1. Prepare Sources in Advance
- Keep a list of source URLs ready
- Copy-paste them all at once when prompted

### 2. Use Default Internal Links
Common internal links you'll use:
- `/products/oasis-enterprise-browser` → "enterprise browser"
- `/solutions/zero-trust-security` → "zero-trust security"
- `/buyers-guide` → "Enterprise Browser Buyer's Guide"
- `/blog/[related-post]` → "[related topic]"

### 3. Batch Processing
Create multiple blog posts in one session:
1. Run the script multiple times
2. Generate all JSON files first
3. Then generate all content in batch

### 4. Template Customization
Edit `prompts/comparison-blog.md` to match your exact needs, then reuse it for every post.

## Time Breakdown (Target: 30 minutes)

- **Script execution**: 2-3 minutes (input collection)
- **AI content generation**: 15-20 minutes (using template)
- **Review & polish**: 5-7 minutes
- **Total**: ~30 minutes per blog post

## Troubleshooting

### Blog post not appearing?
- Check that `blog-index.js` was updated
- Verify the JSON file is valid
- Ensure the date is in the future or recent past

### Content generation taking too long?
- Use the template more effectively
- Provide better source summaries
- Batch similar topics together

## Advanced: Full Automation

For even faster generation, you can:
1. Create a CSV/JSON file with all blog post details
2. Modify the script to read from that file
3. Generate multiple posts in one run

Example batch file structure:
```json
[
  {
    "topic": "Comet vs Atlas vs Oasis",
    "year": "2026",
    "date": "2026-01-21",
    "sources": ["url1", "url2"],
    "imageUrl": "https://...",
    "internalLinks": [{"slug": "/products/oasis-enterprise-browser", "anchor": "enterprise browser"}]
  }
]
```

## Next Steps

1. ✅ Run the script once to get familiar
2. ✅ Prepare your source lists in advance
3. ✅ Customize the template for your needs
4. ✅ Create a batch of 5-10 blog posts
5. ✅ Generate content for all of them

Happy blogging! 🎉

