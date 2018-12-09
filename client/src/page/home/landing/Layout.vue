<template>
  <v-app>
    <peeper-navigation class="peeper-destop"></peeper-navigation>
    <peeper-navigation-mobile class="peeper-mobile"></peeper-navigation-mobile>
    <peeper-back-to-top></peeper-back-to-top>
    <peeper-snackbar></peeper-snackbar>
    <router-view mt-5></router-view>
    <peeper-footer></peeper-footer>
  </v-app>
</template>

<script>
import PeeperNavigation from '@/components/Navigation';
import PeeperSnackbar from '@/components/Snackbar';
import PeeperFooter from '@/components/Footer';
import PeeperNavigationMobile from '@/components/NavigationMobile';
import PeeperBackToTop from '@/components/app/BackToTop';

export default {
  components: {
    PeeperNavigation,
    PeeperSnackbar,
    PeeperFooter,
    PeeperNavigationMobile,
    PeeperBackToTop,
  },
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .peeper-destop {
    display:none;
  }
  .peeper-mobile {
    z-index: 20;
  }
}
@media screen and (min-width: 961px) {
  .peeper-mobile {
    display: none;
  }
}
</style>
