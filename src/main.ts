import Vue from 'vue';
import VueRx from 'vue-rx';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Rx from 'rxjs/Rx';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueRx, Rx);

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
