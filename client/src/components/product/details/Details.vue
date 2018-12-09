<template>
  <v-container mt-5>
    <v-layout row wrap v-if="product" justify-start>

      <v-flex sm12 class="peeper-description-mobile" pt-0>
        <peeper-description-mobile :product="product" @goBack="goBack" @addToCart="addToCart"></peeper-description-mobile>
      </v-flex>

      <v-flex sm12 md6>
        <v-container>
          <vue-picture-swipe ref="pictures"  class="peeper-images" :items="items" :options="options"></vue-picture-swipe>
        </v-container>
      </v-flex>

      <v-flex md6 class="peeper-description-desktop">
        <peeper-description :pictures="pictures" :product="product" @goBack="goBack" @addToCart="addToCart"></peeper-description>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { ADD_TO_CART } from '@/store/modules/cart/transactions';
import PeeperDescription from '@/components/product/details/Description';
import PeeperDescriptionMobile from '@/components/product/details/DescriptionMobile';


export default {
  name: 'peeper-product-details',
  components: { PeeperDescription, PeeperDescriptionMobile },
  props: {
    product: Object,
    required: true,
  },
  data: () => ({
    items: [],
    scrollValue: 2065,
    options: {
      timeToIdle: 4000,
      bgOpacity: 1,
      loop: true,
    },
    pictures: null,
  }),
  methods: {
    ...mapActions('cart', {
      addToCart: ADD_TO_CART.action,
    }),
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // format data for vue-picture-swipe
    if (this.product) {
      this.product.images.forEach((element) => {
        const file = element.file;
        this.items.push({
          src: file.src,
          thumbnail: file.thumbnail,
          w: file.w,
          h: file.h,
        });
      });
    }
    this.$nextTick(() => {
      if (this.$refs.pictures) {
        this.pictures = this.$refs.pictures.$el;
      }
    });
  },
};
</script>

<style>
.pswp {
  /* overwrite css of vue-picture-swipe librairie */
  z-index: 20000 !important;
}
.my-gallery img{
  max-width:100%;
}
.my-gallery a:hover img {
  cursor: zoom-in;
}
@media screen and (max-width: 960px) {
  .peeper-description-desktop {
    display:none;
  }
}
@media screen and (min-width: 961px) {
  .peeper-description-mobile {
    display:none;
  }
}
</style>
