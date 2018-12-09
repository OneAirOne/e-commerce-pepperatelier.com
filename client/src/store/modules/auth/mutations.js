import Vue from 'vue';
import { getInitialState } from './state';
import { LOGIN, LOGOUT } from './transactions';

export default {
  [LOGIN.mutations.SUCCESS](state, { token, expiresIn }) {
    state.accessToken = token;
    state.expiresAt = new Date(Date.now() + expiresIn).getTime();
  },
  [LOGIN.mutations.FAILURE](state, error) {
    state[LOGIN.keys.error] = error;
  },
  [LOGIN.mutations.PENDING](state, pending) {
    state[LOGIN.keys.pending] = pending;
  },
  [LOGOUT.mutations.SUCCESS](state) {
    const initialState = getInitialState();
    Object.keys(initialState).forEach((key) => {
      Vue.set(state, key, initialState[key]);
    });
    // setTimeout(localStorage.removeItem('vuexLocalKey'), 350);
  },
  [LOGOUT.mutations.FAILURE](state, error) {
    state[LOGOUT.keys.error] = error;
  },
  [LOGOUT.mutations.PENDING](state, value) {
    state[LOGOUT.keys.PENDING] = value;
  },
};
