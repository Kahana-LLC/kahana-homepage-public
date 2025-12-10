import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const stats = [
  { value: '500+', label: 'Active Users' },
  { value: '50M+', label: 'Files Shared' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '10x', label: 'Faster Collaboration' }
];

const featuredTestimonials = [
  {
    quote: "You instantly get visibility and control in a way that I've never seen before.",
    name: "Emily Heath",
    title: "Former CTSO, Docusign",
    imageUrl: "/testimonials/emily-heath.jpg"
  },
  {
    quote: "We came out of that with a revenue generating ROI delivering tool.",
    name: "Stephen Lowe",
    title: "CIO, Peak Support",
    imageUrl: "/testimonials/stephen-lowe.jpg"
  }
];

export default function CustomerSuccessSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by innovative teams worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join hundreds of companies transforming how they share knowledge
            </p>
          </div>
          
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Featured Testimonials */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                  fill
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="mr-4">
                    <span className="font-semibold text-white">{testimonial.name}</span>
                    {' · '}
                    <span className="text-[#4A5745]">{testimonial.title}</span>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  {testimonial.quote}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/customers"
              className="rounded-md bg-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              See All Customer Stories
            </Link>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world's most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-50 hover:opacity-100 transition-opacity">
              <Image src="/logos/docusign.svg" alt="Docusign" width={158} height={48} />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-50 hover:opacity-100 transition-opacity">
              <Image src="/logos/peak-support.svg" alt="Peak Support" width={158} height={48} />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-50 hover:opacity-100 transition-opacity">
              <Image src="/logos/hendrick.svg" alt="Hendrick Motorsports" width={158} height={48} />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 opacity-50 hover:opacity-100 transition-opacity">
              <Image src="/logos/softmotive.svg" alt="Softmotive" width={158} height={48} />
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 opacity-50 hover:opacity-100 transition-opacity">
              <Image src="/logos/kahana.svg" alt="Kahana" width={158} height={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
