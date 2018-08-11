/*
 * @Author: bianhao 
 * @Date: 2018-08-03 19:47:08 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-08-10 19:55:18
 */
import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import routes from './route.config.js'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
