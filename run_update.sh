#!/bin/bash
set -e
SCRIPT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_PATH"

corepack enable

echo "🔥 npm-check-updates"
pnpm dlx npm-check-updates -u --cooldown 7

echo "🔥 pnpm install"
pnpm install

echo "✅ Dependencies updated"
