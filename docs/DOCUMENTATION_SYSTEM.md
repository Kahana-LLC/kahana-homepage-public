# Documentation System

This document explains how the documentation system works and how to add universal components.

## Overview

The documentation system uses a configuration-driven approach to manage universal components that appear on all documentation pages. This allows for easy management of components like Discord CTAs, feedback forms, and other shared elements without modifying individual documentation content.

## File Structure

```
├── config/
│   └── docsConfig.js          # Configuration for universal components
├── components/
│   ├── DiscordCTA.jsx         # Discord community CTA component
│   ├── DocFeedback.jsx        # Documentation feedback component
│   └── ...                    # Other components
├── pages/docs/
│   ├── index.jsx              # Documentation index page
│   └── [slug].jsx             # Individual documentation page
└── data/docs/
    └── *.json                 # Documentation content files
```

## Universal Components

Universal components are components that appear on all documentation pages. They are managed through the `config/docsConfig.js` file.

### Current Universal Components

1. **Discord CTA** - Encourages users to join the Discord community
2. **Feedback** - Allows users to rate documentation helpfulness

### Adding a New Universal Component

1. **Create the component** in `components/` directory
2. **Add configuration** to `config/docsConfig.js`:

```javascript
universalComponents: {
  // ... existing components
  yourNewComponent: {
    enabled: true,
    title: "Your Component Title",
    description: "Your component description",
    className: "mt-8"
  }
}
```

3. **Import and use** in documentation pages:

```javascript
import YourNewComponent from '../../components/YourNewComponent';
import { isUniversalComponentEnabled, getUniversalComponent } from '../../config/docsConfig';

// In the JSX:
{isUniversalComponentEnabled('yourNewComponent') && (
  <YourNewComponent 
    {...getUniversalComponent('yourNewComponent')}
  />
)}
```

## Configuration Options

### Discord CTA Configuration

```javascript
discordCTA: {
  enabled: true,                    // Enable/disable the component
  title: "Need Help with Oasis Browser?",
  description: "Join our Discord community...",
  buttonText: "Join Discord Community",
  className: "mt-16"               // CSS classes
}
```

### Feedback Configuration

```javascript
feedback: {
  enabled: false,                   // Currently disabled
  title: "Was this documentation helpful?",
  positiveText: "Yes, it helped",
  negativeText: "No, I need more help",
  className: "mt-8"
}
```

## Default Settings

```javascript
defaults: {
  readingTimeWordsPerMinute: 200,   // For reading time calculation
  relatedDocsCount: 3,              // Number of related docs to show
  authorFallback: "Adam Kershner"   // Default author if none specified
}
```

## Benefits

1. **Centralized Management** - All universal components are configured in one place
2. **Easy Toggle** - Enable/disable components without code changes
3. **Consistent Styling** - Components maintain consistent appearance across pages
4. **Flexible Configuration** - Each component can have its own configuration
5. **Clean Content** - Documentation JSON files remain focused on content only

## Usage Examples

### Enabling the Feedback Component

To enable the feedback component, change the configuration:

```javascript
feedback: {
  enabled: true,  // Change from false to true
  // ... rest of config
}
```

### Customizing Discord CTA for Different Pages

You can customize the Discord CTA for different contexts by modifying the configuration or passing props:

```javascript
// In the docs index page
<DiscordCTA 
  title="Need Help with Documentation?"
  description="Join our Discord community to get support with documentation..."
  {...getUniversalComponent('discordCTA')}
/>
```

## Best Practices

1. **Keep components focused** - Each universal component should serve a specific purpose
2. **Use configuration** - Avoid hardcoding values in components
3. **Test thoroughly** - Universal components appear on all pages, so test carefully
4. **Document changes** - Update this file when adding new components
5. **Consider performance** - Universal components load on every page, so keep them lightweight
