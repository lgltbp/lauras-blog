import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    description: z.string(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      coverImage: image(),
      citation: z.string(),
      articleUrl: z.string().url(),
    }),
});

export const collections = {
  posts,
  publications,
};
