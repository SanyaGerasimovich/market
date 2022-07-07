import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage'),
      alias: '/home'
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('../views/MarketPage')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsPage')
    },
    {
      path:'/choco/:id',
      name:'choco',
      component: () => import('../components/ChocoPage'),
      props: true
    }
  ]
})

export default router
