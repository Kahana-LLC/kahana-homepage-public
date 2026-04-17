import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { trackError } from '../utils/analytics';
import SEO from '../components/SEO';

export default function LearningInternship() {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState(null);
  const MAX_RETRIES = 3;

  const faqItems = [
    {
      id: 'stipend',
      question: 'Is there a stipend?',
      answer: 'This is an unpaid, educational internship focused on learning and gaining experience. There is no stipend or compensation.',
      group: 'Compensation & expectations',
    },
    {
      id: 'full-time',
      question: 'Does the internship lead to a full-time role at Kahana?',
      answer: 'No. The internship does not have an impact on getting a full-time role at Kahana. There is no expectation of a full-time role after completing the internship. This is a learning experience designed to help you build skills and gain exposure.',
      group: 'Compensation & expectations',
    },
    {
      id: 'apply',
      question: 'How do I apply?',
      answer: 'Click the "Apply Now" button on this page to open the application form. Fill it out and submit—we\'ll review your application and get back to you.',
      group: 'Getting started',
    },
    {
      id: 'eligibility',
      question: 'Who can apply?',
      answer: 'We welcome applicants from all backgrounds. There are no strict eligibility requirements—we look for curiosity, initiative, and a genuine interest in learning. The internship is remote and open globally.',
      group: 'Getting started',
    },
    {
      id: 'schedule',
      question: 'How is it scheduled? What\'s the duration?',
      answer: 'The internship is flexible and remote. Once accepted, you choose when you\'d like to officially start and go through onboarding. You work around your schedule—there\'s no fixed daily duration. You choose your hours per week (e.g., 5–10, 10–15, 15–20+) and complete tasks at your own pace. You can leave whenever you choose, or remain in it as long as it continues to be a good fit.',
      group: 'Getting started',
    },
    {
      id: 'start-date',
      question: 'When can I start? How do I choose my start date?',
      answer: 'Once you\'re accepted, you\'ll have the opportunity to complete a form to choose your start date. You decide when you\'d like to officially begin and go through onboarding—there\'s no fixed start date.',
      group: 'Getting started',
    },
    {
      id: 'communication',
      question: 'How will I communicate with the team?',
      answer: 'You\'ll join our intern community via WhatsApp or Slack (you\'ll receive the link after applying and being accepted). That\'s where you\'ll get tasks, ask questions, and connect with the team and other interns.',
      group: 'Getting started',
    },
    {
      id: 'training',
      question: 'Is there training or mentorship?',
      answer: 'Yes. You will receive training and be expected to learn—through structured learning plans, clear instructions for each task, and working alongside Kahana team members. You\'ll also have opportunities to connect with leadership for mentorship, guidance, and feedback. You\'ll join a community of other interns as well.',
      group: 'Learning & support',
    },
    {
      id: 'projects',
      question: 'What kind of projects will I work on?',
      answer: 'Projects vary by your function (Engineering, Product, Marketing, etc.). You\'ll receive a list of tasks every 2 weeks with instructions and learning objectives. See the "Examples of Direct Experience" and "Functional Areas" sections above for concrete examples of what you\'ll work with.',
      group: 'Learning & support',
    },
    {
      id: 'skills',
      question: 'What skills should I focus on?',
      answer: 'We welcome applicants at different skill levels. The internship is designed for learning—you\'ll develop skills through hands-on tasks in your chosen area (Engineering, Product, Marketing, etc.). Curiosity and willingness to learn matter more than prior experience.',
      group: 'Learning & support',
    },
    {
      id: 'ai',
      question: 'Is this good for someone new to AI?',
      answer: 'Yes. If you\'re interested in AI, engineering, or product work, you\'ll get exposure to real projects and tools. Prior AI experience is not required—the internship is a great way to build relevant skills as a fresher.',
      group: 'Learning & support',
    },
    {
      id: 'offer-letter',
      question: 'Will I get an offer letter? Can I add this to LinkedIn?',
      answer: 'Yes. If you are accepted and choose to enroll, you will receive official documentation—an offer letter—for your records. You can list this as an internship experience on your resume and LinkedIn.',
      group: 'Career & credentials',
    },
    {
      id: 'success',
      question: 'What does success look like for an intern?',
      answer: 'Success means completing your assigned tasks, engaging with the team, asking questions, and applying feedback. We look for reliability, a positive attitude, and genuine interest in learning. By the end, you\'ll have hands-on experience, new skills for your resume, and exposure to how a startup operates.',
      group: 'Career & credentials',
    },
  ];

  const initializeTally = () => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
      setIsFormLoaded(true);
      setLoadError(false);
    }
  };

  const handleTallyLoad = () => {
    setTimeout(() => {
      initializeTally();
    }, 100);
  };

  const handleTallyError = (error) => {
    console.error('Tally form loading error:', error);
    trackError('tally_form_load_error', error.message);
    setLoadError(true);
    
    if (retryCount < MAX_RETRIES) {
      setRetryCount(prev => prev + 1);
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = handleTallyLoad;
      script.onerror = () => handleTallyError(new Error('Failed to load Tally script'));
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    setIsFormLoaded(false);
    setLoadError(false);
    setRetryCount(0);

    if (window.Tally) {
      initializeTally();
    }

    return () => {
      const tallyElements = document.querySelectorAll('[data-tally-loaded]');
      tallyElements.forEach(element => element.remove());
    };
  }, []);

  // Reinitialize Tally when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setIsFormLoaded(false);
      if (window.Tally) {
        setTimeout(() => {
          initializeTally();
        }, 100);
      }
    }
  }, [isModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const formModal = (
    <>
      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-oasis-green-600/20">
              <h2 className="text-2xl font-bold text-oasis-green-800">Apply to Kahana Learning Internship</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-oasis-green-800 hover:text-oasis-green-600 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body with Form */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl shadow-xl p-6">
                <div className="relative min-h-[600px]">
                  {!isFormLoaded && !loadError && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-oasis-green-500"></div>
                    </div>
                  )}

                  {loadError && retryCount < MAX_RETRIES && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-oasis-green-800 mb-4">Having trouble loading the form? We'll try again automatically.</p>
                      <p className="text-sm text-oasis-green-800">Attempt {retryCount + 1} of {MAX_RETRIES}</p>
                    </div>
                  )}

                  {loadError && retryCount >= MAX_RETRIES && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-oasis-green-800 mb-4">We're having trouble loading the form. Please try refreshing the page.</p>
                      <button
                        onClick={() => window.location.reload()}
                        className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                        style={{ textDecoration: 'none', backgroundColor: '#94A833' }}
                      >
                        Refresh Page
                      </button>
                    </div>
                  )}

                  <iframe
                    data-tally-src="https://tally.so/r/VL8QWy"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Kahana Learning Internship Application"
                    style={{ 
                      border: 'none',
                      opacity: isFormLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <SEO
        title="Kahana Learning Internship"
        description="Join our educational internship program designed for individuals who want to learn and gain hands-on experience in a fast-paced, innovative startup environment."
        url="https://kahana.co/learning-internship"
        type="website"
      />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-oasis-green-800 mb-4">Kahana Learning Internship</h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto">
              An educational internship designed for individuals who want to learn and gain hands-on experience in a fast-paced, innovative startup environment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">Overview</h2>
                <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-6 border-2 border-oasis-green-600/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-oasis-green-800 leading-relaxed text-lg">
                        The Kahana Learning Internship is an <strong>educational internship</strong> designed for individuals who want to learn and gain hands-on experience in a fast-paced, innovative startup environment.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why We Created This Program */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">Why We Created This Program</h2>
                <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-6 border-2 border-oasis-green-600/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-oasis-green-800 mb-4 leading-relaxed">
                        Kahana has received <strong>hundreds of emails and messages</strong> from people asking for opportunities to volunteer, learn, and contribute while gaining experience. Rather than say "no" or "we don't have an internship," we decided to create one that we feel combines <strong>flexibility, community, collaboration, and problem-solving</strong> in an innovative environment that is <strong>not too rigid and not too unstructured</strong>.
                      </p>
                      <p className="text-oasis-green-800 mb-4 leading-relaxed">
                        The result is an environment where you can <strong>gain exposure to new tools, contribute to projects, and learn skills quickly and efficiently</strong>. Our single guarantee is that when you join, you will have <strong>plenty of opportunities given to you to learn</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Details */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">Key Details</h2>
                
                {/* Compensation & Status */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-oasis-green-600 mb-4">Compensation & Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Unpaid</h4>
                          <p className="text-sm text-oasis-green-800/80">This is a learning-focused opportunity, not a paid position</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Intern status</h4>
                          <p className="text-sm text-oasis-green-800/80">You are considered an intern for the educational internship, not an employee</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule & Location */}
                <div>
                  <h3 className="text-xl font-semibold text-oasis-green-600 mb-4">Schedule & Location</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Flexible</h4>
                          <p className="text-sm text-oasis-green-800/80">Work around your schedule, coursework, or other commitments</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Remote</h4>
                          <p className="text-sm text-oasis-green-800/80">Participate from anywhere; no in-office requirement</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">No commitment required</h4>
                          <p className="text-sm text-oasis-green-800/80">You can leave the internship anytime if it's no longer the right fit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Who This Is For */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">Who This Is For</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-oasis-green-800 mb-1">Students</h4>
                        <p className="text-sm text-oasis-green-800/80">Great for undergraduates, graduate students, or anyone in school looking to build real-world experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-oasis-green-800 mb-1">Career explorers</h4>
                        <p className="text-sm text-oasis-green-800/80">Anyone looking to learn, gain experience, and explore different business functions</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-oasis-green-800 mb-1">Self-directed learners</h4>
                        <p className="text-sm text-oasis-green-800/80">Individuals who thrive with structured tasks and clear learning objectives</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Areas of Experience */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">Areas of Experience</h2>
                <p className="text-oasis-green-800 mb-4">
                  Interns have the opportunity to gain exposure across multiple business functions, including:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-oasis-green-600/20">
                    <thead className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-oasis-green-800 uppercase tracking-wider">Function</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-oasis-green-800 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-oasis-green-600/10">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Marketing</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">Product marketing, content, campaigns, and brand</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Sales</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">Lead generation, outreach, demos, and customer conversations</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Product</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">Product strategy, roadmap, user research, and feature definition</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Engineering</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">Software development, technical implementation, and product building</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Project Management</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">Sprint planning, coordination, and cross-functional execution</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Human Resources</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">People operations, culture, and team support</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Finance</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">Financial planning, analysis, and business modeling</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-oasis-green-800">Design</td>
                        <td className="px-6 py-4 text-sm text-oasis-green-800">UI/UX, visual design, and user experience</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Examples of Direct Experience */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">Examples of Direct Experience</h2>
                <p className="text-oasis-green-800 mb-6">
                  Based on our onboarding and ongoing tasks, here are concrete examples of what you can expect to work with.
                </p>

                {/* General Activities */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-oasis-green-600 mb-4">General (Everyone Participates)</h3>
                  <p className="text-oasis-green-800 mb-6 text-sm">
                    These activities apply to all interns regardless of function.
                  </p>

                  {/* Communication & Collaboration */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-oasis-green-800 mb-4">Communication & Collaboration</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">Slack</h5>
                            <p className="text-xs text-oasis-green-800/80">Primary workspace for DMs, channels, and team coordination; install on phone and configure notifications</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">WhatsApp</h5>
                            <p className="text-xs text-oasis-green-800/80">Team channels for quick collaboration and communication</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">Avenger profiles (Notion)</h5>
                            <p className="text-xs text-oasis-green-800/80">Create and maintain your team profile with role, working style, communication preferences, and contact info</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">Time logging</h5>
                            <p className="text-xs text-oasis-green-800/80">Weekly time tracking and reflection on what you focused on (every Friday)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Testing */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-oasis-green-800 mb-4">Product Testing</h4>
                    <p className="text-oasis-green-800 mb-4 text-sm">Everyone contributes to testing and improving Oasis. This includes:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">Oasis browser</h5>
                            <p className="text-xs text-oasis-green-800/80">Install, use as your default browser, and test AI Assistant features (summarization, research, extraction, workflows)</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">NPS surveys</h5>
                            <p className="text-xs text-oasis-green-800/80">Complete product feedback surveys and contribute to establishing internal product baselines</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">Feedback tracking</h5>
                            <p className="text-xs text-oasis-green-800/80">Log structured feedback on what works, what's confusing, where Oasis saves time, and areas for improvement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business & Strategy */}
                  <div>
                    <h4 className="text-lg font-semibold text-oasis-green-800 mb-4">Business & Strategy</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">Business plan</h5>
                            <p className="text-xs text-oasis-green-800/80">Read the full business plan (executive summary, market, competitors, go-to-market, financials, sprints, weekly reports, content pipeline)</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-4 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-oasis-green-800 mb-1 text-sm">Growth frameworks</h5>
                            <p className="text-xs text-oasis-green-800/80">Learn retention metrics like CURR (Current User Retention Rate) and how they drive product decisions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Functional Areas Gallery */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-oasis-green-800 mb-2">Functional Areas</h3>
                  <p className="text-oasis-green-800 mb-6 text-sm">
                    Experience varies by the function(s) you're assigned to. Explore what you can learn in each area.
                  </p>

                  {/* Search and Filter Controls */}
                  <div className="mb-6 flex flex-col sm:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Search functional areas..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 pl-10 border-2 border-oasis-green-600/30 rounded-lg focus:outline-none focus:border-oasis-green-600 text-oasis-green-800 bg-white"
                      />
                      <svg className="absolute left-3 top-2.5 w-5 h-5 text-oasis-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    {/* Filter Dropdown */}
                    <div className="relative">
                      <select
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                        className="px-4 py-2 pr-8 border-2 border-oasis-green-600/30 rounded-lg focus:outline-none focus:border-oasis-green-600 text-oasis-green-800 bg-white appearance-none cursor-pointer"
                      >
                        <option value="all">All Areas</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Product">Product</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Design">Design</option>
                        <option value="Finance">Finance</option>
                        <option value="Human Resources">Human Resources</option>
                      </select>
                      <svg className="absolute right-2 top-2.5 w-5 h-5 text-oasis-green-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Functional Areas Data */}
                  {(() => {
                    const functionalAreas = [
                      {
                        name: 'Marketing',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        ),
                        items: [
                          { title: 'LinkedIn', description: 'Update profile, post about your work, engage with team content, participate in the LinkedIn focus group, connect with team members' },
                          { title: 'Social media', description: 'Follow Kahana channels (LinkedIn, X, Instagram, YouTube, TikTok), engage with content, support campaigns' },
                          { title: 'Product Hunt', description: 'Create profile, follow the team, participate in launch preparation and supporter outreach' },
                          { title: 'Content pipeline', description: 'Blog planning, YouTube video production, content calendars' },
                          { title: 'SEO & analytics', description: 'Looker reports, Google Trends, traffic and performance analysis' }
                        ]
                      },
                      {
                        name: 'Sales',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        ),
                        items: [
                          { title: 'Lead generation', description: 'Identify prospects, build lists, outreach via Apollo and email' },
                          { title: 'CRM', description: 'HubSpot setup, lead enrichment (Clay), pipeline management' },
                          { title: 'Website intelligence', description: 'Warmly for visitor identification and intent signals' },
                          { title: 'Outreach', description: 'Enterprise solutions architect connections, meeting requests, demo scheduling' }
                        ]
                      },
                      {
                        name: 'Product',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        ),
                        items: [
                          { title: 'User research', description: 'Mixpanel dashboards, funnel analysis, user journey mapping' },
                          { title: 'Product strategy', description: 'GTM (go-to-market) project charter, user journey framework' },
                          { title: 'Feedback synthesis', description: 'Review NPS, feedback forms, and usage data to inform priorities' },
                          { title: 'Roadmap', description: 'Exposure to sprint planning and feature prioritization' }
                        ]
                      },
                      {
                        name: 'Engineering',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        ),
                        items: [
                          { title: 'Codebase', description: 'Local Oasis setup, GitHub, code review' },
                          { title: 'Infrastructure', description: 'AWS (builds, versioning, CI/CD), Supabase (backend, analytics migration)' },
                          { title: 'Analytics', description: 'Mixpanel event tracking, dashboard migration, usage analytics' },
                          { title: 'Product builds', description: 'Chromium, enterprise browser, OTA (over-the-air) updates' }
                        ]
                      },
                      {
                        name: 'Project Management',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        ),
                        items: [
                          { title: 'Sprint coordination', description: 'Sprint planning, story point estimation, velocity tracking' },
                          { title: 'Cross-functional coordination', description: 'Engineering standups, product feedback loops' },
                          { title: 'Onboarding', description: 'Checklist management, automation research, process improvement' }
                        ]
                      },
                      {
                        name: 'Design',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        ),
                        items: [
                          { title: 'UI/UX', description: 'Figma (design system, brand guidelines), product testing for UX' },
                          { title: 'Visual assets', description: 'Thumbnails, screenshots, video creation (Screen Studio)' },
                          { title: 'Brand', description: 'Design system, visual consistency across channels' }
                        ]
                      },
                      {
                        name: 'Finance',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                        items: [
                          { title: 'Payments', description: 'Stripe integration, subscription management' },
                          { title: 'Financial planning', description: 'Business plan sensitivity analysis, unit economics' },
                          { title: 'Reporting', description: 'Finance-specific Google Docs & Sheets' }
                        ]
                      },
                      {
                        name: 'Human Resources',
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        ),
                        items: [
                          { title: 'Team culture', description: 'Company rules, values, guidelines' },
                          { title: 'Onboarding', description: 'New joiner support, Avenger profiles, tool access' },
                          { title: 'Compliance', description: 'SOC 2 policies (coming soon)' }
                        ]
                      }
                    ];

                    // Filter functional areas
                    const filteredAreas = functionalAreas.filter(area => {
                      const matchesSearch = searchQuery === '' || 
                        area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        area.items.some(item => 
                          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
                        );
                      const matchesFilter = selectedArea === 'all' || area.name === selectedArea;
                      return matchesSearch && matchesFilter;
                    });

                    return (
                      <>
                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {filteredAreas.map((area) => (
                            <div
                              key={area.name}
                              className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-6 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300 hover:shadow-lg"
                            >
                              {/* Header with Icon */}
                              <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                                  {area.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-semibold text-oasis-green-800 mb-1">{area.name}</h4>
                                  <p className="text-sm text-oasis-green-800/70">{area.items.length} areas to explore</p>
                                </div>
                              </div>

                              {/* Items List */}
                              <div className="space-y-3">
                                {area.items.map((item, index) => (
                                  <div key={index} className="bg-white/50 rounded-lg p-3 border border-oasis-green-600/10">
                                    <h5 className="font-semibold text-oasis-green-800 text-sm mb-1">{item.title}</h5>
                                    <p className="text-xs text-oasis-green-800/80 leading-relaxed">{item.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* No Results Message */}
                        {filteredAreas.length === 0 && (
                          <div className="text-center py-12 bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl border-2 border-oasis-green-600/20">
                            <p className="text-oasis-green-800">No functional areas found matching your search.</p>
                            <button
                              onClick={() => {
                                setSearchQuery('');
                                setSelectedArea('all');
                              }}
                              className="mt-4 px-4 py-2 bg-oasis-green-600 text-white rounded-lg hover:bg-oasis-green-500 transition-colors text-sm font-semibold"
                            >
                              Clear Filters
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* Tools by Business Function */}
                <div>
                  <h3 className="text-xl font-semibold text-oasis-green-600 mb-4">Tools by Business Function</h3>
                  <p className="text-oasis-green-800 mb-4 text-sm">
                    Tools you may get exposure to, organized by function. Many tools span multiple functions.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-oasis-green-600/20 text-sm">
                      <thead className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-oasis-green-800 uppercase tracking-wider">Tool</th>
                          <th className="px-2 py-3 text-center text-xs font-semibold text-oasis-green-800 uppercase">Marketing</th>
                          <th className="px-2 py-3 text-center text-xs font-semibold text-oasis-green-800 uppercase">Sales</th>
                          <th className="px-2 py-3 text-center text-xs font-semibold text-oasis-green-800 uppercase">Product</th>
                          <th className="px-2 py-3 text-center text-xs font-semibold text-oasis-green-800 uppercase">Engineering</th>
                          <th className="px-2 py-3 text-center text-xs font-semibold text-oasis-green-800 uppercase">Project Mgmt</th>
                          <th className="px-2 py-3 text-center text-xs font-semibold text-oasis-green-800 uppercase">Design</th>
                          <th className="px-2 py-3 text-center text-xs font-semibold text-oasis-green-800 uppercase">Finance</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-oasis-green-600/10">
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Slack</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">WhatsApp</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Notion</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Google Docs & Sheets</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Tally</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Mixpanel</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Figma</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Looker</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Google Trends</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Google Tag Manager</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Screen Studio</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">HubSpot</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Clay</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Warmly</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Apollo</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Wellfound</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">GitHub</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">AWS</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Supabase</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Stripe</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">Product Hunt</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">LinkedIn</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                          <td className="px-2 py-3 text-center"></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-semibold text-oasis-green-800">OnceHub</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                          <td className="px-2 py-3 text-center text-oasis-green-600">✓</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">How It Works</h2>
                
                {/* Community & Structure Overview */}
                <div className="mb-8 bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-6 border-2 border-oasis-green-600/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-oasis-green-600 mb-3">Join a Learning Community</h3>
                      <p className="text-oasis-green-800 mb-3">
                        When you join, you'll become part of a community that includes <strong>other interns</strong> as well as <strong>Kahana team members and leadership</strong>. You'll collaborate, learn together, and get direct access to experienced professionals.
                      </p>
                      <p className="text-oasis-green-800">
                        You'll receive <strong>structured learning plans and assigned tasks</strong> to complete, giving you clear direction while maintaining flexibility. It's not as rigid as traditional school—you have more autonomy and real-world context—but it's more structured than an unstructured community, with clear learning paths and objectives.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Task Structure */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-oasis-green-600 mb-4">Task Structure</h3>
                  <p className="text-oasis-green-800 mb-4 text-sm">Every 2 weeks, you receive:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">A list of tasks</h4>
                          <p className="text-sm text-oasis-green-800/80">Clear, actionable items aligned with your learning objectives</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Instructions</h4>
                          <p className="text-sm text-oasis-green-800/80">Step-by-step guidance to complete each task</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Learning objectives</h4>
                          <p className="text-sm text-oasis-green-800/80">Goals that tie your work to your growth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What You Gain */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-oasis-green-600 mb-4">What You Gain</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Exposure</h4>
                          <p className="text-sm text-oasis-green-800/80">To real startup operations and decision-making</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Hands-on experience</h4>
                          <p className="text-sm text-oasis-green-800/80">In your chosen function(s)</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Skills</h4>
                          <p className="text-sm text-oasis-green-800/80">You can add to your resume and portfolio</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Flexibility</h4>
                          <p className="text-sm text-oasis-green-800/80">To learn without the pressure of paid-internship expectations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* When You're Accepted */}
                <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-6 border-2 border-oasis-green-600/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-oasis-green-600 mb-2">When You're Accepted</h3>
                      <p className="text-oasis-green-800 mb-3">
                        Once accepted, you'll join our <strong>WhatsApp</strong> and <strong>Slack</strong> channels for collaboration and communication with the team.
                      </p>
                      <p className="text-oasis-green-800">
                        After joining WhatsApp and/or Slack, you'll receive a link to the <strong>interactive onboarding checklist</strong>. From there, you will be expected to complete the onboarding tasks, which include setting up your tools, creating your team profile, installing Oasis, and more.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg overflow-hidden border-2 border-oasis-green-600/20 shadow-lg">
                    <Image
                      src="/assets/onboarding-checklist.png"
                      alt="Interactive onboarding checklist showing Day 1 tasks and progress tracking"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </section>

              {/* Applying */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-4">Applying</h2>
                <p className="text-oasis-green-800 mb-6">
                  If this sounds like the right fit for you, we encourage you to apply. We look for curiosity, initiative, and a genuine interest in learning.
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-oasis-green-600 mb-4">What we look for in applicants:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Strong work ethic</h4>
                          <p className="text-sm text-oasis-green-800/80">Reliability and follow-through</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Positive attitude</h4>
                          <p className="text-sm text-oasis-green-800/80">Energy and enthusiasm for learning</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-5 border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-oasis-green-500 to-oasis-green-600 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-oasis-green-800 mb-1">Humility</h4>
                          <p className="text-sm text-oasis-green-800/80">Willingness to learn, ask questions, and grow</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <h2 className="text-2xl font-semibold text-oasis-green-800 mb-6">Frequently Asked Questions</h2>
                {['Compensation & expectations', 'Getting started', 'Learning & support', 'Career & credentials'].map((group) => (
                  <div key={group} className="mb-8">
                    <h3 className="text-lg font-semibold text-oasis-green-600 mb-4">{group}</h3>
                    <div className="space-y-3">
                      {faqItems
                        .filter((item) => item.group === group)
                        .map((item) => {
                          const isOpen = openFaqId === item.id;
                          return (
                            <div
                              key={item.id}
                              id={`faq-${item.id}`}
                              className="bg-gradient-to-br from-[#fef3c7]/30 to-[#7dd3fc]/15 rounded-xl border-2 border-oasis-green-600/20 hover:border-oasis-green-600/40 overflow-hidden transition-all duration-300"
                            >
                              <button
                                type="button"
                                onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:opacity-95 transition-opacity"
                                aria-expanded={isOpen}
                                aria-controls={`faq-${item.id}-answer`}
                                id={`faq-${item.id}-question`}
                              >
                                <h4 className="font-semibold text-oasis-green-800 pr-4">{item.question}</h4>
                                <svg
                                  className={`flex-shrink-0 w-5 h-5 text-oasis-green-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              <div
                                id={`faq-${item.id}-answer`}
                                role="region"
                                aria-labelledby={`faq-${item.id}-question`}
                                className={`transition-all duration-200 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                              >
                                <div className="px-6 pt-5 pb-6 bg-white border-t border-oasis-green-600/15">
                                  <p className="text-[15px] text-oasis-green-800 leading-relaxed">{item.answer}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
                <div className="mt-8 bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl p-6 border-2 border-oasis-green-600/20 text-center">
                  <p className="text-oasis-green-800 mb-4">Still have questions? Apply and we&apos;ll answer them, or <Link href="/contact" className="text-oasis-green-600 font-semibold hover:underline">reach out through our contact form</Link>.</p>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-oasis-green-600 to-oasis-green-500 text-white font-semibold py-2.5 px-6 rounded-lg hover:from-oasis-green-500 hover:to-oasis-green-600 transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </section>

              {/* Footer Note */}
              <div className="text-center text-oasis-green-800 italic mb-24">
                <p>Kahana — Building in public, learning together.</p>
              </div>
          </div>
        </div>
      </main>

      {/* Fixed Apply CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-oasis-green-600/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-oasis-green-600 to-oasis-green-500 text-white font-bold py-4 px-6 rounded-lg hover:from-oasis-green-500 hover:to-oasis-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Apply Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {formModal}

      <Script 
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={handleTallyLoad}
        onError={handleTallyError}
      />
    </>
  );
}
