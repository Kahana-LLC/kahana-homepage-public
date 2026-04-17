#!/usr/bin/env node

/**
 * SUPER SIMPLE Blog Post Generator
 * 
 * EASIEST WAY: Just tell me in chat:
 *   "Create blog: Comet vs Chrome vs Oasis, date: 2026-01-22, author: Konika Dhull, image: [url], links: [urls]"
 * 
 * OR use this script with a text file:
 *   TOPIC: Comet vs Chrome vs Oasis
 *   DATE: 2026-01-22
 *   AUTHOR: Konika Dhull
 *   IMAGE: https://example.com/image.jpg
 *   LINKS:
 *   https://source1.com
 *   https://source2.com
 * 
 * Then: node scripts/create-blog-simple.js my-blog.txt
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const BLOG_DIR = path.join(__dirname, '../data/blog');
const BLOG_INDEX_PATH = path.join(__dirname, '../data/blog-index.js');
const AUTHORS_CONFIG = path.join(__dirname, '../config/authors.js');

// Helper functions
function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function getAuthorInfo(name = 'Konika Dhull') {
  try {
    const authors = require(AUTHORS_CONFIG).authors;
    const author = authors[name];
    if (author) {
      return {
        name: author.name,
        role: author.role,
        bio: author.bio,
        linkedinProfile: author.linkedinProfile,
        avatar: author.avatar || "/assets/headshots/konika_dhull.jpg"
      };
    }
  } catch (e) {}
  
  return {
    name: name,
    role: "Product and Data Analyst",
    bio: "I am an enthusiast about bridging Computer Science and Business together with a strong interest in product strategy, data analysis, and emerging technologies.",
    linkedinProfile: "https://www.linkedin.com/in/konika-dhull/",
    avatar: "/assets/headshots/konika_dhull.jpg"
  };
}

function createRL() {
  return readline.createInterface({ input: process.stdin, output: process.stdout });
}

function ask(rl, q) {
  return new Promise(resolve => rl.question(q, resolve));
}

async function collectInputFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').map(l => l.trim());
  
  const data = {
    topic: '',
    date: new Date().toISOString().split('T')[0],
    imageUrl: '',
    sources: [],
    author: 'Konika Dhull'
  };
  
  let inLinks = false;
  for (const line of lines) {
    if (!line || line.startsWith('#')) continue;
    
    if (line.startsWith('TOPIC:')) {
      data.topic = line.substring(6).trim();
    } else if (line.startsWith('DATE:')) {
      data.date = line.substring(5).trim();
    } else if (line.startsWith('IMAGE:') || line.startsWith('PICTURE:')) {
      data.imageUrl = line.substring(line.indexOf(':') + 1).trim();
    } else if (line.startsWith('AUTHOR:')) {
      data.author = line.substring(7).trim() || 'Konika Dhull';
    } else if (line === 'LINKS:' || line === 'SOURCES:') {
      inLinks = true;
    } else if (inLinks && line.startsWith('http')) {
      data.sources.push(line);
    }
  }
  
  // Extract year from date for slug generation
  data.year = new Date(data.date).getFullYear().toString();
  
  return data;
}

async function collectInputInteractive() {
  const rl = createRL();
  
  console.log('\n✨ SUPER SIMPLE Blog Post Generator\n');
  console.log('Just answer 5 questions and paste your links!\n');
  
  const topic = await ask(rl, '📝 What\'s the comparison? (e.g., "Comet vs Chrome vs Oasis"): ');
  const date = await ask(rl, `📅 Date? (e.g., "2026-01-22" or "Jan 22, 2026"): `) || new Date().toISOString().split('T')[0];
  const author = await ask(rl, '✍️  Author? (default: "Konika Dhull"): ') || 'Konika Dhull';
  const imageUrl = await ask(rl, '🖼️  Image URL (paste it here): ');
  
  console.log('\n📚 Now paste your source links (one per line, press Enter twice when done):');
  const sources = [];
  let link = await ask(rl, 'Link: ');
  while (link.trim()) {
    if (link.startsWith('http')) {
      sources.push(link.trim());
    }
    link = await ask(rl, 'Link (or Enter to finish): ');
  }
  
  rl.close();
  
  // Extract year from date
  const year = new Date(date).getFullYear().toString();
  
  return {
    topic: topic.trim(),
    date: formatDate(date),
    year: year,
    imageUrl: imageUrl.trim(),
    sources: sources,
    author: author.trim() || 'Konika Dhull'
  };
}

function generateBlogPost(input) {
  // Extract year from date if not provided
  const formattedDate = formatDate(input.date);
  const year = input.year || new Date(input.date).getFullYear().toString();
  const slug = slugify(`${input.topic} ${year}`);
  const authorInfo = getAuthorInfo(input.author);
  
  // Auto-generate title
  const title = `${input.topic}: The Complete Comparison Guide for ${year}`;
  
  // Auto-generate excerpt
  const excerpt = `Comprehensive comparison of ${input.topic} in ${year}. Expert analysis reveals critical insights, security considerations, and enterprise-readiness factors. Discover which solution best fits your needs.`;
  
  // Placeholder content (will be replaced by AI)
  const placeholderContent = `<p>This blog post compares ${input.topic} in ${year}.</p>
<p>Content will be generated using the comparison-blog.md template.</p>
<p>Sources provided: ${input.sources.length}</p>`;
  
  return {
    title,
    date: formattedDate,
    authors: [authorInfo],
    category: ["AI", "Security", "Enterprise", "Product Analysis", "Comparisons"],
    excerpt,
    defaultImageQuery: `${input.topic} comparison ${year}`,
    featuredImage: input.imageUrl,
    slug,
    readingTime: 15,
    content: placeholderContent,
    _metadata: {
      topic: input.topic,
      date: formattedDate,
      year: year,
      sources: input.sources,
      author: input.author,
      oasisAngle: 'Enterprise security, Most reliable, Privacy-focused',
      cta: 'Try Oasis',
      internalLinks: [
        { slug: '/products/oasis-enterprise-browser', anchor: 'enterprise browser' },
        { slug: '/solutions/zero-trust-security', anchor: 'zero-trust security' },
        { slug: '/buyers-guide', anchor: 'Enterprise Browser Buyer\'s Guide' }
      ]
    }
  };
}

function updateBlogIndex(blogPost) {
  let content = fs.readFileSync(BLOG_INDEX_PATH, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  const arrayContent = content.substring(start + 1, end);
  
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
  
  const updated = content.substring(0, start + 1) + newEntry + '\n' + arrayContent + content.substring(end);
  fs.writeFileSync(BLOG_INDEX_PATH, updated, 'utf8');
}

function saveBlogPost(blogPost) {
  const filename = `${blogPost.slug}.json`;
  const filepath = path.join(BLOG_DIR, filename);
  const { _metadata, ...toSave } = blogPost;
  fs.writeFileSync(filepath, JSON.stringify(toSave, null, 2) + '\n', 'utf8');
  return filepath;
}

function generateSimplePrompt(blogPost) {
  const m = blogPost._metadata;
  
  return `# Generate Blog Post: ${m.topic}

## What I Need:

**Topic:** ${m.topic}
**Date:** ${blogPost.date.split('T')[0]}
**Author:** ${m.author}
**Image:** ${blogPost.featuredImage}

**Sources (${m.sources.length}):**
${m.sources.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## What to Do:

1. Open \`prompts/comparison-blog.md\` in Cursor
2. Tell Cursor: "Create a comparison blog post for: ${m.topic}, date: ${blogPost.date.split('T')[0]}, author: ${m.author}"
3. Provide these sources: ${m.sources.join(', ')}
4. Use this image: ${blogPost.featuredImage}
5. Generate the full HTML content
6. Copy the HTML and paste it into: \`data/blog/${blogPost.slug}.json\` (replace the "content" field)

That's it! The blog post is already in the index. 🎉
`;
}

async function main() {
  const args = process.argv.slice(2);
  
  let input;
  
  if (args.length > 0 && args[0] !== '--help') {
    // Read from file
    if (!fs.existsSync(args[0])) {
      console.error(`❌ File not found: ${args[0]}`);
      process.exit(1);
    }
    input = await collectInputFromFile(args[0]);
  } else if (args[0] === '--help' || args[0] === '-h') {
    console.log('\n✨ SUPER SIMPLE Blog Post Generator\n');
    console.log('EASIEST: Just tell me in chat to create a blog post!\n');
    console.log('OR use this script:');
    console.log('  node scripts/create-blog-simple.js              # Interactive mode');
    console.log('  node scripts/create-blog-simple.js my-blog.txt   # From file\n');
    console.log('File format (my-blog.txt):');
    console.log('  TOPIC: Comet vs Chrome vs Oasis');
    console.log('  DATE: 2026-01-22');
    console.log('  AUTHOR: Konika Dhull');
    console.log('  IMAGE: https://example.com/image.jpg');
    console.log('  LINKS:');
    console.log('  https://source1.com');
    console.log('  https://source2.com\n');
    return;
  } else {
    // Interactive mode
    input = await collectInputInteractive();
  }
  
  if (!input.topic || !input.imageUrl) {
    console.error('❌ Missing required: TOPIC and IMAGE');
    process.exit(1);
  }
  
  try {
    const blogPost = generateBlogPost(input);
    const filepath = saveBlogPost(blogPost);
    updateBlogIndex(blogPost);
    
    const promptPath = path.join(BLOG_DIR, `${blogPost.slug}-PROMPT.txt`);
    fs.writeFileSync(promptPath, generateSimplePrompt(blogPost), 'utf8');
    
    console.log('\n✅ Done! Blog post created!\n');
    console.log(`📄 JSON: ${filepath}`);
    console.log(`📋 Instructions: ${promptPath}\n`);
    console.log('🎯 Next Step:');
    console.log('   1. Open the PROMPT.txt file');
    console.log('   2. Follow the simple instructions');
    console.log('   3. Generate content in Cursor');
    console.log('   4. Update the JSON file\n');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

// Export function for direct use
async function createBlogPostDirect(input) {
  const blogPost = generateBlogPost(input);
  const filepath = saveBlogPost(blogPost);
  updateBlogIndex(blogPost);
  
  const promptPath = path.join(BLOG_DIR, `${blogPost.slug}-PROMPT.txt`);
  fs.writeFileSync(promptPath, generateSimplePrompt(blogPost), 'utf8');
  
  return {
    filepath,
    promptPath,
    slug: blogPost.slug,
    title: blogPost.title
  };
}

module.exports = { generateBlogPost, createBlogPostDirect };

