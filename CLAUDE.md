# CONTRIBUTION RULES

## About

This is a portfolio static website.

Pages:

- Landing
- Contact
- About
- Blog posts
- Scientific publications list

## I18n

Simple, file-based internationalization without external libraries:

**Translations:**

- Single source of truth: `./src/i18n/translations.ts`
- Contains `languages` array, `languageMetadata` object, and `translations` dictionary
- Access translations using `getTranslation(lang)` helper function
- Configured in `astro.config.mjs` using `i18n.locales` and `i18n.defaultLocale`

**Content organization:**

- Content separated by language in subdirectories: `./src/content/posts/en/`, `./src/content/posts/fr/`
- Language inferred from directory structure, not frontmatter
- Post IDs include language prefix: `"en/hello-world.md"`
- Filter content by language: `posts.filter(post => post.id.startsWith(`${lang}/`))`

**Pages and components:**

- Pages receive `lang` as prop via `getStaticPaths()` params
- Astro components receive `lang` as prop from parent pages
- Pass `lang` to Layout component for HTML `lang` attribute
- Use `getTranslation(lang)` to access localized strings

**URL structure:**

- Root `/` shows language selection page
- Language-specific pages: `/{lang}/` (e.g., `/en/`, `/fr/`)
- Post pages: `/{lang}/{slug}` (e.g., `/en/hello-world`)
- Language always explicit in URLs, no automatic detection

**Key patterns:**

- Extract language from post ID: `const [lang, ...slugParts] = post.id.split("/")`
- Format dates with locale: `date.toLocaleDateString(lang)`
- Generate routes for all languages in `getStaticPaths()` using `languages` array

## Tech stack

- Framework : astro
- Language : typescript
- UI : astro components
- Styling : use tailwindcss and daisyui components. The theme is defined in global.css

## Markdown style rules

- NO html in markdown files
- Image: on their own line, NO alt text
- Heading capitalization: Only the first letter of the heading and proper nouns are capitalized
- A paragraph text should be on a single line with no line breaks within it
- Use bulleted lists `-` for list of information or succession of short sentences, do NOT use paragraphs or numbered lists `1.`
- Always refer to sections using the format `(§5.1)`
- Use `*` for italics and bold instead of `_`

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
