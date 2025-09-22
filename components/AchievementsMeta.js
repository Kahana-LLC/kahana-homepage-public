import Meta from "./Meta";

export default function AchievementsMeta() {
  const title = "Achievements & Gamification | Kahana";
  const description = "Boost user engagement with Kahana's achievement system. Gamify your workspace with badges, leaderboards, and progress tracking to drive productivity and team collaboration.";
  const image = "https://kahana.co/assets/Kahana_Brand_Image.webp";
  const url = "https://kahana.co/features/achievements";
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Kahana Oasis Browser",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Achievement Badges",
        "Progress Tracking",
        "Leaderboards",
        "Streak Tracking",
        "Social Recognition",
        "Team Challenges"
      ]
    }
  };

  return (
    <Meta
      title={title}
      description={description}
      image={image}
      url={url}
      type="website"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
