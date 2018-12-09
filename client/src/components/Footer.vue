<template>
  <v-footer
    dark
    height="auto"
    class="peeper-footer"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey_light">
        <v-container>
          <v-layout column justify-center>
            <v-flex mb-3>
              <v-img ref="logoPeeperWhite" :src="logoPeeperWhite" alt="logoPeeperWhite" max-height="30" contain></v-img>
            </v-flex>
            <v-flex class="caption text-xs-center">
              <a class="peeper-mail" href="mailto:pepper.artisanshaper@gmail.com">pepper.artisanshaper@gmail.com</a>
            </v-flex>
            <v-flex class="caption text-xs-center" mb-3>
              07 69 51 29 51
            </v-flex>
            <v-flex>
              <v-layout row justify-center>
                <v-img class="peeper-icon-social" @click="goToFb" ref="socialFacebook" :src="socialFacebook" alt="socialFacebook" max-height="30" max-width="30" contain></v-img>
                <v-img class="peeper-icon-social" @click="goToInsta" ref="socialInsta" :src="socialInsta" alt="socialInsta" max-height="30" max-width="30" contain></v-img>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>

      <v-card-actions class="peeper-footer-limit grey_dark justify-center align-center">
          <p class="peeper-footer-copyright peeper-footer-mobile">
            <v-layout row wrap class="text-xs-center">
              <v-flex>
                Copyright &copy; 2018 Pepper Atelier - &emsp;
              </v-flex>
              <v-flex>
                Developpé par &emsp; <a href="http://www.erwangilbert.com">OneAirOne</a>
              </v-flex>
            </v-layout>
          </p>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
const socialFacebook = require('@/assets/icon_facebook.png');
const socialInsta = require('@/assets/icon_insta.png');
const logoPeeperWhite = require('@/assets/logo_peeper_white.png');

export default {
  data: () => ({
    socialFacebook,
    socialInsta,
    logoPeeperWhite,
  }),
  methods: {
    goToFb() {
      window.open('https://www.facebook.com/peppershaper/', '_blank');
    },
    goToInsta() {
      window.open('https://www.instagram.com/pepper.atelier/', '_blank');
    },
  },
};
</script>

<style scoped>
.peeper-footer {
  /* border-top: 5px solid #0a0c0f; */
}
.peeper-footer-limit {
  border-top: 5px solid #0a0c0f !important;
}
.peeper-footer-copyright{
  padding-top: 5px;
  color: #465060;
}
.peeper-footer-copyright a {
  color: white;
  text-decoration: none;
}
.peeper-icon-social:hover  {
  cursor: pointer;
  transform: scale(1.2);
  transition: all .3s;
}
.peeper-mail {
  color: white;
  text-decoration: none;
}
</style>
