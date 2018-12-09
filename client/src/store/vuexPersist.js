import VuexPersistence from 'vuex-persist';

export const vuexLocalKey = 'peeperAtelier';

export const vuexLocal = new VuexPersistence({
  key: vuexLocalKey,
  storage: window.localStorage,
  reducer: state => ({
    auth: {
      accessToken: state.auth.accessToken,
      expiresAt: state.auth.expiresAt,
    },
  }),
});

