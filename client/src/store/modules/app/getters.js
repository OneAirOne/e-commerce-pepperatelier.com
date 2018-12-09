export default {
  snackbarQueue: state => state.snackbarQueue,
  snackbarCurrent: (state, getters) => getters.snackbarQueue[0],
  layout: state => state.layout,
};
