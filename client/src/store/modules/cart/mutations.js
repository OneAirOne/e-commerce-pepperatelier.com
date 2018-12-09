import Vue from 'vue';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './transactions';
import {
  EMPTY_CART,
} from './mutationsTypes';

export default {
  [ADD_TO_CART.mutations.SUCCESS](state, product) {
    state.cart.push(product);
  },
  [ADD_TO_CART.mutations.FAILURE](state, error) {
    state[ADD_TO_CART.keys.error] = error;
  },
  [ADD_TO_CART.mutations.PENDING](state, pending) {
    state[ADD_TO_CART.keys.pending] = pending;
  },
  [REMOVE_FROM_CART.mutations.SUCCESS](state, index) {
    Vue.delete(state.cart, index);
  },
  [REMOVE_FROM_CART.mutations.FAILURE](state, error) {
    state[REMOVE_FROM_CART.keys.error] = error;
  },
  [REMOVE_FROM_CART.mutations.PENDING](state, pending) {
    state[REMOVE_FROM_CART.keys.pending] = pending;
  },
  [EMPTY_CART](state) {
    state.cart = [];
  },
};
