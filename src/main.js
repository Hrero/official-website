// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { Dialog } from 'element-ui' // elementUi
import 'element-ui/lib/theme-chalk/index.css' // elementUi css样式

Vue.use(Dialog)
Vue.config.productionTip = false

Vue.prototype.$j = jquery
Vue.prototype.$swiper = swiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  render: h => h(App)
})
