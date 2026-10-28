#!/bin/bash
set -e
cd "$(dirname "$0")"

# Make node and global npm binaries visible even right after a fresh winget install
PATH="/c/Program Files/nodejs:$(cygpath "$APPDATA")/npm:$PATH"

echo "🔥 Setup"
winget install -e --id OpenJS.NodeJS --accept-source-agreements --accept-package-agreements || true
npm install -g npm
npm install --global --allow-scripts=pnpm pnpm@latest

# Stop servers from a previous run, they lock files in node_modules (fails on a fresh clone, nothing to stop)
pnpm exec kill-port 4321 54321 || true

echo "🔥 Update dependencies"
pnpm install
# TypeScript stays on 6 until all dependencies support 7
pnpm exec ncu -u --cooldown 7 --reject typescript
pnpm install
pnpm exec playwright install chromium

echo "🔥 Quality"
pnpm run format
pnpm run lint:sh
pnpm run lint:md
pnpm run typecheck
pnpm run lint
pnpm run build
pnpm run test

echo "🔥 Dev server"
nohup pnpm run dev --port 54321 > dev.log 2>&1 &

echo "✅ All passed, dev server running on http://localhost:54321 (logs in dev.log)"
