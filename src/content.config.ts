import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['computers', 'phones', 'networking', 'software', 'peripherals']),
    pillar: z.string(),
    status: z.enum(['draft', 'review', 'published']).default('published'),
    official_source_url: z.string().url(),
    written_at: z.coerce.date(),
    published_at: z.coerce.date().optional(),
    views_daily: z.number().default(0),
    views_monthly: z.number().default(0),
    revenue_daily: z.number().default(0),
    top_search_queries: z.array(z.string()).default([]),
    read_time: z.number().optional(),
    schema_type: z.enum(['Article', 'HowTo', 'FAQPage']).default('Article'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
