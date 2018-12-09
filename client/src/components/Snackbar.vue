<template>
  <v-snackbar class="peeper-snackbar" v-model="show" :color="options.color" :bottom="options.y === 'bottom'" :left="options.x === 'left'" :multi-line="options.multiline" :right="options.x === 'right'" :timeout="options.timeout" :top="options.y === 'top'" :vertical="options.vertical">
    {{ options.text }}
    <v-btn flat icon @click="show = false">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { pushToSnackbar, popSnackbar } from '@/store/modules/app/actionsTypes';

export default {
  name: 'peeper-snackbar',
  data() {
    return {
      options: {
        y: 'bottom',
        x: 'right',
        vertical: false,
        color: 'dark',
        timeout: 5000,
        multiline: false,
        text: '',
      },
      show: false,
    };
  },
  methods: {
    ...mapActions('app', [pushToSnackbar, popSnackbar]),
  },
  watch: {
    snackbarCurrent: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          if (typeof newValue === 'string') newValue = { text: newValue };
          this.$nextTick(() => {
            this.options = { ...this.options, ...newValue };
            this.show = true;
          });
        }
      },
    },
    show(newValue) {
      if (newValue === false) {
        this.popSnackbar();
      }
    },
  },
  computed: {
    ...mapGetters('app', ['snackbarQueue', 'snackbarCurrent']),
  },
};
</script>

<style>
.peeper-snackbar {
  z-index: 20000 !important;
}
</style>
