#!/usr/bin/env node

/**
 * Ultra-Fast Blog Post Generator from Template File
 * 
 * Create a simple text file with blog post details, then run this script.
 * 
 * Usage:
 *   1. Create a file: blog-request.txt
 *   2. Fill in the template below
 *   3. Run: node scripts/create-blog-from-template.js blog-request.txt
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../data/blog');
const BLOG_INDEX_PATH = path.join(__dirname, '../data/blog-index.js');
const AUTHORS_CONFIG = path.join(__dirname, '../config/authors.js');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateString}`);
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
    // Fall through to default
  }
  
  return {
    name: authorName,
    role: "Product and Data Analyst",
    bio: "I am an enthusiast about bridging Computer Science and Business together with a strong interest in product strategy, data analysis, and emerging technologies.",
    linkedinProfile: "https://www.linkedin.com/in/konika-dhull/",
    avatar: "/assets/headshots/konika_dhull.jpg"
  };
}

function parseTemplate(templatePath) {
  const content = fs.readFileSync(templatePath, 'utf8');
  const lines = content.split('\n').map(l => l.trim());
  
  const data = {
    topic: '',
    year: '',
    date: '',
    author: 'Konika Dhull',
    imageUrl: '',
    cta: 'Try Oasis',
    oasisAngle: 'Enterprise security, Most reliable, Privacy-focused',
    sources: [],
    internalLinks: []
  };
  
  let currentSection = null;
  
  for (const line of lines) {
    if (!line || line.startsWith('#')) continue;
    
    if (line.startsWith('TOPIC:')) {
      data.topic = line.substring(6).trim();
    } else if (line.startsWith('YEAR:')) {
      data.year = line.substring(5).trim();
    } else if (line.startsWith('DATE:')) {
      data.date = line.substring(5).trim();
    } else if (line.startsWith('AUTHOR:')) {
      data.author = line.substring(7).trim() || 'Konika Dhull';
    } else if (line.startsWith('IMAGE:')) {
      data.imageUrl = line.substring(6).trim();
    } else if (line.startsWith('CTA:')) {
      data.cta = line.substring(4).trim() || 'Try Oasis';
    } else if (line.startsWith('OASIS_ANGLE:')) {
      data.oasisAngle = line.substring(12).trim();
    } else if (line === 'SOURCES:') {
      currentSection = 'sources';
    } else if (line === 'INTERNAL_LINKS:') {
      currentSection = 'internalLinks';
    } else if (currentSection === 'sources' && line) {
      data.sources.push(line);
    } else if (currentSection === 'internalLinks' && line.includes('→')) {
      const [slug, anchor] = line.split('→').map(s => s.trim());
      data.internalLinks.push({ slug, anchor });
    }
  }
  
  return data;
}

function generateBlogPostJSON(input) {
  const slug = slugify(`${input.topic} ${input.year}`);
  const authorInfo = getAuthorInfo(input.author);
  
  const excerpt = `Comprehensive comparison of ${input.topic} in ${input.year}. Expert analysis reveals critical insights, security considerations, and enterprise-readiness factors. Discover which solution best fits your needs.`;
  
  const placeholderContent = `<p>Content will be generated using the comparison-blog.md template.</p>`;
  
  return {
    title: `${input.topic}: The AI Browser Comparison of ${input.year}`,
    date: formatDate(input.date),
    authors: [authorInfo],
    category: ["AI", "Security", "Enterprise", "Product Analysis", "Comparisons"],
    excerpt: excerpt,
    defaultImageQuery: `${input.topic} AI browser comparison security enterprise`,
    featuredImage: input.imageUrl,
    slug: slug,
    readingTime: 15,
    content: placeholderContent,
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
  let blogIndexContent = fs.readFileSync(BLOG_INDEX_PATH, 'utf8');
  const arrayStart = blogIndexContent.indexOf('[');
  const arrayEnd = blogIndexContent.lastIndexOf(']');
  const arrayContent = blogIndexContent.substring(arrayStart + 1, arrayEnd);
  
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
  
  const updatedArrayContent = newEntry + '\n' + arrayContent;
  const updatedContent = blogIndexContent.substring(0, arrayStart + 1) + 
                        updatedArrayContent + 
                        blogIndexContent.substring(arrayEnd);
  
  fs.writeFileSync(BLOG_INDEX_PATH, updatedContent, 'utf8');
}

function saveBlogPostJSON(blogPost) {
  const filename = `${blogPost.slug}.json`;
  const filepath = path.join(BLOG_DIR, filename);
  const { _metadata, ...postToSave } = blogPost;
  fs.writeFileSync(filepath, JSON.stringify(postToSave, null, 2) + '\n', 'utf8');
  return filepath;
}

function generateCursorPrompt(blogPost) {
  const m = blogPost._metadata;
  
  return `# Generate Blog Post: ${m.topic}

Use the template at \`prompts/comparison-blog.md\` to generate the full HTML content.

## Required Information:

**Topic:** ${m.topic}
**Year:** ${m.year}
**Author:** ${m.author}
**Oasis Angle:** ${m.oasisAngle}
**CTA:** ${m.cta}
**Featured Image:** ${blogPost.featuredImage}

**Sources:**
${m.sources.map((s, i) => `${i + 1}. ${s}`).join('\n')}

**Internal Links:**
${m.internalLinks.map(l => `- ${l.slug} → "${l.anchor}"`).join('\n')}

## Instructions:

1. Open \`prompts/comparison-blog.md\` in Cursor
2. Provide the information above
3. Generate the full HTML content
4. Replace the \`content\` field in: \`data/blog/${blogPost.slug}.json\`

The blog post is already in the index and will appear once content is added!
`;
}

function createTemplateFile() {
  const template = `# Blog Post Request Template
# Fill in the details below, then run: node scripts/create-blog-from-template.js blog-request.txt

TOPIC: Comet vs Atlas vs Oasis
YEAR: 2026
DATE: 2026-01-21
AUTHOR: Konika Dhull
IMAGE: https://example.com/image.jpg
CTA: Try Oasis
OASIS_ANGLE: Enterprise security, Most reliable, Privacy-focused

SOURCES:
https://example.com/source1
https://example.com/source2
https://example.com/source3

INTERNAL_LINKS:
/products/enterprise-browser → enterprise browser
/solutions/zero-trust-security → zero-trust security
/buyers-guide → Enterprise Browser Buyer's Guide
`;

  const templatePath = path.join(__dirname, '../blog-request-template.txt');
  fs.writeFileSync(templatePath, template, 'utf8');
  console.log(`✅ Template created: ${templatePath}`);
  console.log('📝 Fill it in, then run: node scripts/create-blog-from-template.js blog-request.txt');
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log('\n🚀 Fast Blog Post Generator from Template\n');
    console.log('Usage:');
    console.log('  node scripts/create-blog-from-template.js blog-request.txt');
    console.log('  node scripts/create-blog-from-template.js --create-template\n');
    console.log('To create a template file:');
    console.log('  node scripts/create-blog-from-template.js --create-template\n');
    return;
  }
  
  if (args[0] === '--create-template') {
    createTemplateFile();
    return;
  }
  
  const templatePath = args[0];
  
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template file not found: ${templatePath}`);
    console.log('\n💡 Create a template first:');
    console.log('   node scripts/create-blog-from-template.js --create-template');
    process.exit(1);
  }
  
  try {
    const input = parseTemplate(templatePath);
    
    if (!input.topic || !input.year || !input.date) {
      console.error('❌ Missing required fields: TOPIC, YEAR, DATE');
      process.exit(1);
    }
    
    const blogPost = generateBlogPostJSON(input);
    const filepath = saveBlogPostJSON(blogPost);
    updateBlogIndex(blogPost);
    
    const promptPath = path.join(BLOG_DIR, `${blogPost.slug}-CURSOR-PROMPT.md`);
    fs.writeFileSync(promptPath, generateCursorPrompt(blogPost), 'utf8');
    
    console.log('\n✅ Blog post created successfully!');
    console.log(`📄 JSON: ${filepath}`);
    console.log(`📋 Prompt: ${promptPath}`);
    console.log('\n📝 Next: Use the prompt file with Cursor to generate content!');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseTemplate, generateBlogPostJSON };

