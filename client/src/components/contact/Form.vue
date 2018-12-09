<template>
  <v-dialog class="peeper-dialog" v-model="show" max-width="290">
    <v-card>
      <v-layout justify-center>
        <h2 class="headline font-weight-light text-uppercase  text-xs-center mt-4 mb-2">Nous contacter</h2>
      </v-layout>
      <v-card-text>
        <v-flex mb-3>
          Vous souhaitez rentrer en contact avec Pepper ?
        </v-flex>
        <v-divider></v-divider>
        <v-layout column class="text-xs-center font-weight-bold" my-3>
          <v-flex>
            Une question
          </v-flex>
          <v-flex>
            Acheter un snowboard
          </v-flex>
          <v-flex>
            Détails de livraison
          </v-flex>
          <v-flex>
            Entretien du matériel
          </v-flex>
          <v-flex>
            Une commande personnalisée
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-flex my-3>
          Envoyer un mail directement à l'adresse ci-dessous :
        </v-flex>
        <v-flex class="font-weight-bold">
          <a class="peeper-mail" href="mailto:pepper.artisanshaper@gmail.com">pepper.artisanshaper@gmail.com</a>
        </v-flex>
        <v-flex mb-3>
          Ou appelez le <strong> 07 69 51 29 51</strong>
        </v-flex>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.native="show = false">Fermer</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style>
.peeper-dialog {
  z-index: 20000 !important;
}
.peeper-mail {
  text-decoration: none;
}

</style>
