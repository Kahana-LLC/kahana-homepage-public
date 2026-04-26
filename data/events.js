export const EVENTS = [
  {
    slug: "where-productivity-and-security-collide-masterclass",
    title: "The Greatest AI Threat is Your Team",
    subtitle:
      "Where Productivity and Security Collide: A Masterclass for Business Leaders on AI, Risk, and Control",
    eventType: "Live masterclass",
    dateLabel: "May 2026",
    durationLabel: "~60 minutes",
    presenters: "Presented by Everyday Business Leaders & Kahana",
    speakers: [
      {
        name: "Gregory Gray",
        role: "Everyday Business Leaders",
        image: "/images/about/gregorygrayheadsht.jpg",
        linkedin: "https://www.linkedin.com/in/gregorygray00/",
        website: "https://www.everydaybusinessleader.com/",
      },
      {
        name: "Adam Kershner",
        role: "Kahana",
        image: "/images/about/adam-kershner.jpg",
        linkedin: "https://www.linkedin.com/in/adam-kershner/",
        website: null,
      },
    ],
    location: "Virtual Event",
    featuredImage: "/assets/oasis-browser-preview.png",
    registrationUrl: "https://tally.so/r/VL9vbg",
    description:
      "A plain-language live session for owners and leaders on balancing AI productivity gains with security controls and data leakage prevention.",
    heroIntro:
      "We all want AI and automation to remove real work from our day. This session starts with that ambition, then gets practical about what it takes when productivity and security collide in the real world.",
    narrative:
      "Businesses are under pressure to move faster with AI, but those same tools can quietly create policy gaps, shadow IT, and data risk. Most activity happens where teams already work: SaaS, AI assistants, agents, and everyday workflows.",
    outcomes: [
      "A clearer picture of where AI friction lives in your organization, especially the tradeoff between speed and control.",
      "Practical language to discuss shadow AI, data boundaries, and good-enough governance without killing momentum.",
      "An understanding of where work and leaks happen in modern stacks, and what to ask vendors or internal teams next.",
      "Live Q&A to pressure-test how this applies to your industry and operating model.",
    ],
    included: [
      "~60-minute masterclass and moderated Q&A",
      "Founder pricing opportunity for Oasis Enterprise Browser",
      "Complimentary Productivity & Security Diagnosis with practical AI-safe automation priorities across core business functions",
    ],
    founderStory: {
      name: "Adam Kershner",
      role: "CEO & Founder, Kahana",
      image: "/images/about/adam-kershner.jpg",
      linkedin: "https://www.linkedin.com/in/adam-kershner/",
      intro:
        "Adam built his career inside IT teams at a billion-dollar CPG company, where he first witnessed how quickly security gaps compound when the tools people rely on are not built with security in mind.",
      quote: [
        "I'll never forget the first time I saw a company get hacked and held hostage from the inside. Training and leadership commitment help, but they are not enough.",
        "Hackers are unpredictable, and exploitation keeps getting more advanced, especially in the age of AI. We are all human, and human error is still a common root cause of breaches.",
        "Today I am focused on Oasis: a managed enterprise browser for how modern organizations access software. Instead of treating device ownership as the only control layer, Oasis puts governance in the browser, where work actually happens.",
      ],
    },
    testimonials: [],
  },
];

export function getEventBySlug(slug) {
  return EVENTS.find((event) => event.slug === slug);
}
