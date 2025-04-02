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
      <p>Remember the last time you tried to add a new feature to your application, only to discover that the existing codebase was a maze of outdated patterns and undocumented dependencies? You're not alone. Technical debt isn't just about messy code—it's a silent killer of innovation that affects everything from system performance to team morale. In this article, we'll explore how forward-thinking organizations are turning this challenge into an opportunity for transformation.</p>

      <h2>The Evolution of Technical Debt</h2>
      <p>Technical debt, once considered a simple metaphor for code quality issues, has evolved into a comprehensive concept that affects entire organizational systems. It now encompasses:</p>
      <ul>
        <li>Legacy system maintenance and modernization challenges</li>
        <li>Outdated security protocols and compliance requirements</li>
        <li>Infrastructure complexity and cloud migration hurdles</li>
        <li>Integration challenges between disparate systems</li>
        <li>Technical knowledge gaps and documentation debt</li>
        <li>Performance bottlenecks and scalability issues</li>
      </ul>

      <h2>Modern Approaches to Application Access</h2>
      <p>Organizations are increasingly adopting innovative approaches to application access management. The shift from traditional perimeter-based security to more sophisticated models has led to several key developments:</p>
      <ul>
        <li><strong>Zero Trust Architecture:</strong> Implementing "never trust, always verify" principles across all access points</li>
        <li><strong>Identity-based Security:</strong> Moving beyond simple username/password authentication to multi-factor and biometric solutions</li>
        <li><strong>Contextual Access Controls:</strong> Using real-time context (location, device, time) to make access decisions</li>
        <li><strong>Automated Compliance Monitoring:</strong> Leveraging AI and machine learning to maintain continuous compliance</li>
        <li><strong>Privileged Access Management:</strong> Implementing strict controls for elevated system access</li>
      </ul>

      <h2>Striking the Right Balance</h2>
      <p>The key to success lies in finding the right balance between maintaining existing systems and implementing new solutions. This requires a comprehensive approach:</p>
      <ul>
        <li><strong>Regular System Audits:</strong> Conducting thorough assessments of current technical debt and security posture</li>
        <li><strong>Proactive Maintenance Schedules:</strong> Implementing preventive maintenance rather than reactive fixes</li>
        <li><strong>Clear Prioritization Frameworks:</strong> Developing objective criteria for addressing technical debt</li>
        <li><strong>Cross-functional Collaboration:</strong> Breaking down silos between development, security, and operations teams</li>
        <li><strong>Resource Allocation:</strong> Ensuring adequate budget and personnel for maintenance and innovation</li>
      </ul>

      <h2>Measuring and Managing Technical Debt</h2>
      <p>Effective technical debt management requires clear metrics and tracking mechanisms:</p>
      <ul>
        <li>Code quality metrics and automated testing coverage</li>
        <li>System performance and reliability indicators</li>
        <li>Security vulnerability assessments</li>
        <li>Maintenance cost tracking</li>
        <li>Innovation velocity measurements</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>As we move forward, organizations must continue to evolve their approach to technical debt and application access. The future belongs to those who can:</p>
      <ul>
        <li>Maintain agility while ensuring security and reliability</li>
        <li>Embrace automation and AI-driven solutions</li>
        <li>Foster a culture of continuous improvement</li>
        <li>Balance short-term needs with long-term sustainability</li>
        <li>Adapt to emerging threats and technological changes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Successfully managing technical debt and application access is not a one-time effort but an ongoing journey. Organizations that approach these challenges with a strategic, balanced mindset will be better positioned to thrive in the digital age. By implementing modern security practices, maintaining clear priorities, and fostering collaboration across teams, enterprises can build a foundation for sustainable growth and innovation.</p>
    `,
    category: 'Engineering',
    date: 'March 15, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'CTO',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'modern technology office workspace',
        'digital transformation concept'
      ]
    }
  },
  'zero-trust': {
    title: 'Implementing Zero Trust in Modern Enterprises',
    excerpt: 'A comprehensive guide to implementing Zero Trust architecture in your organization.',
    customImage: null,
    defaultImageQuery: 'network security digital protection',
    content: `
      <p>Imagine a world where every door in your office building required a unique key, and even after using that key, you still had to prove your identity and purpose before being allowed to enter. That's Zero Trust security in a nutshell—and it's becoming the new standard for enterprise security. In this comprehensive guide, we'll explore why traditional security models are failing and how Zero Trust is revolutionizing the way we protect our digital assets.</p>

      <h2>Understanding Zero Trust</h2>
      <p>Zero Trust operates on the principle of "never trust, always verify." This fundamental shift in security thinking requires organizations to completely rethink their approach to network security and access management. Key principles include:</p>
      <ul>
        <li><strong>Continuous Verification:</strong> Every access request must be verified, regardless of location or user</li>
        <li><strong>Assume Breach:</strong> Design security controls with the assumption that attackers are already inside the network</li>
        <li><strong>Least Privilege Access:</strong> Grant users only the minimum access required for their role</li>
        <li><strong>Microsegmentation:</strong> Divide networks into smaller, isolated segments to limit lateral movement</li>
        <li><strong>Continuous Monitoring:</strong> Implement real-time monitoring and analytics for all network activity</li>
      </ul>

      <h2>Implementation Steps</h2>
      <p>Successful Zero Trust implementation involves several key phases, each requiring careful planning and execution:</p>
      <ol>
        <li><strong>Assessment and Planning</strong>
          <ul>
            <li>Conduct comprehensive security assessment</li>
            <li>Map current network architecture</li>
            <li>Identify critical assets and data flows</li>
            <li>Define security requirements and compliance needs</li>
          </ul>
        </li>
        <li><strong>Identity Management</strong>
          <ul>
            <li>Implement robust identity verification</li>
            <li>Deploy multi-factor authentication</li>
            <li>Establish role-based access controls</li>
            <li>Integrate with existing identity providers</li>
          </ul>
        </li>
        <li><strong>Network Segmentation</strong>
          <ul>
            <li>Design microsegmentation strategy</li>
            <li>Implement network isolation</li>
            <li>Configure access controls between segments</li>
            <li>Establish monitoring points</li>
          </ul>
        </li>
        <li><strong>Access Controls</strong>
          <ul>
            <li>Deploy policy enforcement points</li>
            <li>Implement application-level controls</li>
            <li>Configure dynamic access policies</li>
            <li>Establish emergency access procedures</li>
          </ul>
        </li>
        <li><strong>Monitoring and Maintenance</strong>
          <ul>
            <li>Set up security analytics</li>
            <li>Implement automated alerts</li>
            <li>Establish incident response procedures</li>
            <li>Create maintenance schedules</li>
          </ul>
        </li>
      </ol>

      <h2>Best Practices</h2>
      <p>To ensure successful implementation, organizations should follow these best practices:</p>
      <ul>
        <li><strong>Start with a Clear Strategy:</strong> Develop a comprehensive roadmap with defined milestones and success criteria</li>
        <li><strong>Implement Gradually:</strong> Take a phased approach, starting with critical assets and expanding systematically</li>
        <li><strong>Focus on User Experience:</strong> Balance security with usability to maintain productivity</li>
        <li><strong>Maintain Comprehensive Documentation:</strong> Keep detailed records of configurations, policies, and procedures</li>
        <li><strong>Regular Review and Updates:</strong> Conduct periodic assessments and adjust policies as needed</li>
        <li><strong>Employee Training:</strong> Provide ongoing security awareness training for all staff</li>
      </ul>

      <h2>Common Challenges and Solutions</h2>
      <p>Organizations often face several challenges during Zero Trust implementation:</p>
      <ul>
        <li><strong>Legacy Systems:</strong> Gradually modernize or isolate legacy systems while maintaining security</li>
        <li><strong>User Resistance:</strong> Implement change management strategies and provide clear communication</li>
        <li><strong>Performance Impact:</strong> Optimize security controls to minimize latency and resource usage</li>
        <li><strong>Cost Management:</strong> Prioritize investments based on risk and business impact</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Key metrics to track the effectiveness of Zero Trust implementation include:</p>
      <ul>
        <li>Reduction in security incidents and breaches</li>
        <li>Improvement in compliance status</li>
        <li>Decrease in unauthorized access attempts</li>
        <li>User satisfaction and productivity metrics</li>
        <li>Cost savings from reduced security incidents</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Implementing Zero Trust is a journey that requires commitment, resources, and careful planning. Organizations that successfully implement Zero Trust architecture will be better positioned to protect their assets and data in an increasingly complex threat landscape. By following these guidelines and best practices, enterprises can build a robust security foundation that supports their business objectives while maintaining strong security controls.</p>
    `,
    category: 'Security',
    date: 'March 10, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'CTO',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'network security digital protection',
        'cybersecurity concept'
      ]
    }
  },
  'cloud-migration': {
    title: 'Cloud Migration Strategies for 2025',
    excerpt: 'Explore the latest strategies and best practices for successful cloud migration.',
    customImage: null,
    defaultImageQuery: 'cloud computing data center',
    content: `
      <p>Think about the last time you moved to a new home. You didn't just throw everything in boxes and hope for the best—you planned, organized, and carefully transported each item. Cloud migration is no different. In 2024, successful cloud migration isn't just about moving data and applications; it's about transforming your entire IT infrastructure while maintaining business continuity. Let's explore how organizations are mastering this complex journey.</p>

      <h2>Current Cloud Landscape</h2>
      <p>The cloud computing landscape has evolved significantly, with organizations now considering multiple approaches to cloud adoption. Key trends include:</p>
      <ul>
        <li><strong>Multi-cloud Strategies:</strong> Leveraging multiple cloud providers for optimal performance and cost</li>
        <li><strong>Edge Computing:</strong> Processing data closer to users for improved performance</li>
        <li><strong>Serverless Architecture:</strong> Embracing event-driven computing for scalability</li>
        <li><strong>Containerization:</strong> Using containers for consistent deployment across environments</li>
        <li><strong>AI and Machine Learning:</strong> Leveraging cloud-based AI services for innovation</li>
      </ul>

      <h2>Migration Approaches</h2>
      <p>Organizations can choose from several migration strategies, each with its own benefits and considerations:</p>
      <ul>
        <li><strong>Lift and Shift:</strong>
          <ul>
            <li>Quickest path to cloud migration</li>
            <li>Minimal application changes required</li>
            <li>May not fully leverage cloud benefits</li>
          </ul>
        </li>
        <li><strong>Refactoring:</strong>
          <ul>
            <li>Optimizes applications for cloud</li>
            <li>Better performance and cost efficiency</li>
            <li>Requires more time and resources</li>
          </ul>
        </li>
        <li><strong>Replatforming:</strong>
          <ul>
            <li>Updates core platform components</li>
            <li>Balances speed and optimization</li>
            <li>Moderate resource requirements</li>
          </ul>
        </li>
        <li><strong>Rebuilding:</strong>
          <ul>
            <li>Complete application rewrite</li>
            <li>Maximum cloud optimization</li>
            <li>Highest resource investment</li>
          </ul>
        </li>
        <li><strong>Replacing:</strong>
          <ul>
            <li>Adopting cloud-native solutions</li>
            <li>Reduces maintenance overhead</li>
            <li>May require process changes</li>
          </ul>
        </li>
      </ul>

      <h2>Key Considerations</h2>
      <p>Successful migration requires careful consideration of multiple factors:</p>
      <ul>
        <li><strong>Cost Optimization:</strong>
          <ul>
            <li>Resource utilization monitoring</li>
            <li>Reserved instance planning</li>
            <li>Cost allocation and tagging</li>
            <li>Regular cost optimization reviews</li>
          </ul>
        </li>
        <li><strong>Security Requirements:</strong>
          <ul>
            <li>Data protection and encryption</li>
            <li>Access control and identity management</li>
            <li>Compliance and regulatory requirements</li>
            <li>Security monitoring and incident response</li>
          </ul>
        </li>
        <li><strong>Performance Expectations:</strong>
          <ul>
            <li>Latency requirements</li>
            <li>Scalability needs</li>
            <li>High availability requirements</li>
            <li>Performance monitoring and optimization</li>
          </ul>
        </li>
        <li><strong>Business Continuity:</strong>
          <ul>
            <li>Disaster recovery planning</li>
            <li>Backup strategies</li>
            <li>Service level agreements</li>
            <li>Change management procedures</li>
          </ul>
        </li>
      </ul>

      <h2>Best Practices for 2024</h2>
      <p>Organizations should follow these best practices for successful cloud migration:</p>
      <ul>
        <li><strong>Comprehensive Planning:</strong> Develop detailed migration plans with clear milestones</li>
        <li><strong>Phased Approach:</strong> Break down migration into manageable phases</li>
        <li><strong>Skill Development:</strong> Invest in team training and cloud expertise</li>
        <li><strong>Automation:</strong> Leverage automation tools for consistency and efficiency</li>
        <li><strong>Monitoring and Optimization:</strong> Implement continuous monitoring and optimization</li>
        <li><strong>Change Management:</strong> Manage organizational change effectively</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Key metrics to track migration success include:</p>
      <ul>
        <li>Cost savings and optimization</li>
        <li>Performance improvements</li>
        <li>Operational efficiency gains</li>
        <li>Security and compliance status</li>
        <li>User satisfaction metrics</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Cloud migration is a complex but essential journey for modern organizations. By following these strategies and best practices, organizations can successfully navigate the migration process while minimizing risks and maximizing benefits. The key to success lies in careful planning, execution, and ongoing optimization of cloud resources and services.</p>
    `,
    category: 'Cloud Computing',
    date: 'March 5, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'CTO',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'cloud computing data center',
        'digital transformation technology'
      ]
    }
  },
  'devsecops': {
    title: 'DevSecOps: Bridging Development and Security',
    excerpt: 'Learn how to effectively integrate security practices into your development pipeline.',
    customImage: null,
    defaultImageQuery: 'software development team collaboration',
    content: `
      <p>Picture this: Your development team is racing to deploy a new feature, while your security team is trying to slow them down to complete security reviews. Sound familiar? This classic conflict between speed and security is exactly what DevSecOps aims to resolve. In this article, we'll discover how organizations are breaking down these traditional barriers and creating a culture where security and development work hand in hand.</p>

      <h2>The DevSecOps Philosophy</h2>
      <p>DevSecOps extends beyond traditional DevOps by integrating security at every stage of the development lifecycle. Key principles include:</p>
      <ul>
        <li><strong>Security as Code:</strong> Treating security configurations as version-controlled code</li>
        <li><strong>Continuous Security:</strong> Implementing security checks throughout the pipeline</li>
        <li><strong>Automated Security:</strong> Leveraging automation for consistent security practices</li>
        <li><strong>Collaborative Culture:</strong> Breaking down silos between development and security teams</li>
        <li><strong>Proactive Security:</strong> Identifying and addressing security issues early</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>Key components of successful DevSecOps implementation include:</p>
      <ul>
        <li><strong>Security Automation Tools:</strong>
          <ul>
            <li>Static Application Security Testing (SAST)</li>
            <li>Dynamic Application Security Testing (DAST)</li>
            <li>Software Composition Analysis (SCA)</li>
            <li>Infrastructure as Code (IaC) scanning</li>
            <li>Container security scanning</li>
          </ul>
        </li>
        <li><strong>Compliance as Code:</strong>
          <ul>
            <li>Automated compliance checks</li>
            <li>Policy enforcement</li>
            <li>Audit trail maintenance</li>
            <li>Regulatory requirement mapping</li>
          </ul>
        </li>
        <li><strong>Security Testing in CI/CD:</strong>
          <ul>
            <li>Automated security scans</li>
            <li>Vulnerability assessment</li>
            <li>Security gates and approvals</li>
            <li>Continuous monitoring</li>
          </ul>
        </li>
        <li><strong>Threat Modeling:</strong>
          <ul>
            <li>Systematic threat analysis</li>
            <li>Risk assessment</li>
            <li>Security requirement definition</li>
            <li>Mitigation planning</li>
          </ul>
        </li>
        <li><strong>Security Monitoring:</strong>
          <ul>
            <li>Real-time threat detection</li>
            <li>Incident response</li>
            <li>Security metrics tracking</li>
            <li>Performance monitoring</li>
          </ul>
        </li>
      </ul>

      <h2>Best Practices</h2>
      <p>Organizations should focus on these key areas for successful DevSecOps implementation:</p>
      <ul>
        <li><strong>Cultural Transformation:</strong>
          <ul>
            <li>Security awareness training</li>
            <li>Cross-team collaboration</li>
            <li>Shared responsibility model</li>
            <li>Continuous learning programs</li>
          </ul>
        </li>
        <li><strong>Tool Selection and Integration:</strong>
          <ul>
            <li>Comprehensive tool evaluation</li>
            <li>Seamless integration</li>
            <li>Automation optimization</li>
            <li>Performance monitoring</li>
          </ul>
        </li>
        <li><strong>Process Automation:</strong>
          <ul>
            <li>Automated security checks</li>
            <li>Deployment automation</li>
            <li>Incident response automation</li>
            <li>Compliance automation</li>
          </ul>
        </li>
        <li><strong>Metrics and Measurement:</strong>
          <ul>
            <li>Security metrics tracking</li>
            <li>Performance monitoring</li>
            <li>Compliance reporting</li>
            <li>ROI measurement</li>
          </ul>
        </li>
      </ul>

      <h2>Common Challenges and Solutions</h2>
      <p>Organizations often face several challenges during DevSecOps implementation:</p>
      <ul>
        <li><strong>Tool Integration:</strong> Carefully evaluate and select tools that work well together</li>
        <li><strong>Performance Impact:</strong> Optimize security checks to minimize pipeline delays</li>
        <li><strong>Team Resistance:</strong> Provide training and demonstrate value to gain buy-in</li>
        <li><strong>Resource Constraints:</strong> Prioritize security initiatives based on risk and impact</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Key metrics to track DevSecOps effectiveness include:</p>
      <ul>
        <li>Reduction in security vulnerabilities</li>
        <li>Improvement in deployment frequency</li>
        <li>Decrease in security incidents</li>
        <li>Compliance status improvements</li>
        <li>Team collaboration metrics</li>
      </ul>

      <h2>Conclusion</h2>
      <p>DevSecOps is not just a set of tools or practices—it's a cultural shift that requires commitment and continuous improvement. Organizations that successfully implement DevSecOps will be better positioned to deliver secure, high-quality software at speed. By following these guidelines and best practices, enterprises can build a robust security foundation that supports their development objectives while maintaining strong security controls.</p>
    `,
    category: 'Development',
    date: 'March 1, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'CTO',
      initials: 'AK'
    },
    searchTerms: {
      content: [
        'software development team collaboration',
        'cybersecurity development'
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