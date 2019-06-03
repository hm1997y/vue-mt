import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
     
      children:[
        {
          path:'s/:name',
          name:'goods',
          component:goodsList
        },
        {
          path:'/index',
          name:'index',
          component:index
        },
        {
          path:'/changeCity',
          name:'changeCity',
          component:changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children:[
        {
          path:'login',
          name:'login',
          component:login
        },
        {
          path:'register',
          name:'register',
          component:register
        }

      ]
    }

  ]
})
