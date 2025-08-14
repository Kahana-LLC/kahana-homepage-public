import fs from "fs";
import path from "path";
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

const DOCS_DIR = path.join(process.cwd(), "data/docs");

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
    const filePath = path.join(DOCS_DIR, `${slug}.json`);
    const fileContents = await readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading documentation file for slug ${slug}:`, error);
    return null;
  }
}
