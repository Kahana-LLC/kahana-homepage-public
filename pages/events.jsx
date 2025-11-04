import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

const upcomingEvents = [
  {
    title: 'Enterprise Security Summit 2024',
    date: 'March 15-16, 2024',
    location: 'San Francisco, CA',
    description: 'Join us for discussions on the latest trends in enterprise browsing security.',
    link: '/contact'
  },
  {
    title: 'Kahana Partner Conference',
    date: 'April 20-21, 2024',
    location: 'New York, NY',
    description: 'Connect with Kahana partners and learn about our latest solutions.',
    link: '/contact'
  },
  {
    title: 'Enterprise Browser Workshop',
    date: 'May 10, 2024',
    location: 'Virtual Event',
    description: 'Learn how to optimize your enterprise browsing experience.',
    link: '/contact'
  }
];

export default function Events() {
  return (
    <>
      <Head>
        <title>Events | Kahana</title>
        <meta
          name="description"
          content="Join Kahana's events to learn about enterprise browsing solutions and connect with industry experts."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#4A5745]">Upcoming Events</h1>
            <p className="mt-4 text-xl text-[#4A5745]">
              Join us at our events to learn about enterprise browsing solutions and connect with experts.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-[#F3F8E4] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#4A5745] mb-2">{event.title}</h3>
                <p className="text-[#728552] mb-2">{event.date}</p>
                <p className="text-[#4A5745] mb-2">{event.location}</p>
                <p className="text-[#4A5745] mb-4">{event.description}</p>
                <Link href={event.link}>
                  <button className="bg-[#788B59] text-white font-bold px-6 py-3 rounded-md hover:bg-[#728552] transition-colors">
                    Learn More About {event.title}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SharedCTA
        title="Can't Make It to an Event?"
        description="Contact us to schedule a personalized demo of our solutions."
        buttonText="Schedule Demo"
        buttonLink="/contact"
      />
    </>
  );
} 