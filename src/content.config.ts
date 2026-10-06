import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Web platforms and products. One folder per entry: src/content/work/<slug>/index.md
 * with an optional cover.png beside it.
 */
const work = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      featured: z.boolean().default(false),
      kind: z.string(),
      tagline: z.string(),
      pitch: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      role: z.string().optional(),
      stack: z.array(z.string()).default([]),
      scale: z.string().optional(),
      status: z.string().optional(),
      period: z.string().optional(),
      url: z.url().optional(),
      urlLabel: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      specs: z.array(z.string()).default([]),
      /** Case-study copy (featured rows only). */
      headline: z.string().optional(),
      meta: z.string().optional(),
      stat: z.object({ value: z.string(), caption: z.string(), detail: z.string().optional() }).optional(),
      accent: z.string().default('#151817'),
      /** Optional override for the faded section tint; defaults to 7% of accent on paper. */
      wash: z.string().optional(),
      /** Silent looping MP4 under public/, e.g. "/media/work/gridcore.mp4". The cover is its poster. */
      video: z.string().optional(),
    }),
});

/**
 * Native iOS apps. One folder per app: src/content/apps/<slug>/index.md
 * with screenshots and icon.png beside it. See docs/ios-app-brief.md.
 * Entries with draft: true render only in `astro dev`, never in a build.
 */
const apps = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      name: z.string().default(''),
      tagline: z.string().default(''),
      order: z.number().default(99),
      draft: z.boolean().default(false),
      category: z.string().default(''),
      status: z
        .enum(['App Store', 'TestFlight', 'Private beta', 'In development', ''])
        .default(''),
      year: z.string().default(''),
      platforms: z.array(z.string()).default([]),
      role: z.string().default(''),
      stack: z.array(z.string()).default([]),
      summary: z.string().default(''),
      highlights: z.array(z.string()).default([]),
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      links: z
        .object({
          appStore: z.url().optional(),
          testflight: z.url().optional(),
          github: z.url().optional(),
          website: z.url().optional(),
        })
        .default({}),
      accent: z.string().default('#f0b347'),
      /** Optional silent demo MP4 under public/, e.g. "/media/apps/<slug>.mp4". First screenshot is its poster. */
      video: z.string().optional(),
      icon: image().optional(),
      screenshots: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { work, apps };
