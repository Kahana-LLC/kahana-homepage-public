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
        description="Aura Library's privacy policy outlines how we protect and handle your data while using our enterprise browsing platform."
        url="https://kahana.io/privacy-policy"
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
                <li>Contact and feedback. When you reach out to us with feedback, suggestions, or inquiries (e.g., via <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">our contact form</Link>), we may gather the information you provide, which includes your contact information and the content of your message.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Information collected when you use our Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-4">
                <li>Location information. Your location information is received by us when you use our Services. For instance, we may determine your location by analyzing your IP address.</li>
                <li>Device information. Information about the device and software you utilize to access our Services is received by us, which encompasses IP address, device type, device identifiers, web browser type and version, and operating system version.</li>
                <li>Usage information. Information about your interactions with our Services is automatically received by us. This encompasses usage data, visit timestamps, feature interactions, and the pages or other content you view. Additionally, it may include larger chats and files that you upload, as well as the frequency and type of AI tasks performed.</li>
                <li>Cookies and other tracking technologies. Information about your activities on our Services may be collected by us and our analytics providers through cookies or similar technologies. For detailed information about our use of cookies and tracking technologies, including how to manage your preferences, please see Section 1.4 below.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">Cookies and Similar Technologies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies (collectively, &quot;Tracking Technologies&quot;) to operate the Service, remember preferences, and understand how you use our websites. We do not use advertising cookies, retargeting pixels, or third-party ad networks on this site.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>What are Tracking Technologies?</strong> Tracking Technologies are small text files, scripts, or other data stored on your device when you visit our website. They help us recognize your device and remember information about your visit, such as your preferences and actions.
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
                    <strong>Examples:</strong> Session management, security features, load balancing. Firebase may also support account authentication and related infrastructure needed to run the Service.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#313A00] mb-2">Analytics</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies and related technologies help us understand how visitors interact with our website by collecting and reporting information. This information helps us improve our website and user experience.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Tools we use:</strong> Google Analytics, Mixpanel, and Firebase
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Data collected:</strong> Page views, user interactions, session duration, bounce rates, device and browser information, conversion events, and product usage analytics
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Consent and Your Choices:</strong> Non-essential analytics technologies are only activated after you provide consent via our consent banner or Cookie Settings, where required. You can withdraw or modify your consent at any time by clicking the &quot;Cookie Settings&quot; link in our website footer or by managing your browser settings.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Third-Party Sharing:</strong> When you consent to analytics, we may share information collected through these technologies with Google (for Google Analytics and Firebase) and Mixpanel. These providers process data in accordance with their privacy policies. Mixpanel is used for product and website analytics and only processes analytics data after you have provided consent for analytics where consent is required. For more information about Mixpanel&apos;s data practices, please visit{' '}
                <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Mixpanel&apos;s Privacy Policy</a>.
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
                <li>To send you optional product and onboarding communications (such as getting started, setup, and feature guidance). You may unsubscribe from these communications at any time.</li>
                <li>To send you required account communications (such as billing confirmations when you upgrade or downgrade, security notices, and dormant-account warnings). These are sent as needed and are not subject to marketing unsubscribe while your account remains active.</li>
                <li>To fulfill legal requirements and to safeguard the rights, property, and safety of Kahana Group Inc., our users, and third parties. This includes using your Personal Data to enforce our Terms of Service, detect and prevent fraudulent or abusive activity, and address trust and safety concerns.</li>
              </ul>

              <h3 id="email-communications" className="text-2xl font-bold text-[#313A00] mb-4 mt-8 scroll-mt-8">Email communications</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may email you after you create an account. Optional emails help you onboard and learn about Oasis features; you can opt out of those at any time using the unsubscribe link in the email or by contacting us.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We also send required account emails when something specific happens to your account, including plan changes, security matters, and notices if your account has been inactive for six (6) months. For more detail, see Section 9 (Communications) of our{' '}
                <Link href="/terms-and-conditions#communications" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Terms and Conditions</Link>.
              </p>
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
                We do not sell your Personal Data, and we do not sell or rent it to data brokers or advertisers. Providing Personal Data to service providers who process it on our behalf to operate the Service (as described below) is not a sale. Your information may be shared with third parties only in the circumstances described below:
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">With third-party service providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with trusted service providers that help us operate the Service. These providers assist with functions such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-4">
                <li><strong>Firebase (Google):</strong> backend database, authentication, and related infrastructure used to store and operate account and platform data.</li>
                <li><strong>Google Analytics:</strong> website analytics (where analytics consent applies).</li>
                <li><strong>Mixpanel:</strong> product and website analytics (where analytics consent applies).</li>
                <li><strong>Stripe:</strong> payment processing for paid features, subscriptions, and purchases.</li>
                <li><strong>GitHub:</strong> software development, source control, issue tracking, and release/distribution infrastructure. GitHub is not used to sell your Personal Data or build advertising profiles about you.</li>
                <li>Other hosting, security, and operational providers as reasonably necessary to run and protect the Service.</li>
              </ul>

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
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement reasonable physical, technical, and administrative safeguards designed to protect the security and confidentiality of your Personal Data. Platform and account data for the Service are hosted using Firebase and related Google Cloud infrastructure with encryption and access controls appropriate to the processing. However, please be aware that no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security or privacy of your information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For additional information about our security practices, see our{' '}
                <Link href="/security" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Security</Link> page.
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
                <li><strong>Cookie Settings:</strong> Click the &quot;Cookie Settings&quot; link in our website footer to access our cookie preferences center, where you can enable or disable analytics cookies. We do not use an advertising cookie category.</li>
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
                To exercise these rights, please <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contact us through our contact form</Link> or use the "Do Not Sell or Share My Personal Information" link in our footer. We will respond to your request within the timeframes required by applicable law.
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
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Email preferences</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may unsubscribe from optional product and onboarding emails at any time using the unsubscribe link in those messages or by contacting us. Required account emails (such as billing confirmations, security notices, and dormant-account warnings) are not subject to marketing unsubscribe while your account remains active, as described in our{' '}
                    <Link href="/terms-and-conditions#communications" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Terms and Conditions</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313A00] mb-2">Managing Your Account</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may update your account information at any time by accessing your account settings. To permanently delete your Oasis account, submit a request through our{' '}
                    <Link href="/support" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Delete my account</Link>{' '}
                    page, or <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contact us through our contact form</Link>.
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
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service may include links to or integrations with third-party websites, services, or applications that are not owned, operated, or controlled by us. We are not responsible for the privacy practices, data collection, or content of these third-party services. We strongly encourage you to review the privacy policies and terms of service of any third-party services before connecting them to or using them in conjunction with our Service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you submit an account deletion request through our embedded form on the{' '}
                <Link href="/support" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Delete my account</Link>{' '}
                page, your submission is processed using Tally, a third-party form provider. Information you provide in that form is handled according to{' '}
                <a href="https://tally.so/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Tally&apos;s privacy policy</a>.
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
                If you are a parent or guardian and believe that your child under the age of 13 has provided us with Personal Data without your consent, please <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contact us</Link> so that we can address your concerns.
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
                <p className="text-sm font-semibold text-[#313A00] mb-2">July 16, 2026</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm ml-4">
                  <li><strong>Cookies &amp; analytics:</strong> Removed advertising cookies, Google Ads, and retargeting pixels. Documented analytics tools as Google Analytics, Mixpanel, and Firebase. Cookie Settings and Accept All no longer enable an advertising category.</li>
                </ul>
              </div>
              <div className="bg-[#F3F8E4] border-l-4 border-oasis-green-600 p-4 mb-6">
                <p className="text-sm font-semibold text-[#313A00] mb-2">July 14, 2026</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm ml-4">
                  <li><strong>Vendor accuracy:</strong> Removed PostHog. Clarified that we use Firebase for backend data infrastructure, Mixpanel for analytics, GitHub for development and release infrastructure, and Stripe for payments. Reaffirmed that we do not sell Personal Data.</li>
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
                  <strong>Contact:</strong> <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">our contact form</Link>
                </p>
                <p className="mb-4">
                  If you are not satisfied with our response to your complaint, or if you believe that our processing of your Personal Data does not comply with applicable data protection laws, you have the right to lodge a complaint with your local data protection supervisory authority. However, we would appreciate the opportunity to address your concerns directly before you contact a supervisory authority, and we encourage you to reach out to us first so that we may attempt to resolve the matter.
                </p>
                <p className="mt-4">
                  This Privacy Policy is effective as of July 14, 2026. Last updated: July 16, 2026.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
