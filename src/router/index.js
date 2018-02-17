import Vue from 'vue';
import Router from 'vue-router';

import routes from 'containers/routes';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes,
});
