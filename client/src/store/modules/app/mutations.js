import {
  PUSH_TO_SNACKBAR,
  POP_SNACKBAR,
  SET_LAYOUT,
} from './mutationsTypes';

export default {
  [PUSH_TO_SNACKBAR](state, message) {
    state.snackbarQueue.push(message);
  },
  [POP_SNACKBAR](state) {
    state.snackbarQueue.shift();
  },
  [SET_LAYOUT](state, layout) {
    state.layout = layout;
  },
};
