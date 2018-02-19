import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Notifications from 'vue-notification';

import App from './App';
import router from './router';

Vue.use(Vuelidate);
Vue.use(Notifications);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
