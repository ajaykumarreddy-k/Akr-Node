#!/bin/bash
# generate-app-icons.sh <source-1024.png> <output-dir>
# Generates iOS/macOS/Android icon sizes from one 1024x1024 source.
# Requires: sips (macOS) — swap for `magick convert -resize` on Linux.
set -e
SOURCE="$1"
OUTDIR="${2:-.}"
mkdir -p "$OUTDIR"

SIZES=(16 20 29 32 40 48 58 60 64 76 80 87 120 128 152 167 180 256 512 1024)
for SIZE in "${SIZES[@]}"; do
  if command -v sips >/dev/null 2>&1; then
    sips -z "$SIZE" "$SIZE" "$SOURCE" --out "$OUTDIR/icon-${SIZE}x${SIZE}.png" 2>/dev/null
  else
    magick "$SOURCE" -resize "${SIZE}x${SIZE}" "$OUTDIR/icon-${SIZE}x${SIZE}.png"
  fi
done
echo "Generated ${#SIZES[@]} iOS/macOS icon sizes in $OUTDIR"

# Android adaptive icon sizes
declare -A ANDROID_SIZES=( ["mdpi"]=48 ["hdpi"]=72 ["xhdpi"]=96 ["xxhdpi"]=144 ["xxxhdpi"]=192 )
for DENSITY in "${!ANDROID_SIZES[@]}"; do
  SIZE=${ANDROID_SIZES[$DENSITY]}
  mkdir -p "$OUTDIR/res/mipmap-$DENSITY"
  if command -v sips >/dev/null 2>&1; then
    sips -z "$SIZE" "$SIZE" "$SOURCE" --out "$OUTDIR/res/mipmap-$DENSITY/ic_launcher.png"
  else
    magick "$SOURCE" -resize "${SIZE}x${SIZE}" "$OUTDIR/res/mipmap-$DENSITY/ic_launcher.png"
  fi
done
echo "Generated Android densities in $OUTDIR/res"
