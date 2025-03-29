import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Manifesto() {
  return (
    <>
      <Head>
        <title>Our Manifesto | Kahana</title>
        <meta
          name="description"
          content="Read Kahana's manifesto about our mission to help people bring their ideas to life and make the world better through creativity and innovation."
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Manifesto</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A declaration of our beliefs, our mission, and our vision for a world where ideas flourish.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Ideas</h2>
              <p className="text-gray-600 mb-6">
                In many realms of life, whether you're a student working on your dream thesis, an industry professional piecing together a breakthrough strategy and proposal, or an author meticulously researching and writing your masterpiece: as human beings, we are passionate about our ideas and projects - we're often defined by them.
              </p>
              <p className="text-gray-600 mb-6">
                When we find a passion or topic we love, when we find ourselves engrossed in projects that we feel can create a significant impact, the clock slows down, and time tastes like honey. The self actualization and accomplishment you gain by completing such a magnum opus can be a turning point in life, a life defining moment.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Barriers We Face</h2>
              <p className="text-gray-600 mb-6">
                And yet these beautiful times of genius and flow we experience are cut short when the browser stops responding. When we search frantically for the missing piece of information and fail to find it, it kills our momentum and our dreams fade.
              </p>
              <p className="text-gray-600 mb-6">
                What if these obstacles like cluttered tabs, disorganized information, and snail-paced browsers vanished and nothing stood between you and your best ideas?
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                Imagine how beautiful and amazing the world would be if people weren't chained down by these enemies and instead let their hearts and mind run wild, letting the deepest most passionate ideas, strategies, and works enter the world.
              </p>
              <p className="text-gray-600 mb-6">
                The world is best off with your ideas and soul in it: that's why we built Oasis.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Oasis Promise</h2>
              <p className="text-gray-600 mb-6">
                A serene, tranquil, and peaceful space that is designed to ease your mind and encourage your ideas to take root. A space that simplifies organization and reduces context switching to let you focus completely on your best work and your ideas.
              </p>
              <p className="text-gray-600 mb-6">
                Create pools of information (hubs) filled with rich data, resources, and tools on any topic and search across all your saved contents with ai. Oasis is designed it to amplify and augment your human memory, not challenge it at every turn. Meet the ideal browser designed for the human mind.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future We're Building</h2>
              <p className="text-gray-600 mb-6">
                As AI continues to advance and gets smarter, Oasis will continue to get better alongside it, since its integrated directly into the space and you can easily access LLM chats like Grok, Claude, Perplexity in the same space at the sound of your voice, tip of your fingers.
              </p>
              <p className="text-gray-600 mb-6">
                We can't wait to see the impact of what you build with Oasis.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-kahana-primary to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Creative Process?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in creating a world where ideas flourish and creativity knows no bounds.
          </p>
          <Link href="/schedule-demo">
            <button className="bg-white text-kahana-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </div>
    </>
  );
} 