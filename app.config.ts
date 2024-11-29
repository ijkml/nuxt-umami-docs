export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Nuxt Umami',
      description: 'Umami Analytics built for Nuxt. Effortless analytics and real-time insights.',
    },
    theme: {
      customizable: true,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'Nuxt Umami',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ijkml/nuxt-umami',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: false,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: '©ML, with 🖤, Pluto.',
      links: [
        {
          icon: 'ph:github-logo-duotone',
          to: 'https://github.com/ijkml/nuxt-umami',
          target: '_blank',
        },
        {
          icon: 'ph:person-simple-throw-duotone',
          to: 'https://ijkml.dev/?ref=https://umami.nuxt.dev',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/ijkml/nuxt-umami',
          target: '_blank',
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/ijkml/nuxt-umami/issues',
          target: '_blank',
        },
        {
          title: 'Edit Docs',
          icon: 'lucide:pencil-line',
          to: 'https://github.com/ijkml/nuxt-umami-docs',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
