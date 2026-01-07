#!/bin/bash

corepack enable

# Kill any process running on port 54321
fuser -k 54321/tcp 2>/dev/null || true

pnpm install
pnpm run dev -- --port 54321
