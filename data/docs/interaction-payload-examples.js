export const PAYLOAD_OPTED_IN = {
  user: {
    role: "user",
    email: "user@example.com",
    locale: "en-US",
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    opt_in_data_collection_use: true,
  },
  client: {
    os: "macOS",
    platform: "desktop",
    browser_name: "Oasis",
    browser_version: "1.0.0",
  },
  prompt: {
    text: "tell me some italian recipes",
    language: "en-US",
    input_tokens: 2970,
  },
  context: {
    org_tier: "free",
    active_tab_url: "about:preferences#privacy",
    active_tab_title: "Settings",
  },
  response: {
    text: "Italian food is incredibly diverse and beloved worldwide! It's all about fresh, high-quality ingredients and simple preparations that let those flavors shine. Here are a few classic Italian recipes to get you started, from pasta to pizza and a fresh appetizer:\n\n### 1. Classic Spaghetti Carbonara\n...",
    latency_ms: 6078,
    output_tokens: 851,
  },
  timestamp: "2026-05-21T20:06:48.876Z",
  session_id: "53e816db-8405-4af5-a591-154d0766c634",
  app_version: "1.0.0",
  interaction_id: "ef6a2670-19bc-4345-8d47-ad922cde045b",
};

export const PAYLOAD_ANONYMIZED_DEFAULT = {
  client: {
    os: "macOS",
    platform: "desktop",
    browser_name: "Oasis",
    browser_version: "1.0.0",
  },
  prompt: {
    text: "tell me some recipes for thai food",
    language: "en-US",
    input_tokens: 2922,
  },
  context: {
    org_tier: "free",
    active_tab_url: "about:preferences#privacy",
    active_tab_title: "Settings",
  },
  response: {
    text: "Thai food is fantastic! It's known for its incredible balance of sweet, sour, salty, spicy, and umami flavors. Here are a few classic Thai recipes that are popular and delicious:\n",
    latency_ms: 2600,
    output_tokens: 60,
  },
  timestamp: "2026-05-21T20:05:13.562Z",
  session_id: "046ab22b-6074-41d9-9bc6-1ecee0b1c745",
  app_version: "1.0.0",
  interaction_id: "1bd1d64a-68fd-4731-be86-56deab7f72d6",
};

export const FIELDS_ONLY_WHEN_OPTED_IN = [
  "user.role",
  "user.email",
  "user.locale",
  "user.user_id",
  "user.opt_in_data_collection_use",
];

export const FIELD_REFERENCE = [
  { path: "user.email", description: "Account email tied to your Oasis sign-in", when: "Opted in only" },
  { path: "user.user_id", description: "Stable account identifier", when: "Opted in only" },
  { path: "user.locale", description: "Language/locale preference", when: "Opted in only" },
  { path: "user.role", description: "Account role (e.g. user)", when: "Opted in only" },
  { path: "user.opt_in_data_collection_use", description: "Confirms personalization is enabled", when: "Opted in only" },
  { path: "client.os", description: "Operating system", when: "Always" },
  { path: "client.platform", description: "Platform (desktop, etc.)", when: "Always" },
  { path: "client.browser_name", description: "Browser name", when: "Always" },
  { path: "client.browser_version", description: "Browser version", when: "Always" },
  { path: "prompt.text", description: "Your prompt text for the interaction", when: "Always" },
  { path: "prompt.language", description: "Prompt language", when: "Always" },
  { path: "prompt.input_tokens", description: "Input token count", when: "Always" },
  { path: "context.org_tier", description: "Subscription/plan tier", when: "Always" },
  { path: "context.active_tab_url", description: "URL of the active tab", when: "Always" },
  { path: "context.active_tab_title", description: "Title of the active tab", when: "Always" },
  { path: "response.text", description: "Assistant response text", when: "Always" },
  { path: "response.latency_ms", description: "Response latency", when: "Always" },
  { path: "response.output_tokens", description: "Output token count", when: "Always" },
  { path: "session_id", description: "Anonymous session identifier", when: "Always" },
  { path: "interaction_id", description: "Unique ID for this interaction", when: "Always" },
  { path: "timestamp", description: "When the interaction occurred", when: "Always" },
  { path: "app_version", description: "Oasis app version", when: "Always" },
];
