export const translations = {
  en: {
    home: "Laura Gillet",
  },
  fr: {
    home: "Laura Gillet",
  },
} as const;

export const languageMetadata = {
  en: {
    code: "en",
    name: "English",
    url: "/en/",
  },
  fr: {
    code: "fr",
    name: "Français",
    url: "/fr/",
  },
} as const;

// Explicit array of supported language codes
export const languages = ["en", "fr"];

// Default language
export const defaultLanguage = "en" as const;

export function getTranslation(lang: string) {
  return (
    translations[lang as keyof typeof translations] ||
    translations[defaultLanguage]
  );
}
