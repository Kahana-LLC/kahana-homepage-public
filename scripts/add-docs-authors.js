const fs = require("fs");
const path = require("path");

// Configuration
const DOCS_DIR = path.join(process.cwd(), "data/docs");

// Default author mapping based on content type
const defaultAuthors = {
  "getting-started": ["Adam Kershner"],
  "features": ["Adam Kershner", "Vedant Gupta"],
  "security": ["Adam Kershner", "Rishikes Ramachandran"],
  "support": ["Adam Kershner"],
  "legal": ["Adam Kershner"],
  "faq": ["Adam Kershner"],
  "troubleshooting": ["Adam Kershner"],
  "accessibility": ["Adam Kershner"],
  "privacy": ["Adam Kershner"],
  "hubs": ["Adam Kershner"],
  "ai-assistant": ["Adam Kershner", "Vedant Gupta"],
  "real-time-analytics": ["Adam Kershner", "Shivangi Chamoli"],
  "secure-platform": ["Adam Kershner", "Rishikes Ramachandran"],
  "smart-automation": ["Adam Kershner", "Vedant Gupta"],
  "team-collaboration": ["Jescetta Joy", "Sonakshi Singh"],
  "oasis-user-analytics": ["Adam Kershner", "Shivangi Chamoli"]
};

// Process documentation files
async function addAuthorsToDocs() {
  try {
    if (!fs.existsSync(DOCS_DIR)) {
      console.error("Documentation directory not found:", DOCS_DIR);
      return;
    }

    const files = fs.readdirSync(DOCS_DIR);
    const jsonFiles = files.filter(file => file.endsWith(".json"));
    
    let processedCount = 0;
    let updatedCount = 0;

    for (const file of jsonFiles) {
      const filePath = path.join(DOCS_DIR, file);
      const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
      
      processedCount++;

      // Check if authors field already exists
      if (content.authors) {
        console.log(`✓ ${file} already has authors: ${content.authors.join(", ")}`);
        continue;
      }

      // Determine default authors based on slug or category
      let defaultAuthorList = defaultAuthors[content.slug] || defaultAuthors[content.category] || ["Adam Kershner"];
      
      // Add authors field
      content.authors = defaultAuthorList;
      
      // Write the updated content back to the file
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      updatedCount++;
      
      console.log(`✓ Updated ${file} with authors: ${defaultAuthorList.join(", ")}`);
    }

    console.log(`\nCompleted processing ${processedCount} documentation files`);
    console.log(`Updated ${updatedCount} files with author information`);
    
  } catch (error) {
    console.error("Error processing documentation:", error);
    process.exit(1);
  }
}

// Run the script
addAuthorsToDocs();
