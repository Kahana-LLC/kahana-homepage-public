#!/bin/bash

# Update all files in the mozilla-pitch directory
for file in components/mozilla-pitch/*.{js,jsx}; do
  if [ -f "$file" ]; then
    # Replace Apple with Mozilla in text content
    sed -i '' 's/Apple/Mozilla/g' "$file"
    sed -i '' 's/apple/mozilla/g' "$file"
    
    # Replace customer with user where appropriate
    sed -i '' 's/customers/users/g' "$file"
    
    # Update any class names or IDs
    sed -i '' 's/apple-pitch/mozilla-pitch/g' "$file"
  fi
done

echo "All files in mozilla-pitch directory have been updated!" 