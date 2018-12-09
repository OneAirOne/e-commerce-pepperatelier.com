import {
  ORDER_PRODUCT,
} from './transactions';

export default {
  [ORDER_PRODUCT.mutations.SUCCESS](state, product) {
    state[ORDER_PRODUCT.keys.data] = product;
  },
  [ORDER_PRODUCT.mutations.FAILURE](state, error) {
    state[ORDER_PRODUCT.keys.error] = error;
  },
  [ORDER_PRODUCT.mutations.PENDING](state, pending) {
    state[ORDER_PRODUCT.keys.pending] = pending;
  },
};

