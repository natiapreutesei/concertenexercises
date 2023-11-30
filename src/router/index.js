import { createRouter, createWebHistory } from 'vue-router'
import ConcertenView from "@/views/ConcertenView.vue";
import AboutView from "@/views/AboutView.vue";
import ConcertDetailsView from "@/views/ConcertDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ConcertenView
    },
    {
      path: '/concert/:id',
      name: 'concert-details',
      props: true,
      component: ConcertDetailsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
