<template>
  <v-layout row align-center class="peeper-banner">
    <v-flex xs12>
      <v-layout row justify-center align-center>
        <v-layout column>
          <v-img class="mt-5 peeper-logo-blue" ref="logoPeeperBlue" :src="logoPeeperBlue" alt="logoPeeperBlue" max-height="50" contain></v-img>
            <v-layout row justify-start>
              <v-flex xs4>
                <v-img position="center"  ref="quoteUp" :src="quoteUp" alt="quoteUp" max-height="25" contain></v-img>
              </v-flex>
            </v-layout>
            <v-layout row justify-center align-center fill-height>
              <v-flex xs6>
                <peeper-typed class="text-xs-center"></peeper-typed>
              </v-flex>
            </v-layout>
            <v-layout row justify-end>
              <v-flex xs4>
                <v-img position="center"  ref="quoteDown" :src="quoteDown" alt="quoteDown" max-height="25" contain></v-img>
              </v-flex>
            </v-layout>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import PeeperTyped from '@/components/landing/Typed';

const quoteUp = require('@/assets/quote_up.png');
const quoteDown = require('@/assets/quote_down.png');
const logoPeeperBlue = require('@/assets/logo_peeper_blue.png');

export default {
  name: 'peeper-banner',
  components: { PeeperTyped },
  data: () => ({
    quoteUp,
    quoteDown,
    logoPeeperBlue,
  }),
  computed: {
    titleClass() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'display-2';
        default: return 'display-3';
      }
    },
  },
};
</script>

<style scoped>
.peeper-banner {
  background-color: #11161c;
  color: white;
}
.peeper-banner-title {
  color: #dddddd;
}
@media screen and (max-width: 960px) {
  .peeper-banner {
    height: 550px ;
  }
  .peeper-logo-blue {
    display: none;
  }
}
@media screen and (min-width: 961px) {
  .peeper-banner {
    height: 800px;
  }
}
</style>
