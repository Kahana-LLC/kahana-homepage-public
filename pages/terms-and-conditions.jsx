import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import TableOfContents from '../components/TableOfContents';

/* eslint-disable react/no-unescaped-entities */

const tocStructure = [
  { id: 'important-notice', label: 'Important Notice' },
  { id: 'service-overview', label: '1. Service Overview' },
  { id: 'eligibility', label: '2. Eligibility' },
  { id: 'accounts-registration', label: '3. Accounts and Registration' },
  { id: 'payment-terms', label: '4. Payment Terms (No Refunds)' },
  { id: 'licenses', label: '5. Licenses' },
  { id: 'ownership', label: '6. Ownership and Proprietary Rights' },
  { id: 'third-party-terms', label: '7. Third-Party Terms' },
  { id: 'user-content', label: '8. User Content' },
  { id: 'communications', label: '9. Communications' },
  { id: 'prohibited-conduct', label: '10. Prohibited Conduct' },
  { id: 'modification-terms', label: '11. Modification of Terms' },
  { id: 'trial-period', label: '12. Trial Period' },
  { id: 'term-termination', label: '13. Term, Termination, and Service Modifications' },
  { id: 'indemnity', label: '14. Indemnity' },
  { id: 'disclaimers', label: '15. Disclaimers and No Warranties' },
  { id: 'limitation-liability', label: '16. Limitation of Liability' },
  { id: 'dispute-resolution', label: '17. Dispute Resolution and Arbitration' },
  { id: 'miscellaneous', label: '18. Miscellaneous' },
];

export default function TermsAndConditions() {
  return (
    <>
      <SEO 
        title="Terms and Conditions"
        description="Terms of Service for Aura Library, the Digital Library of curated hubs, Explore, Aura, and optional paid access."
        url="https://about.kahana.io/terms-and-conditions"
        type="website"
      />

      <TableOfContents items={tocStructure} />

      <div className="min-h-screen bg-white lg:ml-80">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#F3F8E4] to-white py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-oasis-green-800 uppercase tracking-wide mb-4">
                Terms of Service
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#313A00] mb-6">
                Terms and Conditions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Last Updated: July 15, 2026. Please read these Terms carefully before using the Service.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Kahana Group Inc. Terms of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Last Updated: July 15, 2026
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We appreciate your interest in Kahana Group Inc. ("we," "our," or "us") and the Aura Library Service. The "Service" means our websites and web applications—including surfaces on kahana.io (such as about.kahana.io and related corporate properties), the product application at app.kahana.io, and additional related services we provide—that together offer Aura Library&apos;s Digital Library of curated hubs. These Terms of Service constitute a legally binding agreement between you and Kahana Group Inc. that governs your access to and use of the Service.
              </p>
            </section>

            {/* Important Notice */}
            <section id="important-notice" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Important Notice
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">Please read carefully</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BY CLICKING "I ACCEPT" OR BY CREATING AN ACCOUNT, ACCESSING, OR OTHERWISE USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THESE TERMS AND CONDITIONS, INCLUDING AURA LIBRARY'S PRIVACY POLICY (COLLECTIVELY, THESE "TERMS"), AND YOU AGREE TO BE BOUND BY THEM AS A CONDITION OF YOUR USE OF THE SERVICE. IF YOU DO NOT MEET THE ELIGIBILITY REQUIREMENTS OR DO NOT AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO USE THE SERVICE. YOUR USE OF THE SERVICE, COUPLED WITH KAHANA GROUP INC.'S PROVISION OF THE SERVICE TO YOU, ESTABLISHES A MUTUAL AGREEMENT BETWEEN YOU AND KAHANA GROUP INC. TO BE BOUND BY THESE TERMS.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                ARBITRATION NOTICE. Subject to certain exceptions set forth in Section 17 (Dispute Resolution and Arbitration), you agree that any disputes arising under these Terms shall be resolved through binding, individual arbitration. BY ACCEPTING THESE TERMS, YOU AND KAHANA GROUP INC. EACH WAIVE THE RIGHT TO A TRIAL BY JURY AND THE RIGHT TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING.
              </p>
            </section>

            {/* Section 1: Service Overview */}
            <section id="service-overview" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 1
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">1. Service Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aura Library is a Digital Library where people contribute and learn from curated hubs of digital artifacts (such as files, videos, images, PDFs, documents, links, and related materials). Through the Service, you may, among other things:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Create, organize, and collaborate on hubs with roles and invites;</li>
                <li>Make hubs private or public, and list eligible hubs on Explore for discovery;</li>
                <li>Maintain a creator profile and engage with follows, saves, and related social features;</li>
                <li>Give and receive Aura—a scarce community endorsement signal for hubs (Aura is not money, crypto, or payment);</li>
                <li>Optionally monetize access to a hub through paid checkout powered by Stripe Connect, subject to fees published on our pricing page or displayed at checkout; and</li>
                <li>Subscribe to paid Aura Library plans (such as Growth) for additional capacity or support where offered.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Features, availability, and pricing may change as we improve the Service. Adult-designated hubs may require additional in-product age verification before access, as described in the Service and related policies.
              </p>
            </section>

            {/* Section 2: Eligibility */}
            <section id="eligibility" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 2
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Service is available only to individuals who are at least 18 years of age. By accepting these Terms, you represent and warrant that: (a) you have reached the age of 18; (b) you have not been previously suspended or removed from the Service; and (c) your registration and use of the Service comply with all applicable laws and regulations. Accessing adult-designated hubs may additionally require that you complete Aura Library&apos;s age verification process in the Service. If you are accepting these Terms on behalf of an entity, organization, or company, the individual accepting these Terms on your behalf represents and warrants that they possess the necessary authority to bind such entity, organization, or company to these Terms, and you agree to be bound by these Terms.
              </p>
            </section>

            {/* Section 3: Accounts and Registration */}
            <section id="accounts-registration" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 3
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">3. Accounts and Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Access to certain features of the Service requires you to create an account or authenticate using supported third-party identity provider accounts (such as Google or GitHub). During the registration process, you may be asked to provide certain information about yourself, including your email address and other contact details. You agree to provide accurate, complete, and truthful information, and you agree to maintain and update such information to ensure it remains accurate and current.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As part of the registration process, you will be required to create a password. Kahana Group Inc. may permit users to access the Service using authentication credentials from supported third-party identity provider accounts (referred to as a "Login"). By utilizing your Login, you grant Kahana Group Inc. permission to access and use certain information from your Login account in accordance with our Privacy Policy, which may include your name, email address, and other information as described therein.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You bear sole responsibility for maintaining the security and confidentiality of your Login credentials, and you accept full responsibility for all activities that occur under your Login, regardless of whether such activities are authorized by you. You are also responsible for all activities conducted through your account. Kahana Group Inc. reserves the right, in its sole discretion, to disable or suspend your Login at any time and for any reason.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You acknowledge and agree that your use of third-party Login services is also governed by the terms of service and privacy policies of the applicable third-party provider. Kahana Group Inc. does not make any representations or warranties regarding the security or privacy practices of any third-party identity providers. If you suspect that your account has been compromised or is no longer secure, you must immediately notify us by <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contacting us through our contact form</Link>.
              </p>
            </section>

            {/* Section 4: General Payment Terms */}
            <section id="payment-terms" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 4
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">4. Payment Terms</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">4.1. Payment Terms Generally</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Some features of the Service may be subject to fees. Prior to making any payment, you will be presented with the applicable fees and given the opportunity to review and accept them before being charged. All fees are denominated in U.S. Dollars. Except where a non-waivable provision of applicable law requires otherwise, all fees are final and non-refundable as further described in Section 4.7 (No Refunds).
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">4.2. Pricing</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kahana Group Inc. retains the exclusive right to establish pricing for the Service. Fees may include, without limitation: (a) subscriptions to Aura Library plans (such as Growth) billed on a recurring basis; (b) amounts you pay for Purchased Access to hubs or other User Content offered by creators; and (c) platform or processing fees disclosed at checkout or on our pricing page. Kahana Group Inc. will make reasonable efforts to maintain current pricing information on the Service and on Aura Library&apos;s pricing page located at kahana.io/pricing (and related in-app billing surfaces). We recommend that you periodically review our website and checkout screens for the most current pricing information. Kahana Group Inc. may modify fees for any Service feature, including implementing new fees or charges, provided that Kahana Group Inc. gives you advance notice of such changes before they become effective where required. Kahana Group Inc. may, in its sole discretion, extend promotional offers with varying features and pricing to any of its customers. Such promotional offers, unless specifically extended to you, do not apply to your subscription or these Terms.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">4.3. Payment Authorization</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You grant Kahana Group Inc. authorization to charge all amounts due for orders you place and any Service tier you select, as set forth in these Terms or as published by Kahana Group Inc., including all applicable taxes, to the payment method associated with your account. If you choose to pay fees using a credit card, Kahana Group Inc. may request pre-authorization of your credit card account before processing your purchase to confirm that the credit card is valid and contains sufficient funds or available credit to complete the transaction.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">4.4. Subscription Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service may offer subscription-based plans that include automatically recurring payments for periodic charges (referred to as "Subscription Service"). Your "Subscription Billing Date" is the date on which you first purchase a subscription to the Service. The Subscription Service commences on the Subscription Billing Date and continues for the subscription period you choose in your account (the "Initial Subscription Period"). The Subscription Service will automatically renew for successive periods of equal duration to the Initial Subscription Period (each such period, together with the Initial Subscription Period, constituting a "Subscription Period") unless you cancel your subscription or we terminate it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                To avoid being charged for the next Subscription Period, you must cancel your subscription prior to its renewal date. The periodic Subscription Fee will be charged to the payment method you provided during registration (or to an updated payment method if you modify your payment information). You may cancel your Subscription Service at any time via Stripe, through billing settings in the Service (including surfaces linked from kahana.io/pricing), or by <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contacting us through our contact form</Link> or <a href="https://kahana.io/support" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Support</a>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kahana Group Inc. reserves the right to modify the Subscription Fee for any Subscription Service or to introduce new fees or charges at any time, provided that Kahana Group Inc. gives you advance notice of such changes. If you do not wish to continue your subscription after any such change, you may cancel your subscription in the manner described above.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">4.5. Payment Processors</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kahana Group Inc. may engage third-party payment processing services (each, a "Payment Processor") to handle payment transactions processed through the Service. When you use the Service and make payments, you agree to be bound by the terms and conditions and privacy policies of the Payment Processor that processes your transaction. You acknowledge that the Payment Processor may collect, store, and process certain personal and financial information from you, such as your payment card details, billing address, and transaction records, all in accordance with the Payment Processor's privacy policy. Such information is collected and processed by the Payment Processor to enable payment processing and to help prevent fraudulent transactions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kahana Group Inc. assumes no responsibility for any security breaches, data breaches, or unauthorized access to your information that may occur on or through the Payment Processor's systems or platforms. When Kahana Group Inc. uses a Payment Processor to handle transactions, you agree to abide by the terms of service and platform agreement applicable to that Payment Processor. To the maximum extent allowed by applicable law, Kahana Group Inc. shall not be held liable for any errors, omissions, data loss, or security incidents that relate to or arise from the Payment Processor's services or systems. Any disputes, claims, or issues concerning payment processing must be resolved directly with the Payment Processor in accordance with the Payment Processor's terms of service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kahana Group Inc. may engage Stripe, Inc. (referred to as "Stripe") to serve as our Payment Processor. Stripe's website is located at https://stripe.com. For detailed information about Stripe's services, terms, and privacy practices, please review the following resources: Stripe's consumer services agreement available at https://stripe.com/legal/consumer and Stripe's privacy policy available at https://stripe.com/privacy. You acknowledge that the Payment Processor may update, modify, or change its services, terms, and conditions at any time without notice. Kahana Group Inc. is not responsible for any such changes made by the Payment Processor that may impact your ability to use the Service. Kahana Group Inc. retains the right to replace or change its Payment Processor at any time in its sole discretion.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">4.6. Account Delinquency</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kahana Group Inc. reserves the right to suspend or terminate your access to the Service, including all fee-based features and functionality, for any account that has outstanding unpaid amounts. In addition to the principal amount owed for the Service, accounts that become delinquent may be subject to additional fees and charges incurred in connection with chargebacks, payment disputes, or collection efforts, including but not limited to collection agency fees and administrative costs. In the event that your designated payment method becomes invalid, expired, or otherwise fails at the time a Subscription Fee renewal is attempted, Kahana Group Inc. reserves the right, in its sole discretion, to delete your account and permanently remove all information and User Content (as defined in Section 8) associated with your account, and Kahana Group Inc. shall have no liability to you for such deletion or removal.
              </p>

              <h3 id="no-refunds" className="text-2xl font-bold text-[#313A00] mb-4 mt-8 scroll-mt-8">4.7. No Refunds</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>All fees paid in connection with the Service are final and non-refundable</strong>, including without limitation fees for subscriptions, paid access to hubs or other User Content, one-time purchases, upgrades, and any other paid features. Kahana Group Inc. does not provide refunds, account credits, or prorated reimbursements for unused time, unused access, dissatisfaction with content or features, accidental purchases, changes in your circumstances, or loss of access for any reason, <strong>except where a non-waivable provision of applicable law requires otherwise</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any courtesy credit, goodwill adjustment, or similar accommodation Kahana Group Inc. may choose to provide in a particular case is discretionary, does not create an obligation to do so in any other case, and does not waive Aura Library's no-refund policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Initiating a chargeback, payment dispute, or similar reversal without a legally required basis may result in suspension or termination of your account and other remedies available to Kahana Group Inc., without limiting Section 4.6 (Account Delinquency).
              </p>

              <h3 id="purchased-hub-access" className="text-2xl font-bold text-[#313A00] mb-4 mt-8 scroll-mt-8">4.8. Purchased Hub Access and Creator Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service may allow you to purchase access to hubs, digital artifacts, collections, or other content made available by creators or other users ("Purchased Access"). Purchased Access is a limited license to access the applicable content through the Service under these Terms and any additional terms displayed at checkout. It is not a transfer of ownership of the underlying content, and it is not a guarantee of perpetual availability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Creators and other users may unpublish, delete, edit, restrict, or otherwise change hubs and content at any time. Kahana Group Inc. does not control all User Content and does not guarantee that Purchased Access content will remain available, complete, accurate, or unchanged. Kahana Group Inc. is not responsible for the quality, legality, usefulness, or permanence of creator-provided content.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>To the maximum extent permitted by applicable law, if you purchase access to a hub or other content and that content is later removed, taken down, restricted, or made unavailable—including because the creator removes it—you are not entitled to a refund, credit, or other compensation, and Kahana Group Inc. has no liability to you for such unavailability or for any resulting loss of access.</strong> Your sole remedy, except where non-waivable law requires otherwise, is to stop using the affected content.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Without limiting Section 15 (Disclaimers and No Warranties) or Section 16 (Limitation of Liability), Kahana Group Inc. will not be liable for any claim arising from Purchased Access, including claims based on inability to access purchased hubs or content, creator removal or modification of content, or dissatisfaction with purchased materials.
              </p>
            </section>

            {/* Section 5: Licenses */}
            <section id="licenses" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 5
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">5. Licenses</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">5.1. License Grant</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Provided that you fully and continuously comply with these Terms, Kahana Group Inc. hereby grants to you, for your personal use only, a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service. If Kahana Group Inc. makes a downloadable application available as part of or associated with the Service, the same license grant includes installing and using a single object code copy of that application solely to access and use the Service.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">5.2. Restrictions on License</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To the extent permitted by applicable law, you are prohibited from: reproducing, distributing, publicly displaying, publicly performing, or creating derivative works based on the Service; modifying the Service in any way; or interfering with, bypassing, or circumventing any feature, security measure, or access control mechanism of the Service. If applicable law prohibits you from using the Service, you may not use the Service.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">5.3. Feedback</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We value the input, suggestions, and comments from our users. By providing any input, suggestions, or comments regarding the Service's existing functionalities, any problems you encounter, or any proposed modifications or improvements to the Service (collectively, "Feedback"), you hereby grant to Kahana Group Inc. an unrestricted, perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right and license to use, exploit, and commercialize the Feedback in any manner and for any purpose whatsoever, including without limitation to enhance the Service and to develop other products and services. Kahana Group Inc. has no obligation to provide you with any attribution or credit for any Feedback you provide.
              </p>
            </section>

            {/* Section 6: Ownership; Proprietary Rights */}
            <section id="ownership" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 6
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">6. Ownership and Proprietary Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kahana Group Inc. owns and operates the Service. All visual interfaces, graphics, designs, compilations, information, data, computer code (whether source code or object code), products, software, services, and all other components of the Service (collectively, the "Materials") are protected by intellectual property laws and other applicable legal protections. All Materials contained in the Service are owned by Kahana Group Inc. or its third-party licensors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You may not use the Materials except as expressly permitted by Kahana Group Inc. Kahana Group Inc. retains all rights in the Materials that are not expressly granted to you in these Terms.
              </p>
            </section>

            {/* Section 7: Third-Party Terms */}
            <section id="third-party-terms" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 7
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">7. Third-Party Terms</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">7.1. Third-Party Services and Website Links</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kahana Group Inc. may offer functionality through the Service that allows you to export information, including User Content, to third-party services. By utilizing any such functionality, you grant Kahana Group Inc. permission to transmit such information to the applicable third-party service. Third-party services operate outside of Kahana Group Inc.'s control, and, to the maximum extent allowed by applicable law, Kahana Group Inc. assumes no responsibility for how any third-party service uses or handles your exported information. The Service may also include links to third-party websites. Such linked websites are beyond Kahana Group Inc.'s control, and Kahana Group Inc. disclaims all responsibility for their content, accuracy, or practices. You should review the terms of use and privacy policy of any third-party services before sharing any User Content or information with such services. After information is shared with a third-party service, Kahana Group Inc. will have no control over or responsibility for such information.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">7.2. Third-Party Software</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Service may contain or utilize third-party software components that are typically available at no cost under licenses that provide recipients with extensive rights to copy, modify, and distribute those components (referred to as "Third-Party Components"). While the Service is provided to you subject to these Terms, no provision of these Terms shall prevent, restrict, or be construed to prevent or restrict you from obtaining Third-Party Components under the applicable third-party licenses or from limiting your use of Third-Party Components in accordance with those third-party licenses.
              </p>
            </section>

            {/* Section 8: User Content */}
            <section id="user-content" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 8
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">8. User Content</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">8.1. User Content Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Some features of the Service may allow users to submit, upload, publish, broadcast, or otherwise transmit (referred to as "Post" or "Posting") content to the Service, such as messages, reviews, created companions, data, text, and any other works of authorship or other materials (collectively, "User Content"). You maintain ownership of any copyright and other proprietary rights that you possess in the User Content that you Post to the Service, subject to the licenses that you grant in these Terms.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">8.2. License Grant to Kahana Group Inc.</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you Post User Content to or through the Service, you hereby grant to Kahana Group Inc. a worldwide, non-exclusive, irrevocable, perpetual, royalty-free, fully paid-up right and license (including the right to sublicense through multiple tiers) to host, store, transfer, publicly display, publicly perform, communicate to the public, reproduce, modify for formatting purposes, create derivative works as permitted in these Terms, and distribute your User Content, whether in whole or in part, in any media formats and through any media channels, whether currently existing or developed in the future, for the purposes of (i) providing the Service and (ii) deriving or generating information, including technical logs, data, and insights regarding use of the Service (referred to as "Operation Data"). Kahana Group Inc. may store, use, and/or process your User Content and Operation Data for its internal business purposes. You agree that you will be responsible for paying all amounts owed to any person or entity that arise from your Posting of User Content or from Kahana Group Inc.'s exercise of the license granted in this Section.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">8.3. Rights to Posted Content; Representations and Warranties</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are prohibited from Posting User Content if you do not own or are not fully authorized to grant rights in all elements of that User Content. Kahana Group Inc. disclaims all liability related to User Content. You bear sole responsibility for your User Content and for all consequences that result from providing User Content through the Service. By providing User Content through the Service, you affirm, represent, and warrant to Kahana Group Inc. that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>(a) you are the creator and owner of the User Content, or you possess the necessary licenses, rights, consents, and permissions to authorize Kahana Group Inc. and Service users to use and distribute your User Content as required to exercise the licenses you grant in this Section, consistent with how Kahana Group Inc., the Service, and these Terms contemplate such use;</li>
                <li>(b) your User Content, and the Posting or other use of your User Content as contemplated by these Terms, does not and will not: infringe upon, violate, misappropriate, or otherwise breach any third party's rights, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property, contract, or proprietary right; slander, defame, libel, or infringe upon the right of privacy, publicity, or other property rights of any other person; or cause Kahana Group Inc. to violate any law or regulation or require Kahana Group Inc. to obtain additional licenses from or pay royalties, fees, compensation, or other amounts to, or provide attribution to, any third parties; and</li>
                <li>(c) a reasonable person would not consider your User Content to be objectionable, profane, indecent, pornographic, harassing, threatening, embarrassing, hateful, or otherwise inappropriate.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before a hub is made unlisted, listed on Explore, or monetized (or when you upload into a hub that already is), you must confirm that you have the right to share—and, if monetizing, to sell access to—the content in that hub, including any required attribution or license notices. Practical guidance on public domain works, open licenses, trusted sources, and reporting suspected infringement is available in our{' '}
                <Link href="/help/content-rights" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
                  Content Rights guide
                </Link>
                {' '}(also available in-app at app.kahana.io/legal/content-rights). That guide is educational Additional Terms context and does not replace or limit the representations and warranties in this Section 8.3.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">8.4. Disclaimer Regarding User Content</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kahana Group Inc. has no obligation to edit, review, or control User Content that you or other users Post and assumes no responsibility or liability whatsoever for User Content. Notwithstanding the foregoing, Kahana Group Inc. may, at any time and without prior notice, screen, remove, edit, or block any User Content that Kahana Group Inc., in its sole judgment, determines violates these Terms, is alleged to infringe upon third-party rights, or is otherwise objectionable. You acknowledge that, when using the Service, you will encounter User Content from various sources and understand that such User Content may be inaccurate, offensive, indecent, or objectionable. You agree to waive, and hereby do waive, any legal or equitable right or remedy that you have or may have against Kahana Group Inc. relating to User Content. If Kahana Group Inc. receives notice from a user or content owner that User Content allegedly fails to conform to these Terms, Kahana Group Inc. may investigate such allegation and decide in its sole discretion whether to remove the User Content, and Kahana Group Inc. reserves the right to remove such content at any time and without notice. For the avoidance of doubt, Kahana Group Inc. does not allow infringing activities on the Service.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">8.5. Content Monitoring</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kahana Group Inc. is not obligated to actively monitor or review User Content that users upload or generate on the Service, third-party content that is made available through the Service, or the manner in which users interact with or use the Service. Notwithstanding the foregoing, you acknowledge and agree that Kahana Group Inc. retains the right to monitor, and may choose to monitor from time to time, any information that flows through the Service, whether transmitted or received, for operational, security, and other legitimate business purposes. In the event that Kahana Group Inc. decides to engage in monitoring activities, such monitoring does not create any responsibility or liability on Kahana Group Inc.'s part for the content being monitored or for any losses or damages that may arise from the use of such content. Any information that is subject to monitoring may be reviewed, recorded, copied, and utilized in accordance with our Privacy Policy (as defined below). Kahana Group Inc. reserves the right to block, filter, mute, remove, or disable access to any User Content that is uploaded to or transmitted through the Service, and Kahana Group Inc. disclaims all liability to the user who Posted such User Content and to all other users of the Service in connection with such actions.
              </p>
            </section>

            {/* Section 9: Communications */}
            <section id="communications" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 9
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">9. Communications</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By creating an account, you consent to receive communications from Kahana Group Inc., which may be sent via email or other electronic means. The types of email you may receive are described below. See our{' '}
                <Link href="/privacy-policy" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Privacy Policy</Link>{' '}
                for how we use your email address.
              </p>

              <h3 id="communications-optional" className="text-2xl font-bold text-[#313A00] mb-4 mt-8 scroll-mt-8">9.1. Optional product and onboarding emails</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                After you create an account, Kahana Group Inc. may send emails that help you get started with Aura Library and related product features, including onboarding guidance, setup tips, feature explanations, and product updates. These emails are not required to use the Service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You may unsubscribe from these optional emails at any time by following the unsubscribe link in any such email or by <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contacting us through our contact form</Link>.
              </p>

              <h3 id="communications-required" className="text-2xl font-bold text-[#313A00] mb-4 mt-8 scroll-mt-8">9.2. Required transactional and account emails</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some emails are sent because they relate to your account or a specific event affecting your account. You will continue to receive these emails while your account remains active, even if you opt out of optional product and onboarding emails. Examples include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Confirmations when you upgrade or downgrade your plan, and other billing-related notices</li>
                <li>Security or account-integrity notices</li>
                <li>
                  Dormant account notices: if you have not signed in to your account for six (6) months, we may send you a one-off email notifying you that your account may be deleted if you do not sign in within the timeframe stated in that notice
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                These are not marketing newsletters. They are sent only as needed for your account, and they generally do not include an unsubscribe option that would stop legally or operationally required notices while your account remains active.
              </p>

              <h3 id="communications-electronic" className="text-2xl font-bold text-[#313A00] mb-4 mt-8 scroll-mt-8">9.3. Electronic delivery</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree that all agreements, notices, disclosures, and other communications that Kahana Group Inc. delivers to you electronically will satisfy any legal requirement that such communications be provided in written form.
              </p>
            </section>

            {/* Section 10: Prohibited Conduct */}
            <section id="prohibited-conduct" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 10
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">10. Prohibited Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BY USING THE SERVICE, YOU AGREE NOT TO:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>10.1. utilize the Service for any unlawful purpose or in a manner that violates any local, state, national, or international law or regulation;</li>
                <li>10.2. violate the privacy of any third party or exploit or cause harm to children;</li>
                <li>10.3. participate in any activity that is unlawful, threatening, deceptive, or defamatory, or that promotes violence;</li>
                <li>10.4. attempt to "hack," gain unauthorized access to, interfere with, or establish unauthorized connections to the services and/or any computer system;</li>
                <li>10.5. harass, threaten, demean, embarrass, bully, or cause harm to any other user of the Service;</li>
                <li>10.6. infringe upon, encourage others to infringe upon, or provide guidance on how to infringe upon, any third party's rights, including by infringing or misappropriating any third party's intellectual property rights;</li>
                <li>10.7. access, search, or otherwise utilize any portion of the Service using any engine, software, tool, agent, device, or mechanism (such as spiders, robots, crawlers, and data mining tools) other than the software or search agents that Kahana Group Inc. provides;</li>
                <li>10.8. interfere with or compromise security-related features of the Service, including by: disabling or bypassing features that prevent or restrict use, printing, or copying of content; or reverse engineering or otherwise seeking to discover the source code of any portion of the Service, except where such activity is expressly authorized by applicable law;</li>
                <li>10.9. disrupt the operation of the Service or interfere with any user's ability to enjoy the Service, including by: uploading or otherwise distributing any virus, adware, spyware, worm, or other malicious software or code; sending unsolicited offers or advertisements to other users of the Service; collecting personal information about another user or third party without their consent; or interfering with or disrupting any network, equipment, or server that is connected to or used to provide the Service;</li>
                <li>10.10. engage in any fraudulent activity, including impersonating any person or entity, misrepresenting your affiliation or identity, gaining unauthorized access to any other Service account, or providing false information regarding your age or date of birth;</li>
                <li>10.11. sell, transfer, or otherwise assign the access rights granted under these Terms or any Materials (as defined in Section 6 (Ownership; Proprietary Rights)), or any right or ability to view, access, or use any Materials;</li>
                <li>10.12. attempt to perform any of the acts described in this Section 10 (Prohibited Conduct), or assist, encourage, or permit any person to engage in any of the acts described in this Section 10 (Prohibited Conduct);</li>
                <li>10.13. use the Service to implement any practices that are prohibited under Article 5 of the EU Artificial Intelligence Act (Regulation (EU) 2024/1689) (the "AI Act") or that are classified as high-risk under Article 6 of the AI Act, or to transform the Service into a High-Risk AI System as that term is defined in the AI Act; or</li>
                <li>10.14. use the Service to participate in any of the following practices:</li>
              </ul>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-8">
                <li>a. Employing subliminal, manipulative, or deceptive techniques that alter a person's behavior in a manner that prevents them from making informed decisions and that is likely to result in harm;</li>
                <li>b. Taking advantage of vulnerabilities of individuals based on their age, disability, or socio-economic circumstances;</li>
                <li>c. Developing or expanding databases used for facial recognition purposes;</li>
                <li>d. Performing biometric identification activities;</li>
                <li>e. Assessing or categorizing individuals based on their social behavior or personal characteristics (including social scoring or predictive profiling) in a manner that results in detrimental or unfavorable treatment;</li>
                <li>f. Evaluating or forecasting the likelihood that an individual will commit a criminal offense;</li>
                <li>g. Determining or deducing an individual's emotional state; or</li>
                <li>h. Classifying or grouping individuals based on their biometric data.</li>
              </ul>
            </section>

            {/* Section 11: Modification of Terms */}
            <section id="modification-terms" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 11
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">11. Modification of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain the right to modify these Terms at any time, with such modifications applying prospectively. You should review these Terms periodically to stay informed of any changes. In the event that a modification to these Terms materially alters your rights or obligations, we may provide you with notice of such change.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Material modifications will become effective on the earlier of: (1) the date of your first use of the Service after you have actual knowledge of the change; or (2) 30 days following the date the change is published. Non-material modifications will become effective immediately upon publication. Any disputes that arise under these Terms will be resolved according to the version of these Terms that was in effect at the time the dispute first arose.
              </p>
            </section>

            {/* Section 12: Trial Period */}
            <section id="trial-period" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 12
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">12. Trial Period</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">12.1. Terms of Trial</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                From time to time, Kahana Group Inc. may offer free trials, promotional trials, pilot, evaluation, alpha, beta, or early access to the Service, an Aura Library plan (such as Growth), hub features, or other capabilities, as described in the product, at checkout, or in a specific offer (each, a &quot;Trial&quot;). You may use a Trial solely for evaluation during the period Kahana Group Inc. specifies. Trials are provided at Aura Library&apos;s discretion; either you or Kahana Group Inc. may terminate a Trial at any time, for any reason, with or without notice. A Trial may be non-functional, incomplete, or contain features that Kahana Group Inc. may never release generally, and related features and performance information constitute Aura Library&apos;s confidential and proprietary information. Unless otherwise stated in the offer, at the end of a paid-plan Trial, billing may begin under Section 4 (Payment Terms) if you do not cancel before the Trial ends.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">12.2. Disclaimer for Trial</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                NOTWITHSTANDING ANY OTHER PROVISION OF THESE TERMS, KAHANA GROUP INC. MAKES NO WARRANTIES, PROVIDES NO INDEMNIFICATION, AND OFFERS NO SUPPORT FOR THE TRIAL, AND KAHANA GROUP INC.'S TOTAL LIABILITY ARISING FROM OR RELATING TO THE TRIAL SHALL NOT EXCEED US$50.
              </p>
            </section>

            {/* Section 13: Term, Termination, and Modification of the Service */}
            <section id="term-termination" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 13
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">13. Term, Termination, and Service Modifications</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">13.1. Term of Agreement</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms commence when you accept them or when you first create an account, access, or use the Service, and continue in effect until they are terminated in accordance with Section 13.2 (Termination).
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">13.2. Termination Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Should you breach any provision of these Terms, your authorization to access the Service and these Terms shall automatically terminate. Furthermore, Kahana Group Inc. reserves the right, in its sole discretion, to terminate these Terms or your Service account, or to suspend or terminate your access to the Service, at any time, for any reason or no reason whatsoever, with or without prior notice, and Kahana Group Inc. shall have no liability to you in connection with such termination. You have the right to terminate your account and these Terms at any time by submitting a delete-account request through{' '}
                <a href="https://kahana.io/support" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Support</a>
                , through available account settings, or by reaching out through{' '}
                <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">our contact form</Link>.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">13.3. Consequences of Termination</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When these Terms are terminated: all of your license rights shall terminate and you are required to immediately stop using the Service in any manner; you will lose authorization to access your account or the Service; you must remit to Kahana Group Inc. any amounts that were owed prior to termination; and all payment obligations that accrued prior to termination, together with Sections 5.3 (Feedback), 6 (Ownership; Proprietary Rights), Section 8 (User Content), 13.3 (Effect of Termination), 14 (Indemnity), 15 (Disclaimers; No Warranties), 16 (Limitation of Liability), 17 (Dispute Resolution and Arbitration), and 18 (Miscellaneous), shall survive such termination. You bear sole responsibility for maintaining backup copies of any User Content that you Post to the Service, as you may lose the ability to access any User Content you Posted to the Service once your account is terminated. In the event that your account was terminated due to a breach of these Terms, you are forbidden from establishing a new account on the Service by using a different name, email address, or other means of account verification.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">13.4. Service Modifications</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kahana Group Inc. retains the right to alter or discontinue the Service in whole or in part at any time (including by restricting or eliminating specific features of the Service), whether on a temporary or permanent basis, and without providing notice to you. Kahana Group Inc. assumes no liability whatsoever for any modifications made to the Service, including changes to any paid features or functionalities of the Service, or for any suspension or termination of your ability to access or use the Service. It is recommended that you maintain backup copies of any User Content that you Post to the Service to ensure you have permanent copies should the Service be modified in a manner that results in you losing access to User Content you Posted to the Service.
              </p>

              <h3 id="dormant-accounts" className="text-2xl font-bold text-[#313A00] mb-4 mt-8 scroll-mt-8">13.5. Dormant accounts</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have not signed in to your Aura Library account for six (6) months, your account may be considered dormant. We may send you a one-off email notifying you that your account may be deleted if you do not sign in within the timeframe stated in that notice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Account deletion is irreversible. If your account is deleted, you will lose access to the Service and associated data will be destroyed in accordance with our Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you wish to delete your account before any dormancy process applies, submit a request through{' '}
                <a href="https://kahana.io/support" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Support</a>
                {' '}or available account settings.
              </p>
            </section>

            {/* Section 14: Indemnity */}
            <section id="indemnity" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 14
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">14. Indemnity</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, you are responsible for your use of the Service, and you will defend and indemnify Kahana Group Inc., its affiliates, and their respective shareholders, directors, managers, members, officers, employees, consultants, and agents (together, the "Company Entities") from and against every claim brought by a third party, and any related liability, damage, loss, and expense, including attorneys' fees and costs, arising out of or connected with: (1) your unauthorized use of, or misuse of, the Service; (2) your violation of any portion of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation; (3) your violation of any third-party right, including any intellectual property right or publicity, confidentiality, other property, or privacy right; or (4) any dispute or issue between you and any third party.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (without limiting your indemnification obligations with respect to that matter), and in that case, you agree to cooperate with our defense of those claims.
              </p>
            </section>

            {/* Section 15: Disclaimers; No Warranties */}
            <section id="disclaimers" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 15
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">15. Disclaimers and No Warranties</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">15.1. Service Provided As-Is</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE SERVICE AND ALL MATERIALS AND CONTENT MADE AVAILABLE THROUGH THE SERVICE ARE FURNISHED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. KAHANA GROUP INC. EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, THAT RELATE TO THE SERVICE AND ALL MATERIALS AND CONTENT MADE AVAILABLE THROUGH THE SERVICE, INCLUDING WITHOUT LIMITATION: ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, AND NON-INFRINGEMENT; AND ANY WARRANTIES THAT ARISE FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE. KAHANA GROUP INC. DOES NOT WARRANT, GUARANTEE, OR REPRESENT THAT THE SERVICE OR ANY PORTION THEREOF, OR ANY MATERIALS OR CONTENT PROVIDED THROUGH THE SERVICE, WILL OPERATE WITHOUT INTERRUPTION, BE SECURE, OR BE FREE FROM ERRORS, VIRUSES, OR OTHER HARMFUL ELEMENTS, AND KAHANA GROUP INC. DOES NOT WARRANT THAT ANY SUCH PROBLEMS WILL BE ADDRESSED OR RESOLVED.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                YOU ACKNOWLEDGE AND AGREE THAT: (a) CERTAIN ASPECTS OF THE SERVICES PROVIDED BY KAHANA GROUP INC. UTILIZE ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING TECHNOLOGIES THAT, BY THEIR INHERENT NATURE, GENERATE OUTPUTS BASED ON PROBABILISTIC REASONING, AND AS SUCH, SUCH OUTPUTS MAY NOT ALWAYS BE ACCURATE, COMPLETE, RELEVANT, USEFUL, OR DEVOID OF ERRORS. KAHANA GROUP INC. ASSUMES NO RESPONSIBILITY FOR ANY HARM OR DAMAGE THAT MAY OCCUR AS A RESULT OF USING THE SERVICE; (b) GIVEN THE INHERENT CHARACTERISTICS OF THE SERVICES AND MACHINE LEARNING OR ARTIFICIAL INTELLIGENCE TECHNOLOGY IN GENERAL, THE OUTPUT GENERATED MAY NOT BE DISTINCTIVE, ORIGINAL, EXCLUSIVE, OR PARTICULARLY TAILORED TO YOU OR YOUR INPUT, AND OTHER USERS OF THE SERVICES MAY OBTAIN COMPARABLE OUTPUT THROUGH THE SERVICE; (c) THE OUTPUT OR ANY COMPONENT THEREOF MAY (1) BE SUBJECT TO OWNERSHIP OR CONTROL BY A THIRD PARTY, OR (2) BE SUBJECT TO OR ELIGIBLE FOR PROTECTION UNDER INTELLECTUAL PROPERTY OR OTHER PROPRIETARY RIGHTS; (d) YOU MAY LACK ANY RIGHT OR LICENSE TO UTILIZE OR OTHERWISE EXPLOIT THE OUTPUT; (e) YOU MAY BE UNABLE TO ACQUIRE OR SECURE, IN ANY JURISDICTION, ANY RIGHTS IN THE OUTPUT OR ANY PATENTS OR OTHER INTELLECTUAL PROPERTY RIGHTS PERTAINING TO THE OUTPUT; AND (f) THE OUTPUT MAY BE APPLICABLE TO OR RELEVANT FOR OTHER USERS OF THE SERVICES. TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, KAHANA GROUP INC. PROVIDES NO REPRESENTATION OR WARRANTY CONCERNING ANY OF THE FOREGOING ACKNOWLEDGMENTS.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">15.2. No Warranties from Communications</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                NO ADVICE, INFORMATION, OR COMMUNICATION, WHETHER VERBAL OR WRITTEN, THAT YOU OBTAIN FROM THE SERVICE OR FROM KAHANA GROUP INC. ENTITIES OR FROM ANY MATERIALS OR CONTENT ACCESSIBLE THROUGH THE SERVICE SHALL GIVE RISE TO ANY WARRANTY CONCERNING ANY OF THE KAHANA GROUP INC. ENTITIES OR THE SERVICE THAT IS NOT EXPRESSLY SET FORTH IN THESE TERMS. KAHANA GROUP INC. IS NOT LIABLE FOR ANY DAMAGE THAT MAY ARISE FROM THE SERVICE OR FROM YOUR INTERACTIONS WITH ANY OTHER USER OF THE SERVICE. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF ANY PART OF THE SERVICE IS AT YOUR SOLE DISCRETION AND RISK, AND THAT KAHANA GROUP INC. IS NOT LIABLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE THAT YOU USE IN CONNECTION WITH THE SERVICE) OR FOR ANY LOSS OF DATA, INCLUDING ANY USER CONTENT.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">15.3. Maximum Extent of Limitations</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                THE LIMITATIONS, EXCLUSIONS, AND DISCLAIMERS SET FORTH IN THIS SECTION 15 (DISCLAIMERS; NO WARRANTIES) SHALL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. KAHANA GROUP INC. DOES NOT DISCLAIM ANY WARRANTY OR OTHER RIGHT THAT APPLICABLE LAW PROHIBITS KAHANA GROUP INC. FROM DISCLAIMING.
              </p>
            </section>

            {/* Section 16: Limitation of Liability */}
            <section id="limitation-liability" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 16
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">16. Limitation of Liability</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">16.1. Exclusion of Indirect Damages</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES SHALL THE KAHANA GROUP INC. ENTITIES BE HELD LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) THAT ARISE FROM OR ARE CONNECTED TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICE OR ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE (INCLUDING PURCHASED ACCESS TO HUBS OR OTHER USER CONTENT THAT IS REMOVED, MODIFIED, OR MADE UNAVAILABLE BY A CREATOR OR OTHERWISE), REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND REGARDLESS OF WHETHER ANY KAHANA GROUP INC. ENTITY HAS BEEN ADVISED OF THE POTENTIAL FOR SUCH DAMAGE.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">16.2. Cap on Aggregate Liability</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                EXCEPT AS SET FORTH IN SECTIONS 17.5 (COMMENCING ARBITRATION) AND 17.7 (ARBITRATION RELIEF) AND TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL AGGREGATE LIABILITY OF THE KAHANA GROUP INC. ENTITIES TO YOU FOR ALL CLAIMS THAT ARISE FROM OR RELATE TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE SERVICE OR OTHERWISE PURSUANT TO THESE TERMS, WHETHER BASED ON CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, SHALL NOT EXCEED THE GREATER OF: THE TOTAL AMOUNT YOU HAVE PAID TO KAHANA GROUP INC. FOR ACCESS TO AND USE OF THE SERVICE DURING THE 12-MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT OR CIRCUMSTANCE THAT GAVE RISE TO THE CLAIM AND US$100.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">16.3. Allocation of Risk</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                EVERY PROVISION IN THESE TERMS THAT ESTABLISHES A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS DESIGNED TO AND SHALL SERVE TO DISTRIBUTE THE RISKS BETWEEN THE PARTIES PURSUANT TO THESE TERMS. SUCH RISK DISTRIBUTION CONSTITUTES A FUNDAMENTAL COMPONENT OF THE FOUNDATION OF THE AGREEMENT BETWEEN THE PARTIES. EACH SUCH PROVISION IS SEVERABLE AND STANDS INDEPENDENTLY FROM ALL OTHER PROVISIONS CONTAINED IN THESE TERMS. THE LIMITATIONS SET FORTH IN THIS SECTION 16 (LIMITATION OF LIABILITY) SHALL REMAIN IN EFFECT EVEN IF ANY LIMITED REMEDY DOES NOT ACHIEVE ITS INTENDED PURPOSE.
              </p>
            </section>

            {/* Section 17: Dispute Resolution and Arbitration */}
            <section id="dispute-resolution" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 17
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">17. Dispute Resolution and Arbitration</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.1. General Provisions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subject to the exceptions set forth in Section 17.2 (Exceptions) and 17.3 (Opt-Out), you and Kahana Group Inc. agree that all disputes that arise in connection with these Terms, the Service, or communications from us shall be resolved through binding arbitration. Arbitration employs a neutral arbitrator rather than a judge or jury, is more informal than a court proceeding, may provide for more limited discovery than court proceedings, and is subject to minimal review by courts. This agreement to arbitrate disputes encompasses all claims regardless of whether they are based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of these Terms. Any dispute concerning the interpretation, applicability, or enforceability of this binding arbitration agreement shall be determined by the arbitrator.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                YOU ACKNOWLEDGE AND AGREE THAT, BY ACCEPTING THESE TERMS, YOU AND KAHANA GROUP INC. ARE EACH RELINQUISHING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.2. Exceptions to Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                While we are agreeing to arbitrate most disputes between us, nothing in these Terms shall be construed to waive, preclude, or otherwise limit the right of either party to: file an individual action in small claims court; pursue an enforcement action through the appropriate federal, state, or local agency if such action is available; seek injunctive relief from a court of law in aid of arbitration; or to file a lawsuit in a court of law to address an intellectual property infringement claim.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.3. Right to Opt-Out</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you do not want to resolve disputes through binding arbitration, you may opt out of the provisions of this Section 17 (Dispute Resolution and Arbitration) within 30 days following the date that you accept these Terms by sending a letter to Kahana Group Inc., Attention: Legal Department – Arbitration Opt-Out, 1550 N Lake Shore Dr, Apt 19E, Chicago, Illinois 60610 that includes: your complete legal name, the email address linked to your account on the Service, and a statement indicating that you wish to opt out of arbitration ("Opt-Out Notice"). Upon Kahana Group Inc.'s receipt of your Opt-Out Notice, this Section 17 (Dispute Resolution and Arbitration) shall be void and any action arising out of these Terms shall be resolved in accordance with Section 18.2 (Governing Law). The other provisions of these Terms shall remain unaffected by your Opt-Out Notice.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.4. Selection of Arbitrator</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This arbitration agreement, and any arbitration proceeding between us, shall be governed by the Federal Arbitration Act and shall be administered by JAMS ("JAMS") pursuant to rules that apply to consumer disputes (collectively, "JAMS Rules") as amended by these Terms. The JAMS Rules and required filing forms can be accessed online at www.jamsadr.org, by calling JAMS at +1-800-352-5267, or by contacting Kahana Group Inc.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.5. Initiating Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Prior to initiating arbitration, a party must first deliver a written notice of the dispute to the other party via certified U.S. Mail or via Federal Express (signature required) or, only if that other party has not furnished a current physical address, then via electronic mail ("Notice of Arbitration"). Kahana Group Inc.'s address for receiving such notices is: Kahana Group Inc., 1550 N Lake Shore Dr, Apt 19E, Chicago, Illinois 60610. The Notice of Arbitration must: specify the name or account number of the party bringing the claim; set forth the nature and basis of the claim or dispute; and state the specific relief requested ("Demand"). The parties shall make good faith efforts to resolve the claim directly, but if the parties are unable to reach an agreement to do so within 30 days following receipt of the Notice of Arbitration, either you or Kahana Group Inc. may initiate an arbitration proceeding. All fees shall be determined in accordance with the JAMS Rules.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.6. Conduct of Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Any arbitration hearing shall be held in the county and state of your residence unless we agree to a different location or, if the claim is for US$10,000 or less (and does not seek injunctive relief), you may select whether the arbitration shall be conducted: exclusively on the basis of documents provided to the arbitrator; via a telephonic or video hearing; or through an in-person hearing as provided by the JAMS Rules in the county (or parish) of your residence. Throughout the arbitration, the amount of any settlement offer made by you or Kahana Group Inc. shall not be revealed to the arbitrator until after the arbitrator issues a final decision and award, if any. Irrespective of the method by which the arbitration is conducted, the arbitrator shall issue a reasoned written decision that adequately explains the essential findings and conclusions upon which the decision and award, if any, are based.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.7. Available Relief in Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Subject to Section 17.8 (No Class Actions), the arbitrator may award any relief that would be available if the claims had been filed in a court of competent jurisdiction. If the arbitrator awards you an amount greater than the last written settlement amount offered by Kahana Group Inc. prior to the selection of an arbitrator, Kahana Group Inc. shall pay to you the greater of: the amount awarded by the arbitrator and US$10,000. The arbitrator's award shall be final and binding upon all parties, except (1) for judicial review that is expressly permitted by law or (2) if the arbitrator's award includes an award of injunctive relief against a party, in which case that party shall have the right to seek judicial review of the injunctive relief in a court of competent jurisdiction that shall not be bound by the arbitrator's application or conclusions of law. Judgment on the award may be entered in any court with jurisdiction.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.8. Prohibition of Class Actions</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                YOU AND KAHANA GROUP INC. AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER PARTY ONLY IN SUCH PARTY'S INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY ALLEGED CLASS OR REPRESENTATIVE PROCEEDING.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.9. Changes to Arbitration Provision</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If Kahana Group Inc. makes any material change to this arbitration provision, you may reject the change by sending us written notice within 30 days following the change to Kahana Group Inc.'s address for Notice of Arbitration, in which case your Aura Library account shall be immediately terminated and this arbitration provision, as in effect immediately before the changes you rejected, shall remain in effect.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">17.10. Enforceability of Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If Section 17.8 (No Class Actions) or the entire Section 17 (Dispute Resolution and Arbitration) is determined to be unenforceable, or if Kahana Group Inc. receives an Opt-Out Notice from you, then the entire Section 17 (Dispute Resolution and Arbitration) shall be null and void and, in such case, the exclusive jurisdiction and venue set forth in Section 18.2 (Governing Law) shall govern any action arising out of or relating to these Terms.
              </p>
            </section>

            {/* Section 18: Miscellaneous */}
            <section id="miscellaneous" className="mb-16 scroll-mt-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded-md mb-2">
                  Section 18
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#313A00] mb-6">18. Miscellaneous</h2>
              
              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.1. General Provisions</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms, together with the Privacy Policy and any other agreements that are expressly incorporated by reference herein, constitute the complete and exclusive understanding and agreement between you and Kahana Group Inc. with respect to your use of the Service. You shall not assign or transfer these Terms or any of your rights hereunder, in whole or in part, whether by operation of law or otherwise, without our prior written consent. We may assign these Terms and all rights granted hereunder, including with respect to your User Content, at any time without notice to you or your consent. Our failure to require performance of any provision shall not affect our right to require performance at any other time thereafter, nor shall any waiver by us of any breach or default of these Terms, or of any provision hereof, constitute a waiver of any subsequent breach or default or a waiver of the provision itself. The use of Section headers in these Terms is for convenience only and shall not affect the interpretation of any provision. Throughout these Terms, the use of the word "including" shall mean "including but not limited to." If any portion of these Terms is determined to be invalid or unenforceable, then the unenforceable portion shall be given effect to the maximum extent possible, and the remaining portions shall remain in full force and effect.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.2. Applicable Law and Jurisdiction</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles. You and Kahana Group Inc. hereby submit to the personal and exclusive jurisdiction of the state courts and federal courts located within Cook County, Illinois for the resolution of any lawsuit or court proceeding that is permitted under these Terms. We operate the Service from our offices located in Illinois, and we do not represent that Materials included in the Service are appropriate or available for use in other locations.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.3. Privacy Policy Incorporation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Please review the Aura Library Privacy Policy <Link href="/privacy-policy" className="text-[#4A6200] no-underline hover:no-underline font-semibold">(the "Privacy Policy")</Link> carefully for information concerning our collection, use, storage, and disclosure of your personal information, including cookies and analytics. As described in the Privacy Policy, our website analytics tools are Google Analytics, Mixpanel, and Firebase; we do not use advertising cookies or retargeting pixels on this site. The Aura Library Privacy Policy is incorporated by reference herein and forms a part of these Terms.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.4. Incorporation of Additional Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your use of the Service is subject to all additional terms, policies, rules, or guidelines that apply to the Service or certain features of the Service that we may post on or link to from the Service (the &quot;Additional Terms&quot;). All Additional Terms are incorporated by reference herein and form a part of these Terms. Additional Terms include, without limitation, our{' '}
                <Link href="/help/content-rights" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
                  Content Rights guide
                </Link>
                {' '}and{' '}
                <Link href="/community-guidelines" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
                  Community Guidelines
                </Link>
                , as well as related in-app legal pages under app.kahana.io/legal.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.5. Electronic Communication Consent</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                By using the Service, you consent to receiving certain electronic communications from us as more fully described in our Privacy Policy. Please review our Privacy Policy to learn more about our electronic communications practices. You agree that any notices, agreements, disclosures, or other communications that we transmit to you electronically shall satisfy any legal communication requirements, including the requirement that such communications be in writing.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.6. How to Contact Us</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Service is provided by Kahana Group Inc., with offices located at 1550 North Lakeshore Drive, Apt 19E, Chicago, Illinois, 60610. You may reach us by sending correspondence to that address or by <Link href="https://kahana.io/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">contacting us through our contact form</Link>.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.7. California Residents' Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are a California resident, then pursuant to California Civil Code Section 1789.3, you may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite N 112, Sacramento, California 95834, or by telephone at +1-800-952-5210 in order to resolve a complaint concerning the Service or to obtain further information regarding use of the Service.
              </p>

              <h3 className="text-2xl font-bold text-[#313A00] mb-4 mt-8">18.8. Support Not Guaranteed</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have no obligation to provide support for the Service. In cases where we may offer support, such support shall be subject to published policies.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
