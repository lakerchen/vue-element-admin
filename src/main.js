import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import Home from './components/Home.vue';
import Workspace from './components/Workspace.vue';

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/home', component: Home },
  { path: '/workspace', component: Workspace }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
