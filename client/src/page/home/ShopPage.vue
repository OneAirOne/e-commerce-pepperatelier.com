<template>
  <div>
    <h2 class="headline font-weight-light text-uppercase  text-xs-center mt-4 mb-2">Points de vente</h2>
    <h3 class="headline font-weight-thin text-xs-center my-4">Tester et Acheter un snowboard en boutique</h3>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-container>
          <v-layout column>
            <template v-for="marker in markerList">
              <v-flex :key="marker.id">
                <p v-html="marker.tooltip"></p>
                <v-flex>
                  <v-divider></v-divider>
                </v-flex>
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md6>
        <v-container class="peeper-map-container">
          <peeper-map class="peeper-map-area" :markerList="markerList"></peeper-map>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PeeperMap from '@/components/shop/Map';

export default {
  name: 'peeper-shop-page',
  components: { PeeperMap },
  data: () => ({
    markerList: [
      {
        id: 'm1',
        visible: true,
        position: [45.159983, 6.078094],
        tooltip: `<strong> VAUJANY SKI SHOP - INTERSPORT </strong>
          <br /> Place de la Fare 38114 VAUJANY
          <br /> +334 76 80 78 72
          <br /> +336 08 91 37 34
          <br /> <a href="mailto:contact@intersport-vaujany.com">contact@intersport-vaujany.com</a>
          <br /> <a href="http://www.intersport-vaujany.com">www.intersport-vaujany.com</a>
          `,
      },
      {
        id: 'm2',
        visible: true,
        position: [45.399091, 6.566898],
        tooltip: `<strong> AVALON BOARDSHOP </strong>
          <br />Galerie des Cimes, 73550 Meribel
          <br />+334 79 24 30 61
          <br /><a href="http://www.avalonboardshop.com">www.avalonboardshop.com</a>
          `,
      },
      {
        id: 'm3',
        visible: true,
        position: [45.046362, 6.307102],
        tooltip: `<strong> LA GRAVE - SKI SET </strong>
          <br />RD 1091 05320 LA GRAVE
          <br />+334 76 79 92 21
          <br /><a href="mailto:info-la-grave@skiset.com">info-la-grave@skiset.com</a>
          <br /><a href="http://www.skiset.com">www.skiset.com</a>
          `,
      },
      {
        id: 'm4',
        visible: true,
        position: [45.416588, 6.632705],
        tooltip: `<strong> Endless Winter </strong>
          <br />Rue du Forum, 73120 Saint-Bon-Tarentaise
          <br />+334 57 37 23 32
          <br /><a href="http://http://www.endlesswinter-courchevel.com">http://www.endlesswinter-courchevel.com</a>
          `,
      },
      {
        id: 'm5',
        visible: true,
        position: [45.091005, 6.076109],
        tooltip: `<strong> GO SPORT MONTAGNE CONCEPT</strong>
          <br />Centre des bergers, 38750 Huez
          <br />+334 76 80 31 96
          <br /><a href="https://stores.go-sport.com/fr-fr/magasin-sport/huez/go-sport-montagne-concept/617">https://stores.go-sport.com</a>
          `,
      },
    ],
  }),
};
</script>

<style scoped>
.peeper-map-area {
  width: 100%;
  height: 725px;
}
@media screen and (max-width: 960px) {
  .peeper-map-container {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
