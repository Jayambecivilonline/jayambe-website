import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jayambeengworks.in',
  trailingSlash: 'always',
  // the /experience/ test page stays out of the sitemap
  // /vadodara/ is only a folder for keyword pages; send visitors to the Vadodara location page
  redirects: { '/vadodara/': '/locations/vadodara/' },
  integrations: [sitemap({ filter: (page) => !page.includes('/experience/') && !page.endsWith('/vadodara/') })],
});
