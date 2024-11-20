// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-30',

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  routeRules: {
    '/v2-upgrade-guide': {
      redirect: 'https://ijkml.dev/posts/nuxt-umami-v3?ref=https://umami.nuxt.dev',
    },
  },

  extends: ['shadcn-docs-nuxt'],

  modules: ['nuxt-umami'],

  ogImage: {
    enabled: false,
  },

  umami: {
    domains: ['umami.nuxt.dev'],
    proxy: 'cloak',
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'houston',
      },
    },
  },

  icon: {
    mode: 'css',
    serverBundle: false,
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
  },

  devtools: { enabled: true },
});
