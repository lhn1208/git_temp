import { createRouter, createWebHistory } from 'vue-router'
import Main from '../user/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: { isAdmin: false }
    },
    {
      path: '/myhome',
      name: 'myhome',
      component: () => import('../user/Myhome.vue')
    },
    { //매물검색
      path: '/offeringsSch',
      name: 'offerings_sch',
      component: () => import('../offerings/OfferingsSch.vue')
    },
    {
      path: '/visitReq',
      name: 'visitRequest',
      component: () => import('../offerings/VisitReq.vue')
    },
    {
      //나의 매수
      path: '/myPurchase',
      name: 'myPurchase',
      component: () => import('../trading/MyPurchase.vue')
    },
    { //나의 매도
      path: '/mySale',
      name: 'mySale',
      component: () => import('../trading/MySale.vue')
    },
    {//나의 매수-신규 중개의뢰
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
    },
    {
      path: '/newReq4',
      name: 'newReq4',
      component: () => import('../trading/NewReq4.vue')
    },
    {
      path: '/newReqEnd',
      name: 'newReqEnd',
      component: () => import('../trading/NewReqEnd.vue')
    },
    { //나의 매도-신규 중개의뢰
      path: '/salenewReq1',
      name: 'salenewReq1',
      component: () => import('../trading/SaleNewReq1.vue')
    },
    {
      path: '/salenewReq2',
      name: 'salenewReq2',
      component: () => import('../trading/SaleNewReq2.vue')
    },
    {
      path: '/salenewReq3',
      name: 'salenewReq3',
      component: () => import('../trading/SaleNewReq3.vue')
    },
    {
      path: '/saleNewReqEnd',
      name: 'saleNewReqEnd',
      component: () => import('../trading/SaleNewReqEnd.vue')
    },
    {
      //나의 매수-매수/임차 진행현황
      path: '/purchaseState',
      name: 'purchaseState',
      component: () => import('../trading/PurchaseState.vue')
    },
    {//추가 방문요청
      path: '/addVisitReq',
      name: 'addVisitReq',
      component: () => import('../offerings/AddVisitReq.vue')
    },
    {//나의 매수-매수/임차 계약,종료 현황
      path: '/purchaseStateEnd',
      name: 'purchaseStateEnd',
      component: () => import('../trading/PurchaseStateEnd.vue')
    },
    {
      //나의 매도-매도/임대 진행현황
      path: '/saleState',
      name: 'saleState',
      component: () => import('../trading/SaleState.vue')
    },
    {
      //나의 매도-매도/임대 계약,종료현황
      path: '/saleStateEnd',
      name: 'saleStateEnd',
      component: () => import('../trading/SaleStateEnd.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('../customer/Customer.vue')
    },
    {
      path: '/favOffer',
      name: 'favOffer',
      component: () => import('../offerings/FavOffer.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../user/Setting.vue')
    },
    {
      path: '/point',
      name: 'point',
      component: () => import('../common/Point.vue')
    },
     /*중개사*/
    {
      path: '/agentMain',
      name: 'agentMain',
      component: () => import('../agent/Main.vue'),
      meta: {isAdmin: true }
    },
    { 
      path: '/reqState',
      name: 'reqState',
      component: () => import('../agent/ReqState.vue'),
      meta: {isAdmin: true }
    },
    { /*의뢰관리*/
      path: '/reqManage',
      name: 'reqManage',
      component: () => import('../agent/pages/ReqManage.vue'),
      meta: {isAdmin: true }
    },
    { /*요청내역*/
      path: '/reqChk',
      name: 'reqChk',
      component: () => import('../agent/pages/ReqChk.vue'),
      meta: {isAdmin: true }
    },
    { /*일정*/
      path: '/schChk',
      name: 'schChk',
      component: () => import('../agent/pages/SchChk.vue'),
      meta: {isAdmin: true }
    },
    { 
      path: '/schRegst',
      name: 'schRegst',
      component: () => import('../agent/pages/SchRegst.vue'),
      meta: {isAdmin: true }
    },
   
  ],
  scrollBehavior (to, from, savedPosition) {
    // savedPosition은 브라우저의 "뒤로 가기" 버튼을 클릭할 때 저장된 위치를 반환합니다.
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  
});

// beforeEach 훅을 사용하여 meta.isAdmin을 설정
router.beforeEach((to, from, next) => {
  if (to.name === 'point') {
    // 이전 페이지가 agentMain이면 isAdmin을 true로 설정
    to.meta.isAdmin = from.meta.isAdmin;
  }
  next();
});


export default router
