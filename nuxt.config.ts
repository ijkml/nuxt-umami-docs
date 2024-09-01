// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-30',

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ],
    },
  },

  extends: ['shadcn-docs-nuxt'],

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'houston',
      },
    },
  },

  devtools: { enabled: true },
});
