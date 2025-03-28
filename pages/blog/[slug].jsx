import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl, searchPhotos } from '../../utils/pexels';

// This would typically come from a CMS or database
export const blogPosts = {
  'technical-debt': {
    title: 'Tackling Technical Debt and Redefining Application Access',
    excerpt: 'How modern enterprises are balancing innovation with system maintenance while revolutionizing their approach to application security.',
    customImage: null,
    defaultImageQuery: 'modern technology office workspace',
    content: `
      <p>In today's fast-paced digital landscape, enterprises face a constant challenge: balancing innovation with system maintenance while ensuring robust application security. This delicate equilibrium has become increasingly crucial as organizations navigate the complexities of modern technology infrastructure.</p>

      <figure>
        <img src="[PEXELS_IMG_1]" alt="Peaceful oasis with palm trees and clear water" />
        <figcaption>Finding balance in technology, like nature's perfect equilibrium</figcaption>
      </figure>

      <h2>The Evolution of Technical Debt</h2>
      <p>Technical debt, once considered a simple metaphor for code quality issues, has evolved into a comprehensive concept that affects entire organizational systems. It now encompasses:</p>
      <ul>
        <li>Legacy system maintenance</li>
        <li>Outdated security protocols</li>
        <li>Infrastructure complexity</li>
        <li>Integration challenges</li>
      </ul>

      <figure>
        <img src="[PEXELS_IMG_2]" alt="Desert oasis at sunset" />
        <figcaption>Like an oasis in the desert, good technical practices provide sustenance for growth</figcaption>
      </figure>

      <h2>Modern Approaches to Application Access</h2>
      <p>Organizations are increasingly adopting innovative approaches to application access management:</p>
      <ul>
        <li>Zero Trust Architecture</li>
        <li>Identity-based security</li>
        <li>Contextual access controls</li>
        <li>Automated compliance monitoring</li>
      </ul>

      <h2>Striking the Right Balance</h2>
      <p>The key to success lies in finding the right balance between maintaining existing systems and implementing new solutions. This requires:</p>
      <ul>
        <li>Regular system audits</li>
        <li>Proactive maintenance schedules</li>
        <li>Clear prioritization frameworks</li>
        <li>Cross-functional collaboration</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>As we move forward, organizations must continue to evolve their approach to technical debt and application access. The future belongs to those who can maintain agility while ensuring security and reliability.</p>
    `,
    category: 'Engineering',
    date: 'March 15, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'Chief Technology Officer',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'tropical oasis waterfall',
        'desert oasis sunset',
        'peaceful lagoon nature'
      ]
    }
  },
  'zero-trust': {
    title: 'Implementing Zero Trust in Modern Enterprises',
    excerpt: 'A comprehensive guide to implementing Zero Trust architecture in your organization.',
    customImage: null,
    defaultImageQuery: 'network security digital protection',
    content: `
      <p>Zero Trust has emerged as a critical security framework for modern enterprises. This comprehensive guide explores the implementation of Zero Trust architecture in your organization.</p>

      <figure>
        <img src="[PEXELS_IMG_1]" alt="Tranquil oasis pool reflecting the sky" />
        <figcaption>Like a protected oasis, Zero Trust creates a secure environment in a hostile landscape</figcaption>
      </figure>

      <h2>Understanding Zero Trust</h2>
      <p>Zero Trust operates on the principle of "never trust, always verify." This fundamental shift in security thinking requires organizations to:</p>
      <ul>
        <li>Verify every access request</li>
        <li>Assume breach</li>
        <li>Implement least privilege access</li>
        <li>Monitor continuously</li>
      </ul>

      <figure>
        <img src="[PEXELS_IMG_2]" alt="Natural stone formations around clear water" />
        <figcaption>Natural barriers and protection, much like layered security in Zero Trust</figcaption>
      </figure>

      <h2>Implementation Steps</h2>
      <p>Successful Zero Trust implementation involves several key phases:</p>
      <ol>
        <li>Assessment and planning</li>
        <li>Identity management</li>
        <li>Network segmentation</li>
        <li>Access controls</li>
        <li>Monitoring and maintenance</li>
      </ol>

      <h2>Best Practices</h2>
      <p>To ensure successful implementation, organizations should:</p>
      <ul>
        <li>Start with a clear strategy</li>
        <li>Implement gradually</li>
        <li>Focus on user experience</li>
        <li>Maintain comprehensive documentation</li>
        <li>Regularly review and update policies</li>
      </ul>
    `,
    category: 'Security',
    date: 'March 10, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'Chief Technology Officer',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'secluded oasis pool nature',
        'protected oasis rock formation',
        'peaceful water sanctuary'
      ]
    }
  },
  'cloud-migration': {
    title: 'Cloud Migration Strategies for 2024',
    excerpt: 'Explore the latest strategies and best practices for successful cloud migration.',
    customImage: null,
    defaultImageQuery: 'cloud computing data center',
    content: `
      <p>Cloud migration continues to be a critical initiative for organizations in 2024. This guide explores the latest strategies and best practices for successful cloud migration.</p>

      <figure>
        <img src="[PEXELS_IMG_1]" alt="Misty oasis with floating clouds" />
        <figcaption>Like clouds gathering over an oasis, modern infrastructure brings resources where needed</figcaption>
      </figure>

      <h2>Current Cloud Landscape</h2>
      <p>The cloud computing landscape has evolved significantly, with organizations now considering:</p>
      <ul>
        <li>Multi-cloud strategies</li>
        <li>Edge computing</li>
        <li>Serverless architecture</li>
        <li>Containerization</li>
      </ul>

      <figure>
        <img src="[PEXELS_IMG_2]" alt="Oasis reflecting clouds in water" />
        <figcaption>Reflecting on the transformation journey, like clouds mirrored in still waters</figcaption>
      </figure>

      <h2>Migration Approaches</h2>
      <p>Organizations can choose from several migration strategies:</p>
      <ul>
        <li>Lift and shift</li>
        <li>Refactoring</li>
        <li>Replatforming</li>
        <li>Rebuilding</li>
        <li>Replacing</li>
      </ul>

      <h2>Key Considerations</h2>
      <p>Successful migration requires careful consideration of:</p>
      <ul>
        <li>Cost optimization</li>
        <li>Security requirements</li>
        <li>Compliance needs</li>
        <li>Performance expectations</li>
        <li>Business continuity</li>
      </ul>
    `,
    category: 'Cloud Computing',
    date: 'March 5, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'Chief Technology Officer',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'misty oasis morning light',
        'oasis mirror lake reflection',
        'tropical paradise water'
      ]
    }
  },
  'devsecops': {
    title: 'DevSecOps: Bridging Development and Security',
    excerpt: 'Learn how to effectively integrate security practices into your development pipeline.',
    customImage: null,
    defaultImageQuery: 'software development team collaboration',
    content: `
      <p>DevSecOps represents a fundamental shift in how organizations approach software development and security. This article explores how to effectively integrate security practices into your development pipeline.</p>

      <figure>
        <img src="[PEXELS_IMG_1]" alt="Natural bridge over oasis waters" />
        <figcaption>Bridging different environments seamlessly, like nature's own architecture</figcaption>
      </figure>

      <h2>The DevSecOps Philosophy</h2>
      <p>DevSecOps extends beyond traditional DevOps by:</p>
      <ul>
        <li>Integrating security early in development</li>
        <li>Automating security processes</li>
        <li>Fostering collaboration between teams</li>
        <li>Implementing continuous security testing</li>
      </ul>

      <figure>
        <img src="[PEXELS_IMG_2]" alt="Harmonious oasis ecosystem" />
        <figcaption>A balanced ecosystem where all elements work together in harmony</figcaption>
      </figure>

      <h2>Implementation Strategies</h2>
      <p>Key components of successful DevSecOps implementation include:</p>
      <ul>
        <li>Security automation tools</li>
        <li>Compliance as code</li>
        <li>Security testing in CI/CD</li>
        <li>Threat modeling</li>
        <li>Security monitoring</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Organizations should focus on:</p>
      <ul>
        <li>Cultural transformation</li>
        <li>Tool selection and integration</li>
        <li>Process automation</li>
        <li>Continuous learning</li>
        <li>Metrics and measurement</li>
      </ul>
    `,
    category: 'Development',
    date: 'March 1, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'Chief Technology Officer',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'natural stone bridge water',
        'harmonious oasis ecosystem',
        'peaceful water garden'
      ]
    }
  }
};

export default function BlogPost({ post, contentImages }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <Link href="/blog" className="text-[#3B675E] hover:text-[#2A4A3F] mt-4 inline-block">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  // Replace image placeholders in content with actual Pexels images
  const contentWithImages = contentImages.reduce((content, img, index) => {
    return content.replace(`[PEXELS_IMG_${index + 1}]`, img);
  }, post.content);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{post.title} | Kahana Blog</title>
        <meta 
          name="description" 
          content={post.title}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/blog" className="text-[#3B675E] hover:text-[#2A4A3F] flex items-center mb-8">
          <span>← Back to Blog</span>
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <div className="text-[#3B675E] uppercase tracking-wider text-sm mb-2">{post.category}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
            
            <div className="relative aspect-[21/9] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <div className="mr-4">{post.date}</div>
              <div>By {post.author.name}</div>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentWithImages }}
          />
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(blogPosts).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogPosts[params.slug];
  if (!post) return { notFound: true };

  try {
    // Use custom image if provided, otherwise fetch from Pexels
    let heroImageUrl = post.customImage;
    if (!heroImageUrl) {
      const heroPhoto = await getRandomPhoto(post.defaultImageQuery);
      heroImageUrl = heroPhoto ? getOptimizedPhotoUrl(heroPhoto) : '/blog/placeholder.jpg';
    }

    // Fetch content images
    const contentImageUrls = await Promise.all(
      post.searchTerms.content.map(async (term) => {
        const photo = await getRandomPhoto(term);
        return getOptimizedPhotoUrl(photo) || '/blog/placeholder.jpg';
      })
    );

    return {
      props: {
        post: {
          ...post,
          image: heroImageUrl
        },
        contentImages: contentImageUrls
      },
      revalidate: 86400 // Revalidate once per day
    };
  } catch (error) {
    console.error('Error fetching Pexels images:', error);
    return {
      props: {
        post: {
          ...post,
          image: '/blog/placeholder.jpg'
        },
        contentImages: Array(post.searchTerms.content.length).fill('/blog/placeholder.jpg')
      }
    };
  }
} 