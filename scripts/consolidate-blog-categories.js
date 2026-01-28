const fs = require('fs');
const path = require('path');

// Define consolidated categories (10-15 main categories)
const CONSOLIDATED_CATEGORIES = {
  // Security & Compliance
  'Security': 'Security',
  'Enterprise Security': 'Security',
  'Cybersecurity': 'Security',
  'cybersecurity': 'Security',
  'Browser Security': 'Security',
  'browser security': 'Security',
  'SaaS security': 'Security',
  'Privacy': 'Security',
  'Compliance': 'Security',
  'compliance': 'Security',
  'Legal & Compliance': 'Security',
  'Data Protection': 'Security',
  'DLP': 'Security',
  'data leakage': 'Security',
  'Zero Trust': 'Security',
  'CASB': 'Security',
  
  // Enterprise & Business
  'Enterprise': 'Enterprise',
  'Enterprise Browsers': 'Enterprise',
  'enterprise browsers': 'Enterprise',
  'Product Analysis': 'Enterprise',
  'Product Management': 'Enterprise',
  'Product Development': 'Enterprise',
  'Business': 'Enterprise',
  'Brand Strategy': 'Enterprise',
  'Marketing': 'Enterprise',
  
  // SaaS & Cloud
  'SaaS': 'SaaS',
  'IAM': 'SaaS',
  'Shadow IT': 'SaaS',
  'Insider Risk': 'SaaS',
  
  // Industry Verticals
  'Healthcare': 'Industry',
  'Health': 'Industry',
  'Health Crisis': 'Industry',
  'Finance': 'Industry',
  'Government': 'Industry',
  'Government & Public Sector': 'Industry',
  'Public Sector': 'Industry',
  'Manufacturing': 'Industry',
  'Retail': 'Industry',
  'Energy': 'Industry',
  'Energy & Utilities': 'Industry',
  'Utilities': 'Industry',
  'Technology': 'Industry',
  'Telecommunications': 'Industry',
  
  // Browser & Technology
  'Browser': 'Browser & Technology',
  'Browsers': 'Browser & Technology',
  'Browser Innovation': 'Browser & Technology',
  'Browser Comparison': 'Browser & Technology',
  'Chromium': 'Browser & Technology',
  'Performance': 'Browser & Technology',
  'Cross-Platform': 'Browser & Technology',
  
  // AI & Emerging Tech
  'AI': 'AI & Emerging Tech',
  'AR/VR': 'AI & Emerging Tech',
  'Wearable Technology': 'AI & Emerging Tech',
  'Materials Science': 'AI & Emerging Tech',
  
  // Work & Productivity
  'Ergonomic Work': 'Work & Productivity',
  'Future of Work': 'Work & Productivity',
  'Workplace Health': 'Work & Productivity',
  'Sedentary Lifestyle': 'Work & Productivity',
  'Productivity': 'Work & Productivity',
  'Remote Work': 'Work & Productivity',
  
  // Guides & Tutorials
  'Guides & Tutorials': 'Guides & Tutorials',
  'Deployment & Installation': 'Guides & Tutorials',
  
  // Comparisons
  'Comparisons': 'Comparisons',
  
  // Research & Trends
  'Research & Trends': 'Research & Trends',
  
  // Engineering
  'Engineering': 'Engineering',
  
  // Community
  'Community': 'Community',
  'Discord': 'Community',
  'User Experience': 'Community',
  
  // Contractors & Access
  'Contractors': 'Contractors & Access',
  'VDI': 'Contractors & Access',
  'BYOD': 'Contractors & Access',
  'Device Management': 'Contractors & Access',
  'MDM': 'Contractors & Access',
  'HR': 'Contractors & Access',
  
  // Monitoring & Operations
  'Monitoring': 'Monitoring & Operations',
  'Web Performance': 'Monitoring & Operations',
  'IT Operations': 'Monitoring & Operations',
  'Supply Chain': 'Monitoring & Operations',
  'Ransomware': 'Monitoring & Operations',
  
  // Remove placeholders
  'Category1': null,
  'Category2': null,
  'Category3': null,
};

// Get the primary category for a blog post
function getPrimaryCategory(postCategories) {
  if (!postCategories || !Array.isArray(postCategories) || postCategories.length === 0) {
    return 'Enterprise'; // Default category
  }
  
  // Map all categories and get the first valid one
  const mappedCategories = postCategories
    .map(cat => CONSOLIDATED_CATEGORIES[cat] || cat)
    .filter(cat => cat !== null && cat !== undefined);
  
  // Priority order for primary category selection
  const priorityOrder = [
    'Security',
    'Enterprise',
    'SaaS',
    'Browser & Technology',
    'AI & Emerging Tech',
    'Industry',
    'Work & Productivity',
    'Contractors & Access',
    'Guides & Tutorials',
    'Comparisons',
    'Research & Trends',
    'Engineering',
    'Community',
    'Monitoring & Operations'
  ];
  
  // Return the first category that matches priority order, or first mapped category
  for (const priorityCat of priorityOrder) {
    if (mappedCategories.includes(priorityCat)) {
      return priorityCat;
    }
  }
  
  return mappedCategories[0] || 'Enterprise';
}

// Process blog-index.js
function consolidateBlogIndex() {
  const blogIndexPath = path.join(__dirname, '../data/blog-index.js');
  let content = fs.readFileSync(blogIndexPath, 'utf8');
  
  // Extract the blogIndex array content
  const arrayStart = content.indexOf('const blogIndex = [');
  const arrayEnd = content.lastIndexOf('];');
  
  if (arrayStart === -1 || arrayEnd === -1) {
    console.error('Could not find blogIndex array');
    return;
  }
  
  const arrayContent = content.substring(arrayStart + 'const blogIndex = ['.length, arrayEnd);
  
  // Parse and update each blog entry - handle both arrays and strings
  const updatedContent = content.substring(0, arrayStart + 'const blogIndex = ['.length) +
    arrayContent
      .replace(/category:\s*\[([^\]]+)\]/g, (match, categoriesStr) => {
        const categories = categoriesStr
          .split(',')
          .map(c => c.trim().replace(/^["']|["']$/g, ''))
          .filter(c => c);
        
        const primaryCategory = getPrimaryCategory(categories);
        
        return `category: "${primaryCategory}"`;
      })
      .replace(/category:\s*"([^"]+)"/g, (match, categoryStr) => {
        // Handle already-consolidated strings that might be placeholders
        const mappedCategory = CONSOLIDATED_CATEGORIES[categoryStr] || categoryStr;
        if (mappedCategory === null || mappedCategory === undefined || mappedCategory === 'Category1' || mappedCategory === 'Category2' || mappedCategory === 'Category3') {
          return `category: "Enterprise"`; // Default for placeholders
        }
        return `category: "${mappedCategory}"`;
      }) +
    content.substring(arrayEnd);
  
  fs.writeFileSync(blogIndexPath, updatedContent, 'utf8');
  console.log('Updated blog-index.js');
}

// Process individual blog JSON files
function consolidateBlogFiles() {
  const blogDir = path.join(__dirname, '../data/blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'));
  
  let updatedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(blogDir, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (content.category) {
      const categories = Array.isArray(content.category) ? content.category : [content.category];
      const primaryCategory = getPrimaryCategory(categories);
      
      content.category = primaryCategory;
      
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
      updatedCount++;
    }
  });
  
  console.log(`Updated ${updatedCount} blog JSON files`);
}

// Main execution
console.log('Consolidating blog categories...');
consolidateBlogIndex();
consolidateBlogFiles();
console.log('Done!');
