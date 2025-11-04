import React from 'react';
import Head from 'next/head';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'March 15, 2025',
      title: 'Kahana Group Inc. Launches Next-Generation Enterprise Browser',
      description: 'Revolutionary new platform combines security and productivity for the modern workforce.',
      link: '#'
    },
    {
      date: 'February 1, 2025',
      title: 'Kahana Announces Strategic Partnership with Leading Cybersecurity Firms',
      description: 'New partnerships strengthen enterprise security offerings across global markets.',
      link: '#'
    },
    {
      date: 'January 10, 2025',
      title: 'Kahana Group Inc. Named Among Top Enterprise Solutions Providers',
      description: 'Industry recognition highlights innovative approach to enterprise browsing.',
      link: '#'
    }
  ];

  const mediaResources = [
    {
      title: 'Brand Assets',
      description: 'Download official logos, product screenshots, and brand guidelines.',
      downloadLink: '#'
    },
    {
      title: 'Executive Photos',
      description: 'High-resolution photos of our leadership team.',
      downloadLink: '#'
    },
    {
      title: 'Product Fact Sheet',
      description: 'Detailed information about our enterprise browser platform.',
      downloadLink: '#'
    }
  ];

  return (
    <>
      <Head>
        <title>Press - Kahana</title>
        <meta
          name="description"
          content="Latest news, press releases, and media resources from Kahana Group Inc. Get the latest updates on our enterprise browser platform."
        />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#0B3B2D] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Get the latest news and updates from Kahana Group Inc. For press inquiries, please contact our media relations team.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Press Releases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Latest Press Releases</h2>
              <div className="space-y-8">
                {pressReleases.map((release, index) => (
                  <div key={index} className="border-b pb-8 last:border-b-0">
                    <div className="text-sm text-[#4A5745] mb-2">{release.date}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      <a href={release.link} className="text-[#0B3B2D] hover:underline">
                        {release.title}
                      </a>
                    </h3>
                    <p className="text-gray-600">{release.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Media Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mediaResources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <a
                      href={resource.downloadLink}
                      className="inline-flex items-center text-[#0B3B2D] hover:underline"
                    >
                      <span>Download</span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Contact */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Media Contact</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  For press inquiries, please contact our media relations team:
                </p>
                <div>
                  <h3 className="font-semibold">Media Relations</h3>
                  <a
                    href="mailto:press@kahana.co"
                    className="text-[#0B3B2D] hover:underline"
                  >
                    press@kahana.co
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-gray-600">
                    We typically respond to media inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 