<template>
   <v-badge flat right color="transparent">
      <span slot="badge" class="white--text font-weight-bold" v-if="cart.length > 0">{{cart.length}}</span>
      <v-icon large color="white">shopping_cart</v-icon>
   </v-badge>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'peeper-cart-mobile',
  computed: {
    ...mapGetters('cart', ['cart']),
  },
};
</script>

<style>

</style>
