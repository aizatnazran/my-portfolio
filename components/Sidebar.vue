<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar2.jpg" alt="Photo" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Aizat Nazran">Aizat Nazran</h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-['']">
            Full-Stack Developer
          </span>
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

            <a href="https://github.com/aizatnazran" class="contact-link" target="_blank">
              aizatnazran
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Linkedin</p>

            <a href="https://www.linkedin.com/in/aizat-nazran/" class="contact-link" target="_blank">
              Aizat Nazran
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:aizatnazran@gmail.com" class="social-link email-link contact-link" target="_blank">
              aizatnazran@gmail.com
            </a>
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

        <li class="contact-item">
          <a href="/images/Aizat_Nazran_Resume.pdf" class="download-resume-button" download="Aizat Nazran's Resume.pdf">
            <ion-icon name="download-outline"></ion-icon>
            <span>Download Resume</span>
          </a>
        </li>
      </ul>

      <div class="separator" />
    </div>
  </aside>
</template>

<style>
/* Original layout and positioning */
.email-link {
  color: var(--white-2);
}

.download-resume-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: #b78625;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}

.download-resume-button ion-icon {
  margin-right: 8px;
}

.download-resume-button:hover {
  background-color: #765718;
}

.contacts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.contact-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hover animation for text in contact links */
.contact-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s, transform 0.3s;
}

.contact-link:hover {
  color: #ffb400; /* Change text color on hover */
  transform: scale(1.05); /* Slightly enlarge text on hover */
}

/* Ensure other elements don't change on hover */
.contact-link:hover .contact-info,
.contact-link:hover .icon-box,
.contact-link:hover ion-icon {
  transform: none;
  color: inherit;
}
</style>
