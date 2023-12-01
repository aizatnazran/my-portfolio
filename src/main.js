// main.js
import { createApp } from 'vue';
import Landing from './Landing.vue';
import store from './store';
import router from './router';

createApp(Landing).use(store).use(router).mount('#app');
