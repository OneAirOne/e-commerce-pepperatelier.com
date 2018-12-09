import waitFor from '@/services/helpers';
import { LOGIN, LOGOUT } from './transactions';
import { snackbar } from '../app/services';
import * as api from '../../../services/api';

export default {
  async [LOGIN.action]({ commit }, payload) {
    try {
      commit(LOGIN.mutations.PENDING, true);
      const response = await api.login({
        email: payload.login,
        password: payload.password,
      });
      const { data } = response;
      await waitFor(350);
      snackbar.push({
        color: '#0a0c0f',
        text: `Bienvenu ${data.email}`,
      });
      commit(LOGIN.mutations.SUCCESS, data);
      commit(LOGIN.mutations.PENDING, false);
    } catch (error) {
      if (error.response) {
        commit(LOGIN.mutations.FAILURE, new Error(error.response.statusText));
      } else if (error.request) {
        commit(LOGIN.mutations.FAILURE, new Error('The server seems unreachable, try again later!'));
      } else {
        commit(LOGIN.mutations.FAILURE, new Error('An error occurred!'));
      }
      commit(LOGIN.mutations.PENDING, false);
      throw error;
    }
  },
  async [LOGOUT.action]({ commit }) {
    try {
      commit(LOGOUT.mutations.PENDING, true);
      commit(LOGOUT.mutations.SUCCESS);
      await waitFor(350);
      commit(LOGOUT.mutations.PENDING, false);
    } catch (error) {
      throw error;
    }
  },
};

