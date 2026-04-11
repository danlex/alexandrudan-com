#!/bin/sh
set -eu

STRICT=0

if [ "${1:-}" = "--strict" ]; then
  STRICT=1
elif [ "${1:-}" != "" ]; then
  echo "Usage: sh scripts/prepublish-check.sh [--strict]" >&2
  exit 2
fi

warn_count=0

warn() {
  warn_count=$((warn_count + 1))
  printf "[WARN] %s\n" "$1"
}

check_contains() {
  pattern="$1"
  description="$2"
  shift 2

  if command -v rg >/dev/null 2>&1; then
    if rg -n --fixed-strings "$pattern" "$@" >/dev/null 2>&1; then
      warn "$description"
    fi
  else
    if grep -R -n -F "$pattern" "$@" >/dev/null 2>&1; then
      warn "$description"
    fi
  fi
}

if [ -f CNAME ] && grep -q "^free-website\\.tvl\\.tech$" CNAME; then
  warn "CNAME still points to free-website.tvl.tech. Replace it with your domain or remove the file for now."
fi

check_contains "free-website.tvl.tech" "Demo domain still appears in publishable pages. Update metadata/domain references." index.html 404.html how-it-works.html
check_contains "hello@example.com" "Contact email still uses placeholder hello@example.com." index.html
check_contains "Starter demo. Replace this copy." "Hero still contains starter placeholder copy." index.html
check_contains "Offer 01" "Offer cards still contain placeholder labels." index.html

if [ "$warn_count" -eq 0 ]; then
  echo "No common publish blockers found."
  exit 0
fi

echo
echo "$warn_count warning(s) found."
echo "Fix these before publishing."

if [ "$STRICT" -eq 1 ]; then
  exit 1
fi

exit 0
