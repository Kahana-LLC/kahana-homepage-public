import fs from 'fs';
import path from 'path';

const whitePapersDirectory = path.join(process.cwd(), 'data/white-papers');

export function getAllWhitePapers() {
  try {
    const fileNames = fs.readdirSync(whitePapersDirectory);
    const whitePapers = fileNames
      .filter(name => name.endsWith('.json'))
      .map(name => {
        const fullPath = path.join(whitePapersDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        return JSON.parse(fileContents);
      })
      .filter(whitePaper => whitePaper.status === 'published')
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return whitePapers;
  } catch (error) {
    console.error('Error reading white papers:', error);
    return [];
  }
}

export function getWhitePaperBySlug(slug) {
  try {
    const fullPath = path.join(whitePapersDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading white paper ${slug}:`, error);
    return null;
  }
}

export function getFeaturedWhitePapers() {
  const whitePapers = getAllWhitePapers();
  return whitePapers.filter(whitePaper => whitePaper.featured);
}

export function getWhitePapersByCategory(category) {
  const whitePapers = getAllWhitePapers();
  return whitePapers.filter(whitePaper => whitePaper.category === category);
}

export function getAllCategories() {
  const whitePapers = getAllWhitePapers();
  const categories = [...new Set(whitePapers.map(whitePaper => whitePaper.category))];
  return categories.sort();
}
