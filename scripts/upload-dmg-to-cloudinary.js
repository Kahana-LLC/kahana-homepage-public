/**
 * Upload DMG File to Cloudinary
 * 
 * This script uploads a .dmg file (or any raw file) to Cloudinary as a raw resource.
 * 
 * Usage: 
 *   node scripts/upload-dmg-to-cloudinary.js <path-to-dmg-file>
 * 
 * Example:
 *   node scripts/upload-dmg-to-cloudinary.js ~/Downloads/oasis-browser-mac-silicon.dmg
 * 
 * Environment Variables Required:
 *   - CLOUDINARY_CLOUD_NAME (or NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)
 *   - CLOUDINARY_API_KEY
 *   - CLOUDINARY_API_SECRET
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Get file path from command line argument
const dmgPath = process.argv[2];

if (!dmgPath) {
  console.error('❌ Error: Please provide the path to your .dmg file');
  console.log('\nUsage: node scripts/upload-dmg-to-cloudinary.js <path-to-dmg-file>');
  console.log('Example: node scripts/upload-dmg-to-cloudinary.js ~/Downloads/oasis-browser-mac-silicon.dmg');
  process.exit(1);
}

// Check if file exists
if (!fs.existsSync(dmgPath)) {
  console.error(`❌ Error: File not found: ${dmgPath}`);
  process.exit(1);
}

// Configure Cloudinary
function configureCloudinary() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  
  if (!cloudName || !apiKey || !apiSecret) {
    console.error('❌ Error: Cloudinary credentials not found!');
    console.log('\nPlease set the following environment variables:');
    console.log('  - CLOUDINARY_CLOUD_NAME (or NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)');
    console.log('  - CLOUDINARY_API_KEY');
    console.log('  - CLOUDINARY_API_SECRET');
    console.log('\nYou can get these from: https://cloudinary.com/console');
    process.exit(1);
  }
  
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });
  
  return { cloudName, apiKey, apiSecret };
}

// Get file info
function getFileInfo(filePath) {
  const stats = fs.statSync(filePath);
  const fileName = path.basename(filePath);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  return {
    fileName,
    fileSize: stats.size,
    fileSizeMB,
    extension: path.extname(filePath).toLowerCase()
  };
}

// Upload function
async function uploadDMG() {
  try {
    // Configure Cloudinary
    const { cloudName } = configureCloudinary();
    
    // Get file info
    const fileInfo = getFileInfo(dmgPath);
    
    console.log('\n📦 Uploading DMG file to Cloudinary...');
    console.log(`   File: ${fileInfo.fileName}`);
    console.log(`   Size: ${fileInfo.fileSizeMB} MB`);
    console.log(`   Cloud: ${cloudName}\n`);
    
    // Extract filename without extension for public_id
    const publicId = `kahana-homepage/downloads/${path.basename(fileInfo.fileName, fileInfo.extension)}`;
    
    // Upload as raw file
    const result = await cloudinary.uploader.upload(dmgPath, {
      resource_type: 'raw', // Important: use 'raw' for non-image/video files
      folder: 'kahana-homepage/downloads',
      public_id: path.basename(fileInfo.fileName, fileInfo.extension),
      overwrite: true, // Overwrite if file already exists
      use_filename: true,
      unique_filename: false,
    });
    
    console.log('\n✅ Upload successful!\n');
    console.log('📋 File Details:');
    console.log(`   Public ID: ${result.public_id}`);
    console.log(`   Resource Type: ${result.resource_type}`);
    console.log(`   Format: ${result.format || 'raw'}`);
    console.log(`   Size: ${(result.bytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`   Created: ${new Date(result.created_at).toLocaleString()}\n`);
    console.log('🔗 Download URLs:');
    console.log(`   Secure URL: ${result.secure_url}`);
    console.log(`   Regular URL: ${result.url}\n`);
    console.log('💡 Copy the Secure URL and use it in your installations page!\n');
    
    return result;
    
  } catch (error) {
    console.error('\n❌ Upload failed:', error.message);
    
    if (error.http_code) {
      console.error(`   HTTP Code: ${error.http_code}`);
    }
    
    if (error.message.includes('Invalid API credentials')) {
      console.error('\n💡 Tip: Check your Cloudinary API credentials in environment variables');
    }
    
    if (error.message.includes('File size')) {
      console.error('\n💡 Tip: Cloudinary free tier has file size limits. Consider upgrading or using AWS S3 for large files.');
    }
    
    process.exit(1);
  }
}

// Run upload
uploadDMG();

