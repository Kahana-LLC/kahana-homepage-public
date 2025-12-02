import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavbarDup from '../components/NavbarDup';

export default function ReferencesPage() {
  const references = [
    {
      authors: "O'Keefe, E. L., & Lavie, C. J.",
      year: "2020",
      title: "A hunter-gatherer exercise prescription to optimize health and well-being in the modern world",
      journal: "Journal of Science in Sport and Exercise",
      volume: "3(2)",
      pages: "147-157",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7590991/"
    },
    {
      authors: "Bassett, D. R.",
      year: "2004",
      title: "The Amish paradox",
      journal: "Los Angeles Times",
      date: "January 12",
      url: "https://www.latimes.com/archives/la-xpm-2004-jan-12-he-amish12-story.html"
    },
    {
      authors: "Bastian, B., Tejada Vera, B., Arias, E., Chong, Y., Keralis, J. M., Lipphardt, A., & Lu, L.",
      year: "2020",
      title: "Mortality trends in the United States, 1900–2018",
      journal: "National Center for Health Statistics",
      url: "https://www.cdc.gov/nchs/data-visualization/mortality-trends/index.htm"
    },
    {
      authors: "Fisher, N.",
      year: "2019",
      title: "Americans sit more than anytime in history, and it's literally killing us",
      journal: "Forbes",
      date: "March 6",
      url: "https://www.forbes.com/sites/nicolefisher/2019/03/06/americans-sit-more-than-anytime-in-history-and-its-literally-killing-us/"
    },
    {
      authors: "Park, J. H., Moon, J. H., Kim, H. J., Kong, M. H., & Oh, Y. H.",
      year: "2020",
      title: "Sedentary lifestyle: Overview of updated evidence of potential health risks",
      journal: "Korean Journal of Family Medicine",
      volume: "41(6)",
      pages: "365-373",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7700832/"
    },
    {
      authors: "USAFacts",
      year: "2024",
      title: "Obesity rate nearly triples in United States over last 50 years",
      url: "https://usafacts.org/articles/obesity-rate-nearly-triples-united-states-over-last-50-years/"
    },
    {
      authors: "Centers for Disease Control and Prevention",
      year: "2021",
      title: "National vital statistics system: Series B, No. 21",
      url: "https://www.cdc.gov/nchs/data/public_health/seriesb_21.pdf"
    },
    {
      authors: "Centers for Disease Control and Prevention",
      year: "2024",
      title: "About type 2 diabetes",
      url: "https://www.cdc.gov/diabetes/about/about-type-2-diabetes.html"
    },
    {
      authors: "Evernorth",
      year: "2024",
      title: "Musculoskeletal disorder costs and cares",
      url: "https://www.evernorth.com/articles/musculoskeletal-disorder-costs-and-cares"
    },
    {
      authors: "Centers for Disease Control and Prevention",
      year: "2012",
      title: "Prevalence of doctor-diagnosed arthritis and arthritis-attributable activity limitation — United States, 2010–2012",
      url: "https://www.cdc.gov/pcd/issues/2012/11_0323.htm"
    },
    {
      authors: "Batista-Ferreira, L., Sandy, D. D., Silva, P. C. M. C., Medeiros-Lima, D. J. M., & Rodrigues, B. M.",
      year: "2024",
      title: "Impact of active breaks on sedentary behavior and perception of productivity in office workers",
      journal: "Revista Brasileira de Medicina do Trabalho",
      volume: "22(2)",
      pages: "e20231213",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11452120/"
    },
    {
      authors: "Anthros",
      year: "2024",
      title: "The hidden risks of standing desks",
      url: "https://www.anthros.com/blog-pain/the-hidden-risks-of-standing-desks"
    },
    {
      authors: "International Journal of Epidemiology",
      year: "2025",
      title: "[Article title not accessible]",
      url: "https://academic.oup.com/ije/article/53/6/dyae136/7822310?login=false"
    },
    {
      authors: "Falk, G. E., Mailey, E. L., Okut, H., Rosenkranz, S. K., Rosenkranz, R. R., Montney, J. L., & Ablah, E.",
      year: "2022",
      title: "Effects of sedentary behavior interventions on mental well-being and work performance while working from home during the COVID-19 pandemic: A pilot randomized controlled trial",
      journal: "International Journal of Environmental Research and Public Health",
      volume: "19(11)",
      pages: "6401",
      url: "https://pubmed.ncbi.nlm.nih.gov/35681986/"
    },
    {
      authors: "Meta",
      year: "2024",
      title: "Orion AR glasses",
      url: "https://www.meta.com/emerging-tech/orion/"
    },
    {
      authors: "Mudra Band",
      year: "2024",
      title: "Using neural wristband gestures to interact with AR glasses",
      url: "https://mudra-band.com/blogs/trends/using-neural-wristband-gestures-to-interact-with-ar-glasses"
    },
    {
      authors: "Android Central",
      year: "2024",
      title: "Meta's breakthrough wants to let you control AR glasses just by moving your fingers",
      url: "https://www.androidcentral.com/apps-software/meta/metas-breakthrough-wants-to-let-you-control-ar-glasses-just-by-moving-your-fingers"
    },
    {
      authors: "Dent, S.",
      year: "2024",
      title: "I wore Meta's Orion AR glasses: A wireless taste of a neural future",
      journal: "CNET",
      url: "https://www.cnet.com/tech/computing/i-wore-metas-orion-ar-glasses-a-wireless-taste-of-a-neural-future/"
    },
    {
      authors: "MacRumors Forums",
      year: "2024",
      title: "These gestures are how you control Apple Vision Pro",
      url: "https://spy.macrumors.com/threads/these-gestures-are-how-you-control-apple-vision-pro.2392259/"
    },
    {
      authors: "Apple",
      year: "2024",
      title: "Apple Vision Pro",
      url: "https://www.apple.com/apple-vision-pro/"
    },
    {
      authors: "ZyberVR",
      year: "2024",
      title: "A guide to Apple Vision Pro gestures and controls",
      url: "https://zybervr.com/blogs/news/a-guide-to-apple-vision-pro-gestures-and-controls"
    },
    {
      authors: "Technori",
      year: "2025",
      title: "My thoughts on Xreal One Pro",
      date: "April",
      url: "https://technori.com/2025/04/21947-my-thoughts-on-xreal-one-pro/marcus/"
    },
    {
      authors: "Xreal",
      year: "2024",
      title: "Input and interactions controller documentation",
      url: "https://docs.xreal.com/Input%20and%20Interactions/Controller"
    },
    {
      authors: "Magic Leap",
      year: "2024",
      title: "Magic Leap 2 device overview",
      url: "https://www.magicleap.com/legal/devices-ml2"
    },
    {
      authors: "Magic Leap",
      year: "2024",
      title: "Developer documentation: Hand tracking",
      url: "https://developer-docs.magicleap.cloud/docs/guides/features/hand-tracking/hand-tracking-developer/"
    },
    {
      authors: "Knight, W.",
      year: "2024",
      title: "Snap unveils AR glasses for developers with impressive but impractical design",
      journal: "MIT Technology Review",
      date: "September 17",
      url: "https://www.technologyreview.com/2024/09/17/1104025/snap-spectacles-ar-glasses/"
    },
    {
      authors: "XR Today",
      year: "2024",
      title: "Snap Spectacles 5 review: The latest Snap AR glasses",
      url: "https://www.xrtoday.com/augmented-reality/snap-spectacles-5-review-the-latest-snap-ar-glasses/"
    },
    {
      authors: "Roberts-Islam, M.",
      year: "2024",
      title: "Snap Spectacles 5 redefine AR glasses for huge developer community",
      journal: "Forbes",
      date: "November 25",
      url: "https://www.forbes.com/sites/moinroberts-islam/2024/11/25/snap-spectacles-5-redefine-ar-glasses-for-huge-developer-community/"
    },
    {
      authors: "TechRadar",
      year: "2024",
      title: "Snap Spectacles take the big leap to AR with new glasses, a new OS and lots of gesture-controlled mixed reality",
      date: "September 17",
      url: "https://www.techradar.com/computing/virtual-reality-augmented-reality/snap-spectacles-take-the-big-leap-to-ar-with-new-glasses-a-new-os-and-lots-of-gesture-controlled-mixed-reality"
    },
    {
      authors: "Fink, C.",
      year: "2025",
      title: "Viture launches Luma series, sets its sights on spatial computing",
      journal: "Forbes",
      date: "July 8",
      url: "https://www.forbes.com/sites/charliefink/2025/07/08/viture-launches-luma-series-sets-its-sights-on-spatial-computing/"
    },
    {
      authors: "Viture",
      year: "2024",
      title: "Luma introduction guide",
      journal: "Viture Academy",
      url: "https://academy.viture.com/xr_glasses/luma_introduction"
    },
    {
      authors: "Tom's Guide",
      year: "2025",
      title: "I just saw TCL's AR glasses of the future, and they're arriving sooner than you might think",
      url: "https://www.tomsguide.com/computing/vr-ar/i-just-saw-tcls-ar-glasses-of-the-future-and-theyre-arriving-sooner-than-you-might-think"
    },
    {
      authors: "PR Newswire",
      year: "2024",
      title: "RayNeo X2 AR glasses debut global crowdfunding on Indiegogo with early bird specials, paving the way for a new era of visible AI",
      date: "February 24",
      url: "https://www.prnewswire.com/news-releases/rayneo-x2-ar-glasses-debut-global-crowdfunding-on-indiegogo-with-early-bird-specials-paving-the-way-for-a-new-era-of-visible-ai-302072718.html"
    },
    {
      authors: "RayNeo",
      year: "2024",
      title: "RayNeo launches the world's first AR glasses based artificial intelligence challenge",
      date: "March 18",
      url: "https://www.rayneo.com/blogs/news/rayneo-launches-the-world-s-first-ar-glasses-based-artificial-intelligence-challenge"
    },
    {
      authors: "4Experience",
      year: "2024",
      title: "HoloLens 2 vs HoloLens 1: What's new?",
      url: "https://4experience.co/hololens-2-vs-hololens-1-whats-new/"
    },
    {
      authors: "Pure Infotech",
      year: "2024",
      title: "Microsoft HoloLens 2 tech specs and features",
      url: "https://pureinfotech.com/microsoft-hololens-2-tech-specs/"
    },
    {
      authors: "Microsoft",
      year: "2025",
      title: "HoloLens 2 hardware specifications",
      url: "https://learn.microsoft.com/en-us/hololens/hololens2-hardware"
    },
    {
      authors: "Meta Developers",
      year: "2024",
      title: "WebXR performance best practices",
      url: "https://developers.meta.com/horizon/documentation/web/webxr-perf-bp/"
    },
    {
      authors: "Mozilla Developer Network",
      year: "2024",
      title: "WebXR device API fundamentals",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Fundamentals"
    },
    {
      authors: "Road to VR",
      year: "2024",
      title: "Meta's wireless compute puck problem",
      url: "https://www.roadtovr.com/meta-wireless-compute-puck-problem/"
    },
    {
      authors: "Road to VR",
      year: "2024",
      title: "Meta Orion prototype reveal at Connect 2024",
      url: "https://www.roadtovr.com/meta-orion-prototype-reveal-connect-2024/"
    },
    {
      authors: "Matsuhashi, K., Kanamoto, T., & Kurokawa, A.",
      year: "2020",
      title: "Thermal model and countermeasures for future smart glasses",
      journal: "Sensors",
      volume: "20(5)",
      pages: "1446",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7085683/"
    },
    {
      authors: "Sustainability Directory",
      year: "2024",
      title: "What statistics indicate VR/AR's energy use?",
      url: "https://sustainability-directory.com/question/what-statistics-indicate-vr-ars-energy-use/"
    },
    {
      authors: "ActiveLook",
      year: "2024",
      title: "The power to succeed",
      url: "https://www.activelook.net/news-blog/the-power-to-succeed"
    },
    {
      authors: "STMicroelectronics",
      year: "2024",
      title: "How ultralight AR glasses are redefined with edge AI",
      url: "https://www.st.com/content/st_com/en/st-edge-ai-suite/case-studies/how-ultralight-ar-glasses-are-redefined-with-edge-ai.html"
    },
    {
      authors: "Ambiq",
      year: "2024",
      title: "Why your smart wearable device must run on ultra-low power",
      url: "https://ambiq.com/blog/why-your-smart-wearable-device-must-run-on-ultra-low-power/"
    },
    {
      authors: "HonestWaves",
      year: "2024",
      title: "AI phone battery optimization guide",
      url: "https://honestwaves.com/ai-phone-battery/"
    },
    {
      authors: "Verified Market Reports",
      year: "2024",
      title: "Battery management chips for wearable devices market analysis",
      url: "https://www.verifiedmarketreports.com/product/battery-management-chips-for-wearable-devices-market/"
    },
    {
      authors: "Texas Instruments",
      year: "2025",
      title: "Predictive battery management technology from TI delivers up to 30% longer run time in battery-powered electronics",
      url: "https://www.ti.com/about-ti/newsroom/news-releases/2025/predictive-battery-management-technology-from-ti-delivers-up-to-30-longer-run-time-in-battery-powered-electronics.html"
    },
    {
      authors: "PassionVista",
      year: "2024",
      title: "GenAI in daily productivity: Smart task management and scheduling",
      url: "https://www.passionvista.com/genai-in-daily-productivity-smart-task-management-and-scheduling-2/"
    },
    {
      authors: "Inoru",
      year: "2024",
      title: "AI-powered battery management for mobile energy optimization",
      url: "https://www.inoru.com/blog/ai-powered-battery-management-mobile-energy/"
    },
    {
      authors: "Amity Solutions",
      year: "2024",
      title: "iOS19 AI battery life boost",
      url: "https://www.amitysolutions.com/blog/ios19-ai-battery-life-boost"
    },
    {
      authors: "T&D World",
      year: "2024",
      title: "The role of artificial intelligence in optimizing battery performance",
      url: "https://www.tdworld.com/distributed-energy-resources/energy-storage/article/21283230/the-role-of-artificial-intelligence-in-optimizing-battery-performance"
    },
    {
      authors: "Verizon",
      year: "2024",
      title: "What is the AR cloud and what is it used for?",
      url: "https://www.verizon.com/home/internet/guides/what-is-the-ar-cloud-and-what-is-it-used-for/"
    },
    {
      authors: "Deskin",
      year: "2024",
      title: "The best remote desktop software for stable connection and low latency",
      url: "https://deskin.io/resource/blog/the-best-remote-desktop-software-for-stable-connection-and-low-latency-deskin-remote-desktop"
    },
    {
      authors: "STL Partners",
      year: "2024",
      title: "Edge computing and the metaverse",
      url: "https://stlpartners.com/articles/edge-computing/edge-computing-metaverse/"
    },
    {
      authors: "AirDroid",
      year: "2024",
      title: "Low latency remote desktop solutions",
      url: "https://www.airdroid.com/remote-support/low-latency-remote-desktop/"
    },
    {
      authors: "arXiv",
      year: "2022",
      title: "Edge computing for augmented reality: A survey",
      url: "https://arxiv.org/abs/2203.04358"
    },
    {
      authors: "ScienceDirect",
      year: "2024",
      title: "Edge computing architectures for real-time applications",
      url: "https://www.sciencedirect.com/science/article/pii/S1389128624006765"
    },
    {
      authors: "Nature",
      year: "2025",
      title: "Advanced edge computing frameworks for AR/VR applications",
      url: "https://www.nature.com/articles/s41598-025-93731-w"
    },
    {
      authors: "DFKI",
      year: "2024",
      title: "Augmented reality based on edge computing",
      url: "https://www.dfki.de/fileadmin/user_upload/import/8932_Augmented_Reality_based_on_Edge_Computing.pdf"
    },
    {
      authors: "YouTube",
      year: "2025",
      title: "The next computer? Your glasses | Shahram Izadi | TED",
      date: "April 17",
      url: "https://www.youtube.com/watch?v=gElClXpg4J0"
    },
    {
      authors: "YouTube",
      year: "2025",
      title: "Samsung's Android XR demo",
      url: "https://www.youtube.com/watch?v=UojTvVEFouQ"
    },
    {
      authors: "CNBC TV18",
      year: "2025",
      title: "Samsung smart glasses Haean and Project Moohan XR vs Meta Ray-Ban and Apple Vision Pro",
      date: "March 23",
      url: "https://www.cnbctv18.com/technology/samsung-smart-glasses-haean-project-moohan-xr-meta-ray-ban-apple-vision-pro-19578420.htm"
    },
    {
      authors: "Channel News Australia",
      year: "2025",
      title: "Samsung set to launch AI-powered smart glasses",
      date: "March 24",
      url: "https://www.channelnews.com.au/samsung-set-to-launch-ai-powered-smart-glasses/"
    },
    {
      authors: "Jha, A.",
      year: "2025",
      title: "Samsung Haean smart glasses: Next-gen AI AR wearables",
      journal: "LinkedIn Pulse",
      date: "March 25",
      url: "https://www.linkedin.com/pulse/samsung-haean-smart-glasses-next-gen-ai-ar-wearables-anshuman-jha-mubic"
    },
    {
      authors: "Android Central",
      year: "2025",
      title: "Samsung's Project Moohan: Everything we know",
      url: "https://www.androidcentral.com/gaming/virtual-reality/samsung-glasses"
    },
    {
      authors: "FlatPanels HD",
      year: "2025",
      title: "Samsung's new XR headset may boast higher-res OLED than Apple Vision Pro",
      date: "March 5",
      url: "https://www.flatpanelshd.com/news.php?subaction=showfull&id=1741241625"
    },
    {
      authors: "GSMArena",
      year: "2025",
      title: "Samsung's Project Moohan XR headset appears on Geekbench with Snapdragon XR2+ Gen 2 chip",
      date: "May 26",
      url: "https://www.gsmarena.com/samsungs_project_moohan_xr_headset_appears_on_geekbench_with_snapdragon_xr2_gen_2_chip-news-67975.php"
    },
    {
      authors: "ProVideo Coalition",
      year: "2025",
      title: "Project Moohan: Samsung's XR headset launches this year",
      date: "March 6",
      url: "https://www.provideocoalition.com/project-moohan-samsungs-xr-headset-launches-this-year/"
    },
    {
      authors: "XR Today",
      year: "2025",
      title: "Microsoft to transition away from HoloLens, mixed reality hardware",
      date: "February 16",
      url: "https://www.xrtoday.com/mixed-reality/microsoft-to-transition-away-from-hololens-mixed-reality-hardware/"
    },
    {
      authors: "Microsoft",
      year: "2025",
      title: "Azure mixed reality cloud services overview",
      url: "https://learn.microsoft.com/en-us/windows/mixed-reality/develop/mixed-reality-cloud-services"
    },
    {
      authors: "RCP Magazine",
      year: "2025",
      title: "Microsoft confirms end of HoloLens mixed reality hardware",
      date: "February 13",
      url: "https://rcpmag.com/articles/2025/02/14/microsoft-confirms-end-of-hololens-mixed-reality-hardware.aspx"
    },
    {
      authors: "Directions on Microsoft",
      year: "2025",
      title: "Microsoft is finally nixing its Mesh mixed-reality efforts",
      date: "July 13",
      url: "https://www.directionsonmicrosoft.com/microsoft-is-finally-nixing-its-mesh-mixed-reality-efforts/"
    },
    {
      authors: "CloudThat",
      year: "2025",
      title: "Building mixed reality solutions in Azure: A comprehensive guide",
      date: "March 6",
      url: "https://www.cloudthat.com/resources/blog/building-mixed-reality-solutions-in-azure-a-comprehensive-guide/"
    },
    {
      authors: "YouTube",
      year: "2025",
      title: "Microsoft Azure Mixed Reality demonstration",
      url: "https://www.youtube.com/watch?v=dtp6b76pMak&t=1358s"
    },
    {
      authors: "HulkApps",
      year: "2024",
      title: "Navigating the evolution of Magic Leap: From AR devices to technology licensing",
      date: "May 5",
      url: "https://www.hulkapps.com/blogs/ecommerce-hub/navigating-the-evolution-of-magic-leap-from-ar-devices-to-technology-licensing"
    },
    {
      authors: "Magic Leap",
      year: "2024",
      title: "Announcing a new Magic Leap & Google partnership to advance AR",
      date: "May 29",
      url: "https://www.magicleap.com/newsroom/magic-leap-and-google-partnership"
    },
    {
      authors: "XR Today",
      year: "2023",
      title: "Meta takes 'Magic Leap' in IP licensing talks, FT reports",
      date: "June 4",
      url: "https://www.xrtoday.com/augmented-reality/meta-takes-magic-leap-in-ip-licencing-talks/"
    },
    {
      authors: "Silicon Angle",
      year: "2023",
      title: "Meta reportedly in talks with Magic Leap for IP licensing and manufacturing",
      date: "May 20",
      url: "https://siliconangle.com/2023/05/21/meta-reportedly-talks-magic-leap-ip-licensing-manufacturing/"
    },
    {
      authors: "XR Today",
      year: "2024",
      title: "RayNeo X2 AR glasses review: The smart glasses of the future",
      date: "July 25",
      url: "https://www.xrtoday.com/reviews/rayneo-x2-ar-glasses-review-the-smart-glasses-of-the-future/"
    }
  ];

  const formatReference = (ref) => {
    let formatted = `${ref.authors} (${ref.year}`;
    
    if (ref.date) {
      formatted += `, ${ref.date}`;
    }
    
    formatted += `). ${ref.title}`;
    
    if (ref.journal) {
      formatted += `. ${ref.journal}`;
    }
    
    if (ref.volume) {
      formatted += `, ${ref.volume}`;
    }
    
    if (ref.pages) {
      formatted += `, ${ref.pages}`;
    }
    
    formatted += `.`;
    
    return formatted;
  };

  return (
    <>
      <Head>
        <title>References: The Future of Ergonomic Work | Kahana Browser</title>
        <meta name="description" content="Complete references and citations for The Future of Ergonomic Work white paper." />
      </Head>

      <NavbarDup />

      <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-[#66C2BE] mb-2 sm:mb-3">White Paper References</h2>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 lg:text-5xl mb-4 sm:mb-6">
              References
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-2">
              Complete bibliography for "The Future of Ergonomic Work" white paper
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-4 sm:p-6 lg:p-8">
            <div className="space-y-4 sm:space-y-6">
              {references.map((ref, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 sm:pb-4 last:border-b-0">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#66C2BE] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-3 sm:mr-4 mt-0.5 sm:mt-1">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                        {formatReference(ref)}
                      </p>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#66C2BE] hover:text-[#4A9E9A] text-xs sm:text-sm mt-2 inline-block transition-colors break-all"
                      >
                        {ref.url}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center px-4">
            <Link
              href="/white-paper-future-of-ergonomic-work"
              className="inline-flex items-center px-4 sm:px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white !text-white bg-[#66C2BE] hover:bg-[#4A9E9A] transition-colors no-underline w-full sm:w-auto justify-center"
              style={{ color: 'white' }}
            >
              Read Full White Paper
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
