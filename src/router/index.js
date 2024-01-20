import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首頁'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: '關於我們'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      children: [
        {
          path: 'productInfo',
          component: () => import('../views/ProductInfo.vue')
        },
        {
          path: 'productInfo1',
          component: () => import('../views/ProductInfo1.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/newPage',
      name: '新增頁面',
      component: () => import('../views/NewPage.vue')
    }
  ]
})
// 頁面title顯示
router.beforeEach(async (to, from) => {
  if( to.meta && to.meta.title){
      document.title = to.meta.title
  }
})

export default router
