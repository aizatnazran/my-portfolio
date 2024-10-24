<template>
  <main class="py-20 px-10 text-center">
    <slot />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Home Layout]</div>
  </main>
</template>
<script setup>
useHead({
  title: "Aizat Nazran's Portfolio | DevOps Engineer",
  meta: [
    { hid: 'description', name: 'description', content: 'Welcome to Aizat Nazran\'s portfolio, showcasing projects, skills, and expertise in full-stack development and DevOps.' },
  ]
});
</script>