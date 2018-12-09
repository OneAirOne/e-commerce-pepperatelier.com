<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-img
        :src="image"
        max-height="250px"
        contain
      ></v-img>
    </v-layout>
  </v-container>
</template>

<script>
import Image from '@/assets/loader.gif';

export default {
  name: 'peeper-loader',
  data: () => ({
    image: Image,
  }),
  // props: {
  //   text: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>

<style scoped>
</style>
