<template>
  <v-app id="layout">
    <v-flex>
      <peeper-navigation class="peeper-desktop"></peeper-navigation>
      <v-layout class="peeper-cart-desktop mr-5" justify-end>
      </v-layout>
      <peeper-navigation-mobile class="peeper-mobile"></peeper-navigation-mobile>
      <peeper-back-to-top></peeper-back-to-top>
      <peeper-snackbar></peeper-snackbar>
    </v-flex>
    <v-flex>
      <router-view mt-5></router-view>
    </v-flex>
    <peeper-footer ref="peeperFooter"></peeper-footer>
  </v-app>
</template>

<script>
import PeeperNavigation from '@/components/Navigation';
import PeeperNavigationMobile from '@/components/NavigationMobile';
import PeeperSnackbar from '@/components/Snackbar';
import PeeperFooter from '@/components/Footer';
import PeeperBackToTop from '@/components/app/BackToTop';
import 'vuetify/dist/vuetify.min.css';

export default {
  components: {
    PeeperNavigation,
    PeeperNavigationMobile,
    PeeperSnackbar,
    PeeperFooter,
    PeeperBackToTop,
  },
};
</script>

<style scoped>
#layout {
  background: white;
}
.peeper-mobile {
  margin-bottom: 80px;
}
@media screen and (max-width: 960px) {
  .peeper-desktop {
    display:none;
  }
  .peeper-cart-desktop {
    display: none;
  }
}
@media screen and (min-width: 961px) {
  .peeper-mobile {
    display: none;
  }
}
.peeper-cart-desktop {
  z-index: 1000;
  position:fixed !important;
  right: 0.6em !important;
  top: 100px !important;
}
</style>
