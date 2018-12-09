import waitFor from '@/services/helpers';
import * as api from '../../../services/api';
import { snackbar } from '../app/services';
import {
  ORDER_PRODUCT,
} from './transactions';

export default {
  async [ORDER_PRODUCT.action]({ commit }, payload) {
    try {
      commit(ORDER_PRODUCT.mutations.PENDING, true);
      const response = await api.orderProduct(payload);
      const { data } = response;
      commit(ORDER_PRODUCT.mutations.SUCCESS, data);
      await waitFor(350);
      snackbar.push({
        color: '#0a0c0f',
        text: 'Votre précommande a bien été envoyée',
      });
      snackbar.push({
        color: '#0a0c0f',
        text: 'Vous allez être contacté dans les meilleurs délais',
      });
      commit(ORDER_PRODUCT.mutations.PENDING, false);
    } catch (error) {
      if (error) {
        snackbar.push({
          color: '#B13C2E',
          text: 'Une erreur est survenue, veuillez nous excuser',
        });
        commit(ORDER_PRODUCT.mutations.FAILURE, new Error('Une erreur est survenue, veuillez nous excuser'));
      }
      commit(ORDER_PRODUCT.mutations.PENDING, false);
      throw error;
    }
  },
};
