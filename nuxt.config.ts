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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Learn more about Aizat Nazran, a DevOps Engineer and full-stack developer.' },
        { hid: 'keywords', name: 'keywords', content: 'Aizat Nazran, DevOps Engineer, Full-stack Developer, Skills, Testimonials' },
        // Open Graph / Social sharing
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://aizat.dev/' },
        { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' },
        { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
})
