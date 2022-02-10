import Vue from 'vue'
import App from './App.vue'
import "semantic-ui-css"
import router from './Router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
