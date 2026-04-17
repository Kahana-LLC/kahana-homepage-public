import Head from 'next/head';
import Link from 'next/link';

const AppendixPage = () => {
  const technologies = [
    {
      name: "Meta (Orion AR Glasses)",
      description: "Meta's Orion AR Glasses stand out for their engineering-first approach: they use ultra-bright micro-LED displays paired with highly thermally conductive silicon carbide (SiC) lenses for a wide, immersive 70° field of view. The glasses are built with a magnesium alloy frame, chosen for its durability and remarkable heat dissipation. Most heat and all heavy compute tasks are shifted to a custom external compute puck, leaving the glasses lightweight (~98g) and comfortable for extended use. Another unique differentiator is Orion's neural EMG wristband, which allows for subtle, nearly invisible gesture controls based on muscle activity, enabling tap, flick, pinch, and more. Orion supports multimodal interaction via an advanced AI voice assistant (Meta AI), eye tracking, and full hand tracking.",
      strengths: [
        "Enables advanced spatial computing and real-time AR overlays for productivity, design, and collaboration.",
        "Facilitates hands-free, intuitive control using neural/EMG and gaze-based interaction.",
        "Can support immersive, multi-user AR work scenarios, remote AR assistants, and developer access to neural input methods.",
        "Stays comfortable and cool for longer periods due to material and compute separation."
      ],
      limitations: [
        "It is not commercially available, only accessible to select developers as of now.",
        "Text rendering and app ecosystem are not yet at the level needed for polished, seamless, all-day mobile productivity."
      ]
    },
    {
      name: "Apple (Vision Pro)",
      description: "Apple Vision Pro delivers a best-in-class visual experience with dual, extremely high-density micro-OLED displays (totaling over 23 million pixels) and integrates LiDAR for precision spatial mapping. The headset uses dual internal fans (active cooling) and an aluminum chassis for effective heat management, making it stable for intensive mixed-reality sessions. Its unique features include advanced camera-based hand/eye tracking (for pinch, drag, tap, etc.), immersive spatial audio, and deep integration with the Apple ecosystem, providing a multi-window \"infinite canvas.\"",
      strengths: [
        "Acts as a powerful virtual desktop, with rich multi-app productivity, video editing, 3D design, and VR/AR meetings.",
        "Provides extremely accurate voice control via Siri, with offline mode for system navigation and dictation.",
        "Remains performant and cool through long sessions thanks to its cooling system."
      ],
      limitations: [
        "They aren't true glasses and are a heavy headset (600–650g).",
        "Best suited to stationary, desk-optional setups (home, office, conferencing); not for mobile, desk-free work throughout the day.",
        "Price and bulk impede mainstream, all-day, on-the-go use."
      ]
    },
    {
      name: "Xreal (One Pro)",
      description: "The Xreal One Pro excels with its ultra-lightweight build (87g), consumer-friendly field of view (57° with Sony micro-OLED displays at 120Hz), and a passive magnesium alloy frame that stays cool on the head. Computing is handled on-device via the X1 chip for basic AR, with heavier workloads (apps, browser, AI) offloaded to a paired smartphone or PC connected by USB-C. Touchpads on the glasses support swipe, tap, and pinch—the company is developing advanced camera-based hand gesture input (\"Xreal Eye\").",
      strengths: [
        "Provides vivid, comfortable big-screen AR experiences for movies, gaming, and travel productivity.",
        "Lightweight and cool for long casual use.",
        "Portable, plug-and-play with a range of devices, making it ideal for remote displays and media."
      ],
      limitations: [
        "Limited to 3DoF (rotational), lacks full spatial AR tracking and room anchoring.",
        "No native, on-glasses AI voice assistant—relies on the host device for AI features.",
        "Not built for full desk-free laptop replacement or complex, standalone workflows."
      ]
    },
    {
      name: "Magic Leap (Magic Leap 2)",
      description: "Magic Leap 2 uses waveguide optics and dynamic dimming (to maintain clarity in varying ambient light), paired with a high-contrast 70° FOV AR display. This unit operates with heavy-duty processing in a tethered compute pack (AMD CPU/GPU) worn on the body, and uses optical hand tracking (26 finger joints per hand), as well as controllers, for precise spatial input. The main unit is cooled through a vented frame design, and the external compute pack employs active venting to regulate performance during intensive tasks.",
      strengths: [
        "Excels at enterprise-grade use: field service AR overlays, medical training, 3D CAD reviews, and remote expert support.",
        "Robust, privacy-focused, offline-capable system-wide voice controls and app navigation.",
        "Suitable for indoor/outdoor environments thanks to dynamic dimming."
      ],
      limitations: [
        "Not ultra-mobile: the glasses plus external compute pack (~260g + pack) are too burdensome for all-day wear and desk-free mobility.",
        "Not aimed at lightweight knowledge or office work."
      ]
    },
    {
      name: "Snap (Spectacles 5)",
      description: "Snap Spectacles 5 are built for expressive, always-on AR creativity—featuring an all-in-frame dual Snapdragon processor, full-color 46° waveguide displays, and a passive titanium vapor chamber for effective short-session heat management. The glasses stand out for multi-camera hand tracking, context-aware AI voice assistant (using Snap/OpenAI/Gemini), and no need for tethers or external compute.",
      strengths: [
        "Social, creative AR: real-time content creation, rapid AR lens prototyping, hands-free social sharing, and AI-augmented AR play.",
        "Lightweight AI-driven voice/context response, multi-language quick queries.",
        "Powerful as a platform for AR creativity bursts and social engagement."
      ],
      limitations: [
        "Short AR battery (<1hr), limited FOV/pixel density, not suitable for professional, desk-free extended work.",
        "App ecosystem and use cases optimized for creative/social, not sustained productivity."
      ]
    },
    {
      name: "Viture (Luma Ultra XR + Neckband)",
      description: "Viture combines slick design and sharp visuals, projecting a 152\" equivalent screen via high-contrast Sony micro-OLEDs; advanced spatial interaction (6DoF, hand tracking) is unlocked with a lightweight neckband add-on, which also provides extended battery and cooling (by offloading heavy compute). The glasses remain ultra-light (77–83g), and the neckband manages heat (acting as a sink for both compute and battery). Display includes RGB+depth cameras for environmental understanding.",
      strengths: [
        "The best portable big-screen/virtual desktop for travel, media, and on-the-go presentations.",
        "Immersive, hands-free gameplay, cinema, and multi-screen extension via neckband.",
        "Very comfortable and cool for long sessions due to compute separation."
      ],
      limitations: [
        "Full AR and advanced hand/spatial tracking only available with the neckband (external compute), restricting standalone mobility.",
        "Pro-level AR productivity and application support remain limited; not a full laptop/desktop replacement."
      ]
    },
    {
      name: "RayNeo (X2 AR Glasses)",
      description: "RayNeo X2 AR Glasses are true standalone, all-in-one AR, using full-color micro-LED waveguides (1000–1500 nits) for daytime visibility, Snapdragon XR2 for on-glasses compute, and a suite of features including 6DoF head/gesture tracking, a touchpad, and an optional \"smart ring\" controller. The frame houses micro-heatsinks for heat management, efficiently keeping the 119g device comfortable for typical 2–3 hour sessions.",
      strengths: [
        "Hands-free real-time translation, AR navigation, AI (ChatGPT-integrated) info access, object recognition, and scene context—directly on glasses.",
        "No tethers or external compute required for core features.",
        "Suited for on-the-go learning and smart navigation in cities, with robust AI voice support."
      ],
      limitations: [
        "Not ideal for long desk-free workdays—battery lasts about 2–3 hours with intensive AR use.",
        "Slightly bulkier/heavier than all-day-wear \"smart glasses,\"",
        "App ecosystem and pro productivity features are still nascent."
      ]
    },
    {
      name: "Microsoft (HoloLens 2)",
      description: "While HoloLens 2 has been discontinued, it will still be highlighted here due to its impact on the AR landscape. Microsoft's HoloLens 2 uses a 52° FOV see-through waveguide display with 2K resolution per eye, delivers best-in-class spatial mapping, and offers articulated 25-point hand tracking with wrist-tap menus. It's fully standalone (no puck, no phone), running on a Snapdragon 850 SoC and HPU 2.0, 8GB RAM, and 128GB storage. Passive venting in the industrial headband ensures sustained, safe operation, but at a much higher weight (566g).",
      strengths: [
        "Excels in industrial, field, and healthcare AR: hands-free overlays for repair, training, remote assist, and complex 3D visualization.",
        "Integrates deeply with Windows, Teams, Azure, and enterprise productivity/cloud software.",
        "Designed for rugged field use, with robust physical and software architecture."
      ],
      limitations: [
        "Too heavy and bulky for continuous, all-day office or consumer desk-free knowledge work.",
        "Fixed focal display (2m focus) can cause visual strain; not optimal for fine text-heavy work.",
        "High cost and enterprise-first distribution put it out of reach for most consumer or mainstream mobile productivity contexts."
      ]
    },
    {
      name: "Google & Samsung (Project HAEAN Smart Glasses)",
      description: "Samsung's Project HAEAN smart glasses prioritize AI-driven functionality: they feature a 12-megapixel Sony IMX681 CMOS sensor with Qualcomm Snapdragon AR1 chipset for computer vision processing at just 50 grams. The glasses use an in-lens display system with integrated speakers and emphasize gesture-based controls through built-in cameras that detect hand movements, facial recognition, and QR codes without requiring physical buttons. Deep integration with Google's Android XR platform and Gemini AI enables real-time translation, contextual information overlay, navigation assistance, and voice-controlled interactions. The lightweight design prioritizes all-day wearability while maintaining natural interaction through advanced AI processing and gesture recognition.",
      strengths: [
        "Delivers seamless real-time translation and contextual AI assistance for daily tasks",
        "Enables hands-free navigation, QR code payments, and information lookup through gesture control",
        "Maintains regular eyewear form factor at 50g for comfortable all-day wear",
        "Provides natural voice and gesture interaction without requiring controllers or complex setup"
      ],
      limitations: [
        "Still in development with no confirmed commercial release date",
        "Limited field of view compared to full AR headsets",
        "Battery life and processing power constraints due to lightweight design priorities",
        "Designed for day-to-day personal tasks, rather than work-related productivity"
      ]
    },
    {
      name: "Samsung (Project Moohan Headset)",
      description: "Samsung's Project Moohan headset delivers premium display engineering: it uses Sony's 4K micro-OLED panels with 3,552 × 3,840 resolution per eye, achieving over 3,800 PPI pixel density and 1,000-nit brightness with 96% DCI-P3 color gamut coverage. The headset is powered by Qualcomm's Snapdragon XR2+ Gen 2 processor with 16GB RAM, featuring pancake lenses for optical clarity, built-in eye tracking, and high-resolution passthrough cameras for mixed reality. Running Google's Android XR platform with deep Gemini AI integration, it seamlessly transitions between fully immersive VR environments and AR overlays while providing access to the full Android app ecosystem through spatial computing interfaces.",
      strengths: [
        "Enables premium mixed reality experiences with exceptional visual fidelity and color accuracy",
        "Supports seamless transitions between VR immersion and AR passthrough for productivity workflows",
        "Provides access to Android app ecosystem with spatial computing and AI-enhanced interactions",
        "Delivers high-performance processing for demanding VR/AR applications and multitasking"
      ],
      limitations: [
        "Heavier than standalone glasses for extended wear",
        "No confirmed commercial release date or pricing information",
        "Battery life constraints typical of high-performance standalone VR/AR headsets"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Appendix: Key AR Technologies - The Future of Ergonomic Work White Paper</title>
        <meta name="description" content="Detailed technical breakdown of key AR technologies and their capabilities for desk-free productivity." />
        <meta name="keywords" content="AR glasses, augmented reality, ergonomic work, technology comparison, Meta Orion, Apple Vision Pro, Magic Leap" />
        <link rel="canonical" href="https://kahana.co/appendix-future-of-ergonomic-work-white-paper" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-[#E3DFF1] via-white to-[#8CB7D0]">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Appendix: Key AR Technologies
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              This Appendix is dedicated to a more in-depth, technical breakdown of some of the most prominent AR technologies introduced to the world thus far, from prototypes to commercially available products.
            </p>
                               <Link
                     href="/white-papers/the-future-of-ergonomic-work"
                     className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white !text-white bg-[#66C2BE] hover:bg-[#4A9E9A] transition-colors no-underline"
                     style={{ color: 'white' }}
                   >
                     Download Whitepaper
                   </Link>
                   <div className="mt-4">
                     <Link
                       href="/blog/the-future-of-ergonomic-work-improving-health-2025"
                       className="text-[#66C2BE] hover:text-[#4A9E9A] font-medium underline"
                     >
                       Read the full paper →
                     </Link>
                   </div>
          </div>

          {/* Technologies List */}
          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#66C2BE] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{tech.name}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{tech.description}</p>
                    
                    {/* Strengths */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        What {tech.name.split(' ')[0]} does well:
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {tech.strengths.map((strength, sIndex) => (
                          <li key={sIndex} className="text-gray-700">{strength}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {tech.name.split(' ')[0]}'s limitations:
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {tech.limitations.map((limitation, lIndex) => (
                          <li key={lIndex} className="text-gray-700">{limitation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Explore the Complete Analysis?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Download our comprehensive white paper to discover the full technical analysis, market insights, and future roadmap for AR glasses technology.
              </p>
              <Link
                href="/white-papers/the-future-of-ergonomic-work"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-[#21706c] hover:bg-[#15514f] transition-colors no-underline"
                style={{ color: 'white' }}
              >
                <span style={{ fontWeight: 'bold', color: 'white' }}>Download White Paper</span>
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="/references-future-of-ergonomic-work-white-paper" className="text-[#66C2BE] hover:text-[#4A9E9A] font-medium">
              View References
            </Link>
                               <Link href="/blog/the-future-of-ergonomic-work-improving-health-2025" className="text-[#66C2BE] hover:text-[#4A9E9A] font-medium">
                     Read Blog Series
                   </Link>
            <Link href="/white-papers/the-future-of-ergonomic-work" className="text-[#66C2BE] hover:text-[#4A9E9A] font-medium">
              Download White Paper
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppendixPage;
