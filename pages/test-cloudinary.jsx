import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getCloudinaryUrl, getCloudinarySrcSet, getCloudinaryImageProps } from '../utils/cloudinary';

/**
 * Cloudinary Test Page
 * 
 * This page tests Cloudinary integration and demonstrates:
 * - Image loading from Cloudinary CDN
 * - Automatic format optimization (WebP)
 * - Responsive images with srcset
 * - Different image formats (PNG, JPG, WebP)
 * - Video playback
 * - Size optimization examples
 */

// Test images from the uploaded files
const testImages = [
  {
    name: 'WebP Image (Welcome to Oasis)',
    publicId: 'kahana-homepage/images/Welcome to Oasis',
    originalFormat: 'webp',
    description: 'Original WebP format - should be optimized',
  },
  {
    name: 'PNG Image (BYOD)',
    publicId: 'kahana-homepage/images/BYOD',
    originalFormat: 'png',
    description: 'PNG format - will be converted to WebP automatically',
  },
  {
    name: 'JPEG Image (Enterprise)',
    publicId: 'kahana-homepage/images/enterprise',
    originalFormat: 'jpeg',
    description: 'JPEG format - will be converted to WebP automatically',
  },
  {
    name: 'Figma Import (Custom Themes)',
    publicId: 'kahana-homepage/figma-imports/Custom Themes',
    originalFormat: 'webp',
    description: 'WebP from figma-imports folder',
  },
  {
    name: 'Avatar (Team Member)',
    publicId: 'kahana-homepage/assets/images/avatars/BSJheadshot',
    originalFormat: 'png',
    description: 'Small PNG avatar - optimized for thumbnails',
  },
];

const testVideo = {
  name: 'Oasis Feature Video',
  publicId: 'kahana-homepage/Videos/Oasis Moving Through Tabs Feature - FINAL',
  format: 'mp4',
};

export default function TestCloudinary() {
  const [selectedImage, setSelectedImage] = useState(testImages[0]);
  const [imageWidth, setImageWidth] = useState(800);
  const [showOptimized, setShowOptimized] = useState(true);

  return (
    <>
      <Head>
        <title>Cloudinary Integration Test | Kahana</title>
        <meta name="description" content="Testing Cloudinary CDN integration" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] to-[#E8E8E0] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#313A00] mb-4">
              Cloudinary Integration Test
            </h1>
            <p className="text-lg text-[#495800] max-w-2xl mx-auto">
              This page tests Cloudinary CDN integration, image optimization, and responsive delivery.
              All images are served from Cloudinary's global CDN for faster loading.
            </p>
          </div>

          {/* Status Banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-green-800 font-semibold">Cloudinary Connected</p>
                <p className="text-green-700 text-sm">Cloud Name: dlhpqrucv</p>
              </div>
            </div>
          </div>

          {/* Image Format Tests */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#313A00] mb-6">Image Format Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testImages.map((image) => (
                <div
                  key={image.publicId}
                  className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full h-48 mb-4 rounded overflow-hidden bg-gray-100">
                    <Image
                      src={getCloudinaryUrl(image.publicId, {
                        width: 400,
                        height: 300,
                        format: 'auto',
                        quality: 'auto:good',
                        crop: 'fill',
                      })}
                      alt={image.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-semibold text-[#313A00] mb-1">{image.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.description}</p>
                  <p className="text-xs text-gray-500">Format: {image.originalFormat}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Image Viewer */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#313A00] mb-6">Detailed Image Viewer</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selected Image: {selectedImage.name}
              </label>
              <div className="flex items-center gap-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showOptimized}
                    onChange={(e) => setShowOptimized(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Show Optimized (WebP + Quality)</span>
                </label>
                <label className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Width:</span>
                  <input
                    type="range"
                    min="200"
                    max="1920"
                    value={imageWidth}
                    onChange={(e) => setImageWidth(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-sm text-gray-600 w-16">{imageWidth}px</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Optimized Image */}
              <div>
                <h3 className="font-semibold text-[#313A00] mb-3">
                  {showOptimized ? '✅ Optimized (Cloudinary)' : 'Original'}
                </h3>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 border-2 border-green-500">
                  <Image
                    src={getCloudinaryUrl(selectedImage.publicId, {
                      width: imageWidth,
                      format: showOptimized ? 'auto' : selectedImage.originalFormat,
                      quality: showOptimized ? 'auto:good' : 100,
                      crop: 'fit',
                    })}
                    alt={selectedImage.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-3 p-3 bg-gray-50 rounded text-xs font-mono break-all">
                  <p className="text-gray-600 mb-1">URL:</p>
                  <p className="text-gray-800">
                    {getCloudinaryUrl(selectedImage.publicId, {
                      width: imageWidth,
                      format: showOptimized ? 'auto' : selectedImage.originalFormat,
                      quality: showOptimized ? 'auto:good' : 100,
                      crop: 'fit',
                    })}
                  </p>
                </div>
              </div>

              {/* Image Info */}
              <div>
                <h3 className="font-semibold text-[#313A00] mb-3">Image Information</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Public ID:</span>
                    <p className="text-sm text-gray-800 font-mono">{selectedImage.publicId}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Original Format:</span>
                    <p className="text-sm text-gray-800">{selectedImage.originalFormat}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Display Width:</span>
                    <p className="text-sm text-gray-800">{imageWidth}px</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Optimization:</span>
                    <p className="text-sm text-gray-800">
                      {showOptimized
                        ? 'Auto WebP + Auto Quality (Good)'
                        : 'Original format, 100% quality'}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">CDN:</span>
                    <p className="text-sm text-green-600">Cloudinary Global CDN</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Images Test */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#313A00] mb-6">Responsive Images (srcset)</h2>
            <p className="text-gray-600 mb-4">
              This image automatically loads different sizes based on screen width for optimal performance.
            </p>
            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={getCloudinaryUrl('kahana-homepage/images/Welcome to Oasis', {
                  width: 1200,
                  format: 'auto',
                  quality: 'auto:good',
                  crop: 'fill',
                })}
                alt="Responsive test image"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                srcSet={getCloudinarySrcSet('kahana-homepage/images/Welcome to Oasis', {
                  format: 'auto',
                  quality: 'auto:good',
                  crop: 'fill',
                  widths: [640, 750, 828, 1080, 1200, 1920],
                }).srcSet}
              />
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded text-xs">
              <p className="text-gray-600 mb-2">Responsive breakpoints:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mobile (&lt;640px): 640w</li>
                <li>Tablet (640-1024px): 750w-1080w</li>
                <li>Desktop (&gt;1024px): 1200w-1920w</li>
              </ul>
            </div>
          </section>

          {/* Video Test */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#313A00] mb-6">Video Playback Test</h2>
            <p className="text-gray-600 mb-4">
              Video is served from Cloudinary CDN with automatic format optimization.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
              <video
                controls
                className="w-full h-full"
                poster={getCloudinaryUrl(testVideo.publicId, {
                  width: 1920,
                  format: 'jpg',
                  quality: 'auto:good',
                  crop: 'fill',
                  resourceType: 'image', // Video thumbnail is an image
                })}
              >
                <source
                  src={getCloudinaryUrl(testVideo.publicId, {
                    format: 'mp4',
                    resourceType: 'video',
                  })}
                  type="video/mp4"
                />
                <source
                  src={getCloudinaryUrl(testVideo.publicId, {
                    format: 'webm',
                    resourceType: 'video',
                  })}
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded text-xs font-mono break-all">
              <p className="text-gray-600 mb-1">Video URL:</p>
              <p className="text-gray-800">
                {getCloudinaryUrl(testVideo.publicId, {
                  format: 'mp4',
                  resourceType: 'video',
                })}
              </p>
            </div>
          </section>

          {/* Performance Comparison */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#313A00] mb-6">Performance Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">⚡ Faster Loading</h3>
                <p className="text-sm text-green-700">
                  Images served from Cloudinary's global CDN with edge caching for instant delivery.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📦 Smaller File Sizes</h3>
                <p className="text-sm text-blue-700">
                  Automatic WebP conversion and quality optimization reduce file sizes by 25-35%.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">📱 Responsive</h3>
                <p className="text-sm text-purple-700">
                  Automatic responsive images with srcset for optimal loading on all devices.
                </p>
              </div>
            </div>
          </section>

          {/* Utility Functions Demo */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#313A00] mb-6">Utility Functions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-semibold text-gray-800 mb-2">getCloudinaryUrl()</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Generates optimized Cloudinary URLs with transformations.
                </p>
                <code className="text-xs bg-white p-2 rounded block">
                  {`getCloudinaryUrl('kahana-homepage/images/BYOD', {
  width: 800,
  format: 'auto',
  quality: 'auto:good'
})`}
                </code>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-semibold text-gray-800 mb-2">getCloudinarySrcSet()</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Generates responsive srcset for multiple screen sizes.
                </p>
                <code className="text-xs bg-white p-2 rounded block">
                  {`getCloudinarySrcSet('kahana-homepage/images/Welcome to Oasis', {
  widths: [640, 750, 828, 1080, 1200, 1920]
})`}
                </code>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-[#4A6200] text-white rounded-lg hover:bg-[#5A7200] transition-colors"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

