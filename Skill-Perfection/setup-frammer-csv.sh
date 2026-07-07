#!/usr/bin/env bash
# Copy Frammer components CSV into Skill-Perfection (run once)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$SCRIPT_DIR/../Frammer/output/components.csv"
DST="$SCRIPT_DIR/frammer-components.csv"

if [ -f "$DST" ]; then
  echo "✅ frammer-components.csv already exists in Skill-Perfection — nothing to do."
  exit 0
fi

if [ ! -f "$SRC" ]; then
  echo "❌ Source not found: $SRC"
  echo "   Make sure the Frammer scraper has been run first."
  exit 1
fi

cp "$SRC" "$DST"
echo "✅ Copied frammer-components.csv → Skill-Perfection/ ($(wc -l < "$DST") lines)"
