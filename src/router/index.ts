import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/formulars',
      name: 'forms',
      component: () => import('../views/FormsView.vue')
    },
    {
      path: '/transitions',
      name: 'transitions',
      component: () => import('../views/TransitionView.vue')
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('../views/Pokedex.vue')
    },
    {
      path: '/404',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/'
    // }
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
