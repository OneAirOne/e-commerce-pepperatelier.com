<template>
  <v-btn flat icon @click="goBack()">
    <v-icon>keyboard_arrow_left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'peeper-back-button',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    history() {
      return window.history.length;
    },
  },
};
</script>

<style>

</style>
