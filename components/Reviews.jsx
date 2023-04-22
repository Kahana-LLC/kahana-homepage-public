import Image from 'next/image';

import avatarImage2 from '../assets/images/avatars/joshSlavinHeadshot.png';

import avatarImage1 from '../assets/images/avatars/oliviaMancusoHeadshot.png';

import avatarImage3 from '../assets/images/avatars/edenGoldHeadshot.png';

import avatarImage4 from '../assets/images/avatars/vivianneJagtHeadshot.png';

import avatarImage5 from '../assets/images/avatars/medicalElinaHeadshot.png';

import avatarImage6 from '../assets/images/avatars/gabrielleJudgeHeadshot.png';

import avatarImage7 from '../assets/images/avatars/tayLaddHeadshot.png';

import { Container } from './Container';

const testimonials = [
  [
    {
      content:
        "I can honestly say that I've never worked with a team that was as helpful and dedicated as the team at Kahana. If you're a digital creator looking for a platform that not only supports your content creation but also helps you achieve your goals, then Kahana is the answer.",
      author: {
        name: 'Olivia Mancuso',
        role: 'Manifestation Coach - 135K on TikTok',
        image: avatarImage1, 
      },
    },
    {
      content:
        "I saw Kahana as an opportunity to share my corporate knowledge because it can help someone avoid needing to get an agent just because they didn't know how to respond to brands.",
      author: {
        name: 'Tay Ladd',
        role: 'The Corporate Creator  - 70K on TikTok',
        image: avatarImage7, 
      },
    },
  ],
  [
    {
      content:
        'I have had a lot of different software companies reach out to me, but there was something about Kahana that really intrigued me. To be able to have people follow along my journey and see what\'s working for me can make such a greater impact for my audience.',
      author: {
        name: 'Eden Gold',
        role: 'Adulting Coach - 50K on TikTok',
        image: avatarImage3,
      },
    },
    {
      content:
        "I'm really excited about my hub. I bet Kahana will grow and become really big. Excited to be a part of it!",
      author: {
        name: 'Medical Elina',
        role: 'Med Student & Creator  - 70K on TikTok',
        image: avatarImage5, 
      },
    },
  ],
  [
    {
      content:
        'I think the Kahana team is onto something here - very exciting to be a part of your community!',
      author: {
        name: 'Vivianne Jagt',
        role: 'MD & Health Creator - 25K on TikTok',
        image: avatarImage4,
      },
    },
    {
      content:
        'Thanks for helping me build out something special!',
      author: {
        name: 'Josh Slavin',
        role: 'Short Form Expert - 800K total followers',
        image: avatarImage2,
      },
    },
    {
      content:
        "This looks awesome! I am pumped to get this going and am super grateful for your help!",
      author: {
        name: 'Gabrielle Judge',
        role: 'Expert on Future of Work - 90K on TikTok',
        image: avatarImage6,
      },
    },
  ],
];

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our Community
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Multi-passionate creators and experts from all over the world 🌎
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {' '}
          {/* <div className="invisible md:visible absolute top-15 -left-7 w-40 h-40 bg-green-100 rounded-full filter blur-3xl  animate-blob"></div> */}
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className=" rounded-xl bg-white p-6 shadow-2xl ">
                      <blockquote className="">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>

                      <figcaption className=" mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>

                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
