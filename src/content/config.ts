import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    readTime: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
