const fs = require('fs');
const path = require('path');

const marketsDir = path.join(__dirname, '../pages/markets');
const marketsFiles = fs.readdirSync(marketsDir).filter(file => file.endsWith('.jsx') && file !== 'all.jsx');

// Template for the improved getServerSideProps function
const getServerSidePropsTemplate = (pageName, blogVarName, categories) => `export async function getServerSideProps() {
  try {
    const { getRandomPhoto, getOptimizedPhotoUrl, getPlaceholderImageUrl } = await import('../../utils/pexels');

    const ${blogVarName} = blogIndex
      .filter(post => post.category.some(cat => 
        ${categories}
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Fetch images on the server with error handling
    const postsWithImages = await Promise.all(
      ${blogVarName}.map(async (post) => {
        try {
          const photo = await getRandomPhoto(post.defaultImageQuery);
          return {
            ...post,
            image: getOptimizedPhotoUrl(photo) || getPlaceholderImageUrl(post.defaultImageQuery),
          };
        } catch (error) {
          console.error(\`Error fetching image for post "\${post.title}":\`, error);
          return {
            ...post,
            image: getPlaceholderImageUrl(post.defaultImageQuery),
          };
        }
      })
    );

    return {
      props: {
        ${blogVarName}: postsWithImages,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for ${pageName} page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        ${categories}
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3)
      .map(post => ({
        ...post,
        image: getPlaceholderImageUrl ? getPlaceholderImageUrl(post.defaultImageQuery) : null,
      }));

    return {
      props: {
        ${blogVarName}: fallbackBlogs,
      },
    };
  }
}`;

// Configuration for each market page
const marketConfigs = {
  'finance.jsx': {
    blogVarName: 'financeBlogs',
    categories: `cat.toLowerCase() === 'finance' || 
      cat.toLowerCase() === 'financial' ||
      cat.toLowerCase() === 'security'`
  },
  'healthcare.jsx': {
    blogVarName: 'healthcareBlogs',
    categories: `cat.toLowerCase() === 'healthcare' || 
      cat.toLowerCase() === 'security'`
  },
  'retail.jsx': {
    blogVarName: 'retailBlogs',
    categories: `cat.toLowerCase() === 'retail' || 
      cat.toLowerCase() === 'security'`
  },
  'hospitality.jsx': {
    blogVarName: 'hospitalityBlogs',
    categories: `cat.toLowerCase() === 'hospitality' || 
      cat.toLowerCase() === 'security'`
  },
  'education.jsx': {
    blogVarName: 'educationBlogs',
    categories: `cat.toLowerCase() === 'education' || 
      cat.toLowerCase() === 'security'`
  },
  'professional.jsx': {
    blogVarName: 'professionalBlogs',
    categories: `cat.toLowerCase() === 'professional' || 
      cat.toLowerCase() === 'security'`
  },
  'energy-utilities.jsx': {
    blogVarName: 'energyBlogs',
    categories: `cat.toLowerCase() === 'energy' || 
      cat.toLowerCase() === 'utilities' ||
      cat.toLowerCase() === 'security'`
  },
  'manufacturing.jsx': {
    blogVarName: 'manufacturingBlogs',
    categories: `cat.toLowerCase() === 'manufacturing' || 
      cat.toLowerCase() === 'security'`
  },
  'government.jsx': {
    blogVarName: 'governmentBlogs',
    categories: `cat.toLowerCase() === 'government' || 
      cat.toLowerCase() === 'security'`
  },
  'technology.jsx': {
    blogVarName: 'technologyBlogs',
    categories: `cat.toLowerCase() === 'technology' || 
      cat.toLowerCase() === 'security'`
  }
};

// Process each markets file
marketsFiles.forEach(file => {
  const filePath = path.join(marketsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const config = marketConfigs[file];
  
  if (!config) {
    console.log(`No config found for ${file}, skipping...`);
    return;
  }

  // Find the existing getServerSideProps function
  const getServerSidePropsRegex = /export async function getServerSideProps\(\) \{[\s\S]*?\n\}/;
  const match = content.match(getServerSidePropsRegex);
  
  if (match) {
    const pageName = file.replace('.jsx', '');
    const newGetServerSideProps = getServerSidePropsTemplate(pageName, config.blogVarName, config.categories);
    
    // Replace the existing function
    const newContent = content.replace(getServerSidePropsRegex, newGetServerSideProps);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, newContent);
    console.log(`✅ Updated ${file}`);
  } else {
    console.log(`❌ Could not find getServerSideProps in ${file}`);
  }
});

console.log('\n🎉 All markets pages have been updated with improved error handling!');
