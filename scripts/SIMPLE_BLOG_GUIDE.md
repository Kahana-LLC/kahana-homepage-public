# ✨ Super Simple Blog Post Creator

## Just 3 Steps!

### Step 1: Run the script
```bash
node scripts/create-blog-simple.js
```

### Step 2: Answer 4 questions
1. **Topic?** (e.g., "Comet vs Chrome vs Oasis")
2. **Year?** (e.g., "2026")
3. **Image URL?** (just paste the picture link)
4. **Source links?** (paste all your links, one per line, press Enter twice when done)

### Step 3: Generate content
- Open the `*-PROMPT.txt` file it creates
- Follow the instructions (just copy-paste into Cursor)
- Done! 🎉

---

## Even Easier: Use a Text File

Create a file called `my-blog.txt`:

```
TOPIC: Comet vs Chrome vs Oasis
YEAR: 2026
IMAGE: https://example.com/image.jpg
LINKS:
https://source1.com/article
https://source2.com/review
https://source3.com/analysis
```

Then run:
```bash
node scripts/create-blog-simple.js my-blog.txt
```

That's it! Everything else is automatic.

---

## What It Does Automatically

✅ Creates the blog post JSON file  
✅ Updates the blog index  
✅ Generates a simple prompt file  
✅ Sets default author (Konika Dhull)  
✅ Adds default internal links  
✅ Formats everything correctly  

You just need to generate the content using the prompt file!

---

## Example

```bash
$ node scripts/create-blog-simple.js

✨ SUPER SIMPLE Blog Post Generator

Just answer 4 questions and paste your links!

📝 What's the comparison? (e.g., "Comet vs Chrome vs Oasis"): Comet vs Chrome vs Oasis
📅 Year? (default: 2026): 2026
🖼️  Image URL (paste it here): https://example.com/image.jpg

📚 Now paste your source links (one per line, press Enter twice when done):
Link: https://source1.com
Link: https://source2.com
Link: https://source3.com
Link: 

✅ Done! Blog post created!
```

That's it! Super simple. 🚀

