import type { APIContext } from 'astro';

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { siteConfig } from '../siteConfig';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ?? siteConfig.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
