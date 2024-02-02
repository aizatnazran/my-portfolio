<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.jpg" alt="Photo" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Aizat Nazran">Aizat Nazran</h1>

        <p
          class="title text-center xl:block flex items-center justify-center gap-1"
        >
          <span class="xl:after:content-[''] after:content-['']"
            >Full-Stack Developer</span
          >
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Github</p>

            <a
              href="https://github.com/aizatnazran"
              class="contact-link"
              target="_blank"
              >aizatnazran</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Linkedin</p>

            <a
              href="https://www.linkedin.com/in/aizat-nazran/"
              class="contact-link"
              target="_blank"
              >Aizat Nazran</a
            >
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <NuxtLink
              to="mailto:aizatnazran@gmail.com"
              class="social-link"
              target="_blank"
            >
              <a class="email-link">aizatnazran@gmail .com</a>
            </NuxtLink>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>Cheras, Kuala Lumpur</address>
          </div>
        </li>
      </ul>

      <div class="separator" />
    </div>
  </aside>
</template>

<style>
.email-link {
  color: var(--white-2);
}
</style>
