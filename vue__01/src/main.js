// 入口文件
import Vue from 'vue'

// 导入app根组件
import app from './App.vue'

// 1.1安装路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 1.3导入自己的router.js模块
import router from './router.js'

// 引入轮播图包文件
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 1.1导入vue-resource
import vueResource from 'vue-resource'
// 1.2安装vue-resource
Vue.use(vueResource)
// 全局配置，设置请求的根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899';

import moment from 'moment'
// 安装一个全局的过滤器
Vue.filter('ab',function (dataStr,pattern='YYYY-MM-DD HH:mm:ss') {
      return moment(dataStr).format(pattern)  
})

// 导入mint-UI的样式 
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra(1).css'
// 引入mintUI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 按需导入Mint-UI中的组件
import {Header,swipe,swipeItem,Button} from 'mint-ui'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

Vue.use(MintUI)

var vm = new Vue({
  el:"#app",
  render: c => c(app),
  router  //挂载路由对象到vm实例上
})
