import Store from '@/store';
import { LOGOUT } from '@/store/modules/auth/transactions';
import router from '@/router';

export function injectToken(config) {
  const updatedConfig = config;
  updatedConfig.headers.Authorization = `Bearer ${Store.getters['auth/accessToken']}`;
  return updatedConfig;
}

export const checkResponse = {
  success(response) {
    return response;
  },
  failure(error) {
    if (error.response.status === 401) {
      Store.dispatch(`auth/${LOGOUT.action}`);
      router.push({
        name: 'home',
      });
    }
    return Promise.reject(error);
  },
};

