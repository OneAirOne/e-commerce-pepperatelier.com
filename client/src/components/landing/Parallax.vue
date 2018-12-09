<template>
  <v-parallax
    class="ma-0"
    :src="image"
    alt="peeper-landing-snowboard-image"
    :height="size"
  >
  </v-parallax>
</template>

<script>
const logo = require('@/assets/logo_noir.png');

export default {
  name: 'peeper-parallax',
  props: {
    image: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
  data: () => ({
    logo,
  }),
};
</script>

<style>
</style>
