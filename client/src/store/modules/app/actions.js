import {
  pushToSnackbar,
  popSnackbar,
  setLayout,
} from './actionsTypes';
import {
  PUSH_TO_SNACKBAR,
  POP_SNACKBAR,
  SET_LAYOUT,
} from './mutationsTypes';

export default {
  [pushToSnackbar]({
    commit,
  }, message) {
    commit(PUSH_TO_SNACKBAR, message);
  },
  [popSnackbar]({
    commit,
  }) {
    commit(POP_SNACKBAR);
  },
  [setLayout]({
    commit,
  }, layout) {
    commit(SET_LAYOUT, layout);
  },
};
