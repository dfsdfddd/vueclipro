// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable */
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
