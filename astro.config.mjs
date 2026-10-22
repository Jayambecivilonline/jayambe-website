import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// /vadodara/, /savli/ etc. are only folders for keyword pages; send visitors to the matching location page
const folders = ['vadodara', 'karjan', 'por', 'dahej', 'manjusar', 'savli', 'makarpura'];
const redirects = Object.fromEntries(folders.map((f) => [`/${f}/`, `/locations/${f}/`]));

export default defineConfig({
  site: 'https://jayambeengworks.in',
  trailingSlash: 'always',
  redirects,
  // the /experience/ test page and the redirect folders stay out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/experience/') && !folders.some((f) => page.endsWith(`.in/${f}/`)) })],
});
