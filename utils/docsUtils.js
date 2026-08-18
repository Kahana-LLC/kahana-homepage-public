import fs from "fs";
import path from "path";
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

const DOCS_DIR = path.join(process.cwd(), "data/docs");

function stripHtmlToSearchText(html, maxLength = 2500) {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** Strip common inline Markdown from manifest summaries (plain text for cards / meta). */
export function stripInlineMarkdown(text) {
  if (!text || typeof text !== "string") return "";
  let s = text;
  s = s.replace(/\*\*([^*]+)\*\*/g, "$1");
  s = s.replace(/__([^_]+)__/g, "$1");
  s = s.replace(/`([^`]+)`/g, "$1");
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  s = s.replace(/\*([^*\n]+)\*/g, "$1");
  s = s.replace(/_([^_\n]+)_/g, "$1");
  return s.trim();
}

export async function getAllDocs() {
  try {
    const files = await readdir(DOCS_DIR);
    const docs = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const slug = file.replace(/\.json$/, "");
          const filePath = path.join(DOCS_DIR, file);
          const fileContents = await readFile(filePath, "utf8");
          const doc = JSON.parse(fileContents);
          return {
            ...doc,
            slug,
            description: stripInlineMarkdown(doc.description),
          };
        })
    );

    return docs.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error("Error reading documentation files:", error);
    return [];
  }
}

export async function getAllDocsMetadata() {
  try {
    const files = await readdir(DOCS_DIR);
    const docs = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const slug = file.replace(/\.json$/, "");
          const filePath = path.join(DOCS_DIR, file);
          const fileContents = await readFile(filePath, "utf8");
          const doc = JSON.parse(fileContents);

          // Return only the metadata needed for the index page
          return {
            title: doc.title,
            description: stripInlineMarkdown(doc.description),
            date: doc.date,
            section: doc.section || doc.category,
            category: doc.section || doc.category,
            tags: Array.isArray(doc.tags) ? doc.tags : [],
            slug: doc.slug,
            authors: doc.authors,
            searchText: stripHtmlToSearchText(doc.content),
            // Include a word count for reading time calculation
            wordCount: doc.content ? doc.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0
          };
        })
    );

    return docs.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error("Error reading documentation files:", error);
    return [];
  }
}

export async function getDocBySlug(slug) {
  try {
    // First try to find the file by the slug field in the JSON
    const files = await readdir(DOCS_DIR);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));
    
    for (const file of jsonFiles) {
      const filePath = path.join(DOCS_DIR, file);
      const fileContents = await readFile(filePath, "utf8");
      const doc = JSON.parse(fileContents);
      
      // Check if this file has the matching slug
      if (doc.slug === slug) {
        return {
          ...doc,
          description: stripInlineMarkdown(doc.description),
        };
      }
    }
    
    // Fallback: try to find by filename (without .json extension)
    const filePath = path.join(DOCS_DIR, `${slug}.json`);
    const fileContents = await readFile(filePath, "utf8");
    const doc = JSON.parse(fileContents);
    return {
      ...doc,
      description: stripInlineMarkdown(doc.description),
    };
  } catch (error) {
    console.error(`Error reading documentation file for slug ${slug}:`, error);
    return null;
  }
}
