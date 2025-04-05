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

        <a href="https://www.atlassian.com/devops/what-is-devops/devops-engineer" target="_blank" class="title-link">
    <p class="title text-center xl:block flex items-center justify-center gap-1">
      <span class="xl:after:content-[''] after:content-['']">
        DevOps Engineer
      </span>
    </p>
  </a>

  <a href="https://www.coursera.org/articles/full-stack-developer" target="_blank" class="title-link">
    <p class="title text-center xl:block flex items-center justify-center gap-1">
      <span class="xl:after:content-[''] after:content-['']">
        Full-Stack Developer
      </span>
    </p>
  </a>
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
          <a href="https://github.com/aizatnazran" target="_blank" class="icon-box-link">
    <div class="icon-box">
      <ion-icon name="logo-github" />
    </div>
  </a>

          <div class="contact-info">
            <p class="contact-title">Github</p>
            <a href="https://github.com/aizatnazran" class="contact-link" target="_blank">aizatnazran</a>
          </div>
        </li>

        <li class="contact-item">
          <a href="https://www.linkedin.com/in/aizat-nazran/" target="_blank" class="icon-box-link">
    <div class="icon-box">
      <ion-icon name="logo-linkedin" />
    </div>
  </a>

          <div class="contact-info">
            <p class="contact-title">Linkedin</p>
            <a href="https://www.linkedin.com/in/aizat-nazran/" class="contact-link" target="_blank">Aizat Nazran</a>
          </div>
        </li>

        <li class="contact-item">
          <a href="mailto:aizatnazran@gmail.com" target="_blank" class="icon-box-link">
    <div class="icon-box">
      <ion-icon name="mail-outline" />
    </div>
  </a>

          <div class="contact-info">
            <p class="contact-title">Email</p>
            <a href="mailto:aizatnazran@gmail.com" class="social-link email-link contact-link" target="_blank">aizatnazran@gmail.com</a>
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

        <!-- Download Resume Button -->
        <li class="contact-item">
          <a href="/images/Aizat_Nazran_Resume.pdf" class="download-resume-btn" download="Aizat Nazran's Resume.pdf">
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

.title-link {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out; 
  padding: 0.5px 5px;
  border-radius: 8px;
  background-color: var(--bg-gradient-jet); 
}

.title-link:hover {
  background-color: var(--bg-gradient-hover); 
  color: var(--hover-color); 
  transform: scale(1.05); 
}

.title-link:hover p {
  color: inherit;
}
.email-link {
  color: var(--white-2);
}

.info-content .title {
  margin-bottom: 2px; 
}

.download-resume-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px; 
  font-size: 13px;
  color: var(--vegas-gold);
  background: var(--border-gradient-onyx);
  padding: 10px 15px;
  box-shadow: var(--shadow-2);
  transition: var(--transition-1);
  z-index: 1;
  overflow: hidden;
}

.download-resume-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: var(--bg-gradient-jet);
  z-index: -1;
  transition: var(--transition-1);
}

.download-resume-btn:hover::before,
.download-resume-btn:focus::before {
  background: var(--bg-gradient-yellow-2); 
}

.download-resume-btn ion-icon {
  margin-right: 8px;
}

.download-resume-btn span {
  display: inline;
}

.download-resume-btn a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
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

.contact-link {
  text-decoration: none;
  color: inherit;
   display: inline-block;
  transition: all 0.3s ease-in-out; 
}

.contact-link:hover {
  color: #ffb400;
  transform: translateX(10px); 
}

.contact-link:hover .contact-info,
.contact-link:hover .icon-box,
.contact-link:hover ion-icon {
  transform: none;
  color: inherit;
}

.icon-box-link .icon-box {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: var(--shadow-1); 
}

.icon-box-link:hover .icon-box {
  background-color: #ffb400; 
  transform: scale(1.1);
}

</style>
