/**
 * Upload Missing Images to Cloudinary
 * 
 * This script uploads specific missing images that are referenced in the code
 * but not yet in Cloudinary.
 * 
 * Usage: node scripts/upload-missing-images.js
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Function to configure Cloudinary
function configureCloudinary() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });
  
  return { cloudName, apiKey, apiSecret };
}

// Missing images to upload (from enterprise-buyer-guide.jsx)
const MISSING_IMAGES = [
  'public/images/sales.png',
  'public/images/market.png',
  'public/images/academic.png',
  'public/images/user.png',
  'public/images/due-diligence.jpeg',
  'public/images/legal.jpeg',
];

async function uploadMissingImages() {
  const { cloudName } = configureCloudinary();
  
  console.log('🔍 Checking for missing images...\n');
  
  const results = {
    uploaded: [],
    notFound: [],
    errors: [],
  };
  
  for (const imagePath of MISSING_IMAGES) {
    const fullPath = path.join(process.cwd(), imagePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${imagePath}`);
      results.notFound.push(imagePath);
      continue;
    }
    
    try {
      console.log(`📤 Uploading: ${imagePath}...`);
      
      // Determine folder based on path
      let folder = 'kahana-homepage';
      if (imagePath.includes('/images/')) {
        folder = 'kahana-homepage/images';
      } else if (imagePath.includes('/assets/')) {
        folder = 'kahana-homepage/assets';
      }
      
      // Get filename without extension for public_id
      const filename = path.basename(imagePath, path.extname(imagePath));
      const publicId = `${folder}/${filename}`;
      
      const result = await cloudinary.uploader.upload(fullPath, {
        folder: folder,
        public_id: filename,
        overwrite: false, // Don't overwrite if exists
      });
      
      console.log(`✅ Uploaded: ${imagePath}`);
      console.log(`   Public ID: ${result.public_id}`);
      console.log(`   URL: ${result.secure_url}\n`);
      
      results.uploaded.push({
        localPath: imagePath,
        publicId: result.public_id,
        secureUrl: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
      });
    } catch (error) {
      console.error(`❌ Error uploading ${imagePath}:`, error.message);
      results.errors.push({ path: imagePath, error: error.message });
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 UPLOAD SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Uploaded: ${results.uploaded.length}`);
  console.log(`⚠️  Not Found: ${results.notFound.length}`);
  console.log(`❌ Errors: ${results.errors.length}`);
  
  if (results.uploaded.length > 0) {
    console.log('\n✅ Successfully uploaded:');
    results.uploaded.forEach(item => {
      console.log(`   - ${item.localPath} → ${item.publicId}`);
    });
  }
  
  if (results.notFound.length > 0) {
    console.log('\n⚠️  Files not found (need to be created or have different names):');
    results.notFound.forEach(path => {
      console.log(`   - ${path}`);
    });
  }
  
  if (results.errors.length > 0) {
    console.log('\n❌ Errors:');
    results.errors.forEach(item => {
      console.log(`   - ${item.path}: ${item.error}`);
    });
  }
  
  // Update cloudinary-mapping.json if files were uploaded
  if (results.uploaded.length > 0) {
    const mappingFile = path.join(process.cwd(), 'cloudinary-mapping.json');
    let mapping = { successful: [], skipped: [], failed: [] };
    
    if (fs.existsSync(mappingFile)) {
      mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));
    }
    
    // Add new uploads to successful array
    mapping.successful.push(...results.uploaded);
    mapping.generatedAt = new Date().toISOString();
    mapping.cloudName = cloudName;
    
    fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
    console.log(`\n💾 Updated cloudinary-mapping.json`);
  }
  
  console.log('\n✨ Done!\n');
}

// Run the script
if (require.main === module) {
  require('dotenv').config({ path: '.env.local' });
  
  const { cloudName, apiKey, apiSecret } = configureCloudinary();
  
  if (!cloudName || !apiKey || !apiSecret) {
    console.error('❌ Error: Cloudinary credentials not found!');
    console.error('Please ensure .env.local contains:');
    console.error('  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name');
    console.error('  CLOUDINARY_API_KEY=your_api_key');
    console.error('  CLOUDINARY_API_SECRET=your_api_secret');
    process.exit(1);
  }
  
  uploadMissingImages().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { uploadMissingImages };

