import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import OrderList from '../pages/orderList'
import DetailAnaPage from '../pages/detail/analysis'
import DetailCouPage from '../pages/detail/count'
import DetailForPage from '../pages/detail/forecast'
import DetailPubPage from '../pages/detail/publish'
Vue.use(VueResource)
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
     {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },{
      path: '/orderList',
      component:OrderList
    },{
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage,
      //所有访问/detail请求会机制跳转/detail/analysis
      redirect: '/detail/analysis',
      children:[
        {
        path:'analysis',
        component:DetailAnaPage
        },
        {
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
      ]
    }
  ]
})
