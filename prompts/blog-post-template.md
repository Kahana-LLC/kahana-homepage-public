# Blog Post Template

## Instructions for Creating Blog Posts

When creating a new blog post, follow this template to ensure consistency, quality, and proper formatting.

### Required Formatting Rules

1. **Subheadings Must Be Bold and Bigger**: All `<h2>` and `<h3>` tags must include inline styles for bold font-weight and larger font-size:
   - `<h2>`: `style="font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;"`
   - `<h3>`: `style="font-weight: bold; font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem;"`
   - Wrap heading text in `<strong>` tags: `<h2 style="..."><strong>Heading Text</strong></h2>`

2. **Narrative Style**: Write as a cohesive, engaging narrative or story—NOT a list or outline. Use storytelling techniques, scenarios, and smooth transitions.

3. **Source Integration**: Weave each source URL contextually into the article as a hyperlink using descriptive link text. Example:
   - ✅ Good: "According to <a href=\"url\">TechCrunch's research</a>, these trends show..."
   - ❌ Bad: "Source: [url](url)"

4. **HTML Formatting**: Use HTML tags for all formatting:
   - Paragraphs: `<p>...</p>`
   - Headings: `<h2>...</h2>`, `<h3>...</h3>`
   - Links: `<a href="url" target="_blank" rel="noopener noreferrer">descriptive text</a>`
   - Lists: `<ul><li>...</li></ul>`
   - Bold: `<strong>...</strong>`

5. **Tone**: Maintain a professional, informative tone suitable for a tech/business audience.

6. **Blog Browser Comparison Component**: Include after the intro paragraph:
   ```html
   <component name="BlogBrowserComparison" />
   ```

7. **Flow**: Ensure logical flow with smooth transitions between sections and a clear, compelling conclusion.

### Blog Post JSON Structure

```json
{
  "title": "Your Blog Post Title",
  "date": "2026-01-XXT00:00:00.000Z",
  "authors": [
    {
      "name": "Konika Dhull",
      "role": "Product and Data Analyst",
      "bio": "I am an enthusiast about bridging Computer Science and Business together with a strong interest in product strategy, data analysis, and emerging technologies. Passionate about the intersection of tech and innovation. 2x All-American athlete driven by curiosity and impact.",
      "linkedinProfile": "https://www.linkedin.com/in/konika-dhull/",
      "avatar": "/assets/headshots/konika_dhull.jpg"
    }
  ],
  "category": ["Category1", "Category2", "Category3"],
  "excerpt": "Compelling 1-2 sentence summary of the blog post that will appear in listings.",
  "defaultImageQuery": "keywords for image search",
  "featuredImage": "https://example.com/image-url.png",
  "slug": "url-friendly-slug-for-blog-post",
  "readingTime": 15,
  "content": "<p>Opening paragraph that hooks the reader with a scenario, question, or compelling statement...</p>\n\n<p>Second paragraph that expands on the context and sets up what the article will cover...</p>\n\n<component name=\"BlogBrowserComparison\" />\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>Quick Verdict: Main Takeaway</strong></h2>\n\n<p>Summary paragraph with key points...</p>\n\n<ul>\n<li><strong>Point 1:</strong> Description</li>\n<li><strong>Point 2:</strong> Description</li>\n<li><strong>Point 3:</strong> Description</li>\n</ul>\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>Section Heading: Engaging Narrative</strong></h2>\n\n<p>Tell a story or paint a picture. According to <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Source Name's research</a>, this reveals important insights...</p>\n\n<p>Continue the narrative, weaving in additional sources naturally. <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Another source</a> explains how this impacts organizations...</p>\n\n<h3 style=\"font-weight: bold; font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem;\"><strong>Subsection Heading</strong></h3>\n\n<p>Subsection content that flows naturally from the previous section...</p>\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>Oasis: How We Solve This Problem</strong></h2>\n\n<p>Explain how Oasis addresses the challenges discussed. Oasis implements <a href=\"/solutions/zero-trust-security\" target=\"_blank\" rel=\"noopener noreferrer\">Zero Trust security architecture</a>...</p>\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>Feature-by-Feature Breakdown</strong></h2>\n\n<h3 style=\"font-weight: bold; font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem;\"><strong>Feature Category</strong></h3>\n\n<p><strong>Traditional Approach:</strong> Description of limitations</p>\n\n<p><strong>Oasis:</strong> Description of how Oasis solves this</p>\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>Which Should You Choose?</strong></h2>\n\n<h3 style=\"font-weight: bold; font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem;\"><strong>You're Facing [Specific Challenge]</strong></h3>\n\n<p>If you're facing this challenge, Oasis provides...</p>\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>How to Evaluate Solutions</strong></h2>\n\n<p>When evaluating solutions, consider these criteria:</p>\n\n<ul>\n<li><strong>Criterion 1:</strong> Description</li>\n<li><strong>Criterion 2:</strong> Description</li>\n</ul>\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>FAQs: Common Questions</strong></h2>\n\n<h3 style=\"font-weight: bold; font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem;\"><strong>Question 1?</strong></h3>\n\n<p>Answer that addresses the question comprehensively...</p>\n\n<h2 style=\"font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;\"><strong>Final Thoughts: Compelling Conclusion</strong></h2>\n\n<p>Summarize the key points and provide a clear call to action. The landscape has revealed that organizations need...</p>\n\n<p>For organizations evaluating solutions, the decision comes down to priorities...</p>\n\n<p>Oasis provides the solution that addresses these challenges. <a href=\"/products/oasis-enterprise-browser\" target=\"_blank\" rel=\"noopener noreferrer\">Learn more about Oasis Enterprise Browser</a> and how it solves these problems.</p>\n\n<p>As the landscape continues to evolve, one thing is certain: [key insight]. Oasis is built for this reality—where organizations need [specific capabilities] that [traditional solutions] cannot deliver.</p>"
}
```

### Content Writing Guidelines

#### Opening Paragraph
- Start with a compelling scenario, question, or statement
- Hook the reader immediately
- Set the context and problem

#### Body Sections
- Use storytelling techniques
- Paint pictures with words
- Create smooth transitions between paragraphs
- Weave sources naturally into the narrative
- Avoid repetitive sentence structures
- Vary paragraph length

#### Heading Format
Always use this format for headings:
```html
<h2 style="font-weight: bold; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem;"><strong>Your Heading Text</strong></h2>
```

For h3:
```html
<h3 style="font-weight: bold; font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem;"><strong>Your Subheading Text</strong></h3>
```

#### Source Integration Examples

**Good Examples:**
- "According to <a href=\"url\">TechCrunch's analysis</a>, organizations are facing..."
- "<a href=\"url\">Research from Gartner</a> reveals that..."
- "As <a href=\"url\">Forbes reports</a>, this trend is accelerating..."

**Bad Examples:**
- "Source: [url](url)"
- "According to research (url)..."
- Listing sources at the end

#### Transitions
Use transitional phrases to connect sections:
- "But the risks don't end there..."
- "Perhaps most concerning is..."
- "The story often follows a familiar pattern..."
- "When organizations face this challenge..."
- "The fundamental problem is..."

#### Conclusion
- Summarize key points
- Provide clear call to action
- End with forward-looking statement
- Include link to Oasis product page

### Checklist Before Publishing

- [ ] All headings use proper styling (bold, larger font-size)
- [ ] Content is written as narrative, not a list
- [ ] All source URLs are integrated contextually with descriptive link text
- [ ] HTML tags are used for all formatting
- [ ] BlogBrowserComparison component is included after intro
- [ ] Smooth transitions between sections
- [ ] Clear, compelling conclusion
- [ ] Featured image URL is provided
- [ ] All required JSON fields are filled
- [ ] Reading time is accurate
- [ ] Slug is URL-friendly

### Example Opening Paragraphs

**Scenario-Based:**
"Imagine this scenario: Your organization needs to onboard a contractor for a critical project that starts next week. The traditional playbook says to ship them a corporate laptop, configure it remotely, and hope it arrives intact. But as research reveals, this approach is riddled with risks..."

**Question-Based:**
"What happens when a contractor completes their project and departs? Your IT team revokes their access, removes them from all systems, and considers the matter closed. But three weeks later, you discover they still have active browser sessions accessing sensitive SaaS applications..."

**Statement-Based:**
"It's Friday afternoon, and your security team receives an alert: sensitive customer data has been accessed from an unsanctioned SaaS application. The investigation reveals that a contractor who completed their project three weeks ago still has active browser sessions..."

### Notes

- Always use `target="_blank" rel="noopener noreferrer"` for external links
- Use `\n\n` for paragraph breaks in JSON (will be converted to actual newlines)
- Escape quotes in JSON: `\"` for double quotes
- Keep paragraphs focused and concise (3-5 sentences typically)
- Use strong tags for emphasis: `<strong>important term</strong>`
