<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue'
useHead({
  title: 'Background - Aizat Nazran | DevOps Engineer',
  meta: [
    { hid: 'description', name: 'description', content: 'Discover the educational background and work experience of Aizat Nazran, a DevOps Engineer and full-stack developer.' }, 
    { name: 'keywords', content: 'Muhamad Aizat Nazran, Aizat Nazran, background, education, work experience, software engineer, full-stack developer, devops engineer, devops' }, 
    { property: 'og:title', content: 'Background - Aizat Nazran | DevOps Engineer' }, 
    { property: 'og:description', content: 'Learn about Aizat Nazran\'s education and professional journey in the DevOps field, showcasing expertise in full-stack development.' }, 
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://aizat.dev/background' }, 
    { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' }, 
    { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' }, 
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Background - Aizat Nazran | DevOps Engineer' },
    { name: 'twitter:description', content: 'Explore Aizat Nazran\'s education and professional background, highlighting expertise in DevOps and full-stack development.' },
    { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' },
    { rel: 'canonical', href: 'https://aizat.dev/background' },
  ]
})

const activeModal = ref(false);
const activeOverlay = ref(false);
const activeCertificate = ref({});

const certificates = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    category: {
      date: 'January 2025',
      title: 'Cloud Certification',
      company: 'Amazon Web Services (AWS)',
      url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/47251a2939074c2b94778e5b04e9a236'
    },
    content: 'Earning the AWS Certified Cloud Practitioner certification provided me with a comprehensive understanding of the AWS Cloud and its global infrastructure. The certification validates my knowledge of essential cloud concepts, including AWS services, security, compliance, and pricing models. It also reinforced my ability to explain the value proposition of cloud computing and articulate fundamental architectural principles. This certification solidifies my foundational AWS knowledge, complementing my expertise in more advanced cloud and DevOps practices.',
    image: '/images/AWS.png',
    desc: 'View Certificate',
    desc_in: 'Verify Certificate',
  },
  {
    id: 2,
    title: 'AWS-COA - Cloud Operations on AWS',
    category: {
      date: 'September 2024',
      title: 'Cloud Operations Training',
      company: 'Trainocate',
      url: 'https://trainocate.com/validate-cert/43c32e7e-f615-4897-931e-a40125f6e462/MTM3MDc0'
    },
    content: 'During the Cloud Operations on AWS course, I gained valuable insights into configuring, deploying, and maintaining AWS environments. The course provided hands-on experience with automating operational tasks, ensuring resource compliance, and enhancing security to prevent downtime. I also learned how to troubleshoot AWS infrastructure efficiently, with a focus on operational excellence, which has equipped me with the skills to optimize and secure AWS environments in day-to-day operations.',
    image: '/images/Trainocate.jpeg',
    desc: 'View Certificate',
    desc_in: 'Verify Certificate',
  },
  {
    id: 3,
    title: 'Certified Kubernetes Administrator',
    category: {
      date: 'July 2024',
      title: 'Kubernetes Certification',
      company: 'The Linux Foundation',
      url: 'https://www.credly.com/badges/e8ad608f-e637-4b08-a813-48dba84eb626/',
    },
    content: 'The Certified Kubernetes Administrator (CKA) course provided in-depth knowledge of Kubernetes architecture and hands-on experience with managing and deploying containerized applications at scale. I learned how to efficiently set up, configure, and troubleshoot Kubernetes clusters, manage networking, storage, and security, and perform essential administrative tasks such as monitoring and upgrading clusters. This certification has strengthened my skills in automating and orchestrating application deployments, enhancing my ability to manage modern containerized environments.',
    image: '/images/CNCF.png',
    desc: 'View Certificate',
    desc_in: 'Verify Certificate',
  },
  {
    id: 4,
    title: 'Certified DevOps Foundation',
    category: {
      date: 'June 2024',
      title: 'DevOps Certification',
      company: 'CCSD Council',
      url: 'https://www.ccsdcouncil.org/certificate-verification',
    },
    content: 'The Certified DevOps Foundation course provided me with a comprehensive understanding of DevOps principles and practices. I learned how to bridge the gap between development and operations teams through automation, continuous integration, and continuous delivery (CI/CD) pipelines. The course emphasized collaboration, process optimization, and the use of modern tools to streamline software delivery. This certification has equipped me with foundational skills to implement DevOps strategies, improve workflow efficiency, and enhance software quality in any development environment.',
    image: '/images/CCSD.png',
    desc: 'View Certificate',
    desc_in: 'Verify Certificate',
  },
  {
    id: 5,
    title: 'AWS re/Start Graduate',
    category: {
      date: 'January 2024',
      title: 'Cloud Training',
      company: 'Amazon Web Services',
      url: 'https://www.credly.com/badges/13d0c3b8-0ef6-4657-bf10-0879f21a50ba/linked_in_profile',
    },
    content: 'The AWS re/Start program provided a solid foundation in cloud computing, with a focus on core AWS services and infrastructure. Throughout the program, I gained hands-on experience in configuring and managing AWS services, such as compute, storage, and networking. The course also covered key topics like security best practices, monitoring, and troubleshooting. With a strong emphasis on real-world scenarios, AWS re/Start equipped me with practical skills to launch and manage cloud-based applications, preparing me for entry-level cloud roles.',
    image: '/images/WEPS.png',
    desc: 'View Certificate',
    desc_in: 'Verify Certificate',
  }
];

// Function to show certificate modal
function showCertificate(certificateId) {
  activeCertificate.value = certificates.find(certificate => certificate.id === certificateId);
  activeModal.value = true;
  activeOverlay.value = true;
}

function closeModal() {
  activeModal.value = false;
  activeOverlay.value = false;
  activeCertificate.value = {}; 
}
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">Education</h2>
    </header>
    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">International Islamic University Malaysia (IIUM)</h4>
          <span>September 2019 — September 2023</span>
          <p class="timeline-item-desc">Gombak</p>
          <p class="timeline-text">Bachelor of Computer Science (Honours)</p>
          <p class="timeline-text">Majoring in Software Engineering</p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">Centre for Foundation Studies IIUM</h4>
          <span>June 2018 — May 2019</span>
          <p class="timeline-item-desc">Gambang</p>
          <p class="timeline-text">Foundation in Engineering</p>
        </li>
      </ol>
    </section>

    <header>
      <h2 class="h2 article-title">Work Experience</h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">A Serious Company Sdn. Bhd.</h4>
          <span>December 2023 — Present</span>
          <p class="timeline-item-desc">Bandar Sri Petaling</p>
          <p class="timeline-text">Full Stack Web Developer</p>
          <p class="timeline-text">DevOps Engineer</p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">toyyibPay Sdn. Bhd.</h4>
          <span>March 2023 — September 2023</span>
          <p class="timeline-item-desc">Bandar Tasik Selatan</p>
          <p class="timeline-text">Application Developer Intern</p>
        </li>
      </ol>
    </section>

    <header>
      <h2 class="h2 article-title">Certificates</h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li
          class="timeline-item"
          v-for="certificate in certificates"
          :key="certificate.id"
        >
          <h4 class="h4 timeline-item-title">{{ certificate.title }}</h4>
          <span>{{ certificate.category.company }}</span>
          <p class="timeline-item-desc">{{ certificate.category.date }}</p>
          
          <button
            class="view-certificate-btn"
            @click="showCertificate(certificate.id)"
          >
            <ion-icon name="eye-outline"></ion-icon>
            <span>{{ certificate.desc }}</span>
          </button>
        </li>
      </ol>
    </section>

    <!-- Modal for certificate details -->
    <div class="modal-container" :class="{ active: activeModal }">
      <div
        v-show="activeModal"
        class="overlay"
        :class="{ active: activeOverlay }"
        @click="closeModal"
      ></div>

      <section class="testimonials-modal block">
        <button class="modal-close-btn" @click="closeModal">
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div>
          <figure>
            <img :src="activeCertificate.image" class="rounded-lg" :alt="activeCertificate.title" />
          </figure>
        </div>

        <div class="modal-content space-y-3 mt-4">
          <h4 class="h3 modal-title">{{ activeCertificate.title }}</h4>

          <small class="flex items-center justify-start gap-2 text-gray-500">
            <Icon icon="foundation:calendar" /><span>{{ activeCertificate.category?.date }}</span>
            | <Icon icon="dashicons:category" /><span>{{ activeCertificate.category?.title }}</span>
            | <Icon icon="dashicons:building" /><span>{{ activeCertificate.category?.company }}</span>
          
            | <Icon icon="ri:search-eye-line" />
        <a
          :href="activeCertificate.category?.url"
          target="_blank"
          class="view-certificate-link"
          >{{ activeCertificate.desc_in }}</a
        >
          </small>

          <p class="text-justify">{{ activeCertificate.content }}</p>
        </div>
      </section>
    </div>
  </article>
</template>

<style scoped>
.view-certificate-btn {
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

.view-certificate-btn::before {
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

.view-certificate-btn:hover::before,
.view-certificate-btn:focus::before {
  background: var(--bg-gradient-yellow-2);
}

.view-certificate-btn ion-icon {
  margin-right: 8px;
}

.view-certificate-btn span {
  display: inline;
}

/* Modal styling */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 20;
  pointer-events: none;
  visibility: hidden;
}

.modal-container.active {
  pointer-events: all;
  visibility: visible;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 5%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 0.8;
  visibility: visible;
  pointer-events: all;
}

.testimonials-modal {
  background: var(--eerie-black-2);
  position: relative;
  padding: 15px;
  margin: 15px 12px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  box-shadow: var(--shadow-5);
  transform: scale(1.2);
  opacity: 0;
  transition: var(--transition-1);
  z-index: 2;
}

.modal-container.active .testimonials-modal {
  transform: scale(1);
  opacity: 1;
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--onyx);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-2);
  font-size: 18px;
  opacity: 0.7;
}

.modal-close-btn:hover,
.modal-close-btn:focus {
  opacity: 1;
}

.modal-close-btn ion-icon {
  --ionicon-stroke-width: 50px;
}

.modal-title {
  margin-bottom: 4px;
}

.modal-content p {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}
</style>
