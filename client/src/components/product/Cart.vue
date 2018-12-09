<template>
  <v-badge overlap flat right color="transparent">
    <span slot="badge" class="black--text font-weight-bold" v-if="cart.length > 0">{{cart.length}}</span>
    <v-avatar
      class="red--after"
    >
      <v-menu  open-on-hover bottom offset-y>
        <v-btn
          :ripple="false"
          disabled
          icon
          slot="activator"
        >
          <v-icon medium color="grey_extra_light">shopping_cart</v-icon>
        </v-btn>
        <v-container v-if="cart.length > 0" class="peeper-cart" grid-list-md>
          Panier :
          <v-list
            v-for="(item, index) in cart"
            :key="index"
          >
            <v-layout row>
              <v-flex xs12>
                <v-list-tile :to="{ name: 'products-details', params: { productId: item._id }}">
                    <v-flex>
                      <v-img position="left" :src="item.thumbnail.path" width="30" contain></v-img>
                    </v-flex>
                    <v-flex>
                      {{ item.name }}
                    </v-flex>
                    <v-flex class="caption">
                      {{ item.price }}€
                    </v-flex>
                </v-list-tile>
              </v-flex>
              <v-spacer></v-spacer>
              <v-btn flat icon @click.stop="removeFromCart(index)"><v-icon>delete</v-icon></v-btn>
            </v-layout>
            <v-divider class="mt-3"></v-divider>
          </v-list>
          <v-flex class="font-weight-bold">
            Total {{ total }}€
          </v-flex>
          <v-container>
            <v-btn color="primary" :to="{ name: 'order' }">Précommander</v-btn>
          </v-container>
        </v-container>
        <v-container v-if="cart.length === 0" class="peeper-cart">
          <v-layout row align-center justify-center>
            <v-flex>
              Votre panier est vide
            </v-flex>
            <v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-menu>
    </v-avatar>
  </v-badge>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { REMOVE_FROM_CART } from '@/store/modules/cart/transactions';

export default {
  name: 'peeper-cart',
  computed: {
    ...mapGetters('cart', ['cart']),
    total: {
      get() {
        let total = 0;
        this.cart.forEach((element) => {
          total += element.price;
        });
        return total;
      },
    },
  },
  methods: {
    ...mapActions('cart', {
      removeFromCart: REMOVE_FROM_CART.action,
    }),
    goTo(productId) {
      this.$router.push({ name: 'products-details', params: { productId } });
    },
  },
};
</script>

<style>
.peeper-cart {
  z-index: 20000 !important;
  background-color: white;
}
</style>
