# Documentation Author System

The Docs section now leverages the centralized `authors.js` configuration, just like the blog system. This provides consistent author information across the entire website.

## How It Works

### 1. **Author Configuration**
All author information is centrally managed in `config/authors.js`:
- Author profiles with name, role, bio, LinkedIn profile, and optional avatar
- Default avatar placeholder for authors without custom images
- Team member information for the entire organization

### 2. **Documentation JSON Structure**
Each documentation file (`data/docs/*.json`) can now include an `authors` field:

```json
{
  "title": "Documentation Title",
  "description": "Description",
  "content": "HTML content...",
  "date": "2025-04-14",
  "category": "features",
  "slug": "document-slug",
  "authors": ["Adam Kershner", "Vedant Gupta"]
}
```

### 3. **Author Display**
The system automatically:
- Resolves author names to full profiles from `config/authors.js`
- Displays author avatars, names, roles, and LinkedIn links
- Supports multiple authors per document
- Falls back to Adam Kershner if no authors are specified

### 4. **Display Variants**
Different display formats are used in different contexts:
- **Header variant**: Compact display in document headers
- **Reference variant**: Minimal display in documentation cards
- **Bio variant**: Full author bio cards at the bottom of pages

## Adding Authors to Documentation

### Option 1: Manual Addition
Add the `authors` field to any documentation JSON file:

```json
{
  "authors": ["Author Name 1", "Author Name 2"]
}
```

### Option 2: Using the Script
Run the automated script to add default authors based on content type:

```bash
node scripts/add-docs-authors.js
```

This script will:
- Add appropriate authors based on document category/slug
- Skip files that already have authors
- Use sensible defaults (e.g., security docs get security-focused authors)

## Default Author Mappings

The system includes intelligent defaults based on content type:

- **Getting Started**: Adam Kershner
- **Features**: Adam Kershner, Vedant Gupta
- **Security**: Adam Kershner, Rishikes Ramachandran
- **Analytics**: Adam Kershner, Shivangi Chamoli
- **Team Collaboration**: Jescetta Joy, Sonakshi Singh
- **Support/Legal**: Adam Kershner

## Benefits

1. **Consistency**: Same author system across blog and docs
2. **Maintainability**: Centralized author management
3. **Flexibility**: Support for multiple authors per document
4. **Rich Information**: Avatars, roles, bios, and LinkedIn links
5. **Fallbacks**: Graceful handling of missing author information

## Technical Implementation

- Uses `getAuthorDetails()` from `utils/authorUtils.js`
- Integrates with existing `AuthorCard` component
- Supports all existing author display variants
- Maintains backward compatibility with documents without author fields
