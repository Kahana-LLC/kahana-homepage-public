import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: 'June 15-16, 2025',
      title: 'Kahana Security Summit 2025',
      location: 'San Francisco, CA',
      description: 'Join us for our annual security summit featuring industry experts, product announcements, and hands-on workshops.',
      registrationLink: '#',
      type: 'Conference',
      isVirtual: false
    },
    {
      date: 'May 1, 2025',
      title: 'Enterprise Browser Innovation Webinar',
      location: 'Virtual',
      description: 'Learn about the latest innovations in enterprise browsing and how they are reshaping workplace security.',
      registrationLink: '#',
      type: 'Webinar',
      isVirtual: true
    },
    {
      date: 'April 10, 2025',
      title: 'Zero Trust Architecture Workshop',
      location: 'New York, NY',
      description: 'A hands-on workshop exploring zero trust implementation strategies using the Kahana platform.',
      registrationLink: '#',
      type: 'Workshop',
      isVirtual: false
    }
  ];

  const pastEvents = [
    {
      date: 'March 1, 2025',
      title: 'Enterprise Security Forum',
      location: 'London, UK',
      description: 'A gathering of security professionals discussing the future of enterprise browsing security.',
      recordingLink: '#',
      type: 'Conference',
      isVirtual: false
    },
    {
      date: 'February 15, 2025',
      title: 'Product Demo & Q&A Session',
      location: 'Virtual',
      description: 'An interactive session showcasing the latest features of the Kahana Enterprise Browser.',
      recordingLink: '#',
      type: 'Webinar',
      isVirtual: true
    }
  ];

  return (
    <>
      <Head>
        <title>Events - Kahana</title>
        <meta
          name="description"
          content="Join Kahana at our upcoming events, conferences, and webinars. Learn about the latest in enterprise browser security and network with industry professionals."
        />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#0B3B2D] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Events</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Connect with Kahana at industry events, workshops, and webinars. Join us to learn about the future of enterprise browsing.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Upcoming Events */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#0B3B2D] text-white mb-2">
                            {event.type}
                          </span>
                          {event.isVirtual && (
                            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 ml-2">
                              Virtual
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="text-gray-600 mb-4">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      <a
                        href={event.registrationLink}
                        className="inline-block bg-[#0B3B2D] text-white px-6 py-2 rounded-lg hover:bg-[#0A3526] transition-colors"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Past Events</h2>
              <div className="space-y-8">
                {pastEvents.map((event, index) => (
                  <div key={index} className="border-b pb-8 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-gray-500">{event.date}</span>
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                            {event.type}
                          </span>
                          {event.isVirtual && (
                            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              Virtual
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <div className="text-gray-600 mb-2">
                          <span className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <a
                          href={event.recordingLink}
                          className="inline-flex items-center text-[#0B3B2D] hover:underline"
                        >
                          <span>Watch Recording</span>
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Event Inquiries</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Interested in having Kahana speak at your event or want to learn more about our upcoming events?
                </p>
                <div>
                  <h3 className="font-semibold">Contact Our Events Team</h3>
                  <a
                    href="mailto:events@kahana.co"
                    className="text-[#0B3B2D] hover:underline"
                  >
                    events@kahana.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 