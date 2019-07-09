import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'amfe-flexible'
/**
 * 这个第三方包引入即可，他会自动根据页面宽度设置网页基准文字大小
 */
// 这个就是用哪个组件把他引过来
// import {
//   Button,
//   Tabbar,
//   TabbarItem
// } from 'vant'
// 现在我们简单粗暴全引进来，方便使用
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
// Vue
//   .use(Button)
//   .use(Tabbar)
//   .use(TabbarItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
