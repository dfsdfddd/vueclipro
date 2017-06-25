// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable */
/*
* 初始化挂载解析
* 挂载到#app下面的dom里面
* 挂载到组件对应的自定义元素里面 下例的template里面的值等于这个自定义元素
* 挂载内容为component以及下面的组件并且引用
* 同时引用路由并且挂载路由
* */
  new Vue({
  el: '#app',
  router,
  template: '<Apps/>',
  components: { 'Apps': App }
})

/*
 fsffs
 1,引用vue
 挂载vue
 挂载vuerouter
 挂载template
 挂载component
 */
/*new Vue({
  el:'#app',
  router: router,
  template: '<Apps/>',
  components:{
    'Apps': App
  }
})*/
