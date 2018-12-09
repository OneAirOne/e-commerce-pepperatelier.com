export default {
  accessToken: state => state.accessToken,
  expiresAt: state => state.expiresAt,
  isAuthenticated: (state, getters) => getters.expiresAt !== null && getters.accessToken !== null && new Date().getTime() < getters.expiresAt,
};
