<template>
  <v-card flat width="550" ref="peeperBoardDescription" :style="styleObject">
  <v-container>
    <v-layout column>

      <v-flex>
        <v-layout row align-center>
          <v-card-title class="headline py-0">{{ product.name }}</v-card-title>
          <v-flex>{{ product.price }} €</v-flex>
          <v-layout justify-end><v-btn flat @click="onGoBack">retour</v-btn></v-layout>
        </v-layout>
      </v-flex>

      <v-card-text>

        <v-flex mb-1><v-divider></v-divider></v-flex>

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
          <v-btn block dark color="grey_dark" @click="onAddToCart(product)">Ajouter au panier</v-btn>
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
    product: {
      type: Object,
      required: true,
    },
    pictures: {
      type: HTMLDivElement,
    },
  },
  data: () => ({
    styleObject: {
      position: 'fixed',
      top: '',
      right: '',
    },
  }),
  methods: {
    onGoBack() {
      this.$emit('goBack');
    },
    onAddToCart(product) {
      this.$emit('addToCart', product);
    },
    handleScroll() {
      const description = this.$refs.peeperBoardDescription.$el;
      const descriptionSize = description.getBoundingClientRect().height;
      const maxScroll = this.pictures.getBoundingClientRect().height - descriptionSize;
      const scrollY = window.scrollY;
      const offsetY = 150;

      if (scrollY > maxScroll) {
        this.styleObject.top = `-${offsetY}px`;
      } else if (scrollY < maxScroll) {
        this.styleObject.top = `${offsetY}px`;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>

</style>
