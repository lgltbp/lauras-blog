#!/bin/bash
source ./common.sh

SCRIPT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_PATH" || exit

corepack enable

echo ""
echo "🔥🔥🔥 LET'S CHECK THAT QUALITY"
TOTAL_START_TIME=$(date +%s)

run_timed "Clean output directories" "rm -rf output dist"

run_timed "Install brew dependencies" "brew bundle --quiet"

run_timed "Pnpm install" "pnpm install 2>&1"

run_timed "Format shell scripts" "find . -name '*.sh' -type f -exec shfmt -l -w {} +"

run_timed "Lint shell scripts" "find . -name '*.sh' -type f -exec shellcheck --severity=warning {} +"

run_timed "Prettier" "pnpm run format 2>&1"

run_timed "Markdownlint" "pnpm run lint:md 2>&1"

run_timed "TypeScript" "pnpm run typecheck 2>&1"

run_timed "ESLint" "pnpm run lint 2>&1"

run_timed "Check unused images" "pnpm run check:images 2>&1"

run_timed "Build" "pnpm run build 2>&1"

fuser -k 4321/tcp 2>/dev/null || true

pnpm run preview >/dev/null 2>&1 &
PREVIEW_PID=$!

run_timed "Playwright Install Browsers" "pnpm dlx playwright install chromium 2>&1"

run_timed "Playwright Tests" "pnpm run test 2>&1"

kill $PREVIEW_PID 2>/dev/null || true

TOTAL_END_TIME=$(date +%s)
TOTAL_ELAPSED=$((TOTAL_END_TIME - TOTAL_START_TIME))

printf "✅✅✅ QUALITY PASSED (%ds)\n" "$TOTAL_ELAPSED"
