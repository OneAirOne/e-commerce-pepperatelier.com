import { LOGIN, LOGOUT } from './transactions';

export const getInitialState = () => ({
  accessToken: null,
  expiresAt: '',
  ...LOGIN.state,
  ...LOGOUT.state,
});

export const state = getInitialState();
