<template>
  <div>
    <h2 class="headline font-weight-light text-uppercase  text-xs-center mt-4 mb-2">L'Atelier</h2>
    <v-container>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column>
            <v-img :src="image1" alt="image1">
              <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-img :src="placeholder" max-height="50" alt="placeholder" contain></v-img>
              </v-layout>
            </v-img>
            <div class="headline font-weight-thin text-xs-center mt-5 mb-4">Savoir Faire, Liberté et Qualité</div>
            <v-flex mb-3 class="text-xs-justify">
              A l’atelier, l’homme et son savoir faire manuel sont les principaux artisans. La conception et l’élaboration des planches relèvent des techniques artisanales de l’ébénisterie, du noyau au plaquage. Le bois est le matériau principal et les essences sont sélectionnées pour leurs particularités propres. La combinaison de leurs propriétés est ici le point de départ de toute création. Les planches sont fabriquées au cas par cas, l’atelier est avant tout un espace de recherche et la spécificité de chaque pièce en fait un véritable lieu de création et d’innovation.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column>
            <v-img :src="image2" alt="image2"></v-img>
            <v-flex mt-5 mb-4 class="text-xs-justify">
              Associer le savoir faire historique de l’ébénisterie à la pratique contemporaine du snowboard et de la glisse est un travail sans fin, respirant de liberté. De la forme du shape à la selection des matériaux, les possibilités sont infinies tout comme les manières de glisser. La pratique artisanale du shaper prend ici tout son intérêt : l’ouverture des possibles, du rêve au réel, chaque planche à lieu d’exister. Il ne s’agit pas de produire en masse, chaque snowboard est spécifique et mérite son temps de conception et de production.
            </v-flex>
            <v-flex mb-4 class="text-xs-justify">
              L’atelier Pepper s’oriente vers la perfection et la finesse de la glisse. A cette envie s’associe la sélection de techniques et de matériaux de haute qualité, visant la réalisation d’objets haut de gamme. En quête des meilleures sensations et d’une meilleure résistance sur le long terme, le bel objet remplace ainsi le jetable.
            </v-flex>
            <v-flex mb-4 class="text-xs-justify">
              Chaque année, l’atelier produira différents modèles de planches caractéristiques, chacune sera numérotée selon l’ordre de réalisation. La fabrication sur mesure est possible, l’atelier est ouvert à toutes idées nouvelles ou personnelles.
            </v-flex>
            <v-layout row justify-end my-5>
              <v-btn block large color="primary" :to="{ name: 'technology'}">Découvrir la fabrication</v-btn>
            </v-layout>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image3" alt="image3"></v-img>
  </div>
</template>

<script>
const banner = require('@/assets/workshop_banner.jpg');
const image1 = require('@/assets/PHOTOSATELIER.jpg');
const image2 = require('@/assets/PHOTOSATELIER02.jpg');
const image3 = require('@/assets/PHOTOSATELIER03.jpg');
const placeholder = require('@/assets/lazy_loading.png');

export default {
  data: () => ({
    banner,
    image1,
    image2,
    image3,
    placeholder,
  }),
};
</script>

<style>
</style>
