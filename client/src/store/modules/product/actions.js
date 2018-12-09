import waitFor from '@/services/helpers';
import * as api from '../../../services/api';
import { snackbar } from '../app/services';
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  GET_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from './transactions';

export default {
  async [CREATE_PRODUCT.action]({ commit }, payload) {
    try {
      commit(CREATE_PRODUCT.mutations.PENDING, true);
      const response = await api.addProduct(payload);
      const { data } = response;
      commit(CREATE_PRODUCT.mutations.SUCCESS, data);
      await waitFor(350);
      snackbar.push({
        color: '#0a0c0f',
        text: 'Produit crée!',
      });
      commit(CREATE_PRODUCT.mutations.PENDING, false);
    } catch (error) {
      if (error.response.status === 401) {
        snackbar.push({
          color: '#B13C2E',
          text: 'Sessions expirée, veuillez vous reconnecter',
        });
        commit(CREATE_PRODUCT.mutations.FAILURE, new Error(error.response.statusText));
      } else if (error.request) {
        snackbar.push({
          color: '#B13C2E',
          text: 'Erreur dans la création du produit, serveur injoignable',
        });
        commit(CREATE_PRODUCT.mutations.FAILURE, new Error('The server seems unreachable, try again later!'));
      } else {
        snackbar.push({
          color: '#B13C2E',
          text: 'Erreur dans la création du produit, erreur interne',
        });
        commit(CREATE_PRODUCT.mutations.FAILURE, new Error('An error occurred!'));
      }
      commit(CREATE_PRODUCT.mutations.PENDING, false);
      throw error;
    }
  },
  async [UPDATE_PRODUCT.action]({ commit }, { productId, payload }) {
    try {
      commit(UPDATE_PRODUCT.mutations.PENDING, true);
      const response = await api.updateProduct({ productId, payload });
      const { data } = response;
      commit(UPDATE_PRODUCT.mutations.SUCCESS, data);
      await waitFor(350);
      snackbar.push({
        color: '#0a0c0f',
        text: 'Produit modifié!',
      });
      commit(UPDATE_PRODUCT.mutations.PENDING, false);
    } catch (error) {
      if (error.response.status === 401) {
        snackbar.push({
          color: '#B13C2E',
          text: 'Sessions expirée, veuillez vous reconnecter',
        });
        commit(UPDATE_PRODUCT.mutations.FAILURE, new Error(error.response.statusText));
      } else if (error.request) {
        commit(UPDATE_PRODUCT.mutations.FAILURE, new Error('The server seems unreachable, try again later!'));
      } else {
        commit(UPDATE_PRODUCT.mutations.FAILURE, new Error('An error occurred!'));
      }
      commit(UPDATE_PRODUCT.mutations.PENDING, false);
      throw error;
    }
  },
  async [GET_PRODUCTS.action]({ commit }) {
    try {
      commit(GET_PRODUCTS.mutations.PENDING, true);
      const response = await api.getProducts();
      const { data } = response;
      commit(GET_PRODUCTS.mutations.SUCCESS, data);
      await waitFor(800);
      commit(GET_PRODUCTS.mutations.PENDING, false);
    } catch (error) {
      if (error.response) {
        commit(GET_PRODUCTS.mutations.FAILURE, new Error(error.response.statusText));
      } else if (error.request) {
        snackbar.push({
          color: '#B13C2E',
          text: 'Serveur injoignable',
        });
        commit(GET_PRODUCTS.mutations.FAILURE, new Error('The server seems unreachable, try again later!'));
      } else {
        commit(GET_PRODUCTS.mutations.FAILURE, new Error('An error occurred!'));
      }
      commit(GET_PRODUCTS.mutations.PENDING, false);
      throw error;
    }
  },
  async [GET_PRODUCT.action]({ commit }, { productId }) {
    try {
      commit(GET_PRODUCT.mutations.PENDING, true);
      const response = await api.getProductById({ productId });
      const { data } = response;
      commit(GET_PRODUCT.mutations.SUCCESS, data);
      // await waitFor(250);
      commit(GET_PRODUCT.mutations.PENDING, false);
    } catch (error) {
      if (error.response) {
        commit(GET_PRODUCT.mutations.FAILURE, new Error(error.response.statusText));
      } else if (error.request) {
        snackbar.push({
          color: '#B13C2E',
          text: 'Serveur injoignable',
        });
        commit(GET_PRODUCT.mutations.FAILURE, new Error('The server seems unreachable, try again later!'));
      } else {
        commit(GET_PRODUCT.mutations.FAILURE, new Error('An error occurred!'));
      }
      commit(GET_PRODUCT.mutations.PENDING, false);
      throw error;
    }
  },
  async [DELETE_PRODUCT.action]({ commit }, { productId }) {
    try {
      commit(DELETE_PRODUCT.mutations.PENDING, true);
      const response = await api.deleteProductById({ productId });
      const { data } = response;
      commit(DELETE_PRODUCT.mutations.SUCCESS, data);
      await waitFor(500);
      snackbar.push({
        color: '#0a0c0f',
        text: 'Produit supprimé!',
      });
      commit(DELETE_PRODUCT.mutations.PENDING, false);
    } catch (error) {
      if (error.response.status === 401) {
        snackbar.push({
          color: '#B13C2E',
          text: 'Sessions expirée, veuillez vous reconnecter',
        });
        commit(DELETE_PRODUCT.mutations.FAILURE, new Error(error.response.statusText));
      } else if (error.request) {
        commit(DELETE_PRODUCT.mutations.FAILURE, new Error('The server seems unreachable, try again later!'));
      } else {
        commit(DELETE_PRODUCT.mutations.FAILURE, new Error('An error occurred!'));
      }
      commit(DELETE_PRODUCT.mutations.PENDING, false);
      throw error;
    }
  },
};

