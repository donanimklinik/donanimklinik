// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.donanimklinik.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !/(?:^|\/)draft(?:\/|$)/.test(new URL(page).pathname),
    }),
  ],
});
