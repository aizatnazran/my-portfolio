<script setup>
import { useI18n } from 'vue-i18n'
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'
import { Icon } from '@iconify/vue'

useHead({
  title: 'Projects',
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
}

.project-img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.project-img-wrapper img {
  width: 100%; 
  height: auto; 
  object-fit: cover; 
}


</style>