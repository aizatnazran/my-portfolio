<template>
    <article class="contact active" data-page="contact">
      <h2 class="h2 article-title">Contact Me</h2>
      <p class="contact-intro">
        Whether you're interested in collaborating on a project, discussing tech opportunities, or considering hiring me for your team, I'd love to hear from you! Fill out the form, and I'll get back to you as soon as possible.
      </p>
      <form class="github-form" @submit.prevent="handleSubmit($event)">
        <div class="input-wrapper">
          <input type="text" name="name" class="github contact" placeholder="Your Name" required v-model="form.name" />
          <input type="email" name="_replyto" class="github contact" placeholder="Your Email" required v-model="form.email" />
        </div>
        <textarea name="message" class="contact github" placeholder="Your Message" required v-model="form.message"></textarea>
        
        <input type="hidden" name="_next" />
        <button type="submit" class="form-btn">Send Message</button>
      </form>
    </article>
  </template>
  <script setup>
useHead({
  title: 'Contact - Aizat Nazran | DevOps Engineer',
  meta: [
    { hid: 'description', name: 'description', content: 'Contact Aizat Nazran for collaborations, tech opportunities, or inquiries about full-stack development and DevOps engineering services.' }, 
    { name: 'keywords', content: 'Aizat Nazran, Muhamad Aizat Nazran, contact, full-stack developer, devops engineer, collaborate, hire me, tech opportunities' }, 
    { property: 'og:title', content: 'Contact - Aizat Nazran | DevOps Engineer' }, 
    { property: 'og:description', content: 'Get in touch with Aizat Nazran for collaborations, hiring opportunities, or inquiries in DevOps and full-stack development.' }, 
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://aizat.dev/contact' }, 
    { property: 'og:image', content: 'https://aizat.dev/images/avatar2.jpg' }, 
    { property: 'og:image:alt', content: 'Aizat Nazran\'s profile picture' }, 
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact - Aizat Nazran | DevOps Engineer' },
    { name: 'twitter:description', content: 'Reach out to Aizat Nazran for project collaborations, hiring opportunities, or inquiries in DevOps and software development.' },
    { name: 'twitter:image', content: 'https://aizat.dev/images/avatar2.jpg' },
    { name: 'twitter:image:alt', content: 'Aizat Nazran\'s profile picture' },
    { rel: 'canonical', href: 'https://aizat.dev/contact' },
  ]
})
  import { ref } from 'vue';
  import Swal from 'sweetalert2';
  
  const form = ref({
    name: '',
    email: '',
    message: '',
  });
  
  async function handleSubmit() {
    event.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mleqnqek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.value.name,
          _replyto: form.value.email,
          message: form.value.message,
          _subject: `Website Contact Form Submission from ${form.value.name}`,
        }),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully. I will get back to you soon.',
        });
        form.value = {
          name: '',
          email: '',
          message: '',
        };
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong with sending your message.',
      });
    }
  }
  </script>
  
  <style scoped>
  .contact-intro {
    color: var(--light-gray); 
    margin-bottom: 2rem; 
    font-size: var(--fs-6); 
    text-align: center; 
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  