import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth';
import productModule from './modules/product';
import appModule from './modules/app';
import cartModule from './modules/cart';
import orderModule from './modules/order';
import { vuexLocal } from './vuexPersist';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: appModule,
    auth: authModule,
    product: productModule,
    cart: cartModule,
    order: orderModule,
  },
  plugins: [vuexLocal.plugin],
});
