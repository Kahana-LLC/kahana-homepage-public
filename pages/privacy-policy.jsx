import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import TableOfContents from '../components/TableOfContents';
/* eslint-disable react/no-unescaped-entities */

const tocStructure = [
  { id: 'personal-data-collect', label: '1. Personal Data Collection' },
  { id: 'how-we-use', label: '2. How We Use Your Personal Data' },
  { id: 'how-we-share', label: '3. How We Share Your Information' },
  { id: 'data-storage-security', label: '4. Data Storage and Security' },
  { id: 'lawful-basis', label: '5. Legal Basis for Processing Personal Data' },
  { id: 'your-choices-rights', label: '6. Your Privacy Rights and Choices' },
  { id: 'third-party-services', label: '7. Third-Party Services' },
  { id: 'international-transfers', label: '8. International Data Transfers' },
  { id: 'children-privacy', label: '9. Privacy for Children' },
  { id: 'changes-policy', label: '10. Changes to This Privacy Policy' },
  { id: 'contact-us', label: '11. Contact Us' },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Kahana's privacy policy outlines how we protect and handle your data while using our enterprise browsing platform."
        url="https://kahana.co/privacy-policy"
        type="website"
      />

      <TableOfContents items={tocStructure} />

      <div className="min-h-screen bg-white lg:ml-80">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#F3F8E4] to-white py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-oasis-green-800 uppercase tracking-wide mb-4">
                Privacy Policy
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#313A00] mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Kahana Group Inc. ("we," "us," or "our") is committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your information. This privacy policy ("Privacy Policy") explains our data practices in connection with your use of Oasis Browser and our Services (the "Service"). By accessing or using the Service, you agree to the collection, use, disclosure, and procedures this Privacy Policy describes. Beyond the Privacy Policy, your use of our Services is also subject to our Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            {/* 1. Personal Data Collection */}
            <section id="personal-data-collect" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  1. Personal Data Collection
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">1. Personal Data Collection</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Throughout this Privacy Policy, the term "Personal Data" refers to any information that relates to an identified or identifiable natural person. The following categories of Personal Data are collected and processed by us during your use of the Service:
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Information provided by you</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-4">
                <li>Account creation and registration. During account creation and sign-up for our Services, we may gather basic account information, including your name, email address, and profile picture (if you choose to provide one).</li>
                <li>Service usage and invitations. Information regarding your subscription plan and payment method is processed when you use or invite others to use our Services. Additionally, we process invitation history when you invite others to use the Service.</li>
                <li>Newsletter subscriptions. From time to time, we may offer email newsletters through our Services. When you subscribe to receive a newsletter, we may request Personal Data such as your email address.</li>
                <li>Contact and feedback. When you reach out to us with feedback, suggestions, or inquiries (e.g., via <a href="mailto:info@kahana.co" className="text-[#4A6200] no-underline hover:no-underline font-semibold">info@kahana.co</a>), we may gather the information you provide, which includes your contact information and the content of your message.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Information collected when you use our Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-4">
                <li>Location information. Your location information is received by us when you use our Services. For instance, we may determine your location by analyzing your IP address.</li>
                <li>Device information. Information about the device and software you utilize to access our Services is received by us, which encompasses IP address, device type, device identifiers, web browser type and version, and operating system version.</li>
                <li>Usage information. Information about your interactions with our Services is automatically received by us. This encompasses usage data, visit timestamps, feature interactions, and the pages or other content you view. Additionally, it may include larger chats and files that you upload, as well as the frequency and type of AI tasks performed.</li>
                <li>Cookies and other tracking technologies. Information about your activities on our Services is collected by us and our third-party partners through cookies or other tracking technologies. These same technologies may also be used by our third-party partners, including analytics, advertising, and security partners, to gather information about your online activities across time and different services. For detailed information about our use of cookies and tracking technologies, including how to manage your preferences, please see Section 1.4 below.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Cookies, Pixels, and Similar Technologies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies, pixels, tags, beacons, and similar tracking technologies (collectively, "Tracking Technologies") to collect and store information about your interactions with our Services. These technologies help us understand how you use our Services, improve your experience, and provide personalized content and advertisements.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>What are Tracking Technologies?</strong> Tracking Technologies are small text files, pixels, scripts, or other data files that are placed on your device when you visit our website. They enable us to recognize your device and remember information about your visit, such as your preferences and actions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Categories of Tracking Technologies:</strong>
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-[#313A00] mb-2">Strictly Necessary</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. These cookies cannot be disabled as they are necessary for the basic operation of our Services.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Examples:</strong> Session management, security features, load balancing
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#313A00] mb-2">Analytics</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This information helps us improve our website and user experience.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Tools we use:</strong> Google Analytics, Google Tag Manager, Mixpanel, PostHog
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Data collected:</strong> Page views, user interactions, session duration, bounce rates, device and browser information, conversion events, funnel analytics
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#313A00] mb-2">Advertising</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Tools we use:</strong> Google Ads, retargeting pixels
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Data collected:</strong> Ad interactions, conversion tracking, audience segmentation
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#313A00] mb-2">Marketing / Personalization</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies are used to deliver personalized content and identify potential leads. They help us understand visitor behavior, improve our marketing efforts, and provide a more tailored experience.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Tools we use:</strong> Warmly, lead identification tools
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Data collected:</strong> Visitor identification, company information, browsing patterns, engagement metrics
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Consent and Your Choices:</strong> Non-essential tracking technologies (analytics, advertising, and marketing/personalization) are only activated after you provide explicit consent via our consent banner. You can withdraw or modify your consent at any time by clicking the "Cookie Settings" link in our website footer or by managing your browser settings.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Third-Party Sharing:</strong> When you consent to non-essential tracking technologies, we may share information collected through these technologies with third-party service providers, including Google (for Analytics and Ads), Mixpanel, PostHog, and Warmly. These third parties may use this information for their own purposes in accordance with their privacy policies. PostHog is used for product analytics. For more information about PostHog's data practices, please visit <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4A6200] no-underline hover:no-underline font-semibold">PostHog's Privacy Policy</a>.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Information collected from other sources</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-4">
                <li>Third-party authentication. When you log in using accounts from third-party services, we may gather limited information from those services in accordance with their terms and your privacy settings. This may include accessing your name, email address, or profile information.</li>
                <li>Third-party integrations. When you connect our Services with third-party tools, we may access your basic account information (e.g., email, profile details) and workspace content (e.g., documents and spreadsheets) from those services as needed to enable the integration.</li>
                <li>Referrals. When a friend refers you to our Services, we collect the email address of the referred person to facilitate this process and ensure access to the Services is provided.</li>
                <li>Other sources. Information is received from our trusted partners, such as security partners, to help protect against fraud, abuse, and other security threats to our Services.</li>
              </ul>
            </section>

            {/* 2. How We Use Your Personal Data */}
            <section id="how-we-use" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  2. How We Use Your Personal Data
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">2. How We Use Your Personal Data</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We use the Personal Data described in Section 1 for the following purposes:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-4">
                <li>To deliver, operate, and enhance the Service, including all AI-powered features and third-party integrations.</li>
                <li>To create and manage your account, verify your identity when you access the Service, and administer your subscription plan.</li>
                <li>To process payments, manage account credits, and handle billing for users with paid subscriptions.</li>
                <li>To analyze how the Service is used in order to improve features, functionality, and overall user experience.</li>
                <li>To enable third-party integrations that you authorize and connect to your account.</li>
                <li>To address your questions, respond to feedback, and provide customer support.</li>
                <li>To send you service-related communications about how our Services function. You may unsubscribe from these communications at any time.</li>
                <li>To fulfill legal requirements and to safeguard the rights, property, and safety of Kahana Group Inc., our users, and third parties. This includes using your Personal Data to enforce our Terms of Service, detect and prevent fraudulent or abusive activity, and address trust and safety concerns.</li>
              </ul>
            </section>

            {/* 3. How We Share Your Information */}
            <section id="how-we-share" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  3. How We Share Your Information
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">3. How We Share Your Information</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We do not sell your Personal Data. Your information may be shared with third parties only in the circumstances described below:
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">With third-party service providers</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share your information with trusted service providers that help us operate the Service. These providers assist with functions such as hosting, payment processing (for example, Stripe), and analytics (for example, Mixpanel).
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">With third-party integrations and AI partners</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you connect third-party tools or APIs (such as Google, OpenAI, or Anthropic) to the Service, we may share your information with those services to the extent necessary to enable the integration. We also share information, including your chat data, with our AI partners when necessary to deliver our Services, such as to provide improved search results. These third-party services maintain their own privacy policies, which we encourage you to review.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">As required by law and similar disclosures</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may disclose your information when required by applicable law, in response to legal process, or to protect and defend the rights, property, or safety of Kahana Group Inc., our users, or third parties.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">In business transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the event of a merger, acquisition, sale of assets, or similar business transaction, your information may be transferred as part of that transaction, subject to appropriate privacy and security safeguards.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">With your consent</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may disclose your Personal Data to third parties when you have provided explicit consent for such disclosure.
              </p>
            </section>

            {/* 4. Data Storage and Security */}
            <section id="data-storage-security" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  4. Data Storage and Security
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">4. Data Storage and Security</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Data Retention</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your Personal Data only for the period necessary to deliver the Service, accomplish the purposes described in this Privacy Policy, or meet our legal obligations. For instance, we may be required to retain certain Personal Data to satisfy tax and accounting requirements, or to preserve information that may be needed to resolve disputes and enforce our legal agreements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In determining how long to retain your Personal Data, we consider multiple factors, including the type of service you use, the nature and duration of our relationship with you, applicable legal retention requirements, and relevant statutes of limitations. The retention period for your Personal Data may vary depending on the specific purpose for which it was originally collected.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Security Measures</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement reasonable physical, technical, and administrative safeguards designed to protect the security and confidentiality of your Personal Data. However, please be aware that no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security or privacy of your information.
              </p>
            </section>

            {/* 5. Legal Basis for Processing Personal Data */}
            <section id="lawful-basis" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  5. Legal Basis for Processing Personal Data
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">5. Legal Basis for Processing Personal Data</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                For users located in the European Economic Area, Switzerland, or the United Kingdom ("Europe"), we process your Personal Data only when we have a valid legal basis under applicable data protection laws. The legal bases we rely on include:
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Contract</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you use our Services, we process your Personal Data as necessary to fulfill our contractual obligations to you and to provide the services you have requested.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Legitimate interests</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may process your Personal Data based on our legitimate interests, provided that such interests do not override your fundamental privacy rights and freedoms. When processing Personal Data on this basis, we carefully balance our business needs against your privacy rights and implement measures to minimize any impact on your privacy. Examples of our legitimate interests include delivering and enhancing the services you request, preventing and detecting fraud, and responding to your inquiries about our Services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Legal obligations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may process your Personal Data when necessary to comply with applicable legal obligations or to protect the rights and interests of other users. This includes, for example, meeting regulatory reporting requirements and fulfilling tax and accounting obligations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Consent</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In certain circumstances, we may process your Personal Data based on your explicit consent. For instance, we may request your consent before sending you direct marketing communications. You have the right to withdraw your consent at any time by contacting us, and such withdrawal will not affect the lawfulness of processing that occurred before you withdrew consent.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Your Privacy Rights and Choices */}
            <section id="your-choices-rights" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  6. Your Privacy Rights and Choices
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">6. Your Privacy Rights and Choices</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Your rights regarding your Personal Data may vary depending on your location and applicable data protection laws. If you are located in Europe, you have the following legal rights:
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Your Choices About Cookies and Tracking</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have control over how we use cookies and similar tracking technologies on our website. You can manage your preferences in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li><strong>Cookie Settings:</strong> Click the "Cookie Settings" link in our website footer to access our cookie preferences center, where you can enable or disable specific categories of cookies (analytics, advertising, marketing/personalization).</li>
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience on our website.</li>
                <li><strong>Opt-Out of Sale/Sharing:</strong> If you are a California resident, you can opt-out of the sale or sharing of your personal information by clicking the "Do Not Sell or Share My Personal Information" link in our footer.</li>
                <li><strong>Withdraw Consent:</strong> You can withdraw your consent for non-essential tracking technologies at any time by accessing the Cookie Settings and disabling the relevant categories.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Please note that disabling certain cookies may limit your ability to use some features of our Services. Strictly necessary cookies cannot be disabled as they are essential for the website to function.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">California Residents' Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li><strong>Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we collect, use, disclose, and sell.</li>
                <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal information.</li>
                <li><strong>Right to Opt-Out of Sale/Sharing:</strong> You have the right to opt-out of the sale or sharing of your personal information. You can exercise this right by clicking the "Do Not Sell or Share My Personal Information" link in our footer or by contacting us directly.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To exercise these rights, please contact us at <a href="mailto:info@kahana.co" className="text-[#4A6200] no-underline hover:no-underline font-semibold">info@kahana.co</a> or use the "Do Not Sell or Share My Personal Information" link in our footer. We will respond to your request within the timeframes required by applicable law.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Right to Access and Data Portability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You have the right to request access to your Personal Data that we hold, including receiving a copy of such data in a structured, commonly used, and machine-readable format. You may also request details about how we process your Personal Data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Right to Rectification and Deletion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You have the right to request that we correct any inaccurate Personal Data we hold about you, complete any incomplete data, or delete your Personal Data, subject to our assessment of the appropriateness of such actions based on applicable law and our legitimate business interests.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Right to Restriction and Objection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You have the right to request that we restrict the processing of your Personal Data or to object to certain types of processing of your Personal Data, where permitted by applicable law.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Right to Withdraw Consent</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Where we process your Personal Data based on your consent, you have the right to withdraw that consent at any time, free of charge. Your withdrawal of consent will apply to future processing, but will not affect the lawfulness of any processing that occurred before you withdrew your consent.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In addition to the rights described above, you have the following choices and controls regarding your information:
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Managing Your Account</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may update or delete your account information at any time by accessing your account settings or by <Link href="/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contacting us through our contact form</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Do Not Track Signals</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Service does not currently respond to "Do Not Track" browser signals, as there is no universally accepted standard for interpreting such signals.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Third-Party Services */}
            <section id="third-party-services" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  7. Third-Party Services
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">7. Third-Party Services</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Service may include links to or integrations with third-party websites, services, or applications that are not owned, operated, or controlled by us. We are not responsible for the privacy practices, data collection, or content of these third-party services. We strongly encourage you to review the privacy policies and terms of service of any third-party services before connecting them to or using them in conjunction with our Service.
              </p>
            </section>

            {/* 8. International Data Transfers */}
            <section id="international-transfers" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  8. International Data Transfers
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">8. International Data Transfers</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Your Personal Data may be transferred to and stored on servers or systems located outside your state, province, country, or other governmental jurisdiction. The data protection laws in these jurisdictions may differ from those in your location.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are located outside the United States and provide Personal Data to us, please be aware that we transfer your Personal Data to the United States for processing and storage. By using our Service and providing your Personal Data, you consent to the transfer, storage, and processing of your Personal Data in the United States, even if the data protection laws in the United States may differ from those in your jurisdiction.
              </p>
            </section>

            {/* 9. Privacy for Children */}
            <section id="children-privacy" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  9. Privacy for Children
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">9. Privacy for Children</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service is not directed to children under the age of 13, and we do not knowingly collect Personal Data from children under 13 years of age.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a parent or guardian and believe that your child under the age of 13 has provided us with Personal Data without your consent, please <Link href="/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contact us</Link> so that we can address your concerns.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If we discover that we have collected Personal Data from a child under 13 without obtaining verifiable parental consent, we will take prompt action to delete such information from our systems.
              </p>
            </section>

            {/* 10. Changes to This Privacy Policy */}
            <section id="changes-policy" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  10. Changes to This Privacy Policy
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">10. Changes to This Privacy Policy</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to update, modify, or revise this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we make changes to this Privacy Policy, we will notify you by posting the updated version on this page and updating the "Last Updated" date at the bottom of this Privacy Policy. We may also notify you of material changes through other means, such as email or a prominent notice on our Service.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Recent Updates</h3>
              <div className="bg-[#F3F8E4] border-l-4 border-oasis-green-600 p-4 mb-6">
                <p className="text-sm font-semibold text-[#313A00] mb-2">January 2025</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm ml-4">
                  <li><strong>PostHog Analytics Integration:</strong> We have integrated PostHog, a product analytics platform, to better understand how visitors interact with our website. PostHog helps us analyze user behavior, track conversion funnels, and segment our audience. PostHog only collects data after you have provided consent for analytics cookies.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your Personal Data. Any changes to this Privacy Policy will become effective immediately upon posting on this page, and your continued use of the Service after such changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* 11. Contact Us */}
            <section id="contact-us" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  11. Contact Us
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">11. Contact Us</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:info@kahana.co" className="text-[#4A6200] no-underline hover:no-underline font-semibold">info@kahana.co</a> or <Link href="/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">through our contact form</Link>
                </p>
                <p className="mb-4">
                  If you are not satisfied with our response to your complaint, or if you believe that our processing of your Personal Data does not comply with applicable data protection laws, you have the right to lodge a complaint with your local data protection supervisory authority. However, we would appreciate the opportunity to address your concerns directly before you contact a supervisory authority, and we encourage you to reach out to us first so that we may attempt to resolve the matter.
                </p>
                <p className="mt-4">
                  This Privacy Policy is effective as of January 1st, 2026. Last updated: January 2025.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
