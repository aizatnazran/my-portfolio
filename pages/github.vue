<script setup>
useHead({
  title: 'Github Repositories - Aizat Nazran | DevOps Engineer',
  meta: [
    { hid: 'description', name: 'description', content: 'Explore the GitHub repositories of Aizat Nazran, a DevOps Engineer and full-stack developer.' }, 
    { name: 'keywords', content: 'Aizat Nazran, github, repositories, devops engineer, full-stack developer, projects, GitHub profile' }, 
    { property: 'og:title', content: 'Github Repositories - Aizat Nazran | DevOps Engineer' }, 
    { property: 'og:description', content: 'View the open-source projects and repositories contributed to by Aizat Nazran on GitHub.' }, 
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://aizat.dev/github' }, 
    { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' }, 
    { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' }, 
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Github Repositories - Aizat Nazran | DevOps Engineer' },
    { name: 'twitter:description', content: 'Explore Aizat Nazran\'s contributions on GitHub and open-source projects.' },
    { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' },
    { rel: 'canonical', href: 'https://aizat.dev/github' }
  ]
})
</script>

<template>
  <article class="github active" data-page="github">
    <header>
      <h2 class="h2 article-title">
        Github
      </h2>
    </header>

    <section class="github-form">
      <div class="input-wrapper">
        <div v-for="repo in repos" :key="repo.id" class="github">
          <GithubReposItem
            :repository="repo"
            :bg-color="repo.language ? colors[repo.language].color : '#ffffff'"
          />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import axios from 'axios'
import GithubReposItem from './GithubRepo.vue'

export default {
  name: 'GithubRepos',
  data() {
    return {
      repos: [],
      colors: {},
    }
  },
  methods: {
    getColors() {
      axios
        .get(
          'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json',
        )
        .then((res) => (this.colors = res.data))
    },
    getRepos() {
      axios
        .get('https://api.github.com/users/aizatnazran/repos')
        .then((res) => {
          this.repos = res.data
            .filter((repo) => !repo.all)
            .sort(
              (repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count,
            )
            .slice(0, 20)
        })
    },
  },
  async mounted() {
    await this.getColors()
    this.getRepos()
  },
  components: {
    GithubReposItem,
  },
}
</script>
