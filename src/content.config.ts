import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const works = defineCollection({
  loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      image: image().optional(),
      url: z.string().url().optional(),
    }),
})

export const collections = { works }
