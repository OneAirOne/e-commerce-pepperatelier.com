<template>
  <v-container fluid fill-height>
    <router-view></router-view>
  </v-container>
</template>

<script>
import PeeperNavigation from '@/components/admin/Navigation';
import { mapGetters } from 'vuex';

export default {
  components: { PeeperNavigation },
  data: () => ({
    drawer: null,
    isAuth: false,
  }),
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
};
</script>

<style scoped>

</style>

