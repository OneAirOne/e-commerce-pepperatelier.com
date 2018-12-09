import { getInstance } from './helpers';

const instance = getInstance();

export async function orderProduct(payload) {
  return instance.post('order', payload);
}

