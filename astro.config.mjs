// @ts-check
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://pierreburel.github.io',
  base: '/test-portfolio',
  integrations: [mdx(), react()],
  experimental: {
    contentIntellisense: true,
  },
})
