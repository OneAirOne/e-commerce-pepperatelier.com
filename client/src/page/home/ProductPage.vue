<template>
  <div>
    <peeper-product-details v-if="!isLoading" :product="product"></peeper-product-details>
    <peeper-loader v-if="isLoading || !product"></peeper-loader>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { GET_PRODUCT } from '@/store/modules/product/transactions';
import PeeperLoader from '@/components/shared/Loader';
import PeeperProductDetails from '@/components/product/details/Details';

export default {
  name: 'peeper-product-page',
  components: { PeeperLoader, PeeperProductDetails },
  props: {
    productId: {
      type: String,
      require: true,
    },
  },
  computed: {
    ...mapGetters('product', ['product']),
    ...mapState('product', {
      isLoading: GET_PRODUCT.keys.pending,
    }),
  },
  async mounted() {
    this.getProduct({ productId: this.productId });
  },
  beforeRouteUpdate(to, from, next) {
    const productId = to.params.productId;
    this.getProduct({ productId });
    next();
  },
  methods: {
    ...mapActions('product', {
      getProduct: GET_PRODUCT.action,
    }),
  },
};
</script>

<style>
</style>
