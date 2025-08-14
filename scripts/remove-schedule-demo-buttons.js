const fs = require('fs');
const path = require('path');

// Function to remove the white Schedule Demo button from CTA sections
function removeScheduleDemoButton(content) {
  let fixed = content;
  
  // Pattern to match the white Schedule Demo button in the CTA section
  // This looks for the Link with bg-white text-kahana-primary classes
  const pattern = /<Link\s+href="\/schedule-demo"\s+className="[^"]*bg-white[^"]*"[^>]*>\s*<span[^>]*>\s*Schedule Demo\s*<\/span>\s*<\/Link>/g;
  
  fixed = fixed.replace(pattern, '');
  
  // Also remove the gap-4 class from the parent div if it becomes empty
  fixed = fixed.replace(
    /<div className="flex justify-center gap-4">\s*<\/div>/g,
    '<div className="flex justify-center">\n            </div>'
  );
  
  return fixed;
}

// Process all markets pages
const marketsDir = path.join(__dirname, '..', 'pages', 'markets');
const files = fs.readdirSync(marketsDir).filter(file => file.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(marketsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const fixedContent = removeScheduleDemoButton(content);
  
  if (content !== fixedContent) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Removed Schedule Demo button from ${file}`);
  }
});

console.log('\n🎉 Schedule Demo buttons removed from all markets pages!');
