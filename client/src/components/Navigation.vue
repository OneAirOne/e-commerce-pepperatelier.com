<template>
  <div>
    <v-layout row  ref="header" align-center justify-space-around
      :class="[classHome, classNav, classScrollDown, classScrollUp]"
    >
      <div class="peeper-link subheading " @click="goTo('workshop')"><a :style="styleObject">L'Atelier</a></div>
      <div class="peeper-link subheading" @click="goTo('products')"><a :style="styleObject">Snowboards</a></div>
      <div class="peeper-link subheading" @click="goTo('technology')"><a :style="styleObject">Technologie</a></div>
      <div  style="opacity: 1" @click="goTo('home')" class="header-logo">
        <img class="peeper-logo" ref="logo" src="~@/assets/logo_noir.png" alt="logo" height="80">
      </div>
      <div class="peeper-link subheading" @click="goTo('shop')"><a :style="styleObject">Points de Vente</a></div>
      <div class="peeper-link subheading" @click="openContact"><a :style="styleObject">Nous contacter</a></div>
      <peeper-cart></peeper-cart>
    </v-layout>
    <peeper-contact v-model="showDialog"></peeper-contact>
  </div>
</template>

<script>
import PeeperContact from '@/components/contact/Form';
import PeeperCart from '@/components/product/Cart';

export default {
  name: 'peeper-navigation',
  components: { PeeperContact, PeeperCart },
  data: () => ({
    scrollValue: 180,
    fontSizeSticky: '12px',
    fontSizeHome: '12px',
    classNav: 'peeper-nav',
    classScrollDown: '',
    classScrollUp: '',
    classHome: '',
    showDialog: false,
    styleObject: {
      // color: '#11161c',
      fontSize: '12px',
    },
  }),
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > this.scrollValue) {
        this.classScrollDown = 'peeper-sticky';
        this.$refs.logo.height = 60;
        // this.styleObject.color = '#11161c';
        this.styleObject.fontSize = this.fontSizeSticky;
        // this.styleObject.fontWeight = 'normal';
      }
      if (scrollY > 2 && scrollY < this.scrollValue) {
        if (this.$route.name === 'home') {
          // this.classScrollUp = 'peeper-diseapear'
        }
      }
      if (scrollY < 2) {
        this.classScrollDown = '';
        this.classScrollUp = '';
        this.styleObject.opacity = 1;
        // this.styleObject.color = '#FFFFFF';
        if (this.$route.name === 'home') {
          this.$refs.logo.height = 80;
          this.styleObject.fontSize = this.fontSizeHome;
          // this.styleObject.fontWeight = 'bold';
        } else {
          // this.styleObject.color = '#11161c';
          this.styleObject.fontSize = this.fontSizeSticky;
          this.$refs.logo.height = 80;
          // this.styleObject.fontWeight = 'normal';
        }
      }
    },
    goTo(destination) {
      this.$router.push({ name: destination });
    },
    openContact() {
      this.showDialog = !this.showDialog;
    },
  },
  mounted() {
    if (this.$route.name === 'home') {
      this.$refs.logo.height = 80;
      this.styleObject.fontSize = this.fontSizeHome;
      // this.styleObject.fontWeight = 'bold';
      this.classHome = 'peeper-home';
    } else {
      this.classHome = '';
      // this.styleObject.color = '#11161c';
      this.styleObject.fontSize = this.fontSizeSticky;
      // this.styleObject.fontWeight = 'normal';
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.peeper-nav {
  z-index: 2000;
}
.peeper-home {
  text-transform: uppercase;
  color: white !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.peeper-logo {
  padding-top: 4px;
}
.peeper-logo:hover {
  cursor: pointer;
}
.peeper-link a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  vertical-align: middle;
  font-weight: 300;
  letter-spacing: 0.025em;
  text-decoration: none;
  text-transform: uppercase;
}

/* Animation du lien */
.peeper-link a:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 20px;
  left: 20px;
  height: 2px;
  background-color:black;

  /* Préparation de notre animation */
  opacity: 0;
  transform: translateY(5px);
  transition: all .4s;
}
/* Le trait va remonter et apparaitre */
.peeper-link a:hover:after,
.peeper-link a:focus:after {
  opacity: .6;
  transform: translateY(0);
}
/* Je vire outline car juste au-dessus je définis un style :focus */
.peeper-link a:focus {
  outline: none;
}

.peeper-sticky {
  display: flex;
  background: white;
  color: #11161c;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  animation: animScrollDown .6s;
  z-index: 2000;
}

@keyframes animScrollDown {
  0% {
    transform: translateY(-86px);
    opacity: 0;
  }
  50% {
    transform: translateY((-20px));
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}

.peeper-diseapear {
  animation: animScrollUp .7s;
}

@keyframes animScrollUp {
  0% {
  }
  50% {
  }
  100% {
  }
}
</style>
