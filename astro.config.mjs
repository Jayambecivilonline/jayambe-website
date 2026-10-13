import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jayambeengworks.in',
  trailingSlash: 'always',
  // the /experience/ test page stays out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/experience/') })],
});
