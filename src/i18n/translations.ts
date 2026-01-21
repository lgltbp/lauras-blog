export const translations = {
  en: {
    home: "Home",
    welcome: "Welcome!",
    about: "About",
    contact: "Contact",
    blog: "Blog",
    publications: "Publications",
    readArticle: "Read the article",
    copyCitation: "Copy citation",
    homeIntro:
      "I'm Laura Gillet, a psychologist and PhD student in ethology at Eötvös Loránd University in Budapest. My research explores the evolving relationship between humans and dogs in modern society, particularly how dog ownership is redefining concepts of family and parenting in Western cultures.",
    homeResearch:
      "As part of the MTA-ELTE Lendület Momentum Companion Animal Research Group, I investigate the costs and benefits of dog keeping, examining how our canine companions influence human social networks in an era marked by increasing loneliness and changing family structures.",
    homeWork:
      "My work includes cross-cultural comparisons of dog ownership patterns and the study of dogs' child-like roles in contemporary households. Through this research, I aim to better understand the profound ways in which dogs have become integral members of our families and societies.",
    homeDescription:
      "Laura Gillet - Psychologist and PhD student in ethology researching the evolving relationship between humans and dogs in modern society at Eötvös Loránd University.",
    aboutDescription:
      "Learn about Laura Gillet's background, academic journey, and research in ethology focusing on human-dog relationships and companion animal behavior.",
    contactDescription:
      "Get in touch with Laura Gillet. Find links to professional profiles including LinkedIn, ResearchGate, ORCID, and Google Scholar.",
    blogDescription:
      "Read Laura Gillet's blog posts about dog behavior, ethology research, and insights on human-canine relationships.",
    publicationsDescription:
      "Browse Laura Gillet's scientific publications on dog ownership, human-dog relationships, and the role of dogs in contemporary families.",
    participate: "Participate!",
    participateDescription:
      "Participate in Laura Gillet's research studies on human-dog relationships. Help advance our understanding of companion animal behavior.",
  },
  fr: {
    home: "Accueil",
    welcome: "Bienvenue !",
    about: "À propos",
    contact: "Contact",
    blog: "Blog",
    publications: "Publications",
    readArticle: "Lire l'article",
    copyCitation: "Copier la citation",
    homeIntro:
      "Je suis Laura Gillet, psychologue et doctorante en éthologie à l'Université Eötvös Loránd de Budapest. Mes recherches explorent l'évolution de la relation entre les humains et les chiens dans la société moderne, en particulier la façon dont la possession de chiens redéfinit les concepts de famille et de parentalité dans les cultures occidentales.",
    homeResearch:
      "Au sein du groupe de recherche MTA-ELTE Lendület Momentum sur les animaux de compagnie, j'étudie les coûts et les bénéfices de la possession de chiens, en examinant comment nos compagnons canins influencent les réseaux sociaux humains dans une époque marquée par une solitude croissante et des structures familiales en mutation.",
    homeWork:
      "Mon travail comprend des comparaisons interculturelles des modes de possession de chiens et l'étude des rôles quasi-infantiles des chiens dans les foyers contemporains. À travers ces recherches, je vise à mieux comprendre les façons profondes dont les chiens sont devenus des membres intégraux de nos familles et de nos sociétés.",
    homeDescription:
      "Laura Gillet - Psychologue et doctorante en éthologie recherchant l'évolution de la relation entre les humains et les chiens dans la société moderne à l'Université Eötvös Loránd.",
    aboutDescription:
      "Découvrez le parcours académique et les recherches de Laura Gillet en éthologie sur les relations humain-chien et le comportement des animaux de compagnie.",
    contactDescription:
      "Contactez Laura Gillet. Trouvez les liens vers ses profils professionnels incluant LinkedIn, ResearchGate, ORCID et Google Scholar.",
    blogDescription:
      "Lisez les articles de blog de Laura Gillet sur le comportement canin, la recherche en éthologie et les relations humain-chien.",
    publicationsDescription:
      "Consultez les publications scientifiques de Laura Gillet sur la possession de chiens, les relations humain-chien et le rôle des chiens dans les familles contemporaines.",
    participate: "Participez !",
    participateDescription:
      "Participez aux études de recherche de Laura Gillet sur les relations humain-chien. Aidez à faire avancer notre compréhension du comportement des animaux de compagnie.",
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
