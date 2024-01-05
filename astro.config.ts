import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pandacss from '@pandacss/astro'

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), pandacss()]
});