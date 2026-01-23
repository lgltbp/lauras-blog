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
      "My name's Laura Gillet and I'm a psychologist and PhD student in ethology at Eötvös Loránd University, Budapest, Hungary.",
    homeResearch:
      "In my research, I explore the relationships between humans and companion animals in modern society, particularly how pet ownership and pet care are redefining concepts of family and parenting in Western cultures.",
    homeWork:
      "I'm always happy to share about my work. Feel free to reach out if you'd like to discuss it or explore potential collaborations!",
    homeDescription: "Laura Gillet - Psychologist and PhD student in ethology.",
    aboutDescription:
      "Learn about Laura Gillet's background, academic journey, and research in ethology focusing on human-dog relationships and companion animal behavior.",
    contactDescription:
      "Get in touch with Laura Gillet. Find links to professional profiles including LinkedIn, ResearchGate, ORCID, and Google Scholar.",
    blogDescription:
      "Read Laura Gillet's blog posts about dog behavior, ethology research, and insights on human-canine relationships.",
    publicationsDescription:
      "Browse Laura Gillet's scientific publications on dog ownership, human-dog relationships, and the role of dogs in contemporary families.",
    participate: "Participate",
    participateDescription:
      "Participate in Laura Gillet's research studies on human-dog relationships. Help advance our understanding of companion animal behavior.",
    newsbarText: "Take part in our new survey!",
    newsbarButton: "Learn more",
    researcherNote:
      "Researchers interested in collaborating can reach out via the",
    contactPage: "contact page",
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
      "Je m'appelle Laura Gillet et je suis psychologue et doctorante en éthologie à l'Université Eötvös Loránd de Budapest, en Hongrie.",
    homeResearch:
      "Mes sujets de recherche explorent les relations entre les humains et les animaux de compagnie dans la société actuelle, en particulier la façon dont notre rapport aux animaux redéfinit les concepts de famille et de parentalité dans les cultures occidentales.",
    homeWork:
      "C'est toujours un plaisir pour moi d'échanger autour de ces thématiques de travail. N'hésitez pas à me contacter si vous souhaitez en discuter ou explorer des collaborations potentielles !",
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
    participate: "Participer",
    participateDescription:
      "Participez aux études de recherche de Laura Gillet sur les relations humain-chien. Aidez à faire avancer notre compréhension du comportement des animaux de compagnie.",
    newsbarText: "Participez à notre nouvelle étude !",
    newsbarButton: "En savoir plus",
    researcherNote:
      "Les chercheurs intéressés par une collaboration peuvent nous contacter via la",
    contactPage: "page contact",
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
