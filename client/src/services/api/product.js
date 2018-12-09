import { getInstance, getAuthenticatedInstance } from './helpers';

const authenticatedInstance = getAuthenticatedInstance();
const instance = getInstance();

export async function addProduct(payload) {
  return authenticatedInstance.post('products', payload);
}

export async function updateProduct({ productId, payload }) {
  return authenticatedInstance.put(`products/${productId}`, payload);
}

export async function deleteProductById({ productId }) {
  return authenticatedInstance.delete(`products/${productId}`);
}

export async function getProducts() {
  return instance.get('products');
}

export async function getProductById({ productId }) {
  return instance.get(`products/${productId}`);
}

