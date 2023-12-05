import { createRouter, createWebHistory } from 'vue-router'
import ConcertenView from "@/views/ConcertenView.vue";
import AboutView from "@/views/AboutView.vue";
import ConcertDetailsView from "@/views/concert/ConcertDetailsView.vue";
import ConcertOrganizersView from "@/views/ConcertOrganizersView.vue";
import SearchView from "@/views/SearchView.vue";
import ConcertRegisterView from "@/views/concert/ConcertRegisterView.vue";
import ConcertEditView from "@/views/concert/ConcertEditView.vue";
import ConcertLayoutView from "@/views/concert/ConcertLayoutView.vue";
import Concert404View from "@/views/Concert404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'concerten',
      component: ConcertenView,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/concert/:id',
      name: 'concert-layout',
      component: ConcertLayoutView,
      children: [
        {
          path: '',
          name:'concert-details',
          component: ConcertDetailsView
        },
        {
          path: '',
          name:'concert-register',
          component: ConcertRegisterView
        },
        {
          path: '',
          name:'concert-edit',
          component: ConcertEditView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/organizers',
      name: 'concert-organizers',
      component: ConcertOrganizersView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
        path: '/:catchAll(.*)',
        name: 'concert-404',
        component: Concert404View
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: Concert404View,
      props: true
    }
  ]
})

export default router
