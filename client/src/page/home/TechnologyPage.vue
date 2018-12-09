<template>
  <div>
    <h2 class="headline font-weight-light text-uppercase  text-xs-center mt-4 mb-2">Technologie</h2>
    <v-container>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column class="text-xs-justify">
            <v-flex>
              Le savoir faire d’ébéniste a orienté l’atelier Pepper vers une construction autour du bois. Le matériau est surprenant de par ses qualités si on le travaille avec respect. Le bois est naturellement l’élément principal, notamment au niveau du noyau et des chants.
            </v-flex>
            <v-flex mt-3>
              Pepper met un point d’honneur à composer avec les meilleurs matériaux. Ce confort de travail influe sur la qualité du produit. L’ambition de fabriquer des objets haut de gamme l’emporte sur la rentabilité. Les technologies mises en place à l’atelier vont dans ce sens, entre tradition et modernité.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="headline font-weight-thin text-xs-center mt-5 mb-2">Composition et matériaux</div>
    <v-img class="peeper-schema" :src="image1" alt="image1">
      <v-layout
        slot="placeholder"
        align-center
        justify-center
        ma-0
      >
        <v-img :src="placeholder" max-height="50" contain></v-img>
      </v-layout>
    </v-img>
    <v-img class="peeper-schema-mobile" :src="image1Mobile" alt="imageMobile1"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">L’âme du snowboard : le noyau</div>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column class="text-xs-justify">
            <v-flex>
              L’âme du snowboard, le noyau, est constitué à 100% de bois de fil en utilisant les qualités de chaque essence aux endroits où il convient de les exploiter. Il donne son caractère principal à la planche, et la rend unique de part ses propriétés aussi bien dans son shape que dans sa composition.
            </v-flex>
            <v-flex mt-3 mb-5>
              Les chants en robinier sont étuvés afin d’épouser la forme du snowboard et l’ensemble du noyau est ceinturé par ces bandes de bois. Il n’y a donc pas de partie en « bois de bout » mais uniquement une ceinture de « travers fil » ce qui donne une grande résistance aux chants du snowboard.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image2" alt="image2"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">Un travail à l’épure</div>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column class="text-xs-justify">
            <v-flex>
              Le métier d’ébéniste est un métier manuel de tradition. A l’atelier, tout se fait à «l’épure» comme pour la recherche d’un pied louis XV, la forme générale est d’abord tracée puis reportée sur un gabarit de bois. Vient ensuite un long travail de recherche où la courbe est affinée petit à petit, dixième de millimètre par dixième de millimètre jusqu’à atteindre la courbe idéale qui donnera le gabarit final. Il en résulte des courbes tendues et non de cercle parfait. C’est pour cette raison qu’il n’est pas indiqué de radius précis mais rayon court, moyen, long, très long, variant entre 7,5m et 10m.
            </v-flex>
            <v-flex mt-3 mb-5>
              Aussi respectable que soit le travail manuel, les machines utilisées rendent possible une précision au 1/10 de millimètre avec une grande reproductibilité. Le but est de conserver un esprit de travail manuel global en utilisant des outils modernes pour produire des pièces parfaitement identiques. Par exemple, une calibreuse permet de manufacturer des noyaux identiques au 1/20 mm.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image3" alt="image3"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">Le bois, essences et assemblage</div>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column class="text-xs-justify">
            <v-flex mb-3>
              Le noyau est composé d’essences indigènes parfaitement de fil et sans aucun noeud.
            </v-flex>
            <v-flex>
              Le frêne : bois souple et dur avec un module d’élasticité élevé, lourd.
            </v-flex>
            <v-flex>
              Le bouleau : bois souple et tendre avec un module d’élasticité élevé, lourd.
            </v-flex>
            <v-flex>
              Le peuplier : bois souple et tendre avec un module d’élasticité respectable, léger.
            </v-flex>
            <v-flex>
              Le bankirai : bois exotique aussi appelé bois de fer extrêmement dur, module d’élasticité très élevé, très lourd.
            </v-flex>
            <v-flex>
              Le robinier : bois souple et dur, imputrescible avec un bon module d’élasticité de densité moyenne.
            </v-flex>
            <v-flex mt-3>
              Chaque bois à des qualités particulières :
            </v-flex>
            <v-flex>
              Les bois durs servent aux endroits stratégiques du snowboard : bandes des inserts, prise de carres. Ils donnent du caractère à la planche.
              Les bois plus tendres servent à alléger la construction et à donner plus de souplesse.
            </v-flex>
            <v-flex my-3>
              Les lattes de bois s’étendent d’une extrémité à l’autre du snowboard. La fibre du bois se développe ainsi du nose au tail afin de conserver au mieux les propriétés des essences, tout en solidité. Il n’y a pas de raboutage comme sur la plupart des snowboards industriels.
            </v-flex>
            <v-flex mb-5>
              Le top sheet du snowboard est réalisé en bois également selon la tradition de l’ébénisterie. Les différentes essences sont sélectionnées en fonction de leur caractère esthétique, révélé par le vernis. Les bois présentent naturellement des teintes et des veinages variées, du rouge du padouk au violet du de L’amarante, il est important pour l’ébéniste de partager cette richesse naturelle. Le placage se présente sous formes de feuilles de bois de 0,6mm d’épaisseur.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image4" alt="image4"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">Les fibres</div>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column class="text-xs-justify">
            <v-flex>
              Les planches sont dotées de fibre de verre triaxiale : elle apporte un flex régulier en limitant la torsion, il n’y a pas de point dur comme avec le carbone.
            </v-flex>
            <v-flex>
              La fibre d’aramide sert de renfort sur la queue du swallow.
            </v-flex>
            <v-flex>
              Les renforts en fibre de carbone sont présents pour un meilleur touché de neige et une prise de carre rapide.
            </v-flex>
            <v-flex mb-5>
              La liaison carres chants se fait via une bande caoutchouc qui va absorber les déformation de la planche.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image5" alt="image5"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">Presse à vide et résine</div>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column class="text-xs-justify">
            <v-flex mb-5>
              Le liant de tout les matériaux du snowboard est la résine, elle les fige selon le cambre souhaité. Cette étape est donc décisive lors de la fabrication. Les planches sont pressées à vide, celà garanti un travail de qualité. Les snowboards prennent forme grâce à la simple pression atmosphérique : pression de 1gk/cm2, elle s’effectue dans tous les sens d’une manière homogène. La résine utilisée est à prise lente pour évacuer jusqu’à la plus petite bulle d’air. La stratification se fait a 65° ce qui permet une bonne polymérisation tout en fluidifiant la résine. Les planches sont sous presse pendant 10h. Cette technique demande du temps, elle est donc moins utilisée dans l’industrie malgré son intérêt certain. La résine pénètre le bois progressivement pour une déformation en douceur et réussie.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image6" alt="image6"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">La semelle</div>
      <v-layout row justify-center>
        <v-flex xs10 md8>
          <v-layout column class="text-xs-justify">
            <v-flex mb-5>
              Surface en contact avec la neige, la semelle est à l’origine de la glisse. Constituée de petex 5920 enrichie au carbone, elle est très dense donc solide et durable dans le temps. L’artisan prend soin de la poncer à grain très fin et de la raser pour enlever les micros poils : la matière devient ultra glissante. Les snowboards sont fartés à chaud au fer : ils sont prêt à l’emploi pour une première sortie digne de ce nom.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image7" alt="image7"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">Le Vernis</div>
      <v-layout row justify-center class="text-xs-justify">
        <v-flex xs10 md8>
          <v-layout column>
            <v-flex mb-5>
             Dernière étape, le vernis est appliqué en surface sur les bois extérieurs. Il protège et met en valeur le support en formant un film brillant. Une version matte est possible pour des commandes personnalisées. Les produits utilisés sont résistants aux conditions atmosphériques les plus difficiles comme l’humidité, le froid et la neige et contiennent notamment un agent anti UV. Le bois est poncé très fin lors de la préparation pour un rendu esthétique élevé. L’aspect physique des essences est révélé au mieux : la couleur, les grains, les singularités du bois sont amplifiés et parfois visibles uniquement suite à cette étape. Quatres couches de fond dur marine et deux couches de vernis de carroserie sont appliquées sur chaque planche. Ces six couches nécessitent de longs temps de séchage mais sont essentielles compte tenu des conditions auquelles seront soumis les snowboards. Le vernis n’est pas pour autant indestructible et sera quoiqu’il arrive sujet à des rayures. Pour un rendu impeccable et durable, un entretien semblable à celui d’une voiture est nécessaire, notamment avec l’utilisation du polish.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img :src="image8" alt="image8"></v-img>
    <v-container>
      <div class="headline font-weight-thin text-xs-center my-5">Conseils et entretien</div>
      <v-layout row justify-center class="text-xs-justify">
        <v-flex xs10 md8>
          <v-layout column>
            <v-flex mb-5>
              Les produits Pepper sont fabriqués avec soin pour une glisse des plus agréable. Ils sont produit en très petite série, de l’ordre de 5 planches par modèle en moyenne, et sont pour ainsi dire uniques car chaque pièce dispose de ses particularités. L’esprit Pepper a pour volonté de fabriquer des objets haut de gamme mais aussi des objets durables. Ils possèdent toutes les qualités nécessaires pour résister dans le temps, celà s’accompagne aussi d’un entretien adapté. N’hésitez pas a prendre contact avec l’atelier pour une remise a neuf de votre matériel.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
const image1 = require('@/assets/PHOTOS_TECHNO.jpg');
const image1Mobile = require('@/assets/PHOTOS_TECHNO_MOBILE.jpg');
const image2 = require('@/assets/PHOTOS_TECHNO2.jpg');
const image3 = require('@/assets/PHOTOS_TECHNO3.jpg');
const image4 = require('@/assets/PHOTOS_TECHNO4.jpg');
const image5 = require('@/assets/PHOTOS_TECHNO5.jpg');
const image6 = require('@/assets/PHOTOS_TECHNO6.jpg');
const image7 = require('@/assets/PHOTOS_TECHNO7.jpg');
const image8 = require('@/assets/PHOTOS_TECHNO8.jpg');
const placeholder = require('@/assets/logo_noir.png');

export default {
  data: () => ({
    image1,
    image1Mobile,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    placeholder,
  }),
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .peeper-schema {
    display:none;
  }
}
@media screen and (min-width: 961px) {
  .peeper-schema-mobile {
    display:none;
  }
}
</style>
