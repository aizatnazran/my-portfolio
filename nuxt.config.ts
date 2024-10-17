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
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        config.build.rollupOptions.output.inlineDynamicImports = true;
      }
    },
  },
  css: [
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
  
  // Add this server configuration to listen on port 3001
  server: {
    port: 3001, // Specify port 3001
    host: '0.0.0.0', // Listen on all network interfaces (important for Docker)
  },
})
