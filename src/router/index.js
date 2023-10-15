import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue';
import MapPage from '../pages/Map.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/maps',
      component: MapPage
    }
  ]
})

export default router
