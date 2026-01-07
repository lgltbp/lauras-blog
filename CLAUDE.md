# CONTRIBUTION RULES

## About

This is a portfolio static website built with astro.

## Tech stack

- Framework : astro
- Language : typescript
- UI : react
- Styling : use tailwindcss and daisyui components. The theme is defined in global.css

## Markdown style rules

- NO html in markdown files
- Image: on their own line, NO alt text
- Heading capitalization: Only the first letter of the heading and proper nouns are capitalized
- A paragraph text should be on a single line with no line breaks within it
- Use bulleted lists `-` for list of information or succession of short sentences, do NOT use paragraphs or numbered lists `1.`
- Always refer to sections using the format `(§5.1)`
- Use `*` for italics and bold instead of `_`

## Glossary

- Dessintey: company name

## Content Files locations

- Document metadata (no content) `./src/content/documents/en-us/document-name.md`
- Chapters metadata and content `./src/content/chapters/en-us/document-name/chapter-name.md`
- Images (linked using `@/assets...`) `./src/assets/content/document-name/image-name.png`
- Languages list (unique source of truth) `./src/i18n/translations.ts`

## Quality

Always run ./run_quality.sh after any change. It does the following:

- install dependencies using pnpm
- lint using eslint
- typecheck using tsc
- format using prettier

## Philosophy

- Simple and minimal, no "over engineering" or "just in case". No special case or branching.
- Consistency of style, architecture and patterns above all. Make sure to look arround before any change.
- Single responsibility principle. Each module/class/function should have a single responsibility.
- Single source of truth. As little state as possible, and only in one place.

## File size

- Keep files under 200 lines. Split into multiple files if needed.
- Only one export per file (it can be a class/function/type/const/enum...)
  - otherwise, extract it to a separate file with the same name
  - small and local ones (not exported) can remain at the top of the file
