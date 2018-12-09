import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import VuePictureSwipe from 'vue-picture-swipe';
import VueTypedJs from 'vue-typed-js';
import VueAnalytics from 'vue-analytics';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import './stylus/main.styl';
import App from './App';
import router from './router';
import store from './store';
import light from './themes/light';

Vue.use(VueAnalytics, {
  id: 'UA-130350827-1',
  router,
});

Vue.use(VueI18n);
Vue.use(VueTypedJs);
Vue.component('vue-picture-swipe', VuePictureSwipe);

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: light,
});

Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
