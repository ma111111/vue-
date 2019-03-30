import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VueRouter from 'vue-router'
import homeContiner from './components/tabbar/homeContiner.vue'
import shopCarContiner from './components/tabbar/shopCarContiner.vue'
import memberContiner from './components/tabbar/memberContiner.vue'
import searchContiner from './components/tabbar/searchContiner.vue'
import newsList from './components/news/newsList.vue'
// import newsList from './components/tabbar/newsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [//配置路由规则
    {path:'/',redirect:'/home'},
    {
      path: '/home',
      component: homeContiner
    },
    {
      path: '/member',
      component: memberContiner
    },
    {
      path: '/shopcar',
      component: shopCarContiner
    },
    {
      path: '/search',
      component: searchContiner
    },
    {
      path:'/home/newslist',
      component:newsList
    },
    {
      path:'/home/NewsInfo/:id',
      component:NewsInfo
    }
  ],
  linkActiveClass:"mui-active"//底部字体均高亮显示,linkActiveClass:表示默认类
})
