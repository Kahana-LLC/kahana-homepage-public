import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from a CMS or database
const blogPosts = {
  'technical-debt': {
    title: 'Tackling Technical Debt and Redefining Application Access',
    content: `
      <p>In today's fast-paced digital landscape, enterprises face a constant challenge: balancing innovation with system maintenance while ensuring robust application security. This delicate equilibrium has become increasingly crucial as organizations navigate the complexities of modern technology infrastructure.</p>

      <h2>The Evolution of Technical Debt</h2>
      <p>Technical debt, once considered a simple metaphor for code quality issues, has evolved into a comprehensive concept that affects entire organizational systems. It now encompasses:</p>
      <ul>
        <li>Legacy system maintenance</li>
        <li>Outdated security protocols</li>
        <li>Infrastructure complexity</li>
        <li>Integration challenges</li>
      </ul>

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
    category: 'Enterprise Technology',
    date: 'March 15, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'Chief Technology Officer',
      initials: 'AK'
    },
    image: '/blog/technical-debt-hero.jpg'
  },
  'zero-trust': {
    title: 'Implementing Zero Trust in Modern Enterprises',
    content: `
      <p>Zero Trust has emerged as a critical security framework for modern enterprises. This comprehensive guide explores the implementation of Zero Trust architecture in your organization.</p>

      <h2>Understanding Zero Trust</h2>
      <p>Zero Trust operates on the principle of "never trust, always verify." This fundamental shift in security thinking requires organizations to:</p>
      <ul>
        <li>Verify every access request</li>
        <li>Assume breach</li>
        <li>Implement least privilege access</li>
        <li>Monitor continuously</li>
      </ul>

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
    image: '/blog/placeholder.jpg'
  },
  'cloud-migration': {
    title: 'Cloud Migration Strategies for 2024',
    content: `
      <p>Cloud migration continues to be a critical initiative for organizations in 2024. This guide explores the latest strategies and best practices for successful cloud migration.</p>

      <h2>Current Cloud Landscape</h2>
      <p>The cloud computing landscape has evolved significantly, with organizations now considering:</p>
      <ul>
        <li>Multi-cloud strategies</li>
        <li>Edge computing</li>
        <li>Serverless architecture</li>
        <li>Containerization</li>
      </ul>

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
    image: '/blog/placeholder.jpg'
  },
  'devsecops': {
    title: 'DevSecOps: Bridging Development and Security',
    content: `
      <p>DevSecOps represents a fundamental shift in how organizations approach software development and security. This article explores how to effectively integrate security practices into your development pipeline.</p>

      <h2>The DevSecOps Philosophy</h2>
      <p>DevSecOps extends beyond traditional DevOps by:</p>
      <ul>
        <li>Integrating security early in development</li>
        <li>Automating security processes</li>
        <li>Fostering collaboration between teams</li>
        <li>Implementing continuous security testing</li>
      </ul>

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
    image: '/blog/placeholder.jpg'
  }
};

export default function BlogPost({ post }) {
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

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{post.title} | Kahana Blog</title>
        <meta 
          name="description" 
          content={post.title}
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-[#3B675E] flex items-center justify-center text-white font-semibold text-lg">
              {post.author.initials}
            </div>
            <div>
              <div className="font-medium text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-500">{post.author.role}</div>
            </div>
          </div>
          <span className="text-[#3B675E] uppercase text-sm font-medium">
            {post.category}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <time className="text-gray-500">{post.date}</time>
        </header>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#3B675E] font-medium hover:text-[#2A4A3F] transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>
        </div>
      </article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = blogPosts[params.slug];
  return {
    props: {
      post
    }
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(blogPosts).map(slug => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
} 