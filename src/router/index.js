/*eslint-disable*/
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goods from '@/components/goods/goods'
import seller from '@/components/seller/seller'
import ratings from '@/components/ratings/ratings'


/*
* 使用路由
* 使用vuesource
* 定义路由
* import 各个界面组件
* 路由到某个组件
* */
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    { path: '/',
      name: 'Hello',
      redirect: '/goods',
      component: Hello,
      children: [
      { path: '/goods', component: goods },
      { path: '/seller', component: seller },
      { path: '/ratings', component: ratings }
    ]}
  ]
})

