import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  GET_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from './transactions';

export default {
  [CREATE_PRODUCT.mutations.SUCCESS](state, product) {
    state[CREATE_PRODUCT.keys.data] = product;
  },
  [CREATE_PRODUCT.mutations.FAILURE](state, error) {
    state[CREATE_PRODUCT.keys.error] = error;
  },
  [CREATE_PRODUCT.mutations.PENDING](state, pending) {
    state[CREATE_PRODUCT.keys.pending] = pending;
  },
  [GET_PRODUCTS.mutations.SUCCESS](state, { data }) {
    state[GET_PRODUCTS.keys.data] = data.products;
  },
  [GET_PRODUCTS.mutations.FAILURE](state, error) {
    state[GET_PRODUCTS.keys.error] = error;
  },
  [GET_PRODUCTS.mutations.PENDING](state, pending) {
    state[GET_PRODUCTS.keys.pending] = pending;
  },
  [GET_PRODUCT.mutations.SUCCESS](state, { data }) {
    state[GET_PRODUCT.keys.data] = data.product;
  },
  [GET_PRODUCT.mutations.FAILURE](state, error) {
    state[GET_PRODUCT.keys.error] = error;
  },
  [GET_PRODUCT.mutations.PENDING](state, pending) {
    state[GET_PRODUCT.keys.pending] = pending;
  },
  [DELETE_PRODUCT.mutations.SUCCESS](state, productId) {
    state[DELETE_PRODUCT.keys.data] = productId;
  },
  [DELETE_PRODUCT.mutations.FAILURE](state, error) {
    state[DELETE_PRODUCT.keys.error] = error;
  },
  [DELETE_PRODUCT.mutations.PENDING](state, pending) {
    state[DELETE_PRODUCT.keys.pending] = pending;
  },
  [UPDATE_PRODUCT.mutations.SUCCESS](state, product) {
    state[UPDATE_PRODUCT.keys.data] = product;
  },
  [UPDATE_PRODUCT.mutations.FAILURE](state, error) {
    state[UPDATE_PRODUCT.keys.error] = error;
  },
  [UPDATE_PRODUCT.mutations.PENDING](state, pending) {
    state[UPDATE_PRODUCT.keys.pending] = pending;
  },
};
