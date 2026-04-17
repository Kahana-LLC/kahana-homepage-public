#!/usr/bin/env node

/**
 * Automated Comparison Blog Post Generator
 * 
 * This script streamlines the blog post creation process by:
 * 1. Collecting minimal required input
 * 2. Generating the blog post JSON file
 * 3. Updating blog-index.js automatically
 * 
 * Usage:
 *   node scripts/create-comparison-blog.js
 * 
 * Or with arguments:
 *   node scripts/create-comparison-blog.js --topic "Comet vs Atlas vs Oasis" --year "2026" --author "Konika Dhull"
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Paths
const BLOG_DIR = path.join(__dirname, '../data/blog');
const BLOG_INDEX_PATH = path.join(__dirname, '../data/blog-index.js');
const AUTHORS_CONFIG = path.join(__dirname, '../config/authors.js');

// Helper functions
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function estimateReadingTime(content) {
  // Average reading speed: 200-250 words per minute
  // We'll use 225 as average
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 225);
}

function formatDate(dateString) {
  // Accept formats: "2026-01-21", "Jan 21, 2026", "2026/01/21"
  let date;
  
  if (dateString.includes('-')) {
    // ISO format: 2026-01-21
    date = new Date(dateString);
  } else if (dateString.includes('/')) {
    // Format: 2026/01/21
    date = new Date(dateString);
  } else {
    // Try parsing as natural date
    date = new Date(dateString);
  }
  
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date format: ${dateString}`);
  }
  
  return date.toISOString();
}

function getAuthorInfo(authorName) {
  try {
    const authors = require(AUTHORS_CONFIG).authors;
    const author = authors[authorName];
    
    if (author) {
      return {
        name: author.name,
        role: author.role,
        bio: author.bio,
        linkedinProfile: author.linkedinProfile,
        avatar: author.avatar || "/assets/headshots/konika_dhull.jpg"
      };
    }
  } catch (error) {
    console.warn(`Could not load author info for ${authorName}:`, error.message);
  }
  
  // Default author info (Konika Dhull)
  return {
    name: authorName,
    role: "Product and Data Analyst",
    bio: "I am an enthusiast about bridging Computer Science and Business together with a strong interest in product strategy, data analysis, and emerging technologies. Passionate about the intersection of tech and innovation. 2x All-American athlete driven by curiosity and impact.",
    linkedinProfile: "https://www.linkedin.com/in/konika-dhull/",
    avatar: "/assets/headshots/konika_dhull.jpg"
  };
}

function createQuestionInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function collectInput() {
  const rl = createQuestionInterface();
  
  console.log('\n🚀 Automated Comparison Blog Post Generator\n');
  console.log('This will create a new comparison blog post in ~30 seconds!\n');
  
  // Parse command line arguments first
  const args = process.argv.slice(2);
  const argMap = {};
  for (let i = 0; i < args.length; i += 2) {
    if (args[i].startsWith('--')) {
      argMap[args[i].substring(2)] = args[i + 1];
    }
  }
  
  const topic = argMap.topic || await askQuestion(rl, '📝 Comparison topic (e.g., "Comet vs Atlas vs Oasis"): ');
  const year = argMap.year || await askQuestion(rl, '📅 Year (e.g., "2026"): ');
  const date = argMap.date || await askQuestion(rl, `📆 Publication date (e.g., "${year}-01-21" or "Jan 21, ${year}"): `);
  const author = argMap.author || await askQuestion(rl, '✍️  Author name (default: "Konika Dhull"): ') || 'Konika Dhull';
  const imageUrl = argMap.image || await askQuestion(rl, '🖼️  Featured image URL: ');
  const cta = argMap.cta || await askQuestion(rl, '🎯 CTA text (e.g., "Try Oasis"): ') || 'Try Oasis';
  
  console.log('\n📚 Sources (paste URLs, one per line, press Enter twice when done):');
  const sources = [];
  let source = await askQuestion(rl, 'Source URL: ');
  while (source) {
    sources.push(source);
    source = await askQuestion(rl, 'Source URL (or press Enter to finish): ');
  }
  
  console.log('\n🔗 Internal Links (format: "/slug" → "anchor text"):');
  const internalLinks = [];
  let link = await askQuestion(rl, 'Internal link (e.g., "/products/oasis-enterprise-browser" → "enterprise browser"): ');
  while (link) {
    if (link.includes('→')) {
      const [slug, anchor] = link.split('→').map(s => s.trim());
      internalLinks.push({ slug, anchor });
    }
    link = await askQuestion(rl, 'Internal link (or press Enter to finish): ');
  }
  
  const oasisAngle = argMap.angle || await askQuestion(rl, '🎯 Oasis positioning (e.g., "Enterprise security, Most reliable, Privacy-focused"): ') || 'Enterprise security, Most reliable, Privacy-focused';
  
  rl.close();
  
  return {
    topic,
    year,
    date,
    author,
    imageUrl,
    cta,
    sources,
    internalLinks,
    oasisAngle
  };
}

function generateSlug(topic, year) {
  return slugify(`${topic} ${year}`);
}

function generateExcerpt(topic, year) {
  return `Comprehensive comparison of ${topic} in ${year}. Expert analysis reveals critical insights, security considerations, and enterprise-readiness factors. Discover which solution best fits your needs.`;
}

function generateDefaultImageQuery(topic) {
  return `${topic} AI browser comparison security enterprise`;
}

function generateBlogPostJSON(input) {
  const slug = generateSlug(input.topic, input.year);
  const authorInfo = getAuthorInfo(input.author);
  
  // Generate a placeholder content structure
  // Note: The actual content will be generated by AI using the template
  const placeholderContent = `<p>This is a placeholder. The full content will be generated using the comparison-blog.md template.</p>
<p>Topic: ${input.topic}</p>
<p>Year: ${input.year}</p>
<p>Oasis Angle: ${input.oasisAngle}</p>
<p>CTA: ${input.cta}</p>
<p>Sources: ${input.sources.length} provided</p>
<p>Internal Links: ${input.internalLinks.length} provided</p>`;
  
  const readingTime = estimateReadingTime(placeholderContent);
  
  return {
    title: `${input.topic}: The AI Browser Comparison of ${input.year}`,
    date: formatDate(input.date),
    authors: [authorInfo],
    category: ["AI", "Security", "Enterprise", "Product Analysis", "Comparisons"],
    excerpt: generateExcerpt(input.topic, input.year),
    defaultImageQuery: generateDefaultImageQuery(input.topic),
    featuredImage: input.imageUrl,
    slug: slug,
    readingTime: readingTime,
    content: placeholderContent,
    // Store metadata for AI generation
    _metadata: {
      topic: input.topic,
      year: input.year,
      oasisAngle: input.oasisAngle,
      cta: input.cta,
      sources: input.sources,
      internalLinks: input.internalLinks,
      author: input.author
    }
  };
}

function updateBlogIndex(blogPost) {
  // Read current blog index
  let blogIndexContent = fs.readFileSync(BLOG_INDEX_PATH, 'utf8');
  
  // Extract the array content
  const arrayStart = blogIndexContent.indexOf('[');
  const arrayEnd = blogIndexContent.lastIndexOf(']');
  const arrayContent = blogIndexContent.substring(arrayStart + 1, arrayEnd);
  
  // Create new entry
  const newEntry = `  {
    title: "${blogPost.title.replace(/"/g, '\\"')}",
    date: "${blogPost.date}",
    authors: [${blogPost.authors.map(a => `"${a.name}"`).join(', ')}],
    category: ${JSON.stringify(blogPost.category)},
    excerpt: "${blogPost.excerpt.replace(/"/g, '\\"')}",
    defaultImageQuery: "${blogPost.defaultImageQuery.replace(/"/g, '\\"')}",
    featuredImage: "${blogPost.featuredImage}",
    slug: "${blogPost.slug}",
    readingTime: ${blogPost.readingTime},
  },`;
  
  // Insert at the beginning of the array
  const updatedArrayContent = newEntry + '\n' + arrayContent;
  const updatedContent = blogIndexContent.substring(0, arrayStart + 1) + 
                        updatedArrayContent + 
                        blogIndexContent.substring(arrayEnd);
  
  fs.writeFileSync(BLOG_INDEX_PATH, updatedContent, 'utf8');
}

function saveBlogPostJSON(blogPost) {
  const filename = `${blogPost.slug}.json`;
  const filepath = path.join(BLOG_DIR, filename);
  
  // Remove _metadata before saving
  const { _metadata, ...postToSave } = blogPost;
  
  fs.writeFileSync(filepath, JSON.stringify(postToSave, null, 2) + '\n', 'utf8');
  
  return filepath;
}

function generateAIPrompt(blogPost) {
  const metadata = blogPost._metadata;
  
  return `
# Generate Blog Post Content

Use the template at \`prompts/comparison-blog.md\` to generate the full HTML content for this blog post.

## Required Information:

**Topic:** ${metadata.topic}
**Year:** ${metadata.year}
**Author:** ${metadata.author}
**Oasis Angle:** ${metadata.oasisAngle}
**CTA:** ${metadata.cta}
**Featured Image:** ${blogPost.featuredImage}

**Sources (${metadata.sources.length}):**
${metadata.sources.map((s, i) => `${i + 1}. ${s}`).join('\n')}

**Internal Links (${metadata.internalLinks.length}):**
${metadata.internalLinks.map(l => `- ${l.slug} → "${l.anchor}"`).join('\n')}

## Next Steps:

1. Open the generated JSON file: \`data/blog/${blogPost.slug}.json\`
2. Use Cursor with the \`prompts/comparison-blog.md\` template
3. Provide the information above to generate the full HTML content
4. Replace the \`content\` field in the JSON with the generated HTML
5. The blog post will automatically appear on your blog!

## Quick Command:

\`\`\`
# After generating content, update the JSON:
# Edit: data/blog/${blogPost.slug}.json
# Replace the "content" field with your generated HTML
\`\`\`
`;
}

async function main() {
  try {
    // Collect input
    const input = await collectInput();
    
    // Generate blog post structure
    const blogPost = generateBlogPostJSON(input);
    
    // Save JSON file
    const filepath = saveBlogPostJSON(blogPost);
    console.log(`\n✅ Blog post JSON created: ${filepath}`);
    
    // Update blog index
    updateBlogIndex(blogPost);
    console.log(`✅ Blog index updated: ${BLOG_INDEX_PATH}`);
    
    // Generate AI prompt instructions
    const prompt = generateAIPrompt(blogPost);
    const promptPath = path.join(BLOG_DIR, `${blogPost.slug}-PROMPT.md`);
    fs.writeFileSync(promptPath, prompt, 'utf8');
    console.log(`✅ AI prompt saved: ${promptPath}`);
    
    console.log('\n🎉 Blog post structure created successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Open the prompt file to see what information to provide to AI');
    console.log('2. Use Cursor with prompts/comparison-blog.md template');
    console.log('3. Generate the full HTML content');
    console.log('4. Update the content field in the JSON file');
    console.log('\n💡 Tip: The blog post is already in the index, so it will appear once content is added!');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateBlogPostJSON, updateBlogIndex, saveBlogPostJSON };

