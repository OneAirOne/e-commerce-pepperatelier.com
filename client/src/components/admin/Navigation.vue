<template>
  <v-navigation-drawer
    dark
    class="grey_dark"
    :mini-variant.sync="mini"
    v-model="drawer"
    hide-overlay
    stateless
    app
    @blur="mini =!mini"
    width="200"
    enable-resize-watcher
  >
    <v-toolbar dark flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar >
          <v-list-tile-avatar>
            <v-img ref="peeperLogoWhite" :src="peeperLogoWhite" alt="peeperLogoWhite" max-height="200" contain></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Bigoune</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile :to="{ name: 'admin-products' }" active-class="secondary">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Liste des produits</v-list-tile-title>
      </v-list-tile>

      <v-list-tile :to="{ name: 'admin-product-create' }" active-class="secondary">
        <v-list-tile-action>
          <v-icon>add</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Ajouter un produit</v-list-tile-title>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
const peeperLogoWhite = require('@/assets/logo_peeper_white.png');

export default {
  name: 'peeper-navigation',
  data: () => ({
    peeperLogoWhite,
    drawer: true,
    mini: true,
  }),
};
</script>

<style>

</style>
