// Default avatar placeholder
const DEFAULT_AVATAR =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

const authors = {
  "Adam Kershner": {
    name: "Adam Kershner",
    role: "CTO",
    bio: "I'm the CTO of Kahana, where I lead our mission to give you an Oasis to nurture your dreams and ideas. No data gathering. Ad-free. Private. Anonymous. Secure. While delivering industry-leading productivity features like voice-to-text, agentic commands, and AI-integrated at the core.",
    linkedinProfile: "https://www.linkedin.com/in/adam-kershner/",
    // avatar: "/images/authors/adam-kershner.jpg",
  },
  "Jordan Kern": {
    name: "Jordan Kern",
    role: "CMO",
    bio: "Jordan is the CMO of Kahana, where he leads marketing and sales strategy. With expertise in SaaS and performance marketing, he focuses on driving business growth through strategic team leadership and data-driven decision making.",
    linkedinProfile: "https://www.linkedin.com/in/jordankern/",
  },
  "Vruksha Joshi": {
    name: "Vruksha Joshi",
    role: "Engineer",
    bio: "I'm self-motivated and really enjoy working towards a goal. What drives me is the sense of progress and the satisfaction of achieving something meaningful. To reach my goals, I focus on building confidence in my abilities and trusting the process. I believe that consistent effort, along with learning from challenges along the way, will get me to where I want to be.",
    linkedinProfile: "https://www.linkedin.com/in/vruksha-joshi-576a9818b/",
  },
  "Jescetta Joy": {
    name: "Jescetta Joy",
    role: "Product Strategy",
    bio: "Jescetta brings extensive product management experience from Walmart and holds a Master of Engineering Management from Duke University. As a Certified Scrum Product Owner (CSPO), she specializes in crafting purposeful innovations that drive meaningful impact. Her approach combines strategic thinking with a deep commitment to solving real-world problems that make a difference in people's lives.",
    linkedinProfile: "https://www.linkedin.com/in/jescetta-joy/",
  },
  "Sonakshi Singh": {
    name: "Sonakshi Singh",
    role: "Product Marketing Manager",
    bio: "Sonakshi is a Product Marketing Manager at Kahana, where she blends customer insights, creative storytelling, and strategic thinking to drive product adoption and user engagement. With experience spanning B2B SaaS, D2C, and AI-driven platforms, she is passionate about crafting compelling go-to-market strategies that resonate with users and fuel sustainable growth.",
    linkedinProfile: "https://www.linkedin.com/in/sonakshisingh27/",
  },
  "Venkesh Agarwal": {
    name: "Venkesh Agarwal",
    role: "Product & Analytics",
    bio: "Venkesh Agarwal is a Product Manager at Kahana, where he supports cross-functional initiatives that blend product development with data-driven product marketing. He focuses on campaign strategy, performance analytics, and user-centric solutions that drive engagement and growth. With a foundation in technical execution and strategic insight, Venkesh helps shape products that resonate deeply with users and scale effectively in the market.",
    linkedinProfile: "https://www.linkedin.com/in/venkesh-agarwal/",
  },
  "Vedant Gupta": {
    name: "Vedant Gupta",
    role: "Product Manager",
    bio: "Vedant is a Product Manager at Kahana, where he leads product development and go-to-market strategy for secure enterprise browser solutions. Combining technical insight with customer empathy, he partners with engineering and design to deliver intuitive, scalable products that enhance enterprise security and user productivity.",
    linkedinProfile: "https://www.linkedin.com/in/vedantgupta23/",
    avatar: "/assets/headshots/vedant_gupta.jpg",
  },
  "Shivangi Chamoli": {
    name: "Shivangi Chamoli",
    role: "Data Analyst",
    bio: "Shivangi is a Data Analyst at Kahana, working at the intersection of data and marketing to drive user engagement, product adoption, and business growth. She analyzes user behavior and platform interaction data to uncover insights that shape marketing strategies, optimize onboarding and retention, and inform go-to-market initiatives. Collaborating with product, strategy, and marketing teams, she helps align data-driven decisions with customer needs and business outcomes.",
    linkedinProfile: "https://www.linkedin.com/in/shivangichamoli/",
  },
  "Vinit Juneja": {
    name: "Vinit Juneja",
    role: "Product Manager",
    bio: "Vinit is a product manager at Kahana, where he researches more about AI tools and customer insights and uses strategic thinking to drive product adoption and user engagement. With experience in creating AI automated tools, working with big tech Companies like Samsung, he is passionate about the product and obsessed with how customers think!",
    linkedinProfile: "https://www.linkedin.com/in/vinitjuneja",
  },
  "Saideep Pajjuri": {
    name: "Saideep Pajjuri",
    role: "Software Engineer",
    bio: "Saideep is a software engineer at Kahana who thrives on solving complex problems and bringing innovative solutions to life across both hardware and software domains. Known for his passion for optimizing systems and driving ideas from concept to reality, he is always excited to take on new challenges and continuously learn and grow along the way.",
    linkedinProfile: "https://www.linkedin.com/in/saideep-pajjuri/",
  },
  "Shalvi Save": {
    name: "Shalvi Save",
    role: "Product Manager",
    bio: "Shalvi is a dynamic product manager fueled by meaningful challenges that ignite innovation and create positive impact. Holding a degree in Engineering Management from Duke University, she leverages her expertise in Lean Manufacturing and Supply Chain Management to drive efficient, high-impact solutions. With a focus on growth, learning, and real-world problem-solving, Shalvi sets ambitious, outcome-oriented goals to build products that transform industries and improve lives.",
    linkedinProfile: "https://www.linkedin.com/in/shalvi-save/",
    avatar: "/assets/headshots/shalvi_save.jpg",
  },
  "Fahiza Syed": {
    name: "Fahiza Syed",
    role: "Product Manager",
    bio: "Fahiza is an innovative product manager passionate about tackling complex challenges in Generative AI, APIs, product management, contact centers, pricing, and monetization. With 5 years of SaaS experience in software development and technical product management, including a proven track record at Verizon India, she has driven significant cost savings, accelerated go-to-market strategies, and enhanced user experiences through effective cross-functional collaboration with internal (engineering & UX) and external (sales, marketing) stakeholders. Specializing in Technology Strategy and Product Management, Fahiza sets ambitious, outcome-oriented goals to deliver transformative products that optimize operations and elevate customer experiences.",
    linkedinProfile: "https://www.linkedin.com/in/fahiza-aafreen-syed/",
    avatar: "/assets/headshots/fahiza_syed.jpg",
  },

  "Konika Dhull": {
    name: "Konika Dhull",
    role: "Product and Data Analyst",
    bio: "I am an enthusiast about bridging Computer Science and Business together with a strong interest in product strategy, data analysis, and emerging technologies. Passionate about the intersection of tech and innovation. 2x All-American athlete driven by curiosity and impact.",
    linkedinProfile: "https://www.linkedin.com/in/konika-dhull/",
  },
  "Rishikes Ramachandran": {
    name: "Rishikes Ramachandran",
    role: "Engineer",
    bio: "Rishikes specializes in engineering management, cybersecurity, and AI. Prior to Kahana, Rishikes has experience as a Project Engineer at Advance Energy Solutions and as a Manufacturing Engineer at ZF Wind Power.",
    linkedinProfile: "https://www.linkedin.com/in/rishikes-ramachandran",
    avatar: "/assets/headshots/rishikes_ramachandran.jpg",
  },
  "Hritik Chalse": {
    name: "Hritik Chalse",
    role: "Product Marketing Manager",
    bio: "Hritik is a Product Marketing Manager at Kahana, where he focuses on community engagement and research and development. With a Masters in Engineering Management from Duke University and an undergraduate background in engineering, he is dedicated to advancing innovative technology solutions.",
    linkedinProfile: "https://www.linkedin.com/in/hritik-chalse-56a0261aa/",
    avatar: "/assets/headshots/hritik_chalse.jpg",
  },
  "Nipun Manghi": {
    name: "Nipun Manghi",
    role: "Product Marketing & Business Development",
    bio: "Nipun Manghi is a dynamic professional with expertise spanning product marketing, business development, customer success, and MarTech. With a strong foundation in computer engineering and a Master of Engineering Management from Duke University, Nipun blends technical acumen with strategic storytelling to drive impactful go-to-market strategies and customer engagement. He is passionate about bridging the gap between technology and business, leveraging his experience at Fuqua I&E to deliver innovative solutions and measurable results.",
    linkedinProfile: "https://www.linkedin.com/in/nipunmanghi/",
    avatar: "/assets/headshots/nipun_manghi.jpg",
  },
  "Khyati Bhatia": {
    name: "Khyati Bhatia",
    role: "Strategy",
    bio: "I believe the best strategies start with curiosity and a good cup of chai (tea). Duke Fuqua MMS '25 | Marketing & Business Development Enthusiast | Data-Driven Strategist",
    linkedinProfile: "https://www.linkedin.com/in/khyatibhatia10/",
    avatar: "/assets/headshots/khyati_bhatia.jpg",
  },
  "Jonathan Gans": {
    name: "Jonathan Gans",
    role: "CEO",
    bio: "Biomedical Engineering graduate from Duke University, previously in Deloitte's corporate strategy practice, and renowned Dog Whisperer in the Windy City. Building an ergonomic future of work.",
    linkedinProfile: "https://www.linkedin.com/in/jonathan-gans1/",
    avatar: "/assets/headshots/jonathan_gans.jpg",
  },
};

module.exports = { authors };
