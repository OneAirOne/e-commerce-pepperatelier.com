<template>
  <v-card flat ref="peeperBoardDescription">
  <v-container pt-0>
    <v-layout column>

      <v-flex>
        <v-layout row align-center>
          <v-card-title class="headline py-0">{{ product.name }}</v-card-title>
          <v-layout justify-end><v-btn flat @click="onGoBack">retour</v-btn></v-layout>
        </v-layout>
      </v-flex>

      <v-card-text>

        <v-flex mb-1><v-divider></v-divider></v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Prix</v-flex>
            <v-flex xs6>{{ product.price }} €</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Type de planche</v-flex>
            <v-flex xs6>
              <v-layout row wrap justify-left>
                <div v-for="(item, index) of product.boardStyle"
                  :key=index
                  class="mr-3"
                >
                  {{ item }}
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Noyau</v-flex>
            <v-flex xs6>
              <v-layout row wrap justify-left>
                <div v-for="(item, index) of product.stones"
                  :key=index
                  class="mr-3"
                >
                  {{ item }}
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Plaquage</v-flex>
            <v-flex xs6>
              <v-layout row wrap justify-left>
                <div v-for="(item, index) of product.plating"
                  :key=index
                  class="mr-3"
                >
                  {{ item }}
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Poids</v-flex>
            <v-flex xs6>{{ product.weight }} kg</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Longueur</v-flex>
            <v-flex xs6>{{ product.height }} cm</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Largeur (nose, patin, tail)</v-flex>
            <v-flex xs6>{{ product.widthNose }} cm - {{ product.widthPatin }} cm - {{ product.widthTail }} cm</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Rayon</v-flex>
            <v-flex xs6>{{ product.rayonne }}</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Flex</v-flex>
            <v-flex xs6>{{ product.flex }} / 10</v-flex>
          </v-layout>
        </v-flex>

        <v-flex v-if="product.description.length > 0">
          <v-layout row>
            <v-flex xs6 class="grey--text">Description</v-flex>
            <v-flex xs6>{{ product.description }}</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Collection</v-flex>
            <v-flex xs6>{{ product.year }}</v-flex>
          </v-layout>
        </v-flex>

        <v-flex>
          <v-layout row>
            <v-flex xs6 class="grey--text">Stock</v-flex>
            <v-flex xs6>{{ product.stock }}</v-flex>
          </v-layout>
        </v-flex>

        <v-flex mt-5>
          <v-btn large block dark color="grey_dark" @click="onAddToCart(product)">Ajouter au panier</v-btn>
        </v-flex>
      </v-card-text>
    </v-layout>
  </v-container>

</v-card>
</template>

<script>
export default {
  name: 'peeper-description',
  props: {
    product: Object,
    required: true,
  },
  data: () => ({

  }),
  methods: {
    onGoBack() {
      this.$emit('goBack');
    },
    onAddToCart(product) {
      this.$emit('addToCart', product);
    },
  },
};
</script>

<style>

</style>
