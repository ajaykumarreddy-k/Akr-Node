#!/bin/bash
# generate-favicons.sh <source.png> <output-dir>
# Generates the standard favicon set + site.webmanifest.
set -e
SOURCE="$1"
OUTDIR="${2:-.}"
mkdir -p "$OUTDIR"

resize () { # size out
  if command -v sips >/dev/null 2>&1; then
    sips -z "$1" "$1" "$SOURCE" --out "$2" >/dev/null 2>&1
  else
    magick "$SOURCE" -resize "${1}x${1}" "$2"
  fi
}

resize 16  "$OUTDIR/favicon-16x16.png"
resize 32  "$OUTDIR/favicon-32x32.png"
resize 180 "$OUTDIR/apple-touch-icon.png"
resize 192 "$OUTDIR/android-chrome-192x192.png"
resize 512 "$OUTDIR/android-chrome-512x512.png"

if command -v magick >/dev/null 2>&1; then
  magick "$OUTDIR/favicon-16x16.png" "$OUTDIR/favicon-32x32.png" "$OUTDIR/favicon.ico"
fi

cat > "$OUTDIR/site.webmanifest" << 'EOF'
{
  "name": "App",
  "short_name": "App",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
EOF

echo "Favicons + manifest generated in $OUTDIR"
echo 'Add to <head>:'
echo '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">'
echo '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">'
echo '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">'
echo '<link rel="manifest" href="/site.webmanifest">'
