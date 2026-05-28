const FULL_ASSISTANT_REPLY = `Of course! Here's a classic, delicious chocolate cake recipe that's pretty straightforward to make:

## Classic Moist Chocolate Cake

This recipe makes a rich, moist chocolate cake that's perfect for any occasion.

### Ingredients:

**For the Cake:**
*   2 cups (250g) all-purpose flour
*   2 cups (400g) granulated sugar
*   ¾ cup (65g) unsweetened cocoa powder (Dutch-processed is great for a darker color)
*   2 teaspoons baking soda
*   1 teaspoon baking powder
*   1 teaspoon salt
*   1 cup (240ml) buttermilk (or 1 cup milk + 1 tbsp white vinegar/lemon juice, let sit 5 mins)
*   ½ cup (120ml) vegetable oil
*   2 large eggs
*   1 teaspoon vanilla extract
*   1 cup (240ml) boiling water (or hot strong coffee for deeper flavor)

**For the Chocolate Buttercream Frosting (Optional but Recommended!):**
*   1 cup (226g) unsalted butter, softened
*   3-4 cups (360-480g) powdered sugar, sifted
*   ¾ cup (65g) unsweetened cocoa powder, sifted
*   ½ cup (120ml) heavy cream or milk
*   1 teaspoon vanilla extract
*   Pinch of salt

### Instructions:

**For the Cake:**
1.  **Preheat & Prep:** Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans, or line with parchment paper.
2.  **Combine Dry Ingredients:** In a large bowl, whisk together the flour, sugar, cocoa powder, baking soda, baking powder, and salt.
3.  **Add Wet Ingredients (except boiling water):** Add the buttermilk, oil, eggs, and vanilla extract to the dry ingredients. Beat with an electric mixer on medium speed for about 2 minutes, until well combined.
4.  **Add Boiling Water:** Carefully pour in the boiling water (or hot coffee) and mix on low speed until just combined. The batter will be thin – this is normal!
5.  **Bake:** Divide the batter evenly between the prepared cake pans. Bake for 30-35 minutes, or until a wooden skewer inserted into the center comes out clean.
6.  **Cool:** Let the cakes cool in the pans for 10-15 minutes before inverting them onto a wire rack to cool completely.

**For the Chocolate Buttercream Frosting:**
1.  **Cream Butter:** In a large bowl, beat the softened butter with an electric mixer until light and fluffy.
2.  **Add Dry Ingredients:** Gradually add the sifted powdered sugar and cocoa powder, beating until smooth. Start on low speed to avoid a cloud of sugar!
3.  **Add Liquids:** Pour in the heavy cream (or milk) and vanilla extract, and add a pinch of salt. Beat on medium-high speed until the frosting is light, fluffy, and spreadable. If it's too thick, add a little more cream; if too thin, add more powdered sugar.

**Assemble the Cake:**
1.  Once the cakes are completely cool, place one layer on your serving plate or cake stand.
2.  Spread a generous layer of frosting over the top.
3.  Carefully place the second cake layer on top.
4.  Frost the top and sides of the entire cake.

Enjoy your delicious homemade chocolate cake!
`;

const TRUNCATE_AT = 520;
const TRUNCATION_SUFFIX =
  "\n\n… (truncated for documentation; full reply is stored in the submission)";

function truncateAssistantReply(text) {
  if (text.length <= TRUNCATE_AT) return text;
  return text.slice(0, TRUNCATE_AT).trimEnd() + TRUNCATION_SUFFIX;
}

/** Illustrative server-bound payload on Submit; anonymous omits user ID on the training record only. */
export const TRAINING_PAYLOAD_ANONYMOUS = {
  category: "answer_quality",
  badges: ["Helpful", "Fast"],
  comment: "It gave me a good response and a good recipe",
  sentiment: "up",
  contact_me: false,
  user_prompt: "can you give me a recipie to make a chocolate cake",
  training_mode: "anonymous",
  assistant_reply: truncateAssistantReply(FULL_ASSISTANT_REPLY),
  include_context: true,
};

/** Illustrative payload for research/writing workflows — same shape as production; richer comment. */
export const TRAINING_PAYLOAD_WORKFLOW_COMMENT = {
  category: "behavior_preference",
  badges: ["Helpful"],
  comment:
    "This summary was fine for today, but going forward: always cite the tab/source you used, use my bullet + short-paragraph format, and do not interrupt with follow-ups while I am in research mode with many tabs open.",
  sentiment: "up",
  contact_me: false,
  user_prompt: "Summarize the key points from my open research tabs",
  training_mode: "personalized",
  assistant_reply:
    "Here is a concise summary of your open research tabs, grouped by theme…\n\n… (truncated for documentation; full reply is stored in the submission)",
  include_context: true,
};

export const TRAINING_PAYLOAD_FIELD_REFERENCE = [
  {
    path: "sentiment",
    description: "Thumbs direction: up or down on the assistant reply",
    when: "Always",
  },
  {
    path: "category",
    description:
      "High-level training category (e.g. answer quality vs behavior preference). Use behavior-style categories when the comment describes how Oasis should act in future sessions.",
    when: "Always; required to qualify for bonus tokens",
  },
  {
    path: "badges",
    description:
      "Quick reaction tags on this reply (e.g. Helpful, Fast). They say how the answer felt—not by themselves whether a rule should apply globally.",
    when: "Always; at least one required to qualify for bonus tokens",
  },
  {
    path: "comment",
    description:
      "Your reason in your own words: what worked, what failed, and any workflow rule (sources, format, research mode, tab patterns). Minimum 30 characters.",
    when: "Always; required to qualify for bonus tokens",
  },
  {
    path: "training_mode",
    description:
      "anonymous (payload uploaded on Submit; no Kahana user ID on the training record) or personalized (same upload, linked to your account for personalization)",
    when: "Chosen per submission; neither mode keeps feedback only on-device",
  },
  {
    path: "user_prompt",
    description: "The user message that led to this reply",
    when: "Always",
  },
  {
    path: "assistant_reply",
    description: "The assistant message you are rating",
    when: "Always; full text is stored (example above is truncated for readability)",
  },
  {
    path: "contact_me",
    description: "Whether you want Kahana to follow up about this feedback",
    when: "Optional",
  },
  {
    path: "include_context",
    description:
      "When true, limited session or tab context may be included in the server submission. Anonymous training_mode still omits user ID on the training record.",
    when: "When enabled in the training UI",
  },
];
