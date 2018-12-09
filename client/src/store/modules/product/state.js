import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  GET_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from './transactions';

export const getInitialState = () => ({
  ...GET_PRODUCTS.state,
  ...CREATE_PRODUCT.state,
  ...GET_PRODUCT.state,
  ...DELETE_PRODUCT.state,
  ...UPDATE_PRODUCT.state,
});

export const state = getInitialState();
