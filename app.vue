<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

locale.value = cookieLocale.getLocale || 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true
  }, 1000)
})

useHead({
  title: 'Aizat Nazran\'s Portfolio | DevOps Engineer', // Default title
  meta: [
    { hid: 'description', name: 'description', content: 'Learn more about Aizat Nazran, a DevOps Engineer and full-stack developer with a focus on delivering scalable solutions.' }, 
    { name: 'keywords', content: 'Aizat Nazran, Muhamad Aizat Nazran, about, devops engineer, full-stack developer, skills, testimonials' }, 
    { property: 'og:title', content: 'Aizat Nazran\'s Portfolio | DevOps Engineer' }, 
    { property: 'og:description', content: 'Discover more about Aizat Nazran\'s skills, background, and achievements as a DevOps Engineer and full-stack developer.' }, 
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://aizat.dev/' }, 
    { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' }, 
    { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' }, 
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Aizat Nazran\'s Portfolio | DevOps Engineer' },
    { name: 'twitter:description', content: 'Learn more about Aizat Nazran\'s background and skills in DevOps and full-stack development.' },
    { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' }
  ]
})
</script>

<template>
  <LoadingPage v-show="!loadingPage" />

  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
