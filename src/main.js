/*
* 入口js：创建Vue实例
*/
import Vue from 'vue'
import App from './App'
import router from './router'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
