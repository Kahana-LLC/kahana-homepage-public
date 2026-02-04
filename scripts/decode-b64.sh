#!/bin/bash
# Usage: ./decode-b64.sh <base64_file> <output_path>
input="$1"
output="$2"
sed 's/^data:image\/[^;]*;base64,//' "$input" | base64 -d > "$output"
echo "Saved to $output"
