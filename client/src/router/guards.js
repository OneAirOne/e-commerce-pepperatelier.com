import Store from '@/store';
import { snackbar } from '@/store/modules/app/services';
import { IS_AUTHENTICATED, IS_NOT_AUTHENTICATED } from './guardsTypes';

export default {
  [IS_AUTHENTICATED](to, from, next) {
    const now = new Date().getTime();
    const expiresAt = Store.getters['auth/expiresAt'];
    const accessToken = Store.getters['auth/accessToken'];
    if ((accessToken !== null && expiresAt !== null && now > expiresAt) || !Store.getters['auth/isAuthenticated']) {
      snackbar.push({
        color: 'error',
        text: 'Sessions expirée, veuillez vous reconnecter',
      });
      return next({ path: '/home' });
    }
    return next();
  },
  [IS_NOT_AUTHENTICATED](to, from, next) {
    if (!Store.getters['auth/isAuthenticated']) {
      return next();
    }
    return next({ name: 'admin-products' });
  },
};
