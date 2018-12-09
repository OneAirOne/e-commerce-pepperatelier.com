<template>
  <div>
    <!-- <v-container class="peeper-home-loading" v-if="isLoading">
      <peeper-loader class="peeper-loader"></peeper-loader>
    </v-container>
    <v-container class="peeper-home-white" v-if="isLoading">
    </v-container> -->
    <div>
      <v-img class="peeper-landing-image" :src="landingPeeper"></v-img>
      <v-img class="peeper-landing-image-mobile" :src="landingPeeperMobile"></v-img>
      <peeper-banner></peeper-banner>
      <v-flex xs12>
        <peeper-parallax :image="landingPeeper2" :size="400"  class="peeper-parallax"></peeper-parallax>
        <v-img class="peeper-mobile" :src="landingPeeper3Mobile" alt="peeper-snowboard"></v-img>
      </v-flex>

      <v-layout row align-center justify-center class="peeper-snow-link">
        <v-flex xs10 md4>
          <v-layout column>
            <v-flex mt-5 mb-3 class="title font-weight-thin text-xs-center">
              Snowboards
            </v-flex>
            <v-layout mb-5 row justify-center>
              <v-img :src="snowDemo"  class="peeper-link1" @click="goTo('products')"  max-height="350" contain></v-img>
              <v-img :src="snowDemo2" class="peeper-link1" @click="goTo('products')" max-height="350" contain></v-img>
              <v-img :src="snowDemo3" class="peeper-link1" @click="goTo('products')" max-height="350" contain></v-img>
            </v-layout>
            <v-flex mb-4 class="title font-weight-thin text-xs-center" @click="goTo('products')">
              <v-container>
                <v-btn large block color="primary" :to="{ name: 'technology'}">Accèder à la boutique</v-btn>
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-flex xs12>
        <peeper-parallax-custom :image="landingPeeper3" :size="650" class="peeper-parallax"></peeper-parallax-custom>
      </v-flex>
    </div>

  </div>
</template>

<script>
import PeeperParallax from '@/components/landing/Parallax';
import PeeperParallaxCustom from '@/components/landing/ParallaxCustom';
import PeeperBanner from '@/components/landing/Banner';
import PeeperLoader from '@/components/shared/Loader';

const landingPeeper = require('@/assets/landing_peeper.jpg');
const landingPeeperMobile = require('@/assets/landing_peeper_mobile.jpg');
const landingPeeper3 = require('@/assets/landing_peeper3.jpg');
const landingPeeper2 = require('@/assets/landing_peeper2.jpg');
const landingPeeper3Mobile = require('@/assets/landing_peeper3_mobile.jpg');
const snowDemo = require('@/assets/SNOWDEM.png');
const snowDemo2 = require('@/assets/SNOWDEM02.png');
const snowDemo3 = require('@/assets/SNOWDEM03.png');
const logo = require('@/assets/logo_noir.png');
const placeholder = require('@/assets/logo_noir.png');


export default {
  name: 'peeper-landing',
  components: { PeeperParallax, PeeperBanner, PeeperParallaxCustom, PeeperLoader },
  data: () => ({
    isLoading: true,
    landingPeeper,
    landingPeeperMobile,
    landingPeeper3,
    landingPeeper2,
    landingPeeper3Mobile,
    snowDemo,
    snowDemo2,
    snowDemo3,
    logo,
    placeholder,
  }),
  methods: {
    goTo(destination) {
      this.$router.push({ name: destination });
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1700);
  },
};
</script>

<style>

/* .peeper-home-white {
  height: 1600px;
} */
.peeper-snow-link {
  height: 750px;
}
.peeper-link1:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all .5s;
}
.peeper-link2:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all .5s;
}
.peeper-link3:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all .5s;
}
.custom-parallax .v-parallax img { width: 130%;}
@media screen and (max-width: 960px) {
  .peeper-parallax {
    display:none;
  }
  .peeper-snow-link {
    height: 600px;
  }
  .peeper-landing-image {
    display: none;
  }
  /* .peeper-home-loading {
    display: none;
  } */
  /* .peeper-home-white {
    display: none;
  } */
}
@media screen and (min-width: 961px) {
  .peeper-mobile {
    display: none;
    height: 750px;
  }
  .peeper-landing-image-mobile {
    display: none;
  }
  .landing-image-placeholder{
    height: 800px;
  }
  /* .peeper-home-loading {
    height: 800px;
  }
  .peeper-loader {
    margin-left: 0.7em;
  } */
}
</style>
