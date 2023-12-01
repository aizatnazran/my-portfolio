import { createApp } from 'vue'
import Landing from './Landing.vue'
import store from './store'


createApp(Landing).use(store).mount('#app')
