// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { languages, defaultLanguage } from "./src/i18n/translations.ts";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Raleway",
        cssVariable: "--font-sans",
        weights: [400, 500, 600, 700],
        styles: ["normal", "italic"],
      },
      {
        provider: fontProviders.google(),
        name: "Libre Bodoni",
        cssVariable: "--font-serif",
        weights: [400, 500, 600, 700],
        styles: ["normal", "italic"],
      },
    ],
  },
  i18n: {
    defaultLocale: defaultLanguage,
    locales: languages,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
