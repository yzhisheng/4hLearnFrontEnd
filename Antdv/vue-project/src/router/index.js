import { createRouter, createWebHistory } from 'vue-router'
import WelcomeItem from '../components/WelcomeItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcomeItem',
      name: 'WelcomeItem',
      component: WelcomeItem
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/HelloWorld.vue')
    }
  ]
})

export default router
