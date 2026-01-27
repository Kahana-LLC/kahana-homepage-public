# ⚡ Quick Blog Post Reference

## 🎯 Goal: 1 Blog Post Every 30 Minutes

## Method 1: Interactive Script (Recommended for First Time)

```bash
node scripts/create-comparison-blog.js
```

**Time:** 3-5 minutes to collect input
**Best for:** Learning the process, one-off posts

---

## Method 2: Template File (Fastest - Recommended!)

### Step 1: Create Template
```bash
node scripts/create-blog-from-template.js --create-template
```

### Step 2: Fill Template
Edit `blog-request-template.txt`:
```
TOPIC: Comet vs Chrome vs Oasis
YEAR: 2026
DATE: 2026-01-22
AUTHOR: Konika Dhull
IMAGE: https://example.com/image.jpg
CTA: Try Oasis
OASIS_ANGLE: Enterprise security, Most reliable, Privacy-focused

SOURCES:
https://source1.com
https://source2.com

INTERNAL_LINKS:
/products/enterprise-browser → enterprise browser
/buyers-guide → Enterprise Browser Buyer's Guide
```

### Step 3: Generate
```bash
node scripts/create-blog-from-template.js blog-request-template.txt
```

**Time:** 1-2 minutes total
**Best for:** Batch processing, speed

---

## Method 3: Command Line Arguments

```bash
node scripts/create-comparison-blog.js \
  --topic "Comet vs Atlas vs Oasis" \
  --year "2026" \
  --date "2026-01-21" \
  --author "Konika Dhull" \
  --image "https://example.com/image.jpg" \
  --cta "Try Oasis" \
  --angle "Enterprise security, Most reliable, Privacy-focused"
```

**Time:** 2-3 minutes (still need to paste sources)
**Best for:** Quick single posts

---

## 📋 Complete Workflow (30 Minutes)

### Phase 1: Setup (2 min)
1. Create template file
2. Fill in basic info (topic, year, date, image)

### Phase 2: Research (5 min)
3. Collect 5-10 source URLs
4. Identify 3-5 internal links

### Phase 3: Generate Structure (1 min)
5. Run template script
6. Verify JSON created

### Phase 4: Content Generation (15 min)
7. Open generated `*-CURSOR-PROMPT.md`
8. Use `prompts/comparison-blog.md` in Cursor
9. Generate full HTML content

### Phase 5: Finalize (5 min)
10. Update JSON with generated content
11. Review and polish
12. Push to branch

---

## 🚀 Pro Tips for Speed

### Batch Processing
1. Create 5-10 template files at once
2. Fill them all with basic info
3. Run script for each
4. Generate all content in one Cursor session

### Reusable Content
- Keep a list of common internal links
- Save source URLs in a document
- Reuse Oasis angles across posts

### Template Customization
- Edit `prompts/comparison-blog.md` once
- Save your preferred structure
- Reuse for every post

---

## 📁 File Structure

```
scripts/
  ├── create-comparison-blog.js          # Interactive script
  ├── create-blog-from-template.js       # Template-based (fastest)
  ├── BLOG_GENERATION_GUIDE.md           # Full guide
  └── QUICK_BLOG_REFERENCE.md            # This file

data/blog/
  ├── [slug].json                        # Blog post JSON
  └── [slug]-CURSOR-PROMPT.md           # Ready-to-use prompt

prompts/
  └── comparison-blog.md                  # AI generation template
```

---

## ✅ Checklist

- [ ] Template file created and filled
- [ ] Script run successfully
- [ ] JSON file created
- [ ] Blog index updated
- [ ] Prompt file generated
- [ ] Content generated in Cursor
- [ ] JSON content field updated
- [ ] Blog post appears on site
- [ ] Pushed to branch

---

## 🆘 Troubleshooting

**Script fails?**
- Check Node.js version (needs 12+)
- Verify file paths are correct
- Ensure blog directory exists

**Blog not appearing?**
- Check blog-index.js was updated
- Verify JSON is valid
- Check date format (ISO)

**Content generation slow?**
- Use the template more effectively
- Provide better source summaries
- Batch similar topics

---

## 📊 Time Breakdown

| Task | Time | Can Optimize? |
|------|------|---------------|
| Fill template | 2 min | ✅ Batch prep |
| Run script | 1 min | ✅ Already fast |
| Generate content | 15 min | ⚠️ AI dependent |
| Review/polish | 5 min | ✅ Templates help |
| **Total** | **~23 min** | **Target: 30 min** |

---

**Ready to create your first blog post? Start with Method 2!** 🚀

