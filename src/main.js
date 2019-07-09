import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// 这个就是用哪个组件把他引过来
import {
  Button,
  Tabbar,
  TabbarItem
} from 'vant'
Vue
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
