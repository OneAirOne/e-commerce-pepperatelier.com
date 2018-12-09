import Store from '@/store';
import {
  pushToSnackbar,
} from './actionsTypes';

export const snackbar = {
  push(message) {
    Store.dispatch(`app/${pushToSnackbar}`, message);
  },
};
