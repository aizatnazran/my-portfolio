<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

useHead({
  title: 'Aizat Nazran\'s Portfolio | DevOps Engineer',
  meta: [
    { charset: 'utf-8' },
    { hid: 'description', name: 'description', content: 'Welcome to Aizat Nazran\'s portfolio. Discover his projects, skills, and experience in DevOps and full-stack development.' },
    { name: 'keywords', content: 'Aizat Nazran, Muhamad Aizat Nazran, portfolio, DevOps Engineer, full-stack developer, software projects, developer skills' },
    { property: 'og:title', content: 'Aizat Nazran\'s Portfolio | DevOps Engineer' },
    { property: 'og:description', content: 'Explore Aizat Nazran\'s professional portfolio, showcasing skills and projects in software engineering and DevOps.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://aizat.dev' },
    { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Aizat Nazran\'s Portfolio | DevOps Engineer' },
    { name: 'twitter:description', content: 'Discover the projects and expertise of Aizat Nazran in full-stack development and DevOps.' },
    { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' },
    { rel: 'canonical', href: 'https://aizat.dev/' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/icon.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: '',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})
</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
  </main>
</template>
