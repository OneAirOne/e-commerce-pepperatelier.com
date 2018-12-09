import Axios from 'axios';
import { LOGOUT } from '@/store/modules/auth/transactions';
import Store from '@/store';
import router from '@/router';
import { injectToken } from './interceptors';

// export const API_URL = 'http://localhost:3000';
export const API_URL = process.env.ROOT_API;

export function getInstance() {
  return Axios.create({
    baseURL: API_URL,
    headers: {
      'crossDomain': true,
    },
  });
}

export function getAuthenticatedInstance() {
  const instance = Axios.create({
    baseURL: API_URL,
  });

  instance.interceptors.request.use(injectToken);
  instance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.response.status === 401) {
      Store.dispatch(`auth/${LOGOUT.action}`);
      router.push({
        name: 'home',
      });
    }
    return Promise.reject(error);
  });
  return instance;
}
