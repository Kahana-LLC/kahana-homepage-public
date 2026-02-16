import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import TableOfContents from '../components/TableOfContents';

const tocStructure = [
  { id: 'kahana-bounty-program', label: 'Kahana Bounty Program' },
  { id: 'keeping-oasis-secure', label: 'Keeping Oasis Secure' },
  { id: 'outside-security-assessments', label: 'Outside Security Assessments' },
  { id: 'browser-engine', label: 'Browser Engine' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'logging-analytics', label: 'Logging & Analytics' },
  { id: 'faq', label: 'FAQ' },
];

export default function Security() {
  return (
    <>
      <SEO 
        title="Security"
        description="Learn about Kahana's commitment to security and how we protect your data while using our enterprise browsing platform."
        url="https://kahana.co/security"
        type="website"
      />
      <Head>
        <title>Security | Kahana</title>
      </Head>

      <TableOfContents items={tocStructure} />

      <div className="min-h-screen bg-white lg:ml-80">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#F3F8E4] to-white py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-[#4A5745] uppercase tracking-wide mb-4">
                Security @ Kahana
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#313A00] mb-6">
                Where elegance meets security
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Oasis is built with robust privacy and security as core principles, though it's important to understand that no system can guarantee absolute security. We continuously test and enhance Oasis to proactively address emerging digital threats, such as prompt injection attacks and other evolving risks (as an illustration - all data sent to AI partners undergoes sanitization and validation to reduce the risk of prompt injection and similar security vulnerabilities).{' '}
                <strong>Your privacy isn't a feature—it's the foundation everything else is built on.</strong>
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Info */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 sm:mb-0">Security @ Kahana</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-sm text-gray-600">Effective Date</span>
                <span className="text-sm font-semibold text-[#313A00]">January 1st, 2026</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <article className="prose prose-lg max-w-none">
            {/* Kahana Bounty Program */}
            <section id="kahana-bounty-program" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Kahana Bounty Program</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Kahana, we care deeply about safeguarding the security and privacy of everyone who uses our products. We also recognize the security research community's invaluable role in this mission. If you spot a vulnerability, we want to hear about it so we can make things right as soon as possible. Your work helps us build a safer, more secure browsing experience for all.
              </p>
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">How to Submit your Research</h3>
              <p className="text-gray-700 leading-relaxed">
                If you believe you've identified a security or privacy issue that affects Kahana products, services, or software, please report it to us through our{' '}
                <Link href="/contact" className="text-[#4A6200] hover:underline font-semibold">contact form</Link>.
              </p>
            </section>

            {/* Keeping Oasis Secure */}
            <section id="keeping-oasis-secure" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Keeping Oasis Secure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your browser is a portal to the whole internet, and everything in it. So ensuring your browser is airtight, and secure as it can possibly be, is of incredible importance to us.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're a small (but mighty) team working to ensure you never have to worry that your data is being misused, misappropriated, or sold in ways you're not aware of.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But don't take our word for it. Below, we've listed everything we can think of that you might want to know about our security practices. For more on privacy,{' '}
                <a href="/privacy-policy" className="text-[#4A6200] hover:underline font-semibold">read our Privacy Policy</a>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                And if you have any questions, please{' '}
                <Link href="/contact" className="text-[#4A6200] hover:underline font-semibold">reach out to us through our contact form</Link>. We're all ears!
              </p>
            </section>

            {/* Outside Security Assessments */}
            <section id="outside-security-assessments" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Outside Security Assessments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our security team conducts regular reviews and trainings across a wide range of different systems:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Corporate systems</li>
                <li>Infrastructure</li>
                <li>Build and tooling systems</li>
                <li>Full codebase audits</li>
              </ul>
            </section>

            {/* Browser Engine */}
            <section id="browser-engine" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Browser Engine</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Building a browser from the ground up is really hard, which is why Oasis is built on Firefox — the same engine that powers Mozilla Firefox. So, Oasis benefits from the same foundation that makes Firefox reliable and secure. But since Firefox is open source, we can augment it to further protect your privacy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                As for security, Firefox is constantly updated with security fixes for new vulnerabilities, and we take staying up to date with the newest version of Firefox very seriously. We even have a dedicated team of Firefox engineers! Our upgrade process guarantees that Oasis is always using the latest version of Firefox within 48 hours of a new version or hotfix being released.
              </p>
              <h3 className="text-2xl font-bold text-[#313A00] mb-4">Privacy-Focused Firefox Configuration</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Telemetry and data collection disabled</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>No telemetry data is sent to Mozilla or any third parties</li>
                    <li>No crash reports are automatically submitted</li>
                    <li>No usage statistics or performance data is collected</li>
                  </ul>
                </li>
                <li>
                  <strong>Enhanced privacy protections</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>No session fingerprinting</li>
                    <li>No logging of your browsing activities (creating bookmarks, searching, autofills, links you click, etc.)</li>
                    <li>Enhanced tracking protection enabled by default</li>
                  </ul>
                </li>
                <li>Firefox Sync and account integration disabled</li>
                <li>Reporting Observers and Reporting API are disabled</li>
                <li>Network logging to file is disabled</li>
              </ul>
            </section>

            {/* Infrastructure */}
            <section id="infrastructure" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Infrastructure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Oasis uses Supabase for user authentication and database storage. All data stored in Supabase is encrypted-at-rest by default.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Direct access to any production data is limited to a few select teams based on their roles. Access is logged and reviewed at regular intervals. We store as little PII as possible and routinely audit our data to ensure we're not storing anything sensitive. Please see the privacy policy for a list of what user data is stored.
              </p>
            </section>

            {/* Logging & Analytics */}
            <section id="logging-analytics" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Logging & Analytics</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This browser uses privacy‑preserving analytics to understand product usage patterns without collecting information that directly identifies you.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4">Overview of analytics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Analytics are used to answer questions like "Which features are used most?" and "Is the AI assistant working reliably?", not to profile individual people.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Data is collected in aggregate and tied to pseudonymous identifiers, not to your name, email address, or browsing history.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4">What we collect</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>
                  <strong>Technical information about the app</strong>, such as browser version, operating system type (for example, Windows, macOS, Linux), and basic device characteristics.
                </li>
                <li>
                  <strong>High‑level usage events</strong>, such as opening the AI assistant, issuing a command, creating or updating a tab group, starting or ending a browser session, and similar feature interactions.
                </li>
                <li>
                  <strong>Simple counters and categories</strong> (for example, how many tabs were added to a group, or whether an action succeeded), not the actual content you are viewing.
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4">How AI assistant usage is logged</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use the AI assistant, events may record that a command was issued and its general type (for example, navigation, search, or tab organization), along with whether it completed successfully.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The actual text of your prompt, URLs, page titles, and page content are not sent to analytics; where needed, only abstract labels like "search engine" or "document site" are recorded.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4">What we do not collect</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>No personal identifiers such as your name, email address, phone number, or account username are sent to analytics.</li>
                <li>No full URLs, page titles, page content, passwords, credit card numbers, or other sensitive information are logged in analytics events.</li>
                <li>Private or incognito browsing modes do not send analytics data and do not write analytics cookies or local storage.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4">Identifiers and profiles</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Analytics events are associated with a random identifier so that we can understand usage patterns across sessions without knowing who you are.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the browser supports optional sign‑in, the internal account identifier is never stored in a human‑readable form in analytics and is not used to contact you or to build marketing profiles.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4">Cookies and network traffic</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Analytics may use cookies or local storage to remember a pseudonymous analytics ID, so that repeated sessions from the same installation can be analyzed together.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Analytics requests are sent over encrypted connections, and may be routed through controlled endpoints to reduce exposure of raw data to third parties.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4">Your choices and controls</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                On first run, you can choose whether to send anonymous usage statistics to help improve the browser; analytics are disabled by default until you opt in where required by law.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can change this choice at any time in the browser settings by toggling the option for sending anonymous usage statistics; turning it off stops future analytics collection for that installation.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">FAQ</h2>
              <ul className="space-y-6">
                <li>
                  <strong className="text-[#313A00]">Why does Oasis require an account to use AI features?</strong>
                  <br />
                  <span className="text-gray-700">
                    Technically, you don't need to create an account to use the browser itself. However, to use AI features with the browser, you need an account to track token usage for the AI assistant. This allows us to manage your AI credits and ensure fair usage of the AI capabilities.
                  </span>
                </li>
                <li>
                  <strong className="text-[#313A00]">Are you SOC 2 compliant?</strong>
                  <br />
                  <div className="text-gray-700 space-y-4 mt-2">
                    <p>
                      We adhere to standards for reliable and secure technology. Our products are engineered to comply with important international regulations, including privacy protection, AI usage, and digital service requirements established by US and EU authorities (such as the EU AI Act, GDPR, and DSA). To demonstrate our dedication to exceptional security practices, we are pursuing established security certifications including ISO 27001 and SOC 2. Additionally, our security team is committed to protecting your information.
                    </p>
                    
                    <div>
                      <strong className="text-[#313A00]">Are you SOC 2 compliant today?</strong>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>The service is not currently SOC 2 audited, but the team is designing systems, processes, and documentation with SOC 2 controls in mind from the start.</li>
                        <li>As work progresses, the intent is to move toward a formal SOC 2 examination by an independent auditor once the controls have been operating consistently for a sufficient period.</li>
                      </ul>
                    </div>

                    <div>
                      <strong className="text-[#313A00]">What are you doing to prepare for SOC 2?</strong>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Core infrastructure (Supabase, AWS, and related backend services) is being managed with strong access control, encryption, change management, and monitoring practices, which are key elements of SOC 2.</li>
                        <li>Third-party providers such as Gemini, Deepgram, Mixpanel, and Stripe are being reviewed and governed as critical vendors, with clear documentation of what data they receive and why.</li>
                      </ul>
                    </div>

                    <div>
                      <strong className="text-[#313A00]">How does this affect my data?</strong>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Telemetry and analytics are intentionally limited to pseudonymous, privacy-preserving events, avoiding sensitive content like full URLs, page text, or personal identifiers whenever possible.</li>
                        <li>Authentication, payments, and AI features are designed so that sensitive data (like passwords and payment details) is handled by specialized, security-focused providers rather than custom systems.</li>
                      </ul>
                    </div>

                    <div>
                      <strong className="text-[#313A00]">What can users expect next?</strong>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>As the security and compliance program matures, more detailed information will be shared here about specific controls, independent assessments, and, when completed, any SOC 2 reports that can be made available under NDA to enterprise customers.</li>
                        <li>This page will be updated over time to reflect progress, including clearer timelines and scope once an audit firm and target SOC 2 report type (Type I or Type II) are selected.</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <strong className="text-[#313A00]">How will you monetize without selling user data?</strong>
                  <br />
                  <span className="text-gray-700">
                    We don't plan to ever monetize by selling data. We currently don't monetize with ads. We currently monetize from paid subscriptions which allow users to leverage AI features. We are also coming out with Bring Your Own Key features, which will let you use AI features without paying a subscription to Kahana, but by using an existing subscription to services like Gemini or Anthropic, so you can use your own API key.
                  </span>
                </li>
                <li>
                  <strong className="text-[#313A00]">Does Oasis come with a built in ad-blocker?</strong>
                  <br />
                  <span className="text-gray-700">
                    Oasis comes with Firefox's built-in Enhanced Tracking Protection, which blocks many trackers and ads by default. Additionally, users can install{' '}
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/" className="text-[#4A6200] hover:underline font-semibold" target="_blank" rel="noopener noreferrer">uBlock Origin</a> from the Firefox Add-ons store for additional ad-blocking capabilities. We currently don't have a custom built ad-blocking but are looking at building further member protections into Oasis in the future. Since we're using Firefox under the hood, any ad-blockers or privacy tooling that is available in the Firefox Add-ons store works with Oasis.
                  </span>
                </li>
                <li>
                  <strong className="text-[#313A00]">Can I configure multi-factor authentication (MFA) for my Oasis account?</strong>
                  <br />
                  <span className="text-gray-700">
                    Multi-factor authentication is not currently available for Oasis accounts, but we're actively working on adding this important security feature to provide additional account protection.
                  </span>
                </li>
              </ul>
            </section>
          </article>

          {/* Footer */}
          <hr className="my-12 border-gray-200" />
          <footer className="text-center py-8">
            <p className="text-gray-700">
              If you have any questions or suggestions, please{' '}
              <Link href="/contact" className="text-[#4A6200] hover:underline font-semibold">
                contact us →
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

