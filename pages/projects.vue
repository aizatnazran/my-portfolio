<script setup>
import { useI18n } from 'vue-i18n'
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'
import { Icon } from '@iconify/vue'

useHead({
  title: 'Projects - Aizat Nazran | DevOps Engineer',
  meta: [
    { hid: 'description', name: 'description', content: 'Explore Aizat Nazran\'s project portfolio as a DevOps Engineer and full-stack developer. Discover innovative solutions across various industries.' },  
    { name: 'keywords', content: 'Aizat Nazran, Muhamad Aizat Nazran, project portfolio, devops engineer, full-stack developer, software development, projects, categories' }, 
    { property: 'og:title', content: 'Projects - Aizat Nazran | DevOps Engineer' }, 
    { property: 'og:description', content: 'Explore Aizat Nazran\'s projects and solutions as a DevOps Engineer and full-stack developer, showcasing innovative work across industries.' }, 
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://aizat.dev/projects' }, 
    { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' }, 
    { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' }, 
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Projects - Aizat Nazran | DevOps Engineer' },
     { name: 'twitter:description', content: 'Discover Aizat Nazran\'s projects and development solutions, highlighting innovative work as a DevOps Engineer and full-stack developer.' },
    { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' },
    { rel: 'canonical', href: 'https://aizat.dev/projects' }
  ]
})

const { locale } = useI18n({ useScope: 'global' })
const { data: projects } = await useFetch('/api/projects')
const { data: categories } = await useFetch('/api/categories')

const projectList = [...projects.value]
const activeCategory = ref(0)
const filterMenu = ref(false)
const activeCategoryName = ref('')

function changeFilter(id) {
  activeCategory.value = id
  if (id !== 0)
    activeCategoryName.value = categories.value.find(
      (item) => item.id === id,
    ).title

  filterMenu.value = !filterMenu.value
}

const activeItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showItem(id) {
  activeItem.value = projects.value.find((item) => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeItem() {
  activeItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
</script>

<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">
        {{ $t('Projects') }}
      </h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button
            :class="{ active: activeCategory === 0 }"
            @click="changeFilter(0)"
          >
            All
          </button>
        </li>

        <li
          v-for="category in categories"
          :key="category.id"
          class="filter-item"
          @click="changeFilter(category.id)"
        >
          <button :class="{ active: activeCategory === category.id }">
            {{ category.title?.en }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button
          :class="{ active: filterMenu }"
          class="filter-select"
          @click="filterMenu = !filterMenu"
        >
          <div class="select-value">
            {{
              activeCategory !== 0 ? activeCategoryName?.en : 'Select Category'
            }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button @click="changeFilter(0)">All</button>
          </li>

          <li
            v-for="category in categories"
            :key="category.id"
            class="select-item"
          >
            <button @click="changeFilter(category.id)">
              {{ category.title?.en }}
            </button>
          </li>
        </ul>
      </div>

    <ul class="project-list">
    <li
      v-for="project in projectList"
      :key="project.id"
      :class="{
        active:
          activeCategory === project.category.id || activeCategory === 0,
      }"
      class="project-item"
    >
      <a class="cursor-pointer" @click="showItem(project.id)">
        
        <div class="project-img-container">
          <div class="project-img-wrapper">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>

              <img :src="project.image" :alt="project.title" loading="lazy" />
            </figure>
          </div>
        </div>

        <h3 class="project-title">{{ project.title }}</h3>

        <p class="project-category">{{ project.category.title?.en }}</p>
      </a>
    </li>
  </ul>

      <div class="modal-container" :class="{ active: activeModal }">
        <div
          v-show="activeModal"
          class="overlay"
          :class="{ active: activeOverlay }"
           @click="closeItem"
        />

        <section class="testimonials-modal block">
          <button class="modal-close-btn" @click="closeItem">
            <ion-icon name="close-outline" />
          </button>

          <div>
            <figure>
              <img
                :src="activeItem.image"
                class="rounded-lg"
                :alt="activeItem.title"
              />
            </figure>
          </div>

          <div class="modal-content space-y-3 mt-4">
            <h4 class="h3 modal-title">
              {{ activeItem.title }}
            </h4>

            <small class="flex items-center justify-start gap-2 text-gray-500">
              <Icon icon="foundation:calendar" /><span>{{
                activeItem.category?.date?.en
              }}</span>
              | <Icon icon="dashicons:category" /><span>{{
                activeItem.category?.title?.en
              }}</span>
              |  <Icon icon="dashicons:building" /><span>{{
                activeItem.category?.company?.en
              }}</span>
              | <Icon icon="ri:search-eye-line" /><a
                :href="activeItem.url"
                target="_blank"
                >{{ activeItem.desc?.en }}</a
              >
            </small>
            

            <p class="text-justify" v-html="activeItem.content?.en" />
            <div v-if="activeItem.techStack" class="tech-stack">
  <h4 class="tech-stack-title">Tech Stack:</h4>
  <div class="tech-stack-list">
    <div v-for="tech in activeItem.techStack" :key="tech.name" class="tech-stack-item">
      <Icon :icon="tech.icon" class="tech-stack-icon" />
      <span>{{ tech.name }}</span>
    </div>
  </div>
</div>
          </div>
        </section>
      </div>
    </section>
  </article>
</template>

<style>
.project-img-container {
  width: 100%;
  padding-top: 56.25%; 
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background-color: transparent;
}

.project-img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
}

.project-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.project-item-icon-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.tech-stack {
  margin-top: 15px;
}

.tech-stack-title {
  font-size: 1.1rem; 
  font-weight: lighter;
  margin-top: 20px;
  margin-bottom: 8px;
  color: var(--white-2);
}

.tech-stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-stack-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 14px; 
  font-weight: 500;
  color: var(--white-2);
  background: var(--border-gradient-onyx);
  padding: 8px 14px; 
  box-shadow: var(--shadow-2);
  transition: var(--transition-1);
  z-index: 1;
  overflow: hidden;
  cursor: default; 
  pointer-events: none;
}

.tech-stack-item::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
  transition: var(--transition-1);
}

.tech-stack-icon {
  font-size: 1.5rem; 
  margin-right: 6px;
}

.modal-container .testimonials-modal {
  scrollbar-width: thin; 
  scrollbar-color: hsla(0, 0%, 50%, 0.2) var(--eerie-black-2); 
}

.modal-container .testimonials-modal::-webkit-scrollbar {
  width: 20px; 
  border: 1px solid hsla(0, 0%, 84%, 0.2); 
  border-radius: 20px;
}

.modal-container .testimonials-modal::-webkit-scrollbar-track {
  background: var(--eerie-black-2);
  border-radius: 20px;
}

.modal-container .testimonials-modal::-webkit-scrollbar-thumb {
  border: 5px solid var(--eerie-black-2);
  background: hsla(0, 0%, 50%, 0.2);
  border-radius: 20px;
  box-shadow:
    inset 1px 1px 0 hsla(0, 0%, 50%, 0.11),
    inset -1px -1px 0 hsla(0, 0%, 50%, 0.11);
}

.modal-container .testimonials-modal::-webkit-scrollbar-thumb:hover {
  background: hsla(0, 0%, 50%, 0.10); 
}
</style>