import {
  ORDER_PRODUCT,
} from './transactions';

export const getInitialState = () => ({
  ...ORDER_PRODUCT.state,
});

export const state = getInitialState();
