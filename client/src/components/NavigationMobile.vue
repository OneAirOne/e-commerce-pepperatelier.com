<template>
  <div>
    <v-flex>
      <Slide class="peeper-mobile">
        <v-layout column pt-0>
          <v-flex >
            <v-img @click="goTo('home')" ref="peeperLogoWhite" :src="peeperLogoWhite" alt="peeperLogoWhite" max-height="50" contain></v-img>
          </v-flex>
          <v-flex ma-3>
            <v-divider dark></v-divider>
          </v-flex>
        </v-layout>
        <v-flex class="peeper-cart-mobile" @click="goTo('order')">
          <peeper-cart-mobile></peeper-cart-mobile>
        </v-flex>
        <a id="workshop" @click="goTo('workshop')">
          <span>L'atelier</span>
        </a>
        <a id="snowboard" @click="goTo('products')">
          <span>Snowboard</span>
        </a>
        <a id="tehcnology" @click="goTo('technology')">
          <span>Technologie</span>
        </a>
        <a id="shop" @click="goTo('shop')">
          <span>Points de vente</span>
        </a>
        <a id="contact" @click="openContact">
          <span>Contact</span>
        </a>
      </Slide>
    </v-flex>
    <peeper-contact v-model="showDialog"></peeper-contact>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import PeeperContact from '@/components/contact/Form';
import PeeperCartMobile from '@/components/product/CartMobile';

const peeperLogoWhite = require('@/assets/logo_peeper_white.png');

export default {
  name: 'peeper-nav-mobile',
  components: { Slide, PeeperContact, PeeperCartMobile },
  data: () => ({
    showDialog: false,
    showBurger: false,
    peeperLogoWhite,
  }),
  methods: {
    goTo(destination) {
      this.$router.push({ name: destination });
    },
    openContact() {
      this.showDialog = !this.showDialog;
    },
  },
};
</script>

<style>
.peeper-cart-mobile:hover {
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #0c0e12 !important;
}
#bm-menu, .bm-menu {
  background-color: #0c0e12 !important;
}
</style>
