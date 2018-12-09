<template>
  <peeper-loader text="suppression en cours..."></peeper-loader>
</template>

<script>
import { mapActions } from 'vuex';
import { DELETE_PRODUCT } from '@/store/modules/product/transactions';
import PeeperLoader from '@/components/shared/Loader';

export default {
  name: 'peeper-product-delete',
  components: { PeeperLoader },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    try {
      await this.deleteProduct({ productId: this.productId });
      this.$router.go(-1);
    } catch (error) {
      console.error('deleteProduct error ', error);
    }
  },
  methods: {
    ...mapActions('product', {
      deleteProduct: DELETE_PRODUCT.action,
    }),
  },
};
</script>

<style>

</style>
