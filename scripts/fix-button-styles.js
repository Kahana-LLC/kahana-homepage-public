const fs = require('fs');
const path = require('path');

// Function to fix problematic white text styles
function fixWhiteTextStyles(content) {
  let fixed = content;
  
  // Fix 1: Remove problematic white text styles from button spans
  fixed = fixed.replace(
    /<span style=\{\{ color: 'white !important', fontWeight: 'bold' \}\}>/g,
    '<span style={{ fontWeight: "bold" }}>'
  );
  
  // Fix 2: Remove problematic white text styles from button spans (without fontWeight)
  fixed = fixed.replace(
    /<span style=\{\{ color: 'white !important' \}\}>/g,
    '<span>'
  );
  
  // Fix 3: Remove problematic white text styles from SVG icons
  fixed = fixed.replace(
    /style=\{\{ color: 'white !important' \}\}/g,
    ''
  );
  
  // Fix 4: Remove problematic white text styles from button styles
  fixed = fixed.replace(
    /color: 'white !important',/g,
    '',
  );
  
  // Fix 5: Remove problematic white text styles from button styles (no comma)
  fixed = fixed.replace(
    /color: 'white !important'/g,
    '',
  );
  
  // Fix 6: Remove problematic white text styles from h2 elements
  fixed = fixed.replace(
    /style=\{\{ color: 'white !important' \}\}/g,
    '',
  );
  
  // Fix 7: Remove problematic white text styles from p elements
  fixed = fixed.replace(
    /style=\{\{ color: 'white !important' \}\}/g,
    '',
  );
  
  // Fix 8: Remove problematic teal color styles from button spans
  fixed = fixed.replace(
    /<span style=\{\{ color: '#0d9488 !important', fontWeight: 'bold' \}\}>/g,
    '<span style={{ fontWeight: "bold" }}>'
  );
  
  // Fix 9: Remove problematic teal color styles from button styles
  fixed = fixed.replace(
    /color: '#0d9488 !important',/g,
    '',
  );
  
  // Fix 10: Remove problematic teal color styles from button styles (no comma)
  fixed = fixed.replace(
    /color: '#0d9488 !important'/g,
    '',
  );
  
  // Fix 11: Remove problematic backgroundColor styles
  fixed = fixed.replace(
    /backgroundColor: '#0d9488 !important',/g,
    '',
  );
  
  // Fix 12: Remove problematic backgroundColor styles (no comma)
  fixed = fixed.replace(
    /backgroundColor: '#0d9488 !important'/g,
    '',
  );
  
  // Fix 13: Remove problematic borderColor styles
  fixed = fixed.replace(
    /borderColor: '#0d9488 !important',/g,
    '',
  );
  
  // Fix 14: Remove problematic borderColor styles (no comma)
  fixed = fixed.replace(
    /borderColor: '#0d9488 !important'/g,
    '',
  );
  
  // Fix 15: Remove problematic backgroundColor white styles
  fixed = fixed.replace(
    /backgroundColor: 'white !important',/g,
    '',
  );
  
  // Fix 16: Remove problematic backgroundColor white styles (no comma)
  fixed = fixed.replace(
    /backgroundColor: 'white !important'/g,
    '',
  );
  
  // Fix 17: Remove empty style objects completely
  fixed = fixed.replace(
    /style=\{\{\s*\}\}/g,
    ''
  );
  
  // Fix 18: Remove style objects with only commas
  fixed = fixed.replace(
    /style=\{\{\s*,+\s*\}\}/g,
    ''
  );
  
  // Fix 19: Remove style objects with only fontWeight
  fixed = fixed.replace(
    /style=\{\{\s*fontWeight:\s*['"]bold['"]\s*\}\}/g,
    ''
  );
  
  // Fix 20: Remove style objects with only fontWeight and commas
  fixed = fixed.replace(
    /style=\{\{\s*,+\s*fontWeight:\s*['"]bold['"]\s*,*\s*\}\}/g,
    ''
  );
  
  // Fix 21: Remove style objects with only fontWeight and trailing commas
  fixed = fixed.replace(
    /style=\{\{\s*fontWeight:\s*['"]bold['"]\s*,+\s*\}\}/g,
    ''
  );
  
  // Fix 22: Clean up trailing commas in style objects
  fixed = fixed.replace(
    /style=\{\{\s*([^}]+),\s*\}\}/g,
    (match, content) => {
      const cleaned = content.replace(/,\s*$/, '');
      if (cleaned.trim() === 'fontWeight: "bold"' || cleaned.trim() === "fontWeight: 'bold'") {
        return '';
      }
      return `style={{ ${cleaned} }}`;
    }
  );
  
  // Fix 23: Remove any remaining empty style objects
  fixed = fixed.replace(
    /style=\{\{\s*\}\}/g,
    ''
  );
  
  return fixed;
}

// Directories to process
const directories = [
  'pages',
  'components',
  'pages/markets',
  'pages/products',
  'pages/solutions'
];

// Process all JSX files
directories.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.jsx'));
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixWhiteTextStyles(content);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent);
        console.log(`✅ Fixed button styles in ${dir}/${file}`);
      }
    });
  }
});

console.log('\n🎉 All problematic button styles have been removed!');
console.log('📝 Buttons should now display with proper colors.');
