/**
 * Bulk Upload Script for Cloudinary
 * 
 * This script uploads all images and videos from your project to Cloudinary,
 * preserving folder structure and generating a mapping file for reference.
 * 
 * Usage: node scripts/upload-to-cloudinary.js
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Promisify fs functions
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

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

// Supported file extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.avi', '.webm', '.mkv', '.flv'];
const ALL_EXTENSIONS = [...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS];

// Directories to scan (including root-level directories and public root)
const SCAN_DIRECTORIES = [
  'public', // Scan entire public directory (includes root files like favicon.svg)
  'public/images',
  'public/blog',
  'public/assets',
  'public/figma-imports',
  'assets',
  'figma-imports', // Root-level figma-imports
  'Videos',
];

// Results tracking
const uploadResults = {
  successful: [],
  failed: [],
  skipped: [],
};

/**
 * Recursively find all image and video files in a directory
 */
async function findMediaFiles(dir, baseDir = '') {
  const files = [];
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(baseDir || process.cwd(), fullPath);
      
      if (entry.isDirectory()) {
        // Recursively search subdirectories
        const subFiles = await findMediaFiles(fullPath, baseDir || process.cwd());
        files.push(...subFiles);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (ALL_EXTENSIONS.includes(ext)) {
          files.push({
            fullPath,
            relativePath,
            name: entry.name,
            ext,
            isVideo: VIDEO_EXTENSIONS.includes(ext),
            isImage: IMAGE_EXTENSIONS.includes(ext),
          });
        }
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(`Error reading directory ${dir}:`, error.message);
    }
  }
  
  return files;
}

/**
 * Upload a single file to Cloudinary
 */
async function uploadFile(file) {
  const { fullPath, relativePath, name, ext, isVideo } = file;
  
  // Determine resource type
  const resourceType = isVideo ? 'video' : 'image';
  
  // Create folder structure in Cloudinary
  // Remove 'public/' prefix and file extension
  const folderPath = path.dirname(relativePath).replace(/^public\//, '');
  const publicId = path.join(folderPath, path.basename(name, ext)).replace(/\\/g, '/');
  
  // Clean up public ID (remove leading slashes, normalize, trim whitespace)
  const cleanPublicId = publicId.replace(/^\/+/, '').replace(/\/+/g, '/').trim();
  
  try {
    console.log(`📤 Uploading: ${relativePath}...`);
    
    const uploadOptions = {
      folder: 'kahana-homepage', // Base folder in Cloudinary
      public_id: cleanPublicId,
      resource_type: resourceType,
      overwrite: false, // Don't overwrite existing files
      invalidate: true, // Invalidate CDN cache
    };
    
    // Add format-specific optimizations
    if (isVideo) {
      uploadOptions.eager = [
        { format: 'mp4', video_codec: 'h264' },
        { format: 'webm', video_codec: 'vp9' },
      ];
      uploadOptions.eager_async = true;
    }
    // For images, we'll let Cloudinary keep the original format
    // Format conversion will happen in URL transformations (auto WebP)
    
    const result = await cloudinary.uploader.upload(fullPath, uploadOptions);
    
    uploadResults.successful.push({
      localPath: relativePath,
      publicId: result.public_id,
      secureUrl: result.secure_url,
      width: result.width || null,
      height: result.height || null,
      format: result.format,
      resourceType: result.resource_type,
      bytes: result.bytes,
    });
    
    console.log(`✅ Uploaded: ${result.public_id} (${(result.bytes / 1024).toFixed(2)} KB)`);
    
    return result;
  } catch (error) {
    // Check if file already exists
    if (error.http_code === 409 || error.message.includes('already exists')) {
      console.log(`⏭️  Skipped (already exists): ${cleanPublicId}`);
      uploadResults.skipped.push({
        localPath: relativePath,
        publicId: cleanPublicId,
        reason: 'already_exists',
      });
      return null;
    }
    
    console.error(`❌ Failed: ${relativePath}`);
    console.error(`   Error: ${error.message}`);
    
    uploadResults.failed.push({
      localPath: relativePath,
      publicId: cleanPublicId,
      error: error.message,
    });
    
    return null;
  }
}

/**
 * Main upload function
 */
async function uploadAllMedia() {
  // Configure Cloudinary first
  const { cloudName, apiKey, apiSecret } = configureCloudinary();
  
  console.log('🚀 Starting Cloudinary bulk upload...\n');
  console.log(`Cloud Name: ${cloudName}\n`);
  
  // Find all media files
  console.log('📁 Scanning for images and videos...\n');
  const allFiles = [];
  const seenFiles = new Set(); // Track files to avoid duplicates
  
  for (const dir of SCAN_DIRECTORIES) {
    const dirPath = path.join(process.cwd(), dir);
    try {
      const stats = await stat(dirPath);
      if (stats.isDirectory()) {
        const files = await findMediaFiles(dirPath);
        // Filter out duplicates based on relative path
        const uniqueFiles = files.filter(file => {
          const key = file.relativePath;
          if (seenFiles.has(key)) {
            return false;
          }
          seenFiles.add(key);
          return true;
        });
        allFiles.push(...uniqueFiles);
        if (uniqueFiles.length > 0) {
          console.log(`Found ${uniqueFiles.length} files in ${dir}/`);
        }
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.warn(`Warning: Could not access ${dir}: ${error.message}`);
      }
    }
  }
  
  console.log(`\n📊 Total unique files found: ${allFiles.length}\n`);
  console.log('=' .repeat(60) + '\n');
  
  if (allFiles.length === 0) {
    console.log('No files to upload.');
    return;
  }
  
  // Upload files with progress tracking
  let uploaded = 0;
  for (const file of allFiles) {
    await uploadFile(file);
    uploaded++;
    
    // Progress indicator
    if (uploaded % 10 === 0) {
      console.log(`\n📈 Progress: ${uploaded}/${allFiles.length} files processed\n`);
    }
  }
  
  // Generate summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 UPLOAD SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successful: ${uploadResults.successful.length}`);
  console.log(`⏭️  Skipped: ${uploadResults.skipped.length}`);
  console.log(`❌ Failed: ${uploadResults.failed.length}`);
  console.log(`📁 Total: ${allFiles.length}`);
  
  // Save mapping file
  const mappingFile = path.join(process.cwd(), 'cloudinary-mapping.json');
  const mapping = {
    generatedAt: new Date().toISOString(),
    cloudName: cloudName,
    successful: uploadResults.successful,
    skipped: uploadResults.skipped,
    failed: uploadResults.failed,
  };
  
  fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
  console.log(`\n💾 Mapping file saved to: cloudinary-mapping.json`);
  
  // Display failed uploads if any
  if (uploadResults.failed.length > 0) {
    console.log('\n❌ Failed uploads:');
    uploadResults.failed.forEach((item) => {
      console.log(`   - ${item.localPath}: ${item.error}`);
    });
  }
  
  console.log('\n✨ Upload complete!\n');
}

// Run the script
if (require.main === module) {
  // Load environment variables
  require('dotenv').config({ path: '.env.local' });
  
  // Verify configuration
  const { cloudName, apiKey, apiSecret } = configureCloudinary();
  
  if (!cloudName || !apiKey || !apiSecret) {
    console.error('❌ Error: Cloudinary credentials not found!');
    console.error('Please ensure .env.local contains:');
    console.error('  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name');
    console.error('  CLOUDINARY_API_KEY=your_api_key');
    console.error('  CLOUDINARY_API_SECRET=your_api_secret');
    console.error('\nCurrent values:');
    console.error(`  Cloud Name: ${cloudName || 'MISSING'}`);
    console.error(`  API Key: ${apiKey ? '***' + apiKey.slice(-4) : 'MISSING'}`);
    console.error(`  API Secret: ${apiSecret ? '***' + apiSecret.slice(-4) : 'MISSING'}`);
    process.exit(1);
  }
  
  uploadAllMedia().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { uploadAllMedia, findMediaFiles };

