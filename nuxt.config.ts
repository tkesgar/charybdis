import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    // Viewer currently does not work: https://github.com/nuxt-community/tailwindcss-module/issues/459
    // Workaround is to run tailwind-config-viewer directly:
    //
    //   npx tailwind-config-viewer --port 3001
    //
    viewer: false
  },
})
