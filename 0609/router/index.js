import { createRouter, createWebHistory } from 'vue-router'
import Main from '../user/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/myhome',
      name: 'myhome',
      component: () => import('../user/Myhome.vue')
    },
    {
      path: '/offeringsSch',
      name: 'offerings_sch',
      component: () => import('../offerings/OfferingsSch.vue')
    },
    {
      path: '/VisitReq',
      name: 'visitRequest',
      component: () => import('../offerings/VisitReq.vue')
    },
    {
      path: '/myPurchase',
      name: 'myPurchase',
      component: () => import('../trading/MyPurchase.vue')
    },
    {
      path: '/mySale',
      name: 'mySale',
      component: () => import('../trading/MySale.vue')
    },
    {
      path: '/newReq1',
      name: 'newReq1',
      component: () => import('../trading/NewReq1.vue')
    },
    {
      path: '/newReq2',
      name: 'newReq2',
      component: () => import('../trading/NewReq2.vue')
    },
    {
      path: '/newReq3',
      name: 'newReq3',
      component: () => import('../trading/NewReq3.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // savedPosition은 브라우저의 "뒤로 가기" 버튼을 클릭할 때 저장된 위치를 반환합니다.
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
