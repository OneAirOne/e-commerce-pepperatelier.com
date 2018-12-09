<template>
  <vue-typed-js
    :strings="punchLines"
    :loop="true"
    :typeSpeed="50"
    :startDelay="1000"
  >
    <h1 :class="titleClass"><span class="typing font-weight-regular"></span></h1>
  </vue-typed-js>
</template>

<script>
export default {
  name: 'peeper-typed',
  data: () => ({
    punchLines: [
      'La passion d\'un ébéniste au service de la glisse. ^1300',
      'Une production artisanale concentrée sur la qualité. ^1300',
      'Chaque snowboard possède une combinaison d\'essence de bois spécifique. ^1300',
      // 'Des bois selectionnées selon leurs propriétés.^1300',
      // 'La passion d'un ébéniste au service de la glisse ^1300',
      // 'Chaque produit est spécifique et mérite son temps de fabrication ^1300',
      // 'Toute création commence par la combinaison de différentes essences de bois. ^1300',
      '^1000',
    ],
  }),
  computed: {
    titleClass() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'headline';
        default: return 'display-3';
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Enriqueta');
.typing {
  font-family: 'Enriqueta', serif;
  color: #4f5e76;
}
.typed-cursor {
  color: #4f5e76;
}
</style>
