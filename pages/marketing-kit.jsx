import Head from 'next/head';
import Link from 'next/link';

export default function MarketingKit() {
  return (
    <>
      <Head>
        <title>Marketing Kit | Aura Library</title>
        <meta name="description" content="Access our collection of social media assets and content to help promote Aura Library." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Marketing Kit
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Everything you need to promote Aura Library on social media and beyond
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Social Media Posts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Social Media Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Twitter Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Twitter Posts</h3>
                <p className="text-gray-600 mb-4">Ready-to-use tweets for various occasions</p>
                <Link href="/marketing-kit/twitter" className="text-blue-600 hover:text-blue-800">
                  View Twitter Posts →
                </Link>
              </div>

              {/* LinkedIn Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">LinkedIn Posts</h3>
                <p className="text-gray-600 mb-4">Professional content for LinkedIn</p>
                <Link href="/marketing-kit/linkedin" className="text-blue-600 hover:text-blue-800">
                  View LinkedIn Posts →
                </Link>
              </div>

              {/* Instagram Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Instagram Posts</h3>
                <p className="text-gray-600 mb-4">Visual content for Instagram</p>
                <Link href="/marketing-kit/instagram" className="text-blue-600 hover:text-blue-800">
                  View Instagram Posts →
                </Link>
              </div>
            </div>
          </div>

          {/* Brand Assets Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Logos */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Logos</h3>
                <p className="text-gray-600 mb-4">Official Aura Library logos in various formats</p>
                <Link href="/marketing-kit/logos" className="text-blue-600 hover:text-blue-800">
                  Download Logos →
                </Link>
              </div>

              {/* Brand Colors */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Colors</h3>
                <p className="text-gray-600 mb-4">Our official color palette and usage guidelines</p>
                <Link href="/marketing-kit/colors" className="text-blue-600 hover:text-blue-800">
                  View Color Guide →
                </Link>
              </div>

              {/* Typography */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Typography</h3>
                <p className="text-gray-600 mb-4">Font guidelines and usage</p>
                <Link href="/marketing-kit/typography" className="text-blue-600 hover:text-blue-800">
                  View Typography Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Marketing Materials Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Marketing Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Studies */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Studies</h3>
                <p className="text-gray-600 mb-4">Success stories and customer testimonials</p>
                <Link href="/marketing-kit/case-studies" className="text-blue-600 hover:text-blue-800">
                  View Case Studies →
                </Link>
              </div>

              {/* Product Screenshots */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Screenshots</h3>
                <p className="text-gray-600 mb-4">High-quality screenshots of Aura Library features</p>
                <Link href="/marketing-kit/screenshots" className="text-blue-600 hover:text-blue-800">
                  Download Screenshots →
                </Link>
              </div>

              {/* Infographics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Infographics</h3>
                <p className="text-gray-600 mb-4">Visual representations of key information</p>
                <Link href="/marketing-kit/infographics" className="text-blue-600 hover:text-blue-800">
                  View Infographics →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 