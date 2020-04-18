import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import materialize from '../node_modules/materialize-css/dist/css/materialize.css'
import icons from '../node_modules/material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  materialize,
  icons,
  render: h => h(App)
}).$mount('#app')
