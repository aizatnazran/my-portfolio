export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  colorMode: {
    classSuffix: '',
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
  css: [
    // 'primevue/resources/themes/bootstrap4-dark-blue/theme.css',
    // 'primevue/resources/primevue.css',
    // 'primeicons/primeicons.css',
    '/assets/css/style.css',
  ],
  build: {
    transpile: ['primevue', 'pinia-orm'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  },
  vue: {
    config: {
      productionTip: true,
      warn: false,
    },
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('ion-'),
    },
  },
  loading: {
    color: 'blue',
    height: '5px',
  },
  app: {
    head: {
      title: "Aizat Nazran's Portfolio | DevOps Engineer",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to Aizat Nazran\'s portfolio, showcasing his skills and experience as a Full Stack Developer and DevOps Engineer, specializing in scalable solutions.',
        }, 
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Aizat Nazran, Muhamad Aizat Nazran, Full Stack Developer, DevOps Engineer, Portfolio, Software Development, Kubernetes, Docker, CI/CD, Jenkins',
        }, 
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://aizat.dev/' },
        {
          property: 'og:title',
          content: "Aizat Nazran's Portfolio | DevOps Engineer",
        },
        {
          property: 'og:description',
          content: 'Explore Aizat Nazran\'s portfolio, showcasing his expertise in full-stack development and DevOps.',
        },
        { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' },
        { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: "Aizat Nazran's Portfolio | DevOps Engineer",
        }, 
        {
          name: 'twitter:description',
          content: 'Discover Aizat Nazran\'s skills and projects in full-stack development and DevOps.',
        }, 
        { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
        { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
