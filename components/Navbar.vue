<script setup></script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          About
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/background" class="navbar-link">
          Professional Background
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/projects" class="navbar-link">
         Projects
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/github" class="navbar-link">
          Github
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
