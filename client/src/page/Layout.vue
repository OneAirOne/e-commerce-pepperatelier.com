<template>
  <v-app id="layout">
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import AdminLoginLayout from '@/page/admin/auth/Layout';
import AdminHomeLayout from '@/page/admin/Layout';
import LandingLayout from '@/page/home/landing/Layout';
import HomeLayout from '@/page/home/Layout';
import { setLayout } from '@/store/modules/app/actionsTypes';
import { mapActions, mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters('app', ['layout']),
  },
  components: {
    'admin-login-layout': AdminLoginLayout,
    'admin-home-layout': AdminHomeLayout,
    'landing-layout': LandingLayout,
    'home-layout': HomeLayout,
  },
  methods: {
    ...mapActions('app', {
      setLayout,
    }),
  },
  mounted() {
    const route = this.$route;
    if (route.name === 'admin-login') {
      this.setLayout('admin-login-layout');
    } else if (route.name.includes('admin')) {
      this.setLayout('admin-home-layout');
    } else if (route.name === 'home') {
      this.setLayout('landing-layout');
    } else {
      this.setLayout('home-layout');
    }
  },
  watch: {
    '$route'(to) {
      if (to.name === 'admin-login') {
        this.setLayout('admin-login-layout');
      } else if (to.name.includes('admin')) {
        this.setLayout('admin-home-layout');
      } else if (to.name === 'home') {
        this.setLayout('landing-layout');
      } else {
        this.setLayout('home-layout');
      }
    },
  },
};
</script>

<style scoped>
  #layout {
    background: white;
  }
</style>
