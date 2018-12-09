<template>
  <v-card flat v-if="products.length > 0">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="(product, index) of products"
          :key="index"
          xs12 sm6 md4
        >
          <v-card
            flat
            :to="{ name: 'products-details', params: { productId: product._id }}"
          >
            <v-layout align-center class="text-xs-center">
              <v-flex mb-5>
                <v-container
                  v-if="product.thumbnail"
                  class="peeper-link"
                >
                <v-flex mb-2 class="font-weight-black">
                  {{ product.name }}
                </v-flex>
                  <v-img
                    :src="product.thumbnail.path"
                    :lazy-scr="product.thumbnail.path"
                    max-height="500"
                    contain
                  >
                    <v-layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-img :src="placeholder" max-height="50" contain></v-img>
                    </v-layout>
                  </v-img>
                <v-flex>
                  {{ product.price }} €
                </v-flex>
                </v-container>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
const placeholder = require('@/assets/lazy_loading.png');

export default {
  name: 'peeper-products-list',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    placeholder,
  }),
};
</script>

<style scoped>
.peeper-link:hover {
  transform: scale(1.1);
  transition: all .5s;
}
.peeper-caption:hover {
  transform: translateY(10px);
}
</style>
