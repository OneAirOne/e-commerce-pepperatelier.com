<template>
  <div>
    <h2 v-if="!isLoading" class="headline font-weight-thin text-uppercase  text-xs-center mt-4 mb-2">Snowboards</h2>
    <peeper-product-list v-if="!isLoading" :products="productsVisible"></peeper-product-list>
    <peeper-loader v-if="isLoading || productsVisible.length === 0"></peeper-loader>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { GET_PRODUCTS } from '@/store/modules/product/transactions';
import PeeperLoader from '@/components/shared/Loader';
import PeeperProductList from '@/components/product/List';

export default {
  name: 'peeper-product-page',
  components: { PeeperLoader, PeeperProductList },
  computed: {
    ...mapGetters('product', ['products']),
    ...mapState('product', {
      isLoading: GET_PRODUCTS.keys.pending,
    }),
    productsVisible() {
      return this.products ? this.products.filter(element => element.visible === true) : [];
    },
  },
  async mounted() {
    if (!this.products) {
      this.getProducts();
    }
  },
  methods: {
    ...mapActions('product', {
      getProducts: GET_PRODUCTS.action,
    }),
  },
};
</script>

<style>

</style>
