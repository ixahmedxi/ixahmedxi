import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import pandacss from '@pandacss/astro';
import { defineConfig } from 'astro/config';

import { siteConfig } from './src/siteConfig';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site,
  integrations: [mdx(), sitemap(), pandacss()],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  output: 'hybrid',
  adapter: vercel(),
});
