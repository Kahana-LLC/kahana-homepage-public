#!/usr/bin/env node

/**
 * Create Blog Post from Chat Input
 * 
 * This is a helper function that can be called by the AI assistant
 * when you tell it in chat to create a blog post.
 * 
 * Usage in chat:
 *   "Create blog: Comet vs Chrome vs Oasis, date: 2026-01-22, author: Konika Dhull, image: [url], links: [urls]"
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../data/blog');
const BLOG_INDEX_PATH = path.join(__dirname, '../data/blog-index.js');
const AUTHORS_CONFIG = path.join(__dirname, '../config/authors.js');

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

function createBlogPostFromChat(input) {
  const { topic, date, author = 'Konika Dhull', imageUrl, sources = [] } = input;
  
  if (!topic || !date || !imageUrl) {
    throw new Error('Missing required: topic, date, imageUrl');
  }
  
  const year = new Date(date).getFullYear().toString();
  const slug = slugify(`${topic} ${year}`);
  const authorInfo = getAuthorInfo(author);
  
  const title = `${topic}: The Complete Comparison Guide for ${year}`;
  const excerpt = `Comprehensive comparison of ${topic} in ${year}. Expert analysis reveals critical insights, security considerations, and enterprise-readiness factors. Discover which solution best fits your needs.`;
  
  const placeholderContent = `<p>This blog post compares ${topic} in ${year}.</p>
<p>Content will be generated using the comparison-blog.md template.</p>
<p>Sources provided: ${sources.length}</p>`;
  
  const blogPost = {
    title,
    date: formatDate(date),
    authors: [authorInfo],
    category: ["AI", "Security", "Enterprise", "Product Analysis", "Comparisons"],
    excerpt,
    defaultImageQuery: `${topic} comparison ${year}`,
    featuredImage: imageUrl,
    slug,
    readingTime: 15,
    content: placeholderContent,
    _metadata: {
      topic,
      date: formatDate(date),
      year,
      sources,
      author,
      oasisAngle: 'Enterprise security, Most reliable, Privacy-focused',
      cta: 'Try Oasis',
      internalLinks: [
        { slug: '/products/oasis-enterprise-browser', anchor: 'enterprise browser' },
        { slug: '/solutions/zero-trust-security', anchor: 'zero-trust security' },
        { slug: '/buyers-guide', anchor: 'Enterprise Browser Buyer\'s Guide' }
      ]
    }
  };
  
  // Update blog index
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
  
  // Save blog post JSON
  const filename = `${blogPost.slug}.json`;
  const filepath = path.join(BLOG_DIR, filename);
  const { _metadata, ...toSave } = blogPost;
  fs.writeFileSync(filepath, JSON.stringify(toSave, null, 2) + '\n', 'utf8');
  
  // Generate prompt file
  const promptPath = path.join(BLOG_DIR, `${blogPost.slug}-PROMPT.txt`);
  const prompt = `# Generate Blog Post: ${topic}

**Topic:** ${topic}
**Date:** ${blogPost.date.split('T')[0]}
**Author:** ${author}
**Image:** ${imageUrl}

**Sources (${sources.length}):**
${sources.map((s, i) => `${i + 1}. ${s}`).join('\n')}

Use prompts/comparison-blog.md template to generate content.
Update: data/blog/${blogPost.slug}.json
`;
  fs.writeFileSync(promptPath, prompt, 'utf8');
  
  return {
    filepath,
    promptPath,
    slug: blogPost.slug
  };
}

// Export for use by AI assistant
module.exports = { createBlogPostFromChat };

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node scripts/create-blog-from-chat.js --topic "..." --date "..." --author "..." --image "..." --links "url1,url2"');
    process.exit(1);
  }
  
  const input = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace('--', '');
    const value = args[i + 1];
    if (key === 'links') {
      input.sources = value.split(',').map(s => s.trim());
    } else {
      input[key] = value;
    }
  }
  
  try {
    const result = createBlogPostFromChat(input);
    console.log('✅ Blog post created!');
    console.log(`📄 JSON: ${result.filepath}`);
    console.log(`📋 Prompt: ${result.promptPath}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

