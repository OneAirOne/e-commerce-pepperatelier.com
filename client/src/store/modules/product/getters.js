import { GET_PRODUCTS, GET_PRODUCT } from './transactions';

export default {
  products: state => state[GET_PRODUCTS.keys.data],
  product: state => state[GET_PRODUCT.keys.data],
};
