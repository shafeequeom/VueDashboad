import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import axios from 'axios';

Vue.prototype.$http = axios;


Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
