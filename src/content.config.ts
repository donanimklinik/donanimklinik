import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['computers', 'networking', 'software', 'peripherals']),
    pillar: z.string(),
    status: z.enum(['draft', 'review', 'published']).default('published'),
    official_source_url: z.string().url(),
    source_last_verified_at: z.coerce.date().optional(),
    written_at: z.coerce.date(),
    published_at: z.coerce.date().optional(),
    views_daily: z.number().default(0),
    views_monthly: z.number().default(0),
    revenue_daily: z.number().default(0),
    top_search_queries: z.array(z.string()).default([]),
    howto_steps: z.array(z.object({ name: z.string(), text: z.string() })).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    updated_at: z.coerce.date().optional(),
    read_time: z.number().optional(),
    schema_type: z.enum(['Article', 'HowTo', 'FAQPage']).default('Article'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
