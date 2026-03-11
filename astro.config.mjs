import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://www.matthewbrunetti.com',
  output: 'static',
  trailingSlash: 'always',
});
