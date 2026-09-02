import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "This platform has completely transformed how we manage our workflow. It's intuitive, powerful, and saves us countless hours.",
    author: {
      name: 'Sarah Johnson',
      role: 'CEO at TechCorp',
      image: '/testimonials/sarah-johnson.jpg',
    },
  },
  {
    id: 2,
    quote: "The automation features are game-changing. We've seen a 40% increase in productivity since implementing this solution.",
    author: {
      name: 'Michael Chen',
      role: 'Operations Director',
      image: '/testimonials/michael-chen.jpg',
    },
  },
  {
    id: 3,
    quote: "Customer support is exceptional, and the platform is constantly evolving with new features that make our work easier.",
    author: {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      image: '/testimonials/emily-rodriguez.jpg',
    },
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-oasis-green-800">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-oasis-green-800 sm:text-4xl">
            Loved by professionals worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-3xl">
                <div className="relative bg-white px-6 py-8 shadow-xl sm:rounded-xl sm:px-8 border border-gray-200">
                  <div className="text-center">
                    <p className="text-lg leading-8 text-oasis-green-800">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-x-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#EDE6D2]">
                        <Image
                          src={testimonials[currentIndex].author.image}
                          alt={testimonials[currentIndex].author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-oasis-green-800">{testimonials[currentIndex].author.name}</div>
                        <div className="text-sm leading-6 text-oasis-green-800">
                          {testimonials[currentIndex].author.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-oasis-green-500 text-white font-bold p-2 hover:bg-oasis-green-700 transition-colors"
              >
                <span className="sr-only">Previous testimonial</span>
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="rounded-full bg-oasis-green-500 text-white font-bold p-2 hover:bg-oasis-green-700 transition-colors"
              >
                <span className="sr-only">Next testimonial</span>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 