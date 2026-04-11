#!/bin/sh
set -eu

PORT="${1:-8000}"

if command -v python3 >/dev/null 2>&1; then
  echo "Preview running at http://localhost:${PORT}"
  exec python3 -m http.server "$PORT"
fi

if command -v python >/dev/null 2>&1; then
  echo "Preview running at http://localhost:${PORT}"
  exec python -m http.server "$PORT"
fi

echo "Python is not installed. Install Python 3 to use the local preview." >&2
exit 1
