<template>
  <v-toolbar flat height="50" class="white">
    <v-toolbar-title>Peeper Atelier | Admin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <v-btn slot="activator" icon flat @click="openHome"><v-icon>home</v-icon></v-btn>
      <span>Home</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn slot="activator" icon flat @click="onLogout"><v-icon>person</v-icon></v-btn>
      <span>Logout</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
import { LOGOUT } from '@/store/modules/auth/transactions';
import { mapActions } from 'vuex';

export default {
  name: 'peeper-admin-toolbar',
  methods: {
    ...mapActions('auth', {
      logout: LOGOUT.action,
    }),
    onLogout() {
      this.logout();
      this.$router.push({ name: 'home' });
    },
    openHome() {
      const routeData = this.$router.resolve({ name: 'home' });
      window.open(routeData.href, '_blank');
    },
  },
};
</script>

<style>
</style>
