// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Landing from './Landing.vue';
import Contact from './Contact.vue';

const routes = [
  { path: '/', component: Landing },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
