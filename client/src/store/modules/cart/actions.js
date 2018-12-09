import waitFor from '@/services/helpers';
import { snackbar } from '../app/services';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './transactions';
import {
  EMPTY_CART,
} from './mutationsTypes';
import {
  emptyCart,
} from './actionsTypes';

export default {
  async [ADD_TO_CART.action]({ commit }, product) {
    try {
      commit(ADD_TO_CART.mutations.PENDING, true);
      await waitFor(700);
      if (product.stock > 0) {
        commit(ADD_TO_CART.mutations.SUCCESS, product);
        snackbar.push({
          color: '#0a0c0f',
          text: 'Produit ajouté au panier',
        });
      } else {
        snackbar.push({
          color: '#0a0c0f',
          text: 'Le produit n\'est plus disponnible',
        });
        snackbar.push({
          color: '#0a0c0f',
          text: 'Contactez Pepper pour connaitre les délais de fabrication',
        });
      }
      commit(ADD_TO_CART.mutations.PENDING, false);
    } catch (error) {
      if (error) {
        snackbar.push({
          color: '#B13C2E',
          text: 'impossible d\'ajouter le produit au panier, veuillez rééssayer plus tard',
        });
        commit(ADD_TO_CART.mutations.FAILURE, new Error(error.response.statusText));
      }
      commit(ADD_TO_CART.mutations.PENDING, false);
      throw error;
    }
  },
  async [REMOVE_FROM_CART.action]({ commit }, index) {
    try {
      commit(REMOVE_FROM_CART.mutations.PENDING, true);
      commit(REMOVE_FROM_CART.mutations.SUCCESS, index);
      await waitFor(700);
      snackbar.push({
        color: '#0a0c0f',
        text: 'Produit supprimé du panier',
      });
      commit(REMOVE_FROM_CART.mutations.PENDING, false);
    } catch (error) {
      if (error) {
        snackbar.push({
          color: '#B13C2E',
          text: 'impossible d\'ajouter le produit au panier, veuillez rééssayer plus tart',
        });
        commit(REMOVE_FROM_CART.mutations.FAILURE, new Error(error.response.statusText));
      }
      commit(REMOVE_FROM_CART.mutations.PENDING, false);
      throw error;
    }
  },
  [emptyCart]({ commit }) {
    commit(EMPTY_CART);
  },
};

