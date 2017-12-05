import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/home/HomeView'
import LectureView from '../components/lecture/LectureView'
import MeView from '../components/me/MeView'
import FootView from '../components/end/FootView'
import PerView from '../components/per/PerView'
import PayView from '../components/pay/PayView'
import TxtView from '../components/txt/TxtView'
import RecommendView from '../components/recommend/RecommendView'
import ShopView from '../components/shop/ShopView'
import SucceedView from '../components/succeed/SucceedView'
import MedView from '../components/med/MedView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:"首页",
      component: HomeView,
    },
    {
      path: '/home',
      component: HomeView
    },
    {
    	 path: '/lecture',
      component: LectureView
    },
    {
    	 path: '/me',
      component: MeView
    },
    {
      path: '/per',
      component: PerView
    },
    {
      path: '/pay',
      component: PayView
    },
    {
      path: '/txt',
      component: TxtView
    },
    {
      path: '/rec',
      component: RecommendView
    },
     {
      path: '/shop',
      component: ShopView
    },
     {
      path: '/succ',
      component: SucceedView
    },
      {
      path: '/med',
      component: MedView
    },
  ]
})
