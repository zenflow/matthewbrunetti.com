import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const singleton = (filePath: string, entryId: string) =>
  file(filePath, {
    parser: (text) => ({
      [entryId]: JSON.parse(text),
    }),
  });

const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
});

const buttonSchema = z.object({
  text: z.string(),
  url: z.string(),
  target: z.enum(['_self', '_blank']).default('_self'),
});

const richTextBlockSchema = z.object({
  type: z.literal('richText'),
  html: z.string(),
});

const imageBlockSchema = z.object({
  type: z.literal('image'),
  src: z.string(),
  alt: z.string(),
});

const buttonSetBlockSchema = z.object({
  type: z.literal('buttonSet'),
  isInvertedColors: z.boolean().default(false),
  buttons: z.array(buttonSchema),
});

const typedTextBlockSchema = z.object({
  type: z.literal('typedText'),
  tag: z.string(),
  items: z.array(z.string()).min(1),
});

const percentagesBlockSchema = z.object({
  type: z.literal('percentages'),
  items: z.array(
    z.object({
      label: z.string(),
      percentage: z.number().int().min(0).max(100),
    }),
  ),
});

const blockSchema = z.discriminatedUnion('type', [
  richTextBlockSchema,
  imageBlockSchema,
  buttonSetBlockSchema,
  typedTextBlockSchema,
  percentagesBlockSchema,
]);

const heroSectionSchema = z.object({
  type: z.literal('hero'),
  name: z.string(),
  anchorId: z.string(),
  isLinkInNavbar: z.boolean(),
  isFixedBackground: z.boolean().default(false),
  textureImage: z.string().nullable().optional(),
  intro: z.array(blockSchema),
  image: z.array(blockSchema),
});

const genericSectionSchema = z.object({
  type: z.literal('generic'),
  name: z.string(),
  anchorId: z.string(),
  isLinkInNavbar: z.boolean(),
  heading: z.string(),
  title: z.string(),
  imagePosition: z.enum(['none', 'left', 'right']).default('none'),
  textAlign: z.enum(['left', 'center', 'right']).default('left'),
  main: z.array(blockSchema),
  image: z.array(blockSchema),
});

const listItemSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.array(blockSchema),
});

const listSectionSchema = z.object({
  type: z.literal('list'),
  name: z.string(),
  anchorId: z.string(),
  isLinkInNavbar: z.boolean(),
  heading: z.string(),
  title: z.string(),
  items: z.array(listItemSchema),
});

const siteGlobal = defineCollection({
  loader: singleton('src/content/site/global.json', 'global'),
  schema: z.object({
    siteTitle: z.string(),
    canonicalUrl: z.string().url(),
    defaultDescription: z.string(),
    theme: z.object({
      primary: z.string(),
    }),
    person: z.object({
      name: z.string(),
      title: z.string(),
      phone: z.string(),
      email: z.string().email(),
    }),
    social: z.array(socialLinkSchema),
  }),
});

const siteHome = defineCollection({
  loader: singleton('src/content/site/home.json', 'home'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fancyNavbar: z.boolean().default(false),
    sections: z.array(z.discriminatedUnion('type', [heroSectionSchema, genericSectionSchema, listSectionSchema])),
  }),
});

const siteBlog = defineCollection({
  loader: singleton('src/content/site/blog.json', 'blog'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    introHtml: z.string(),
    emptyStateTitle: z.string(),
    emptyStateBody: z.string(),
  }),
});

const blogPosts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    legacyId: z.string().nullable().optional(),
  }),
});

export const collections = {
  siteGlobal,
  siteHome,
  siteBlog,
  blogPosts,
};
