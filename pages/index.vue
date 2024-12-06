<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

useHead({
  title: 'Aizat Nazran\'s Portfolio | DevOps Engineer',
  meta: [
    { hid: 'description', name: 'description', content: 'Learn more about Aizat Nazran, a DevOps Engineer and full-stack developer specializing in scalable solutions and continuous improvement.' }, 
    { name: 'keywords', content: 'Aizat Nazran, Muhamad Aizat Nazran, about, devops engineer, full-stack developer, skills, testimonials' }, 
    { property: 'og:title', content: 'About - Aizat Nazran | DevOps Engineer' }, 
    { property: 'og:description', content: 'Discover Aizat Nazran\'s skills, background, and achievements as a DevOps Engineer and full-stack developer focusing on scalable solutions.' },  
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://aizat.dev/' }, 
    { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' }, 
    { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' }, 
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'About - Aizat Nazran | DevOps Engineer' },
     { name: 'twitter:description', content: 'Explore Aizat Nazran\'s background and skills in DevOps and full-stack development, focusing on delivering scalable and efficient solutions.' },
    { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' },
    { rel: 'canonical', href: 'https://aizat.dev/' }
  ]
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find((item) => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')

/* Services */
const { data: about } = await useFetch('/api/about')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
     About
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
      </ul>
    </section>

    <!-- service -->
    <header>
      <h2 class="h2 article-title">
        {{ $t('Skills') }}
      </h2>
    </header>
    <section class="service">
      <br />
      <ul class="service-list">
        <ServiceItem
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </ul>
    </section>

    <div class="modal-container" :class="{ active: activeModal }">
      <div
        v-show="activeModal"
        class="overlay"
        :class="{ active: activeOverlay }"
      />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80" />
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img
            class="my-auto hidden md:block"
            src="/images/icon-quote.svg"
            alt="quote icon"
          />
          <p
            class="text-justify text-gray-400 text-sm md:text-md"
            v-html="testimonialItem.content?.en"
          />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div>
  </article>
</template>

<style scoped>

.about-text {
  text-align: center;
}
</style>